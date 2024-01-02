import { useState } from "react";
import Button from "../Button/Button";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [showNavbar, isShowNavbar] = useState(false);
    return (<>
        {showNavbar ? <header className="header">
            <span className="header__logo"><span style={{ fontSize: 25 }}>💻</span><b>Reza Mohammadi</b></span>
            <div className="header__links">
                <a className="header__link">Home</a>
                <a className="header__link">About Me</a>
                <a className="header__link">Contact me</a>
            </div>
            <a href="mailto:rezamoh847@gmail.com" ><Button>Let's chat</Button></a>
        </header> : <div className="nav">
            <dic className="nav__top">
                <span className="header__logo"><span style={{ fontSize: 25 }}>💻</span><b>Reza Mohammadi</b></span>
                <button className="nav__menu-button">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </dic>

            <div className="nav__buttons">
                <a className="header__link">Home</a>
                <a className="header__link">About Me</a>
                <a className="header__link">Contact me</a>
            </div>
        </div>}
    </>)
}

export default Header;