import React from "react";
import { Helmet } from "react-helmet";

const Installment = () => {
  return (
    <div className="col-lg-10 col-11 container mt-lg-5 mt-1">
      <Helmet>
        <title>خرید اقساطی</title>
      </Helmet>
      <div className="installment-container row">
        <div className="col-lg-6 col-12 desc text-right order-lg-first order-last mt-5 mt-lg-0">
          <h4 className="fw-bold text-orange">
            خرید اقساط پوشاک و لوازم ورزشی از گیشا اسپرت
          </h4>
          <p className="lh-base">
            با همکاری مجموعه گیشا اسپرت و مجموعه لندو، امکان خرید قسطی تمام
            محصولات ورزشی سایت گیشا اسپرت،
            <span className="text-orange fw-bold">
              {" "}
              برای سفارشات بالای 5 میلیون تومان
            </span>{" "}
            وجود دارد.
          </p>
          <h5 className="fw-bold mt-5 text-primary">مزایای خرید اقساطی:</h5>
          <li className="p-2">تا سقف ۲۰ میلیون تومان</li>
          <li className="p-2">بدون الزام چک و ضامن</li>
          <li className="p-2">فرایند کاملا آنلاین</li>
          <li className="p-2">عدم اخذ جریمه دیرکرد</li>
          <h5 className="fw-bold mt-5 text-primary">
            مدارک لازم برای دریافت اعتبار از لندو:
          </h5>
          <li className="p-2">مدارک شناسایی</li>
          <li className="p-2">
            یکی از مدارک گردش حساب/ فیش حقوقی / گواهی اشتغال به کار
          </li>
          <li className="p-2">مدارک محل سکونت</li>
          <li className="p-2">داشتن حساب بانک آینده</li>
          <h5 className="fw-bold mt-5 text-primary">مراحل خرید اقساطی:</h5>
          <li className="p-2">
            {" "}
            مشخص کردن مبلغ اعتبار برای خرید اقساطی و ضمانت (سفته)
          </li>
          <li className="p-2">
            آپلود مدارک لازم برای اعتبارسنجی آنلاین در سایت لندو
          </li>
          <li className="p-2">دریافت اعتبار (کد) از لندو</li>
          <li className="p-2">خرید از فروشگاه گیشا اسپرت</li>
          <li className="p-2">پرداخت اقساط به‌صورت ماهانه در سایت لندو</li>
          <h5 className="fw-bold mt-5 text-primary">پرداخت اقساط:</h5>
          <li className="p-2"> به صورت ۶ ماهه، ۹ ماهه یا ۱۲ ماهه</li>
          <li className="p-2">بصورت آنلاین از طریق سایت لندو</li>
          <li className="p-2">بدون دریافت جریمه دیرکرد</li>
          <btn className="bg-orange p-3 text-white fw-bold d-block mt-3 cursor-pointer col-md-4 col-12">
            محاسبه و درخواست وام
          </btn>
        </div>

        <img
          src="\images/installment/1.jpg"
          className="col-lg-6 col-12 rounded-5"
          alt="خرید اقساطی"
        />
      </div>
    </div>
  );
};

export default Installment;
