import React from "react";
import classes from "./Products.module.css";

const Products = () => {
    return (
        <React.Fragment>
            <a className={classes.products} href="#">Products</a>
        </React.Fragment>
    );
};

export default Products;