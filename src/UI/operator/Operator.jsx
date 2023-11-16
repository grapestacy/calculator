import React from "react";
import { connect } from "react-redux";
import MyButton from "../button/MyButton";
import {doMath} from "../../actions";
import classes from "./Operator.module.css"

const Operator = (props) => {

  const { value, displayValue, operator, waitingForNumber} = props;

  const handleOperatorRequest = () => {
    props.doMath(props.operation, value, displayValue, operator, waitingForNumber);
  };

  return (
    <MyButton customClass = {classes.button} 
    id = {props.operation === "SOLVE" ? classes.solve : ''}
    //operator === "SOLVE" ? ( classes.button + ' ' + classes.solve) : classes.button}
    onClick={handleOperatorRequest}
    label={props.label}>
    </MyButton>
  );
};

const mapStateToProps = state => {
  return {
      value: state.data.value,
      displayValue: state.data.displayValue,
      operator: state.data.operator,
      waitingForNumber: state.data.waitingForNumber
  }
};

export default connect(mapStateToProps, {doMath})(Operator);
