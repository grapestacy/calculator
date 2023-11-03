import React from "react";
import { connect } from "react-redux";
import classes from "./UI/Display.module.css"

const Display = ({ output }) => {
  return (
    <h1 className={classes.display}>{output}</h1>
  );
};

const mapStateToProps = state => ({
  output: state.calculator.output
});

export default connect(
  mapStateToProps,
  null
)(Display);
