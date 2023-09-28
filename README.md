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
  - [Get Anime List Update](#get-anime-list-update)
  - [Get Anime Schedule](#get-anime-schedule)
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
Sekarang server sedang berjalan di http://localhost:3000.

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

ini akan mengambil daftar anime berdasarkan inisial huruf dari A sampai Z.

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
    ]
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
    ]
  }, {...}
]

```
### Get Anime List Movies

ini akan mengambil semua daftar anime movie.

```js
async function main () {
    const response = await fetch('http://localhost:3000/anime/movie')
    const data = response.json()
    console.log(data)
}
main()
```
Hasilnya >>

```json
[
  {
    "image": "https://sokuja.in/wp-content/uploads/2022/11/one.piece_.red_.film_.jpg",
    "title": "One Piece Film: Red Subtitle Indonesia",
    "slug": "one-piece-film-red-subtitle-indonesia",
    "status": "Completed",
    "type": "Movie"
  },
  {
    "image": "https://sokuja.in/wp-content/uploads/2023/07/Suzume_no_Tojimari-3.jpg",
    "title": "Suzume no Tojimari Subtitle Indonesia",
    "slug": "suzume-no-tojimari-subtitle-indonesia",
    "status": "Completed",
    "type": "Movie"
  },
  {...}
]

```
### Get Anime List Ongoing

ini akan mengambil semua daftar anime yang status nya ongoing.

Anime `ongoing` mengacu pada seri anime yang masih dalam proses produksi dan penayangan,
ini berarti bahwa episode-episode baru dari anime tersebut terus dirilis secara berkala,
dan ceritanya belum selesai.
<br>
Oleh: `ChatGpt`


```js
async function main () {
    const response = await fetch('http://localhost:3000/anime/ongoing')
    const data = response.json()
    console.log(data)
}
main()
```
Hasilnya >>

```json
[
  {
    "image": "https://sokuja.in/wp-content/uploads/2023/08/Seiken_Gakuin_no_Makentsukai-.jpg",
    "title": "Seiken Gakuin no Makentsukai Subtitle Indonesia",
    "slug": "seiken-gakuin-no-makentsukai-subtitle-indonesia",
    "status": "Ongoing",
    "type": "TV"
  },
  {
    "image": "https://sokuja.in/wp-content/uploads/2023/07/sokuja-helck-sub-indo.jpg",
    "title": "Helck Subtitle Indonesia",
    "slug": "helck-subtitle-indonesia",
    "status": "Ongoing",
    "type": "TV"
  },
  {...}
]

```
### Get Anime List Completed

| Parameter    | Description                                                                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `page` (int) | secara default `page` value nya `1` dan ini akan mengahasilkan 50 daftar anime completed per `page` nya.<br> Contoh:  `/anime/completed?page=2` |

```js
async function main () {
    const response = await fetch('http://localhost:3000/anime/completed?page=2')
    const data = response.json()
    console.log(data)
}
main()
```
Hasilnya >>

```json
[
  {
    "image": "https://sokuja.in/wp-content/uploads/2023/02/konosuba-sidestory.jpg",
    "title": "Kono Subarashii Sekai ni Bakuen wo! Subtitle Indonesia",
    "slug": "kono-subarashii-sekai-ni-bakuen-wo-subtitle-indonesia",
    "status": "Completed",
    "type": "TV"
  },
  {
    "image": "https://sokuja.in/wp-content/uploads/2023/01/kubo-san_wa_mob_wo_yurusanai-2.jpg",
    "title": "Kubo-san wa Mob wo Yurusanai Subtitle Indonesia",
    "slug": "kubo-san-wa-mob-wo-yurusanai-subtitle-indonesia",
    "status": "Completed",
    "type": "TV"
  },
  {...}
]

