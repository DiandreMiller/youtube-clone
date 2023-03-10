import React, { useState } from "react";
import "./Header.css";
import logo from "../Images/YouTube_Logo.svg";

const Header = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const burgerClass = isMenuClicked ? "burger-bar clicked" : "burger-bar unclicked";
  const menuClass = isMenuClicked ? "menu visible" : "menu hidden";

  return (
    <header style={{ width: "100%", height: "100vh" }}>
      <nav className="hamburger">
        <div className="hamburger__navbar">
          <div className="hamburger__menu" onClick={updateMenu}>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
          </div>
          <div className="navbar__logo">
            <img src={logo} alt="YouTube" />
          </div>
        </div>

        <div className="navbar__right">
          <button>
            <i className="fas fa-video"></i>
          </button>
          <button>
            <i className="fas fa-bell"></i>
          </button>
          <button>
            <i className="fas fa-user"></i>
          </button>
        </div>
      </nav>
      <div className={menuClass}>home</div>
    </header>
  );
};

export default Header;
