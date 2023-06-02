import React from "react";
import MajorShoppingAnchor from "../components/Anchor/MajorShoppingAnchor";
import MajorShoppingForm from "../components/Form/MajorShoppingForm";

const MajorShopping = () => {
  return (
    <div className="major-shopping-container col-11 col-md-11 container">
      <h4 className="text-center fw-bold my-5">خرید عمده لباس و لوازم ورزشی</h4>
      <p className="mb-5 mb-md-0 lh-base">
        اگر فروشگاه لوازم ورزشی، داروخانه و یا باشگاه بدنسازی دارید و به دنبال
        خرید عمده لباس ورزشی و همچنین سایر لوازم و اکسسوری هستید، ما در مجموعه
        گیشا اسپرت امکان خرید به صورت عمده با شرایط ویژه را برای شما فراهم کرده
        ایم.
      </p>
      <MajorShoppingAnchor />
      <div
        id="form"
        className="border border-2 border-warning p-4 rounded-3 mt-5 col-md-11 col-12 m-auto"
      >
        <h5 className="text-center fw-bold mt-3 mb-5">
          برای اطلاع و دریافت جزئیات بیشتر از یکی از روش‌‌های زیر با ما تماس
          بگیرید
        </h5>
        <div className="row">
          <div className="col-md-5 col-12">
            <div className="d-flex align-items-center bg-light rounded-3 p-3">
              <img
                src="\images/major-shopping/telephone.png"
                alt="تلفن ۰۲۱۵۰۵۰۵۰۵۰"
              />
              <div className="me-3">
                <h5>تلفن تماس</h5>
                <p>021-28428159</p>
              </div>
            </div>
            <div className="d-flex align-items-center bg-light rounded-3 p-3 mt-3">
              <img src="\images/major-shopping/whatsapp.png" alt="واتساپ" />
              <div className="me-3">
                <p>فقط عمده و همکاری سازمانی</p>
                <h5>واتساپ</h5>
                <p>09109103136</p>
              </div>
            </div>
          </div>

          <div className="bg-light p-3 rounded-3 col-md-7 col-12 mt-4 mt-md-0">
            <MajorShoppingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorShopping;