```
### Get Anime Details

ini akan mengambil detail dari anime dengan menggunakan `/anime/detail/:slug`.

```js
async function main () {
    const response = await fetch('http://localhost:3000/anime/detail/oshi-no-ko-subtitle-indonesia')
    const data = response.json()
    console.log(data)
}
main()
```
Hasilnya >> 

```json
[
  {
    "image": "https://sokuja.in/wp-content/uploads/2023/03/oshi_no_ko-5.jpg",
    "thumbnail": "https://sokuja.in/wp-content/uploads/2023/03/oshi_no_ko-2.jpg",
    "title": "“Oshi no Ko” Subtitle Indonesia",
    "status": " Completed",
    "genre": [
      "Drama",
      "Reincarnation",
      "Seinen",
      "Showbiz",
      "Supernatural"
    ],
    "episode": [
      {
        "title": "(END) Oshi no Ko Episode 11 Subtitle Indonesia",
        "slug": "end-oshi-no-ko-episode-11-subtitle-indonesia",
        "eps": "11",
        "date": "Juni 28, 2023"
      },
      {...}
    ],
    "trailer": "https://www.youtube.com/watch?v=1yXa8MAmocQ",
    "rating": "Rating 8.79",
    "information": [
      "Studio: Doga Kobo",
      "Tanggal Rilis: Apr 12, 2023",
      "Season: Spring 2023",
      "Tipe: TV",
      "Total Episode: 11",
      "Fansub: SOKUJA.NET",
      "Director: Hiramaki Daisuke"
    ]
  }
]
```
### Get Anime List Update

ini akan mengambil daftar episode anime terbaru yang sudah diupdate sesuai jadwal yang sudah ditentukan.

| Parameter    | Description                                                                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `page` (int) | secara default `page` value nya `1` dan ini akan mengahasilkan 50 daftar anime update per `page` nya.<br> Contoh:  `/anime/update?page=2` |


```js
async function main () {
    const response = await fetch('http://localhost:3000/anime/update?page=2')
    const data = response.json()
    console.log(data)
}
main()
```
Hasilnya >> 

```json
[
  {
    "image": "https://sokuja.in/wp-content/uploads/2023/06/Jitsu_wa_Ore_Saikyou_deshita-1.jpg",
    "thumbnail": "https://sokuja.in/wp-content/uploads/2023/09/sokuja-jitsu-wa-eps-11-sub-indo.jpg",
    "title": "Jitsu wa Ore, Saikyou deshita Episode 11 Subtitle Indonesia",
    "slug": "jitsu-wa-ore-saikyou-deshita-episode-11-subtitle-indonesia",
    "type": "TV",
    "information": "Ongoing · 5 hari lalu",
    "episode": "11/12"
  },
  {
    "image": "https://sokuja.in/wp-content/uploads/2022/12/maou.gakuin.no_.futekigousha.season.2.jpg",
    "thumbnail": "https://sokuja.in/wp-content/uploads/2023/09/sokuja-maou-gakuin-season-2-sub-indo-eps-12.jpg",
    "title": "(END) Maou Gakuin no Futekigousha Season 2 Episode 12 Subtitle Indonesia",
    "slug": "end-maou-gakuin-no-futekigousha-season-2-episode-12-subtitle-indonesia",
    "type": "TV",
    "information": "Completed · 5 hari lalu",
    "episode": "12/12"
  },
  {...}
]

```
### Get Anime Schedule

ini akan mengambil daftar jadwal rilis anime episode terbaru.

```js
async function main () {
    const response = await fetch('http://localhost:3000/anime/schedule')
    const data = response.json()
    console.log(data)
}
main()
```
Hasilnya >>

```json
[
  {
    "hours": "Kamis",
    "list_anime": [
      {
        "image": "https://sokuja.in/wp-content/uploads/2023/06/Hataraku_Maou-sama-1.jpg",
        "title": "Hataraku Maou-sama!! Season 2 Part 2 Subtitle Indonesia",
        "slug": "hataraku-maou-sama-season-2-part-2-subtitle-indonesia",
        "episode": "12",
        "time": " 14:55"
      },
      {...}
    ]
  },
  {
    "hours": "Jumat",
    "list_anime": [
      {
        "image": "https://sokuja.in/wp-content/uploads/2023/06/Nanatsu_no_Maken_ga_Shihai_suru-3.jpg",
        "title": "Nanatsu no Maken ga Shihai suru Subtitle Indonesia",
        "slug": "nanatsu-no-maken-ga-shihai-suru-subtitle-indonesia",
        "episode": "13",
        "time": " 16:54"
      },
      {...}
    ]
  }, {...}
]

```

