import React from "react";
import { connect } from "react-redux";
import { addInput } from "../events/calculator";
import classes from "./UI/Operand.module.css"

const Operand = ({ number, addInput }) => {

  const handleClick = () => addInput(number.toString());
//
  return (
    <button className={classes.operand}
      style={{
        width: number === 0 ? "100%" : "12.3vh",
        borderRadius: number === 0 ? "0 0 0 3vh" : 0,
        gridColumnStart: number === 0 ? 1 : null,
        gridColumnEnd: number === 0 ? 3 : null
        }
      }
    onClick={handleClick}
    >
      {number}
    </button>
  );
};

export default connect(
  null,
  { addInput }
)(Operand);
