import React from "react";
import { UpOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
const { Panel } = Collapse;

const Help = () => {
  return (
    <div className="container text-center mt-5">
      <>
        <h4
          style={{
            borderBottom: "3px solid rgb(223, 222, 222)",
            paddingBottom: "10px",
            fontWeight: "bold",
          }}
        >
          راهنما
        </h4>
        <div className="row">
          <div className="col-6 mt-4">
            <h5
              className="font-weight-bold pb-3"
              style={{ borderBottom: "2px solid rgb(223, 222, 222)" }}
            >
              رویه ارسال سفارشات تهران
            </h5>

            <Collapse
              bordered={false}
              ghost
              expandIcon={({ isActive }) => (
                <UpOutlined rotate={isActive ? 360 : 0} />
              )}
            >
              <Panel
                className="font-weight-bold border-bottom"
                style={{ fontSize: "18px" }}
                header="سفارشات شهر تهران"
                key="1"
              >
                <p style={{ fontSize: "16px", textAlign: "right" }}>
                  سفارشات تهران به دو صورت زیر ارسال می‌شوند:
                </p>
                <div
                  className="mt-3"
                  style={{ fontSize: "14px", textAlign: "right" }}
                >
                  <span className="text-success">پیک عادی :</span> تحویل بسته به
                  پیک ظرف ۲۴ ساعت کاری بوده و زمان تحویل کالا به مشتری بین ساعت
                  ۱4 تا ۱9 میباشد.
                  <br />
                  لازم به ذکر است فقط سفارشاتی که تا قبل ساعت 8 صبح ثبت شوند
                  توسط پیک عادی در همان روز ارسال میشوند و سفارشاتی که از ساعت 8
                  صبح به بعد ثبت شوند، در اولین روز کاری بعد ارسال خواهند شد.
                  <p className="text-primary"> هزینه ارسال: 30۰۰۰ تومان </p>
                  <p className="text-danger mt-1">
                    تذکر: در این روش ارسال، درصورت عدم حضور گیرنده در محل هزینه
                    ارسال مجدد با مشتری گرامی میباشد!
                  </p>
                  <p className="mt-3">
                    <span className="text-success">پیک فوری:</span> ارسال سریع
                    توسط پیک هایی همچون الوپیک، اسنپ باکس و ... با توجه به نرخ
                    پایین تر هرکدام انجام میشود و زمان ارسال آن کمتر از سه ساعت
                    کاری میباشد.
                    <br />
                    ساعات قبول ارسال فوری:
                    <br />
                    شنبه تا چهارشنبه : از ساعت ۱۰ صبح الی ۱۷ <br />
                    پنج شنبه : از ساعت ۱۰ الی ۱۴
                  </p>
                  <p className="text-danger mt-3">
                    تذکر: پیک فوری تنها مخصوص شهر تهران میباشد (شهرهای اطراف
                    تهران شامل این روش ارسال نمیباشند!)
                  </p>
                  <p className="text-danger">
                    تذکر: این روش ارسال فقط در زمان اداری امکان پذیر است
                  </p>
                  <p className="text-primary mt-3">
                    هزینه ارسال: با توجه به اینکه مرسوله های از انبار غرب تهران
                    ارسال میشوند هزینه پیک فوری نسبت به مقصد گیرنده متغییر بوده
                    و در سرویس های ذکر شده محاسبه میگردد و تمامن به عهده مشتری
                    گرامی میباشد.
                  </p>
                </div>
              </Panel>

              <Panel
                className="font-weight-bold border-bottom"
                style={{ fontSize: "18px" }}
                header="سفارشات شهرستان ها +‌ اطراف تهران"
                key="2"
              >
                <p style={{ fontSize: "16px", textAlign: "right" }}>
                  سفارشات شهرستان های ایران به دو صورت زیر ارسال می‌گردند:
                </p>
                <div
                  className="mt-3"
                  style={{ fontSize: "14px", textAlign: "right" }}
                >
                  <span className="text-success">پست پیشتاز : </span>بسته‌ها
                  هرروز کاری ساعت 8 صبح به جز پنجشنبه‌ها به شرکت پست تحویل داده
                  میشود. بسته ها بعد از تحویل به پست، معمولا ۲ الی ۴ روز کاری
                  تحویل مشتریان داده خواهند شد لازم به ذکر است که زمان دقیق
                  تحویل، به اداره پست بستگی دارد.
                  <br />
                  <p className="text-primary"> هزینه ارسال: 30۰۰۰ تومان </p>
                  <p className="text-primary mt-3">
                    {" "}
                    توجه: برای پیگیری و دریافت شماره مرسوله بسته‌های پستی به
                    صفحه پیگیری سفارشات پستی (کلیک کنید) مراجعه نمایید.
                  </p>
                  <p className="text-danger mt-3">
                    توجه: از آنجایی که همه بسته‌ها هر روز کاری به جز پنجشنبه‌ها
                    تحویل پست داده میشود لذا لازم به ذکر است مدت زمان رسیدن بسته
                    به دست مشتریان از زمان تحویل به پست محاسبه میشود و خارج از
                    حیطه اختیارات گیشا اسپرت می باشد.{" "}
                  </p>
                </div>
              </Panel>
            </Collapse>
          </div>

          <div className="col-6 mt-4">
            <h5
              className="font-weight-bold pb-3"
              style={{ borderBottom: "2px solid rgb(223, 222, 222)" }}
            >
              شرایط بازگردانی و تعویض محصولات
            </h5>
            <Collapse
              bordered={false}
              ghost
              expandIcon={({ isActive }) => (
                <UpOutlined rotate={isActive ? 360 : 0} />
              )}
            >
              <Panel
                className="font-weight-bold border-bottom"
                style={{ fontSize: "18px" }}
                header="سفارشات شهرستان ها +‌ اطراف تهران"
                key="2"
              >
                <p style={{ fontSize: "16px", textAlign: "right" }}>
                  بازگردانی و تعویض کالا تنها در شرایط زیر امکان پذیر می باشد:
                </p>
                <div
                  className="mt-3"
                  style={{ fontSize: "14px", textAlign: "right" }}
                >
                  <p>
                    تمامی کالا ها قبل از ارسال برای مشتریان عزیز از نظر فنی و
                    ظاهری چک خواهند شد و بعد از آن برای مشتری ارسال می شوند .
                  </p>
                  <p className="mt-3">
                    1. اگر کالایی دارای هر گونه ایراد ظاهری از قبیل شکستگی ،
                    پارگی و یا هر ایراد فنی باشد ، مشتری گرامی بایستی نهایتا تا
                    ۲۴ ساعت پس از دریافت کالا مراتب را به گیشا اسپرت اطلاع دهد
                    تا پس از بررسی و در صورت تایید با هزینه گیشا اسپرت این کالا
                    مرجوع و یا تعویض شود.
                  </p>
                  <p className="mt-3">
                    2. اگر کالای ارسال شده دارای مغایرت از هر نظر با کالای سفارش
                    داده شده، باشد، فقط در صورت عدم استفاده از محصول، مشتری
                    گرامی بایستی نهایتا تا ۴۸ ساعت پس از دریافت کالا مراتب را به
                    گیشا اسپرت اطلاع دهد تا پس از بررسی و در صورت تایید با هزینه
                    گیشا اسپرت این کالا مرجوع و یا تعویض شود.
                  </p>
                  <p className="mt-3">
                    3. اگر کالایی از نظر سلیقه و یا سایز مورد پسند مشتری نباشد،
                    فقط در صورت عدم استفاده از محصول مشتری گرامی بایستی نهایتا
                    تا 7 روز پس از دریافت کالا مراتب را به گیشا اسپرت اطلاع دهد
                    تا پس از بررسی و در صورت تایید با هزینه مشتری محترم این کالا
                    مرجوع و یا تعویض شود.
                  </p>
                  <p className="text-primary mt-1">
                    توجه: برای ثبت درخواست تعویض و یا مرجوعی به شماره واتساپ زیر
                    پیام دهید:
                  </p>
                  <p className="text-success mt-3">
                    روی شماره کلیک کنید 02144405337
                  </p>
                </div>
              </Panel>
            </Collapse>
          </div>
        </div>
      </>

      <>
        <h4
          style={{
            borderBottom: "3px solid rgb(223, 222, 222)",
            paddingBottom: "10px",
            fontWeight: "bold",
            marginTop: "40px",
          }}
        >
          نحوه خرید
        </h4>
        <Collapse
          bordered={false}
          ghost
          expandIcon={({ isActive }) => (
            <UpOutlined rotate={isActive ? 360 : 0} />
          )}
        >
          <Panel
            className="font-weight-bold border-bottom"
            style={{ fontSize: "18px" }}
            header="چگونه از سایت محصول مورد نظرمان را خریداری کنیم ؟"
            key="1"
          >
            <div style={{ fontSize: "16px", textAlign: "right" }}>
              <p>برای خرید از سایت طبق مراحل زیر عمل نمایید:</p>
              <p className="mt-3">1. کالای مورد نظر خود را انتخاب کنید</p>
              <p className="mt-3">
                2. با توجه به ویژگی‌های درج شده مربوط به محصول (مثل: رنگ، سایز و
                ...) گزینه مورد نظر را انتخاب نموده و سپس بر روی "افزودن به سبد
                خرید" کلیک نمایید
              </p>
              <p className="mt-3">
                {" "}
                3. همانطور که مشاهده می‌کنید پنجره سبد خرید شما در سمت چپ صفحه
                باز شده و می‌توانید "تسویه حساب" پرداخت و یا با "مشاهده سبد
                خرید" سبد خرید خود را ویرایش نمایید. اما در صورت تمایل به اضافه
                کردن محصولات، پنجره را بسته و به مشاهده دیگر محصولات ادامه دهید
              </p>
              <p className="mt-3">
                <span className="text-primary">نکته : </span> در صورت بستن پنجره
                سبد خرید و عدم انتخاب محصول دیگر، برای مشاهده سبد خرید بر روی
                آیکون سبد خرید در منو بالای صفحه کلیک کنید تا پنجره سبد خرید
                مجددا نمایش داده شود
              </p>
              <p className="mt-3">
                پس از طی مراحل بالا برای تسویه حساب اطلاعات خواسته شده را وارد
                نموده تا به صفحه درگاه مربوطه برای پرداخت وارد شوید
              </p>
              <p>
                <span className="text-warning">تذکر ۱ : </span> موارد ستاره دار
                حتما باید تکمیل شوند، در غیر این صورت ادامه خرید مقدور نخواهد
                بود
              </p>
              <p>
                <span className="text-warning">تذکر ۲ : </span>از صحت اطلاعات
                خود اطمینان کامل را داشته باشید، در غیر این صورت طبق قوانین و
                مقررات سایت عمل خواهد شد
              </p>
            </div>
          </Panel>

          <Panel
            className="font-weight-bold border-bottom"
            style={{ fontSize: "18px" }}
            header="نحوه پرداخت یه چه صورت میباشد ؟ "
            key="2"
          >
            <div style={{ fontSize: "16px", textAlign: "right" }}>
              <p>
                <span className="text-success">روش سریع و امن : </span>ما برای
                امنیت و سرعت در خرید شما پرداخت اینترنتی را فراهم نمودیم تا وقت
                و هزینه شما را به امن ترین شکل ممکن بهبود دهیم
              </p>
              <p className="mt-3">
                لذا مشتریانی که از امنیت درگاه های پرداخت اینترنتی مطمئن نیستند
                میتوانند از ملاک های اعتبار سنجی که توسط درگاه های پرداخت مربوطه
                ارائه گردیده است، از پرداخت خود اطمینان حاصل کنند
              </p>
              <p className="mt-3">
                <span className="text-warning">روش عادی: </span>در صورت عدم
                تمایل به پرداخت اینترنتی و یا عدم داشتن اطلاعاتی همچون رمز دوم،
                میتوانید با تماس با پشتیبانی و با ایجاد هماهنگی قبلی با شماره
                حساب/کارت ارائه داده شده توسط پشتیبانی اقدام به پرداخت نمایید تا
                ادامه روند ارسال کالا برای شما مهیا شود
              </p>
            </div>
          </Panel>

          <Panel
            className="font-weight-bold border-bottom"
            style={{ fontSize: "18px" }}
            header="اطلاعات مورد نیاز جهت پرداخت اینترنتی"
            key="3"
          >
            <div style={{ fontSize: "16px", textAlign: "right" }}>
              <p className="mt-3">برای پرداخت نیاز به اطلاعات زیر میباشید:</p>
              <p className="mt-3">
                <span className="text-success">شماره کارت: </span> شماره کارت ۱۶
                رقمی درج شده بر روی کارت بانکی
              </p>
              <p className="mt-3">
                <span className="text-success">رمز دوم پویا: </span>رمز دومی که
                از دستگاه های خودپرداز بانکی دریافت نموده اید. لازم به ذکر است
                در صورت عدم داشتن رمز دوم پویا میتوانید با مراجعه به دستگاه
                خودپرداز (ATM) یکی از شعب بانک خود، رمز دوم پویا خود را فعال
                کنید
              </p>
              <p className="mt-3">
                <span className="text-success">CVV2:</span>شماره CVV2 درج شده بر
                روی کارت بانکی
              </p>
              <p className="mt-3">
                <span className="text-success">تاریخ انقضا:</span>تاریخ انقضای
                درج شده بر روی کارت بانکی. دقت نمایید که برای در سال انقا فقط ۲
                رقم آخر سال مهم است
              </p>
              <p className="mt-3">
                <span className="text-success">کد امنیتی:</span>کد امنیتی درج
                شده در صفحه پرداخت که میتواند هم شامل حروف و یا اعداد باشد
              </p>
            </div>
          </Panel>
        </Collapse>
      </>
    </div>
  );
};

export default Help;
