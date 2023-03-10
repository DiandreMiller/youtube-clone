import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Loading from "./Components/Loading";
import Video from "./Components/Video";
import { useEffect} from "react";
import displayAllVideos from './API/fetch'

function App() {

  useEffect(() => {
    displayAllVideos()
      .then(result => console.log(result))
  }, [])


  return (
    <div className="App">

      
      <Header />
      <Home />
      <Video />
      <Loading />
    </div>
  );
}

export default App;
