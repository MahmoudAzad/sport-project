import React from "react";
import { range } from "lodash";

const Pagination = ({ totalProducts, currentPage, perPage, onPageChange }) => {
  const pageCount = Math.ceil(totalProducts / perPage);
  if (pageCount === 1) return null;

  const pages = range(1, pageCount + 1);

  return (
    // <Pagination defaultCurrent={1} total={100} />

    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              style={{ cursor: "pointer" }}
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
