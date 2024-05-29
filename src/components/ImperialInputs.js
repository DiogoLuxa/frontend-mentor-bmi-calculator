// components
import Input from "./Input";

// styles
import "./ImperialInputs.css";

function ImperialInputs({ measurement, setMeasurement }) {
  // functions
  function handleInputChange(event) {
    const { name, value } = event.target;
    setMeasurement((prevMeasurement) => ({
      ...prevMeasurement,
      imperial: {
        ...prevMeasurement.imperial,
        [name === "ft" || name === "in" ? "height" : "weight"]: {
          ...prevMeasurement.imperial[
            name === "ft" || name === "in" ? "height" : "weight"
          ],
          [name]: value,
        },
      },
    }));
  }

  // JSX
  return (
    <div className="hero__imperial-inputs">
      <div className="hero__imperial-field__container">
        <label className="hero__imperial-inputs__label">
          <span>Height</span>
          <div className="hero__imperial-inputs__container">
            <div className="hero__imperial-input__container">
              <Input
                unit="imperial"
                name="ft"
                meas={"height"}
                onChange={handleInputChange}
                className="hero__imperial-inputs__input--height"
              />
              <p className="hero__imperial-inputs__measure">ft</p>
            </div>
            <div className="hero__imperial-input__container">
              <Input
                unit="imperial"
                name="in"
                meas={"height"}
                onChange={handleInputChange}
                className="hero__imperial-inputs__input--height"
              />
              <p className="hero__imperial-inputs__measure">in</p>
            </div>
          </div>
        </label>
      </div>
      <div className="hero__imperial-field__container">
        <label className="hero__imperial-inputs__label">
          <span>Weight</span>
          <div className="hero__imperial-inputs__container">
            <div className="hero__imperial-input__container">
              <Input
                unit="imperial"
                name="st"
                meas={"weight"}
                onChange={handleInputChange}
                className="hero__imperial-inputs__input--weight"
              />
              <p className="hero__imperial-inputs__measure">st</p>
            </div>
            <div className="hero__imperial-input__container">
              <Input
                unit="imperial"
                name="lbs"
                meas={"weight"}
                onChange={handleInputChange}
                className="hero__imperial-inputs__input--weight"
              />
              <p className="hero__imperial-inputs__measure">lbs</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default ImperialInputs;
