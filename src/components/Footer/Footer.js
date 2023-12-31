import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faLinkedin, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faEnvelopeCircleCheck, faEnvelopeSquare, faEnvelopesBulk, faMailBulk } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return (<footer className="footer">
        <h6 className="footer__title">Contact me</h6>
        <div className="footer__links">
            <a href="https://www.linkedin.com/in/rmoh22/" target="_blank" className="footer__link"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            {/* <a href="" target="_blank" className="footer__link"><FontAwesomeIcon icon={faXTwitter} /></a> */}
            <a href="mailto:rezamoh847@gmail.com" target="_blank" className="footer__link"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
        <span className="footer__circle_1"></span>
        <span className="footer__circle_2"></span>
    </footer>)
}
export default Footer;