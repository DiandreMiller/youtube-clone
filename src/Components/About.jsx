import "../DarkMode.css";
import "./About.css";
import MeetTheDevelopers from "../Images/MeetTheDevelopers.jpeg";

const About = () => {
  return (
    <div>
      <div className="developers">
        <img
          className="developers__img"
          src={MeetTheDevelopers}
          alt="Meet The Developers"
        />
      </div>
    </div>
  );
};

export default About;
