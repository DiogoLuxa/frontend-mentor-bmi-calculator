import React, { createContext, useState } from "react";

const BMICalculatorFormContext = createContext();

const BMICalculatorFormProvider = ({ children }) => {
  const [measurement, setMeasurement] = useState({
    metric: { height: "", weight: "" },
    imperial: { height: { ft: "", in: "" }, weight: { st: "", lbs: "" } },
  });

  const contextValue = {
    measurement,
    setMeasurement,
  };

  return (
    <BMICalculatorFormContext.Provider value={contextValue}>
      {children}
    </BMICalculatorFormContext.Provider>
  );
};

export { BMICalculatorFormContext, BMICalculatorFormProvider };
