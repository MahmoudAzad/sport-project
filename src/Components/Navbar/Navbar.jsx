import React, { Fragment } from "react";
import SubNavbar from "./SubNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <Fragment>
      <SubNavbar />
      <MobileNavbar />
    </Fragment>
  );
};

export default Navbar;
