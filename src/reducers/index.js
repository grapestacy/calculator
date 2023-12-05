import {
  CLEAR_DISPLAY,
  CLEAR_ALL,
  SET_NUMBER,
  DO_MATH,
  SET_DISPLAY
} from '../actions/types';

import { combineReducers } from 'redux';



const initialState = {
  value: null,
  displayValue: '0',
  operator: null,
  waitingForNumber: false
};

export const calculatorReducer = (
  state = initialState, action) => {

  switch (action.type) {
      case CLEAR_ALL:
        
          return {...state, value: null, displayValue: '0', operator: null, waitingForNumber: false};
      case CLEAR_DISPLAY:
        
          return  {...state, displayValue: '0'};
      case SET_DISPLAY:
          return  {...state, displayValue: action.payload};
      case SET_NUMBER:
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
  calculator : calculatorReducer
});

