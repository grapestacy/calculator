import {
  CLEAR_ALL,
  CLEAR,
  SWAP_SIGN,
  PERCENT,
  DECIMAL,
  DIGIT,
  DO_MATH
} from '../actions/types';

import { combineReducers } from 'redux';

/*const doSomeMath = (a, b, op) => {
  switch(op) {
    case DIVIDE:
      return (b !== 0) ? (a/b) : a;
    case MULTIPLY:
      return a*b;
    case MINUS:
      return a-b;
    case PLUS:
      return a+b;
    default:
  }


}*/


const INITIAL_STATE = {
  value: null,
  displayValue: '0',
  operator: null,
  waitingForNumber: false
};

const calculatorReducer = (
  state = {
      value: INITIAL_STATE.value,
      displayValue: INITIAL_STATE.displayValue,
      operator: INITIAL_STATE.operator,
      waitingForNumber: INITIAL_STATE.waitingForNumber
  }, action) => {

    console.log(state);

  switch (action.type) {
      case CLEAR_ALL:
        console.log("CLEARALL")
          return {...state, value: null, displayValue: '0', operator: null, waitingForNumber: false};
      case CLEAR:
        console.log("CLEAR")
          return  {...state, displayValue: '0'};
      case SWAP_SIGN:
          return  {...state, displayValue: action.payload};
      case PERCENT:
          return  {...state, displayValue: action.payload};
      case DECIMAL:
          return  {
              ...state,
              displayValue: action.payload.displayValue,
              waitingForNumber: action.payload.waitingForNumber
          };
      case DIGIT:
          return  {
              ...state,
              displayValue: action.payload.displayValue,
              waitingForNumber: action.payload.waitingForNumber
          };
      case DO_MATH:
          return  {
              ...state,
              value: action.payload.value,
              displayValue: action.payload.displayValue,
              operator: action.payload.operator,
              waitingForNumber: action.payload.waitingForNumber
          };
      default:
          return state;
  }
};

export default combineReducers({
  data : calculatorReducer
});

