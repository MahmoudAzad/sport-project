import React, { useState } from "react";
import { Drawer, Tabs, Collapse } from "antd";
import {
  SearchOutlined,
  UnorderedListOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Panel } = Collapse;

const MenuDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <UnorderedListOutlined
        style={{ fontSize: 18 }}
        className="p-1 nav-icon"
        onClick={showDrawer}
      />

      <Drawer
        placement="right"
        onClose={onClose}
        visible={visible}
        closable={false}
        width="358px"
        className="menuDrawer-container"
      >
        <div className="header-drawer">
          <h5>جستجوی محصولات</h5>
          <SearchOutlined style={{ fontSize: 22 }} className="icon" />
        </div>

        <ul className="nav nav-pills  drawer-nav" id="pills-tab" role="tablist">
          <li className="nav-item ">
            <p
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              منو
            </p>
          </li>
          <li className="nav-item">
            <p
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              دسته بندی ها
            </p>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active text-right "
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="toggle-collapse ">
              <p style={{ paddingRight: "35px" }}>ست و پکیج های ویژه</p>
            </div>

            <div className="toggle-collapse  row ">
              <p className="col-10 pr-5">لباس ورزشی مردانه</p>
              <div
                className="icon col-2"
                data-toggle="collapse"
                href="#mens-sport"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <LeftOutlined className="pl-3" />
              </div>
            </div>

            <div className="collapse" id="mens-sport">
              <div className="link-container">
                <Link to="/cart" className="link ">
                  تیشرت ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  بلوز و استرج ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  تیشرت ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  هودی و سوییشرت مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شلوارک ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  لگ ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  نیم لگ و کشاله بند ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شلوار ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  ست ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  مایو مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link">
                  کفش ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link">
                  دمپایی اسپرت
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  جوراب ورزشی مردانه
                </Link>
              </div>
            </div>

            <div className="toggle-collapse row ">
              <p className="col-10 pr-5">لباس ورزشی زنانه</p>
              <div
                className="icon col-2"
                data-toggle="collapse"
                href="#women-sport"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <LeftOutlined className="pl-3" />
              </div>
            </div>

            <div className="collapse" id="women-sport">
              <div className="link-container">
                <Link to="/cart" className="link ">
                  نیم تنه ورزشی زنانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  تیشرت ورزشی زنانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  هودی و سوییشرت زنانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  دامن ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شلوار زنانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شلوارک ورزشی زنانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  لگ ورزشی زنانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link">
                  جوراب ورزشی زنانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  ست ورزشی زنانه
                </Link>
              </div>
            </div>

            <div className="toggle-collapse  row ">
              <p className="col-10 pr-5">لوازم ورزشی</p>
              <div
                className="icon col-2"
                data-toggle="collapse"
                href="#sporting-goods"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <LeftOutlined className="pl-3" />
              </div>
            </div>

            <div className="collapse" id="sporting-goods">
              <div className="link-container">
                <Link to="/cart" className="link ">
                  کش بدنسازی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  دستکش بدنسازی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  مچ بند و بندلیفت
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  ماساژور
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  زانوبند بدنسازی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  کمربند بدنسازی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  کیفو ساک ورزشی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link">
                  کوله و شوزبک ورزشی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  وزنه و دمبل
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  لوازم بدنسازی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  ظرف غذا
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  جاپودر و جاقرصی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  لوازم کاربردی ورزشی
                </Link>
              </div>
            </div>

            <div className="toggle-collapse  row ">
              <p className="col-10 pr-5">قمقمه و شیکر</p>
              <div
                className="icon col-2"
                data-toggle="collapse"
                href="#shaker"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <LeftOutlined className="pl-3" />
              </div>
            </div>

            <div className="collapse" id="shaker">
              <div className="link-container">
                <Link to="/cart" className="link ">
                  جاک واتر
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  قمقمه ورزشی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  فلاسک ورزشی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  تمام شیکرهای بدنسازی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شیکر برقی ورزشی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شیکر استیل
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شیکر دومخزنه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link">
                  شیکر یک تیکه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شیکر دو تیکه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شیکر سه تیکه
                </Link>
              </div>
            </div>

            <div className="toggle-collapse  row ">
              <p className="col-10 pr-5">اکسسوری ورزشی</p>
              <div
                className="icon col-2"
                data-toggle="collapse"
                href="#accessory"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <LeftOutlined className="pl-3" />
              </div>
            </div>

            <div className="collapse" id="accessory">
              <div className="link-container">
                <Link to="/cart" className="link ">
                  جوراب ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  جوراب ورزشی زنانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  ساق دست ورزشی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  کلاه ورزشی اسپرت
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  اسکارف و دستمال سر
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  گردنبند
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  جاکلیدی ورزشی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link">
                  اکشن فیگور
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  سایر اکسسوری
                </Link>
              </div>
            </div>

            <div className="toggle-collapse  row ">
              <p className="col-10 pr-5">کفش ورزشی و دمپایی</p>
              <div
                className="icon col-2"
                data-toggle="collapse"
                href="#shoes-slippers"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <LeftOutlined className="pl-3" />
              </div>
            </div>

            <div className="collapse" id="shoes-slippers">
              <div className="link-container">
                <Link to="/cart" className="link ">
                  کفش ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  دمپایی اسپرت
                </Link>
              </div>
            </div>

            <div className="toggle-collapse  row ">
              <p className="col-10 pr-5">تغذیه رژیمی</p>
              <div
                className="icon col-2"
                data-toggle="collapse"
                href="#nutrition"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <LeftOutlined className="pl-3" />
              </div>
            </div>

            <div className="collapse" id="nutrition">
              <div className="link-container">
                <Link to="/cart" className="link ">
                  گرانولا
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شکلات پروتیین بار
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  رایس کیک
                </Link>
              </div>
            </div>

            <div className="toggle-collapse ">
              <p style={{ paddingRight: "35px" }}>هدیه</p>
            </div>

            <div className="toggle-collapse ">
              <p style={{ paddingRight: "35px" }}>صفحه اصلی</p>
            </div>

            <div className="toggle-collapse ">
              <p style={{ paddingRight: "35px" }}>محصولات</p>
            </div>

            <div className="toggle-collapse ">
              <p style={{ paddingRight: "35px" }}>خرید اقساطی</p>
            </div>

            <div className="toggle-collapse ">
              <p style={{ paddingRight: "35px" }}>پیگیری ارسال سفارش</p>
            </div>

            <div className="toggle-collapse ">
              <p style={{ paddingRight: "35px" }}>
                راهنما,خرید,ارسال و بازگردانی
              </p>
            </div>

            <div className="toggle-collapse ">
              <p style={{ paddingRight: "35px" }}>تماس با ما</p>
            </div>

            <div className="toggle-collapse ">
              <p style={{ paddingRight: "35px" }}>همکاری با ما</p>
            </div>

            <div className="toggle-collapse ">
              <p style={{ paddingRight: "35px" }}>حریم خصوصی</p>
            </div>

            <div className="toggle-collapse ">
              <p style={{ paddingRight: "35px" }}>قوانین و مقررات</p>
            </div>

            <div className="toggle-collapse ">
              <p style={{ paddingRight: "35px" }}>ورود / ثبت نام</p>
            </div>
          </div>

          <div
            className="tab-pane fade text-right"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="toggle-collapse ">
              <p style={{ paddingRight: "35px" }}>ست و پکیج های ویژه</p>
            </div>

            <div className="toggle-collapse  row ">
              <p className="col-10 pr-5">لباس ورزشی مردانه</p>
              <div
                className="icon col-2"
                data-toggle="collapse"
                href="#mens-sport-fade"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <LeftOutlined className="pl-3" />
              </div>
            </div>

            <div className="collapse" id="mens-sport-fade">
              <div className="link-container">
                <Link to="/cart" className="link ">
                  تیشرت ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  بلوز و استرج ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  تیشرت ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  هودی و سوییشرت مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شلوارک ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  لگ ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  نیم لگ و کشاله بند ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شلوار ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  ست ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  مایو مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link">
                  کفش ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link">
                  دمپایی اسپرت
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  جوراب ورزشی مردانه
                </Link>
              </div>
            </div>

            <div className="toggle-collapse row ">
              <p className="col-10 pr-5">لباس ورزشی زنانه</p>
              <div
                className="icon col-2"
                data-toggle="collapse"
                href="#women-sport-fade"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <LeftOutlined className="pl-3" />
              </div>
            </div>

            <div className="collapse" id="women-sport-fade">
              <div className="link-container">
                <Link to="/cart" className="link ">
                  نیم تنه ورزشی زنانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  تیشرت ورزشی زنانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  هودی و سوییشرت زنانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  دامن ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شلوار زنانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شلوارک ورزشی زنانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  لگ ورزشی زنانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link">
                  جوراب ورزشی زنانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  ست ورزشی زنانه
                </Link>
              </div>
            </div>

            <div className="toggle-collapse  row ">
              <p className="col-10 pr-5">لوازم ورزشی</p>
              <div
                className="icon col-2"
                data-toggle="collapse"
                href="#sporting-goods-fade"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <LeftOutlined className="pl-3" />
              </div>
            </div>

            <div className="collapse" id="sporting-goods-fade">
              <div className="link-container">
                <Link to="/cart" className="link ">
                  کش بدنسازی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  دستکش بدنسازی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  مچ بند و بندلیفت
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  ماساژور
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  زانوبند بدنسازی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  کمربند بدنسازی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  کیفو ساک ورزشی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link">
                  کوله و شوزبک ورزشی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  وزنه و دمبل
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  لوازم بدنسازی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  ظرف غذا
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  جاپودر و جاقرصی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  لوازم کاربردی ورزشی
                </Link>
              </div>
            </div>

            <div className="toggle-collapse  row ">
              <p className="col-10 pr-5">قمقمه و شیکر</p>
              <div
                className="icon col-2"
                data-toggle="collapse"
                href="#shaker-fade"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <LeftOutlined className="pl-3" />
              </div>
            </div>

            <div className="collapse" id="shaker-fade">
              <div className="link-container">
                <Link to="/cart" className="link ">
                  جاک واتر
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  قمقمه ورزشی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  فلاسک ورزشی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  تمام شیکرهای بدنسازی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شیکر برقی ورزشی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شیکر استیل
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شیکر دومخزنه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link">
                  شیکر یک تیکه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شیکر دو تیکه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شیکر سه تیکه
                </Link>
              </div>
            </div>

            <div className="toggle-collapse  row ">
              <p className="col-10 pr-5">اکسسوری ورزشی</p>
              <div
                className="icon col-2"
                data-toggle="collapse"
                href="#accessory-fade"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <LeftOutlined className="pl-3" />
              </div>
            </div>

            <div className="collapse" id="accessory-fade">
              <div className="link-container">
                <Link to="/cart" className="link ">
                  جوراب ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  جوراب ورزشی زنانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  ساق دست ورزشی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  کلاه ورزشی اسپرت
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  اسکارف و دستمال سر
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  گردنبند
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  جاکلیدی ورزشی
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link">
                  اکشن فیگور
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  سایر اکسسوری
                </Link>
              </div>
            </div>

            <div className="toggle-collapse  row ">
              <p className="col-10 pr-5">کفش ورزشی و دمپایی</p>
              <div
                className="icon col-2"
                data-toggle="collapse"
                href="#shoes-slippers-fade"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <LeftOutlined className="pl-3" />
              </div>
            </div>

            <div className="collapse" id="shoes-slippers-fade">
              <div className="link-container">
                <Link to="/cart" className="link ">
                  کفش ورزشی مردانه
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  دمپایی اسپرت
                </Link>
              </div>
            </div>

            <div className="toggle-collapse  row ">
              <p className="col-10 pr-5">تغذیه رژیمی</p>
              <div
                className="icon col-2"
                data-toggle="collapse"
                href="#nutrition-fade"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <LeftOutlined className="pl-3" />
              </div>
            </div>

            <div className="collapse" id="nutrition-fade">
              <div className="link-container">
                <Link to="/cart" className="link ">
                  گرانولا
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  شکلات پروتیین بار
                </Link>
              </div>
              <div className="link-container">
                <Link to="/cart" className="link ">
                  رایس کیک
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
