import "../../assets/styles/projectCard.css";
import { FaGithub, FaEye } from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  techs: string[];
  image: string;
  github: string;
  demo: string;
}

const ProjectCard = ({
  title,
  description,
  techs,
  image,
  github,
  demo,
}: Props) => {
  return (
    <div className="project-card">
      <div className="image" style={{ backgroundImage: `url(${image})` }} />
      <div className="details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="techs">
          {techs.map((tech) => (
            <div key={tech} className="tech">
              {tech}
            </div>
          ))}
        </div>
        <div className="actions">
          <a href={github}>
            <FaGithub size={16} /> GitHub
          </a>

          <a href={demo}>
            <FaEye size={16} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
