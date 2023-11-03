import React from "react";
import Button from "../components/Button";
import Operand from "../components/Operand";
import Operator from "../components/Operator";
import * as Actions from "../constants/actions";
import * as Operations from "../constants/operations";

const InputContainer = () => {
  const inputs = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        gridGap: "0.18vh"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          justifyItems: "center",
          alignItems: "center",
          gridGap: "0.18vh"
        }}
      >
        <Button action={Actions.ALL_CLEAR} label="AC" />
        <Button action={Actions.SWAP_SIGN} label="+/-" />
        <Button action={Actions.PERCENTAGE} label="%" />
        
        {inputs.map(i => (
          <Operand number={i} key={i}/>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          justifyItems: "center",
          alignItems: "center",
          gridGap: "0.18vh"
        }}
      >
        <Operator operator={Operations.MULTIPLY} label="x" />
        <Operator operator={Operations.MINUS} label="-" />
        <Operator operator={Operations.DIVIDE} label="÷" />
        <Operator operator={Operations.PLUS} label="+" />
        <Operator operator={Operations.SOLVE} label="=" />
      </div>
    </div>
  );
};

export default InputContainer;
