import "./GalleryCard.css";
import CardImage from '../../images/preview2.png';

export const GalleryCard = () => {
    return (<div className="gallery-card">
        <img className="gallery-card__image" src={CardImage} />
        <span className="gallery-card__caption">My Project | Portfolio</span>
    </div>)
} 