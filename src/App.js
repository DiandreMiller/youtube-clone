//CSS

import "./App.css";
import "./DarkMode.css";

//React Hooks

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components

import Header from "./Commons/Header";
import Home from "./Components/Home";
import Video from "./Components/Video";
import About from "./Components/About";
import Contact from "./Components/Contact";

//Spinner

import ClockLoader from "react-spinners/ClockLoader"

//Theme Context

import { createContext } from "react";
export const ThemeContext = createContext('null');



function App() {

//Loading Spinner
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
  
  //Light/Dark Theme

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
    <div className={theme}>
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
            
          <Header  />}
        
        {loading ? null : <Video />}
        
        <Routes>
<<<<<<< HEAD
          <Route path="/Components/Home" element={<Home />} />
          <Route path="/" element={<Video />} />
          <Route path="/" element={<Loading />} />
          <Route path="/Commons/Contact" element={<Contact />} />
=======
          {/* {loading ? null : <Route path='/' element={<Home />} />} */}
          {loading ? null : <Route path='/about' element={<About />} />}
          {loading ? null : <Route path='/contact' element={<Contact />} />}
>>>>>>> main
        </Routes>
        
      </BrowserRouter>
      </div>
      </ThemeContext.Provider>
  );
}
export default App;
