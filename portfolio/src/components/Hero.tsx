import Button from "./ui/Button";
import { GoDownload } from "react-icons/go";
import { FaLinkedinIn, FaGithub, FaPhoneAlt } from "react-icons/fa";
import "@/assets/styles/hero.css";
import "@/assets/images/hero.png";
import LightRays from "./LightRays";
import { scrollToSection } from "@/utils/scrollToSection";

const Hero = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    scrollToSection("contact");
  };

  return (
    <section id="home">
      <div className="home-content">
        <div className="memoji" inert>
          <img src="/profile_icon.png" alt="" />
        </div>
        <h3 inert>Hi, I'm Elijah</h3>
        <h1 inert>I turn ideas into interactive experiences</h1>
        <p inert>
          A front end developer focused on using React, TypeScript, and
          GSAP/Framer Motion to deliver seamless digital experiences.
        </p>
        <div className="cta">
          <a href="#contact" onClick={handleClick}>
            <Button
              buttonText="Contact me"
              primary
              icon={<FaPhoneAlt />}
              fontSize=".8rem"
            />
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1WBqkPQSnKk1MPGvb478Giqzf8HTknxnE"
            download
          >
            <Button
              buttonText="Download My CV"
              icon={<GoDownload />}
              fontSize=".8rem"
            />
          </a>
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/elijah-eromosele-146b5923b"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://www.github.com/6godpro" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1}
          lightSpread={2}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.06}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
    </section>
  );
};

export default Hero;
