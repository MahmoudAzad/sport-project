import React from "react";
import { Helmet } from "react-helmet";
const TrackOrder = () => {
  return (
    <div className="text-center mt-5 ">
      <Helmet>
        <title>پیگیری سفارش</title>
      </Helmet>
      <h4 className="fw-bold">پیگیری ارسال سفارش</h4>

      <div className="container p-5 mt-5 bg-light-gray rounded-3 col-lg-5 col-11">
        <h5 className="fw-bold">بسته های شهرستان ها</h5>
        <p className="mt-3">پیگیری ارسال شهرستان‌های سراسر کشور</p>
        <p className="mt-2">(شامل شهر‌ستان‌های اطراف تهران هم میشود)</p>
        <button className="btn mt-4 bg-orange text-white col-11 col-md-6 ">
          پیگیری شهرستان ها
          <i class="bi bi-arrow-left me-2" />
        </button>
      </div>
    </div>
  );
};

export default TrackOrder;
