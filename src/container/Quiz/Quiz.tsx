import React, { Component, useState } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

const Quiz = () => {
  const [quiz, setQuiz] = useState([
    {
      answers: [
        {
          text: "Вопрос 1",
        },
        {
          text: "Вопрос 2",
        },
        {
          text: "Вопрос 3",
        },
        {
          text: "Вопрос 4",
        },
      ],
    },
  ]);
  return (
    <div>
      <h2>Quiz</h2>
      <div>
        <ActiveQuiz answers={quiz[0].answers} />
      </div>
    </div>
  );
};
export default Quiz;
