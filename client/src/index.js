import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightToBracket,
  faKey,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";

library.add(fab, faArrowRightToBracket, faKey, faEnvelope);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
