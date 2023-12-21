import React from "react";

import "./Search.scss";
import { useState } from "react";
import GeneralSlider from "../../components/general-slider/GeneralSlider";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="search">
      <input
        type="text"
        placeholder={"Enter Anime Name"}
        onChange={(e) => {
          //   console.log(e.target.value.replaceAll(" ", "%20"));
          setSearch(e.target.value.replaceAll(" ", "%20"));
        }}
      />
      <div className="outputWrapper">
        <GeneralSlider
          key={search + "1"}
          link={"https://kitsu.io/api/edge/anime?filter[text]=" + search}
        ></GeneralSlider>
      </div>
    </div>
  );
};

export default Search;
