import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerSchema } from '../Components/Validations/contactValidation';
import { sendRegisterService } from '../Services/services';
import { setUserData } from '../Redux/usefulActions';


const Register = () => {


    const navigate = useNavigate() ;
    const dispatch = useDispatch() ;

    const handleRegister = async (values, actions) => {

        console.log('values register', values);
        console.log('actions register', actions);


        const user = {
            username: values.email,
            email: values.email,
            password: values.password
        }

        const responseRegister = await sendRegisterService(user);
        console.log("responseRegister =>" , responseRegister.data.user);

        if(responseRegister.status == 200){
            toast.success('عضویت شما با موفقیت انجام شد' , {
                position: 'top-right' , 
                closeOnClick: true
            })
            dispatch(setUserData(responseRegister.data.user))
            actions.resetForm() ;
            navigate("/profile")
            
        }

        }


    return (
        <div className="register-container container" >


            <div >
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}

                    // validationSchema={registerSchema}

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