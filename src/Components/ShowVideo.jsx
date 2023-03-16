import YouTube from "react-youtube";
import "./ShowVideo.css";
import { useParams} from "react-router-dom";
import Comments from "./Comments";
import FutureWorks from "./FutureWorks";
import Error from "./Error";
import { Link } from "react-router-dom";




const ShowVideo = ({handleSearch, errorMessage,
  setSearch, search,
  isError, setIsError, isModalMenuOpen, setIsModalMenuOpen, handleButtonClick, videos, videoIds} ) => {
  const { id } = useParams();

  
  console.log(videos)

    return (
        <div className="showVideo">

            <div className="video">
            <div className="video-container">
      {isError && <Error setIsError={setIsError} errorMessage={errorMessage} />}
      <div className="video-wrapper">
        <form onSubmit={handleSearch} className="search__Form">
          <div className="search-container">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              autoFocus
              placeholder="Search"
              className="search-input"
              title="Enter a search value"
            />
            <button type="submit" className="search-button" title="Search">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
        <div className="buttons-container">
          <button className="search-option-button" onClick={handleButtonClick}>
            All
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Music
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Cooking
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Programming
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Gaming
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Awards
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Auditions
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Comedy
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Baseball
          </button>
          <button className="search-option-button" onClick={handleButtonClick}>
            Drawing
          </button>
          {isModalMenuOpen && (
            <FutureWorks setIsModalMenuOpen={setIsModalMenuOpen} />
          )}
              </div>
              
              <div className="videos-grid">

            <YouTube videoId={id} />

        </div>
        <Comments id={id}/>
        </div>
               
          {videos ? videos.map((video, index) => {
            return (
              <div className="thumbnail" key={index}>
                <Link to={`/videos/${videoIds[index]}`}>
                  {" "}
                  <img src={video.thumbnails.medium.url} alt="" />
                  <h3>{video.title}</h3>
                </Link>
              </div>
            );
          }): null} 
        </div>

      </div>
    </div>

          
    )
}

export default ShowVideo

