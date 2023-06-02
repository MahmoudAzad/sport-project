import React from "react";
import { Link } from "react-router-dom";

const MenuDrawer = () => {
  return (
    <>
      <a
        data-bs-toggle="offcanvas"
        href="#offcanvasMenu"
        role="button"
        aria-controls="offcanvasMenu"
      >
        <i class="bi bi-list subNav-icon cursor-pointer me-2 h5 text-black" />
      </a>

      <div
        class="offcanvas offcanvas-end"
        style={{ width: "350px" }}
        tabindex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <input
            type="text"
            placeholder="جستجوی محصولات"
            style={{ border: "none", outline: "none", fontWeight: "bold" }}
          />
          <i class="bi bi-search" />
        </div>
        <div class="overflow-auto">
          <ul class="nav nav-pills mb-3 p-0 " id="pills-tab" role="tablist">
            <li class="bg-light-gray  nav-item col-6 " role="presentation">
              <div
                class="nav-link active py-3 col-12"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                دسته بندی ها
              </div>
            </li>
            <li class="bg-light-gray  nav-item col-6" role="presentation">
              <div
                class="nav-link py-3 col-12"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                منو
              </div>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <p className="text-end pe-3 py-3">ست و پکیج های ویژه</p>

              <p className="text-black text-end">
                <div className="d-flex justify-content-between align-items-center border-top border-bottom ">
                  <p className=" pe-3 text-decoration-none">
                    لباس ورزشی مردانه
                  </p>
                  <i
                    data-bs-toggle="collapse"
                    href="#collapseMenswear"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseMenswear"
                    class="bi bi-caret-left border-end py-3 px-3"
                  />
                </div>
              </p>
              <div class="collapse text-end" id="collapseMenswear">
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom">تیشرت ورزشی مردانه</p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom">
                    بلوز و استرج ورزشی مردانه
                  </p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom">
                    هودی و سوییشرت مردانه
                  </p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom">شلوارک ورزشی مردانه</p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom">لگ ورزشی مردانه</p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom">
                    نیم لگ و کشاله بند ورزشی مردانه
                  </p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom"> شلوار ورزشی مردانه</p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom"> ست ورزشی مردانه</p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom"> مایو مردانه</p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom"> کفش ورزشی مردانه</p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom"> دمپایی اسپرت</p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom"> جوراب ورزشی مردانه</p>
                </Link>
              </div>

              <p className="text-black text-end">
                <div className="d-flex justify-content-between align-items-center border-top border-bottom ">
                  <p className=" pe-3 text-decoration-none">لباس ورزشی زنانه</p>
                  <i
                    data-bs-toggle="collapse"
                    href="#collapseWomenwear"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseWomenwear"
                    class="bi bi-caret-left border-end py-3 px-3"
                  />
                </div>
              </p>
              <div class="collapse text-end" id="collapseWomenwear">
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom">
                    {" "}
                    نیم تنه ورزشی زنانه
                  </p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom">
                    بلوز و استرج ورزشی مردانه
                  </p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom">
                    هودی و سوییشرت مردانه
                  </p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom">شلوارک ورزشی مردانه</p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom">لگ ورزشی مردانه</p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom">
                    نیم لگ و کشاله بند ورزشی مردانه
                  </p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom"> شلوار ورزشی مردانه</p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom"> ست ورزشی مردانه</p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom"> مایو مردانه</p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom"> کفش ورزشی مردانه</p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom"> دمپایی اسپرت</p>
                </Link>
                <Link to="/cart" className=" text-black text-decoration-none">
                  <p className="py-3 pe-3 border-bottom"> جوراب ورزشی مردانه</p>
                </Link>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              ssss
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuDrawer;
