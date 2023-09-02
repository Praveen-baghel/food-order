import React, { useEffect, useState } from "react";
import { WrapperCard } from "./WrapperCard";
import classes from "./AvailableMeals.module.css";
import { MealItem } from "./MealItem";

export const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  useEffect(() => {
    const fetchMeals = async () => {
      function fetchDataWithTimeout(url) {
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => {
            reject(new Error("Request timed out"));
          }, 4000);
        });

        return Promise.race([fetch(url), timeoutPromise]);
      }

      try {
        const url =
          "https://practice-database-6a346-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json";
        const response = await fetchDataWithTimeout(url);
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
      } catch (error) {
        setFetchError(true);
      } finally {
        setIsLoading(false);
      }
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
      {isLoading ? (
        <h2 className={classes.h2}>Loading...</h2>
      ) : fetchError ? (
        <h2 className={classes.h2}>Request Timed Out</h2>
      ) : (
        <ul className={classes.Ul}>{availableMeals}</ul>
      )}
    </WrapperCard>
  );
};
