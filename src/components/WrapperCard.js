import React from "react";
import classes from "./WrapperCard.module.css";

export const WrapperCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};
