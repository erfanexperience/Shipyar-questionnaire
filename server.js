const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const { google } = require('googleapis');
const config = require('./config');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PostgreSQL connection - uses environment variables if available (Render), otherwise local config
const pool = new Pool(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.DATABASE_URL.includes('render.com') ? { rejectUnauthorized: false } : false
      }
    : {
        user: process.env.PGUSER || 'postgres',
        host: process.env.PGHOST || 'localhost',
        database: process.env.PGDATABASE || 'shippyar_questionnaire',
        password: process.env.PGPASSWORD || '123321',
        port: process.env.PGPORT || 5432,
      }
);

// Google Sheets setup - uses environment variable if available (Render), otherwise file
let auth;
try {
  if (process.env.GOOGLE_CREDENTIALS) {
    // Try to parse the credentials - handle if it's a string or already JSON
    let credentials = process.env.GOOGLE_CREDENTIALS;
    // Remove surrounding quotes if present
    if (credentials.startsWith('"') && credentials.endsWith('"')) {
      credentials = credentials.slice(1, -1);
    }
    // Parse the JSON
    const parsedCredentials = JSON.parse(credentials);
    auth = new google.auth.GoogleAuth({
      credentials: parsedCredentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    console.log('✅ Google Sheets auth configured from environment variable');
  } else {
    auth = new google.auth.GoogleAuth({
      keyFile: 'credentials.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    console.log('✅ Google Sheets auth configured from credentials.json file');
  }
} catch (error) {
  console.error('❌ Error setting up Google Sheets authentication:', error.message);
  console.log('⚠️ Continuing without Google Sheets integration...');
  // Create a dummy auth object to prevent crashes
  auth = null;
}

const sheets = auth ? google.sheets({ version: 'v4', auth }) : null;

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err);
  } else {
    console.log('✅ Connected to PostgreSQL database');
    release();
  }
});

// Create table if it doesn't exist
const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS questionnaire_responses (
      id SERIAL PRIMARY KEY,
      full_name VARCHAR(255),
      email VARCHAR(255),
      country VARCHAR(255),
      preferred_language VARCHAR(50),
      how_heard VARCHAR(255),
      user_type VARCHAR(255),
      age_group VARCHAR(50),
      answers JSONB,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  try {
    await pool.query(query);
    console.log('✅ Database table created/verified');
  } catch (err) {
    console.error('Error creating table:', err);
  }
};

// Initialize database
createTable();

// API endpoint to submit questionnaire
app.post('/api/submit-questionnaire', async (req, res) => {
  try {
    const {
      fullName,
      email,
      country,
      preferredLanguage,
      howHeard,
      userType,
      ageGroup,
      answers
    } = req.body;

    // Insert into PostgreSQL
    const insertQuery = `
      INSERT INTO questionnaire_responses 
      (full_name, email, country, preferred_language, how_heard, user_type, age_group, answers)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id
    `;

    const values = [
      fullName,
      email,
      country,
      preferredLanguage,
      howHeard,
      userType,
      ageGroup,
      JSON.stringify(answers)
    ];

    const result = await pool.query(insertQuery, values);
    const responseId = result.rows[0].id;

    // Add to Google Sheets
    await addToGoogleSheets({
      id: responseId,
      fullName,
      email,
      country,
      preferredLanguage,
      howHeard,
      userType,
      ageGroup,
      answers,
      timestamp: new Date().toISOString()
    });

    res.json({
      success: true,
      message: 'Questionnaire submitted successfully',
      id: responseId
    });

  } catch (error) {
    console.error('Error submitting questionnaire:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting questionnaire',
      error: error.message
    });
  }
});

// Function to add data to Google Sheets
const addToGoogleSheets = async (data) => {
  if (!sheets) {
    console.log('⚠️ Google Sheets integration not available, skipping...');
    return;
  }
  
  try {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID || config.googleSheets.sheetId;
    const range = 'Sheet1!A:K'; // Adjust range as needed

    const values = [
      [
        data.id,
        data.fullName,
        data.email,
        data.country,
        data.preferredLanguage,
        data.howHeard,
        data.userType,
        data.ageGroup,
        JSON.stringify(data.answers),
        data.timestamp,
        'Submitted'
      ]
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      resource: {
        values
      }
    });

    console.log('✅ Data added to Google Sheets');
  } catch (error) {
    console.error('Error adding to Google Sheets:', error);
  }
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});
