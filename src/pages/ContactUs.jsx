import React from "react";
import {
  EnvironmentOutlined,
  GithubOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import ContactUsForm from "../components/Form/ContactUsForm";

const ContactUS = () => {
  return (
    <div className="mr-5 ml-5">
      <div className="contact-us-container row ">
        <div className="information col-lg-6 text-right pt-5">
          <h4 style={{ fontWeight: "bold", color: "white" }}>
            اطلاعات تماس گیشا اسپرت
          </h4>
          <p style={{ color: "rgb(209, 209, 209)" }}>
            صمیمانه پاسخگوی نظر، پیشنهاد، انتقاد و شکایت شما هستیم
          </p>
          <h6 style={{ marginTop: "100px", marginRight: "50px" }}>
            <PhoneOutlined
              style={{
                fontSize: "22px",
                marginLeft: "10px",
                color: "rgb(259, 259, 259)",
              }}
            />
            ۰۲۱-۲۸۴۲۸۱۵۹
          </h6>
          <h6 style={{ marginTop: "20px", marginRight: "50px" }}>
            <MailOutlined
              style={{
                fontSize: "22px",
                marginLeft: "10px",
                color: "rgb(259, 259, 259)",
              }}
            />
            info@GishaSport.com
          </h6>
          <h6 style={{ marginTop: "20px", marginRight: "50px" }}>
            <EnvironmentOutlined
              style={{
                fontSize: "22px",
                marginLeft: "10px",
                color: "rgb(259, 259, 259)",
              }}
            />
            پونک، خیابان عدل، خیابان بهار شرقی
          </h6>

          <p
            style={{
              textAlign: "right",
              marginRight: "80px",
              marginTop: "10px",
              marginLeft: "20px",
              color: "rgb(209, 209, 209)",
              lineHeight: "20px",
            }}
          >
            آدرس مربوط به دفتر مرکزی بوده و فروشگاه حضوری وجود ندارد خرید و ثبت
            سفارش تنها بصورت آنلاین میباشد و درصورت نیاز به مشاوره از طریق چت
            آنلاین سایت، چت واتساپ و یا تماس تلفنی با ما در ارتباط باشید
          </p>

          <div className="mt-5 mr-5 row">
            <YoutubeOutlined className="icon col-2" />
            <TwitterOutlined className="icon col-2" />
            <GithubOutlined className="icon col-2" />
            <WhatsAppOutlined className="icon col-2" />
            <InstagramOutlined className="icon col-2" />
          </div>
        </div>

        <div className="form-container col-lg-6  text-right pt-5">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
