import "./GalleryCard.css";

const GalleryCard = ({ CardImage, Title, imageAlt }) => {
    return (<div className="gallery-card">
        <img className="gallery-card__image" src={CardImage} alt={imageAlt} />
        <span className="gallery-card__caption">{Title}</span>
    </div>)
}
export default GalleryCard;