import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import React, { Component } from "react";
import { Provider } from "react-redux";

import reducers from "./reducer";
import "./style/main.scss";
import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

class Wrap extends Component {
  render() {
    return (
      <div>
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>
      </div>
    );
  }
}

export default Wrap;
