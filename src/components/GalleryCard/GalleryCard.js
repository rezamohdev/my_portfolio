import "./GalleryCard.css";

const GalleryCard = ({ CardImage, Title }) => {
    return (<div className="gallery-card">
        <img className="gallery-card__image" src={CardImage} />
        <span className="gallery-card__caption">{Title}</span>
    </div>)
}
export default GalleryCard;