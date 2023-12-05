import React from "react";
import { connect } from "react-redux";
import {countMath} from "../../actions";
import classes from "./Operator.module.css"

const Operator = ({ value, displayValue, operator, waitingForNumber, label, operation, countMath}) => {

  const handleOperatorRequest = () => {
    countMath(operation, value, displayValue, operator, waitingForNumber);
  };

  return (
    <button id = {operation === "SOLVE" ? classes.solve : ''}
    onClick={handleOperatorRequest}>{label}
    </button>
  );
};

const mapStateToProps = state => {
  return {
      value: state.calculator.value,
      displayValue: state.calculator.displayValue,
      operator: state.calculator.operator,
      waitingForNumber: state.calculator.waitingForNumber
  }
};

export default connect(mapStateToProps, {countMath})(Operator);
