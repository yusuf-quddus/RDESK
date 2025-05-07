const express = require('express')
const bodyparser = require('body-parser')
const nodemailer = require('nodemailer');
const cors = require('cors')
const path = require('path');
const rateLimit = require('express-rate-limit');
const { Client } = require('pg');
require('dotenv').config()

const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use(express.static(path.join(__dirname, 'dist')));


const db = new Client({
    user: process.env.RDS_USERNAME,
    host: process.env.RDS_HOSTNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    ssl: { rejectUnauthorized: false }
});


db.connect().then(() => { 
    console.log('Connected to PostgreSQL database!'); 
}).catch((err) => { 
    console.error('Error connecting to the database:', err); 
});


const createTableIfNotExists = async () => {
    const checkTableQuery = `
      SELECT EXISTS (
        SELECT 1
        FROM pg_catalog.pg_tables
        WHERE schemaname = 'public' AND tablename = 'requests'
      );
    `;
  
    try {
      const res = await db.query(checkTableQuery);
      const tableExists = res.rows[0].exists;
  
      if (!tableExists) {
        console.log('Table "requests" does not exist. Creating table...');
        
        const createTableQuery = `
          CREATE TABLE requests (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            subject VARCHAR(200),
            service VARCHAR(100),
            compliance VARCHAR(100),
            it_service VARCHAR(100),
            message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          );
        `;
        
        await db.query(createTableQuery);
        console.log('Table "requests" created successfully!');
      } else {
        console.log('Table "requests" already exists.');
      }
    } catch (err) {
      console.error('Error checking or creating table:', err);
    }
};

createTableIfNotExists();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, 
    pass: process.env.EMAIL_PASSWORD,
  },
});

const requestLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: {
    error: 'Too many requests, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.post('/api/request', requestLimiter, async (req, res) => {
    const { name, email, subject, service, compliance, it_service, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.DEST_EMAIL,
      subject: `RDesk Inquiry from ${name} - ${subject}`,
      text: `From: ${name}\nEmail: ${email}\n
             ${subject}: ${service} => ${it_service}${compliance}\nmessage: ${message}`
    };

    try {
      const insertQuery = 
       `INSERT INTO requests (name, email, subject, service, compliance, it_service, message) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`;
      
      const values = [name, email, subject, service, compliance, it_service, message];
      const result = await db.query(insertQuery, values)

      await transporter.sendMail(mailOptions);

      res.status(201).json({
        message: 'Request inserted and email sent successfully!',
        data: result.rows[0],
      });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({
        err: 'An error occurred while processing the request.',
        details: err.message,
      });
    }
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})


// For testing database //

const deleteTable = async () => {
  const deleteTableQuery = `DROP TABLE IF EXISTS requests;`;

  try {
    await db.query(deleteTableQuery);
    console.log('Table "requests" deleted successfully!');
  } catch (err) {
    console.error('Error deleting table:', err);
  }
};

const printAllRows = async () => {
  const selectQuery = 'SELECT * FROM requests;'; 

  try {
    const result = await db.query(selectQuery);
    console.log('All rows in the "requests" table:');
    result.rows.forEach(row => {
      console.log(row);
    });
  } catch (err) {
    console.error('Error fetching rows:', err);
  }
};

// printAllRows();

// deleteTable();