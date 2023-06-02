import React from "react";
import { Helmet } from "react-helmet";
import ShakerPrintingAnchor from "../components/Anchor/ShakerPrintingAnchor";

const ShakerPrinting = () => {
  return (
    <div className="container col-11 col-xl-9">
      <Helmet>
        <title>شیکر با چاپ دلخواه</title>
      </Helmet>
      <div className="mt-5">
        <h5 className="fw-bold text-center mb-3">
          سفارش شیکر ورزشی با چاپ لوگو دلخواه شما
        </h5>

        <p className="mt-4 lh-lg text-secondary">
          در دنیای رقابتی امروز با افزایش انواع بیزینس ها و کسب و کار ها، همه
          صاحبان مشاغل به دنبال راهی برای تبلیغات موثر و ماندگار هستند. چاپ لوگو
          یا برند روی هر محصول مرتبط به آن کسب و کار علاوه بر این که یک پروموشن
          خوب است، می تواند یک هدیه تبلیغاتی مناسب، ماندگار و بسیار تاثیرگذار
          برای باشگاه ها، داروخانه ها، موسسات، شرکت ها و هر کسب و کار دیگری
          باشد. با تمام این تفاسیر اگر کسب و کار شما مرتبط با ورزش علی الخصوص
          بدنسازی است و به دنبال ارائه هدایای تبلیغاتی ماندگار به مشتریان خود و
          همچنین برندینگ محصولات و یا خدمات خود هستید، ما در مجموعه گیشا اسپرت
          امکان چاپ لوگو دلخواه شما را بر روی انواع شیکرهای ورزشی برای شما فراهم
          کرده ایم.
        </p>
      </div>
      <ShakerPrintingAnchor />
      <div
        className="row mt-5 pt-5 pb-5 pr-3 rounded-4"
        style={{ backgroundColor: "rgb(255, 232, 232)" }}
      >
        <div className="col-12 col-md-7 col-lg-8 order-last order-md-first">
          <h5 className="fw-bold">خرید شیکر با چاپ دلخواه</h5>

          <p className="lh-lg mt-4">
            در صورت تمایل برای مشاوره و خرید شیکر ورزشی با لوگو اختصاصی به صورت
            عمده با کارشناسان فروش ما از طریق راه‌های تماس انتهای صفحه در ارتباط
            باشید.
            <br />
            <br />
            کارشناسان ما در اسرع وقت پس از توضیح شرایط و فرآیند سفارش دهی و
            همچنین دریافت لوگوی برند شما، نمونه کارهای گرافیکی و فیزیکی را
            بهمراه لیست قیمت در کمترین زمان ممکن ارسال خواهند کرد.
            <br />
            <br />
            حداقل سفارش برای هر مدل شیکر از 300 عدد شروع می شود.
          </p>
        </div>

        <img
          src="\images/shaker-printing/12shaker.png"
          className="col-12 col-md-5 col-lg-4"
          alt="شیکر با لوگو دلخواه"
        />
      </div>
    </div>
  );
};

export default ShakerPrinting;
