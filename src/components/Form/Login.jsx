import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import { LoginSchema } from "../Function/Validations";
import { loginUser } from "../../redux/Reducers/UserReducer";

const Login = ({ changePage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (values, actions) => {
    dispatch(loginUser(values)).then((action) => {
      if (action.type === "/user/loginUser/pending") {
        console.log("pending");
      }
      if (action.type === "/user/loginUser/fulfilled") {
        actions.resetForm();
        navigate("/profile");
        toast.success("ورود شما موفقیت آمیز بود", {
          position: "top-right",
          closeOnClick: true,
        });
      }

      if (action.type === "/user/loginUser/rejected") {
        toast.error("دوست من هنوز ثبت نام نکردی", {
          position: "top-right",
          closeOnClick: true,
        });
      }
    });
  };

  return (
    <div className="container">
      <div className="login-container mt-5 row">
        <div className="login-items col-xl-6 col-lg-6 col-md-6">
          <Formik
            initialValues={{
              identifier: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, actions) => {
              handleLogin(values, actions);
            }}
          >
            <Form className="login-form">
              <h4 className="font-weight-bold mb-4">ورود</h4>
              <label className="mb-2 font-weight-bold ">
                نام کاربری یا آدرس ایمیل <span className="text-danger">*</span>
              </label>
              <Field
                name="identifier"
                type="text"
                className="login-field col-xl-11 col-lg-11 col-md-11"
              />

              <ErrorMessage
                name="identifier"
                render={(msg) => <div className="text-danger mt-2">{msg}</div>}
              />

              <label className="mb-2 mt-4 font-weight-bold ">
                رمز عبور<span className="text-danger">*</span>
              </label>
              <Field
                name="password"
                type="password"
                className="login-field col-xl-11 col-lg-11 col-md-11 "
              />

              <ErrorMessage
                name="password"
                render={(msg) => <div className="text-danger mt-2">{msg}</div>}
              />

              <button
                type="submit"
                style={{ display: "block" }}
                className="login-btn mt-3 col-md-11 "
              >
                ورود
              </button>

              <div className="mt-4 form-checkbox">
                <p>
                  <input className="ml-2" type="checkbox" />
                  مرا به خاطر بسپار
                </p>
                <p className="ml-5" style={{ color: "#f57e10" }}>
                  رمز عبور را فراموش کرده اید ؟
                </p>
              </div>
            </Form>
          </Formik>
        </div>

        <div className="login-register  col-xl-6 col-lg-6 col-md-6">
          <h4 className="font-weight-bold mb-4">ثبت نام</h4>
          <p>
            برای ثبت و مشاهده وضعیت سفارش و همچنین لازم است تا از این قسمت
            اطلاعات خود را وارد کنید تا ثبت‌نام شما در سایت انجام شود ثبت‌نام
            خیلی ساده و سریع انجام میشود
          </p>

          <button
            className="login-btn col-11 col-md-3 "
            onClick={() => changePage("register")}
          >
            عضویت
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
