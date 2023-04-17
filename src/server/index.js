require('dotenv').config();

const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.static('dist'));

// Adding an API endpoint for handling the form data
app.post('/api/analyze', async (req, res) => {
  try {
    const API_KEY = process.env.API_KEY;
    const text = req.body.text;
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&lang=en&url=${text}`;
    const response = await fetch(url);
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
