import React, { Component } from "react";
import classes from "./style.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
  { page: "Login", component: "Login" },
  { page: "Quiz", component: "Quiz" },
  { page: "Logout", component: "Logout" },
];

const Drawer = (props: any) => {
  console.log(props);

  const renderLinks = () => {
    return links.map((item, index) => {
      return (
        <a href="#">
          <li key={index}> {item.page}</li>
        </a>
      );
    });
  };
  const cls = [classes.Drawer];

  if (!props.isOpen) {
    cls.push(classes.close);
  }

  return (
    <React.Fragment>
      <nav className={cls.join(" ")}>
        <ul>{renderLinks()}</ul>
      </nav>
      {props.isOpen && <Backdrop onClick={props.onClose} />}
    </React.Fragment>
  );
};
export default Drawer;
