import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.cartHide} className={classes.backDrop}></div>;
};
const ModalOverLay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

export const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop cartHide={props.cartHide} />,
        document.getElementById("overlays")
      )}
      {createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};
