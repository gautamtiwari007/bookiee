import { Fragment } from "react";
import Home from "../navbar/Home";
import LoginSignUp from "../navbar/LoginSignUp";
import Products from "../navbar/Products";
import Sell from "../navbar/Sell";
import Shop from "../navbar/Shop";

const Header = (props) => {
    return (
        <Fragment>
            <Home />
            <Products />
            <Sell />
            <Shop />
            <LoginSignUp onClick={props.onShowAuth} />
        </Fragment>
    );
}

export default Header;