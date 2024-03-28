require('dotenv').config()
const { Client } = require('pg');

// If there is a .env for DATABASE_URL use that, otherwise use local postgres
const connectionString = process.env.DATABASE_URL || 'http://localhost:5432/capstone-test';

console.log(connectionString)
const db = new Client({
    connectionString,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

module.exports = db;
