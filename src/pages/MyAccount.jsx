import React, { useState } from "react";
import LoginForm from "../components/Form/LoginForm";
import RegisterForm from "../components/Form/RegisterForm";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div>
      {activeTab === "login" ? (
        <div className="container">
          <div className="mt-5 row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <LoginForm />
            </div>

            <div className="text-center col-xl-6 col-lg-6 col-md-6">
              <h4 className="fw-bold mb-4">ثبت نام</h4>
              <p className="lh-base">
                برای ثبت و مشاهده وضعیت سفارش و همچنین لازم است تا از این قسمت
                اطلاعات خود را وارد کنید تا ثبت‌نام شما در سایت انجام شود
                ثبت‌نام خیلی ساده و سریع انجام میشود
              </p>

              <button
                className="bg-green mt-4 border-0 rounded-4 p-3 text-white fw-bold col-11 col-md-3 "
                onClick={() => setActiveTab("register")}
              >
                عضویت
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="mt-5 row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <RegisterForm />
            </div>

            <div className="text-center col-xl-6 col-lg-6 col-md-6">
              <h4 className="fw-bold mb-4">ورود به حساب کاربری</h4>
              <p className="lh-base">
                جهت مشاهده وضعیت سفارشات و ویرایش اطلاعات خود از قسمت زیر
                میتوانید وارد حساب کاربری شوید
              </p>

              <button
                onClick={() => setActiveTab("login")}
                className="bg-green mt-4 border-0 rounded-4 p-3 text-white fw-bold col-11 col-md-3 "
              >
                ورود
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
