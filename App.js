import React from "react";
import ReactDOM from "react-dom/client";

//JSX - HTML-like or XML-like syntax
//React Element
const Title = () => (
  <h1 className="head" tabIndex="5">
    React Title Component!
  </h1>
);

// React Component
// Class Based Component - OLD
// Funtional Component - NEW

// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">React Functional Component!</h1>
  </div>
);

//we can write like this also without return and {}
//const HeadingComponentSingleLine = () => <h1>React Functional Component!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
