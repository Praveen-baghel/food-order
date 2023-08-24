import React from "react";
import { WrapperCard } from "./WrapperCard";
import classes from "./AvailableMeals.module.css";
import { MealItem } from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chole Bhature",
    description: "North Indian",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Vada Pav",
    description: "Mumbai Special",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Idli Sambhar",
    description: "South Indian Magic",
    price: 22.99,
  },
  {
    id: "m4",
    name: "Momos",
    description: "Darjeeling's Famous",
    price: 12.04,
  },
];

export const AvailableMeals = () => {
  const availableMeals = DUMMY_MEALS.map((item) => {
    return (
      <MealItem
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    );
  });
  return (
    <WrapperCard>
      <ul className={classes.Ul}>{availableMeals}</ul>
    </WrapperCard>
  );
};
