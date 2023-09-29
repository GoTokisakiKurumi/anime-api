const scrapper = require("../utils/scrapper.js");

/**
 *
 * @param req:any and res:any
 * @description menampilkan text ke web 
 * @returns void 
 */
const home = async (req, res) =>
{
  res.status(200).send('Anime API is ready 🚀');
};

/**
 *
 * @param req:any and res:any 
 * @description 
 *    mengambil data daftar anime 
 *    yang sudah disediakan dari
 *    module scrapper
 * @returns void 
 */
const fetchAnimeList = async (req, res) =>
{
  try {
    const page = req.query.page ?? 1;
    const data = await scrapper.fetchAnimeListData({
      url: '/anime/',
      params: `?page=${page}`
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 *
 * @param req:any and res:any 
 * @description 
 *    mengambil data daftar anime mode text 
 *    yang sudah disediakan dari
 *    module scrapper
 * @returns void 
 */
const fetchAnimeListMode = async (req, res) =>
{
  try {
    const data = await scrapper.fetchAnimeListModeData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 *
 * @param 
 *    req:any and res:any 
 *    url:string,
 *    params:string
 * @description 
 *    mengambil data daftar anime movie
 *    yang sudah disediakan dari
 *    module scrapper
 * @returns void 
 */
const fetchAnimeMovie = async (req, res) =>
{
  try {
    const data = await scrapper.fetchAnimeListData({
      url: '/anime/',
      params: '?type=movie&order=update'
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 *
 * @param 
 *    req:any and res:any 
 *    url:string
 *    params:string
 * @description 
 *    mengambil data daftar anime ongoing
 *    yang sudah disediakan dari
 *    module scrapper
 * @returns void 
 */
const fetchAnimeOngoing = async (req, res) =>
{
  try {
    const data = await scrapper.fetchAnimeListData({
      url: '/anime/',
      params: '?status=ongoing&order=update'
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 *
 * @param 
 *    req:any and res:any 
 *    url:string
 *    params:string
 * @description 
 *    mengambil data daftar anime completed
 *    yang sudah disediakan dari
 *    module scrapper
 * @returns void 
 */
const fetchAnimeCompleted = async (req, res) =>
{
  try {
    const page = req.query.page ?? 1;
    const data = await scrapper.fetchAnimeListData({
      url: '/anime/',
      params: `?page=${page}&status=completed&order=update`
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 *
 * @param req:any and res:any 
 * @description 
 *    mengambil data detail anime 
 *    yang sudah disediakan dari
 *    module scrapper
 * @returns void 
 */
const fetchAnimeDetail = async (req, res) =>
{
  try {
    const params = req.params.slug;
    const data = await scrapper.fetchAnimeDetailData(params);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 *
 * @param req:any and res:any 
 * @description 
 *    mengambil data daftar anime update
 *    yang sudah disediakan dari
 *    module scrapper
 * @returns void 
 */
const fetchAnimeUpdate = async (req, res) =>
{
  try {
    const page = req.query.page ?? 1;
    const data = await scrapper.fetchAnimeUpdateData(page);
    console.log(data.length);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 *
 * @param req:any and res:any 
 * @description 
 *    mengambil daftar jadwal anime 
 *    yang sudah disediakan dari
 *    module scrapper
 * @returns void 
 */
const fetchAnimeSchedule = async (req, res) =>
{
  try {
    const data = await scrapper.fetchAnimeScheduleData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 *
 * @param req:any and res:any 
 * @description 
 *    mengambil daftar jadwal anime yang akan
 *    dirilis musim depan 
 *    yang sudah disediakan dari
 *    module scrapper
 * @returns void 
 */
const fetchAnimeUpcoming = async (req, res) =>
{
  try {
    const page = req.query.page ?? 1;
    const data = await scrapper.fetchAnimeUpcomingData(page);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 *
 * @param req:any and res:any 
 * @description 
 *    mengambil data video player anime 
 *    yang sudah disediakan dari
 *    module scrapper
 * @returns void 
 */
const fetchVideoPlayer = async (req, res) =>
{
  try {
    const params = req.params.slug;
    const data = await scrapper.fetchVideoPlayerData(params);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
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
  fetchVideoPlayer
};