import React, { Component } from "react";
import AnswerList from "../../components/ActiveQuiz/AnswerList/AnswerList";

const ActiveQuiz = (props: any) => {
  console.log("AQProps", props);

  return (
    <div>
      <p style={{ display: "flex", justifyContent: "space-evenly" }}>
        <span>
          <strong>1.</strong>
          Quiestion AAA
        </span>
        <small>1 from 15</small>
      </p>
      <AnswerList answers={props.answers} />
    </div>
  );
};
export default ActiveQuiz;
