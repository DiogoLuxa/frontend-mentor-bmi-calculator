//hooks
import { useState, useEffect, useContext } from "react";

// context
import { BMICalculatorFormContext } from "../contexts/BMICalculatorFormContext";

// components
import UnitInputs from "./UnitInputs";
import MetricInputs from "./MetricInputs";
import ImperialInputs from "./ImperialInputs";

// styles
import "./BMICalculatorForm.css";

function BMICalculatorForm() {
  // context
  const { measurement, setMeasurement } = useContext(BMICalculatorFormContext);

  // states
  const [unit, setUnit] = useState("metric");
  const [bmi, setBmi] = useState("");
  const [classification, setClassification] = useState("");
  const [healthyWeightRange, setHealthyWeightRange] = useState([]);

  // functions
  const isInvalidMetricValue = (value) => isNaN(value) || value <= 0;

  const isInvalidImperialValue = ({ ft, in: inch }) =>
    isNaN(ft) || ft <= 0 || isNaN(inch) || inch <= 0;

  const isInvalidImperialWeight = ({ st, lbs }) =>
    isNaN(st) || st <= 0 || isNaN(lbs) || lbs <= 0;

  function calculateBMI() {
    if (
      (unit === "metric" &&
        (isInvalidMetricValue(measurement.metric.height) ||
          isInvalidMetricValue(measurement.metric.weight))) ||
      (unit === "imperial" &&
        (isInvalidImperialValue(measurement.imperial.height) ||
          isInvalidImperialWeight(measurement.imperial.weight)))
    ) {
      return;
    }

    let height, weight, bmiValue;
    if (unit === "metric") {
      height = measurement.metric.height / 100; // convert cm to m
      weight = measurement.metric.weight;
      bmiValue = (weight / height ** 2).toFixed(1);
    } else {
      height =
        parseFloat(measurement.imperial.height.ft * 12) +
        parseFloat(measurement.imperial.height.in);
      weight =
        parseFloat(measurement.imperial.weight.st * 14) +
        parseFloat(measurement.imperial.weight.lbs);
      bmiValue = ((weight / height ** 2) * 703).toFixed(1);
    }

    setBmi(bmiValue);
    BMIClassification(bmiValue);
    calculateHealthyWeightRange(unit === "metric" ? height * 100 : height);
  }

  function BMIClassification(bmiValue) {
    if (bmiValue > 0 && bmiValue < 18.5) {
      return "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      return "Healthy weight";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      return "Overweight";
    } else if (bmiValue >= 30) {
      return "Obese";
    } else {
      return "...";
    }
  }

  function calculateHealthyWeightRange(height) {
    if (unit === "metric") {
      const heightInMeters = height / 100;
      const minWeight = (18.5 * heightInMeters ** 2).toFixed(1);
      const maxWeight = (24.9 * heightInMeters ** 2).toFixed(1);
      setHealthyWeightRange([minWeight, maxWeight]);
    } else {
      const heightInMeters = height * 0.0254;
      const minWeightKg = 18.5 * heightInMeters ** 2;
      const maxWeightKg = 24.9 * heightInMeters ** 2;
      const minWeightSt = Math.floor(minWeightKg / 6.35029); // 1 stone = 6.35029 kg
      const minWeightLbs = ((minWeightKg / 6.35029) % 1) * 14; // 1 stone = 14 libras
      const maxWeightSt = Math.floor(maxWeightKg / 6.35029); // 1 stone = 6.35029 kg
      const maxWeightLbs = ((maxWeightKg / 6.35029) % 1) * 14; // 1 stone = 14 libras

      setHealthyWeightRange([
        minWeightSt.toFixed(0),
        minWeightLbs.toFixed(0),
        maxWeightSt.toFixed(0),
        maxWeightLbs.toFixed(0),
      ]);
    }
  }

  function resetAll() {
    setMeasurement({
      metric: { height: "", weight: "" },
      imperial: { height: { ft: "", in: "" }, weight: { st: "", lbs: "" } },
    });
    setBmi("");
    setClassification("");
    setHealthyWeightRange([]);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      calculateBMI();
    }
  }

  // effects
  useEffect(() => {
    setClassification(BMIClassification(bmi));
  }, [bmi]);

  useEffect(() => {
    resetAll();
  }, [unit]);

  // JSX
  return (
    <div className="hero__bmi-calculator">
      <form className="hero__form" onKeyDown={handleKeyDown}>
        <h2 className="hero__form__title">Enter your details below</h2>
        <UnitInputs unit={unit} setUnit={setUnit} />
        {unit === "metric" ? (
          <MetricInputs
            measurement={measurement.metric}
            setMeasurement={setMeasurement}
          />
        ) : (
          <ImperialInputs
            measurement={measurement.imperial}
            setMeasurement={setMeasurement}
          />
        )}
      </form>
      <div className={`hero__bmi-result ${bmi && "hero__bmi-result--flex"}`}>
        <div className="hero__bmi-result__content">
          {bmi === "" ? (
            <>
              <h2
                className="hero__bmi-result__title"
                style={{ fontSize: "2.4rem" }}
              >
                Welcome!
              </h2>
              <p className="hero__bmi-result__classification">
                Enter your height and weight and you’ll see your BMI result here
              </p>
            </>
          ) : (
            ""
          )}
          {bmi && <h2 className="hero__bmi-result__title">Your BMI is...</h2>}
          {bmi && <p className="hero__bmi-result__value">{bmi}</p>}
        </div>
        <div className="hero__bmi-result__details">
          {bmi && (
            <p className="hero__bmi-result__classification">
              Your BMI suggests you're {classification}.{" "}
            </p>
          )}
          {bmi &&
            (unit === "metric" ? (
              <p className="hero__bmi-result__ideal-weight hero__bmi-result__ideal-weight--metric">
                Your ideal weight is between {healthyWeightRange[0]}kgs -{" "}
                {healthyWeightRange[1]}kgs.
              </p>
            ) : (
              <p className="hero__bmi-result__ideal-weight hero__bmi-result__ideal-weight--imperial">
                Your ideal weight is between {healthyWeightRange[0]}st{" "}
                {healthyWeightRange[1]}lbs - {healthyWeightRange[2]}st{" "}
                {healthyWeightRange[3]}lbs.
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default BMICalculatorForm;
