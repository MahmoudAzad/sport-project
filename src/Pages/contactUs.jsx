import React from 'react';
import { EnvironmentOutlined, GithubOutlined, InstagramOutlined, MailOutlined, PhoneOutlined, TwitterOutlined, WhatsAppOutlined, YoutubeOutlined } from '@ant-design/icons';
import ReCAPTCHA from "react-google-recaptcha";
import BeatLoader from "react-spinners/ClipLoader";
import { sendMessageService } from '../Services/services';
import { toast } from 'react-toastify';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { contactSchema } from '../Components/Validations/contactValidation';
const ContactUS = () => {

    const handleSubmit = async (values, actions) => {

        try {
            <BeatLoader color={'red'} size={150} />
            const { status } = await sendMessageService(values);

            if (status == 200) {


                toast.success(values.userName + " عزیز پیام شما ارسال شد ", {
                    position: "top-right",
                    closeOnClick: true
                });

                actions.resetForm()
            }

        } catch (e) {
            console.log('Err =>', e.message);
        }
    }


    return (
        <div className="mr-5 ml-5">
            <div className="contact-us-container row ">

                <div className="information col-lg-6 text-right pt-5">
                    <h4 style={{ fontWeight: 'bold', color: 'white' }}>اطلاعات تماس گیشا اسپرت</h4>
                    <p style={{ color: 'rgb(209, 209, 209)' }}>صمیمانه پاسخگوی نظر، پیشنهاد، انتقاد و شکایت شما هستیم</p>
                    <h6 style={{ marginTop: '100px', marginRight: '50px' }}><PhoneOutlined style={{ fontSize: '22px', marginLeft: '10px', color: 'rgb(259, 259, 259)' }} />۰۲۱-۲۸۴۲۸۱۵۹</h6>
                    <h6 style={{ marginTop: '20px', marginRight: '50px' }}><MailOutlined style={{ fontSize: '22px', marginLeft: '10px', color: 'rgb(259, 259, 259)' }} />info@GishaSport.com</h6>
                    <h6 style={{ marginTop: '20px', marginRight: '50px' }}><EnvironmentOutlined style={{ fontSize: '22px', marginLeft: '10px', color: 'rgb(259, 259, 259)' }} />پونک، خیابان عدل، خیابان بهار شرقی</h6>

                    <p style={{ textAlign: 'right', marginRight: '80px', marginTop: '10px', marginLeft: '20px', color: 'rgb(209, 209, 209)', lineHeight: '20px' }}>
                        آدرس مربوط به دفتر مرکزی بوده و فروشگاه حضوری وجود ندارد
                        خرید و ثبت سفارش تنها بصورت آنلاین میباشد و درصورت نیاز به مشاوره از طریق چت آنلاین سایت، چت واتساپ و یا تماس تلفنی با ما در ارتباط باشید
                    </p>

                    <div className="mt-5 mr-5 row">
                        <YoutubeOutlined className="icon col-2" />
                        <TwitterOutlined className="icon col-2" />
                        <GithubOutlined className="icon col-2" />
                        <WhatsAppOutlined className="icon col-2" />
                        <InstagramOutlined className="icon col-2" />
                    </div>
                </div>


                <div className="form-container col-lg-6  text-right pt-5">


                    <Formik
                        initialValues={{
                            userName: "",
                            phoneNumber: "",
                            message: ""
                        }}
                        validationSchema={contactSchema}

                        onSubmit={(values, actions) => {
                            handleSubmit(values, actions);
                        }}
                    >

                        <Form className="form">
                            <label className=" mb-2">نام و نام خانوادگی *</label>
                            <Field
                                name="userName"
                                type="text"
                                className="mb-1 field-input col-12"
                            />

                            <ErrorMessage
                                name="userName"
                                render={(msg) => (
                                    <div className="text-danger">{msg}</div>
                                )}
                            />


                            <label className="mt-4 mb-2"> تلفن *</label>
                            <Field
                                name="phoneNumber"
                                type="number"
                                className="mb-1 field-input col-12"
                                placeholder="مثال : ۰۹۱۲۹۹۹۸۸۷۷"
                            />


                            <ErrorMessage
                                name="phoneNumber"
                                render={(msg) => (
                                    <div className="text-danger">{msg}</div>
                                )}
                            />

                            <label className="mt-4 mb-2"> متن پیام شما *</label>
                            <Field
                                placeholder="بنویسید ..."
                                style={{ height: '200px', resize: 'none', display: 'block' }}
                                name="message"
                                as="textarea"
                                className="w-100"
                            />

                            <ErrorMessage
                                name="message"
                                render={(msg) => (
                                    <div className="text-danger">{msg}</div>
                                )}
                            />


                            <label className="mb-2 mt-3">کد امنیتی</label>
                            <ReCAPTCHA
                                sitekey="Your client site key"
                            />


                            <button
                                type="submit"
                                style={{ display: 'block', marginBottom: '20px' }}
                            >
                                ارسال
                            </button>
                        </Form>
                    </Formik>

                </div>

            </div>

        </div>
    );
}

export default ContactUS;