import { GithubOutlined, InstagramOutlined, MailOutlined, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons';
import React from 'react';

const Footer = () => {
    return (
        <div className="footer-container ">

            <div className="top-footer-container container">
                <div className="top-footer-item">
                    <img src="/images\footer-photos\f5.png" alt="ضمانت بازگشت" />
                    <p >هفت روز ضمانت بازگشت وجه</p>

                </div>
                <div className="top-footer-item">
                    <img src="/images\footer-photos\f4.png" alt="تحویل اکسپرس" />
                    <p >تحویل اکسپرس تهران</p>

                </div>
                <div className="top-footer-item">
                    <img src="/images\footer-photos\f3.png" alt="ارسال رایگان " />
                    <p >ارسال رایگان خرید بالای <br /> ۵۰۰ هزار تومان</p>

                </div>
                <div className="top-footer-item">
                    <img src="/images\footer-photos\f2.png" alt="ارسال به سراسر کشور " />
                    <p >ارسال به سراسر کشور</p>

                </div>
                <div className="top-footer-item">
                    <img src="/images\footer-photos\f1.png" alt="ضمانت کالا" />
                    <p >ضمانت سلامت و عدم مغایرت</p>
                </div>
            </div>

            <div className="main-footer-container container">
                <div className="main-footer-item1">
                    <h5 className="font-weight-bold ">
                        فروشگاه آنلاین پوشاک و لوازم ورزشی گیشا اسپرت
                    </h5>
                    <p className="box"></p>
                    <h6 >
                        فروشگاه اینترنتی گیشا اسپرت در سال 1396 کار خود را در زمینه انواع لباس ورزشی مردانه و زنانه و همچنین لوازم و تجهیزات ورزشی، با تمرکز بیشتر بر رشته‌های ورزشی فیتنس و بدنسازی شروع کرد. در این سال‌ها تمرکز ما بر جلب رضایت مشتریان و پشتیبانی قوی از آن‌ها بوده است و در این راستا همواره سعی نمودیم تا بر تنوع کالایی افزوده و کیفیت کارها را اولویت اصلی خودمان قرار دهیم. با رشد روزافزون خرید اینترنتی، تلاش کردیم تمامی چالش‌های خرید آنلاین را برای مشتریان عزیزمان برطرف سازیم تا با جلب اعتماد مشتریان و صداقت، برند خود را متمایز سازیم.
                    </h6>

                    <div className="main-footer-phone-number">
                        <img src="/images\footer-photos\phone.png" alt="تلفن تماس" className="ml-3" />
                        <div>
                            <p className="font-weight-bold mb-3">تلفن تماس</p>
                            <p className="font-weight-bold">۰۲۱-۲۲۳۳۴۴۵۵</p>
                        </div>
                    </div>

                    <div className="main-footer-icons ">
                        <TwitterOutlined className="main-footer-icons-item" />
                        <MailOutlined className="main-footer-icons-item" />
                        <InstagramOutlined className="main-footer-icons-item" />
                        <WhatsAppOutlined className="main-footer-icons-item" />
                        <GithubOutlined className="main-footer-icons-item" />

                    </div>
                </div>

                <div className="main-footer-item2">
                    <h5 className="font-weight-bold">
                        دسترسی سریع
                    </h5>
                    <p>
                        &bull; صفحه اصلی
                    </p>
                    <p>
                        &bull; همه محصولات
                    </p>
                    <p>
                        &bull; مجله ورزشی گیشا اسپرت
                    </p>
                    <p>
                        &bull; تماس با ما
                    </p>
                    <p>
                        &bull; شیکر با چاپ لوگو دلخواه
                    </p>
                    <p>
                        &bull; حریم خصوصی
                    </p>
                    <p>
                        &bull; قوانین و مقررات
                    </p>
                    <p>
                        &bull; پیگیری ارسال سفارش
                    </p>
                    <p>
                        &bull; راهنما | خرید، ارسال و بازگردانی
                    </p>
                </div>

                <div className="main-footer-item3">
                    <h5 className="font-weight-bold"    >
                        مجوز های فعالیت
                    </h5>
                    <img src="/images\footer-photos\asnaf1.jpg" alt="مجوز فعالیت" className='mr-3 mt-4 mb-4' />
                    <img src="/images\footer-photos\asnaf2.jpg" alt="مجوز فعالیت  " />

                </div>
            </div>


            <div className="bottom-footer-container container">
                <p>تمام حقوق مادی و معنوی فروشگاه اینترنتی <b className="font-weight-bold">گیشا اسپرت</b> محفوظ است.</p>
            </div>
        </div>
    );
}

export default Footer;
