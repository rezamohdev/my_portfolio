import Button from "../Button/Button";
import "./Header.css";

const Header = () => {
    return (<header className="header">
        <span className="header__logo"><span style={{ fontSize: 25 }}>💻</span><b>Reza Mohammadi</b></span>
        <div className="header__links">
            <a className="header__link">Home</a>
            <a className="header__link">About Me</a>
            <a className="header__link">Contact me</a>
        </div>
        <a href="mailto:rezamoh847@gmail.com" ><Button>Let's chat</Button></a>
    </header>)
}

export default Header;