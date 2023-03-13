import { useEffect, useState } from "react";

import "./Video.css";

const Video = ({ videos, setVideos }) => {
  const [search, setSearch] = useState("");
  // const [videos, setVideos] = useState([]);
  // const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&key=${process.env.REACT_APP_YOUTUBE}&maxResults=5`;

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`${URL}`)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items.map((item) => item.id.videoId));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /*
  useEffect(() => {
      fetch(`${URL}`)
          .then(response => response.json())
          .then(data => {
              setVideos(data.items.map(item => item.id.videoId))
          }).catch((error) => {
              console.log(error);
          })
  }, [search])

do not delete above useEffect - its commented to save api */

  // console.log("videos", videos);

  return (
    <div className="video-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="videos-grid">
        {videos.map((video, index) => {
          return (
            <div key={index}>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Video;
