import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="text-center mt-5">
      <ShoppingCartOutlined
        style={{ fontSize: "200px", color: "rgb(228, 228, 228)" }}
      />
      <h1 className="font-weight-bold mt-3 mb-3">
        سبد خرید شما در حال حاضر خالی است.
      </h1>
      <h6>
        قبل از شروع پرداخت، شما باید برخی از محصولات را به سبد خرید خود اضافه
        کنید.
      </h6>
      <h6>
        تعداد زیادی از محصولات باکیفیت را در صفحه «فروشگاه» ما پیدا خواهید کرد.
      </h6>

      <Link to="/">
        <button className="btn btn-success btn-lg mt-3">
          بازگشت به فروشگاه
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
