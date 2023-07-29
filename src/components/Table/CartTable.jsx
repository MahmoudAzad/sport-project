import React from "react";
import { removedFromCart } from "../../redux/Reducers/CartReducer";
import { useDispatch } from "react-redux";
import ConvertPersianDigitsToEnglish from "../Function/ConvertPersianDigitsToEnglish";

const CartTable = ({ carts }) => {
  const dispatch = useDispatch();

  return (
    <>
      <table className="col-12">
        <thead>
          <tr className="d-flex align-items-center border-bottom  mt-5 mb-2 pb-3 ">
            <th className="fw-bold text-center col-1 pb-3"></th>
            <th className="fw-bold text-center col-1"></th>
            <th className="fw-bold text-center col-4">محصول</th>
            <th className="fw-bold text-center col-3">قیمت</th>
            <th className="fw-bold text-center col-1">تعداد</th>
            <th className="fw-bold text-center col-2">جمع جزء</th>
          </tr>
        </thead>
        {carts.map((p) => (
          <tbody key={p.id}>
            <tr className="d-flex align-items-center text-right border-bottom pb-3">
              <td className="text-center col-1">
                <i
                  class="bi bi-x-lg "
                  onClick={() => dispatch(removedFromCart(p))}
                />
              </td>
              {p.images && (
                <td className="text-center col-1">
                  <img
                    src={`http://localhost:1337${p.images[0].url}`}
                    width="70px"
                    height="70px"
                    alt="محصول انتخابی"
                  />{" "}
                </td>
              )}

              {p.img && (
                <td className="col-1">
                  <img
                    src={`http://localhost:1337${p.img.url}`}
                    width="70px"
                    height="70px"
                    alt="محصول انتخابی"
                  />{" "}
                </td>
              )}

              {p.orgImg && (
                <td className="text-center col-1">
                  <img
                    src={`http://localhost:1337${p.orgImg.url}`}
                    width="70px"
                    height="70px"
                    alt="محصول انتخابی"
                  />{" "}
                </td>
              )}
              <td className="text-center mx-3 lh-sm">{p.title}</td>
              <td className="text-center col-3">{p.price || p.orginalPrice}</td>
              <td className="text-center col-1">{p.quantity}</td>

              <td className="col-2 fw-bold text-center text-orange">
                {p.quantity *
                  parseInt(
                    ConvertPersianDigitsToEnglish(
                      p.price.replace(/[, تومان]/g, "")
                    )
                  )}
                {" تومان"}
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <form className="mt-4 d-flex justify-content-between">
        <div>
          <input
            type="text"
            placeholder="کد تخفیف"
            className="p-1 border border-2 border-secondary rounded-2"
          />
          <button className="bg-green text-white p-2 border border-2 rounded-3">
            اعمال کد تخفیف
          </button>
        </div>
        <button className="bg-green text-white border border-2 rounded-3 ">
          بروزرسانی سبد خرید
        </button>
      </form>
    </>
  );
};

export default CartTable;
