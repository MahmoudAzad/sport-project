import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setUserData } from '../Redux/usefulActions';
import { sendLoginService } from '../Services/services';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleLogin = async(values , actions) =>{
        console.log("values in login =>" , values);
        console.log("actions in login =>" , actions);

        const responseLogin = await sendLoginService(values);
        console.log("responseLogin st =>" , responseLogin.data.user);

        if(responseLogin.status==200){
            toast.success("ورود شما موفقیت آمیز بود" , {
                position : "top-right" , 
                closeOnClick : true
            })
            dispatch(setUserData(responseLogin.data.user));
            actions.resetForm();
            navigate('/profile')

        }

    }

    return (
        <div className="login-container container" >


            <div >
                <Formik
                    initialValues={{
                        identifier: "",
                        password: ""
                    }}

                    onSubmit={(values, actions) => {
                        handleLogin(values, actions);
                    }}
                >
                    <Form className="login-from">
                        <h4 className="font-weight-bold mb-4">ورود</h4>
                        <label className="mb-2 font-weight-bold ">نام کاربری یا آدرس ایمیل <span className="text-danger">*</span></label>
                        <Field
                            name="identifier"
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