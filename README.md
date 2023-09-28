<p align="center">
    <a href="https://github.com/LutfiAuliaSidik/anime-api">
        <img src="images/kurumi.jpg" alt="Logo" width="105" height="105" />
    </a>
    <h3 align="center">anime API</h3>
    <p align="center">
        <samp>rest API streaming anime gratis yang menyajikan anime dari <a href="https://sojuka.bar/">Sojuka</a></samp>
        <br />
        <a href="#routes"><strong>Jelajahi api</strong></a>
        <br />
        <br />
        <a href="https://github.com/LutfiAuliaSidik/anime-api/issues/new?assignees=LutfiAuliaSidik&labels=bug&template=bug-report.yml">Bug report</a>
        ·
        <a href="https://github.com/LutfiAuliaSidik/anime-api/issues/new?assignees=LutfiAuliaSidik&labels=enhancement&template=feature-request.md">Feature request</a>
    </p>
    <p align="center">
        <a href="https://github.com/LutfiAuliaSidik/anime-api">
            <img src="https://img.shields.io/github/stars/LutfiAuliaSidik/anime-api" alt="stars">
        </a>
        <a href="https://github.com/consumet/extensions/blob/master/LICENSE">
            <img src="https://img.shields.io/github/license/consumet/extensions" alt="GitHub">
        </a>
    </p>
</p>

<h1>Table of Contents</h1>

- [Installation](#installation)
  - [Local](#local)
- [Routes](#routes)
  - [Get Anime List](#get-anime-list)
  - [Get Anime List Mode](#get-anime-list-mode)
  - [Get Anime List Movies](#get-anime-list-movies)
  - [Get Anime List Ongoing](#get-anime-list-ongoing)
  - [Get Anime List Completed](#get-anime-list-completed)
  - [Get Anime Details](#get-anime-details)
  - [Get Anime Update](#get-anime-update)
  - [Get Anime Schedule](#get-anime-schdule)
  - [Get Anime Upcoming](#get-anime-upcoming)
  - [Get Anime Streaming Url](#get-anime-streaming-url)

## Installation

### Local
Jalankan perintah berikut untuk mengkloning repositori, dan menginstal dependensi:

```sh
git clone https://github.com/LutfiAuliaSidik/anime-api.git
cd anime-api
npm install

mulai server dengan perintah berikut:

npm start
```
Sekarang server sedang berjalan di http://localhost:3000

## Routes

dibawah ini kamu akan menemukan cara penggunaan fetch API
tetapi kamu dapat menggunakan library lain diluar sana.

### Get Anime List

| Parameter    | Description                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `page` (int) | secara default `page` value nya `1` dan ini akan mengahasilkan 50 daftar anime per `page` nya.<br> Contoh:  `/anime?page=2` |

```js
async function main () {
    const response = await fetch('http://localhost:3000/anime?page=2')
    const data = response.json()
    console.log(data)
}
main()
```
Hasilnya >>

```json
[
  {
    "image": "https://sokuja.in/wp-content/uploads/2022/09/fma3.jpeg",
    "title": "Fullmetal Alchemist: Brotherhood Subtitle Indonesia",
    "slug": "fullmetal-alchemist-brotherhood-subtitle-indonesia",
    "status": "Completed",
    "type": "TV"
  }, {...}
]

```

### Get Anime List Mode

ini akan mengambil daftar anime berdasarkan inisial huruf dari A sampai Z

```js
async function main () {
    const response = await fetch('http://localhost:3000/anime/list-mode')
    const data = response.json()
    console.log(data)
}
main()
```
Hasilnya >>

```json
[
  {
    "initials": "A", 
    "list_anime": [
    {
      "title": "AI no Idenshi Subtitle Indonesia",
      "slug": "ai-no-idenshi-subtitle-indonesia"
    },
    {
      "title": "Akiba Meido Sensou Subtitle Indonesia",
      "slug": "akiba-meido-sensou"
    },
    {
      "title": "Akuyaku Reijou nanode Last Boss wo Kattemimashita Subtitle Indonesia",
      "slug": "akuyaku-reijou-nanode-last-boss-wo-kattemimashita-subtitle-indonesia"
    }, {...}
  },
  {
    "initials": "B",
    "list_anime": [
    {
      "title": "Benriya Saitou-san, Isekai ni Iku Subtitle Indonesia",
      "slug": "benriya-saitou-san-isekai-ni-iku-subtitle-indonesia"
    },
    {
      "title": "Black Clover Subtitle Indonesia",
      "slug": "black-clover-subtitle-indonesia"
    }, {...}
  }, {...}
]

```




