import express from 'express';
import cors from 'cors'
import animeRoutes from './routes/animeRoutes.js'

const app = express()

app.use(animeRoutes)
app.use(cors())

app.listen(3000, () => console.log('Anime API on ready 🚀'))

