import ProjectCard from "../ProjectCard/ProjectCard";
import avatar from "../../images/avatar.jpeg";
import "./Main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";


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
      <div className="main__top">
        <div className="main__avatar avatar">
          <img src={avatar} alt="avatarpreview" className="avatar__photo" />

          {/* <div> */}
          <FontAwesomeIcon
            icon={["fab", "react"]}
            className="avatar__circle"
            size="sm"
          />
          {/* </div> */}
        </div>
        <div className="main__info">
          <div className="main__cover"></div>

              <motion.h2
                  style={{overflow:'hidden',  whiteSpace:"nowrap", color:"#fff", fontSize:"95px"}}
                  initial={{width:0}}
                  animate={{ width:"100%" }}
                  transition={{
                    duration: 2,
                    ease:"easeInOut"
                  }}
              >
Reza Mohammadi <br/> Front end developer
              </motion.h2>
        </div>
      </div>
      <div className="main__cards">
        {cardData.map((card) => {
          return (
            <ProjectCard
              title={card.title}
              desc={card.desc}
              iconPrefix={card.iconPrefix}
              iconName={card.iconName}
              backgroundColor={card.bg}
              key={card.id}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Main;
