import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
const TrackOrder = () => {
  return (
    <div className="text-center mt-5 ">
      <h4 className="font-weight-bold">پیگیری ارسال سفارش</h4>
      <p
        className="container mt-3"
        style={{ borderTop: "3px solid orange", width: "100px" }}
      ></p>
      <div
        style={{ backgroundColor: "rgb(243, 243, 243)", borderRadius: "20px" }}
        className="container p-5 mt-5 col-lg-5 col-11"
      >
        <h5 className="font-weight-bold">بسته های شهرستان ها</h5>
        <p className="mt-3">پیگیری ارسال شهرستان‌های سراسر کشور</p>
        <p className="mt-2">(شامل شهر‌ستان‌های اطراف تهران هم میشود)</p>
        <button
          className="btn btn-lg mt-4 col-11 col-md-6 "
          style={{
            color: "white",
            backgroundColor: "#ff9b0f",
            borderRadius: "20px",
            fontSize: "16px",
          }}
        >
          پیگیری شهرستان ها
          <ArrowLeftOutlined className="mr-2" />
        </button>
      </div>
    </div>
  );
};

export default TrackOrder;
