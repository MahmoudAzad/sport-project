import React from "react";
import MenuDrawer from "../Drawer/MenuDrawer";

const MobileNavbar = () => {
  return (
    <div className=" d-flex d-lg-none justify-content-between m-3">
      <MenuDrawer />
      <img src="Gisha-Logotype-200.png" width="150" height="40" alt="لوگو" />
      <div>
        <i class="bi bi-search mobile-nav-icon h5 ps-4" />
        <i class="bi bi-cart3 mobile-nav-icon h5 ps-2" />
      </div>
    </div>
  );
};

export default MobileNavbar;
