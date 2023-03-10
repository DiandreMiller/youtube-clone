import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Loading from "./Components/Loading";
import Video from "./Components/Video";

function App() {
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
