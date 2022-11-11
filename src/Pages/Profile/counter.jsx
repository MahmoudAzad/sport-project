import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DownloadOutlined, EnvironmentOutlined, ExportOutlined, HeartOutlined, ScheduleOutlined, UserOutlined } from '@ant-design/icons';
import { loadState } from '../../Redux/localStorage';


const Counter = () => {

    const [userEmail, setUserEmail] = useState("")
    const name = userEmail.substring(0, userEmail.lastIndexOf("@"));

    useEffect(() => {
        const load = loadState();
        setUserEmail(load.email)
    }, [])


    return (
        <div className="counter-container container mr-5">
            <p style={{ fontSize: "18px", marginBottom: "20px" }}>سلام <strong className='font-weight-bold'>{name}</strong> (<strong className='font-weight-bold'>{name}</strong> نیستید؟ خارج شوید)</p>
            <p style={{ fontSize: "18px", marginBottom: "20px", lineHeight: "25px" }}>از طریق پیشخوان حساب کاربری‌تان، می‌توانید سفارش‌های اخیرتان را مشاهده، آدرس‌های حمل و نقل و صورتحساب‌تان را مدیریت و جزییات حساب کاربری و کلمه عبور خود را ویرایش کنید.</p>

            <div className="counter-items">
                <Link to={"/profile/order"} className="item" >
                    <ScheduleOutlined className="icon" />
                    <p>سفارش</p>
                </Link>

                <Link to={"/profile/downloads"} className="item" >
                    <DownloadOutlined className="icon" />
                    <p>دانلودها</p>
                </Link>

                <Link to={"/profile/adresses"} className="item" >
                    <EnvironmentOutlined className="icon" />
                    <p>آدرس ها</p>
                </Link>

                <Link to={"/profile/edit-account"} className="item" >
                    <UserOutlined className="icon" />
                    <p>جزئیات حساب</p>
                </Link>

                <Link to={"/profile/edit-account"} className="item" >
                    <HeartOutlined className="icon" />
                    <p>علاقه مندی</p>
                </Link>

                <Link to={"/logout"} className="item"  >
                    <ExportOutlined className="icon text-center" />
                    <p>خروج</p>
                </Link>

            </div>
        </div>
    );
}



export default Counter;