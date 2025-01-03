const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sajid123456',
  database: 'Research_Hub',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  }
  console.log('Database connected!');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM login_db WHERE email = ? AND password = ?';

  db.query(query, [email, password], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.json({ success: true, message: 'User login successful' });
    } else {
      res.json({ success: false, message: 'Invalid email or password' });
    }
  });
});

app.post('/register', (req, res) => {
  const { name, email, age, password } = req.body;
  const query = 'INSERT INTO registration_db (name, email, age, password) VALUES (?, ?, ?, ?)';

  db.query(query, [name, email, age, password], (err, result) => {
    if (err) throw err;
    res.json({ success: true, message: 'User registration successful' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
