import React, { useEffect } from "react";

import "./Home.scss";
import CardSlider from "../../components/card-slider/CardSlider";
import Slider from "../../components/Slider/Slider";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const featured_slider = [
    {
      id: 0,
      title: "One Piece",
      description:
        "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled in 107 tankōbon volumes as of November 2023. ",
      poster:
        "https://c4.wallpaperflare.com/wallpaper/245/816/876/one-piece-monkey-d-luffy-trafalgar-law-ussop-wallpaper-preview.jpg",
      posterMobile:
        "https://images-cdn.ubuy.co.in/633ff507f2c2205fdc02a68b-one-piece-poster-bathroom-decor-anime.jpg",
      position: 0,
    },
    {
      id: 1,
      title: "One Piece",
      description:
        "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled in 107 tankōbon volumes as of November 2023. ",
      poster:
        "https://c4.wallpaperflare.com/wallpaper/245/816/876/one-piece-monkey-d-luffy-trafalgar-law-ussop-wallpaper-preview.jpg",
      posterMobile:
        "https://images-cdn.ubuy.co.in/633ff507f2c2205fdc02a68b-one-piece-poster-bathroom-decor-anime.jpg",
      position: 1,
    },
    {
      id: 2,
      title: "One Piece",
      description:
        "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled in 107 tankōbon volumes as of November 2023. ",
      poster:
        "https://c4.wallpaperflare.com/wallpaper/245/816/876/one-piece-monkey-d-luffy-trafalgar-law-ussop-wallpaper-preview.jpg",
      posterMobile:
        "https://images-cdn.ubuy.co.in/633ff507f2c2205fdc02a68b-one-piece-poster-bathroom-decor-anime.jpg",
      position: 2,
    },
    {
      id: 3,
      title: "One Piece",
      description:
        "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled in 107 tankōbon volumes as of November 2023. ",
      poster:
        "https://c4.wallpaperflare.com/wallpaper/245/816/876/one-piece-monkey-d-luffy-trafalgar-law-ussop-wallpaper-preview.jpg",
      posterMobile:
        "https://images-cdn.ubuy.co.in/633ff507f2c2205fdc02a68b-one-piece-poster-bathroom-decor-anime.jpg",
      position: 3,
    },
    {
      id: 4,
      title: "Naruto",
      description:
        "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled in 107 tankōbon volumes as of November 2023. ",
      poster:
        "https://c4.wallpaperflare.com/wallpaper/245/816/876/one-piece-monkey-d-luffy-trafalgar-law-ussop-wallpaper-preview.jpg",
      posterMobile:
        "https://images-cdn.ubuy.co.in/633ff507f2c2205fdc02a68b-one-piece-poster-bathroom-decor-anime.jpg",
      position: 4,
    },
  ];
  const fetched_featured = [...featured_slider];
  const [state, setState] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://kitsu.io/api/edge/anime?page[limit]=4&page[offset]=${
          Math.random() * 500
        }`
      )
      .then((response) => {
        for (let i = 0; i < 4; i++) {
          const item = {
            id: i + 1,
            title: response.data.data[i].attributes.titles.en
              ? response.data.data[i].attributes.titles.en
              : response.data.data[i].attributes.titles.en_jp,
            description:
              response.data.data[i].attributes.description.length > 300
                ? response.data.data[i].attributes.description.slice(0, 297) +
                  "..."
                : response.data.data[i].attributes.description,
            poster: response.data.data[i].attributes.coverImage
              ? response.data.data[i].attributes.coverImage.original
              : "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/moon-mountain-starry-night-deborah-good.jpg",
            posterMobile: response.data.data[i].attributes.posterImage
              ? response.data.data[i].attributes.posterImage.large
              : "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/moon-mountain-starry-night-deborah-good.jpg",
            position: i + 1,
          };
          fetched_featured[i + 1] = item;
        }
        setState(true);
      });
  }, []);
  return (
    <>
      <div className="Home">
        <Slider featured={state ? featured_slider : fetched_featured}></Slider>
        <br />
        <h1 className="cardHeaders">
          Trending Anime{" "}
          <Link className="Links" to="/trending">
            <span>View More</span>
          </Link>
        </h1>
        <br />
        <CardSlider link="https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=10"></CardSlider>
        <div className="breaker"></div>
        <h1 className="cardHeaders">
          Trending Action Anime{" "}
          <Link className="Links" to="/trending">
            <span>View More</span>
          </Link>
        </h1>
        <br />
        <CardSlider link="https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=10&filter[categories]=action"></CardSlider>
        <div className="breaker"></div>
        <h1 className="cardHeaders">
          Trending Horror Anime{" "}
          <Link className="Links" to="/trending">
            <span>View More</span>
          </Link>
        </h1>
        <br />
        <CardSlider link="https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=10&filter[categories]=horror"></CardSlider>
        <div className="breaker"></div>
        <h1 className="cardHeaders">
          Trending Comedy Anime{" "}
          <Link className="Links" to="/trending">
            <span>View More</span>
          </Link>
        </h1>
        <br />
        <CardSlider link="https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=10&filter[categories]=comedy"></CardSlider>
        <div className="breaker"></div>
        <h1 className="cardHeaders">
          Trending Romance Anime{" "}
          <Link className="Links" to="/trending">
            <span>View More</span>
          </Link>
        </h1>
        <br />
        <CardSlider link="https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=10&filter[categories]=romance"></CardSlider>
        <div className="breaker"></div>
      </div>
    </>
  );
};

export default Home;
