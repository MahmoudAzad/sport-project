import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showing, setShowing] = useState(false);

  return (
    <div
      className="footer-container"
      style={{ backgroundColor: "rgb(249, 249, 249)", marginTop: "100px" }}
    >
      <div className="row">
        <div className="text-center col-6  col-md">
          <img src="/images\footer-photos\f5.png" alt="ضمانت بازگشت" />
          <p>هفت روز ضمانت بازگشت وجه</p>
        </div>
        <div className="text-center col-6 col-md">
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

      <div className="row mt-5">
        <div className="col-12 col-lg-5 text-right">
          <h5
            className="fw-bold pb-2"
            style={{ borderBottom: "3px solid rgb(255, 118, 38)" }}
          >
            فروشگاه آنلاین پوشاک و لوازم ورزشی گیشا اسپرت
          </h5>
          <h6 className="mb-5 lh-lg text-light-emphasis">
            فروشگاه اینترنتی گیشا اسپرت در سال 1396 کار خود را در زمینه انواع
            لباس ورزشی مردانه و زنانه و همچنین لوازم و تجهیزات ورزشی، با تمرکز
            بیشتر بر رشته‌های ورزشی فیتنس و بدنسازی شروع کرد. در این سال‌ها
            تمرکز ما بر جلب رضایت مشتریان و پشتیبانی قوی از آن‌ها بوده است و در
            این راستا همواره سعی نمودیم تا بر تنوع کالایی افزوده و کیفیت کارها
            را اولویت اصلی خودمان قرار دهیم. با رشد روزافزون خرید اینترنتی، تلاش
            کردیم تمامی چالش‌های خرید آنلاین را برای مشتریان عزیزمان برطرف سازیم
            تا با جلب اعتماد مشتریان و صداقت، برند خود را متمایز سازیم.
            <span
              onClick={() => {
                setShowing(!showing);
              }}
              className="text-orange cursor-pointer border-bottom border-dark"
            >
              {showing ? " بستن " : " ادامه ..."}
            </span>
          </h6>

          {showing ? (
            <h6 className="mb-5 lh-lg text-light-emphasis">
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

          <div className="d-flex align-items-center mt-3">
            <img
              src="/images\footer-photos\phone.png"
              alt="تلفن تماس : ۰۲۱۲۲۳۳۴۴۵۵"
              className="ml-3"
              style={{ width: "50px", marginLeft: "10px" }}
            />
            <div>
              <p className="fw-bold mb-3">تلفن تماس</p>
              <p className="fw-bold">۰۲۱-۲۲۳۳۴۴۵۵</p>
            </div>
          </div>

          <div className="text-center row justify-content-center ">
            <i className="bi bi-twitter mx-2 my-5 border border-2 border-secondary rounded-circle p-3 col-1" />
            <i className="bi bi-instagram mx-2 my-5 border border-2 border-secondary rounded-circle p-3 col-1" />
            <i className="bi bi-whatsapp mx-2 my-5 border border-2 border-secondary rounded-circle p-3 col-1" />
            <i className="bi bi-github mx-2 my-5 border border-2 border-secondary rounded-circle p-3 col-1" />
          </div>
        </div>

        <div className="lh-lg col-6 col-lg-3 text-right offset-lg-1 d-flex flex-column  ">
          <h5
            className="fw-bold pb-2"
            style={{ borderBottom: "3px solid rgb(255, 118, 38)" }}
          >
            دسترسی سریع
          </h5>
          <Link to="/" className="link text-decoration-none py-2">
            &bull; صفحه اصلی
          </Link>
          <Link to="/ContactUS" className="link text-decoration-none py-2">
            &bull; تماس با ما
          </Link>
          <Link to="/cooperation" className="link text-decoration-none py-2">
            &bull; همکاری با ما
          </Link>

          <Link to="/privacy" className="link text-decoration-none py-2">
            &bull; حریم خصوصی
          </Link>
          <Link to="/Terms" className="link text-decoration-none py-2">
            &bull; قوانین و مقررات
          </Link>
          <Link to="/track-order" className="link text-decoration-none py-2">
            &bull; پیگیری ارسال سفارش
          </Link>
          <Link
            to="/shaker-printing"
            className="link text-decoration-none py-2"
          >
            &bull; شیکر با چاپ لوگو دلخواه
          </Link>
          <Link to="/help" className="link text-decoration-none py-2">
            &bull; راهنما | خرید، ارسال و بازگردانی
          </Link>
        </div>

        <div className="col-6 col-lg-2 text-right">
          <h5
            style={{ borderBottom: "3px solid rgb(255, 118, 38)" }}
            className="fw-bold pb-2"
          >
            مجوز های فعالیت
          </h5>
          <img
            src="/images\footer-photos\asnaf1.jpg"
            alt="مجوز فعالیت"
            className="d-block me-4"
          />
          <img src="/images\footer-photos\asnaf2.jpg" alt="مجوز فعالیت" />
        </div>
      </div>

      <div className="text-center border-top border-2 pt-4 mt-4 container">
        <p>
          تمام حقوق مادی و معنوی فروشگاه اینترنتی{" "}
          <b className="fw-bold">
            <Link to="" className="link text-decoration-none fw-bold">
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
