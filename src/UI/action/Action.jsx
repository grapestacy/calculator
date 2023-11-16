import React from "react";
import { connect } from "react-redux";
import MyButton from "../button/MyButton";
import { clear, clearAll, percentInput, swapSign } from "../../actions";
import {SWAP_SIGN, CLEAR, CLEAR_ALL, PERCENT} from "../../actions/types";
import classes from "./Action.module.css";
//import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers";

const Action = (props) => {
  const { action, value, displayValue, waitingForNumber} = props;

  const checkClearMethod = displayValue === '0';
  const clearText = checkClearMethod ? 'AC' : 'C';
  console.log(action)
  const handleActionRequest = () => {
    switch (action) {
      case SWAP_SIGN:
        props.swapSign(displayValue);
        break;
      case PERCENT:
        props.percentInput(value, displayValue, waitingForNumber);
        break;
      default:
        (checkClearMethod) ? props.clearAll() : props.clear();
        break;

    }
  };

  return (
    <MyButton onClick={handleActionRequest} customClass={classes.button} 
    label={ (action === CLEAR_ALL || action === CLEAR) ? clearText : props.label}>
    </MyButton>
  );
};

const mapStateToProps = state => {
  return {
      value: state.data.value,
      displayValue: state.data.displayValue,
      waitingForNumber: state.data.waitingForNumber
  }
};

export default connect(mapStateToProps, { 
  clear,
  clearAll,
  swapSign,
  percentInput }
)(Action);
