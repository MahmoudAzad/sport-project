import React from 'react';

const Adresses = () => {
    return (
        <div className="adresses-container">
            <h5>آدرس‌های زیر به طور پیش‌فرض در صفحه پرداخت مورد استفاده قرار مي‌گیرد.</h5>
            <div className="adresses-items">

                <div> 
                    <h4 className="font-weight-bold mb-3">آدرس صورتحساب</h4>
                    <h5>شما هنوز این آدرس را ثبت نکرده‌اید.</h5>
                </div>

                <div>
                    <h4 className="font-weight-bold mb-3">آدرس حمل و نقل</h4>
                    <h5>شما هنوز این آدرس را ثبت نکرده‌اید.</h5>
                </div>

            </div>

        </div>
    );
}

export default Adresses;