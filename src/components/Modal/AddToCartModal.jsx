import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Reducers/CartReducer";
import { Link } from "react-router-dom";

const AddToCartModal = ({ params }) => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => dispatch(addToCart(params.state.product))}
        className="btn btn-success mt-3 me-3 "
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        افزودن به سبد خرید
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              محصول با موفقیت به سبد خرید شما افزوده شد.
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                ادامه خرید
              </button>
              <Link to="/cart">
                <button class="btn btn-primary" data-bs-dismiss="modal">
                  نمایش سبد خرید
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCartModal;
