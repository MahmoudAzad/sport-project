import React from "react";
import { Link } from "react-router-dom";

const AdvertiseCards = () => {
  return (
    <div className="AdverticePhoto-container  ">
      <Link to="/major-shopping">
        <img
          src="/images\advertise-photos\ad1.jpg"
          alt="خرید عمده"
          className="col-6 col-md-3"
        />
      </Link>
      <Link to="/shaker-printing">
        <img
          src="/images\advertise-photos\ad3.jpg"
          alt="چاپ شیکر"
          className="col-6 col-md-3"
        />
      </Link>
      <Link to={"showProducts/" + "gif-carts"}>
        <img
          src="/images\advertise-photos\ad2.jpg"
          alt="کارت هدیه"
          className="col-md-3 AdverticePhoto-2"
        />
      </Link>
      <Link to="/installment">
        <img
          src="/images\advertise-photos\ad4.jpg"
          alt="خرید اقساطی"
          className="col-md-3 AdverticePhoto-2"
        />
      </Link>
    </div>
  );
};

export default AdvertiseCards;
