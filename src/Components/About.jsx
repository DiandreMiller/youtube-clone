import "../DarkMode.css";
import "./About.css";
import MeetTheDevelopers from "../Images/MeetTheDevelopers.jpeg";
import AriunaaReading from "../Images/AriunaaReading.jpeg";
import DiandreGym from "../Images/DiandreGym.jpeg";
import vandhanaTravel2 from "../Images/vandhanaTravel2.jpeg";
import Vandhana from "./Vandhana";
import Ariunaa from "./Ariunaa";
import Diandre from "./Diandre";
import SpecialThanks from "./SpecialThanks";

const About = () => {
  return (
    <div className="developers">
      <img
        className="developers__img"
        src={MeetTheDevelopers}
        alt="Meet The Developers"
      />
      <h1 className="aboutUs">Learn About Us:</h1>
      <div className="vandhana-container">
        <img
          className="vandhana"
          src={vandhanaTravel2}
          alt="vandhana in a plane"
          height="700px"
        />
        <div className="text-overlay">
          <p>Hi, I like to travel!</p>
          {/* <div className="bubble hobbies">
      <h3>Hobbies</h3>
    </div>
    <div className="bubble linkedin">
      <h3>LinkedIn</h3>
    </div>
    <div className="bubble github">
      <h3>GitHub</h3>
    </div>
    <div className="bubble interest">
      <h3>Interest</h3>
    </div>
    <div className="bubble skills">
      <h3>Skills</h3>
    </div> */}
        </div>
      </div>
      <Vandhana />
      <div className="ariunaa-container">
        <img
          className="ariunaa"
          src={AriunaaReading}
          alt="ariunaa in a library"
          height="700px"
        />
        <div className="text-overlay">
          <p>Hi, I like to read!</p>
        </div>
      </div>
      <Ariunaa />
      <div className="diandre-container">
        <img
          className="diandre"
          src={DiandreGym}
          alt="diandre in a gym"
          height="700px"
        />
        <div className="text-overlay">
          <p>Hi, I only show my beard at the gym!</p>
        </div>
      </div>
      <Diandre />
      <SpecialThanks/>
    </div>

    

    
  );
};

export default About;
