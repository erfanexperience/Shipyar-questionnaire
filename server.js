const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const { google } = require('googleapis');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'shippyar_questionnaire',
  password: '123321',
  port: 5432,
});

// Google Sheets setup
const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials.json', // You'll need to create this
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

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
  try {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID; // You'll need to set this
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
