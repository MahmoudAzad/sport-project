import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Counter = () => {
  const userEmail = useSelector(
    (state) => state.persistedReducer.user.user.username
  );
  console.log("userEmail => ", userEmail);
  const name = userEmail.substring(0, userEmail.lastIndexOf("@"));

  return (
    <div className="container mr-5">
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        سلام <strong className="fw-bold">{name}</strong> (
        <strong className="fw-bold">{name}</strong> نیستید؟ خارج شوید)
      </p>
      <p style={{ fontSize: "18px", marginBottom: "20px", lineHeight: "25px" }}>
        از طریق پیشخوان حساب کاربری‌تان، می‌توانید سفارش‌های اخیرتان را مشاهده،
        آدرس‌های حمل و نقل و صورتحساب‌تان را مدیریت و جزییات حساب کاربری و کلمه
        عبور خود را ویرایش کنید.
      </p>

      <div className="row justify-content-around mt-4">
        <Link
          to={"/profile/order"}
          className="counter-link-item col-3 border border-3 rounded-2 text-center py-4 text-decoration-none text-secondary"
        >
          <i className="bi bi-card-checklist fs-1 " />
          <p>سفارش</p>
        </Link>

        <Link
          to={"/profile/downloads"}
          className="counter-link-item col-3 border border-3 rounded-2 text-center py-4 text-decoration-none text-secondary"
        >
          <i className="bi bi-download fs-1" />
          <p>دانلودها</p>
        </Link>

        <Link
          className="counter-link-item col-3 border border-3 rounded-2 text-center py-4 text-decoration-none text-secondary"
          to={"/profile/adresses"}
        >
          <i className="bi bi-geo-alt fs-1" />
          <p>آدرس ها</p>
        </Link>
      </div>
      <div className="row justify-content-around mt-4">
        <Link
          to={"/profile/edit-account"}
          className="counter-link-item col-3 border border-3 rounded-2 text-center py-4 text-decoration-none text-secondary"
        >
          <i className="bi bi-person fs-1" />
          <p>جزئیات حساب</p>
        </Link>

        <Link
          to={"/wish-list"}
          className="counter-link-item col-3 border border-3 rounded-2 text-center py-4 text-decoration-none text-secondary"
        >
          <i className="bi bi-heart fs-1" />
          <p>علاقه مندی</p>
        </Link>

        <Link
          to={"/logout"}
          className="counter-link-item col-3 border border-3 rounded-2 text-center py-4 text-decoration-none text-secondary"
        >
          <i className="bi bi-box-arrow-left fs-1" />
          <p>خروج</p>
        </Link>
      </div>
    </div>
  );
};

export default Counter;
