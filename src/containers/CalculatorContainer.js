import React from "react";
import Display from "../components/Display";
import InputContainer from "./InputContainer";

const CalculatorContainer = () => {
  return (
    <div
      style={{
        width: "50vh",
        height: "70vh",
        border: "0.25vh",
        borderBlockColor: "#000",
        borderRadius: "3vh",
        margin: "8vh auto",
        marginTop: "8vh",
        background: "rgba(0, 0, 0, 0.67)",
        boxShadow: "1.5vh 3vh 3vh rgba(0, 0, 0, 0.47)"
      }}
    >
      <Display output={0} />
      <InputContainer />
    </div>
  );
};

export default CalculatorContainer;
