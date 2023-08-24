import React from "react";
import classes from "./CartItem.module.css";

export const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.mainLi}>
      <div>
        <h2 className={classes.name}>{props.name}</h2>
        <div>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div>
        <button className={classes.remove} onClick={props.onRemove}>
          -
        </button>
        <button className={classes.add} onClick={props.onAdd}>
          +
        </button>
      </div>
    </li>
  );
};
