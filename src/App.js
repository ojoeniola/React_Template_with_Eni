import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Products from "./component/products";
import Slider from "./component/slider";

function App() {
  return (
    <div className="">
      <Slider />
      <Products />
    </div>
  );
}

export default App;
