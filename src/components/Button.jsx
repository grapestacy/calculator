import React from "react";
import { connect } from "react-redux";
import { clear, swapSign, percentage } from "../events/calculator";
import * as Actions from "../constants/actions";
import classes from "./UI/Button.module.css";

const Button = ({ action, label, clear, swapSign, percentage }) => {
  const handleActionRequest = () => {
    switch (action) {
      case Actions.ALL_CLEAR:
        clear();
        break;
      case Actions.SWAP_SIGN:
        swapSign();
        break;
      case Actions.PERCENTAGE:
        percentage();
        break;
      default:
    }
  };

  return (
    <button className={classes.button} onClick={handleActionRequest}>{label}
    </button>
  );
};

export default connect(
  null,
  { clear, swapSign, percentage }
)(Button);
