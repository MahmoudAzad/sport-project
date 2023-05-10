import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { LeftOutlined } from "@ant-design/icons";
import ShakerPrintingCarousel from "../Carousel/ShakerPrintingCarousel";

const ShakerPrintingAnchor = () => {
  return (
    <>
      <div className="shaker-printing-anchor">
        <AnchorLink className="anchor-item col" href="#item-1" offset="50">
          <img
            src="/images\advertise-photos/ad1.jpg"
            alt="شیکر با لوگو دلخواه"
          />
          <div className="item-description mr-3">
            <p className="item-link">
              چرا شیکر با لوگو دلخواه
              <LeftOutlined className="item-icon  mr-1" />
            </p>
          </div>
        </AnchorLink>

        <AnchorLink className="anchor-item col" href="#item-2" offset="50">
          <img
            src="/images\shaker-printing\2pie.png"
            alt="شیکر با لوگو دلخواه"
          />
          <div className="item-description mr-3">
            <p className="item-link">
              مزایای چاپ لوگوی شیکر <LeftOutlined className="item-icon  mr-1" />
            </p>
          </div>
        </AnchorLink>

        <AnchorLink className="anchor-item col" href="#item-3" offset="50">
          <img
            src="/images\shaker-printing\3pie.png"
            alt="شیکر با لوگو دلخواه"
          />
          <div className="item-description mr-3">
            <p className="item-link">
              انواع شیکرهای چاپی <LeftOutlined className="item-icon  mr-1" />
            </p>
          </div>
        </AnchorLink>

        <AnchorLink className="anchor-item col" href="#item-4" offset="50">
          <img
            src="/images\shaker-printing\4pie.png"
            alt="شیکر با لوگو دلخواه"
          />
          <div className="item-description mr-3">
            <p className="item-link">
              خرید شیکر با چاپ دلخواه{" "}
              <LeftOutlined className="item-icon  mr-1" />
            </p>
          </div>
        </AnchorLink>
      </div>

      <div className="row bg-light pt-5 mt-5 " id="item-1">
        <div className="col-md-7 col-lg-8 col-12 text-right order-md-first order-last ">
          <h4>چرا شیکر با لوگو دلخواه؟</h4>
          <p
            style={{ borderBottom: "3px solid black", width: "40px" }}
            className=" mt-3"
          ></p>

          <p style={{ lineHeight: "30px" }} className="mt-4">
            {" "}
            یکی از بهترین و موثرترین روش‌های تبلیغات و برندینگ برای داروخانه‌ها،
            فروشگاه‌های لوازم ورزشی، باشگاه‌های ورزشی، شرکت‌های تولید کننده
            مکمل‌های بدنسازی و حتی مربیان و اساتید ورزشی و هر مجموعه فعال در
            زمینه ورزشی، ارائه هدایای ورزشی مرتبط برای مشتریان است.
            <br /> <br />
            در همین راستا، شیکرهای ورزشی تبلیغاتی که یکی از پرکاربردترین لوازم
            ورزشی هستند، انتخاب مناسبی برای این نحوه تبلیغات و برندینگ ورزشی به
            شمار می‌روند.
            <br /> <br />
            مجموعه گیشا اسپرت، بعنوان یکی از بزرگترین و معتبرترین فروشگاه های
            آنلاین فعال در زمینه لوازم و پوشاک ورزشی، کلیه امور مربوط به تولید
            شیکر ورزشی تبلیغاتی را با بهترین تنوع مدل و رنگ با لوگوی دلخواه شما
            در سراسر ایران و کشورهای همسایه انجام می دهد.
          </p>
        </div>
        <img
          src="/images\shaker-printing\1shaker.png"
          className="col-md-5 col-lg-4 col-12"
          alt="شیکر با لوگو دلخواه"
        />
      </div>

      <div className="row mt-5 bg-light pt-5 pb-5 " id="item-2">
        <img
          src="/images\shaker-printing\2shaker.png"
          className="col-12 col-md-5 col-xl-4"
          alt="شیکر با لوگو دلخواه"
        />
        <div className="col-12 col-md-7 col-xl-8 text-right">
          <h4>مزایای چاپ شیکر با لوگوی دلخواه</h4>
          <p
            style={{ borderBottom: "3px solid black", width: "40px" }}
            className=" mt-3"
          ></p>

          <div style={{ lineHeight: "30px" }} className="mt-4">
            قابل دید بودن: شیکر وسیله ای است که همه ورزشکاران اکثرا در باشگاه‌ها
            و مجموعه‌های ورزشی برای نوشیدنی یا مصرف مکمل‌ها، همراه خود دارند و
            این خود بهترین نوع تبلیغ برند شما است.
            <br /> <br />
            قابلیت استفاد برای تمام سنین و جنسیت‌ها: به دلیل ماهیت قمقمه بودن،
            این وسیله برای تمامی گروه ها قابل استفاده است و با توجه به رنگبندی
            متنوع هم برای آقایان و هم برای خانم ها مناسب می باشد.
            <br /> <br />
            کم هزینه: چاپ تبلیغات بر روی شیکرها هزینه کمتری نسبت به سایر هدایای
            تبلیغاتی دارد به همین دلیل در هر کسب و کاری با هر بودجه‌ای که برای
            هدایای تبلیغاتی در نظر گرفته شده، می‌توان شیکر تبلیغاتی را با تعداد
            مناسب سفارش داد.
            <br /> <br />
            توجه بالا: در رویداد های ورزشی مثل نمایشگاه اسپورتکس وجود این شیکر
            برای تبلیغات و برندینگ انواع مکمل‌ها حرف اول را میزند و انتخاب هر
            ورزشکاری می تواند شیکر ورزشی آن برند باشد.
            <br /> <br />
            زمان کم برای تولید: به دلیل آماده بودن شیکر های خام در مجموعه گیشا
            اسپرت، تنها مشتری کافی است لوگوی خود را برای ما ارسال کند تا پس از
            انتخاب مدل و رنگ های موجود فرآیند چاپ آغاز شود.‌
          </div>
        </div>
      </div>

      <div className="bg-light pt-5 pb-5 mt-5 border-bottom" id="item-3">
        <h4 className="text-center">انواع شیکر با چاپ دلخواه</h4>
        <p
          style={{ borderBottom: "3px solid black", width: "60px" }}
          className="container mt-3"
        ></p>
        <div className="row text-center ">
          <div className="col-12 col-md-6">
            <img
              src="/images\shaker-printing\3shaker.png"
              className="col-7"
              alt="شیکر با لوگو دلخواه"
            />
            <h5 className="mt-3 font-weight-bold">شیکر یک تیکه آوین</h5>
            <li className="text-right pr-4 mb-4 mt-4">
              <strong className="font-weight-bold">نوع :‌</strong> یک تیکه
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> نوع بدنه :‌</strong> شفاف
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ظرفیت :‌</strong> 0.4 لیتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ابعاد :‌</strong>6*10*16
              سانتی متر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> جنس :‌</strong> پلاستیک قابل
              بازیافت و غیر سمی
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> رنگ بندی :‌</strong>بیش از
              10 رنگ متفاوت از جمله مشکی، بیرنگ، قرمز، آبی، سبز و …{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ویژگی‌ :‌</strong> دارای یک
              مخزن مایع، درب ضد نشت و توپ جهت میکس هرچه بهتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> تعداد در کارتن :‌</strong>
              100 عدد{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> حداقل سفارش :‌</strong> 300
              عدد{" "}
            </li>
          </div>

          <div className="col-12 col-md-6">
            <img
              src="/images\shaker-printing\4shaker.png"
              className="col-7"
              alt="شیکر با لوگو دلخواه"
            />
            <h5 className="mt-3 font-weight-bold">شیکر یک تیکه سیگنال</h5>
            <li className="text-right pr-4 mb-4 mt-4">
              <strong className="font-weight-bold">نوع :‌</strong> یک تیکه
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> نوع بدنه :‌</strong> شفاف
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ظرفیت :‌</strong> 0.4 لیتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ابعاد :‌</strong>6*10*16
              سانتی متر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> جنس :‌</strong> پلاستیک قابل
              بازیافت و غیر سمی
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> رنگ بندی :‌</strong>بیش از
              10 رنگ متفاوت از جمله مشکی، بیرنگ، قرمز، آبی، سبز و …{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ویژگی‌ :‌</strong> دارای یک
              مخزن مایع، درب ضد نشت و توپ جهت میکس هرچه بهتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> تعداد در کارتن :‌</strong>
              100 عدد{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> حداقل سفارش :‌</strong> 300
              عدد{" "}
            </li>
          </div>
        </div>

        <p className="border-bottom mt-5 mb-5 col-11 container"></p>

        <div className="row text-center ">
          <div className="col-12 col-md-6">
            <img
              src="/images\shaker-printing\5shaker.png"
              className="col-7"
              alt="شیکر با لوگو دلخواه"
            />
            <h5 className="mt-3 font-weight-bold">شیکر یک تیکه هیربد</h5>
            <li className="text-right pr-4 mb-4 mt-4">
              <strong className="font-weight-bold">نوع :‌</strong> یک تیکه
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> نوع بدنه :‌</strong> شفاف
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ظرفیت :‌</strong> 0.4 لیتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ابعاد :‌</strong>6*10*16
              سانتی متر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> جنس :‌</strong> پلاستیک قابل
              بازیافت و غیر سمی
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> رنگ بندی :‌</strong>بیش از
              10 رنگ متفاوت از جمله مشکی، بیرنگ، قرمز، آبی، سبز و …{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ویژگی‌ :‌</strong> دارای یک
              مخزن مایع، درب ضد نشت و توپ جهت میکس هرچه بهتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> تعداد در کارتن :‌</strong>
              100 عدد{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> حداقل سفارش :‌</strong> 300
              عدد{" "}
            </li>
          </div>

          <div className="col-12 col-md-6">
            <img
              src="/images\shaker-printing\6shaker.png"
              className="col-7"
              alt="شیکر با لوگو دلخواه"
            />
            <h5 className="mt-3 font-weight-bold">شیکر یک تیکه رایکا</h5>
            <li className="text-right pr-4 mb-4 mt-4">
              <strong className="font-weight-bold">نوع :‌</strong> یک تیکه
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> نوع بدنه :‌</strong> شفاف
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ظرفیت :‌</strong> 0.4 لیتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ابعاد :‌</strong>6*10*16
              سانتی متر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> جنس :‌</strong> پلاستیک قابل
              بازیافت و غیر سمی
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> رنگ بندی :‌</strong>بیش از
              10 رنگ متفاوت از جمله مشکی، بیرنگ، قرمز، آبی، سبز و …{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ویژگی‌ :‌</strong> دارای یک
              مخزن مایع، درب ضد نشت و توپ جهت میکس هرچه بهتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> تعداد در کارتن :‌</strong>
              100 عدد{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> حداقل سفارش :‌</strong> 300
              عدد{" "}
            </li>
          </div>
        </div>

        <p className="border-bottom mt-5 mb-5 col-11 container"></p>

        <div className="row text-center ">
          <div className="col-12 col-md-6">
            <img
              src="/images\shaker-printing\7shaker.png"
              className="col-7"
              alt="شیکر با لوگو دلخواه"
            />
            <h5 className="mt-3 font-weight-bold">شیکر سه تیکه شیان شفاف</h5>
            <li className="text-right pr-4 mb-4 mt-4">
              <strong className="font-weight-bold">نوع :‌</strong> یک تیکه
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> نوع بدنه :‌</strong> شفاف
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ظرفیت :‌</strong> 0.4 لیتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ابعاد :‌</strong>6*10*16
              سانتی متر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> جنس :‌</strong> پلاستیک قابل
              بازیافت و غیر سمی
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> رنگ بندی :‌</strong>بیش از
              10 رنگ متفاوت از جمله مشکی، بیرنگ، قرمز، آبی، سبز و …{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ویژگی‌ :‌</strong> دارای یک
              مخزن مایع، درب ضد نشت و توپ جهت میکس هرچه بهتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> تعداد در کارتن :‌</strong>
              100 عدد{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> حداقل سفارش :‌</strong> 300
              عدد{" "}
            </li>
          </div>

          <div className="col-12 col-md-6">
            <img
              src="/images\shaker-printing\8shaker.png"
              className="col-7"
              alt="شیکر با لوگو دلخواه"
            />
            <h5 className="mt-3 font-weight-bold">شیکر سه تیکه شیان مات</h5>
            <li className="text-right pr-4 mb-4 mt-4">
              <strong className="font-weight-bold">نوع :‌</strong> یک تیکه
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> نوع بدنه :‌</strong> شفاف
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ظرفیت :‌</strong> 0.4 لیتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ابعاد :‌</strong>6*10*16
              سانتی متر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> جنس :‌</strong> پلاستیک قابل
              بازیافت و غیر سمی
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> رنگ بندی :‌</strong>بیش از
              10 رنگ متفاوت از جمله مشکی، بیرنگ، قرمز، آبی، سبز و …{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ویژگی‌ :‌</strong> دارای یک
              مخزن مایع، درب ضد نشت و توپ جهت میکس هرچه بهتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> تعداد در کارتن :‌</strong>
              100 عدد{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> حداقل سفارش :‌</strong> 300
              عدد{" "}
            </li>
          </div>
        </div>

        <p className="border-bottom mt-5 mb-5 col-11 container"></p>

        <div className="row text-center ">
          <div className="col-12 col-md-6">
            <img
              src="/images\shaker-printing\9shaker.png"
              className="col-7"
              alt="شیکر با لوگو دلخواه"
            />
            <h5 className="mt-3 font-weight-bold">شیکر سه تیکه کیا دودی</h5>
            <li className="text-right pr-4 mb-4 mt-4">
              <strong className="font-weight-bold">نوع :‌</strong> یک تیکه
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> نوع بدنه :‌</strong> شفاف
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ظرفیت :‌</strong> 0.4 لیتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ابعاد :‌</strong>6*10*16
              سانتی متر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> جنس :‌</strong> پلاستیک قابل
              بازیافت و غیر سمی
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> رنگ بندی :‌</strong>بیش از
              10 رنگ متفاوت از جمله مشکی، بیرنگ، قرمز، آبی، سبز و …{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ویژگی‌ :‌</strong> دارای یک
              مخزن مایع، درب ضد نشت و توپ جهت میکس هرچه بهتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> تعداد در کارتن :‌</strong>
              100 عدد{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> حداقل سفارش :‌</strong> 300
              عدد{" "}
            </li>
          </div>

          <div className="col-12 col-md-6">
            <img
              src="/images\shaker-printing\10shaker.png"
              className="col-7"
              alt="شیکر با لوگو دلخواه"
            />
            <h5 className="mt-3 font-weight-bold">شیکر سه تیکه کیا شفاف</h5>
            <li className="text-right pr-4 mb-4 mt-4">
              <strong className="font-weight-bold">نوع :‌</strong> یک تیکه
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> نوع بدنه :‌</strong> شفاف
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ظرفیت :‌</strong> 0.4 لیتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ابعاد :‌</strong>6*10*16
              سانتی متر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> جنس :‌</strong> پلاستیک قابل
              بازیافت و غیر سمی
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> رنگ بندی :‌</strong>بیش از
              10 رنگ متفاوت از جمله مشکی، بیرنگ، قرمز، آبی، سبز و …{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ویژگی‌ :‌</strong> دارای یک
              مخزن مایع، درب ضد نشت و توپ جهت میکس هرچه بهتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> تعداد در کارتن :‌</strong>
              100 عدد{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> حداقل سفارش :‌</strong> 300
              عدد{" "}
            </li>
          </div>
        </div>

        <p className="border-bottom mt-5 mb-5 col-11 container"></p>

        <div className="row text-center ">
          <div className="col-12">
            <img
              src="/images\shaker-printing\11shaker.png"
              width="250px"
              height="250px"
              alt="شیکر با لوگو دلخواه"
            />
            <h5 className="mt-3 font-weight-bold">شیکر سه تیکه جی پلاس</h5>
            <li className="text-right pr-4 mb-4 mt-4">
              <strong className="font-weight-bold">نوع :‌</strong> سه تیکه با دو
              جاقرص مجزا
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> نوع بدنه :‌</strong> شفاف
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ظرفیت :‌</strong> 0.4 لیتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ابعاد :‌</strong>6*10*16
              سانتی متر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> جنس :‌</strong> پلاستیک قابل
              بازیافت و غیر سمی
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> رنگ بندی :‌</strong>بیش از
              10 رنگ متفاوت از جمله مشکی، بیرنگ، قرمز، آبی، سبز و …{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> ویژگی‌ :‌</strong> دارای یک
              مخزن مایع، درب ضد نشت و توپ جهت میکس هرچه بهتر{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> تعداد در کارتن :‌</strong>
              100 عدد{" "}
            </li>
            <li className="text-right pr-4 mb-4">
              <strong className="font-weight-bold"> حداقل سفارش :‌</strong> 300
              عدد{" "}
            </li>
          </div>
        </div>
      </div>

      <div
        id="item-4"
        style={{
          border: "2px solid orange",
          padding: "40px 20px",
          borderRadius: "15px",
          marginTop: "50px",
        }}
      >
        <h4 className="text-center font-weight-bold">نمونه کارهای انجام شده</h4>
        <p
          style={{ borderBottom: "3px solid black", width: "70px" }}
          className="container mt-3"
        ></p>

        <ShakerPrintingCarousel />
      </div>
    </>
  );
};

export default ShakerPrintingAnchor;
