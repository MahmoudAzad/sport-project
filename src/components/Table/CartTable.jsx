import React from "react";
import { v4 as uuidv4 } from "uuid";
import { CloseOutlined } from "@ant-design/icons";
import { removedFromCart } from "../../redux/Reducers/CartReducer";
import { useDispatch } from "react-redux";

const CartTable = ({ carts }) => {
  console.log("carts in cart table =>", carts);
  const dispatch = useDispatch();

  return (
    <>
      <table className="cart-table ">
        <thead>
          <tr className="text-right border-bottom mt-5 mb-2 ">
            <th className="col-1 pb-3"></th>
            <th className="col-1"></th>
            <th className="col-4">محصول</th>
            <th className="col-3">قیمت</th>
            <th className="col-1">تعداد</th>
            <th className="col-2">جمع جزء</th>
          </tr>
        </thead>
        {carts.map((p) => (
          <tbody key={uuidv4()}>
            <tr className="text-right border-bottom ">
              <td className="col-1">
                <CloseOutlined onClick={() => dispatch(removedFromCart(p))} />
              </td>
              {p.images && (
                <td className="col-1">
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
                <td className="col-1">
                  <img
                    src={`http://localhost:1337${p.orgImg.url}`}
                    width="70px"
                    height="70px"
                    alt="محصول انتخابی"
                  />{" "}
                </td>
              )}
              <td className="col-4 " style={{ lineHeight: "20px" }}>
                {p.title}
              </td>
              <td className="col-3">{p.price || p.orginalPrice}</td>
              <td className="col-1">{p.quantify}</td>

              <td
                className="col-2 font-weight-bold"
                style={{ color: " rgb(254, 116, 11)" }}
              >
                {p.price || p.orginalPrice}
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <form className="mt-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="کد کارت هدیه"
            />
            <button type="button" className="btn btn-success">
              اعمال کد تخفیف
            </button>
          </div>
          <button type="button" className="btn btn-success  rounded">
            بروزرسانی سبد خرید
          </button>
        </div>
      </form>
    </>
  );
};

export default CartTable;
