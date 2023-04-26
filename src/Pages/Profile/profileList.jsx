import React from "react";
import { connect } from "react-redux";
import { Link, Outlet, Navigate } from "react-router-dom";

const ProfileList = (props) => {
  if (props && props.isLogged == true && props.user != "") {
    return (
      <div className="profile-list-container container mt-5">
        <div className="profile-list">
          <h5>حساب کاربری من</h5>

          <Link className="link" to={"/profile"}>
            پیشخوان
          </Link>

          <Link className="link" to={"/profile/order"}>
            سفارشات
          </Link>
          <Link className="link" to={"/profile/downloads"}>
            دانلود ها
          </Link>
          <Link className="link" to={"/profile/adresses"}>
            آدرس ها
          </Link>
          <Link className="link" to={"/profile/edit-account"}>
            جزئیات حساب
          </Link>
          <Link className="link" to={"/wish-list"}>
            علاقه مندی
          </Link>
          <Link className="link" to={"/logout"}>
            خروج
          </Link>
        </div>

        <Outlet className="profile-list-outlet" />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

function mapStateToProps(state) {
  return {
    user: state.user,
    isLogged: state.isLogged,
  };
}

export default connect(mapStateToProps)(ProfileList);
