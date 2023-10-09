import express from 'express';
import cors from 'cors'
import animeRoutes from './routes/animeRoutes.js'

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Izinkan domain ini
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Metode HTTP yang diizinkan
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Header tambahan yang diizinkan
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // Izinkan pengiriman kredensial (seperti cookies)

  next();
});
app.use(animeRoutes)
app.use(cors())

app.listen(3000, () => console.log('Anime API on ready 🚀'))

