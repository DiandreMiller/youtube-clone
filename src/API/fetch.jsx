
// const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet?q=${search}&type=video&key=${process.env.REACT_APP_YOUTUBE}`;

const displayAllVideos = () => {
  return fetch(`${URL}`).then((response) => response.json());
};

export default displayAllVideos;


