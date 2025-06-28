const express = require('express')
const bodyparser = require('body-parser')
const nodemailer = require('nodemailer');
const cors = require('cors')
const path = require('path');
const { Client } = require('pg');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const app = express()
const requestRouter = require('./routes/request');
const adminRouter = require('./routes/admin');

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
            resolved BOOLEAN DEFAULT FALSE,
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

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '2h' });
    return res.json({ token });
  }

  res.status(401).json({ error: 'Invalid credentials' });
});

app.use('/api/request', requestRouter({ dbClient: db, emailTransporter: transporter }));
app.use('/admin/requests',  adminRouter({ dbClient: db }));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})





//////////////////////////////////////////////////
///////////// For testing database ///////////////

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