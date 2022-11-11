import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerSchema } from '../Components/Validations/contactValidation';
import { sendRegisterService } from '../Services/services';
import { setIsLoggedIn, setUserData } from '../Redux/usefulActions';
import { loadState } from '../Redux/localStorage';



const Register = (props) => {
    
    const localStore = undefined;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async (values, actions) => {

        console.log('values register', values);
        console.log('actions register', actions);


        const user = {
            username: values.email,
            email: values.email,
            password: values.password
        }

        const responseRegister = await sendRegisterService(user);
        console.log("Reg Res =>", responseRegister);

        if (responseRegister.status == 200) {
            toast.success('عضویت شما با موفقیت انجام شد', {
                position: 'top-right',
                closeOnClick: true
            })
            dispatch(setUserData(responseRegister.data.user.username));
            dispatch(setIsLoggedIn());
            actions.resetForm();
            navigate("/profile")

        }

    }

    if (localStore == undefined) {
        return (
            <div className=" container" >

            <div className="register-container mt-5 row">

            
                <div className="register-items col-xl-6 col-lg-6 col-md-6">
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}

                        validationSchema={registerSchema}

                        onSubmit={(values, actions) => {
                            handleRegister(values, actions);
                        }}
                    >
                        <Form className="register-form">
                            <h4 className="font-weight-bold mb-4">عضویت</h4>
                            <label className="mb-2 font-weight-bold ">آدرس ایمیل <span className="text-danger">*</span></label>
                            <Field
                                name="email"
                                type="text"
                                className="register-field col-xl-11 col-lg-11 col-md-11"
                            />
                            <ErrorMessage
                                name="email"
                                render={(msg) => (
                                    <div className="text-danger mt-2">{msg}</div>
                                )}
                            />

                            <label className="mb-2 mt-4 font-weight-bold ">گذرواژه<span className="text-danger">*</span></label>
                            <Field
                                name="password"
                                type="password"
                                className="register-field col-xl-11 col-lg-11 col-md-11"
                            />

                            <ErrorMessage
                                name="password"
                                render={(msg) => (
                                    <div className="text-danger mt-2">{msg}</div>
                                )}
                            />

                            {/* <p style={{ width: "500px", lineHeight: "25px", marginTop: "20px", paddingBottom: "40px", textAlign: "right", borderBottom: "2px solid rgb(209, 209, 209)" }} >

                                در صورت کلیک بر روی ثبت نام بدین معناست که مندرجات حریم خصوصی و قوانین سایت را مطالعه کرده و پذیرفته اید.
                            </p> */}
                            <p className="col-11 " style={{  lineHeight: "25px", marginTop: "20px", paddingBottom: "40px", textAlign: "right", borderBottom: "2px solid rgb(209, 209, 209)" }}>
                            در صورت کلیک بر روی ثبت نام بدین معناست که مندرجات حریم خصوصی و قوانین سایت را مطالعه کرده و پذیرفته اید.

                            </p>

                            <button
                                type="submit"
                                style={{ display: 'block' }}
                                className="register-btn mt-3 col-md-11 "
                            >
                                عضویت
                            </button>



                        </Form>
                    </Formik>
                </div>


                <div className="register-login col-xl-6 col-lg-6 col-md-6">
                    <h4 className="font-weight-bold mb-4">ورود به حساب کاربری</h4>
                    <p>
                        جهت مشاهده وضعیت سفارشات و ویرایش اطلاعات خود از قسمت زیر میتوانید وارد حساب کاربری شوید
                    </p>


                    <Link to="/login" >
                        <button className="register-btn col-11 col-md-3 ">
                            ورود
                        </button>
                    </Link>


                </div>

                </div>

            </div>
        );
    } else {
        return (
            <Navigate to='/profile' />
        )
    }
}

export default Register;