// components
import Input from "./Input";

// styles
import "./MetricInputs.css";

function MetricInputs({ measurement, setMeasurement }) {
  // functions
  function handleInputChange(event) {
    const { name, value } = event.target;
    setMeasurement((prevMeasurement) => ({
      ...prevMeasurement,
      metric: {
        ...prevMeasurement.metric,
        [name]: value,
      },
    }));
  }

  //JSX
  return (
    <div className="hero__metric-inputs">
      <div className="hero__metric-field__container">
        <label className="hero__metric-inputs__label">
          <span>Height</span>
          <Input
            unit={"metric"}
            name={"height"}
            meas={"height"}
            onChange={handleInputChange}
            className={"hero__metric-inputs__input"}
          />
        </label>
        <p className="hero__metric-inputs__measure">cm</p>
      </div>
      <div className="hero__metric-field__container">
        <label className="hero__metric-inputs__label">
          <span>Weight</span>
          <Input
            unit={"metric"}
            name={"weight"}
            meas={"weight"}
            onChange={handleInputChange}
            className={"hero__metric-inputs__input"}
          />
        </label>
        <p className="hero__metric-inputs__measure">kg</p>
      </div>
    </div>
  );
}

export default MetricInputs;
