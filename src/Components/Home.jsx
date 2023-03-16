import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FutureWorks from "./FutureWorks";
import Error from "./Error";
import "./Home.css";
import FilterSearch from "./FilterSearch";

const Home = ({
  handleSearch,
  errorMessage,
  setErrorMessage,
  videos,
  setVideos,
  videoIds,
  setVideoIds,
  setSearch,
  search,
  isError,
  setIsError,
  isModalMenuOpen,
  setIsModalMenuOpen,
  handleButtonClick,
}) => {
  const [searchBy, setSearchBy] = useState("relevance");
  const [maxResults, setMaxResults] = useState("2");
  const [safeSearch, setSafeSearch] = useState("strict");
  const [showFilterForm, setShowFilterForm] = useState(false);

  const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&key=${process.env.REACT_APP_YOUTUBE}&maxResults=1`;
  const URL_Loading = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${process.env.REACT_APP_YOUTUBE}&maxResults=1`;

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video${
        maxResults && `&maxResults=${maxResults}`
      }&key=${
        process.env.REACT_APP_YOUTUBE
      }&order=${searchBy}&safeSearch=${safeSearch}`
    )
      .then((response) => {
        if (!response.ok) {
          setIsError(true);
          setErrorMessage(
            "An error occurred while fetching data. Please try again later."
          );
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setVideos(data.items.map((item) => item.snippet));
        setVideoIds(data.items.map((item) => item.id.videoId));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search, maxResults, safeSearch, searchBy]);

  return (
    <div className="video-container">
      {isError && <Error setIsError={setIsError} errorMessage={errorMessage} />}
      <div className="video-wrapper">
        <form onSubmit={handleSearch} className="search__Form">
          <div className="search-container">
            <input
              type="text"
              autoFocus
              placeholder="Search"
              className="search-input"
              title="Enter a search value"
            />
            <button type="submit" className="search-button" title="Search">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
        <button
          onClick={() => {
            setShowFilterForm(!showFilterForm);
          }}
          className="filter-button"
        >
          <i class="fas fa-filter"></i>
          Filter
        </button>

        {showFilterForm && (
          <FilterSearch
            searchBy={searchBy}
            setSearchBy={setSearchBy}
            safeSearch={safeSearch}
            setSafeSearch={setSafeSearch}
            maxResults={maxResults}
            setMaxResults={setMaxResults}
          />
        )}

        <div className="buttons-container">
          <button className="search-option-button">All</button>
          <button className="search-option-button">Music</button>
          <button className="search-option-button">Cooking</button>
          <button className="search-option-button">Programming</button>
          <button className="search-option-button">Gaming</button>
          <button className="search-option-button">Awards</button>
          <button className="search-option-button">Auditions</button>
          <button className="search-option-button">Comedy</button>
          <button className="search-option-button">Baseball</button>
          <button className="search-option-button">Drawing</button>
          {isModalMenuOpen && (
            <FutureWorks setIsModalMenuOpen={setIsModalMenuOpen} />
          )}
        </div>

        <div className="videos-grid">
          {videos.map((video, index) => {
            return (
              <div className="thumbnail" key={index}>
                <Link to={`/videos/${videoIds[index]}`}>
                  {" "}
                  <img src={video.thumbnails.medium.url} alt="" />
                  <h3>{video.title}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
