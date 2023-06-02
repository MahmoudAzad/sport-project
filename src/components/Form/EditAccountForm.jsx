import React from "react";
import { useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";

const EditAccountForm = () => {
  const userEmail = useSelector(
    (state) => state.persistedReducer.user.user.username
  );
  const name = userEmail.substring(0, userEmail.lastIndexOf("@"));

  const handleEditAccount = (values) => {
    console.log("Edit values =>", values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        family: "",
        showName: name,
        email: userEmail,
        lastPassword: "",
        newPassword: "",
        repeadPassword: "",
      }}
      onSubmit={(values, actions) => {
        handleEditAccount(values, actions);
      }}
    >
      <Form>
        <div className="me-4">
          <div className="row">
            <div className="col-6">
              <p className="mb-2">
                نام <span className="text-danger">*</span>
              </p>
              <Field
                name="name"
                type="text"
                className="w-100 p-1 border border-2 border-secondary rounded-2"
              />
            </div>
            <div className="col-6">
              <p className="mb-2">
                نام خانوادگی <span className="text-danger">*</span>
              </p>
              <Field
                className="w-100 p-1 border border-2 border-secondary rounded-2"
                name="family"
                type="text"
              />
            </div>
          </div>

          <p className="mb-2 mt-4">
            نام نمایشی <span className="text-danger">*</span>
          </p>
          <Field
            className="w-100 p-1 border border-2 border-secondary rounded-2"
            name="showName"
            type="text"
            size="100"
            placeholder={name}
          />
          <p className="mt-1">
            اسم شما به این صورت در حساب کاربری و نظرات دیده خواهد شد.
          </p>

          <p className="mb-2 mt-4">
            آدرس ایمیل <span className="text-danger">*</span>
          </p>
          <Field
            className="w-100 p-1 border border-2 border-secondary rounded-2"
            name="email"
            type="text"
            size="100"
            placeholder={userEmail}
          />
        </div>

        <div className="border border-2 border-secondary rounded-2 mt-5 me-4 p-2">
          <h5 className="mt-3 mb-4 fw-bold">تغییر گذرواژه</h5>

          <p className="mb-2">
            گذرواژه پیشین (در صورتی که قصد تغییر ندارید خالی بگذارید)
          </p>
          <Field
            className="w-100 p-1 border border-2 border-secondary rounded-2"
            name="lastPassword"
            type="text"
          />

          <p className="mb-2 mt-4">
            گذرواژه جدید (در صورتی که قصد تغییر ندارید خالی بگذارید)
          </p>
          <Field
            className="w-100 p-1 border border-2 border-secondary rounded-2"
            name="newPassword"
            type="text"
          />

          <p className="mb-2 mt-4">تکرار گذرواژه جدید</p>
          <Field
            className="w-100 p-1 border border-2 border-secondary rounded-2"
            name="repeadPassword"
            type="text"
          />
        </div>

        <button className="bg-green border-0 text-white py-3 px-4 rounded-4 mt-3 me-4 border-none">
          ذخیره تغییرات
        </button>
      </Form>
    </Formik>
  );
};

export default EditAccountForm;
