// hooks
import { useContext } from "react";

// context
import { BMICalculatorFormContext } from "../contexts/BMICalculatorFormContext";

// styles
import "./Input.css";

function Input({ unit, name, meas, onChange, className }) {
  // context
  const { measurement } = useContext(BMICalculatorFormContext);

  // JSX
  return (
    <input
      name={name}
      type="number"
      min="0"
      value={
        unit === "metric"
          ? measurement[unit][meas]
          : measurement[unit][meas][name]
      }
      onChange={onChange}
      className={className}
    />
  );
}

export default Input;
