import React from "react";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import MenuDrawer from "../Drawer/MenuDrawer";

const MobileNavbar = () => {
  return (
    <div className="mobile-navbar-container">
      <MenuDrawer />
      <img src="Gisha-Logotype-200.png" width="150" height="40" alt="لوگو" />
      <div>
        <SearchOutlined style={{ fontSize: 20 }} className="p-1 nav-icon" />
        <ShoppingCartOutlined
          style={{ fontSize: 20 }}
          className="p-1 nav-icon"
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
