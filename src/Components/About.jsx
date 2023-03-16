import "../DarkMode.css";
import "./About.css";
import MeetTheDevelopers from "../Images/MeetTheDevelopers.jpeg";
import AriunaaReading from '../Images/AriunaaReading.jpeg'
import DiandreGym from '../Images/DiandreGym.jpeg'
import vandhanaTravel from '../Images/vandhanaTravel.jpeg'
import Vandhana from "./Vandhana";
import Ariunaa from "./Ariunaa";
import Diandre from "./Diandre";

const About = () => {
  return (
    <div>
      <div className="developers">
        <img
          className="developers__img"
          src={MeetTheDevelopers}
          alt="Meet The Developers"
        />
        <img
          className="vandhana"
          src={vandhanaTravel}
          alt='vandhana in a plane'
          height='300px'
        />
        <Vandhana />
        <img
          className="ariunaa"
          src={AriunaaReading}
          alt='ariunaa in a library'
          height='300px'
        />
        <Ariunaa />
        <img
          className="diandre"
          src={DiandreGym}
          alt='diandre in a gym'
          height='300px'
        />
        <Diandre />
      </div>
    </div>
  );
};

export default About;
