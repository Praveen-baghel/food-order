import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import { MealForm } from "./MealForm";
import { CartContext } from "../store/cart-context";

export const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.mainLi}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealForm cartAdd={addToCartHandler} />
      </div>
    </li>
  );
};
