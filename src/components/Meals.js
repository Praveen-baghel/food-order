import React from "react";
import { MealsSummary } from "./MealsSummary";
import { AvailableMeals } from "./AvailableMeals";

export const Meals = () => {
  return (
    <div>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </div>
  );
};
