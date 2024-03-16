import React, { useState,useEffect } from "react";
import { Link, Button, Events,  scrollSpy } from 'react-scroll';
import RoundButton from "../RoundButton/RoundButton";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from 'react-responsive';

const Header = () => {
    // const [showNavbar, isShowNavbar] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
    //main ->
        // Registering the 'begin' event and logging it to the console when triggered.
        Events.scrollEvent.register('begin', (to, element) => {
          console.log('begin', to, element);
        });
    
        // Registering the 'end' event and logging it to the console when triggered.
        Events.scrollEvent.register('end', (to, element) => {
          console.log('end', to, element);
        });
        scrollSpy.update();
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
          };
        }, []);
      
       
      
        // Function to handle the activation of a link.
        const handleSetActive = (to) => {
          console.log(to);
        };

    const handleMenuClick = () => {
        
        setIsOpen(!isOpen);
    }
    return (<>
        {isMobile ?
            <div className="nav">
                <div className="nav__top">
                    <span className="header__logo">
                        <span style={{ fontSize: 25 }}>💻    </span><b> Reza Mohammadi</b></span>
                    <button className="nav__menu-button" onClick={handleMenuClick}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>

                {/* <div className="nav__buttons"> */}
                {isOpen && (
                    <div className="nav__menu">
                        <ul className="nav__buttons-list">
                            <li className="nav__list-item"><Link className="nav__link" href="#">Home</Link></li>
                            <li className="nav__list-item"><Link className="nav__link" href="#">About Me</Link></li>
                            <li className="nav__list-item"><Link className="nav__link" href="#">Contact me</Link></li>
                        </ul>
                        <a href="mailto:mailto:rezamohamadi463@yahoo.com" style={{ marginLeft: 10 }}><Button>Let's chat</Button></a>
                    </div>
                )}
                {/* </div> */}
            </div>
            :
            <header className="header">
                <span className="header__logo"><span style={{ fontSize: 25 }}>💻</span><b>Reza Mohammadi</b></span>
                <ul className="header__links">
                    <li>
                        <Link activeClass="active" 
                        to="test1" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500} 
      onSetActive={handleSetActive} className="header__link" href="#">Home</Link>
                    </li>
                    <li>
                        <Link className="header__link" href="#">About Me</Link>
                    </li>
                    <li>
                        <Link className="header__link" href="#">Contact me</Link>
                    </li>
                </ul>
                <a href="mailto:mailto:rezamohamadi463@yahoo.com" ><RoundButton>Let's chat</RoundButton></a>
                

            </header>
        }
    </>)
}

export default Header;