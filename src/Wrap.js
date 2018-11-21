import React, { Component } from "react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducer";
import "./App.css";

import "./style/main.scss";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
