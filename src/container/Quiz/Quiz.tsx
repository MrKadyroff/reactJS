import React, { Component, useState } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import classes from "./styles.module.css";

const Quiz = () => {
  const quizFinished = () => {
    if (activeQuestion + 1 === quiz.length) {
      return true;
    } else {
      return false;
    }
  };

  const onAnwerClickHandler = (answerId: number) => {
    console.log(answerId);
    let question = quiz[activeQuestion];

    if (question.correctAnswer === answerId) {
      const timeout = window.setTimeout(() => {
        if (quizFinished()) {
          console.log("Finished", quizFinished());
        } else {
          console.log("NFinished", quizFinished());
          setActiveQuestion(activeQuestion + 1);
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      console.log("notRigth");
    }
  };
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [quiz, setQuiz] = useState([
    {
      question: "Вопрос вопрос вопрос ?",
      correctAnswer: 1,
      id: 1,
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
    {
      question: "Вопрос вопрос вопрос2222 ?",
      correctAnswer: 1,
      id: 2,
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
          question={quiz[activeQuestion].question}
          answers={quiz[activeQuestion].answers}
          onAnswerClick={onAnwerClickHandler}
          quizLength={quiz.length}
          answerNumber={activeQuestion + 1}
        />
      </div>
    </div>
  );
};
export default Quiz;
