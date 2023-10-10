const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../config.js');

/**
 *
 * @param number:number
 * @description 
 *    scrapping daftar anime 
 * @example await fetchAnimeListData(default:1)
 * @returns json 
 */
const fetchAnimeListData = async ({ url, params }) =>
{
  try {
    const html = await axios.get(config.BASE_URL + url + params);
    const $ = cheerio.load(html.data);
    const result = [];

    $('article.bs').find('div.bsx').each((index, element) => {
      const image = $(element).find('img');
      const title = $(element).find('div.tt > h2').text();
      const slug = $(element).find('a').attr('href').split('/');
      const status = $(element).find('div.status').text();
      const episod = $(element).find('div.bt').find('span.epx').text();
      const type = $(element).find('div.typez').text();

      result.push({
        image: image.attr('data-src') ?? image.attr('src'),
        title,
        slug: slug[slug.length -2 ],
        status: status ? status : episod,
        type
      });
    });
      
    return result;

  } catch (error) {
    throw {
      message: 'BASE_URL error',
      status: 500
    };
  }
}

/**
 *
 * @param undefined
 * @description 
 *    scrapping daftar anime mode text
 * @example await fetchAnimeDetailData()
 * @returns json 
 */
const fetchAnimeListModeData = async () => 
{
  try {
    const html = await axios.get(config.BASE_URL + '/anime/list-mode/');
    const $ = cheerio.load(html.data);
    const result = [];
    
    $('div.blix').each((index, element) => {
      const initials = $(element).find('span:first-child').text();
      const listAnime = $(element).find('ul li').map((i, el) => {
        const title = $(el).text();
        const slug = $(el).find('a').attr('href').split('/');

        return { title, slug: slug[slug.length - 2] };
      }).get();

      result.push({
        initials,
        list_anime: listAnime,
      });      
    });

    return result;

  } catch (error) {
    throw {
      message: 'BASE_URL error',
      status: 500
    };
  }
}

/**
 *
 * @param slug:string 
 * @description 
 *    scrapping detail anime 
 * @example await fetchDetailAnimeData('yosuga-no-sora')
 * @returns json 
 */
const fetchAnimeDetailData = async (slug) => {
  try {
    const html = await axios.get(config.BASE_URL + '/anime/' + slug);
    const $ = cheerio.load(html.data);

    const result = [];

    $('div.bigcontent').each((index, element) => {
      const image = $(element).find('.thumb > img');
      const thumbnail = $('.bigcover').find('.ime > img');
      const title = $(element).find('.infox > h1').text();
      const status = $(element).find('.spe > span').eq(0).text().replace('Status:','');
      const genre = $(element).find('.genxed > a').text().match(/[A-Z][a-z]*/g);

      const episode = $('div.eplister').find('ul li').map((i, el) => {
        const title = $(el).find('.epl-title').text();
        const slug = $(el).find('a').attr('href').split('/');
        const eps = $(el).find('.epl-num').text();
        const date = $(el).find('.epl-date').text();

        return { title, slug: slug[slug.length - 2], eps, date };

      }).get();

      const rating = $(element).find('.rating > strong').text();
      const trailer = $(element).find('.trailerbutton').attr('href');
      const list1 = $(element).find('.spe > span').eq(1).text();
      const list2 = $(element).find('.spe > span').eq(2).text();
      const list3 = $(element).find('.spe > span').eq(3).text();
      const list4 = $(element).find('.spe > span').eq(4).text();
      const list5 = $(element).find('.spe > span').eq(5).text();
      const list6 = $(element).find('.spe > span').eq(6).text();
      const list7 = $(element).find('.spe > span').eq(7).text();

      result.push({
        image: image.attr('data-src') ?? image.attr('src'),
        thumbnail: thumbnail.attr('data-src') ?? thumbnail.attr('src'),
        title,
        status,
        genre,
        episode,
        trailer,
        rating,
        information: [
          list1, list2, list3, list4,
          list5, list6, list7
        ]
      });
    });

    return result;

  } catch (error) {
    throw {
      message: 'BASE_URL error',
      status: 500
    };
  }
}

/**
 *
 * @param number:number
 * @description 
 *    scrapping daftar anime update
 * @example await fetchAnimeUpdateData(default:1)
 * @returns json 
 */
