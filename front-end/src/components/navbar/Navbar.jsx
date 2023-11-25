import React from "react";

import "./Navbar.scss";
import { Search } from "react-feather";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <h1 className="logo">
          <span className="white">Ani</span>
          <span className="red">Flixr</span>
        </h1>
      </div>
      <div className="middle">
        <ul>
          <span>Home</span>
          <span>Trending</span>
          <span>Anime Release</span>
          <span>About</span>
        </ul>
      </div>
      <div className="right">
        <Search></Search>
        <button className="login">Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
