import React from "react";
import { Field, Form, Formik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

const MajorShoppingForm = () => {
  return (
    <Formik>
      <Form className="text-right">
        <label className="label">نام و نام خانوادگی*</label>
        <Field name="name" type="text" className="col-12 field" />
        <label className="label">تلفن تماس*</label>
        <Field name="id" type="number" className="col-12 field" />
        <label className="label">کد امنیتی</label>
        <ReCAPTCHA sitekey="Your client site key" />
        <btn className="btn btn-success mt-4">ارسال</btn>
      </Form>
    </Formik>
  );
};

export default MajorShoppingForm;
