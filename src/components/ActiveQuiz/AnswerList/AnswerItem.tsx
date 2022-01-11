import React, { Component, useState } from "react";
import classes from "../styles/styles.module.css";

const AnswerItem = (props: any) => {
  return (
    <li
      key={props.index}
      className={classes.Item}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};
export default AnswerItem;
