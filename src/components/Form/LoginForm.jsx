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
      <Form className="border-start border-2">
        <h4 className="fw-bold mb-4">ورود</h4>
        <label className="mb-2 fw-bold ">
          نام کاربری یا آدرس ایمیل <span className="text-danger">*</span>
        </label>
        <Field
          name="identifier"
          type="text"
          className="p-2 border border-2 border-secondary rounded-3  col-xl-11 col-lg-11 col-md-11"
        />

        <ErrorMessage
          name="identifier"
          render={(msg) => <div className="text-danger mt-2">{msg}</div>}
        />

        <label className="mb-2 mt-4 fw-bold ">
          رمز عبور<span className="text-danger">*</span>
        </label>
        <Field
          name="password"
          type="password"
          className="p-2 border border-2 border-secondary rounded-3 col-xl-11 col-lg-11 col-md-11 "
        />

        <ErrorMessage
          name="password"
          render={(msg) => <div className="text-danger mt-2">{msg}</div>}
        />

        <button
          type="submit"
          className="border-0 rounded-4 text-white p-3 fw-bold mt-3 col-md-11 bg-green"
        >
          ورود
        </button>

        <div className="mt-4 w-100 d-flex justify-content-around ">
          <p>
            <input className="ms-2" type="checkbox" />
            مرا به خاطر بسپار
          </p>
          <p className="ms-5 text-orange">رمز عبور را فراموش کرده اید ؟</p>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
