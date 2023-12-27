import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faPen, faSchool } from '@fortawesome/free-solid-svg-icons'
import "./Skills.css";
import Button from "../Button/Button";
import skillsPhotoSrc from '../../images/MyPhoto.png';

const Skills = () => {
    return (<div className="skills">
        <div className='skills__info'>
            <span className='skills__welcome'>ABOUT ME</span>
            <h1 className='skills__title'>
                <span style={{ color: '#07f' }}>4 Years Experience </span>
                <br />
                of Web Development
            </h1>
            <p className='skills__paragraph'>
                Hello there! I'm Robert Junior. I specialize in web design and development, and I'm deeply passionate and committed to my craft. With 20 years of experience as a professional graphic designer  </p>
            <div className='skills__buttons'>
                <Button lightButton={true}>Main Skills</Button>
                <Button >Education </Button   >
            </div>
        </div>
        <img src={skillsPhotoSrc} className='skills__photo' />
    </div>)
}

export default Skills;