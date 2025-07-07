import Button from "./UI/Button";
import { GoStar, GoDownload, GoMail } from "react-icons/go";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../assets/styles/hero.css";
import "../assets/images/hero.png";
import { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Hero = () => {
  const introRef = useRef<HTMLHeadingElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const fullText = "Hi, I'm Elijah Eromosele";
  const newText = "Welcome to My Portfolio";

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(introRef.current, {
      duration: 6,
      text: { value: fullText, speed: 0.5, type: "diff" },
      ease: "power1.inOut",
      delay: 0.5,
    })
      .to(
        { length: fullText.length },
        {
          duration: 2,
          length: 0,
          ease: "power1.inOut",
          onUpdate: function () {
            if (introRef.current) {
              const len = Math.floor(this.targets()[0].length);
              introRef.current.textContent = fullText.substring(0, len);
            }
          },
          delay: 0.5,
        }
      )
      .to(introRef.current, {
        duration: 6,
        text: { value: newText, speed: 0.5, type: "diff" },
        ease: "power1.inOut",
        delay: 0.5,
      })
      .to(
        { length: fullText.length },
        {
          duration: 2,
          length: 0,
          ease: "power1.inOut",
          onUpdate: function () {
            if (introRef.current) {
              const len = Math.floor(this.targets()[0].length);
              introRef.current.textContent = newText.substring(0, len);
            }
          },
          delay: 0.5,
        }
      );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { scale: 1, opacity: 1 },
      {
        scale: 0.5,
        opacity: 0.6,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 0%",
          end: "bottom 20%",
          scrub: true
        },
      }
    );
  }, []);

  return (
    <div ref={boxRef} className="hero">
      <div className="left">
        <h1 ref={introRef}></h1>
        <p>Frontend Developer</p>
        <p className="intro">
          I build modern, responsive web apps with clean UI and smooth UX
          blending design and code to create experiences that feel intuitive,
          fast, and delightful to use.
        </p>
        <div className="hero-btn">
          <Button buttonText="Explore Projects" primary icon={<GoStar />} />
          <Button buttonText="Download My CV" icon={<GoDownload />} />
        </div>
        <div className="socials">
          <a href="">
            <FaLinkedinIn />
          </a>
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <GoMail />
          </a>
        </div>
      </div>

      <div className="blob">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 310 350"
        >
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
