import React from "react";
import Action from "../UI/action/Action";
import Operand from "../UI/operand/Operand";
import Operator from "../UI/operator/Operator";
import {
  CLEAR_ALL,
  CLEAR,
  PERCENT,
  SWAP_SIGN

}  from "../actions/types";
import * as Operations from "../constants/operations";


const InputContainer = () => {
  const inputs = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        gridGap: "0.2vh"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          justifyItems: "center",
          alignItems: "center",
          gridGap: "0.2vh"
        }}
      >
        <Action action={CLEAR_ALL} label="AC" />
        <Action action={SWAP_SIGN} label="+/-" />
        <Action action={PERCENT} label="%" />
        
        {inputs.map(i => (
          <Operand number={i} key={i}/>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          justifyItems: "center",
          alignItems: "center",
          gridGap: "0.2vh"
        }}
      >
        <Operator operation={Operations.MULTIPLY} label="x" />
        <Operator operation={Operations.MINUS} label="-" />
        <Operator operation={Operations.DIVIDE} label="÷" />
        <Operator operation={Operations.PLUS} label="+" />
        <Operator operation={Operations.SOLVE} label="=" />
      </div>
    </div>
  );
};



export default InputContainer;