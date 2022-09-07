import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-container container" >


            <div >
                <Formik
                    initialValues={{

                    }}
                >
                    <Form className="login-from">
                        <h4 className="font-weight-bold mb-4">ورود</h4>
                        <label className="mb-2 font-weight-bold ">نام کاربری یا آدرس ایمیل <span className="text-danger">*</span></label>
                        <Field
                            name="username"
                            type="text"
                            size="60"
                            className="login-field ml-5"
                        />

                        <label className="mb-2 mt-4 font-weight-bold ">رمز عبور<span className="text-danger">*</span></label>
                        <Field
                            name="password"
                            type="text"
                            size="60"
                            className="login-field"
                        />

                        <button
                            type="submit"
                            style={{ display: 'block' }}
                            className="login-btn"
                        >
                            ورود
                        </button>

                        <div className="form-checkbox">

                            <p><input className="ml-2" type="checkbox" />مرا به خاطر بسپار</p>
                            <p style={{ color: '#f57e10' }}>رمز عبور را فراموش کرده اید ؟</p>
                        </div>

                    </Form>
                </Formik>
            </div>


            <div className="login-register">
                <h4 className="font-weight-bold mb-4">ثبت نام</h4>
                <p>
                    برای ثبت و مشاهده وضعیت سفارش و همچنین لازم است تا از این قسمت اطلاعات خود را وارد کنید تا ثبت‌نام شما در سایت انجام شود ثبت‌نام خیلی ساده و سریع انجام میشود
                </p>


                <Link to="/register" class="login-btn">
                    عضویت
                </Link>
            </div>

        </div>
    );
}

export default Login;