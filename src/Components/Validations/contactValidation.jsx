import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
    userName: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
    phoneNumber: Yup.number().required("شماره موبایل الزامی می باشد"),
    message : Yup.string().required("نوشتن پیام الزامی می باشد")
});

export const registerSchema = Yup.object().shape({
    email: Yup.string().email("خواهشمندیم یک آدرس ایمیل معتبر وارد کنید").required("وارد کردن ایمیل الزامی میباشد "),
    password : Yup.string().required("خواهشمندیم گذرواژه حساب خود را وارد کنید")
});


export const loginSchema = Yup.object().shape({
    identifier: Yup.string().required("وارد کردن نام کاربری یاایمیل الزامی میباشد "),
    password : Yup.string().required("خواهشمندیم گذرواژه حساب خود را وارد کنید")
});