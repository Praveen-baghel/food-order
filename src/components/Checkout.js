import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

export const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal_code: true,
    city: true,
  });
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const street = streetRef.current.value;
    const postal_code = postalRef.current.value;
    const city = cityRef.current.value;

    const isNameValid = name.trim() !== "";
    const isStreetValid = street.trim() !== "";
    const isPostalValid = postal_code.trim().length === 6;
    const isCityValid = city.trim() !== "";

    setFormValidity({
      name: isNameValid,
      street: isStreetValid,
      postal_code: isPostalValid,
      city: isCityValid,
    });

    const formIsValid =
      isNameValid && isStreetValid && isPostalValid && isCityValid;

    if (!formIsValid) {
      return;
    }
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.div}>
        <label htmlFor="name" className={classes.label}>
          Your Name
        </label>
        <br />
        <input ref={nameRef} id="name" className={classes.input} />
        {!formValidity.name && (
          <p className={classes.p}>Please enter valid name</p>
        )}
      </div>
      <div className={classes.div}>
        <label htmlFor="street" className={classes.label}>
          Street
        </label>
        <br />
        <input ref={streetRef} id="street" className={classes.input} />
        {!formValidity.street && (
          <p className={classes.p}>Please enter valid street</p>
        )}
      </div>
      <div className={classes.div}>
        <label htmlFor="postal_code" className={classes.label}>
          Postal Code
        </label>
        <br />
        <input ref={postalRef} id="postal_code" className={classes.input} />
        {!formValidity.postal_code && (
          <p className={classes.p}>Please enter valid postal code</p>
        )}
      </div>
      <div className={classes.div}>
        <label htmlFor="city" className={classes.label}>
          City
        </label>
        <br />
        <input ref={cityRef} id="city" className={classes.input} />
        {!formValidity.city && (
          <p className={classes.p}>Please enter valid city</p>
        )}
      </div>
      <div className={classes.btns}>
        <button className={classes.cancel} onClick={props.close} type="button">
          Cancel
        </button>
        <button className={classes.confirm}>Confirm</button>
      </div>
    </form>
  );
};
