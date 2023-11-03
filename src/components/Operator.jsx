import React from "react";
import { connect } from "react-redux";
import { SOLVE } from "../constants/operations";
import { assignOperator, solve } from "../events/calculator";
import classes from "./UI/Operator.module.css"

const Operator = ({ operator, label, assignOperator }) => {
  const handleOperatorRequest = () => {
    switch (operator) {
      case SOLVE:
        solve();
        break;
      default:
        assignOperator(operator);
        break;
    }
  };

  return (
    <button className={classes.operator} 
    style = {{
      borderRadius: operator === "SOLVE" ? "0 0 3vh 0" : 0}}
      onClick={handleOperatorRequest}
    >
      {label}
    </button>
  );
};

export default connect(
  null,
  { assignOperator, solve }
)(Operator);
