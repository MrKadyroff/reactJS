import React, { Component, useState } from "react";
import AnswerItem from "./AnswerItem";
import classes from "./styles/styles.module.css";

const AnswerList = (props: any) => {
  return (
    <ul>
      {props.answers.map((answer: any, index: any) => {
        return (
          <AnswerItem
            answer={answer}
            index={index}
            onAnswerClick={props.onAnswerClick}
          />
        );
      })}
    </ul>
  );
};
export default AnswerList;
