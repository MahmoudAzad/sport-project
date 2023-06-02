import React from "react";
import { AnchorOffcet } from "../Function/AnchorOffcet";

const MajorShoppingAnchor = () => {
  return (
    <>
      <div className="d-none d-md-flex flex-wrap justifay-content-center mt-2 mb-5">
        <a
          className="d-flex justifay-content-center align-items-center col-xl col-4 mt-5 text-decoration-none text-black"
          href="#item-1"
          onClick={AnchorOffcet}
        >
          <img
            src="/images\major-shopping/anchor1.jpg"
            alt="شیکر با لوگو دلخواه"
            width="70"
          />
          <div className="me-2 d-flex">
            <p>چرا شیکر با لوگو دلخواه</p>
            <i class="bi bi-chevron-left" />
          </div>
        </a>
        <a
          className="d-flex justifay-content-center align-items-center col-xl col-4 mt-5 text-decoration-none text-black"
          href="#item-2"
          onClick={AnchorOffcet}
        >
          <img
            src="/images\major-shopping/anchor2.jpg"
            alt="لباس ورزشی زنانه"
            width="70"
          />
          <div className="me-2 d-flex">
            <p>لباس ورزشی زنانه </p>
            <i class="bi bi-chevron-left" />
          </div>
        </a>
        <a
          className="d-flex justifay-content-center align-items-center col-xl col-4 mt-5 text-decoration-none text-black"
          href="#item-3"
          onClick={AnchorOffcet}
        >
          <img
            src="/images\major-shopping/anchor3.jpg"
            alt="شیکر و جاگ‌واتر"
            width="70"
          />
          <div className="me-2 d-flex">
            <p>شیکر و جاگ‌واتر</p>
            <i class="bi bi-chevron-left" />
          </div>
        </a>
        <a
          className="d-flex justifay-content-center align-items-center col-xl col-4 mt-5 text-decoration-none text-black"
          href="#item-4"
          onClick={AnchorOffcet}
        >
          <img
            src="/images\major-shopping/anchor4.jpg"
            alt="تجهیزات بدنسازی"
            width="70"
          />
          <div className="me-2 d-flex">
            <p>تجهیزات بدنسازی</p>
            <i class="bi bi-chevron-left" />
          </div>
        </a>
        <a
          className="d-flex justifay-content-center align-items-center col-xl col-4 mt-5 text-decoration-none text-black"
          href="#item-5"
          onClick={AnchorOffcet}
        >
          <img
            src="/images\major-shopping/anchor5.jpg"
            alt="اکسسوری"
            width="70"
          />
          <div className="me-2 d-flex">
            <p>اکسسوری</p>
            <i class="bi bi-chevron-left" />
          </div>
        </a>
      </div>

      <div
        id="item-1"
        className="row col-md-11 col-12 m-auto p-3 pt-5 rounded-3"
      >
        <div className="order-md-first order-last col-12 col-md-7 col-lg-8 ">
          <h4 className="text-md-end fw-bold text-center">
            خرید عمده لباس ورزشی مردانه
          </h4>
          <p className="lh-base mt-4">
            فروش عمده لباس ورزشی مردانه در گیشا اسپرت در دسته بندی های متنوع و
            اجناس گوناگون پارچه صورت می‌پذیرد. دسته بندی‌های پوشاک ورزشی مردانه
            عبارتند از : لگ ورزشی مردانه، رکابی ورزشی مردانه، تیشرت ورزشی
            مردانه، شلوارک ورزشی مردانه، کفش ورزشی مردانه، شلوار ورزشی و ست
            ورزشی مردانه و هودی و سویشرت مردانه
          </p>
          <a
            href="#form"
            className="text-decoration-none text-black"
            onClick={AnchorOffcet}
          >
            <p className="text-md-end text-center mt-4">
              تماس و جزئیات بیشتر ❯
            </p>
          </a>
        </div>
        <img
          src="\images/major-shopping/item1.png"
          className="col-12 col-md-5 col-lg-4"
          alt="خرید عمده لباس ورزشی مردانه"
        />
      </div>

      <div
        id="item-2"
        className="row col-md-11 col-12 m-auto p-3 pt-5 rounded-3 mt-5"
      >
        <img
          src="\images/major-shopping/item2.png"
          className="col-12 col-md-5 col-lg-4"
          alt="خرید عمده لباس ورزشی زنانه"
        />

        <div className=" col-12 col-md-7 col-lg-8">
          <h4 className="text-md-end text-center fw-bold">
            خرید عمده لباس ورزشی زنانه
          </h4>
          <span className="underline"></span>
          <p className="lh-base mt-4">
            فروش عمده لباس ورزشی زنانه در گیشا اسپرت در دسته بندی های متنوع و
            اجناس گوناگون پارچه صورت می‌پذیرد. دسته بندی‌های پوشاک ورزشی مردانه
            عبارتند از : لگ ورزشی زنانه، تاپ و نیم تنه ورزشی، دامن و تیشرت ورزشی
            زنانه، شلوار و شلوارک ورزشی زنانه و انواع ست های ورزشی زنانه
          </p>
          <a
            href="#form"
            className="text-decoration-none text-black"
            onClick={AnchorOffcet}
          >
            <p className="text-md-end text-center mt-4">
              تماس و جزئیات بیشتر ❯
            </p>
          </a>
        </div>
      </div>

      <div
        id="item-3"
        className="row col-md-11 col-12 m-auto p-3 pt-5 rounded-3 mt-5"
      >
        <div className="col-12 col-md-7 col-lg-8 order-last order-md-first">
          <h4 className="text-md-end fw-bold text-center">
            خرید عمده شیکر ورزشی و جاگ واتر
          </h4>
          <p className="lh-base mt-4">
            اگر به دنبال خرید عمده قمقمه و شیکر ورزشی هستید، ما در فروشگاه گیشا
            اسپرت انواع قمقمه و جاگ واتر ورزشی، شیکرهای بدنسازی یک تیکه، سه تیکه
            و پنج تیکه و همچنین شیکرهای استیل و برقی را به صورت عمده به فروش
            می‌رسانیم.
          </p>
          <a
            href="#form"
            className="text-decoration-none text-black"
            onClick={AnchorOffcet}
          >
            <p className="text-md-end text-center mt-4">
              تماس و جزئیات بیشتر ❯
            </p>
          </a>
        </div>

        <img
          src="\images/major-shopping/item3.png"
          className="col-12 col-md-5 col-lg-4"
          alt="خرید عمده شیکر ورزشی و جاگ واتر"
        />
      </div>

      <div
        id="item-4"
        className="row col-md-11 col-12 m-auto p-3 pt-5 rounded-3 mt-5"
      >
        <img
          src="\images/major-shopping/item4.png"
          className="col-12 col-md-5 col-lg-4"
          alt="خرید عمده تجهیزات بدنسازی"
        />

        <div className="col-12 col-md-7 col-lg-8">
          <h4 className="text-md-end text-center fw-bold">
            خرید عمده تجهیزات بدنسازی
          </h4>

          <p className="lh-base mt-4">
            امکان خرید تجهیزات ورزشی به صورت عمده در گیشا اسپرت فراهم شده است.
            انواع مچبند و زانو بند ورزشی، بند لیفت و دستکش بدنسازی، انواع کش
            ورزشی و همچنین تنوع بالای کمربند بدنسازی به صورت عمده به فروش
            می‌رسند.
          </p>
          <a
            href="#form"
            className="text-decoration-none"
            onClick={AnchorOffcet}
          >
            <p className="text-md-end text-center mt-4 text-black">
              تماس و جزئیات بیشتر ❯
            </p>
          </a>
        </div>
      </div>

      <div
        id="item-5"
        className="row col-md-11 col-12 m-auto p-3 pt-5 rounded-3 mt-5"
      >
        <div className=" col-12 col-md-7 col-lg-8 order-last order-md-first">
          <h4 className="text-md-end text-center fw-bold">
            خرید عمده اکسسوری ورزشی
          </h4>

          <p className="lh-base mt-4">
            اگر به دنبال خرید اکسسوری ورزشی به صورت عمده هستید، ما در فروشگاه
            گیشا اسپرت در دسته بندی های : کیف و ساک ورزشی، کوله و شوزبگ، اکشن
            فیگور و همچنین کلاه و اسکارف و گردنبندهای ورزشی محصولات را به صورت
            عمده ارائه می‌دهیم
          </p>
          <a
            href="#form"
            className="text-decoration-none"
            onClick={AnchorOffcet}
          >
            <p className="text-md-end text-center mt-4 text-black">
              تماس و جزئیات بیشتر ❯
            </p>
          </a>
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
