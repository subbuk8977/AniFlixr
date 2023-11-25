import React from "react";

import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/Featured/Featured";

const Home = () => {
  return (
    <div className="Home">
      <Navbar></Navbar>
      <Featured></Featured>
    </div>
  );
};

export default Home;
