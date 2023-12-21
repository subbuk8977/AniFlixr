import React from "react";
import "./Trending.scss";

import Slider from "../../components/Slider/Slider";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import GeneralSlider from "../../components/general-slider/GeneralSlider";

const Trending = ({ link }) => {
  const [count, setCount] = useState([0]);
  const featured_slider = [
    {
      id: 0,
      title: "Naruto",
      description:
        "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
      poster: "https://wallpapercave.com/wp/wp8840620.jpg",
      posterMobile:
        "https://e1.pxfuel.com/desktop-wallpaper/938/190/desktop-wallpaper-naruto-characters-poster-24-naruto-shippuden-poster.jpg",
      position: 0,
    },
    {
      id: 1,
      title: "Naruto",
      description:
        "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
      poster: "https://wallpapercave.com/wp/wp8840620.jpg",
      posterMobile:
        "https://e1.pxfuel.com/desktop-wallpaper/938/190/desktop-wallpaper-naruto-characters-poster-24-naruto-shippuden-poster.jpg",
      position: 1,
    },
    {
      id: 2,
      title: "Naruto",
      description:
        "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
      poster: "https://wallpapercave.com/wp/wp8840620.jpg",
      posterMobile:
        "https://e1.pxfuel.com/desktop-wallpaper/938/190/desktop-wallpaper-naruto-characters-poster-24-naruto-shippuden-poster.jpg",
      position: 2,
    },
    {
      id: 3,
      title: "Naruto",
      description:
        "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
      poster: "https://wallpapercave.com/wp/wp8840620.jpg",
      posterMobile:
        "https://e1.pxfuel.com/desktop-wallpaper/938/190/desktop-wallpaper-naruto-characters-poster-24-naruto-shippuden-poster.jpg",
      position: 3,
    },
    {
      id: 4,
      title: "Naruto",
      description:
        "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
      poster: "https://wallpapercave.com/wp/wp8840620.jpg",
      posterMobile:
        "https://e1.pxfuel.com/desktop-wallpaper/938/190/desktop-wallpaper-naruto-characters-poster-24-naruto-shippuden-poster.jpg",
      position: 4,
    },
  ];
  const fetched_featured = [...featured_slider];
  const [state, setState] = useState(false);
  useEffect(() => {
    axios
      .get(`https://kitsu.io/api/edge/anime?sort=popularityRank`)
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
  console.log(count);
  return (
    <>
      <div className="trending-page">
        <Slider featured={state ? featured_slider : fetched_featured}></Slider>
        {count.map((item) => {
          return <GeneralSlider link={link + 10 * item}></GeneralSlider>;
        })}
        <div className="buttonContainer">
          <button
            className="ViewMore"
            onClick={() => {
              setCount([...count, count[count.length - 1] + 1]);
              console.log(count);
            }}
          >
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default Trending;
