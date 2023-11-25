import React from "react";

import "./Featured.scss";

const Featured = () => {
  return (
    <div
      className="Featured"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/hd/attack-on-titan-special-operations-squad-tsoxyqfn7hwfoa7a.jpg')",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay">
        <div className="info">
          <h1>Attack on Titan</h1>
          <div className="meta">
            <span>20m</span>
            <span>2023</span>
            <span>Fantasy</span>
            <span>Action</span>
            <span>Trending</span>
          </div>
          <p>
            Humankind constructs lofty walls to safeguard itself from immense
            creatures, the Titans. It battles to regain its land captured by the
            Titans which is not easy.
          </p>
          <div className="buttons">
            <button className="play">Play Now</button>
            <button className="trailer">Watch Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
