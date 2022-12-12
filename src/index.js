import React from "react";
import ReactDOM from "react-dom/client";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import store from './token/index';
import CustomRoute from "./routes/CustomRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CookiesProvider>
    <Provider store={store}>
      <CustomRoute />
    </Provider>
  </CookiesProvider>
);
