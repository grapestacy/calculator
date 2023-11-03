import {
  ADD_INPUT,
  CLEAR,
  SWAP_SIGN,
  PERCENTAGE,
  ASSIGN_OPERATOR,
  SOLVE
} from "../events/types";

import {
  INPUTTING_OPERAND_A,
  INPUTTING_OPERAND_B,
  RESOLVING_OPERANDS
} from "../constants/calculator";

const MAX_INPUT = 9;

const initialState = {
  calculator: {
    inputState: INPUTTING_OPERAND_A,
    buffer: "0",
    firstOperand: "0",
    secondOperand: "0",
    operator: undefined,
    output: "0"
  }
};


const limitInput = (string, length) =>
  length >= string.length ? string : string.substring(0, length);


const flipSign = n => (n > 0 ? n * -1 : Math.abs(n));


const percentageToDecimal = n => n / 100;

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_INPUT:
      const currentOutput = state.calculator.output;
      const { operand } = action;
      switch (operand) {
        case ".":
          if (currentOutput.includes(".")) return state;
          return {
            ...state,
            calculator: {
              output: limitInput(`${currentOutput}${operand}`, MAX_INPUT)
            }
          };
        default:
          if (currentOutput === "0") {
            return {
              ...state,
              calculator: {
                output: operand
              }
            };
          }
          return {
            ...state,
            calculator: {
              output: limitInput(`${currentOutput}${operand}`, MAX_INPUT)
            }
          };
      }
    case CLEAR:
      return {
        ...state,
        calculator: {
          output: "0"
        }
      };
    case SWAP_SIGN:
      if (state.calculator.output === "0") {
        return {
          ...state,
          calculator: {
            output: state.calculator.output
          }
        };
      } else {
        return {
          ...state,
          calculator: {
            output: flipSign(parseFloat(state.calculator.output, 10))
          }
        };
      }
    case PERCENTAGE:
      return {
        ...state,
        calculator: {
          output: percentageToDecimal(parseFloat(state.calculator.output, 10))
        }
      };
    case ASSIGN_OPERATOR:
      return {
        ...state,
        calculator: {
          ...state.calculator,
          operator: action.operator
        }
      };
    case SOLVE:
      return {
        ...state,
        calculator: {}
      };

    default:
      return state;
  }
};
