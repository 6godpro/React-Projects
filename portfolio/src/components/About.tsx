import "../assets/styles/about.css";
import Button from "./UI/Button";
import Header from "./UI/Header";
import profile from "../assets/images/profile.png";
import { GoDownload } from "react-icons/go";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const mainPhotoRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { scale: 1, opacity: 1 },
      {
        scale: 0.5,
        opacity: 0.6,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 10%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.to(mainPhotoRef.current, {
      rotation: -360,
      ease: "none",
      scrollTrigger: {
        trigger: mainPhotoRef.current,
        start: "top bottom",
        end: "top 20%",
        scrub: true,
      },
    });

    gsap.to(bottomRef.current, {
      rotation: 360,
      ease: "none",
      scrollTrigger: {
        trigger: bottomRef.current,
        start: "top bottom",
        end: "top 20%",
        scrub: true,
      },
    });

    gsap.to(topRef.current, {
      rotation: 360,
      ease: "none",
      scrollTrigger: {
        trigger: topRef.current,
        start: "top bottom",
        end: "top 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={boxRef} className="about">
      <Header content="About Me" />
      <div className="content">
        <div className="left">
          <p>
            I'm a passionate frontend developer with a love for creating
            beautiful, functional web experiences. I believe in writing clean,
            maintainable code and staying up-to-date with the latest
            technologies. <br />
            <br />
            When I'm not coding, you can find me exploring new design trends,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>
          <div className="about-btn">
            <Button
              buttonText="Download My Resume"
              primary
              icon={<GoDownload />}
            />
          </div>
        </div>
        <div className="right">
          <div ref={topRef} className="top-corner">
            <img src={profile} alt="profile-photo" />
          </div>
          <div ref={bottomRef} className="bottom-corner">
            <img src={profile} alt="profile-photo" />
          </div>
          <div ref={mainPhotoRef} className="main-photo">
            <img src={profile} alt="profile-photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
