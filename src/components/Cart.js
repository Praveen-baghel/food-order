import React, { useContext, useState } from "react";
import { Modal } from "./Modal";
import classes from "./Cart.module.css";
import { CartContext } from "../store/cart-context";
import { CartItem } from "./CartItem";
import { Checkout } from "./Checkout";

export const Cart = (props) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const amount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const submitUserData = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://practice-database-6a346-default-rtdb.asia-southeast1.firebasedatabase.app/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          order: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.resetCart();
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

  const modalContent = (
    <>
      {cartItems}
      <div className={classes.amount}>
        <span>Total Amount</span>
        <span>{amount}</span>
      </div>
      {showCheckout && (
        <Checkout onConfirm={submitUserData} close={props.cartHide} />
      )}
      {!showCheckout && (
        <div className={classes.btns}>
          <button className={classes.close} onClick={props.cartHide}>
            Close
          </button>
          {hasItems && (
            <button
              className={classes.order}
              onClick={() => setShowCheckout(true)}
            >
              Order
            </button>
          )}
        </div>
      )}
    </>
  );
  return (
    <Modal cartHide={props.cartHide}>
      {!isSubmitting && !didSubmit && modalContent}
      {isSubmitting && <p>Submitting...</p>}
      {!isSubmitting && didSubmit && <p>Submitted successfully</p>}
    </Modal>
  );
};
