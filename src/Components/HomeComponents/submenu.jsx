import { DownOutlined, LeftOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import React from 'react';



const SubMenu = () => {
  return (

    <header className="submenu-container">
      <nav className="submenu-nav container">
        <ul className="submenu-items">

          <li className="submenu-title"><a className="title-link" href="">همه محصولات</a></li>

          <li className="submenu-title"><a className="title-link" href=""><DownOutlined style={{ fontSize: "10px" }} /> لباس ورزشی مردانه </a>
            <div class="fw-dropdown ">
              <ul>
                <li><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /><a href="">تمام محصولات این دسته</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />رکابی بدنسازی مردانه</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />تیشرت و بلوز مردانه</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />هودی و سوییشرت مردانه</a></li>
              </ul>
              <ul>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />لگ ورزشی مردانه</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />شلوارک ورزشی مردانه</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />شلوار مردانه</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />ست ورزشی مردانه</a></li>
              </ul>
              <ul>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />نیم لگ و کشاله بند  مردانه</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />کفش ورزشی مردانه</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />جوراب ورزشی مردانه</a></li>
              </ul>

              <div className="dropdown-img">
                <img src="/images\dropdown-menu\shirt-sport.jpg" width="600px" height="300px" alt="لباس ورزشی مردانه" />
              </div>

            </div>
          </li>
          <li className="submenu-title"><a className="title-link" href=""><DownOutlined style={{ fontSize: "10px" }} /> لباس ورزشی زنانه</a>
            <div class="fw-dropdown">
              <ul>
                <li><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /><a href="">تمام محصولات این دسته</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />تاپ و نیم تنه ورزشی زنانه</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />تیشرت ورزشی زنانه</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />هودی و سوییشرت زنانه</a></li>
              </ul>
              <ul>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />لگ ورزشی زنانه</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />شلوارک ورزشی زنانه</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />شلوار زنانه</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />دامن ورزشی مردانه</a></li>
              </ul>
              <ul>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />ست ورزشی زنانه</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />جوراب ورزشی زنانه</a></li>
              </ul>

              <div className="dropdown-img">
                <img src="/images\dropdown-menu\www.jpg" width="500px" height="300px" alt="لباس ورزشی زنانه" />
              </div>
            </div>
          </li>

          <li className="submenu-title"><a className="title-link" href=""><DownOutlined style={{ fontSize: "10px" }} /> لوازم ورزشی</a>
            <div class="fw-dropdown">
              <ul>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />تمام محصولات</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />کش بدنسازی</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />دستکش بدنسازی</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />مچ بند و بند لیفت</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />ماساژوز</a></li>
              </ul>
              <ul>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />زانوبند بدنسازی</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />کمربند بدنسازی</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />کیف و ساک ورزشی</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />کوله و شوزبک ورزشی</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />وزنه و دمبل</a></li>
              </ul>
              <ul>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />  لوازم بدنسازی </a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />ظرف غذا</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />جاپودر و جاقرصی</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />لوازم کاربردی ورزشی</a></li>
              </ul>

              <div className="dropdown-img">
                <img src="/images\dropdown-menu\sport.jpg" width="500px" height="300px" alt="sport-shirt-mens" />
              </div>
            </div>
          </li>

          <li className="submenu-title"><a className="title-link" href=""><DownOutlined style={{ fontSize: "10px" }} /> قمقمه و شیکر</a>
            <div class="fw-dropdown">
              <ul class="dropdown-column-list">
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />تمام محصولات این دسته</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />    جاک واتر</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" , marginLeft: "3px" }} />قمقمه ورزشی   </a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} /> فلاسک ورزشی</a></li>

              </ul>
              <ul>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />تمام شیکرهای بدنسازی</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />شیکر برقی ورزشی</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />شیکر استیل</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />شیکر دو مخزنه</a></li>

              </ul>
              <ul>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />شیکر یک تکه</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />شیکر دو تکه</a></li>
                <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />شیکر سه تکه</a></li>

              </ul>

              <div className="dropdown-img">
                <img src="/images\dropdown-menu\shaker.jpg" width="500px" height="300px" alt="sport-shirt-mens" />
              </div>

            </div>
          </li>

          <li className="submenu-title"><a className="title-link" href=""><DownOutlined style={{ fontSize: "10px" }} /> اکسسوری</a>
            <div class="fw-dropdown">
              <ul class="dropdown-column-list">
              <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />تمام محصولات این دسته</a></li>
              <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />جوراب ورزشی مردانه</a></li>
              <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />جوراب ورزشی زنانه</a></li>
              <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />ساق دست ورزشی</a></li>

              </ul>
              <ul>
              <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />کلاه ورزشی اسپرت</a></li>
              <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />اسکارف و دستمال سر</a></li>
              <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />گردنبند</a></li>

              </ul>
              <ul>
              <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />جاکلیدی ورزشی</a></li>
              <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />اکشن فیگور</a></li>
              <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />سایر اکسسوری</a></li>

              </ul>
              <div className="dropdown-img">
                <img src="/images\dropdown-menu\bag-sport.jpg" width="500px" height="300px" alt="sport-shirt-mens" />
              </div>
            </div>
          </li>
          <li className="submenu-title"><a className="title-link" href="">ست و پکیج</a></li>

          <li className="submenu-title"><a className="title-link" href=""><DownOutlined style={{ fontSize: "10px" }} /> تغذیه رژیمی</a>
            <div class="fw-dropdown">
              <ul class="dropdown-column-list">
              <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />تمام محصولات این دسته</a></li>
              <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />گرانولا</a></li>

              </ul>
              <ul>
              <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />شکلات پروتیین بار</a></li>
              <li><a href=""><LeftOutlined style={{ fontSize: "13px", marginRight: "3px" }} />رایس کیک</a></li>
              </ul>
              <div className="dropdown-img">
                <img src="/images\dropdown-menu\food.jpg" width="500px" height="300px" alt="sport-shirt-mens" />
              </div>
            </div>
          </li>

          <li className="submenu-title"><a className="title-link" href="">هدیه</a></li>

        </ul>
      </nav>
    </header>

  );
}

export default SubMenu;