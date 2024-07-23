import React from "react";

import "./GeneralSlider.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const GeneralSlider = ({ link }) => {
  const [state, setState] = useState(false);
  const [items, setItems] = useState([
    {
      title: "Loading...",
      poster:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/moon-mountain-starry-night-deborah-good.jpg",
    },
  ]);
  useEffect(() => {
    axios.get(link).then((response) => {
      const copy = [...items];
      for (let i = 0; i < 10; i++) {
        copy[i] = {
          title: response.data.data[i].attributes.titles.en
            ? response.data.data[i].attributes.titles.en
            : response.data.data[i].attributes.titles.en_jp,
          poster: response.data.data[i].attributes.posterImage
            ? response.data.data[i].attributes.posterImage.large
            : "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/moon-mountain-starry-night-deborah-good.jpg",
        };
      }
      console.log(response);
      setState(true);
      setItems(copy);
    });
  }, []);
  if (state) {
    return (
      <div className="generalCardSlider">
        <div className="generalCardSliderContainer">
          {items.map((item) => {
            return (
              <div key={item.title} className="card">
                <img src={item.poster} alt={item.title} />
                <div className="cardInformation">
                  <h1>
                    {item.title.length > 16
                      ? item.title.substring(0, 13) + "..."
                      : item.title}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="cardSlider">
      <div className="cardSliderContainer">
        <div className="card">{}</div>
        {/*
        <div className="card">
          <img
            src="https://images-cdn.ubuy.co.in/633ff507f2c2205fdc02a68b-one-piece-poster-bathroom-decor-anime.jpg"
            alt=""
          />
          <div className="cardInformation">
            <h1>Title</h1>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default GeneralSlider;
