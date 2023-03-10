import React, { useState } from "react";
import "./Header.css";
import logo from "../Images/YouTube_Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    // function to update the menu state
    setIsMenuClicked(!isMenuClicked); // toggle isMenuClicked to its opposite value
  };
  // determine the class names for the hamburger menu and the menu based on the isMenuClicked value
  const burgerClass = isMenuClicked
    ? "burger-bar clicked"
    : "burger-bar unclicked";
  const menuClass = isMenuClicked ? "menu visible" : "hidden";

  // determine the content for the menu based on the isMenuClicked value
  const menuContent = isMenuClicked ? (
    <ul className="menu__items">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/shorts">Shorts</Link>
      </li>
      <li>
        <Link to="/subscription">Subscription</Link>
      </li>
      <li>
        <Link to="/library">Library</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  ) : (
    <ul className="menu__items">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/trending">Trending</Link>
      </li>
      <li>
        <Link to="/shorts">Shorts</Link>
      </li>
      <li>
        <Link to="/subscription">Subscription</Link>
      </li>
      <li>
        <Link to="/library">Library</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  );

  return (
    <header className="hamburger__header">
      <nav className="hamburger">
        <div className="hamburger__navbar">
          <div className="hamburger__menu" onClick={updateMenu}>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
          </div>
          <div className="navbar__logo">
            <Link to="/Components/Home">
              <img src={logo} alt="YouTube" />
            </Link>
          </div>
          <div className="navbar__rightIcons">
            <i className="fas fa-video"></i>
            <i className="fas fa-bell"></i>
            <i className="fas fa-user"></i>
          </div>
        </div>
      </nav>
      <div className={menuClass}> {menuContent} </div>
    </header>
  );
};

export default Header;
