import React from "react";
import {
  HomeOutlined,
  ReadOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import CartDrawer from "../Drawer/CartDrawer";

const MobileMenu = () => {
  return (
    <div className="">
      <div className="mobile-menu-container ">
        <div className="mobile-menu-item ">
          <HomeOutlined className="mobile-menu-icon mb-1 col" />
          <p>خانه</p>
        </div>

        <Link to="/contactus" className="mobile-menu-item ">
          <ReadOutlined className="mobile-menu-icon  mb-1 col" />
          <p>تماس با ما</p>
        </Link>

        <Link to="/" className="mobile-menu-item ">
          <ShoppingOutlined className="mobile-menu-icon mb-1 col" />
          <p>فروشگاه</p>
        </Link>

        <Link to="/login" className="mobile-menu-item ">
          <UserOutlined className="mobile-menu-icon mb-1 col" />
          <p>حساب کاربری من</p>
        </Link>

        <div className="mobile-menu-item">
          <CartDrawer />
          <p>سبد خرید</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
