import React from "react";
import ReactDOM from "react-dom/client";

//JSX - HTML-like or XML-like syntax
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    React using JSX!!!
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
