//CSS

import "./App.css";
import "./DarkMode.css";

//React Hooks

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components

import Header from "./Commons/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ShowVideo from "./Components/ShowVideo";

//Spinner

import ClockLoader from "react-spinners/ClockLoader";

//Theme Context

import { createContext } from "react";
export const ThemeContext = createContext("null");

function App() {
  const [modal, setModal] = useState(false);
  //Loading Spinner
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");
  //  const [userSearch, setUserSearch] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setLoading(false);
      });
    }, 1000);
  }, []);

  //Light/Dark Theme
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <BrowserRouter>
          {loading ? (
            <div className="loading__timer">
              <h1 className="loadingTimer__title">Time to Indulge</h1>
              <ClockLoader
                loading={loading}
                color="#d636a9"
                size={250}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <Header modal={modal} toggleModal={toggleModal} />
          )}
          <Routes>
            {loading ? null : <Route path="/" element={<Home />} />}
            {loading ? null : <Route path="/about" element={<About />} />}
            {loading ? null : (
              <Route
                path="/contact"
                element={<Contact modal={modal} toggleModal={toggleModal} />}
              />
            )}
            {loading ? null : (
              <Route path="/videos/:id" element={<ShowVideo />} />
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
