import React from "react";
import { Helmet } from "react-helmet";
import { Link, Outlet } from "react-router-dom";

const ProfileList = () => {
  return (
    <div className="container mx-auto row mt-5">
      <Helmet>
        <title>حساب کاربری</title>
      </Helmet>
      <div className="col-3 border-start border-2 d-flex flex-column">
        <h5 className="fw-bold border-bottom border-2 pb-2">حساب کاربری من</h5>

        <Link
          className="profileList-link my-2 py-3 pe-2 text-decoration-none text-black fw-bold"
          to={"/profile"}
        >
          پیشخوان
        </Link>

        <Link
          className="profileList-link mb-2 py-3 pe-2 text-decoration-none text-black fw-bold"
          to={"/profile/order"}
        >
          سفارشات
        </Link>
        <Link
          className="profileList-link mb-2 py-3 pe-2 text-decoration-none text-black fw-bold"
          to={"/profile/downloads"}
        >
          دانلود ها
        </Link>
        <Link
          className="profileList-link mb-2 py-3 pe-2 text-decoration-none text-black fw-bold"
          to={"/profile/adresses"}
        >
          آدرس ها
        </Link>
        <Link
          className="profileList-link mb-2 py-3 pe-2 text-decoration-none text-black fw-bold"
          to={"/profile/edit-account"}
        >
          جزئیات حساب
        </Link>
        <Link
          className="profileList-link mb-2 py-3 pe-2 text-decoration-none text-black fw-bold"
          to={"/wish-list"}
        >
          علاقه مندی
        </Link>
        <Link
          className="profileList-link mb-2 py-3 pe-2 text-decoration-none text-black fw-bold"
          to={"/logout"}
        >
          خروج
        </Link>
      </div>
      <div className=" col-9">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileList;
