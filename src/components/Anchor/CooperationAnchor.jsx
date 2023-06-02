import React from "react";
import CooperationForm from "../Form/CooperationForm";
import { AnchorOffcet } from "../Function/AnchorOffcet";

const CooperationAnchor = () => {
  return (
    <>
      <div className="mt-5 d-none d-md-flex justify-content-around">
        <a
          className="d-flex align-items-center text-decoration-none text-black fw-bold "
          href="#item-1"
          onClick={AnchorOffcet}
        >
          <img src="images/cooperation/icon1.png" width="50" className="ms-3" />
          <div className="description mr-3">
            <p className="item-link ">
              همکاری سازمانی <i className="bi bi-chevron-left" />
            </p>
          </div>
        </a>

        <a
          className="d-flex align-items-center text-decoration-none text-black fw-bold"
          href="#item-2"
          onClick={AnchorOffcet}
        >
          <img src="images/cooperation/icon2.png" width="50" className="ms-3" />
          <div className="description mr-3">
            <p className="item-link">
              تامین کالا <i class="bi bi-chevron-left" />
            </p>
          </div>
        </a>

        <a
          className="d-flex align-items-center text-decoration-none text-black fw-bold"
          href="#item-3"
          onClick={AnchorOffcet}
        >
          <img src="images/cooperation/icon3.png" width="50" className="ms-3" />
          <div className="description mr-3">
            <p className="item-link">
              فرصت شغلی <i class="bi bi-chevron-left" />
            </p>
          </div>
        </a>
      </div>

      <div id="item-1" className="row bg-light my-5 rounded">
        <div className="col-12 col-md-7 order-last order-md-first mt-5">
          <h4>همکاری سازمانی</h4>
          <p className="mt-4 lh-base">
            سازمان‌ها و شرکت‌های محترم می‌توانند جهت دریافت کارت هدیه برای پرسنل
            خود و همچنین خدمات تولید و چاپ البسه و لوازم ورزشی درخواست خود را
            ثبت نمایند. مجموعه گیشا اسپرت با افتخار در خدمت شماست
          </p>
          <div className="contact-box d-flex align-items-end p-4 rounded my-4">
            <img
              src="\images/cooperation/wats.png"
              alt="واتساپ"
              className="ms-3"
            />
            <div className="pt-3 mr-3">
              <h5>واتساپ</h5>
              <p>09121112233</p>
            </div>
          </div>

          <div className="contact-box d-flex align-items-end p-4 rounded">
            <img
              src="\images/cooperation/telephone.png"
              alt="تلفن : ۰۲۱۲۲۲۲۲۲۲۲"
              className="ms-3"
            />
            <div className="pt-3 mr-3">
              <h5>تلفن تماس</h5>
              <p>021-8976534</p>
            </div>
          </div>
        </div>
        <img
          src="\images/cooperation/organ.png"
          className="col-12 col-md-5"
          height="500px"
          alt="ارگان معتبر"
        />
      </div>

      <div id="item-2" className="row bg-light my-5 rounded">
        <img
          src="\images/cooperation/supply.png"
          className="col-12 col-md-5"
          height="500px"
          alt="ضمانت کالا"
        />
        <div className="col-12 col-md-7 mt-5">
          <h4>تامین کالا</h4>
          <p className="mt-4 lh-base">
            تولید کنندگان و عرضه کنندگان پوشاک ورزشی و همچنین سایر لوازم و
            تجهیزات ورزشی می‌توانند درخواست خود را مبنی بر فروش کالا به صورت
            عمده در گیشا اسپرت اعلام نمایند. با افتخار حامی تولید ملی خواهیم
            بود.
          </p>
          <div className="contact-box d-flex align-items-end p-4 rounded my-4">
            <img
              src="\images/cooperation/wats.png"
              alt="واتساپ"
              className="ms-3"
            />
            <div className="pt-3 mr-3">
              <h5>واتساپ</h5>
              <p>09121112233</p>
            </div>
          </div>

          <div className="contact-box d-flex align-items-end p-4 rounded my-4">
            <img
              src="\images/cooperation/telephone.png"
              alt="تلفن تماس ۲۲۹۹۸۸۸۷۷۷۷"
              className="ms-3"
            />
            <div className="pt-3 mr-3">
              <h5>تلفن تماس</h5>
              <p>021-8976534</p>
            </div>
          </div>
        </div>
      </div>

      <div id="item-3" className="row bg-light">
        <div className="col-12 col-md-7 mt-5 order-last order-md-first">
          <h4>فرصت شغلی</h4>
          <p className="underline"></p>
          <p className="my-4 lh-base">
            مجموعه گیشا اسپرت، همواره از افراد با انگیزه و متخصص دعوت به عمل
            می‌آورد تا با پیوستن به مجموعه در زمینه‌های شغلی گوناگون در کنار ما
            بوده و با هم زمینه رشد و توسعه فردی و کسب‌وکار را فراهم سازیم.
          </p>
          <CooperationForm />
        </div>
        <img
          className="col-12 col-md-5"
          src="\images/cooperation/cv.png"
          height="500px"
          alt=""
        />
      </div>
    </>
  );
};

export default CooperationAnchor;
