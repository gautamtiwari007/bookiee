import React from "react";
import classes from "./App.module.css";
import MainHeading from "./components/MainHeading";
import Home from "./components/navbar/Home";
import Products from "./components/navbar/Products"
import Sell from "./components/navbar/Sell";
import Shop from "./components/navbar/Shop";

function App() {
  return (
    <React.Fragment>
      <a className={classes.logo} href="#">LOGO</a>
      <Home />
      <Shop />
      <Products />
      <Sell />
      <MainHeading />
    </React.Fragment>
  );
}

export default App;
