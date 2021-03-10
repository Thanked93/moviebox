import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./GlobalStyle";
import { createStore } from "redux";
import rootReducer from "./store";
import { Provider } from "react-redux";
//STORE
const store = createStore(rootReducer);

// Action

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
