import React from "react";
import { useSelector } from "react-redux";
import { selectAllCarts } from "../redux/Reducers/CartReducer";
import CartTable from "../components/Table/CartTable";
import TotalShoppingForm from "../components/Form/TotalShoppingForm";
import EmptyCart from "../components/Common/EmptyCart";
import { Helmet } from "react-helmet";
import ConvertPersianDigitsToEnglish from "../components/Function/ConvertPersianDigitsToEnglish";

const Cart = () => {
  const carts = useSelector(selectAllCarts);

  let totalPrice = 0;

  carts.forEach((p) => {
    const price = parseInt(
      ConvertPersianDigitsToEnglish(p.price.replace(/[, تومان]/g, ""))
    );
    totalPrice += p.quantity * price;
  });

  return (
    <>
      <Helmet>
        <title>سبد خرید</title>
      </Helmet>
      {carts.length > 0 ? (
        <div className="col-9 mx-auto ">
          <div className="cart-container row ">
            <div className="mt-5 col-lg-8 col-12">
              <CartTable carts={carts} />
            </div>
            <TotalShoppingForm totalPrice={totalPrice} />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
