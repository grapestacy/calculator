import {
  CLEAR,
  CLEAR_ALL,
  DECIMAL,
  DO_MATH,
  SWAP_SIGN,
  DIGIT,
  PERCENT
} from "./types";

const CalcOperations = {
  'PLUS' : (prevValue, nextValue) => prevValue + nextValue,
  'MINUS' : (prevValue, nextValue) => prevValue - nextValue,
  'MULTIPLY' : (prevValue, nextValue) => prevValue * nextValue,
  'DIVIDE' : (prevValue, nextValue) => prevValue / nextValue,
  'SOLVE' : (prevValue, nextValue) => nextValue
};

const percentageToDecimal = n => n / 100;


export const clearAll = () => ({ type: CLEAR_ALL});
export const clear = () => ({ type: CLEAR});
export const swapSign = displayValue => {
  let oppositeValue = parseFloat(displayValue) * -1;

  return {
    type: SWAP_SIGN,
    payload: parseFloat(oppositeValue)
  }
};

export const percentInput = (value, displayValue, operator ) => {
  
  let updatedValue = (operator !== 'PLUS' || operator !=='MINUS') ? String(percentageToDecimal(parseFloat(displayValue))) :  String((displayValue / 100) * value);
  
  return {
      type: PERCENT,
      payload : updatedValue
  };
};

export const decimalInput = ( value, displayValue, waitingForNumber ) => {

  const data = {
      displayValue : displayValue,
      waitingForNumber: waitingForNumber
  };

  if (value !== parseFloat(data.displayValue)  && data.displayValue.indexOf('.') === -1) {
      data.displayValue = data.displayValue + '.';
      data.waitingForNumber = false;
      //if value is equal to the display value and we are waiting for the second number to be entered, we need to start it off with
      //a "0." because the decimal was clicked before a number.
  } else if ((value === parseFloat(data.displayValue) && data.waitingForNumber)) {
      data.displayValue = '0.';
      data.waitingForNumber = false;
  }

  //console.log(data)
  return {
      type: DECIMAL,
      payload: data
  }
};

export const digitInput = (number, displayValue, waitingForNumber) => {
 
  let data = {
      displayValue: displayValue,
      waitingForNumber: waitingForNumber
  };

  if(waitingForNumber) {
      data.displayValue = number;
      data.waitingForNumber = false;
  } else {
      data.displayValue = displayValue === '0' ? number : displayValue + number;
  }
  return {
      type: DIGIT,
      payload: data
  }
};

export const doMath = (nextOperator, value, displayValue, operator, waitingForNumber) => {

  let data = {
      value: value,
      displayValue: displayValue,
      operator: operator,
      waitingForNumber: waitingForNumber
  };

  const inputValue = parseFloat(displayValue);
  if (value === null) {
      data.value = inputValue
  } else if (operator && !waitingForNumber) {
    const currentValue = value || 0;
    const newValue = CalcOperations[operator](currentValue, inputValue);
    data.value = newValue;
    data.displayValue = String(newValue);
  }
  data.waitingForNumber = true;
  data.operator = nextOperator;

  //console.log(data);

  return {
      type: DO_MATH,
      payload: data
  }
};


