import React from "react";
import classes from "./MyButton.module.css"

 const MyButton = ({customClass, label, onClick, id}) => {

   return <button className={classes.button + ' ' + customClass}
   id = {id}
   onClick={onClick}>{label}</button>;
  }

  export default MyButton;