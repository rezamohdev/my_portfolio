import React, { useState,useEffect } from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
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
      
        // Defining functions to perform different types of scrolling.
        const scrollToTop = () => {
          scroll.scrollToTop();
        };
      
        const scrollToBottom = () => {
          scroll.scrollToBottom();
        };
      
        const scrollTo = () => {
          scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
        };
      
        const scrollMore = () => {
          scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
        };
      
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
                    <span className="header__logo"><span style={{ fontSize: 25 }}>💻</span><b>Reza Mohammadi</b></span>
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
                        <a href="mailto:rezamoh847@gmail.com" style={{ marginLeft: 10 }}><Button>Let's chat</Button></a>
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
                <a href="mailto:rezamoh847@gmail.com" ><RoundButton>Let's chat</RoundButton></a>
                <button onClick={scrollToTop} >To the top!</button>
    <br/>
    <button onClick={scrollToBottom}>To the bottom!</button>
    <br/>
    <button onClick={scrollTo}>Scroll to 100px from the top</button>
    <br/>
    <button onClick={scrollMore}>Scroll 100px more from the current position!</button>
                    <Element name="test1" className="element">
      test 1
    </Element>

            </header>
        }
    </>)
}

export default Header;