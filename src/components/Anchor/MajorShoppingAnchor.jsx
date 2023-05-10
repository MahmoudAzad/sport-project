import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

const MajorShoppingAnchor = () => {
  return (
    <>
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
    </>
  );
};

export default MajorShoppingAnchor;
