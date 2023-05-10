import React from "react";
import { useSelector } from "react-redux";
import { selectAllCarts } from "../redux/Reducers/CartReducer";
import CartTable from "../components/Table/CartTable";
import TotalShoppingForm from "../components/Form/TotalShoppingForm";
import EmptyCart from "../components/Common/EmptyCart";

const Cart = () => {
  const carts = useSelector(selectAllCarts);
  return (
    <>
      {carts.length > 0 ? (
        <div className="mr-5 ml-5">
          <div className="cart-container row ">
            <div className="mt-5 col-7  offset-1">
              <CartTable carts={carts} />
            </div>
            <TotalShoppingForm />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
