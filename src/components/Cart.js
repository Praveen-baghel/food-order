import React, { useContext } from "react";
import { Modal } from "./Modal";
import classes from "./Cart.module.css";
import { CartContext } from "../store/cart-context";
import { CartItem } from "./CartItem";

export const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const amount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes.cartUl}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal cartHide={props.cartHide}>
      {cartItems}
      <div className={classes.amount}>
        <span>Total Amount</span>
        <span>{amount}</span>
      </div>
      <div className={classes.btns}>
        {hasItems && (
          <button className={classes.close} onClick={props.cartHide}>
            Close
          </button>
        )}
        <button className={classes.order}>Order</button>
      </div>
    </Modal>
  );
};
