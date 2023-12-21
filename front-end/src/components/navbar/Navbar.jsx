import React from "react";
import { useState } from "react";

import "./Navbar.scss";
import { Search } from "react-feather";
import { Menu } from "react-feather";
import { X } from "react-feather";

import { Link } from "react-router-dom";

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
          <Link to="/" className="links">
            <span>Home</span>
          </Link>
          <Link to="/trending" className="links">
            <span>Trending</span>
          </Link>
          <Link to="/categories" className="links">
            <span>Categories</span>
          </Link>
        </ul>
      </div>
      <div className="right">
        <Link to="/search" className="links">
          <Search></Search>
        </Link>
        <button className="login">Log In</button>
      </div>
      <div
        className="navigation_mobile"
        style={{ left: `${!clicked ? "+100vw" : "0vw"}` }}
      >
        <Link to="/" className="links">
          <span
            onClick={() => {
              setClicked(0);
            }}
          >
            Home
          </span>
        </Link>
        <Link to="/trending" className="links">
          <span
            onClick={() => {
              setClicked(0);
            }}
          >
            Trending
          </span>
        </Link>
        <Link to="/categories" className="links">
          <span
            onClick={() => {
              setClicked(0);
            }}
          >
            Categories
          </span>
        </Link>
        <Link to="/search" className="links">
          <span
            onClick={() => {
              setClicked(0);
            }}
          >
            Search
          </span>
        </Link>
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
