import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import { LoginSchema } from "../Function/Validations";
import { loginUser } from "../../redux/Reducers/UserReducer";

const LoginForm = () => {
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
  );
};

export default LoginForm;
