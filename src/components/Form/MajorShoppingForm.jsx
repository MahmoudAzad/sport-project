import React from "react";
import { Field, Form, Formik } from "formik";

const MajorShoppingForm = () => {
  return (
    <Formik>
      <Form>
        <label className="fw-bold mb-2">نام و نام خانوادگی*</label>
        <Field name="name" type="text" className="col-12 mb-3 p-1" />
        <label className="fw-bold mb-2">تلفن تماس*</label>
        <Field name="id" type="number" className="col-12 mb-3 p-1" />
        <btn className="btn btn-success mt-4 d-block col-2">ارسال</btn>
      </Form>
    </Formik>
  );
};

export default MajorShoppingForm;
