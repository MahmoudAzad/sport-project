import React from "react";
import { Link } from "react-router-dom";

const AdvertiseCards = () => {
  return (
    <div className="container my-5 ">
      <div className="row justify-content-evenly">
        <Link className="col-6 col-md-3" to="/major-shopping">
          <img
            src="/images\advertise-photos\ad1.jpg"
            alt="خرید عمده"
            className="col-12 rounded-5"
          />
        </Link>
        <Link className="col-6 col-md-3" to="/shaker-printing">
          <img
            src="/images\advertise-photos\ad3.jpg"
            alt="چاپ شیکر"
            className="col-12 rounded-5"
          />
        </Link>
        <Link className="col-6 col-md-3" to={"showProducts/" + "gif-carts"}>
          <img
            src="/images\advertise-photos\ad2.jpg"
            alt="کارت هدیه"
            className="col-12 rounded-5"
          />
        </Link>
        <Link className="col-6 col-md-3" to="/installment">
          <img
            src="/images\advertise-photos\ad4.jpg"
            alt="خرید اقساطی"
            className="col-12 rounded-5"
          />
        </Link>
      </div>
    </div>
  );
};

export default AdvertiseCards;
