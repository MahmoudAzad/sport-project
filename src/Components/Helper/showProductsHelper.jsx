import React, { Fragment, useState } from 'react';
import { Button, Card, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import ShowDetailProductsHelper from './showDetailProductHelper';
import { useNavigate } from "react-router-dom";
import { Paginate } from '../Utils/paginate';
import Pagination from '../Common/paginition';

const { Meta } = Card;

const ShowProductsHelper = (products) => {


  console.log("products in HELPER =->", products.products);
  const navigate = useNavigate();

  const [perPage, setPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = page => {
    setCurrentPage(page);
  }

  const productsHelperPaginate = Paginate(products.products, currentPage, perPage);
  console.log("productsHelperPaginate =>" , productsHelperPaginate);

  // const indexProducts = Paginate(ringSleeves , 1 , 5)
  // console.log("INDEX PRODUCTS =>" , indexProducts);






  function handleShowDetailProduct(item) {
    const product = item
    navigate("/showDetailProductsHelper", {
      state: {
        product,
      },
    });

  }

  return (
    <Fragment>

    <div className="show-products-helper-container container">
      {productsHelperPaginate.map((item) => (
        <div key={item.id} className="show-products-helper-item">
          {/* <div>
            <img className="org-img-showpro-helper" alt="example" width="250px" height="250px" src={`http://localhost:1337${item.images[0].url}`} />
            <img className="hover-img-showpro-helper" alt="example" width="250px" height="250px" src={`http://localhost:1337${item.images[1].url}`} />
          </div> */}

          <div className="show-products-helper-images mr-4  " >
            <div  >

              <img className="org-img-showpro-helper" alt="example" width="250px" height="250px" src={`http://localhost:1337${item.images[0].url}`} />
              <div class="overlay">
                <div className="milad">
                  <img className="hover-img-showpro-helper" onClick={() => handleShowDetailProduct(item)} alt="example" width="250px" height="250px" src={`http://localhost:1337${item.images[1].url}`} />
                  <Tooltip placement="rightTop" mouseLeaveDelay={0} autoAdjustOverflow={false} title={"text"}>
                    <Button >
                      RT
                    </Button>
                  </Tooltip>
                  <Tooltip placement="rightTop" mouseLeaveDelay={0} autoAdjustOverflow={false} title={"222"}>
                    <Button>2</Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>

          <h6 className="show-products-helper-title" onClick={() => handleShowDetailProduct(item)}>
            {item.title}
          </h6>

          <h6 className="show-products-helper-price">
            {item.price}
          </h6>

        </div>
      ))}
    </div>
      <Pagination totalProducts={products.products.length} currentPage={currentPage} perPage={perPage} onPageChange={handlePageChange} />
    </Fragment>

  );
}

export default ShowProductsHelper;
