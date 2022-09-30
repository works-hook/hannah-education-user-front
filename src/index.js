import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

import App from "./App";
import { HashRouter } from "react-router-dom";
import Loader from "./layouts/loader/Loader";

ReactDOM.render(
    <Suspense fallback={<Loader />}>
        <HashRouter>
            <App />
        </HashRouter>
    </Suspense>,

    document.getElementById("root")
);


