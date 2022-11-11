import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { loadState } from '../../Redux/localStorage';
import { Field, Form, Formik } from 'formik';
import { editUserData } from '../../Redux/usefulActions';
import { useDispatch } from 'react-redux';

const EditAccount = () => {

    const [userEmail, setUserEmail] = useState("")
    const name = userEmail.substring(0, userEmail.lastIndexOf("@"));
    const dispatch = useDispatch() ; 

    useEffect(() => {
        const load = loadState();
        setUserEmail(load.email)
    }, [])

   
    const handleEditAccount = (values) => {
        console.log("Edit values =>", values);
    }

    if (!userEmail) {
        return <p>
            please wait ...
        </p>
    }

    return (
        <div>

            <Formik
                initialValues={{
                    name: "",
                    family: "",
                    showName: name,
                    email: userEmail,
                    lastPassword: "",
                    newPassword: "",
                    repeadPassword: ""
                }}

                // validationSchema={loginSchema}

                onSubmit={(values, actions) => {
                    handleEditAccount(values, actions);
                }}
            >
                <Form className="edit-account-container">

                    <div className="change-account mr-4">
                        <Row>
                            <Col span={12}>
                                <p className="mb-2">نام <span className="text-danger" >*</span></p>
                                <Field
                                    name="name"
                                    type="text"
                                    style={{ width: '95%' }}
                                />
                            </Col>
                            <Col span={12}>
                                <p className="mb-2">نام خانوادگی <span className="text-danger" >*</span></p>
                                <Field
                                    name="family"
                                    type="text"
                                    className="w-100"
                                />
                            </Col>
                        </Row>

                        <p className="mb-2 mt-4">نام نمایشی <span className="text-danger" >*</span></p>
                        <Field
                            name="showName"
                            type="text"
                            size="100"
                            placeholder={name}
                        />
                        <p className="mt-1">اسم شما به این صورت در حساب کاربری و نظرات دیده خواهد شد.</p>

                        <p className="mb-2 mt-4" >آدرس ایمیل <span className="text-danger" >*</span></p>
                        <Field
                            name="email"
                            type="text"
                            size="100"
                            placeholder={userEmail}
                        />

                    </div>


                    <div className="change-password ">
                        <h5 className="mt-3 mb-4 font-weight-bold">تغییر گذرواژه</h5>

                        <p className="mb-2">گذرواژه پیشین (در صورتی که قصد تغییر ندارید خالی بگذارید)</p>
                        <Field
                            name="lastPassword"
                            type="text"
                            className="w-100"
                        />

                        <p className="mb-2 mt-4">گذرواژه جدید (در صورتی که قصد تغییر ندارید خالی بگذارید)</p>
                        <Field
                            name="newPassword"
                            type="text"
                            className="w-100"
                        />

                        <p className="mb-2 mt-4">تکرار گذرواژه جدید</p>
                        <Field
                            name="repeadPassword"
                            type="text"
                            className="w-100"
                        />

                    </div>

                    <button>
                        ذخیره تغییرات
                    </button>

                </Form>
            </Formik>

        </div>

    );
}

export default EditAccount;




{/* <form className="edit-account-container">
<div className="change-account mr-4">
    <Row>
        <Col span={12}>
            <p className="mb-2">نام <span className="text-danger" >*</span></p>
            <input style={{ width: '95%' }} type="text" />
        </Col>
        <Col span={12}>
            <p className="mb-2">نام خانوادگی <span className="text-danger" >*</span></p>
            <input className="w-100" type="text" />
        </Col>
    </Row>

    <p className="mb-2 mt-4">نام نمایشی <span className="text-danger" >*</span></p>
    <input size="100" type="text" value={name} />
    <p className="mt-1">اسم شما به این صورت در حساب کاربری و نظرات دیده خواهد شد.</p>

    <p className="mb-2 mt-4" >آدرس ایمیل <span className="text-danger" >*</span></p>
    <input size="100" type="text" value={userEmail} />

</div>

<div className="change-password ">
    <h5 className="mt-3 mb-4 font-weight-bold">تغییر گذرواژه</h5>

    <p className="mb-2">گذرواژه پیشین (در صورتی که قصد تغییر ندارید خالی بگذارید)</p>
    <input className="w-100" type="text" />

    <p className="mb-2 mt-4">گذرواژه جدید (در صورتی که قصد تغییر ندارید خالی بگذارید)</p>
    <input className="w-100" type="text" />

    <p className="mb-2 mt-4">تکرار گذرواژه جدید</p>
    <input className="w-100" type="text" />

</div>

<button>
    ذخیره تغییرات
</button>
</form> */}
