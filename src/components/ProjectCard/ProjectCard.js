import "./ProjectCard.css";
import { Parallax } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ProjectCard = ({ title, desc, iconPrefix, iconName }) => {
  const [isCardInfoHidden, setIsCardInfoHidden] = useState(false);
  return (
    <div className="card">
      {isCardInfoHidden && (
        <div className="card__header">
          <h5>{title}</h5>
          <FontAwesomeIcon icon={iconName} size="23" />
        </div>
      )}
      {/* <div className="card__body"> */}
      <div className="card__circle">
        <FontAwesomeIcon icon={[iconPrefix, iconName]} size="23" />
      </div>
      {/* </div> */}

      <div className="card__footer">{title}</div>
    </div>
  );
};
export default ProjectCard;
