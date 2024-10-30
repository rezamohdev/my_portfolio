import ProjectCard from "../ProjectCard/ProjectCard";
import "./Main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Add all icons to the library so you can use it in your page
const iconList = Object.keys(Icons)
  .filter((key) => key !== "fa" && key !== "prefix")
  .map((icon) => Icons[icon]);
library.add(fas, far, fab, iconList);

// library.add(...iconList);
const cardData = [
  {
    title: "Travellian ( an August 2023 code jam)",
    desc: "lorem ipsum dolor",
    iconPrefix: "fab",
    iconName: "react",
    url: "https://community-for-afg.netlify.app/",
  },
  {
    title: "The community website",
    desc: "lorem ipsum dolor",
    iconPrefix: "fas",
    iconName: "users",
    url: "https://community-for-afg.netlify.app/",
  },
  {
    title: "Synthesis workshop",
    desc: "lorem ipsum dolor",
    iconPrefix: "fas",
    iconName: "flask",
    url: "https://synthesis-workshop.com/",
  },
  {
    title: "What to wear",
    desc: "lorem ipsum dolor",
    iconPrefix: "fas",
    iconName: "shirt",
    url: "https://github.com/rezamohdev/se_project_react",
  },
  {
    title: "About the US. photo gallery",
    desc: "lorem ipsum dolor",
    iconPrefix: "fas",
    iconName: "images",
    url: "https://rezamohdev.github.io/se_project_aroundtheus/",
  },
];
const Main = () => {
  return (
    <div className="main">
      {cardData.map((card) => {
        return (
          <ProjectCard
            title={card.title}
            desc={card.desc}
            iconPrefix={card.iconPrefix}
            iconName={card.iconName}
          />
        );
      })}
    </div>
  );
};
export default Main;
