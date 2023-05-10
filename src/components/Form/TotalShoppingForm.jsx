import React from "react";

const TotalShoppingForm = () => {
  return (
    <div className="cart-price-box justify-content-end  col-4 mt-5 ">
      <h4 className="text-center pt-3 font-weight-bold">جمع کل سبد خرید</h4>
      <div className="d-flex justify-content-around border-bottom pb-3 pt-3">
        <p className="font-weight-bold">جمع جزء </p>
        <p>1,580,000 تومان</p>
      </div>
      <div className="d-flex justify-content-around pb-3 pt-3">
        <p className="font-weight-bold">مجموع</p>
        <h5
          className="font-weight-bold"
          style={{ color: " rgb(254, 116, 11)" }}
        >
          1,580,000 تومان
        </h5>
      </div>
      <p className="text-center">کارت هدیه دارید؟</p>

      <form className="mt-3">
        <div className="form-group row justify-content-center">
          <div className="col-sm-8 ">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="کد کارت هدیه"
            />
          </div>
          <button type="button" className="btn btn-light">
            اعمال
          </button>
          <button type="button" className="btn btn-success col-8 mt-3 rounded">
            ادامه جهت تسویه حساب
          </button>
        </div>
      </form>
    </div>
  );
};

export default TotalShoppingForm;
