// styles
import "./Card.css";

function Card({ src, title, description }) {
  // JSX
  return (
    <div className="card">
      <img className="card__image" src={src} alt={title} />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
