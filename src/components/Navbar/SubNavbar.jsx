import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CartDrawer from "../Drawer/CartDrawer";
import MenuDrawer from "../Drawer/MenuDrawer";
import { useSelector } from "react-redux";

const SubNavbar = () => {
  const isLoggedUser = useSelector(
    (state) => state.persistedReducer.user.isLogged
  );

  const menu = [
    {
      key: "1",
      label: <Link to="/profile">پیشخوان</Link>,
    },
    {
      key: "2",
      label: <Link to="/profile/order">سفارشات</Link>,
    },
    {
      key: "3",
      label: <Link to="profile/downloads">دانلود ها</Link>,
    },
    {
      key: "4",
      label: <Link to="profile/adresses">آدرس ها</Link>,
    },
    {
      key: "5",
      label: <Link to="profile/edit-account">جزئیات حساب</Link>,
    },
    {
      key: "6",
      label: <Link to="/wish-list">علاقه مندی</Link>,
    },
    {
      key: "7",
      label: <Link to="/logout">خروج</Link>,
    },
  ];

  return (
    <Fragment>
      <div className="top-line"></div>

      <div className="d-none d-lg-block container">
        <div className="d-flex justify-content-between text-center mt-3 mb-3 ">
          <div className="d-flex align-items-center">
            <MenuDrawer />

            {isLoggedUser ? (
              <div class="user-dropdown">
                <Link to="/profile" className="user-link">
                  <i className="dropbtn bi bi-person subNav-icon cursor-pointer me-2 h5 text-black" />
                </Link>
                <div class="user-dropdown-content">
                  {menu.map((item) => (
                    <p>{item.label}</p>
                  ))}
                </div>
              </div>
            ) : (
              <Link to="/my-account">
                <i class="bi bi-person subNav-icon cursor-pointer me-2 h5 text-black" />
              </Link>
            )}

            <CartDrawer />
            <i class="bi bi-search subNav-icon cursor-pointer mx-2 h5" />
          </div>

          <Link to="/" className="navbar-logo">
            <img
              src="images\logo.png"
              width="150"
              height="40"
              alt="لوگو وبسایت"
            />
          </Link>

          <div className="subNavbar-caption">
            <Link
              to="/track-order"
              className="fw-bold px-3 py-2 ms-1 text-decoration-none"
            >
              پیگیری سفارش{" "}
            </Link>
            <Link
              to="/contactus"
              className="fw-bold px-3 py-2 ms-4 text-decoration-none"
            >
              تماس با ما
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SubNavbar;
