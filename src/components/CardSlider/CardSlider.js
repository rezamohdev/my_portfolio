import React from "react";
import "./CardSlider.css";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";

const CardSlider = (props) => {
    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    return (
        <div id="main-slider-container">

            <Button onClick={slideLeft} className="slider-icon left">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Button>

            <div id="slider">
                {
                    props.slides.map((slide, index) => {
                        return (
                            <div className="slider-card" key={index} onClick={() => slide.clickEvent()}>
                                <div className="slider-card-image" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}></div>
                                <p className="slider-card-title">{slide.title}</p>
                                <p className="slider-card-description">{slide.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <Button onClick={slideRight} className="slider-icon right">

                <FontAwesomeIcon icon={faArrowRight} />
            </Button>
        </div>
    )
}
export default CardSlider;