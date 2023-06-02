import React from "react";
import { Field, Form, Formik } from "formik";

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
        <Form>
          <label className="fw-bold mt-3 mb-2">نام و نام خانوادگی *</label>
          <Field
            name="name"
            type="text"
            className="p-2 border border-2 rounded-3 col-12"
          />
          <label className="fw-bold mt-3 mb-2">شماره تماس * </label>
          <Field
            name="phone-number"
            type="number"
            className="p-2 border border-2 rounded-3 col-12"
          />
          <label className="fw-bold mt-3 mb-2">شهر *</label>
          <Field
            name="location"
            type="text"
            className="p-2 border border-2 rounded-3 col-12"
            placeholder="مثل : تهران"
          />
          <label className="fw-bold mt-3 mb-2 d-block">عنوان شغلی *</label>
          <select
            class="p-2 border border-2 rounded-3 col-6"
            aria-label="Default select example"
          >
            <option selected>انتخاب کنید</option>
            <option value="1">دیجیتال مارکتر</option>
            <option value="2">طراح وب و وردپرس</option>
            <option value="3">متخصص وردپرس</option>
            <option value="4">کارشناس و بازاریابی فروش</option>
            <option value="5">متخصص بازاریابی اینستاگرام</option>
            <option value="6">گرافیست</option>
            <option value="7">مدلینگ</option>
            <option value="8">عکاسی و فیلمبرداری</option>
            <option value="9">تدوینگر ویدیو</option>
            <option value="10">انباردار</option>
            <option value="11">سایر</option>
          </select>

          <br />

          <div className="mb-3">
            <label htmlFor="resume" className="form-label fw-bold mt-3 mb-2">
              فایل رزومه
            </label>
            <div className="d-flex align-items-center">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  document.getElementById("resume").click();
                }}
              >
                Upload
              </button>
              <input type="file" className="visually-hidden" id="resume" />
            </div>
          </div>
        </Form>
      </Formik>
      <button type="button" className="btn btn-secondary mt-3 mb-5">
        ارسال
      </button>
    </>
  );
};

export default CooperationForm;
