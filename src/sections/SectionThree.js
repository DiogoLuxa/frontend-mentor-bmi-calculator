// components
import Card from "../components/Card";

// data
import { CardDatas } from "../assets/data/CardDatas";

// styles
import "./SectionThree.css";

function SectionThree() {
  // functions
  const CardComponents = CardDatas.map(({ name, src, title, description }) => {
    return <Card src={src[name]} title={title} description={description} />;
  });

  //JSX
  return (
    <section className="section-three">
      <div className="section-three__card-components">{CardComponents}</div>
    </section>
  );
}

export default SectionThree;
