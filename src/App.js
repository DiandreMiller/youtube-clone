import "./App.css";
import Header from "./Commons/Header";
import Home from "./Components/Home";
import Video from "./Components/Video";
import { useEffect, useState } from "react";
import About from "./Components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader"

function App() {

  

  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
          setTimeout(() => {
              setLoading(false)
          })
      }, 3000)
  }
      , [])

  return (
    <div>
      <BrowserRouter>
        
        
        {loading ?
          
          <div>
            <h1>Time to Indulge</h1>
            <ClockLoader
              loading={loading}
              color='#d636a9'
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          
          </div>
          :
          <Header />}
        
        {loading ? null : <Video />}
        
        <Routes>
          {/* {loading ? null : <Route path='/' element={<Home />} />} */}
          {/* <Route path="/" element={<Video />} /> */}
          {loading ? null : <Route path='/about' element={<About/>} />}
          
          
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}
export default App;
