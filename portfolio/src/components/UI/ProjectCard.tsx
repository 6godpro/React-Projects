import "../../assets/styles/projectCard.css";
import { FaGithub } from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  techs: string[];
  image: string;
}

const ProjectCard = ({ title, description, techs, image }: Props) => {
  return (
    <div className="project-card">
      <div className="image" style={{ backgroundImage: `url(${image})` }} />
      <div className="details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="techs">
          {techs.map((tech) => (
            <div key={tech} className="tech">{tech}</div>
          ))}
        </div>
        <span>
          <FaGithub /> Code
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
