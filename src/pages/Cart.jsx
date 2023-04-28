import React from "react";
import { CloseOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { removedFromCart, selectAllCarts } from "../redux/Reducers/CartReducer";
const Cart = () => {
  const dispatch = useDispatch();

  const carts = useSelector(selectAllCarts);

  return (
    <>
      {carts.length > 0 ? (
        <>
          <div style={{ marginLeft: "100px", marginRight: "100px" }}>
            <div className="cart-container row ">
              <div className="mt-5 col-7  offset-1">
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
                          <CloseOutlined
                            onClick={() => dispatch(removedFromCart(p))}
                          />
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
              </div>

              <div className="cart-price-box justify-content-end  col-4 mt-5 ">
                <h4 className="text-center pt-3 font-weight-bold">
                  جمع کل سبد خرید
                </h4>
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
                    <button
                      type="button"
                      className="btn btn-success col-8 mt-3 rounded"
                    >
                      ادامه جهت تسویه حساب
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center mt-5">
          <ShoppingCartOutlined
            style={{ fontSize: "200px", color: "rgb(228, 228, 228)" }}
          />
          <h1 className="font-weight-bold mt-3 mb-3">
            سبد خرید شما در حال حاضر خالی است.
          </h1>
          <h6>
            قبل از شروع پرداخت، شما باید برخی از محصولات را به سبد خرید خود
            اضافه کنید.
          </h6>
          <h6>
            تعداد زیادی از محصولات باکیفیت را در صفحه «فروشگاه» ما پیدا خواهید
            کرد.
          </h6>

          <Link to="/">
            <button className="btn btn-success btn-lg mt-3">
              بازگشت به فروشگاه
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
