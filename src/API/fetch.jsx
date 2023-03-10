
const URL = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE}`;

const displayAllVideos = () => {
  return fetch(`${URL}`).then((response) => response.json());
};

export default displayAllVideos;
