import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState([]);
  const [videoIds, setVideoIds] = useState([]);
  const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&key=${process.env.REACT_APP_YOUTUBE}&maxResults=2`;
  const URL_Loading = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${process.env.REACT_APP_YOUTUBE}&maxResults=2`;

  const handleSearch = (event) => {
    event.preventDefault();
    fetch(`${URL}`)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items.map((item) => item.snippet));
        setVideoIds(data.items.map((item) => item.id.videoId));
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch(`${URL_Loading}`)
      .then((response) => response.json())
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
      <div className="video-wrapper">
        <form onSubmit={handleSearch}>
          <div className="search-container">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              autoFocus
              placeholder="Search"
              className="search-input"
            />
            <button type="submit" className="search-button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
        <div className="buttons-container">
          <button className="search-option-button">All</button>
          <button className="search-option-button">Music</button>
          <button className="search-option-button">Cooking</button>
          <button className="search-option-button">Programming</button>
          <button className="search-option-button">Gaming</button>
          <button className="search-option-button">Awards</button>
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
