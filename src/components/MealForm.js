import React, { useRef, useState } from "react";
import { Input } from "./Input";
import classes from "./MealForm.module.css";

export const MealForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim() === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountValid(false);
      return;
    }
    props.cartAdd(enteredAmountNumber);
  };
  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button className={classes.btn}>+ Add</button>
      {!amountValid && <p>Please enter a valid amount(1-5)</p>}
    </form>
  );
};
