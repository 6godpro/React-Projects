import "./about.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about_img" className="about-img" />
        <img src={play_icon} alt="about_img" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam qui
          labore odio quisquam sint velit, beatae architecto quos ipsam amet
          illo ut facilis nisi id aliquid impedit! Facilis, assumenda
          cumque?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam qui labore odio quisquam sint velit, beatae architecto quos
          ipsam amet illo ut facilis nisi id aliquid impedit! Facilis, assumenda
          cumque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam qui
          labore odio quisquam sint velit, beatae architecto quos ipsam amet
          illo ut facilis nisi id aliquid impedit! Facilis, assumenda
          cumque?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam qui labore odio quisquam sint velit, beatae architecto quos
          ipsam amet illo ut facilis nisi id aliquid impedit! Facilis, assumenda
          cumque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam qui
          labore odio quisquam sint velit, beatae architecto quos ipsam amet
          illo ut facilis nisi id aliquid impedit! Facilis, assumenda
          cumque?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam qui labore odio quisquam sint velit, beatae architecto quos
          ipsam amet illo ut facilis nisi id aliquid impedit! Facilis, assumenda
          cumque?
        </p>
      </div>
    </div>
  );
};

export default About;
