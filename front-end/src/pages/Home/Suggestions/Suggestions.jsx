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
        <div className="Classics sliderContainer">
          <h1>
            Classics! <span>View More</span>
          </h1>
          <CardContainer></CardContainer>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