const fetchAnimeUpdateData = async (number = 1) =>
{
  try {
    const html = await axios.get(config.BASE_URL + '/page/' + number);
    const $ = cheerio.load(html.data);
    const result = [];

    $('article.seventh').each((index, element) => {
      const image = $(element).find('.thethumb a > img');
      const thumbnail = $(element).find('.main-seven').find('.limit > img');
      const title = $(element).find('h2[itemprop=headline]').text();
      const slug = $(element).find('.main-seven a').attr('href').split('/');
      const type = $(element).find('.bt').find('.type').text();
      const information = $(element).find('.sosev span:last-child').text();
      const episode = $(element).find('.limit').find('div.epin').text();

      result.push({
        image: image.attr('data-src') ?? image.attr('src'),
        thumbnail: thumbnail.attr('data-src') ?? thumbnail.attr('src'),
        title,
        slug: slug[slug.length - 2],
        type,
        information,
        episode
      });
    });

    return result;
  } catch (error) {
    throw {
      message: 'BASE_URL error',
      status: 500
    };
  }
}

/**
 *
 * @param undefined
 * @description 
 *    scrapping data jadwal anime 
 * @example await fetchAnimeRealeseData()
 * @returns json
 */
const fetchAnimeScheduleData = async () =>
{
  try {
    const html = await axios.get(config.BASE_URL + '/jadwal-rilis-anime');
    const $ = cheerio.load(html.data);
    const result = [];

    $('div.schedulepage').each((index, element) => {
      const hours = $(element).find('div.releases h3').text();
      const listAnime = $(element).find('.listupd').find('.bs').map((i, el) => {
        const image = $(el).find('.limit > img');
        const title = $(el).find('.tt').text();
        const slug = $(el).find('.bsx > a').attr('href').split('/');
        const episode = $(el).find('.bt').find('.sb.Sub').text();
        const time = $(el).find('.bt').find('.epx.cndwn').text().replace('pada', '');

        return {
          image: image.attr('data-src') ?? image.attr('src'),
          title,
          slug: slug[slug.length - 2],
          episode,
          time,
        };
      }).get();

      result.push({
        hours,
        list_anime: listAnime
      });
    });
    
    return result;

  } catch (error) {
    throw {
      message: 'BASE_URL error',
      status: 500 
    };
  }
}

/**
 *
 * @param undefined
 * @description 
 *    scrapping data daftar anime yang akan dirilis
 *    musim depan
 * @example await fetchAnimeRealeseData()
 * @returns json
 */
const fetchAnimeUpcomingData = async (page = 1) =>
{
  try {
    const html = await axios.get(config.BASE_URL + '/daftar-anime-sub-indo-yang-akan-dirilis-musim-depan/page/' + page);
    const $ = cheerio.load(html.data);
    const result = [];

    $('div.listupd.cp').find('article.bs').each((index, element) => {
      const image = $(element).find('.limit > img');
      const title = $(element).find('h2[itemprop=headline]').text();
      const slug = $(element).find('.bsx > a').attr('href').split('/');
      const type = $(element).find('.typez').text();
      const status = $(element).find('.epx').text();


      result.push({
        image: image.attr('data-src') ?? image.attr('src'),
        title,
        slug: slug[slug.length - 2],
        type,
        status
      });
    });

    return result;

  } catch (error) {
    throw {
      message: 'BASE_URL error',
      status: 500 
    };
  }
}

/**
 *
 * @param slug:string
 * @description 
 *    scrapping video anime
 * @example await fetchVideoPlayerData('yosuga-no-sora')
 * @returns json
 */
const fetchVideoPlayerData = async (slug) =>
{
  try {
    const html = await axios.get(config.BASE_URL + '/' + slug)
    const $ = cheerio.load(html.data)

    const base64 = $('.mobius').find('select option')
    const mirror = base64.map((index, element) => {
      const value = $(element).attr('value')
      const decode = atob(value)
      const src = $(decode).find('source').attr('src')
      return src
    }).get()
    
    return { 
      url: mirror
    };

  } catch (error) {
    throw {
      message: 'BASE_URL error',
      status: 500 
    };
  }
}

module.exports = 
{
  fetchAnimeListData,
  fetchAnimeListModeData,
  fetchAnimeDetailData,
  fetchAnimeUpdateData,
  fetchAnimeScheduleData,
  fetchAnimeUpcomingData,
  fetchVideoPlayerData
};