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

  //Handle Search


  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState([]);
  const [videoIds, setVideoIds] = useState([]);
  

  const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&key=${process.env.REACT_APP_YOUTUBE}&maxResults=6`;

  const handleSearch = (event) => {
    event.preventDefault();
    if (!search) {
      setIsError(true);
      setErrorMessage("Please enter a search term.");
      return;
    }
    fetch(`${URL}`)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 403) {
            setIsError(true);
            setErrorMessage("Access to YouTube API is forbidden.");
          } else if (response.status === 400) {
            setIsError(true);
            setErrorMessage("Bad request. Please try again later.");
          } else if (response.status === 404) {
            setIsError(true);
            setErrorMessage(
              "No videos found. Please try a different search query."
            );
          } else {
            setIsError(true);
            setErrorMessage(
              "An error occurred while fetching data. Please try again later."
            );
          }
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setVideos(data.items.map((item) => item.snippet));
        setVideoIds(data.items.map((item) => item.id.videoId));
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Handle Button Click

  const handleButtonClick = () => {
    setIsModalMenuOpen(true);
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
            {loading ? null : <Route path="/"
              element={<Home
                handleSearch={handleSearch}
                handleButtonClick={handleButtonClick}
                URL={URL}
                isError={isError}
                setIsError={setIsError}
                errorMessage={errorMessage}
                videos={videos}
                setVideos={setVideos}
                videoIds={videoIds}
                setVideoIds={setVideoIds}
                search={search}
                setSearch={setSearch}
                isModalMenuOpen={isModalMenuOpen}
                setIsModalMenuOpen={setIsModalMenuOpen} />}
               />}
            {loading ? null : <Route path="/about" element={<About />} />}
            {loading ? null : (
              <Route
                path="/contact"
                element={<Contact modal={modal} toggleModal={toggleModal} />}
              />
            )}
            {loading ? null : (
              <Route path="/videos/:id"
                element={<ShowVideo
                  handleSearch={handleSearch}
                  handleButtonClick={handleButtonClick}
                  URL={URL}
                  isError={isError}
                  setIsError={setIsError}
                  errorMessage={errorMessage}
                  videos={videos}
                  setVideos={setVideos}
                  videoIds={videoIds}
                  setVideoIds={setVideoIds}
                  search={search}
                  setSearch={setSearch}
                  isModalMenuOpen={isModalMenuOpen}
                  setIsModalMenuOpen={setIsModalMenuOpen}
                />} />
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
