import "./App.css";
import Header from "./Commons/Header";
import Home from "./Components/Home";
import Loading from "./Components/Loading";
import Video from "./Components/Video";
import { useEffect } from "react";
import displayAllVideos from "./API/fetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    displayAllVideos()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Components/Home" element={<Home />} />
          <Route path="/" element={<Video />} />
          <Route path="/" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
