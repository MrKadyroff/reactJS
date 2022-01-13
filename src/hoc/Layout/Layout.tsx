import React, { Component, useState } from "react";
import MenuToogle from "../../components/Navigation/MenuToogle/MenuToogle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

const Layout = (props: any) => {
  const [menu, setMenu] = useState(false);
  const toogleMenuHandler = () => {
    setMenu(!menu);
  };
  const menuHandler = () => {
    setMenu(false);
  };
  return (
    <div>
      <Drawer isOpen={menu} onClose={menuHandler} />
      <MenuToogle onToogle={toogleMenuHandler} isOpen={menu} />
      <main>{props.children}</main>
    </div>
  );
};
export default Layout;
