import React from "react";
import { connect } from "react-redux";
import MyButton from "../button/MyButton";
import { decimalInput, digitInput } from "../../actions";
import classes from "./Operand.module.css"

const Operand = (props) => {

  const {displayValue, waitingForNumber} = props;

  const handleClick = () => {
    if (String(props.number) !== '.') {
      props.digitInput(String(props.number), displayValue, waitingForNumber);   
    }
    else {
      props.decimalInput(props.number, displayValue, waitingForNumber);   

    }
  };

  return (
    <MyButton customClass = {classes.button}
    id = {props.number === 0 ? classes.zero : ''}
    //{number === 0 ? (classes.button + ' ' + classes.zero) : classes.button}
    onClick={handleClick}
    label={props.number}>
    </MyButton>
  );
};

const mapStateToProps = state => {
  return {
      displayValue: state.data.displayValue,
      waitingForNumber: state.data.waitingForNumber
  }
};

export default connect(
  mapStateToProps,
  { digitInput, decimalInput }
)(Operand);
