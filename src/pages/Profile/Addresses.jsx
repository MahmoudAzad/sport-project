import React from "react";

const Adresses = () => {
  return (
    <div className="w-100 me-3">
      <h5>
        آدرس‌های زیر به طور پیش‌فرض در صفحه پرداخت مورد استفاده قرار مي‌گیرد.
      </h5>
      <div className="d-flex justify-content-between ms-5 mt-4">
        <div>
          <h4 className="fw-bold mb-3">آدرس صورتحساب</h4>
          <h5>شما هنوز این آدرس را ثبت نکرده‌اید.</h5>
        </div>

        <div>
          <h4 className="fw-bold mb-3">آدرس حمل و نقل</h4>
          <h5>شما هنوز این آدرس را ثبت نکرده‌اید.</h5>
        </div>
      </div>
    </div>
  );
};

export default Adresses;
