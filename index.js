import express from 'express';
import animeRoutes from './routes/animeRoutes.js'

const app = express()

app.use(animeRoutes)

app.listen(3000, () => console.log('Anime API on ready 🚀'))