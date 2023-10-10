const express = require('express');
const animeRoutes = require('./routes/animeRoutes.js');
const cors = require('cors')
const app = express();

app.use(cors())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  next();
});

app.use(animeRoutes);

app.listen(3000, () => console.log('Anime API on ready 🚀'));
