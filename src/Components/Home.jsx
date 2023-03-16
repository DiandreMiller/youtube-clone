import { useEffect } from "react";
import { Link } from "react-router-dom";
import FutureWorks from "./FutureWorks";
import Error from "./Error";
import "./Home.css";

const Home = ({ handleSearch, errorMessage, setErrorMessage,
  videos, setVideos, videoIds, setVideoIds, setSearch, search,
  isError, setIsError, isModalMenuOpen, setIsModalMenuOpen, handleButtonClick }
) => {

 

  const URL_Loading = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${process.env.REACT_APP_YOUTUBE}&maxResults=1`;

  


  useEffect(() => {
    fetch(`${URL_Loading}`)
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
  }, [URL_Loading]);

  return (
    <div className="video-container">
      {isError && <Error setIsError={setIsError} errorMessage={errorMessage} />}
      <div className="video-wrapper">
        <form onSubmit={handleSearch} className="search__Form">
          <div className="search-container">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
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
        <div className="buttons-container">
          <button className="search-option-button" onClick={handleButtonClick}>
            All
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Music
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Cooking
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Programming
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Gaming
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Awards
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Auditions
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Comedy
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Baseball
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Drawing
          </button>
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
