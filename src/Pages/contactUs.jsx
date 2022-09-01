import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { EnvironmentOutlined, FacebookOutlined, GithubOutlined, InstagramOutlined, MailOutlined, PhoneOutlined, TwitterOutlined, WhatsAppOutlined, YoutubeOutlined } from '@ant-design/icons';
import ReCAPTCHA from "react-google-recaptcha";

const ContactUS = () => {


    function onChange(value) {
        console.log("Captcha value:", value);
      }
    return (
        <div className="contact-us-container  mt-5">

            <div className="contact-us-information ml-5">
                <h4 style={{ fontWeight: 'bold', color: 'white' }}>اطلاعات تماس گیشا اسپرت</h4>
                <p style={{ color: 'rgb(209, 209, 209)' }}>صمیمانه پاسخگوی نظر، پیشنهاد، انتقاد و شکایت شما هستیم</p>
                <h6 style={{ marginTop: '100px', marginRight: '50px' }}><PhoneOutlined style={{ fontSize: '22px', marginLeft: '10px', color: 'rgb(259, 259, 259)' }} />۰۲۱-۲۸۴۲۸۱۵۹</h6>
                <h6 style={{ marginTop: '20px', marginRight: '50px' }}><MailOutlined style={{ fontSize: '22px', marginLeft: '10px', color: 'rgb(259, 259, 259)' }} />info@GishaSport.com</h6>
                <h6 style={{ marginTop: '20px', marginRight: '50px' }}><EnvironmentOutlined style={{ fontSize: '22px', marginLeft: '10px', color: 'rgb(259, 259, 259)' }} />پونک، خیابان عدل، خیابان بهار شرقی</h6>

                <p style={{ textAlign: 'right', marginRight: '80px', marginTop: '10px', marginLeft: '20px', color: 'rgb(209, 209, 209)', lineHeight: '20px' }}>
                    آدرس مربوط به دفتر مرکزی بوده و فروشگاه حضوری وجود ندارد
                    خرید و ثبت سفارش تنها بصورت آنلاین میباشد و درصورت نیاز به مشاوره از طریق چت آنلاین سایت، چت واتساپ و یا تماس تلفنی با ما در ارتباط باشید
                </p>

                <div className="mt-5 mr-5">
                    <YoutubeOutlined className="contactus-icons" />
                    <TwitterOutlined className="contactus-icons" />
                    <GithubOutlined className="contactus-icons" />
                    <WhatsAppOutlined className="contactus-icons" />
                    <InstagramOutlined className="contactus-icons" />
                </div>


            </div>


            <div className="contact-us-form">
                <form className="contact-us-form-container">
                    <label>نام و نام خانوادگی *</label>
                    <input
                        size="70"
                        className="mt-2 mb-4 "
                        type="text"
                        name="username"
                        style={{ display: 'block' }}
                    // value={inputs.username || ""}
                    // onChange={handleChange}
                    />
                    <label> تلفن *</label>
                    <input
                        size="70"
                        className="mt-2 mb-4 "
                        type="tel"
                        name="phonenumber"
                        style={{ display: 'block' }}
                        placeholder="مثال : ۰۹۱۲۹۹۹۸۸۷۷"
                    // value={inputs.age || ""}
                    // onChange={handleChange}  
                    />

                    <label> متن پیام شما *</label>
                    <textarea placeholder="بنویسید ..."
                        style={{ width: '100%', height: '200px', resize: 'none' }}
                        className="mt-2 mb-3"
                    />

                    <ReCAPTCHA
                        sitekey="Your client site key"
                        onChange={onChange}
                    />


                    <button
                        type="submit"
                        style={{ display: 'block' }}
                    >
                        ارسال
                    </button>

                </form>
            </div>



        </div>
    );
}

export default ContactUS;