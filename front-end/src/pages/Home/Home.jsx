import React from "react";

import "./Home.scss";
import Featured from "./Featured/Featured";
import Suggestions from "./Suggestions/Suggestions";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Featured></Featured>
      <Suggestions></Suggestions>
      <Footer></Footer>
    </div>
  );
};

export default Home;
