import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./styles/tailwind.css";
var container = document.getElementById("root");
if (container) {
    var root = createRoot(container);
    root.render(React.createElement(React.StrictMode, null,
        React.createElement(App, null)));
}
