// provider
import { BMICalculatorFormProvider } from "../contexts/BMICalculatorFormContext";

// components
import BMICalculatorForm from "../components/BMICalculatorForm";

// images
import logo from "../assets/images/logo.svg";

// styles
import "./SectionOne.css";

function SectionOne() {
  // JSX
  return (
    <section className="section-one hero">
      <img className="hero__logo" src={logo} alt="logo" />
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Body Mass Index Calculator</h1>
          <p className="hero__description">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <BMICalculatorFormProvider>
          <BMICalculatorForm />
        </BMICalculatorFormProvider>
      </div>
    </section>
  );
}

export default SectionOne;
