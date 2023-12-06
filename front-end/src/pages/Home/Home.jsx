import React from "react";

import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/Featured/Featured";
import Suggestions from "./Suggestions/Suggestions";

const Home = () => {
  return (
    <div className="Home">
      <Navbar></Navbar>
      <Featured></Featured>
      <Suggestions></Suggestions>
    </div>
  );
};

export default Home;
