import ProjectCard from "../ProjectCard/ProjectCard";
import Preview2 from "../../images/MyPhoto.png";
import "./Main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, far, fab);

const cardData = [
  {
    title: "ReactJS",
    desc: "lorem ipsum dolor",
    iconPrefix: "fab",
    iconName: "react",
    url: "https://community-for-afg.netlify.app/",
    bg: "#33b1ff",
  },
  {
    title: "Nodejs",
    desc: "lorem ipsum dolor",
    iconPrefix: "fab",
    iconName: "node-js",
    url: "https://community-for-afg.netlify.app/",
    bg: "#c5e069",
  },
  {
    title: "SQL",
    desc: "lorem ipsum dolor",
    iconPrefix: "fas",
    iconName: "database",
    url: "https://synthesis-workshop.com/",
    bg: "#2758ba",
  },
  {
    title: "JavaScript",
    desc: "lorem ipsum dolor",
    iconPrefix: "fab",
    iconName: "js",
    url: "https://github.com/rezamohdev/se_project_react",
    bg: "#ffab0f",
  },
  {
    title: "Problem solving",
    desc: "lorem ipsum dolor",
    iconPrefix: "fas",
    iconName: "clipboard-question",
    url: "https://rezamohdev.github.io/se_project_aroundtheus/",
    bg: "#ff4e33",
  },
];
const Main = () => {
  return (
    <div className="main">
      <div className="main__avatar avatar">
        <img src={Preview2} alt="avatarpreview" className="avatar__photo" />
        {/* <div> */}
        <FontAwesomeIcon
          icon={["fab", "react"]}
          className="avatar__circle"
          size="sm"
        />
        {/* </div> */}
      </div>
      {/* {cardData.map((card) => {
        return (
          <ProjectCard
            title={card.title}
            desc={card.desc}
            iconPrefix={card.iconPrefix}
            iconName={card.iconName}
            backgroundColor={card.bg}
          />
        );
      })}*/}
    </div>
  );
};
export default Main;
