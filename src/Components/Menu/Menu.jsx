import React, { Fragment } from "react";
import SubMenu from "./SubMenu";
import MobileMenu from "./MobileMenu";

const Menu = () => {
  return (
    <Fragment>
      <SubMenu />
      <MobileMenu />
    </Fragment>
  );
};

export default Menu;
