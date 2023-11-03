import React from "react";
import ReactDOM from "react-dom";
import CalculatorContainer from "./containers/CalculatorContainer";
import store from "./store";
import { Provider } from "react-redux";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <CalculatorContainer />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App/>,
    </Provider>, document.getElementById('root'));

