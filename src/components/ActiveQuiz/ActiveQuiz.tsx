import React, { Component } from "react";
import AnswerList from "../../components/ActiveQuiz/AnswerList/AnswerList";
import classes from "./styles/styles.module.css";

const ActiveQuiz = (props: any) => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.QuestFlex}>
        <span>
          <strong>id </strong>
          {props.question}
        </span>
        <small>1 from {props.question.length}</small>
      </p>
      <AnswerList answers={props.answers} onAnswerClick={props.onAnswerClick} />
    </div>
  );
};
export default ActiveQuiz;
