import React from "react";
import "./Gallery.css";
import GalleryCard from "../GalleryCard/GalleryCard";
import Project1 from "../../images/projects/preview2.png";
import Project2 from "../../images/projects/synthesis.png";
const Gallery = () => {
    const Images = [
        { image: Project1, title: "Project 1", link: "https://www.google.com/" },
        { image: Project2, title: "Externship project, contribution Synthesis Workshop", link: "http://synthesis-workshop.com.s3-website-us-east-1.amazonaws.com/" },
        { image: Project1, title: "Project 1", link: "https://www.google.com/" },
        { image: Project1, title: "Project 1", link: "https://www.google.com/" },
        { image: Project1, title: "Project 1", link: "https://www.google.com/" },
        { image: Project1, title: "Project 1", link: "https://www.google.com/" },
    ];
    return (<div className="gallery">
        <span className="gallery__span">My Projects</span>
        <h2 className="gallery__title">
            Presenting My Design Portfolio and Case Studies
        </h2>
        <div className="gallery__cards">
            {Images.map((image, index) => (
                <a key={index} href={image.link} target="_blank" rel='noreferrer'>
                    <GalleryCard CardImage={image.image} Title={image.title} imageAlt={image.title} />
                </a>
            ))}
        </div>
    </div>)
}
export default Gallery;