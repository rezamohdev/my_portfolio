import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button';
import './Cover.css';
import CoverPhotoSrc from '../../images/MyPhoto.png';
const Cover = () => {
    return (<div className='cover'>
        <div className='cover__info'>
            <span className='cover__welcome'>Welcome to my Portfolio</span>
            <h1 className='cover__title'>
                Hi I’m
                <br />
                <span style={{ color: '#07f' }}>Reza Mohammadi</span>
                <br />
                React Developer
            </h1>
            <p className='cover__paragraph'>
                Collaborating with highly skilled individuals, our agency delivers top-quality services.
            </p>
            <div className='cover__buttons'>
                <a href='https://www.linkedin.com/in/rmoh22/' target='_blank' rel='noreferrer'><Button lightButton={true}>Hire Me!</Button></a>
                <Button >Download My CV <FontAwesomeIcon icon={faArrowDown} /></Button   >
            </div>
        </div>
        <img src={CoverPhotoSrc} className='cover__photo' alt='cover' />
    </div>)
}

export default Cover;