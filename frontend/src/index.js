import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const root = ReactDOM.createRoot(document.getElementById("root"));
const options = {
  timout:6000,
  position: positions.BOTTOM_CENTER,
  transitions: transitions.SCALE,
};
root.render(
  <Provider store={store}>
    <AlertProvider
      {...options} template={AlertTemplate}
    >
      <App />
    </AlertProvider>
  </Provider>
);
