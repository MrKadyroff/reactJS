import React, { Component, useState } from "react";
import AnswerItem from "./AnswerItem";

const AnswerList = (props: any) => {
  console.log("AL", props);

  return (
    <ul>
      {props.answers.map((answer: any, index: any) => {
        return <AnswerItem answer={answer} index={index} />;
      })}
    </ul>
  );
};
export default AnswerList;
