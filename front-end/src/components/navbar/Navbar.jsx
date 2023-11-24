import React from "react";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarLeft">
        <span className="White">Ani</span>
        <span className="Red">Flixer</span>
      </div>
      <div className="navbarRight">
        <span>Home</span>
        <span>Anime</span>
        <span>Movies</span>
        <span>Genre</span>
        <span>Year</span>
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
