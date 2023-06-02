import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  changeShowCartDrawer,
  removedFromCart,
  selectAllCarts,
} from "../../redux/Reducers/CartReducer";

const CartDrawer = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const carts = useSelector(selectAllCarts);
  const cartDrawer = useSelector(
    (state) => state.persistedReducer.cart.cartDrawer
  );

  return (
    <>
      <a
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        <i
          className="bi bi-cart-check position-relative p-1 nav-icon me-2 h5 text-black"
          onClick={() => dispatch(changeShowCartDrawer(true))}
        >
          <span
            className="position-absolute top-0 end-0 translate-middle badge rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{ fontSize: "0.7em", width: "1.4em", height: "1.4em" }}
          >
            {carts.length}
          </span>
        </i>
      </a>

      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={{ width: "350px" }}
      >
        <div className="d-flex justify-content-around  p-3">
          <h5 className="fw-bold">سبد خرید</h5>
          <div
            className="d-flex align-items-center"
            data-bs-dismiss="offcanvas"
          >
            <i
              className="bi bi-x"
              style={{ fontSize: "25px" }}
              data-bs-dismiss="offcanvas"
            />
            <p>بستن (ESC)</p>
          </div>
        </div>
        <div className="offcanvas-body">
          {carts.length > 0 ? (
            <>
              {carts.map((p) => (
                <div
                  className="cart-drawer-items pt-3 pb-2 row border-bottom"
                  key={p.id}
                >
                  <div className=" row">
                    <div className="col-3">
                      {p.images && (
                        <img
                          src={`http://localhost:1337${p.images[0].url}`}
                          alt="محصول انتخابی کاربر"
                          width="60px"
                        />
                      )}

                      {p.img && (
                        <img
                          src={`http://localhost:1337${p.img.url}`}
                          alt="محصول انتخابی کاربر"
                          width="60px"
                        />
                      )}

                      {p.orgImg && (
                        <img
                          src={`http://localhost:1337${p.orgImg.url}`}
                          alt="محصول انتخابی کاربر"
                          width="60px"
                        />
                      )}
                    </div>
                    <div className="col-7 text-right">
                      <p
                        className="fw-bold lh-sm "
                        style={{ fontSize: "14px" }}
                      >
                        {p.title}
                      </p>
                      <div className="d-flex align-items-center mt-2">
                        {p.quantify} <i className="bi bi-x" />{" "}
                        <p className="price"> {p.price} </p>
                      </div>
                    </div>
                    <div className="col-2 text-right">
                      <i
                        className="bi bi-x"
                        onClick={() => dispatch(removedFromCart(p))}
                        style={{ fontSize: "25px" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div>
              {location.pathname !== "/" && (
                <div className="text-center mt-3">
                  <i
                    className="bi bi-cart3"
                    style={{ fontSize: "100px", color: "rgb(228, 228, 228)" }}
                  />
                  <p className="fw-bold mt-3">هیچ محصولی در سبد خرید نیست.</p>
                  <Link to="/">
                    <button
                      onClick={() => dispatch(changeShowCartDrawer(false))}
                      className="btn btn-success btn-sm mt-3"
                      data-bs-toggle="offcanvas"
                    >
                      بازگشت به فروشگاه
                    </button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
        {carts.length > 0 ? (
          <div>
            <div className="d-flex justify-content-around">
              <h6 className=" fw-bold ">جمع كل سبد خريد :</h6>
              <h6 className=" fw-bold price text-orange">۳,۵۸۰,۰۰۰ تومان</h6>
            </div>
            <Link
              to="/cart"
              onClick={() => dispatch(changeShowCartDrawer(false))}
            >
              <button
                data-bs-dismiss="offcanvas"
                className="btn btn-success btn-sm col-12 p-2 mt-2 "
              >
                مشاهده سبد خرید
              </button>
            </Link>
            <button className="btn btn-success btn-sm col-12 p-2 mt-2 mb-4">
              تسویه حساب
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CartDrawer;
