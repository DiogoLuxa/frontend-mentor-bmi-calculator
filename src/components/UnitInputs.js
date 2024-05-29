// styles
import "./UnitInputs.css";

function UnitInputs({ unit, setUnit }) {
  // functions
  function handleUnitChange(event) {
    setUnit(event.target.value);
  }

  // JSX
  return (
    <div className="hero__unit-inputs">
      <div className="hero__unit-inputs__option">
        <label
          className="hero__unit-inputs__label--metric"
          style={
            unit === "metric"
              ? {
                  backgroundColor: "rgba(52,95,246,0.15)",
                  border: "none",
                }
              : {}
          }
        >
          <input
            type="radio"
            value="metric"
            name="unit"
            checked={unit === "metric"}
            onChange={handleUnitChange}
            className="hero__unit-inputs__input--metric"
          />
          <span className="checkmark"></span>
        </label>
        <p>Metric</p>
      </div>
      <div className="hero__unit-inputs__option">
        <label
          className="hero__unit-inputs__label--imperial"
          style={
            unit === "imperial"
              ? {
                  backgroundColor: "rgba(52,95,246,0.15)",
                  border: "none",
                }
              : {}
          }
        >
          <input
            type="radio"
            value="imperial"
            name="unit"
            checked={unit === "imperial"}
            onChange={handleUnitChange}
            className="hero__unit-inputs__input--imperial"
          />
          <span className="checkmark"></span>
        </label>
        <p>Imperial</p>
      </div>
    </div>
  );
}

export default UnitInputs;
