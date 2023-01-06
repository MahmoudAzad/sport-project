import React from 'react';
import { Link } from 'react-router-dom';
import { Affix } from 'antd';
import { DownOutlined, LeftOutlined } from '@ant-design/icons';

const SubMenu = () => {

  return (

    <Affix offsetTop={0}>

      <header className="submenu-container">
        <nav className="submenu-nav container">
          <ul className="submenu-items">

            <li className="submenu-title"><a className="title-link" href="">همه محصولات</a></li>

            <li className="submenu-title"><a className="title-link" href=""> لباس ورزشی مردانه <DownOutlined style={{ fontSize: "10px" }} /></a>
              <div className="fw-dropdown ">
                <div className="dropdown-img">
                  <img src="/images\dropdown-menu\shirt-sport.jpg" width="600px" height="300px" alt="لباس ورزشی مردانه" />
                </div>

                <ul>
                  <li><Link to={"/showProducts/" + "mens-slippers"}>دمپایی اسپرت مردانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "mens-shoes"}>کفش ورزشی مردانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>
                <ul>
                  <li><Link to={"/showProducts/" + "mens-legs"}>لگ ورزشی مردانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "mens-sport-shorts"}>شلوارک ورزشی مردانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "mens-pants"}>شلوار مردانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "mens-set-sports"}>ست ورزشی مردانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>
                <ul>
                  <li><Link to={"/showProducts/" + "ring-sleeves"}>رکابی بدنسازی مردانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "tshirts"}>تیشرت و بلوز مردانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "sweatshirts"}>هودی و سوییشرت مردانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "mens-socks"}>جوراب ورزشی مردانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>

              </div>
            </li>
            <li className="submenu-title"><a className="title-link" href=""> لباس ورزشی زنانه<DownOutlined style={{ fontSize: "10px" }} /></a>
              <div className="fw-dropdown">
                <div className="dropdown-img">
                  <img src="/images\dropdown-menu\www.jpg" width="500px" height="300px" alt="لباس ورزشی زنانه" />
                </div>

                <ul>
                  <li><Link to={"/showProducts/" + "women-set-sports"}>ست ورزشی زنانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "mens-socks"}>جوراب ورزشی زنانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "mens-legs"}>لگ ورزشی زنانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>
                <ul>
                  <li><Link to={"/showProducts/" + "women-shorts"}>شلوارک ورزشی زنانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "mens-pants"}>شلوار ورزشی زنانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "women-skirts"}>دامن ورزشی زنانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>
                <ul>

                  <li><Link to={"/showProducts/" + "women-busts"}>نیم تنه ورزشی زنانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "tshirts"}>تیشرت ورزشی زنانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "sweatshirts"}>هودی و سوییشرت زنانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>
              </div>
            </li>

            <li className="submenu-title"><a className="title-link" href=""> لوازم ورزشی <DownOutlined style={{ fontSize: "10px" }} /></a>
              <div className="fw-dropdown">

                <div className="dropdown-img">
                  <img src="/images\dropdown-menu\sport.jpg" width="500px" height="300px" alt="لوازم ورزشی" />
                </div>

                <ul>
                <li><a href="">وزنه و دمبل</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">جاپودر و جاقرصی</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href=""> ظرف غذا</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>
                <ul>
                  <li><Link to={"/showProducts/" + "fitness-knee-straps"}>زانوبند بدنسازی</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "bodybuilding-belts"}>کمربند بدنسازی</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "sport-bags"}>کیف و ساک ورزشی</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>
                <ul>
                  <li><Link to={"/showProducts/" + "fitness-elastic-exercisebands"}>کش بدنسازی</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "bodybuilding-gloves"}>دستکش بدنسازی</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "massagers"}>ماساژوز</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>

              </div>
            </li>

            <li className="submenu-title"><a className="title-link" href=""> قمقمه و شیکر<DownOutlined style={{ fontSize: "10px" }} /></a>
              <div className="fw-dropdown">
                <div className="dropdown-img">
                  <img src="/images\dropdown-menu\shaker.jpg" width="500px" height="300px" alt="قمقمه شیکر" />
                </div>

                <ul>
                  <li><a href="">شیکر یک تکه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">شیکر دو تکه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">شیکر سه تکه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>

                </ul>
                <ul>
                  <li><a href="">تمام شیکرهای بدنسازی</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">شیکر برقی ورزشی</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">شیکر استیل</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">شیکر دو مخزنه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>

                </ul>
                <ul className="dropdown-column-list">
                  <li><a href="">تمام محصولات این دسته</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">   جاک واتر</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /> </li>
                  <li><a href="">قمقمه ورزشی   </a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px", marginLeft: "3px" }} /></li>
                  <li><a href="">فلاسک ورزشی</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /> </li>

                </ul>

              </div>
            </li>

            <li className="submenu-title"><a className="title-link" href="">اکسسوری<DownOutlined style={{ fontSize: "10px" }} /></a>
              <div className="fw-dropdown">
                <div className="dropdown-img">
                  <img src="/images\dropdown-menu\bag-sport.jpg" width="500px" height="300px" alt="اکسسوری" />
                </div>

                <ul>
                  <li><a href="">جاکلیدی ورزشی</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">اکشن فیگور</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">سایر اکسسوری</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>

                </ul>
                <ul>
                  <li><a href="">کلاه ورزشی اسپرت</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">اسکارف و دستمال سر</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">گردنبند</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>

                </ul>
                <ul className="dropdown-column-list">
                  <li><a href="">تمام محصولات این دسته</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">جوراب ورزشی مردانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">جوراب ورزشی زنانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">ساق دست ورزشی</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>

                </ul>

              </div>
            </li>
            <li className="submenu-title"><a className="title-link" href="">ست و پکیج</a></li>

            <li className="submenu-title"><a className="title-link" href=""> تغذیه رژیمی<DownOutlined style={{ fontSize: "10px" }} /></a>
              <div className="fw-dropdown">
                <div className="dropdown-img">
                  <img src="/images\dropdown-menu\food.jpg" width="500px" height="300px" alt="تغذیه رژیمی" />
                </div>

                <ul>
                  <li><a href="">شکلات پروتیین بار</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">رایس کیک</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>
                <ul className="dropdown-column-list">
                  <li><a href="">تمام محصولات این دسته</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">گرانولا</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>

                </ul>

              </div>
            </li>

            <li className="submenu-title"><a className="title-link" href="">هدیه</a></li>

          </ul>
        </nav>
      </header>
    </Affix>



  );
}

export default SubMenu;
