import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Pagination from "../Common/Paginition";
import { Paginate } from "../Function/Paginate";
import Loading from "../Common/Loading";
import { getProducts } from "../../services/Services";
import { Helmet } from "react-helmet";

const ProductsCards = ({ endPath }) => {
  console.log("endPath proCarts => ", endPath);

  const [products, setProducts] = useState("");
  const navigate = useNavigate();

  const [perPage, setPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const productsHelperPaginate = Paginate(products, currentPage, perPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProducts(endPath);
        setProducts(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [endPath]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  function handleShowDetailProduct(item) {
    const product = item;
    navigate("/product", {
      state: {
        product,
      },
    });
  }

  if (!products) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>مشخصات,قیمت,انواع لباس</title>
      </Helmet>
      <div className="row justify-content-center  text-center">
        {productsHelperPaginate.map((item) => (
          <div
            key={item.id}
            className="productsCards-item align-items-center col-md-3 m-5 col-6 "
          >
            <div className="images">
              <div>
                <img
                  className="org-img-showpro-helper"
                  alt="تصاویر محصولات"
                  width="250px"
                  src={`http://localhost:1337${item.images[0].url}`}
                />
                <div className="overlay">
                  <img
                    className="hover-img-showpro-helper"
                    onClick={() => handleShowDetailProduct(item)}
                    alt="تصاویر محصولات"
                    width="250px"
                    height="250px"
                    src={`http://localhost:1337${item.images[1].url}`}
                  />
                </div>

                <button
                  className="btn btn-success col-12 container"
                  type="button"
                  data-hover="hover"
                >
                  <span>انتخاب گزینه ها</span>
                </button>
              </div>
            </div>

            <h6
              className="title "
              onClick={() => handleShowDetailProduct(item)}
            >
              {item.title}
            </h6>
            <h6 className="price">{item.price}</h6>
          </div>
        ))}
      </div>
      <Pagination
        totalProducts={products.length}
        currentPage={currentPage}
        perPage={perPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ProductsCards;
