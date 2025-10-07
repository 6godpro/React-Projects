import { useRef } from "react";
import "@/assets/styles/project.css";
import Header from "./ui/Header";
import ProjectCard from "./ui/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Radiance Reach Charity Foundation",
      description:
        "A responsive web platform for Radiance Reach Charity Foundation — empowering communities through education, healthcare, and outreach initiatives.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      github: "https://github.com/6godpro/Radiance-Reach-Foundation/",
      demo: "https://radiance-reach-foundation.pages.dev/",
      image: "/landing_page.png",
    },
    {
      title: "Task Management App",
      description:
        "A productivity app with drag-and-drop functionality, real-time updates, and collaborative features.",
      tech: ["Next.js", "React", "MongoDB", "Socket.io"],
      github: "",
      demo: "",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=top",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application with interactive charts and location-based forecasts.",
      tech: ["React", "API Integration", "Chart.js", "CSS3"],
      github: "",
      demo: "",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=top",
    },
  ];
  return (
    <div ref={boxRef} id="projects">
      <Header content="Featured Projects" />
      <div className="works">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techs={project.tech}
              image={project.image}
              github={project.github}
              demo={project.demo}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
