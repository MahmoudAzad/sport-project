import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="register-container container" >


            <div >
                <Formik
                    initialValues={{

                    }}
                >
                    <Form className="register-form">
                        <h4 className="font-weight-bold mb-4">عضویت</h4>
                        <label className="mb-2 font-weight-bold ">آدرس ایمیل <span className="text-danger">*</span></label>
                        <Field
                            name="email"
                            type="text"
                            size="60"
                            className="register-field ml-5"
                        />

                        <label className="mb-2 mt-4 font-weight-bold ">گذرواژه<span className="text-danger">*</span></label>
                        <Field
                            name="password"
                            type="text"
                            size="60"
                            className="register-field"
                        />

                        <p style={{ width: "500px", lineHeight: "25px", marginTop: "20px", paddingBottom: "40px", textAlign: "right", borderBottom: "2px solid rgb(209, 209, 209)" }} >

                            در صورت کلیک بر روی ثبت نام بدین معناست که مندرجات حریم خصوصی و قوانین سایت را مطالعه کرده و پذیرفته اید.
                        </p>

                        <button
                            type="submit"
                            style={{ display: 'block' }}
                            className="register-btn"
                        >
                            عضویت
                        </button>



                    </Form>
                </Formik>
            </div>


            <div className="register-login">
                <h4 className="font-weight-bold mb-4">ورود به حساب کاربری</h4>
                <p>
                    جهت مشاهده وضعیت سفارشات و ویرایش اطلاعات خود از قسمت زیر میتوانید وارد حساب کاربری شوید
                </p>


                    <Link className="register-btn" to="/login">
                        ورود
                    </Link>
               

            </div>

        </div>
    );
}

export default Register;