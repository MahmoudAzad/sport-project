import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="d-lg-none d-flex justify-content-around text-center position-fixed bottom-0 bg-white w-100 py-2 border-top border-2">
      <Link to="/" className="text-black text-decoration-none">
        <i class="bi bi-house-door col h3" />
        <p>خانه</p>
      </Link>

      <Link to="/contactus" className="text-black text-decoration-none">
        <i class="bi bi-telephone mb-1 col h3" />
        <p>تماس با ما</p>
      </Link>

      <Link to="/" className="text-black text-decoration-none">
        <i class="bi bi-shop mb-1 col h3" />
        <p>فروشگاه</p>
      </Link>

      <Link to="/login" className="text-black text-decoration-none">
        <i class="bi bi-person mb-1 col h3" />
        <p>حساب کاربری من</p>
      </Link>

      <Link to="/cart" className="text-black text-decoration-none">
        <i class="bi bi-bag-check mb-1 col h3" />
        <p>سبد خرید</p>
      </Link>
    </div>
  );
};

export default MobileMenu;
