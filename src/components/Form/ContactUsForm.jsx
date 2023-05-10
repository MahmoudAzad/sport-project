import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
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
      <Form className="form">
        <label className=" mb-2">نام و نام خانوادگی *</label>
        <Field
          name="userName"
          type="text"
          className="mb-1 field-input col-12"
        />

        <ErrorMessage
          name="userName"
          render={(msg) => <div className="text-danger">{msg}</div>}
        />

        <label className="mt-4 mb-2"> تلفن *</label>
        <Field
          name="phoneNumber"
          type="number"
          className="mb-1 field-input col-12"
          placeholder="مثال : ۰۹۱۲۹۹۹۸۸۷۷"
        />

        <ErrorMessage
          name="phoneNumber"
          render={(msg) => <div className="text-danger">{msg}</div>}
        />

        <label className="mt-4 mb-2"> متن پیام شما *</label>
        <Field
          placeholder="بنویسید ..."
          style={{ height: "200px", resize: "none", display: "block" }}
          name="message"
          as="textarea"
          className="w-100"
        />

        <ErrorMessage
          name="message"
          render={(msg) => <div className="text-danger">{msg}</div>}
        />

        <label className="mb-2 mt-3">کد امنیتی</label>
        <ReCAPTCHA sitekey="Your client site key" />

        <button
          type="submit"
          style={{ display: "block", marginBottom: "20px" }}
        >
          ارسال
        </button>
      </Form>
    </Formik>
  );
};

export default ContactUsForm;
