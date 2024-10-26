import ProjectCard from "../ProjectCard/ProjectCard";
import "./Main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fa" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);
const cardData = [
  {
    title: "Travellian ( an August 2023 code jam)",
    desc: "lorem ipsum dolor",
    iconName: "suitcase-rolling",
    url: "https://community-for-afg.netlify.app/",
  },
  {
    title: "The community website",
    desc: "lorem ipsum dolor",
    iconName: "users",
    url: "https://community-for-afg.netlify.app/",
  },
  {
    title: "Synthesis workshop",
    desc: "lorem ipsum dolor",
    iconName: "flask",
  },
  {
    title: "What to wear",
    desc: "lorem ipsum dolor",
    iconName: "shirt",
  },
  {
    title: "About the US. photo gallery",
    desc: "lorem ipsum dolor",
    iconName: "images",
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
            iconName={card.iconName}
          />
        );
      })}
    </div>
  );
};
export default Main;
