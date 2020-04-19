import React from "react";
import logo from "../../logo.svg";
import "./style.css";
import Card from "../Card/index";
import Switch from "../Swtich/index";

function App() {
  return (
    <div className="App">
      <h1>React context API</h1>
      <h2>Theme switch</h2>
      <Card />
      <Switch />
    </div>
  );
}

export default App;
