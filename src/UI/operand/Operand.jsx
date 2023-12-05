import React from "react";
import { connect } from "react-redux";
import { setNumberValue } from "../../actions";
import classes from "./Operand.module.css"

const Operand = ({displayValue, waitingForNumber, number, setNumberValue}) => {


  const handleClick = () => {
    setNumberValue(number, displayValue, waitingForNumber);
  };

  return (
    <button id = {number === 0 ? classes.zero : ''}
    onClick={handleClick}>{number}
    </button>
  );
};

const mapStateToProps = state => {
  return {
      displayValue: state.calculator.displayValue,
      waitingForNumber: state.calculator.waitingForNumber
  }
};

export default connect(
  mapStateToProps,
  { setNumberValue }
)(Operand);
