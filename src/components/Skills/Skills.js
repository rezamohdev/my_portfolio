import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faPen, faSchool } from '@fortawesome/free-solid-svg-icons'
import "./Skills.css";
import Button from "../Button/Button";
import skillsPhotoSrc from '../../images/MyPhoto.png';
import TabGroup from '../TabGroup/TabGroup';

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
                Hello there! I'm <b>Reza Mohammadi</b>. I specialize in web design and development, and I'm deeply passionate and committed to my craft. With<b> 4 Years</b> of experience as a Web Developer </p>
            <div className='skills__buttons'>
                <TabGroup />
            </div>
        </div>
        <img src={skillsPhotoSrc} className='skills__photo' />
    </div>)
}

export default Skills;