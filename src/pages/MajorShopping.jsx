import React from "react";
import MajorShoppingAnchor from "../components/Anchor/MajorShoppingAnchor";
import MajorShoppingForm from "../components/Form/MajorShoppingForm";

const MajorShopping = () => {
  return (
    <div className="major-shopping-container col-11 col-md-11 container">
      <p className="text-center">خرید عمده لباس و لوازم ورزشی</p>
      <p className="mb-5 mb-md-0">
        اگر فروشگاه لوازم ورزشی، داروخانه و یا باشگاه بدنسازی دارید و به دنبال
        خرید عمده لباس ورزشی و همچنین سایر لوازم و اکسسوری هستید، ما در مجموعه
        گیشا اسپرت امکان خرید به صورت عمده با شرایط ویژه را برای شما فراهم کرده
        ایم.
      </p>
      <MajorShoppingAnchor />
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
            <MajorShoppingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorShopping;
