import React, { useState } from "react";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "antd";
import { CloseOutlined, HeartOutlined, CheckOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { Collapse } from "react-collapse";
import { useEffect } from "react";
import {
  removedFromWishList,
  removedFromWishListCheck,
  selectAllWishlists,
} from "../redux/Reducers/WishListReducer";
const { Panel } = Collapse;
const CheckboxGroup = Checkbox.Group;

const WishList = () => {
  const allWishlists = useSelector(selectAllWishlists);

  const [groupKey, setGroupKey] = useState(allWishlists);
  const [checked, setChecked] = useState({});
  const [output, setOutput] = useState([]);
  const [checkAll, setCheckAll] = useState(false);
  const [showAccordian, setShowAccordian] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleShowDetailProduct(item) {
    const product = item;
    navigate("/showDetailProductsHelper", {
      state: {
        product,
      },
    });
  }

  const onCheckAllChange = (e) => {
    const checkeded = groupKey.reduce((prev, curr) => {
      return { ...prev, [curr.title]: e.target.checked };
    }, {});
    setChecked(checkeded);
    setCheckAll(e.target.checked);
    setOutput(groupKey);

    if (e.target.checked) {
      setOutput(groupKey);
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

    if (values.length === groupKey.length && values.every((v) => v)) {
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
      <div>
        {allWishlists.length > 0 ? (
          <div className="container mt-5">
            <h5 className="text-right border-bottom pb-3">
              محصولات علاقه مندی شما
            </h5>

            <Collapse isOpened={showAccordian}>
              <div className="text-right d-flex wishlistDeleteCollapse ">
                <p
                  className="ml-4 p-2"
                  onClick={() => dispatch(removedFromWishListCheck(output))}
                >
                  <CloseOutlined className="pl-1" />
                  حذف
                </p>
                {checkAll ? (
                  <p className=" p-2">
                    <CheckOutlined className="pl-1" />
                    لغو انتخاب همه
                  </p>
                ) : (
                  <p className=" p-2">
                    <CheckOutlined className="pl-1" />
                    انتخاب همه
                  </p>
                )}

                <Checkbox
                  onChange={onCheckAllChange}
                  checked={checkAll}
                  className="pt-1"
                />
              </div>
            </Collapse>

            <div className="wishList-container row ">
              {allWishlists.map((item) => (
                <div key={item.title} className="item col-md-4  col-6 mt-4">
                  <div className="wishlist-top-items">
                    <p
                      onClick={() => dispatch(removedFromWishList(item))}
                      style={{ fontSize: "15px" }}
                    >
                      <CloseOutlined style={{ fontSize: "12px" }} />
                      حذف
                    </p>
                    <Checkbox
                      onChange={(e) => onChange(e, item)}
                      value={item.title}
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
            <HeartOutlined
              style={{ fontSize: "200px", color: "rgb(228, 228, 228)" }}
            />
            <h1 className="font-weight-bold mt-3 mb-3">
              این لیست علاقه مندی خالی است.
            </h1>
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
