import React from "react";
import { Link } from "react-router-dom";

const SubMenu = () => {
  return (
    <div>
      <header className="d-none d-lg-block bg-light-gray">
        <nav className="container">
          <ul className="submenu-items d-flex justify-content-around align-items-center ">
            <li className="submenu-title h-100 list-unstyled">
              <a className="title-link" href="">
                همه محصولات
              </a>
            </li>

            <li className="submenu-title list-unstyled">
              <a className="title-link" href="">
                {" "}
                لباس ورزشی مردانه <i class="bi bi-chevron-down " />
              </a>
              <div className="fw-dropdown ">
                <div className="dropdown-img">
                  <img
                    src="/images\dropdown-menu\shirt-sport.jpg"
                    width="600px"
                    height="300px"
                    alt="لباس ورزشی مردانه"
                  />
                </div>

                <ul>
                  <li>
                    <Link to={"/products/" + "mens-slippers"}>
                      دمپایی اسپرت مردانه
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "mens-shoes"}>
                      کفش ورزشی مردانه
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to={"/products/" + "mens-legs"}>لگ ورزشی مردانه</Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "mens-sport-shorts"}>
                      شلوارک ورزشی مردانه
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "mens-pants"}>شلوار مردانه</Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "mens-set-sports"}>
                      ست ورزشی مردانه
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to={"/products/" + "ring-sleeves"}>
                      رکابی بدنسازی مردانه
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "tshirts"}>
                      تیشرت و بلوز مردانه
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "sweatshirts"}>
                      هودی و سوییشرت مردانه
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "mens-socks"}>
                      جوراب ورزشی مردانه
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                </ul>
              </div>
            </li>
            <li className="submenu-title list-unstyled">
              <a className="title-link" href="">
                {" "}
                لباس ورزشی زنانه
                <i class="bi bi-chevron-down" />
              </a>
              <div className="fw-dropdown">
                <div className="dropdown-img">
                  <img
                    src="/images\dropdown-menu\www.jpg"
                    width="500px"
                    height="300px"
                    alt="لباس ورزشی زنانه"
                  />
                </div>

                <ul>
                  <li>
                    <Link to={"/products/" + "women-set-sports"}>
                      ست ورزشی زنانه
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "mens-socks"}>
                      جوراب ورزشی زنانه
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "mens-legs"}>لگ ورزشی زنانه</Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to={"/products/" + "women-shorts"}>
                      شلوارک ورزشی زنانه
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "mens-pants"}>
                      شلوار ورزشی زنانه
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "women-skirts"}>
                      دامن ورزشی زنانه
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to={"/products/" + "women-busts"}>
                      نیم تنه ورزشی زنانه
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "tshirts"}>تیشرت ورزشی زنانه</Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "sweatshirts"}>
                      هودی و سوییشرت زنانه
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                </ul>
              </div>
            </li>

            <li className="submenu-title list-unstyled">
              <a className="title-link" href="">
                {" "}
                لوازم ورزشی <i class="bi bi-chevron-down" />
              </a>
              <div className="fw-dropdown">
                <div className="dropdown-img">
                  <img
                    src="/images\dropdown-menu\sport.jpg"
                    width="500px"
                    height="300px"
                    alt="لوازم ورزشی"
                  />
                </div>

                <ul>
                  <li>
                    <a href="">وزنه و دمبل</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">جاپودر و جاقرصی</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href=""> ظرف غذا</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to={"/products/" + "fitness-knee-straps"}>
                      زانوبند بدنسازی
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "bodybuilding-belts"}>
                      کمربند بدنسازی
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "sport-bags"}>
                      کیف و ساک ورزشی
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to={"/products/" + "fitness-elastic-exercisebands"}>
                      کش بدنسازی
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "bodybuilding-gloves"}>
                      دستکش بدنسازی
                    </Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <Link to={"/products/" + "massagers"}>ماساژوز</Link>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                </ul>
              </div>
            </li>

            <li className="submenu-title list-unstyled">
              <a className="title-link" href="">
                {" "}
                قمقمه و شیکر
                <i class="bi bi-chevron-down" />
              </a>
              <div className="fw-dropdown">
                <div className="dropdown-img">
                  <img
                    src="/images\dropdown-menu\shaker.jpg"
                    width="500px"
                    height="300px"
                    alt="قمقمه شیکر"
                  />
                </div>

                <ul>
                  <li>
                    <a href="">شیکر یک تکه</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">شیکر دو تکه</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">شیکر سه تکه</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">تمام شیکرهای بدنسازی</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">شیکر برقی ورزشی</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">شیکر استیل</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">شیکر دو مخزنه</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                </ul>
                <ul className="dropdown-column-list">
                  <li>
                    <a href="">تمام محصولات این دسته</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href=""> جاک واتر</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">قمقمه ورزشی </a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">فلاسک ورزشی</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />{" "}
                  </li>
                </ul>
              </div>
            </li>

            <li className="submenu-title list-unstyled">
              <a className="title-link" href="">
                اکسسوری
                <i class="bi bi-chevron-down" />
              </a>
              <div className="fw-dropdown">
                <div className="dropdown-img">
                  <img
                    src="/images\dropdown-menu\bag-sport.jpg"
                    width="500px"
                    height="300px"
                    alt="اکسسوری"
                  />
                </div>

                <ul>
                  <li>
                    <a href="">جاکلیدی ورزشی</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">اکشن فیگور</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">سایر اکسسوری</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">کلاه ورزشی اسپرت</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">اسکارف و دستمال سر</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">گردنبند</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                </ul>
                <ul className="dropdown-column-list">
                  <li>
                    <a href="">تمام محصولات این دسته</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">جوراب ورزشی مردانه</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">جوراب ورزشی زنانه</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">ساق دست ورزشی</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                </ul>
              </div>
            </li>
            <li className="submenu-title list-unstyled">
              <a className="title-link" href="">
                ست و پکیج
              </a>
            </li>

            <li className="submenu-title list-unstyled">
              <a className="title-link" href="">
                {" "}
                تغذیه رژیمی
                <i class="bi bi-chevron-down" />
              </a>
              <div className="fw-dropdown">
                <div className="dropdown-img">
                  <img
                    src="/images\dropdown-menu\food.jpg"
                    width="500px"
                    height="300px"
                    alt="تغذیه رژیمی"
                  />
                </div>

                <ul>
                  <li>
                    <a href="">شکلات پروتیین بار</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">رایس کیک</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                </ul>
                <ul className="dropdown-column-list">
                  <li>
                    <a href="">تمام محصولات این دسته</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                  <li>
                    <a href="">گرانولا</a>
                    <i
                      class="bi bi-chevron-left"
                      style={{ fontSize: "13px", marginRight: "3px" }}
                    />
                  </li>
                </ul>
              </div>
            </li>

            <li className="submenu-title list-unstyled">
              <a className="title-link" href="">
                هدیه
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default SubMenu;
