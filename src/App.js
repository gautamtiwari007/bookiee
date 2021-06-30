import React, { useState } from "react";
import classes from "./App.module.css";
import MainHeading from "./components/MainHeading";
import Header from "./components/Header/Header";
import Auth from "./components/Authentication/Auth";

function App() {

  const [authIsShown, setAuthIsShown] = useState(false);

  const showCardHandler = () => {
    setAuthIsShown(true);
  };

  const hideCardHandler = () => {
    setAuthIsShown(false);
  };

  return (
    <React.Fragment>
      <a className={classes.logo} href="www.google.com">LOGO</a>
      {authIsShown && <Auth onClose={hideCardHandler} />}
      <Header onShowAuth={showCardHandler} />
      <MainHeading />
    </React.Fragment>
  );
}

export default App;
