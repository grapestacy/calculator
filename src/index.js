import React from "react";
import ReactDOM from 'react-dom';
import CalculatorContainer from "./containers/CalculatorContainer";
import { Provider } from "react-redux";
import "./styles.css";
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

function App() {
  return (
    <div className="App">
      <CalculatorContainer />
    </div>
  );
}


const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);