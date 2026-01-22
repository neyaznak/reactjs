import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Child Element</span>;

const Title = () => (
  <h1 className="head" tabIndex="5">
    React Title Element!
  </h1>
);
const number =12848624;
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    {number}
    <Title />
    <Title></Title>
    <h1 className="heading">React Functional Component!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
