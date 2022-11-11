import React, { Fragment, useState } from 'react';
import { Drawer, Tabs, Collapse, Dropdown, Menu } from 'antd';
import { SearchOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useParams , useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadState } from '../../../Redux/localStorage';
import CartDrawer from '../../Drawers/cartDrawer';

const { TabPane } = Tabs;
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;





const SubNavbar = (props) => {

    const load = loadState();
    console.log('Load (subNavbar) =>' , load);
    const localStore = props;

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };



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
                        <Link to="profile/edit-account">
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
                        <UnorderedListOutlined style={{ fontSize: 18 }} className="p-1 nav-icon" onClick={showDrawer} />

                        <Drawer placement="right" onClose={onClose} visible={visible} closable={false} width="358px" >
                            <div className="header-drawer">
                                <h5>جستجوی محصولات</h5>
                                <SearchOutlined style={{ fontSize: 25 }} className="search-icon" />
                            </div>

                        </Drawer>


                        {
                            load.isLogged === false ? (
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
                        <img src="Gisha-Logotype-200.png" width="150" height="40" />
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