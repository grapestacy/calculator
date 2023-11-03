import {
  CLEAR,
  SOLVE,
  ADD_INPUT,
  SWAP_SIGN,
  PERCENTAGE,
  ASSIGN_OPERATOR,
  SWITCH_CALCULATOR_STATE
} from "./types";

export const assignOperator = operator => ({ type: ASSIGN_OPERATOR, operator });
export const addInput = operand => ({ type: ADD_INPUT, operand });
export const percentage = () => ({ type: PERCENTAGE });
export const swapSign = () => ({ type: SWAP_SIGN });
export const clear = () => ({ type: CLEAR });
export const solve = () => ({ type: SOLVE });
export const switchCalculatorState = calculatorState => ({
  type: SWITCH_CALCULATOR_STATE,
  calculatorState
});
