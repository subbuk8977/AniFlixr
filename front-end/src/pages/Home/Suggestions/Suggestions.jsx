import React from "react";

import "./Suggestions.scss";
import CardContainer from "./cardContainer";

const Suggestions = () => {
  return (
    <div className="Suggestions">
      <div className="container">
        <div className="trending sliderContainer">
          <h1>
            Trending Right Now! <span>View More</span>
          </h1>
          <CardContainer></CardContainer>
        </div>
        <div className="Action sliderContainer">
          <h1>
            Action! <span>View More</span>
          </h1>
          <CardContainer></CardContainer>
        </div>
        <div className="Thriller sliderContainer">
          <h1>
            Thriller! <span>View More</span>
          </h1>
          <CardContainer></CardContainer>
        </div>
        <div className="Horror sliderContainer">
          <h1>
            Horror! <span>View More</span>
          </h1>
          <CardContainer></CardContainer>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
