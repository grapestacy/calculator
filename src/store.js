import { createStore } from "redux";
import calculatorReducer from "./reducers/calculator";
export default createStore(
  calculatorReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
