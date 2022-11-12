import { DownOutlined, LeftOutlined } from '@ant-design/icons';
import { Affix } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SubMenu = () => {

  return (

    <Affix offsetTop={0}>

      <header className="submenu-container">
        <nav className="submenu-nav container">
          <ul className="submenu-items">

            <li className="submenu-title"><a className="title-link" href="">همه محصولات</a></li>

            <li className="submenu-title"><a className="title-link" href=""> لباس ورزشی مردانه <DownOutlined style={{ fontSize: "10px" }} /></a>
              <div class="fw-dropdown ">
                <div className="dropdown-img">
                  <img src="/images\dropdown-menu\shirt-sport.jpg" width="600px" height="300px" alt="لباس ورزشی مردانه" />
                </div>

                <ul>
                  <li><a href="">نیم لگ و کشاله بند  مردانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">کفش ورزشی مردانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts"}>جوراب ورزشی مردانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>
                <ul>
                  <li><Link  to={"/showProducts/" + "mens-legs"}>لگ ورزشی مردانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "mens-sport-shorts"}>شلوارک ورزشی مردانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">شلوار مردانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">ست ورزشی مردانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>
                <ul>
                  <li><a href="">تمام محصولات این دسته</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "ring-sleeves"}>رکابی بدنسازی مردانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "tshirts"}>تیشرت و بلوز مردانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><Link to={"/showProducts/" + "sweatshirts"}>هودی و سوییشرت مردانه</Link><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>

              </div>
            </li>
            <li className="submenu-title"><a className="title-link" href=""> لباس ورزشی زنانه<DownOutlined style={{ fontSize: "10px" }} /></a>
              <div class="fw-dropdown">
                <div className="dropdown-img">
                  <img src="/images\dropdown-menu\www.jpg" width="500px" height="300px" alt="لباس ورزشی زنانه" />
                </div>

                <ul>
                  <li><a href="">ست ورزشی زنانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">جوراب ورزشی زنانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>
                <ul>
                  <li><a href="">لگ ورزشی زنانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">شلوارک ورزشی زنانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">شلوار زنانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">دامن ورزشی مردانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>
                <ul>

                  <li><a href="">تمام محصولات این دسته</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">تاپ و نیم تنه ورزشی زنانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">تیشرت ورزشی زنانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">هودی و سوییشرت زنانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>
              </div>
            </li>

            <li className="submenu-title"><a className="title-link" href=""> لوازم ورزشی <DownOutlined style={{ fontSize: "10px" }} /></a>
              <div class="fw-dropdown">

                <div className="dropdown-img">
                  <img src="/images\dropdown-menu\sport.jpg" width="500px" height="300px" alt="sport-shirt-mens" />
                </div>

                <ul>
                  <li><a href="">  لوازم بدنسازی </a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href=""> ظرف غذا</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">جاپودر و جاقرصی</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">لوازم کاربردی ورزشی</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>
                <ul>
                  <li><a href="">زانوبند بدنسازی</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">کمربند بدنسازی</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">کیف و ساک ورزشی</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">کوله و شوزبک ورزشی</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">وزنه و دمبل</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>
                <ul>
                  <li><a href="">تمام محصولات</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">کش بدنسازی</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">دستکش بدنسازی</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">مچ بند و بند لیفت</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">ماساژوز</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>

              </div>
            </li>

            <li className="submenu-title"><a className="title-link" href=""> قمقمه و شیکر<DownOutlined style={{ fontSize: "10px" }} /></a>
              <div class="fw-dropdown">
                <div className="dropdown-img">
                  <img src="/images\dropdown-menu\shaker.jpg" width="500px" height="300px" alt="sport-shirt-mens" />
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
                <ul class="dropdown-column-list">
                  <li><a href="">تمام محصولات این دسته</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">   جاک واتر</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /> </li>
                  <li><a href="">قمقمه ورزشی   </a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px", marginLeft: "3px" }} /></li>
                  <li><a href="">فلاسک ورزشی</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /> </li>

                </ul>

              </div>
            </li>

            <li className="submenu-title"><a className="title-link" href="">اکسسوری<DownOutlined style={{ fontSize: "10px" }} /></a>
              <div class="fw-dropdown">
                <div className="dropdown-img">
                  <img src="/images\dropdown-menu\bag-sport.jpg" width="500px" height="300px" alt="sport-shirt-mens" />
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
                <ul class="dropdown-column-list">
                  <li><a href="">تمام محصولات این دسته</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">جوراب ورزشی مردانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">جوراب ورزشی زنانه</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">ساق دست ورزشی</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>

                </ul>

              </div>
            </li>
            <li className="submenu-title"><a className="title-link" href="">ست و پکیج</a></li>

            <li className="submenu-title"><a className="title-link" href=""> تغذیه رژیمی<DownOutlined style={{ fontSize: "10px" }} /></a>
              <div class="fw-dropdown">
                <div className="dropdown-img">
                  <img src="/images\dropdown-menu\food.jpg" width="500px" height="300px" alt="sport-shirt-mens" />
                </div>

                <ul>
                  <li><a href="">شکلات پروتیین بار</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                  <li><a href="">رایس کیک</a><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /></li>
                </ul>
                <ul class="dropdown-column-list">
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
