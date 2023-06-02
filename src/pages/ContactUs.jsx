import React from "react";
import ContactUsForm from "../components/Form/ContactUsForm";

const ContactUS = () => {
  return (
    <div className="mx-5">
      <div className="contact-us-container border border-warning border-3  rounded-5 row mt-5 ">
        <div className=" rounded-start rounded-5 col-lg-6 text-right pt-5 bg-orange">
          <h4 className="fw-bold text-white">اطلاعات تماس گیشا اسپرت</h4>
          <p className="text-muted">
            صمیمانه پاسخگوی نظر، پیشنهاد، انتقاد و شکایت شما هستیم
          </p>
          <div className="mt-5 me-5 d-flex align-items-center">
            <i class="bi bi-telephone text-white h4" />
            <p className="me-2">۰۲۱-۲۸۴۲۸۱۵۹</p>
          </div>

          <div className="mt-1 me-5 d-flex align-items-center">
            <i class="bi bi-envelope text-white h4" />
            <p className="me-2">info@GishaSport.com</p>
          </div>

          <div className="mt-1 me-5 d-flex align-items-center">
            <i class="bi bi-geo-alt text-white h4" />
            <p className="me-2">پونک، خیابان عدل، خیابان بهار شرقی</p>
          </div>

          <p className="mx-5 text-secondary mt-3 lh-base">
            آدرس مربوط به دفتر مرکزی بوده و فروشگاه حضوری وجود ندارد خرید و ثبت
            سفارش تنها بصورت آنلاین میباشد و درصورت نیاز به مشاوره از طریق چت
            آنلاین سایت، چت واتساپ و یا تماس تلفنی با ما در ارتباط باشید
          </p>

          <div className="mt-5 me-5 row">
            <i class="bi bi-youtube text-white h2 col-2" />
            <i class="bi bi-twitter text-white h2 col-2" />
            <i class="bi bi-github text-white h2 col-2" />
            <i class="bi bi-whatsapp text-white h2 col-2" />
            <i class="bi bi-instagram text-white h2 col-2" />
          </div>
        </div>

        <div className="col-lg-6 pt-5">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
