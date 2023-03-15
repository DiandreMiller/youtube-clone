import YouTube from "react-youtube";
import "./ShowVideo.css";
import { useParams} from "react-router-dom";
import Comments from "./Comments";
import FutureWorks from "./FutureWorks";
import Error from "./Error";


const ShowVideo = (handleSearch, errorMessage,
    setSearch, search,
    isError, setIsError, isModalMenuOpen, setIsModalMenuOpen, handleButtonClick ) => {
    const { id } = useParams();
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

      </div>
    </div>

            <YouTube videoId={id} />
        </div>
        <Comments/>
        </div>
    )
}

export default ShowVideo

