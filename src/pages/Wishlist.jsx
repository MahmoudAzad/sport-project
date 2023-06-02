import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  removedFromWishList,
  removedFromWishListCheck,
  selectAllWishlists,
} from "../redux/Reducers/WishListReducer";
import { Helmet } from "react-helmet";

const WishList = () => {
  const allWishlists = useSelector(selectAllWishlists);
  console.log("All wish list =>", allWishlists);

  const allState = useSelector((state) => state.persistedReducer);
  console.log("All state => ", allState);

  const [checked, setChecked] = useState({});
  const [output, setOutput] = useState([]);
  const [checkAll, setCheckAll] = useState(false);
  const [showAccordian, setShowAccordian] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleShowDetailProduct(item) {
    const product = item;
    navigate("/product", {
      state: {
        product,
      },
    });
  }

  const onCheckAllChange = (e) => {
    const checkeded = allWishlists.reduce((prev, curr) => {
      return { ...prev, [curr.title]: e.target.checked };
    }, {});
    setChecked(checkeded);
    setCheckAll(e.target.checked);
    setOutput(allWishlists);

    if (e.target.checked) {
      setOutput(allWishlists);
    } else {
      setOutput([]);
      setShowAccordian(false);
    }
  };

  var values = Object.values(checked);

  useEffect(() => {
    if (output.length > 0) {
      setShowAccordian(true);
    } else {
      setShowAccordian(false);
    }

    if (values.length === allWishlists.length && values.every((v) => v)) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
  }, [output, Object.values(checked)]);

  const onChange = (e, value) => {
    let updatedList = [...output];
    if (e.target.checked) {
      updatedList = [...output, value];
    } else {
      updatedList.splice(output.indexOf(value), 1);
    }

    setChecked({ ...checked, [value.title]: e.target.checked });
    setOutput(updatedList);
  };

  return (
    <>
      <Helmet>
        <title>علاقه مندی ها</title>
      </Helmet>
      <div>
        {allWishlists.length > 0 ? (
          <div className="container mt-5">
            <h5 className=" border-bottom pb-3">محصولات علاقه مندی شما</h5>

            <div className={`collapse ${showAccordian ? "show" : ""}`}>
              <div className="text-right d-flex bg-light-gray p-1">
                <p
                  className="ms-4 p-2 cursor-pointer fw-bold "
                  onClick={() => dispatch(removedFromWishListCheck(output))}
                >
                  <i class="bi bi-x-lg ps-1" />
                  حذف
                </p>
                {checkAll ? (
                  <p className="p-2">
                    <i class="bi bi-check-lg ps-1" />
                    لغو انتخاب همه
                  </p>
                ) : (
                  <p className=" p-2">
                    <i class="bi bi-check-lg ps-1" />
                    انتخاب همه
                  </p>
                )}

                <input
                  type="checkbox"
                  class="form-check-input pt-1"
                  onchange={onCheckAllChange}
                  checked={checkAll}
                />
              </div>
            </div>

            <div className=" row ">
              {allWishlists.map((item) => (
                <div
                  key={item.title}
                  className="wishList-item d-flex flex-column  col-md-4 col-6 mt-4"
                >
                  <div className="d-flex justify-content-around mb-3">
                    <div className="d-flex align-items-start">
                      <i class="bi bi-x-lg" />
                      <p
                        onClick={() => dispatch(removedFromWishList(item))}
                        className="cursor-pointer fs-6"
                      >
                        حذف
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      class="form-check-input pt-1"
                      onChange={(e) => onChange(e, item)}
                      checked={checked[item.title]}
                    />
                  </div>
                  <div className="images mr-5">
                    <div>
                      {item.images && (
                        <img
                          className="org-img-showpro-helper"
                          alt="تصاویر محصولات"
                          width="250px"
                          src={`http://localhost:1337${item.images[0].url}`}
                        />
                      )}
                      {item.orgImg && (
                        <img
                          className="org-img-showpro-helper"
                          alt="تصاویر محصولات"
                          width="250px"
                          src={`http://localhost:1337${item.orgImg.url}`}
                        />
                      )}
                      {item.img && (
                        <img
                          className="org-img-showpro-helper"
                          alt="تصاویر محصولات"
                          width="250px"
                          src={`http://localhost:1337${item.img.url}`}
                        />
                      )}

                      <div className="overlay">
                        {item.images && (
                          <img
                            className="hover-img-showpro-helper"
                            onClick={() => handleShowDetailProduct(item)}
                            alt="تصاویر محصولات"
                            width="250px"
                            height="250px"
                            src={`http://localhost:1337${item.images[1].url}`}
                          />
                        )}

                        {item.hoverImg && item.hoverImg[0] && (
                          <img
                            className="hover-img-showpro-helper"
                            onClick={() => handleShowDetailProduct(item)}
                            alt="تصاویر محصولات"
                            width="250px"
                            height="250px"
                            src={`http://localhost:1337${item.hoverImg[0].url}`}
                          />
                        )}

                        {item.hoverImg && item.hoverImg.url && (
                          <img
                            className="hover-img-showpro-helper"
                            onClick={() => handleShowDetailProduct(item)}
                            alt="تصاویر محصولات"
                            width="250px"
                            height="250px"
                            src={`http://localhost:1337${item.hoverImg.url}`}
                          />
                        )}
                      </div>

                      <button
                        className="btn btn-success col-12 container"
                        type="button"
                        data-hover="hover"
                      >
                        <span>انتخاب گزینه ها</span>
                      </button>
                    </div>
                  </div>

                  <h6
                    className="title text-center"
                    onClick={() => handleShowDetailProduct(item)}
                  >
                    {item.title}
                  </h6>
                  <h6 className="price text-center">{item.price}</h6>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center mt-5">
            <i
              class="bi bi-heart"
              style={{ fontSize: "200px", color: "rgb(228, 228, 228)" }}
            />
            <h1 className="fw-bold mt-3 mb-3">این لیست علاقه مندی خالی است.</h1>
            <h6>شما هیچ محصولی به لیست علاقه مندی هایتان اظافه نکرده اید!</h6>
            <h6>
              برای پیدا کردن محصولات مورد علاقه یتان جهت افزودن به لیست علاقه
              مندی ها میتوانید از فروشگاه دیدن نمایید.
            </h6>

            <Link to="/">
              <button className="btn btn-success btn-lg mt-3">
                بازگشت به فروشگاه
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default WishList;
