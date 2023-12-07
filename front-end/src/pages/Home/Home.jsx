import React from "react";

import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/Featured/Featured";
import Suggestions from "./Suggestions/Suggestions";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Navbar></Navbar>
      <Featured></Featured>
      <Suggestions></Suggestions>
      <Footer></Footer>
    </div>
  );
};

export default Home;
