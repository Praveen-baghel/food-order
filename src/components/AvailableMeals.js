import React, { useEffect, useState } from "react";
import { WrapperCard } from "./WrapperCard";
import classes from "./AvailableMeals.module.css";
import { MealItem } from "./MealItem";

export const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://practice-database-6a346-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          description: responseData[key].description,
          name: responseData[key].name,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);
  const availableMeals = meals.map((item) => {
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
