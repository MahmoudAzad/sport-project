import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
    userName: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
    phoneNumber: Yup.number().required("شماره موبایل الزامی می باشد"),
    message : Yup.string().required("نوشتن پیام الزامی می باشد")
});

export const registerSchema = Yup.object().shape({
    username: Yup.string().required("خواهشمندیم یک آدرس ایمیل معتبر وارد کنید"),
    password : Yup.string().required("خواهشمندیم گذرواژه حساب خود را وارد کنید")
});
