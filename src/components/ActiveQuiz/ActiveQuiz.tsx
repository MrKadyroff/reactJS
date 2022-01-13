import React, { Component } from "react";
import AnswerList from "../../components/ActiveQuiz/AnswerList/AnswerList";
import classes from "./styles/styles.module.css";

const ActiveQuiz = (props: any) => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.QuestFlex}>
        <span>
          <strong>{props.answerNumber} </strong>
          {props.question}
        </span>
        <small>
          {props.answerNumber} from {props.quizLength}
        </small>
      </p>
      <AnswerList answers={props.answers} onAnswerClick={props.onAnswerClick} />
    </div>
  );
};
export default ActiveQuiz;
