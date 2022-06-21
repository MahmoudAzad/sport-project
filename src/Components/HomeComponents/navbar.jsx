import React, { Fragment, useState } from 'react';
import { Drawer, Tabs, Collapse } from 'antd';
import { LeftOutlined, SearchOutlined, ShoppingCartOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const onChange = (key) => {
        console.log(key);
    };



    return (
        <Fragment>
            <div className="top-line"></div>


            <div className="navbar-container container mt-3 mb-3">
                <div className="navbar-icons">
                    <UnorderedListOutlined style={{ fontSize: 20 }} className="p-1 nav-icon" onClick={showDrawer} />
                    <UserOutlined style={{ fontSize: 20 }} className="p-1 nav-icon" />
                    <ShoppingCartOutlined style={{ fontSize: 20 }} className="p-1 nav-icon" />
                    <SearchOutlined style={{ fontSize: 20 }} className="p-1 nav-icon" />
                    <Drawer placement="right" onClose={onClose} visible={visible} closable={false} width="358px" >
                        <div className="header-drawer">
                            <h5>جستجوی محصولات</h5>
                            <SearchOutlined style={{ fontSize: 25 }} className="search-icon" />
                        </div>
































                                        {/* <ul className="nav nav-pills mb-3 mt-3 nav-tab-ul" id="pills-tab" role="tablist">
                            <li className="nav-item nav-tab-li">
                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">منو</a>
                            </li>
                            <li className="nav-item nav-tab-li">
                                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">دسته بندی ها</a>
                            </li>

                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">aaaa...</div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">.bb..</div>
                        </div> */}














                                        {/* 
                    <Tabs onChange={onChange} type="card" size="large" centered={true}>
                        <TabPane className="milad" tab="منو" key="1" >
                            <h5 className="font-weight-bold text-right mr-3"> ست و پکیج های ویژه</h5>
                            <Collapse className="bg-white"  onChange={onChange}  expandIconPosition="left" bordered={false} >
                          
                                <Panel header="لباس ورزشی مردانه" key="1" style={{ fontSize: 20 , fontWeight: "bold" }}  >
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="لباس ورزشی زنانه" key="2" style={{ fontSize: 20 , fontWeight: "bold"}} >
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="لوازم ورزشی" key="3" style={{ fontSize: 20 , fontWeight: "bold"}} >
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="قمقمه و شیکر ورزشی" key="4" style={{ fontSize: 20 , fontWeight: "bold"}} >
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="اکسسوری ورزشی" key="5" style={{ fontSize: 20 , fontWeight: "bold"}} >
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="تغذیه رژیمی" key="6" style={{ fontSize: 20 , fontWeight: "bold"}} >
                                    <p>{text}</p>
                                </Panel>
                            </Collapse>
                            <h5 className="font-weight-bold text-right mr-4">هدیه</h5>
                            <h5 className="font-weight-bold text-right mr-4">صفحه اصلی</h5>
                            <h5 className="font-weight-bold text-right mr-3">همه محصولات</h5>
                            <h5 className="font-weight-bold text-right mr-3">مجله بدنسازی </h5>
                            <h5 className="font-weight-bold text-right mr-3">پیگیری ارسال سفارش</h5>
                            <h5 className="font-weight-bold text-right mr-3">تماس با ما</h5>
                            <h5 className="font-weight-bold text-right mr-3">همکاری با ما</h5>
                            <h5 className="font-weight-bold text-right mr-3">حریم خصوصی</h5>
                            <h5 className="font-weight-bold text-right mr-3">قوانین و مقررات</h5>

                        </TabPane>
                        <TabPane tab="دسته بندی ها" key="2">
                            Content of Tab Pane 2
                        </TabPane>

                    </Tabs> */}

                                    </Drawer>
                                </div>


                                <div className="navbar-logo">
                                    <img src="Gisha-Logotype-200.png" width="150" height="40" />
                                </div>

                                <div className="navbar-caption">
                                    <a href="#">پیگیری سفارش </a>
                                    <a href="#">گیشا مگ </a>
                                </div>
                        </div>
                    </Fragment>

                    );
}

                    export default Navbar;






