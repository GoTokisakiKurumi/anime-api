import express from 'express'
import { 
  home,
  fetchAnimeList,
  fetchAnimeListMode,
  fetchAnimeMovie,
  fetchAnimeOngoing,
  fetchAnimeCompleted,
  fetchAnimeDetail,
  fetchAnimeUpdate,
  fetchAnimeSchedule,
  fetchAnimeUpcoming,
  fetchVideoPlayer,
} from '../controllers/animeController.js'

const router = express.Router()

router.get('/', home)
router.get('/anime', fetchAnimeList)
router.get('/anime/page/:number', fetchAnimeList)
router.get('/anime/list-mode', fetchAnimeListMode)
router.get('/anime/movie', fetchAnimeMovie)
router.get('/anime/ongoing', fetchAnimeOngoing)
router.get('/anime/completed/:number?', fetchAnimeCompleted)
router.get('/anime/detail/:slug', fetchAnimeDetail)
router.get('/anime/update/:number?', fetchAnimeUpdate)
router.get('/anime/schedule', fetchAnimeSchedule)
router.get('/anime/upcoming/:number?', fetchAnimeUpcoming)
router.get('/anime/video/:slug', fetchVideoPlayer)

export default router
