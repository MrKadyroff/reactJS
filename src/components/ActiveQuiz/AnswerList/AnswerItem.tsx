import React, { Component, useState } from "react";

const AnswerItem = (props: any) => {
  console.log("AI", props);

  return <li key={props.index}>{props.answer.text}</li>;
};
export default AnswerItem;
