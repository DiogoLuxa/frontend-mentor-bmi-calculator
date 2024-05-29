// components
import CardLimitations from "../components/CardLimitations";

// data
import { CardDatasLimitations } from "../assets/data/CardDatas";

// styles
import "./SectionFour.css";

function SectionFour() {
  // functions
  const cardLimitations = CardDatasLimitations.map((cardData, index) => {
    const { name, src, title, description } = cardData;
    return (
      <CardLimitations
        key={index}
        src={src[name]}
        title={title}
        description={description}
        index={index}
      />
    );
  });

  // JSX
  return (
    <section className="section-four">
      <div className="section-four__content">
        <h2 className="section-four__title">Limitations of BMI</h2>
        <p className="section-four__description">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      {cardLimitations}
    </section>
  );
}

export default SectionFour;
