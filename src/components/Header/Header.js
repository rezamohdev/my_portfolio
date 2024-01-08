import { useState } from "react";
import Button from "../Button/Button";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from 'react-responsive';

const Header = () => {
    const [showNavbar, isShowNavbar] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    return (<>
        {isMobile ?
            <div className="nav">
                <div className="nav__top">
                    <span className="header__logo"><span style={{ fontSize: 25 }}>💻</span><b>Reza Mohammadi</b></span>
                    <button className="nav__menu-button">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>

                {/* <div className="nav__buttons"> */}
                <ul className="nav__buttons-list">
                    <li className="nav__list-item"><a className="nav__link">Home</a></li>
                    <li className="nav__list-item"><a className="nav__link">About Me</a></li>
                    <li className="nav__list-item"><a className="nav__link">Contact me</a></li>
                </ul>
                {/* </div> */}
            </div>
            :
            <header className="header">
                <span className="header__logo"><span style={{ fontSize: 25 }}>💻</span><b>Reza Mohammadi</b></span>
                <div className="header__links">
                    <a className="header__link">Home</a>
                    <a className="header__link">About Me</a>
                    <a className="header__link">Contact me</a>
                </div>
                <a href="mailto:rezamoh847@gmail.com" ><Button>Let's chat</Button></a>
            </header>
        }
    </>)
}

export default Header;