import React from "react";
import CooperationAnchor from "../components/Anchor/CooperationAnchor";

const Cooperation = () => {
  return (
    <div className="col-11 col-xl-9  container mt-5">
      <div className="cooperation-container">
        <h4 className="text-center">همکاری با گیشا اسپرت</h4>
        <p className="underline container"></p>
        <p className="caption">
          گیشا اسپرت در راستای توسعه کسب‌و‌کار در زمینه‌های همکاری سازمانی و
          تامین کالا مشتاق به دریافت نظرات و پیشنهادات سازمان‌ها و تولیدکنندگان
          عزیز می‌باشد. همچنین به منظور رشد و بهبود، از استعدادهای جوان و با
          انگیزه دعوت به همکاری می‌نماید.
        </p>
        <CooperationAnchor />
      </div>
    </div>
  );
};

export default Cooperation;
