import "./ProjectCard.css";
import { Parallax } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ title, desc, iconName }) => {
  return (
    <div className="card">
      <div className="card__header">
        <h1>{title}</h1>
        <FontAwesomeIcon icon={iconName} size="23" />
      </div>
      <div className="card__body"></div>
      <div className="card__footer">{desc}</div>
    </div>
  );
};
export default ProjectCard;
