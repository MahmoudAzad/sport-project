import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ContactSchema } from "../Function/Validations";
import { SendMessageService } from "../../services/Services";
import { toast } from "react-toastify";
const ContactUsForm = () => {
  const handleSubmit = async (values, actions) => {
    try {
      const { status } = await SendMessageService(values);

      if (status == 200) {
        toast.success(values.userName + " عزیز پیام شما ارسال شد ", {
          position: "top-right",
          closeOnClick: true,
        });

        actions.resetForm();
      }
    } catch (e) {
      console.log("Err =>", e.message);
    }
  };
  return (
    <Formik
      initialValues={{
        userName: "",
        phoneNumber: "",
        message: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
    >
      <Form>
        <label className="fw-bold mb-2">نام و نام خانوادگی *</label>
        <Field
          name="userName"
          type="text"
          className="mb-1 col-12 border border-2 border-muted rounded-2 p-1 form-control"
        />

        <ErrorMessage
          name="userName"
          render={(msg) => <div className="text-danger">{msg}</div>}
        />

        <label className="fw-bold mt-4 mb-2"> تلفن *</label>
        <Field
          name="phoneNumber"
          type="number"
          className="mb-1 col-12 border border-2 border-muted rounded-2 p-1 form-control"
          placeholder="مثال : ۰۹۱۲۹۹۹۸۸۷۷"
        />

        <ErrorMessage
          name="phoneNumber"
          render={(msg) => <div className="text-danger">{msg}</div>}
        />

        <label className=" fw-bold mt-4 mb-2"> متن پیام شما *</label>
        <Field
          placeholder="بنویسید ..."
          style={{ height: "200px", resize: "none", display: "block" }}
          name="message"
          as="textarea"
          className="w-100 border border-2 border-muted rounded-2 pt-2 pe-2 "
        />

        <ErrorMessage
          name="message"
          render={(msg) => <div className="text-danger">{msg}</div>}
        />

        <button
          type="submit"
          className="d-block mb-5 mt-3 py-2 px-3 border-0 fw-bold"
        >
          ارسال
        </button>
      </Form>
    </Formik>
  );
};

export default ContactUsForm;
