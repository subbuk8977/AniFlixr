import React from "react";

import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import FeaturedAnime from "../../components/featuredAnime/FeaturedAnime";
import GenreBar from "../../components/trending/genreBar/GenreBar";
import TrendingAnime from "../../components/trending/TrendingAnime";

const Home = () => {
  return (
    <div className="Home">
      <Navbar></Navbar>
      <FeaturedAnime></FeaturedAnime>
      <GenreBar></GenreBar>
      <TrendingAnime></TrendingAnime>
    </div>
  );
};

export default Home;
