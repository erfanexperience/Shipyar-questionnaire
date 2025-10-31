const { Pool } = require('pg');
const config = require('./config');

// First connect to default postgres database to create our database
const defaultPool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres', // Connect to default database
  password: '123321',
  port: 5432,
});

async function setupDatabase() {
  try {
    // Connect to default postgres database
    const client = await defaultPool.connect();
    console.log('✅ Connected to PostgreSQL');

    // Create database if it doesn't exist
    await client.query('CREATE DATABASE shippyar_questionnaire');
    console.log('✅ Database created');
    
    client.release();
  } catch (error) {
    if (error.code === '42P04') {
      console.log('✅ Database already exists');
    } else {
      console.error('Error creating database:', error);
    }
  }

  await defaultPool.end();

  // Now connect to our specific database to create table
  const pool = new Pool(config.database);
  
  try {
    const client = await pool.connect();
    
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
