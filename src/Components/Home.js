import { useState, useEffect } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState([]);
  const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&key=${process.env.REACT_APP_YOUTUBE}`;
  useEffect(() => {
    fetch(`${URL}`)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items.map((item) => item.id.videoId));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [URL]);

  return (
    <div>
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
  );
};
export default Home;
