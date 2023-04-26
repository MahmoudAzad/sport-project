import {
  InsuranceTwoTone,
  LayoutTwoTone,
  LeftOutlined,
  ShopTwoTone,
} from "@ant-design/icons";
import { Button, Select, Upload } from "antd";
import { Field, Form, Formik } from "formik";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ReCAPTCHA from "react-google-recaptcha";

const Cooperation = () => {
  return (
    <div className="col-11 col-xl-9  container mt-5">
      <div className="cooperation-container">
        <h4 className="text-center">همکاری با گیشا اسپرت</h4>
        <p className="underline container"></p>
        <p className="caption">
          گیشا اسپرت در راستای توسعه کسب‌و‌کار در زمینه‌های همکاری سازمانی و
          تامین کالا مشتاق به دریافت نظرات و پیشنهادات سازمان‌ها و تولیدکنندگان
          عزیز می‌باشد. همچنین به منظور رشد و بهبود، از استعدادهای جوان و با
          انگیزه دعوت به همکاری می‌نماید.
        </p>

        <div className="anchor row mt-5 d-none d-md-flex">
          <AnchorLink className="item col" href="#item-1" offset="50">
            <InsuranceTwoTone className="icon" twoToneColor="orange" />
            <div className="description mr-3">
              <p className="item-link">
                همکاری سازمانی <LeftOutlined className="item-icon mr-1" />
              </p>
            </div>
          </AnchorLink>

          <AnchorLink className="item col" href="#item-2" offset="50">
            <ShopTwoTone className="icon" twoToneColor="orange" />
            <div className="description mr-3">
              <p className="item-link">
                تامین کالا <LeftOutlined className="item-icon  mr-1" />
              </p>
            </div>
          </AnchorLink>

          <AnchorLink className="item col" href="#item-3" offset="50">
            <LayoutTwoTone className="icon" twoToneColor="orange" />
            <div className="description mr-3">
              <p className="item-link">
                فرصت شغلی <LeftOutlined className="item-icon  mr-1" />
              </p>
            </div>
          </AnchorLink>
        </div>

        <div id="item-1" className="row ">
          <div className="col-12 col-md-7 order-last order-md-first mt-5">
            <h4>همکاری سازمانی</h4>
            <p className="underline"></p>
            <p>
              سازمان‌ها و شرکت‌های محترم می‌توانند جهت دریافت کارت هدیه برای
              پرسنل خود و همچنین خدمات تولید و چاپ البسه و لوازم ورزشی درخواست
              خود را ثبت نمایند. مجموعه گیشا اسپرت با افتخار در خدمت شماست
            </p>
            <div className="box">
              <img src="\images/cooperation/wats.png" alt="واتساپ" />
              <div className="pt-3 mr-3">
                <h5>واتساپ</h5>
                <p>09121112233</p>
              </div>
            </div>

            <div className="box mt-2 mb-5">
              <img
                src="\images/cooperation/telephone.png"
                alt="تلفن : ۰۲۱۲۲۲۲۲۲۲۲"
              />
              <div className="pt-3 mr-3">
                <h5>تلفن تماس</h5>
                <p>021-8976534</p>
              </div>
            </div>
          </div>
          <img
            src="\images/cooperation/organ.png"
            className="col-12 col-md-5"
            height="500px"
            alt="ارگان معتبر"
          />
        </div>

        <div id="item-2" className="row ">
          <img
            src="\images/cooperation/supply.png"
            className="col-12 col-md-5"
            height="500px"
            alt="ضمانت کالا"
          />
          <div className="col-12 col-md-7 mt-5">
            <h4>تامین کالا</h4>
            <p className="underline"></p>
            <p>
              تولید کنندگان و عرضه کنندگان پوشاک ورزشی و همچنین سایر لوازم و
              تجهیزات ورزشی می‌توانند درخواست خود را مبنی بر فروش کالا به صورت
              عمده در گیشا اسپرت اعلام نمایند. با افتخار حامی تولید ملی خواهیم
              بود.
            </p>
            <div className="box">
              <img src="\images/cooperation/wats.png" alt="واتساپ" />
              <div className="pt-3 mr-3">
                <h5>واتساپ</h5>
                <p>09121112233</p>
              </div>
            </div>

            <div className="box mt-2 mb-5">
              <img
                src="\images/cooperation/telephone.png"
                alt="تلفن تماس ۲۲۹۹۸۸۸۷۷۷۷"
              />
              <div className="pt-3 mr-3">
                <h5>تلفن تماس</h5>
                <p>021-8976534</p>
              </div>
            </div>
          </div>
        </div>

        <div id="item-3" className="row">
          <div className="col-12 col-md-7 mt-5 order-last order-md-first">
            <h4>فرصت شغلی</h4>
            <p className="underline"></p>
            <p>
              مجموعه گیشا اسپرت، همواره از افراد با انگیزه و متخصص دعوت به عمل
              می‌آورد تا با پیوستن به مجموعه در زمینه‌های شغلی گوناگون در کنار
              ما بوده و با هم زمینه رشد و توسعه فردی و کسب‌وکار را فراهم سازیم.
            </p>
            <Formik
              initialValues={{
                name: "",
                phoneNumber: "",
                location: "",
              }}
            >
              <Form className="form">
                <label className="label mt-4">نام و نام خانوادگی *</label>
                <Field name="name" type="text" className="field col-12" />
                <label className="label">شماره تماس * </label>
                <Field
                  name="phone-number"
                  type="number"
                  className="field col-12"
                />
                <label className="label">شهر *</label>
                <Field
                  name="location"
                  type="text"
                  className="field col-12"
                  placeholder="مثل : تهران"
                />
                <label className="label d-block">عنوان شغلی *</label>
                <Select
                  defaultValue="انتخاب کنید ..."
                  className="text-right "
                  style={{ width: 300 }}
                  size="large"
                  options={[
                    {
                      className: "text-right",
                      value: "انتخاب کنید ...",
                      label: "انتخاب کنید ...",
                    },
                    {
                      className: "text-right",
                      value: "دیجیتال مارکتر",
                      label: "دیجیتال مارکتر",
                    },
                    {
                      className: "text-right",
                      value: "طراح وب و وردپرس",
                      label: "طراح وب و وردپرس",
                    },
                    {
                      className: "text-right",
                      value: "متخصص وردپرس",
                      label: "متخصص وردپرس",
                    },
                    {
                      className: "text-right",
                      value: "کارشناس و بازاریابی فروش",
                      label: "کارشناس و بازاریابی فروش",
                    },
                    {
                      className: "text-right",
                      value: "متخصص بازاریابی اینستاگرام",
                      label: "متخصص بازاریابی اینستاگرام",
                    },
                    {
                      className: "text-right",
                      value: "گرافیست",
                      label: "گرافیست",
                    },
                    {
                      className: "text-right",
                      value: "مدلینگ",
                      label: "مدلینگ",
                    },
                    {
                      className: "text-right",
                      value: "عکاسی و فیلمبرداری",
                      label: "عکاسی و فیلمبرداری",
                    },
                    {
                      className: "text-right",
                      value: "تدوینگر ویدیو",
                      label: "تدوینگر ویدیو",
                    },
                    {
                      className: "text-right",
                      value: "انباردار",
                      label: "انباردار",
                    },
                    {
                      className: "text-right",
                      value: "سایر",
                      label: "سایر",
                    },
                  ]}
                />
                <br />
                <Upload>
                  <h6 className="mt-3 font-weight-bold">فایل رزومه</h6>

                  <Button>Choose File</Button>
                </Upload>

                <label className="mt-3 mb-2 font-weight-bold">کد امنیتی</label>
                <ReCAPTCHA sitekey="Your client site key" />
              </Form>
            </Formik>
            <button type="button" className="btn btn-secondary mt-3 mb-5">
              ارسال
            </button>
          </div>
          <img
            className="col-12 col-md-5"
            src="\images/cooperation/cv.png"
            height="500px"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Cooperation;
