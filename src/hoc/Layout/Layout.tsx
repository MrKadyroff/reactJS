import React, { Component } from "react";

const Layout = (props: any) => {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  );
};
export default Layout;
