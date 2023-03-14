import React, { useState } from "react";
import "./Header.css";
import logo from "../Images/YouTube_Logo.svg";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";

const Header = ({ modal, toggleModal }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleContactClick = () => {
    toggleModal();
    setIsMenuClicked(false);
  };

  const updateMenu = () => {
    // function to update the menu state
    setIsMenuClicked(!isMenuClicked); // toggle isMenuClicked to its opposite value
  };
  // determine the class names for the hamburger menu and the menu based on the isMenuClicked value
  const burgerClass = isMenuClicked
    ? "burger-bar clicked"
    : "burger-bar unclicked";
  const menuClass = isMenuClicked ? "menu visible" : "menu hidden";

  // determine the content for the menu based on the isMenuClicked value
  const menuContent = (
    <ul className="menu__items">
      <li>
        <Link to="/" className="icon__link">
          <i className="fas fa-home"></i>
          <span className="menu__item">Home</span>
        </Link>
      </li>
      <li>
        <Link to="/trending" className="icon__link">
          <i className="fas fa-fire"></i>
          <span className="menu__item">Trending</span>
        </Link>
      </li>
      <li>
        <Link to="/shorts" className="icon__link">
          <i className="fab fa-youtube"></i>
          <span className="menu__item">Shorts</span>
        </Link>
      </li>
      <li>
        <Link to="/subscription" className="icon__link">
          <i className="fas fa-video"></i>
          <span className="menu__item">Subscriptions</span>
        </Link>
      </li>
      <li>
        <Link to="/library" className="icon__link">
          <i className="fas fa-book"></i>
          <span className="menu__item">Library</span>
        </Link>
      </li>
      <li>
        <Link to="/about" className="icon__link">
          <i className="fas fa-info-circle"></i>
          <span className="menu__item">About</span>
        </Link>
      </li>
      <li>
        <Link to="/contact" className="icon__link" onClick={handleContactClick}>
          <i className="fas fa-envelope"></i>
          <span className="menu__item">Contact</span>
        </Link>
      </li>
      <li>
        <Link to="/settings" className="icon__link">
          <i className="fas fa-cog"></i>
          <span className="menu__item">Settings</span>
        </Link>
      </li>
    </ul>
  );

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeChange = (checked) => {
    setIsDarkMode(checked);
  };
  return (
    <header className={isDarkMode ? "dark" : "light"}>
      <div className="header__left">
        <div className="hamburger__menu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
        <div className={`navbar__logo ${isDarkMode ? "dark" : "light"}`}>
          <Link to="/">
            <img src={logo} alt="YouTube" className={isDarkMode ? "dark" : "light"} />
          </Link>
        </div>
        <ReactSwitch checked={isDarkMode} onChange={handleModeChange} />
      </div>
      <div className={`navbar__rightIcons ${isDarkMode ? "dark" : "light"}`}>
        <i className="fas fa-video"></i>
        <i className="fas fa-bell"></i>
        <i className="fas fa-user"></i>
      </div>
      <div className={`menu ${isDarkMode ? "visible dark" : "hidden light"}`}>
        <ul className={`menu__items ${isDarkMode ? "dark" : "light"}`}>
          {menuContent}
        </ul>
      </div>
    </header>
  );
};

export default Header;
