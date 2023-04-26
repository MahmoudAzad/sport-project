import React, { useState } from "react";
import "antd/dist/antd.css";
import { connect, useDispatch } from "react-redux";
import { Checkbox } from "antd";
import { CloseOutlined, HeartOutlined, CheckOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { RemoveWishList, RemoveWishListChecks } from "../redux/Actions";
import { Collapse } from "react-collapse";
import { useEffect } from "react";
const { Panel } = Collapse;
const CheckboxGroup = Checkbox.Group;

const Wishlist = (props) => {
  const [groupKey, setGroupKey] = useState(props.wishList);
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
        {props.wishList.length > 0 ? (
          <div className="container mt-5">
            <h5 className="text-right border-bottom pb-3">
              محصولات علاقه مندی شما
            </h5>

            <Collapse isOpened={showAccordian}>
              <div className="text-right d-flex wishlistDeleteCollapse ">
                <p
                  className="ml-4 p-2"
                  onClick={() => dispatch(RemoveWishListChecks(output))}
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
              {props.wishList.map((item) => (
                <div key={item.title} className="item col-md-4  col-6 mt-4">
                  <div className="wishlist-top-items">
                    <p
                      onClick={() => dispatch(RemoveWishList(item))}
                      style={{ fontSize: "15px" }}
                    >
                      <CloseOutlined style={{ fontSize: "12px" }} /> حذف
                    </p>
                    <Checkbox
                      onChange={(e) => onChange(e, item)}
                      value={item.title}
                      checked={checked[item.title]}
                    />
                  </div>
                  <div className="images mr-5">
                    <div>
                      <img
                        className="org-img-showpro-helper"
                        alt="تصاویر محصولات"
                        width="250px"
                        src={`http://localhost:1337${item.images[0].url}`}
                      />
                      <div className="overlay">
                        <img
                          className="hover-img-showpro-helper"
                          onClick={() => handleShowDetailProduct(item)}
                          alt="تصاویر محصولات"
                          width="250px"
                          height="250px"
                          src={`http://localhost:1337${item.images[1].url}`}
                        />
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

function mapStateToProps(state) {
  return {
    wishList: state.wishList,
  };
}

export default connect(mapStateToProps)(Wishlist);
