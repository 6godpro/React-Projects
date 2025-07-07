import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import "../assets/styles/project.css";
import Header from "./UI/Header";
import ProjectCard from "./UI/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
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

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A modern e-commerce platform built with React and TypeScript, featuring a clean design and smooth user experience.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      github: "https://github.com",
      demo: "https://example.com",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=top",
    },
    {
      title: "Task Management App",
      description:
        "A productivity app with drag-and-drop functionality, real-time updates, and collaborative features.",
      tech: ["Next.js", "React", "MongoDB", "Socket.io"],
      github: "https://github.com",
      demo: "https://example.com",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=top",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application with interactive charts and location-based forecasts.",
      tech: ["React", "API Integration", "Chart.js", "CSS3"],
      github: "https://github.com",
      demo: "https://example.com",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=top",
    },
  ];
  return (
    <div ref={boxRef} className="projects-container">
      <Header content="Featured Projects" />
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            techs={project.tech}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
