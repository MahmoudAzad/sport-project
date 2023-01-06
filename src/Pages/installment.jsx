import { LeftOutlined } from '@ant-design/icons';
import React from 'react';

const Installment = () => {
    return (
        <div className="col-lg-10 col-11 container mt-lg-5 mt-1">
            <div className="installment-container row">
                <div className="col-lg-6 col-12 desc text-right order-lg-first order-last mt-5 mt-lg-0">
                    <h4>خرید اقساط پوشاک و لوازم ورزشی از گیشا اسپرت</h4>
                    <p>
                        با همکاری مجموعه گیشا اسپرت و مجموعه لندو، امکان خرید قسطی تمام محصولات ورزشی سایت گیشا اسپرت،<span style={{ color: "rgb(254, 116, 11)", fontWeight: "bold" }}> برای سفارشات بالای 5 میلیون تومان</span> وجود دارد.
                    </p>
                    <h5>مزایای خرید اقساطی:</h5>
                    <li>تا سقف ۲۰ میلیون تومان</li>
                    <li>بدون الزام چک و ضامن</li>
                    <li>فرایند کاملا آنلاین</li>
                    <li>عدم اخذ جریمه دیرکرد</li>
                    <h5>مدارک لازم برای دریافت اعتبار از لندو:</h5>
                    <li>مدارک شناسایی</li>
                    <li>یکی از مدارک گردش حساب/ فیش حقوقی / گواهی اشتغال به کار</li>
                    <li>مدارک محل سکونت</li>
                    <li>داشتن حساب بانک آینده</li>
                    <h5>مراحل خرید اقساطی:</h5>
                    <li> مشخص کردن مبلغ اعتبار برای خرید اقساطی و ضمانت (سفته)</li>
                    <li>آپلود مدارک لازم برای اعتبارسنجی آنلاین در سایت لندو</li>
                    <li>دریافت اعتبار (کد) از لندو</li>
                    <li>خرید از فروشگاه گیشا اسپرت</li>
                    <li>پرداخت اقساط به‌صورت ماهانه در سایت لندو</li>
                    <h5>پرداخت اقساط:</h5>
                    <li> به صورت ۶ ماهه، ۹ ماهه یا ۱۲ ماهه</li>
                    <li>بصورت آنلاین از طریق سایت لندو</li>
                    <li>بدون دریافت جریمه دیرکرد</li>
                    <btn className="btn col-md-4 col-12" style={{}}>محاسبه و درخواست وام <LeftOutlined /> </btn>
                </div>

                <img src="\images/installment/1.jpg" className="col-lg-6 col-12" alt="خرید اقساطی" />

            </div>
        </div>
    );
}

export default Installment;



