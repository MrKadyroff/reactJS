import React, { Component, useState } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import classes from "./styles.module.css";

const Quiz = () => {
  const onAnwerClickHandler = (answerId: number) => {
    console.log(answerId);
  };
  const [quiz, setQuiz] = useState([
    {
      question: "Вопрос вопрос вопрос ?",
      correctAnswer: 2,
      answers: [
        {
          text: "Ответ 1",
          id: 1,
        },
        {
          text: "Ответ 2",
          id: 2,
        },
        {
          text: "Ответ 3",
          id: 3,
        },
        {
          text: "Ответ 4",
          id: 4,
        },
      ],
    },
  ]);
  return (
    <div className={classes.Container}>
      <h2 className={classes.Quiz}>Quiz</h2>
      <div>
        <ActiveQuiz
          question={quiz[0].question}
          answers={quiz[0].answers}
          onAnswerClick={onAnwerClickHandler}
        />
      </div>
    </div>
  );
};
export default Quiz;
