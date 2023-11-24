import React from "react";

import "./FeaturedAnime.scss";
import { ArrowDown } from "react-feather";

const FeaturedAnime = () => {
  return (
    <div
      className="featuredAnime"
      style={{
        background:
          "url('https://sportshub.cbsistatic.com/i/2022/11/13/5b7cd022-e962-465e-881b-29628db23c73/attack-on-titan.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="overlay">
        <div className="info">
          <h2>Featured</h2>
          <h1>Attack on Titan</h1>
          <p>
            Attack on Titan is a Japanese dark fantasy anime television series,
            adapted from the manga series of the same name by Hajime Isayam
          </p>
          <button>Watch Now ▶</button>
        </div>
      </div>
      <a href="#trending">
        <ArrowDown className="Arrow"></ArrowDown>
      </a>
    </div>
  );
};

export default FeaturedAnime;
