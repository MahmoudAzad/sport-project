import React from 'react';
import {  HomeOutlined, ReadOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';

const MobileMenu = () => {
    return (
        <div className="">
            <div className="mobile-menu-container ">
                <div className="mobile-menu-item ">
                    <HomeOutlined  className="mobile-menu-icon mb-1 col"/>
                    <p >خانه</p>
                </div>

                <div className="mobile-menu-item ">
                    <ReadOutlined  className="mobile-menu-icon  mb-1 col"/>
                    <p >وبلاگ</p>
                </div>

                <div className="mobile-menu-item ">
                    <ShoppingOutlined  className="mobile-menu-icon mb-1 col"/>
                    <p >فروشگاه</p>
                </div>

                <div className="mobile-menu-item ">
                    <UserOutlined  className="mobile-menu-icon mb-1 col"/>
                    <p >حساب کاربری من</p>
                </div>

                <div className="mobile-menu-item ">
                    <ShoppingCartOutlined className="mobile-menu-icon mb-1 col"/>
                    <p >سبد خرید</p>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;