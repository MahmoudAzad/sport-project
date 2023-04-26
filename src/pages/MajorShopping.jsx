import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Field, Form, Formik } from "formik";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ReCAPTCHA from "react-google-recaptcha";

const MajorShopping = () => {
  return (
    <div className="major-shopping-container col-11 col-md-11 container">
      <p className="text-center">خرید عمده لباس و لوازم ورزشی</p>
      {/* <p className="underline container" /> */}
      <p className="mb-5 mb-md-0">
        اگر فروشگاه لوازم ورزشی، داروخانه و یا باشگاه بدنسازی دارید و به دنبال
        خرید عمده لباس ورزشی و همچنین سایر لوازم و اکسسوری هستید، ما در مجموعه
        گیشا اسپرت امکان خرید به صورت عمده با شرایط ویژه را برای شما فراهم کرده
        ایم.
      </p>
      <div className="anchor-container d-none d-md-flex">
        <AnchorLink
          className="anchor-item col-xl col-4 mt-5"
          href="#item-1"
          offset="50"
        >
          <img
            src="/images\major-shopping/anchor1.jpg"
            alt="شیکر با لوگو دلخواه"
          />
          <div className="item-description mr-3">
            <p className="item-link">چرا شیکر با لوگو دلخواه</p>
            <LeftOutlined className="item-icon" />
          </div>
        </AnchorLink>
        <AnchorLink
          className="anchor-item col-xl col-4 mt-5"
          href="#item-2"
          offset="50"
        >
          <img
            src="/images\major-shopping/anchor2.jpg"
            alt="لباس ورزشی زنانه"
          />
          <div className="item-description mr-3">
            <p className="item-link">لباس ورزشی زنانه </p>
            <LeftOutlined className="item-icon" />
          </div>
        </AnchorLink>
        <AnchorLink
          className="anchor-item col-xl col-4 mt-5"
          href="#item-3"
          offset="50"
        >
          <img src="/images\major-shopping/anchor3.jpg" alt="شیکر و جاگ‌واتر" />
          <div className="item-description mr-3">
            <p className="item-link">شیکر و جاگ‌واتر</p>
            <LeftOutlined className="item-icon" />
          </div>
        </AnchorLink>
        <AnchorLink
          className="anchor-item col-xl col-4 mt-5"
          href="#item-4"
          offset="50"
        >
          <img src="/images\major-shopping/anchor4.jpg" alt="تجهیزات بدنسازی" />
          <div className="item-description mr-3">
            <p className="item-link">تجهیزات بدنسازی</p>
            <LeftOutlined className="item-icon " />
          </div>
        </AnchorLink>
        <AnchorLink
          className="anchor-item col-xl col-4 mt-5"
          href="#item-5"
          offset="50"
        >
          <img src="/images\major-shopping/anchor5.jpg" alt="اکسسوری" />
          <div className="item-description mr-3">
            <p className="item-link">اکسسوری</p>
            <LeftOutlined className="item-icon " />
          </div>
        </AnchorLink>
      </div>

      <div id="item-1" className="row col-md-11 col-12 m-auto ">
        <div className="desc order-md-first order-last col-12 col-md-7 col-lg-8">
          <h4 className="text-md-right text-center">
            خرید عمده لباس ورزشی مردانه
          </h4>
          <span className="underline"></span>
          <p>
            فروش عمده لباس ورزشی مردانه در گیشا اسپرت در دسته بندی های متنوع و
            اجناس گوناگون پارچه صورت می‌پذیرد. دسته بندی‌های پوشاک ورزشی مردانه
            عبارتند از : لگ ورزشی مردانه، رکابی ورزشی مردانه، تیشرت ورزشی
            مردانه، شلوارک ورزشی مردانه، کفش ورزشی مردانه، شلوار ورزشی و ست
            ورزشی مردانه و هودی و سویشرت مردانه
          </p>
          <AnchorLink href="#form" offset="100" className="anchor">
            <p className="text-md-right text-center mt-4">
              تماس و جزئیات بیشتر ❯
            </p>
          </AnchorLink>
        </div>
        <img
          src="\images/major-shopping/item1.png"
          className="col-12 col-md-5 col-lg-4"
          alt="خرید عمده لباس ورزشی مردانه"
        />
      </div>

      <div id="item-2" className="row col-md-11 col-12 m-auto">
        <img
          src="\images/major-shopping/item2.png"
          className="col-12 col-md-5 col-lg-4"
          alt="خرید عمده لباس ورزشی زنانه"
        />

        <div className="desc col-12 col-md-7 col-lg-8">
          <h4 className="text-md-right text-center">
            خرید عمده لباس ورزشی زنانه
          </h4>
          <span className="underline"></span>
          <p>
            فروش عمده لباس ورزشی زنانه در گیشا اسپرت در دسته بندی های متنوع و
            اجناس گوناگون پارچه صورت می‌پذیرد. دسته بندی‌های پوشاک ورزشی مردانه
            عبارتند از : لگ ورزشی زنانه، تاپ و نیم تنه ورزشی، دامن و تیشرت ورزشی
            زنانه، شلوار و شلوارک ورزشی زنانه و انواع ست های ورزشی زنانه
          </p>
          <AnchorLink href="#form" offset="100" className="anchor">
            <p className="text-md-right text-center mt-4">
              تماس و جزئیات بیشتر ❯
            </p>
          </AnchorLink>
        </div>
      </div>

      <div id="item-3" className="row col-md-11 col-12 m-auto">
        <div className="desc col-12 col-md-7 col-lg-8 order-last order-md-first">
          <h4 className="text-md-right text-center">
            خرید عمده شیکر ورزشی و جاگ واتر
          </h4>
          <span className="underline"></span>
          <p>
            اگر به دنبال خرید عمده قمقمه و شیکر ورزشی هستید، ما در فروشگاه گیشا
            اسپرت انواع قمقمه و جاگ واتر ورزشی، شیکرهای بدنسازی یک تیکه، سه تیکه
            و پنج تیکه و همچنین شیکرهای استیل و برقی را به صورت عمده به فروش
            می‌رسانیم.
          </p>
          <AnchorLink href="#form" offset="100" className="anchor">
            <p className="text-md-right text-center mt-4">
              تماس و جزئیات بیشتر ❯
            </p>
          </AnchorLink>
        </div>

        <img
          src="\images/major-shopping/item3.png"
          className="col-12 col-md-5 col-lg-4"
          alt="خرید عمده شیکر ورزشی و جاگ واتر"
        />
      </div>

      <div id="item-4" className="row col-md-11 col-12 m-auto">
        <img
          src="\images/major-shopping/item4.png"
          className="col-12 col-md-5 col-lg-4"
          alt="خرید عمده تجهیزات بدنسازی"
        />

        <div className="desc col-12 col-md-7 col-lg-8">
          <h4 className="text-md-right text-center">
            خرید عمده تجهیزات بدنسازی
          </h4>

          <span className="underline"></span>
          <p>
            امکان خرید تجهیزات ورزشی به صورت عمده در گیشا اسپرت فراهم شده است.
            انواع مچبند و زانو بند ورزشی، بند لیفت و دستکش بدنسازی، انواع کش
            ورزشی و همچنین تنوع بالای کمربند بدنسازی به صورت عمده به فروش
            می‌رسند.
          </p>
          <AnchorLink href="#form" offset="100" className="anchor">
            <p className="text-md-right text-center mt-4">
              تماس و جزئیات بیشتر ❯
            </p>
          </AnchorLink>
        </div>
      </div>

      <div id="item-5" className="row col-md-11 col-12 m-auto">
        <div className="desc col-12 col-md-7 col-lg-8 order-last order-md-first">
          <h4 className="text-md-right text-center">خرید عمده اکسسوری ورزشی</h4>

          <span className="underline"></span>
          <p>
            اگر به دنبال خرید اکسسوری ورزشی به صورت عمده هستید، ما در فروشگاه
            گیشا اسپرت در دسته بندی های : کیف و ساک ورزشی، کوله و شوزبگ، اکشن
            فیگور و همچنین کلاه و اسکارف و گردنبندهای ورزشی محصولات را به صورت
            عمده ارائه می‌دهیم
          </p>
          <AnchorLink href="#form" offset="100" className="anchor">
            <p className="text-md-right text-center mt-4">
              تماس و جزئیات بیشتر ❯
            </p>
          </AnchorLink>
        </div>

        <img
          src="\images/major-shopping/item5.png"
          className="col-12 col-md-5 col-lg-4"
          alt="خرید عمده اکسسوری ورزشی"
        />
      </div>

      <div id="form" className="form-container col-md-11 col-12 m-auto">
        <h5 className="text-center font-weight-bold mt-3 mb-5">
          برای اطلاع و دریافت جزئیات بیشتر از یکی از روش‌‌های زیر با ما تماس
          بگیرید
        </h5>
        <div className="row">
          <div className="col-md-5 col-12">
            <div className="icon-box">
              <img
                src="\images/major-shopping/telephone.png"
                alt="تلفن ۰۲۱۵۰۵۰۵۰۵۰"
              />
              <div className="mr-3">
                <h5>تلفن تماس</h5>
                <p>021-28428159</p>
              </div>
            </div>
            <div className="icon-box mt-3">
              <img src="\images/major-shopping/whatsapp.png" alt="واتساپ" />
              <div className="mr-3">
                <p>فقط عمده و همکاری سازمانی</p>
                <h5>واتساپ</h5>
                <p>09109103136</p>
              </div>
            </div>
          </div>

          <div className="form-box col-md-7 col-12 mt-4 mt-md-0">
            <Formik>
              <Form className="text-right">
                <label className="label">نام و نام خانوادگی*</label>
                <Field name="name" type="text" className="col-12 field" />
                <label className="label">تلفن تماس*</label>
                <Field name="id" type="number" className="col-12 field" />
                <label className="label">کد امنیتی</label>
                <ReCAPTCHA sitekey="Your client site key" />
                <btn className="btn btn-success mt-4">ارسال</btn>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorShopping;
