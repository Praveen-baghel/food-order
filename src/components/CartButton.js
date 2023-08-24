import React, { useContext, useEffect, useState } from "react";
import classes from "./CartButton.module.css";
import { CartContext } from "../store/cart-context";

export const CartButton = (props) => {
  const [isHighlighted, setIsHighlighted] = useState(true);
  const btnClasses = `${classes.btn} ${isHighlighted ? classes.bump : ""}`;
  const { items } = useContext(CartContext);
  const numberOfItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  useEffect(() => {
    setIsHighlighted(true);
    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.cartOpen}>
      <span>Your Cart</span>
      <span className={classes.redSpan}>{numberOfItems}</span>
    </button>
  );
};
