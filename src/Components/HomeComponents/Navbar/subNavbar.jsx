import React, { Fragment } from 'react';
import { Dropdown, Menu } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartDrawer from '../../Drawers/cartDrawer';
import MenuDrawer from '../../Drawers/menuDrawer';

const SubNavbar = (props) => {


    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <Link to="/profile">
                            پیشخوان
                        </Link>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <Link to="/profile/order">
                            سفارشات
                        </Link>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <Link to="profile/downloads">
                            دانلود ها
                        </Link>
                    ),
                }, {
                    key: '4',
                    label: (
                        <Link to="profile/adresses">
                            آدرس ها
                        </Link>
                    ),
                }, {
                    key: '5',
                    label: (
                        <Link to="profile/edit-account">
                            جزئیات حساب
                        </Link>

                    ),
                }, {
                    key: '6',
                    label: (
                        <Link to="/wish-list">
                            علاقه مندی
                        </Link>

                    ),
                }, {
                    key: '7',
                    label: (
                        <Link to="/logout">
                            خروج
                        </Link>
                    ),
                }
            ]}
        />
    );

    return (
        <Fragment>
            <div className="top-line"></div>

            <div className="container">

                <div className="navbar-container mt-3 mb-3 ">

                    <div className="navbar-icons ">


                        <MenuDrawer />

                        {
                            props.isLogged === false ? (
                                <Link to="/login">
                                    <UserOutlined style={{ fontSize: 18 }} className="p-1 nav-icon mr-2" />
                                </Link>
                            ) : (
                                <Dropdown
                                    overlay={menu}
                                    placement="bottomRight"

                                >
                                    <Link to="/profile">
                                        <UserOutlined style={{ fontSize: 18 }} className="p-1 nav-icon mr-2" />
                                    </Link>
                                </Dropdown>
                            )
                        }

                        <CartDrawer />

                        <SearchOutlined style={{ fontSize: 18 }} className="p-1 nav-icon mr-2" />

                    </div>


                    <Link to="/" className="navbar-logo" >
                        <img src="Gisha-Logotype-200.png" width="150" height="40" alt="لوگو وبسایت"/>
                    </Link>

                    <div className="navbar-caption ">
                        <Link to="/track-order">پیگیری سفارش </Link>
                        <Link to="/contactus">تماس با ما</Link>
                    </div>

                </div>

            </div>

        </Fragment>

    );
}


function mapStateToProps(state) {
    return {
        isLogged: state.isLogged,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(SubNavbar);