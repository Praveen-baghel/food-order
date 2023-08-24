import React from "react";
import { CartButton } from "./CartButton";
import classes from "./Header.module.css";

export const Header = props => {
  return (
    <>
      <nav className={classes.nav}>
        <p className={classes.para}>React Meals</p>
        <CartButton cartOpen={props.cartOpener}></CartButton>
      </nav>
      <div className={classes.image}>Happy Meals</div>
    </>
  );
};
