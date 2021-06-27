import React from "react";
import classes from "./Home.module.css";

const Home = () => {
    return (
        <React.Fragment>
            <a className={classes.home} href="#">Home</a>
        </React.Fragment>
    );
};

export default Home;