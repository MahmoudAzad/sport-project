import React from "react";
import { Button, Select, Upload } from "antd";
import { Field, Form, Formik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

const CooperationForm = () => {
  return (
    <>
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
          <Field name="phone-number" type="number" className="field col-12" />
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
    </>
  );
};

export default CooperationForm;
