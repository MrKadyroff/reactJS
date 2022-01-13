import React from "react";
import classes from "./style.module.css";
import "font-awesome/css/font-awesome.min.css";

const MenuToogle = (props: any) => {
  const cls = [classes.MenuToogle, "fa"];

  if (props.isOpen) {
    cls.push("fa-times fa-1x");
    cls.push(classes.open);
  } else {
    cls.push("fa-bars fa-1x");
  }

  return <i className={cls.join(" ")} onClick={props.onToogle} />;
};
export default MenuToogle;
