// styles
import "./CardLimitations.css";

function CardLimitations({ src, title, description, index }) {
  // JSX
  return (
    <div className={`card-limitations card-limitations--${index}`}>
      <div className="card-limitations__content">
        <img className="card-limitations__image" src={src} alt={title} />
        <h2 className="card-limitations__title">{title}</h2>
      </div>
      <p className="card-limitations__description">{description}</p>
    </div>
  );
}

export default CardLimitations;
