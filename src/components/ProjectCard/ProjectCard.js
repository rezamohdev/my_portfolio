import "./ProjectCard.css";
import { Parallax } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ProjectCard = ({
  title,
  desc,
  iconPrefix,
  iconName,
  backgroundColor,
}) => {
  const [isCardInfoHidden, setIsCardInfoHidden] = useState(false);
  return (
    <div className="card">
      {isCardInfoHidden && (
        <div className="card__header">
          <h5>{title}</h5>
          <FontAwesomeIcon icon={iconName} size="30" />
        </div>
      )}
      {/* <div className="card__body"> */}
      <div
        className="card__circle"
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <FontAwesomeIcon icon={[iconPrefix, iconName]} size="23" />
      </div>
      {/* </div> */}

      <div className="card__footer">{title}</div>
    </div>
  );
};
export default ProjectCard;
