import {
  GithubOutlined,
  InstagramOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showing, setShowing] = useState(false);

  return (
    <div className="footer-container">
      <div className="top-footer-container  row">
        <div className="text-center col-6  col-md">
          <img src="/images\footer-photos\f5.png" alt="ضمانت بازگشت" />
          <p>هفت روز ضمانت بازگشت وجه</p>
        </div>
        <div className="text-center col-6  col-md">
          <img src="/images\footer-photos\f4.png" alt="تحویل اکسپرس" />
          <p>تحویل اکسپرس تهران</p>
        </div>
        <div className="text-center col-4 col-md">
          <img src="/images\footer-photos\f3.png" alt="ارسال رایگان " />
          <p>
            ارسال رایگان خرید بالای <br /> ۵۰۰ هزار تومان
          </p>
        </div>
        <div className="text-center col-4 col-md">
          <img src="/images\footer-photos\f2.png" alt="ارسال به سراسر کشور " />
          <p>ارسال به سراسر کشور</p>
        </div>
        <div className="text-center col-4 col-md">
          <img src="/images\footer-photos\f1.png" alt="ضمانت کالا" />
          <p>ضمانت سلامت و عدم مغایرت</p>
        </div>
      </div>

      <div className="main-footer-container row mt-5">
        <div className="item1 col-12 col-lg-5 offset-lg-1 text-right">
          <h5>فروشگاه آنلاین پوشاک و لوازم ورزشی گیشا اسپرت</h5>
          <p className="box"></p>
          <h6 className="mb-5">
            فروشگاه اینترنتی گیشا اسپرت در سال 1396 کار خود را در زمینه انواع
            لباس ورزشی مردانه و زنانه و همچنین لوازم و تجهیزات ورزشی، با تمرکز
            بیشتر بر رشته‌های ورزشی فیتنس و بدنسازی شروع کرد. در این سال‌ها
            تمرکز ما بر جلب رضایت مشتریان و پشتیبانی قوی از آن‌ها بوده است و در
            این راستا همواره سعی نمودیم تا بر تنوع کالایی افزوده و کیفیت کارها
            را اولویت اصلی خودمان قرار دهیم. با رشد روزافزون خرید اینترنتی، تلاش
            کردیم تمامی چالش‌های خرید آنلاین را برای مشتریان عزیزمان برطرف سازیم
            تا با جلب اعتماد مشتریان و صداقت، برند خود را متمایز سازیم.
            {/* {showing
                            ? <span style={{ color: "orange" }}>ادامه...</span>
                            : <span style={{ color: "orange" }}>بستن</span>
                        } */}
            <span
              onClick={() => {
                setShowing(!showing);
              }}
              style={{
                color: "rgb(254, 116, 11)",
                cursor: "pointer",
                borderBottom: "1px solid black",
              }}
            >
              {showing ? " بستن " : " ادامه ..."}
            </span>
          </h6>

          {showing ? (
            <h6>
              محصولات ارائه شده در گیشا اسپرت در چند دسته اصلی جای داده می‌شوند،
              پوشاک ورزشی، لوازم و تجهیزات ورزشی و اکسسوری ورزشی. در دسته بندی
              پوشاک ورزشی، تنوع بالای لباس ورزشی مردانه و لباس ورزشی زنانه با
              زیر دسته‌های لگ ورزشی، رکابی و تیشرت ورزشی، شلوار و شلوارک ورزشی،
              هودی و سویشرت، کفش ورزشی و همچنین ست‌های ورزشی در دسته لباس ورزشی
              مردانه و لگ ورزشی، تاپ و نیم تنه ورزشی، شلوار و شلوارک و همچنین
              انواع ست لباس اسپرت زنانه در دسته لباس ورزشی زنانه موجود است. در
              سایر دسته‌بندی ها قمقمه و شیکر ورزشی، تجهیزات ورزشی مانند انواع کش
              بدنسازی، مچبند و بند لیفت، دستکش بدنسازی، کیف و کوله و همچنین
              کمربند بدنسازی وجود دارد. امیدواریم بتوانیم در کیفیت و سرعت خدمات
              رضایت شما مشتریان عزیز را فراهم کنیم و گامی در راستای ایجاد
              رویکردی جدید در ورزش به خصوص فیتنس و بدنسازی برداریم.
            </h6>
          ) : null}

          <div className="main-footer-phone-number row mt-3">
            <img
              src="/images\footer-photos\phone.png"
              alt="تلفن تماس : ۰۲۱۲۲۳۳۴۴۵۵"
              className="ml-3"
            />
            <div>
              <p className="font-weight-bold mb-3">تلفن تماس</p>
              <p className="font-weight-bold">۰۲۱-۲۲۳۳۴۴۵۵</p>
            </div>
          </div>

          <div className="text-center row justify-content-center ">
            <TwitterOutlined className="icon-item col-1" />
            <InstagramOutlined className="icon-item col-1" />
            <WhatsAppOutlined className="icon-item col-1" />
            <GithubOutlined className="icon-item col-1" />
          </div>
        </div>

        <div className="item2 col-6 col-lg-3  text-right">
          <h5 className="font-weight-bold">دسترسی سریع</h5>
          <p>
            <Link to="/" className="link">
              &bull; صفحه اصلی
            </Link>
          </p>
          <p>
            <Link to="/ContactUS" className="link">
              &bull; تماس با ما
            </Link>
          </p>
          <p>
            <Link to="/cooperation" className="link">
              &bull; همکاری با ما
            </Link>
          </p>

          <p>
            <Link to="/privacy" className="link">
              &bull; حریم خصوصی
            </Link>
          </p>
          <p>
            <Link to="/Terms" className="link">
              &bull; قوانین و مقررات
            </Link>
          </p>
          <p>
            <Link to="/track-order" className="link">
              &bull; پیگیری ارسال سفارش
            </Link>
          </p>
          <p>
            <Link to="/shaker-printing" className="link">
              &bull; شیکر با چاپ لوگو دلخواه
            </Link>
          </p>
          <p>
            <Link to="/help" className="link">
              &bull; راهنما | خرید، ارسال و بازگردانی
            </Link>
          </p>
        </div>

        <div className="item3 col-6 col-lg-3 text-right">
          <h5>مجوز های فعالیت</h5>
          <img
            src="/images\footer-photos\asnaf1.jpg"
            alt="مجوز فعالیت"
            className="d-block"
          />
          <img src="/images\footer-photos\asnaf2.jpg" alt="مجوز فعالیت" />
        </div>
      </div>

      <div className="bottom-footer-container container">
        <p>
          تمام حقوق مادی و معنوی فروشگاه اینترنتی{" "}
          <b className="font-weight-bold">
            <Link to="" className="link">
              گیشا اسپرت
            </Link>
          </b>{" "}
          محفوظ است.
        </p>
      </div>
    </div>
  );
};

export default Footer;
