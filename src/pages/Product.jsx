import React, { useState } from "react";
import "swiper/css/effect-fade";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart, changeShowCartDrawer } from "../redux/Reducers/CartReducer";
import { addToWishlist } from "../redux/Reducers/WishListReducer";
import ProductCarousel from "../components/Carousel/ProductCarousel";
import { Helmet } from "react-helmet";
import AddToCartModal from "../components/Modal/AddToCartModal";

const Product = () => {
  const params = useLocation();
  const dispatch = useDispatch();
  const [loadings, setLoadings] = useState();

  // const addToCartHandler = (params) => {
  //   dispatch(addToCart(params));
  //   dispatch(changeShowCartDrawer(true));
  // };

  return (
    <>
      <Helmet>
        <title>{params.state.product.title}</title>
      </Helmet>
      <div className="row m-5 border-bottom">
        <div className="col-lg-6 col-12 ">
          <ProductCarousel params={params} />
        </div>

        <div className="col-lg-6 ">
          <div className="text-right fw-bold border-bottom">
            <h5 className="mt-5 me-3 ">{params.state.product.title}</h5>

            <h4 className="fw-bold mt-3 me-3 text-orange">
              {params.state.product.price || params.state.product.orginalPrice}
            </h4>

            <ReactMarkdown className="fw-bold text-md mt-3">
              {params.state.product.attr}
            </ReactMarkdown>

            <div className="fw-bold me-3 d-flex align-items-center">
              سایز لباس :
              <div className="dropdown">
                <button
                  className="btn btn-white border dropdown-toggle me-2"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  یک گزینه را انتخاب کنید
                </button>
                <ul
                  className="dropdown-menu w-100 "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      l
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      2xl
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      3xl
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <AddToCartModal params={params} />
            <p
              className="m-3 cursor-pointer"
              onClick={() => dispatch(addToWishlist(params.state.product))}
            >
              {" "}
              <i className="bi bi-heart" /> افزودن به علاقه مندی
            </p>
          </div>
          <div className="text-right fw-bold mt-3 me-3">
            <p>شناسه محصول :‌ {params.state.product.id}</p>
            <div className="d-flex mt-3 mb-5 cursor-pointer">
              <p>اشتراک گذاری : </p>
              <i className="bi bi-facebook me-1" />
              <i className="bi bi-twitter me-1" />
              <i className="bi bi-envelope me-1" />
              <i className="bi bi-linkedin me-1" />
              <i className="bi bi-whatsapp me-1" />
              <i className="bi bi-instagram me-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
