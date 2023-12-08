import React from "react";
import { useState } from "react";

import "./Navbar.scss";
import { Search } from "react-feather";
import { Menu } from "react-feather";
import { X } from "react-feather";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(0);
  const [clicked, setClicked] = useState(0);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset);
    return () => (window.onscroll = null);
  };
  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: `rgb(0,0,0,${!clicked ? isScrolled / 100 : 1})`,
      }}
    >
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
          <span>Categories</span>
          <span>Anime Release</span>
          <span>About</span>
        </ul>
      </div>
      <div className="right">
        <Search></Search>
        <button className="login">Log In</button>
      </div>
      <div
        className="navigation_mobile"
        style={{ left: `${!clicked ? "-100vw" : "0vw"}` }}
      >
        <span>Home</span>
        <span>Trending</span>
        <span>Categories</span>
        <span>Anime Release</span>
        <span>About</span>
        <span>Search</span>
        <span>Log In </span>
      </div>
      {!clicked ? (
        <Menu
          className="menu"
          onClick={() => {
            setClicked(1);
          }}
        ></Menu>
      ) : (
        <X
          className="menu"
          onClick={() => {
            setClicked(0);
          }}
        ></X>
      )}
    </nav>
  );
};

export default Navbar;
