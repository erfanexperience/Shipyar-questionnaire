const { Pool } = require('pg');

// Use Render database URL if available, otherwise use local config
const databaseUrl = process.env.DATABASE_URL;

async function setupDatabase() {
  let pool;
  
  if (databaseUrl) {
    // Render database - database already exists, just create table
    pool = new Pool({
      connectionString: databaseUrl,
      ssl: databaseUrl.includes('render.com') ? { rejectUnauthorized: false } : false
    });
  } else {
    // Local database setup
    const config = require('./config');
    pool = new Pool(config.database);
  }

  try {
    const client = await pool.connect();
    console.log('✅ Connected to PostgreSQL');
    
    const createTableQuery = `
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
    
    await client.query(createTableQuery);
    console.log('✅ Table created successfully');
    
    client.release();
  } catch (error) {
    console.error('Error creating table:', error);
  }

  await pool.end();
}

setupDatabase();
