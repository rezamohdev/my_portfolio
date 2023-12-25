import Button from "../Button/Button";
import "./Header.css";

const Header = () => {
    return (<div className="header">
        <span className="header__logo"><span style={{ fontSize: 25 }}>💻</span><b>Reza Mohammadi</b></span>
        <div className="header__links">
            <a className="header__link">Home</a>
            <a className="header__link">About Me</a>
            <a className="header__link">Contact me</a>
        </div>
        <Button>Let's chat</Button>
    </div>)
}

export default Header;