import React from "react";

const TotalShoppingForm = () => {
  return (
    <div className="border border-3 border-muted rounded-3 justify-content-end py-3 col-lg-4 col-12 mt-5 ">
      <h5 className="text-center pt-3 fw-bold">جمع کل سبد خرید</h5>
      <div className="d-flex justify-content-around border-bottom pb-3 pt-3">
        <p className="fw-bold">جمع جزء </p>
        <p>1,580,000 تومان</p>
      </div>
      <div className="d-flex justify-content-around pb-3 pt-3">
        <p className="fw-bold">مجموع</p>
        <h5 className="fw-bold text-orange">1,580,000 تومان</h5>
      </div>
      <p className="text-right">کارت هدیه دارید؟</p>

      <form className="mt-3">
        <div className="mx-1 row">
          <input
            type="email"
            className="col-9"
            id="inputEmail3"
            placeholder="کد کارت هدیه"
          />
          <button type="button" className="btn btn-light col-3">
            اعمال
          </button>
          <button
            type="button"
            className="bg-green py-2 text-white border-0 col-8 mt-3 rounded-4"
          >
            ادامه جهت تسویه حساب
          </button>
        </div>
      </form>
    </div>
  );
};

export default TotalShoppingForm;
