import React, { useState } from "react";
import "./Header.css";
import logo from "../Images/YouTube_Logo.svg";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import FutureWorks from "../Components/FutureWorks";
import Ari from "../Images/Ari.png";
import Ana from "../Images/Ana.png";
import Dre from "../Images/Dre.png";

const Header = ({ modal, toggleModal }) => {
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMenuClick = () => {
    setIsModalMenuOpen(true);
  };

  const handleContactClick = () => {
    toggleModal();
    setIsMenuClicked(false);
  };

  const updateMenu = () => {
    // function to update the menu state
    setIsMenuClicked(!isMenuClicked); // toggle isMenuClicked to its opposite value
  };

  const handleModeChange = (checked) => {
    setIsDarkMode(checked); // removed checked parameter without this dark mode wont toggle
  };

  // determine the class names for the hamburger menu and the menu based on the isMenuClicked value
  const burgerClass = isMenuClicked
    ? "burger-bar clicked"
    : "burger-bar unclicked";
  const menuClass = isMenuClicked ? "menu visible" : "menu hidden";
  const submenuClass = isSubmenuOpen ? "submenu visible" : "submenu hidden";

  // determine the content for the menu
  const menuContent = (
    <ul className="menu__items">
      <li>
        <Link to="/" className="icon__link">
          <i className="fas fa-home"></i>
          <span className="menu__item">Home</span>
        </Link>
      </li>
      <li>
        <button className="icon__link" onClick={handleMenuClick}>
          <i className="fas fa-fire"></i>
          <span className="menu__item">Trending</span>
        </button>
      </li>
      <li>
        <button className="icon__link" onClick={handleMenuClick}>
          <i className="fab fa-youtube"></i>
          <span className="menu__item">Shorts</span>
        </button>
      </li>
      <li>
        <button className="icon__button" onClick={handleMenuClick}>
          <i className="fas fa-video"></i>
          <span className="menu__item">Subscriptions</span>
        </button>
      </li>
      <li>
        <button className="icon__link" onClick={handleMenuClick}>
          <i className="fas fa-book"></i>
          <span className="menu__item">Library</span>
        </button>
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
        <div className="icon__link" onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}>
          <i className="fas fa-cog"></i>
          <span className="menu__item">Settings</span>
        </div>
        {isSubmenuOpen && (
          <ul className={`submenu__items ${submenuClass}`}>
            <li>
              <label className="switch__Mode">
                <input
                  className="check__mode"
                  type="checkbox"
                  onChange={(event) => handleModeChange(event.target.checked)}
                  checked={isDarkMode}
                />
                <span className="slider round"></span>
              </label>
              <span className="submenu__item">Switch Theme</span>
            </li>
          </ul>
        )}
      </li>
      <div className={`subscribed__list__items ${isDarkMode ? "dark" : "light"}`}>
        <li>
          <hr className="menu__line" />
        </li>
        <h3>
          <span className="menu__item">Subscribed</span>
        </h3>
        <div className="menu__subscribed">
          <button className="subscribe__link">
            <p className="menu__subscribed-name">
              <img
                className="menu__subscribed__img"
                src={Ana}
                alt="Subscribed channel 2"
              />
              <span>Artsy Girl</span>
            </p>
          </button>
          <button className="subscribe__link">
            <p className="menu__subscribed-name">
              <img
                className="menu__subscribed__img"
                src={Ari}
                alt="Subscribed channel 1"
              />
              <span>Редакция</span>
            </p>
          </button>
          <button className="subscribe__link">
            <p className="menu__subscribed-name">
              <img
                className="menu__subscribed__img"
                src={Dre}
                alt="Subscribed channel 3"
              />
              <span>Keep It 100 Dre </span>
            </p>
          </button>
        </div>
        <li>
          <hr className="menu__line" />
        </li>
      </div>
    </ul>
  );

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
            <img
              src={logo}
              alt="YouTube"
              className={isDarkMode ? "dark" : "light"}
            />
          </Link>
        </div>
      </div>
      <div className={`navbar__rightIcons ${isDarkMode ? "dark" : "light"}`}>
        <i className="fas fa-video" onClick={handleMenuClick}></i>
        <i className="fas fa-bell" onClick={handleMenuClick}></i>
        <i className="fas fa-user" onClick={handleMenuClick}></i>
        <div className="switch-container">
          <ReactSwitch
            className="switch"
            checked={isDarkMode}
            onChange={handleModeChange}
          />
        </div>
      </div>
      <div className={`menu ${isDarkMode ? "visible dark" : "hidden light"}`}>
        <ul className={`menu__items ${isDarkMode ? "dark" : "light"}`}>
          {menuContent}
        </ul>
        {isModalMenuOpen && (
          <FutureWorks setIsModalMenuOpen={setIsModalMenuOpen} />
        )}
      </div>
    </header>
  );
};

export default Header;
