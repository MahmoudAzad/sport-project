import React from "react";
import { Badge, Drawer } from "antd";
import { ShoppingCartOutlined, CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  changeShowCartDrawer,
  removedFromCart,
  selectAllCarts,
} from "../../redux/Reducers/CartReducer";

const CartDrawer = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const carts = useSelector(selectAllCarts);
  const cartDrawer = useSelector((state) => state.persistedReducer.cartDrawer);

  return (
    <>
      <Badge size="small" showZero count={carts.length}>
        <div onClick={() => dispatch(changeShowCartDrawer(true))}>
          <ShoppingCartOutlined
            style={{ fontSize: 18 }}
            className="p-1 nav-icon mr-2"
          />
        </div>
      </Badge>

      <Drawer
        title={
          <div className="d-flex justify-content-between  pb-3">
            <h5 className="font-weight-bold">سبد خرید</h5>
            <p className="close-icon">
              <CloseOutlined
                onClick={() => dispatch(changeShowCartDrawer(false))}
              />{" "}
              بستن (ESC)
            </p>
          </div>
        }
        footer={
          carts.length > 0 ? (
            <div className="shoping-cart-list-btn">
              <div className="row ">
                <h6 className=" font-weight-bold col text-right">
                  جمع كل سبد خريد :
                </h6>
                <h6
                  className=" font-weight-bold col text-left price"
                  style={{ color: "rgb(248, 121, 16)" }}
                >
                  ۳,۵۸۰,۰۰۰ تومان
                </h6>
              </div>
              <Link
                to="/cart"
                onClick={() => dispatch(changeShowCartDrawer(false))}
              >
                <button className="btn btn-success btn-sm col-12 p-2 mt-2 ">
                  مشاهده سبد خرید
                </button>
              </Link>
              <button className="btn btn-success btn-sm col-12 p-2 mt-2 mb-4">
                تسویه حساب
              </button>
            </div>
          ) : null
        }
        placement="left"
        closable={false}
        onClose={() => dispatch(changeShowCartDrawer(false))}
        visible={cartDrawer}
        width={340}
        className="cart-drawer"
      >
        {carts.length > 0 ? (
          <>
            {carts.map((p) => (
              <div
                className="shoping-cart-list-drawer-items pt-3 pb-2 row border-bottom"
                key={uuidv4()}
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
                    <p className="font-weight-bold">{p.title}</p>
                    <div className="d-flex align-items-center">
                      {p.quantify}{" "}
                      <CloseOutlined
                        style={{
                          fontSize: "8px",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                      />{" "}
                      <p className="price"> {p.price} </p>
                    </div>
                  </div>
                  <div className="col-2 text-right">
                    <CloseOutlined
                      onClick={() => dispatch(removedFromCart(p))}
                    />
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="empty-shoping-cart-list-drawer">
            {location.pathname !== "/" && (
              <div className="text-center mt-3">
                <ShoppingCartOutlined
                  style={{ fontSize: "100px", color: "rgb(228, 228, 228)" }}
                />
                <p className="font-weight-bold mt-3">
                  هیچ محصولی در سبد خرید نیست.
                </p>
                <Link to="/">
                  <button
                    onClick={() => dispatch(changeShowCartDrawer(false))}
                    className="btn btn-success btn-sm mt-3"
                  >
                    بازگشت به فروشگاه
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </Drawer>
    </>
  );
};

export default CartDrawer;
