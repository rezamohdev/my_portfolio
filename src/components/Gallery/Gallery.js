import React from "react";
import "./Gallery.css";
import GalleryCard from "../GalleryCard/GalleryCard";
import Project1 from "../../images/projects/aroundus.png";
import Project2 from "../../images/projects/synthesis.png";
import Project3 from "../../images/projects/travellian.png";
import Project4 from "../../images/projects/wtwr.png";
const Gallery = () => {
  const Images = [
    {
      image: Project1,
      title: "Around the US",
      link: "https://rezamohdev.github.io/se_project_aroundtheus/",
    },
    {
      image: Project2,
      title: "Externship project, contribution Synthesis Workshop",
      link: "http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/",
    },
    {
      image: Project3,
      title: "Travellian",
      link: "https://main--amazing-sherbet-d588cc.netlify.app/",
    },
    {
      image: Project4,
      title: "What to wear",
      link: "https://github.com/rezamohdev/se_project_react",
    },
  ];
  return (
    <div className="gallery" id="gallery">
      <span className="gallery__span">My Projects</span>
      <h2 className="gallery__title">
        Presenting My technical and externship projects
      </h2>
      <div className="gallery__cards">
        {Images.map((image, index) => (
          <a key={index} href={image.link} target="_blank" rel="noreferrer">
            <GalleryCard
              CardImage={image.image}
              Title={image.title}
              imageAlt={image.title}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
