import React from "react";
import classes from "./MealsSummary.module.css";

export const MealsSummary = () => {
  return (
    <div className={classes.main}>
      <h2>Delicious Food, Delivered To You</h2>
      <p className={classes.para}>
        Choose your favourite meal from our broad selection of available meals
        and enjoy your lunch or dinner at home.
      </p>
      <p className={classes.para}>
        All our meals are cooked with high-quality ingredients,just-in-time and
        of course by our experienced chefs!
      </p>
    </div>
  );
};
