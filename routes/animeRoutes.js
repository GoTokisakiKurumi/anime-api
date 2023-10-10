const express = require('express');
const animeController = require('../controllers/animeController.js');

const router = express.Router();

router.get('/', animeController.home);
router.get('/anime', animeController.fetchAnimeList);
router.get('/anime/list-mode', animeController.fetchAnimeListMode);
router.get('/anime/movie', animeController.fetchAnimeMovie);
router.get('/anime/ongoing', animeController.fetchAnimeOngoing);
router.get('/anime/completed', animeController.fetchAnimeCompleted);
router.get('/anime/detail/:slug', animeController.fetchAnimeDetail);
router.get('/anime/update', animeController.fetchAnimeUpdate);
router.get('/anime/schedule', animeController.fetchAnimeSchedule);
router.get('/anime/upcoming', animeController.fetchAnimeUpcoming);
router.get('/anime/video/:slug', animeController.fetchVideoPlayer);

module.exports = router;