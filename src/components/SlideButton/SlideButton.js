import ReactDOM from 'react-dom'
import './SlideButton.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faArrowRight, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faCheckSquare, faCoffee)
const SlideButton = ({ right = false, active = true }) => {
    return (<button className={`slider-button ${active && 'slider-button_type_active'} `}>
        {right ? (<FontAwesomeIcon color='#fff' size='xl' icon={faArrowRight} />) : (<FontAwesomeIcon size='xl' icon={faArrowLeft} />)}
    </button>)
}
export default SlideButton;