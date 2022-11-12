import { Button, Tooltip } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import Pagination from '../Common/paginition';
import { Paginate } from '../Utils/paginate';
import { SearchOutlined, ShoppingCartOutlined, UnorderedListOutlined } from '@ant-design/icons';

const ShowProductsHelper = (props) => {
    console.log("props =>" , props.child);
    const { endPath } = useParams();
    console.log("End path useParams =>", endPath);

    // const params = useLocation();
    // console.log("params ShowProHelp =>" , params.state.proPathName);

    const [products, setProducts] = useState("");

    useEffect(() => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Request-Headers", "*");
        myHeaders.append("Access-Control-Request-Method", "*");
        myHeaders.append("accept", "*/*");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://localhost:1337/${endPath}`, requestOptions)
            .then(response => response.json())
            .then(result => { setProducts(result) });
    }, [endPath])


    const navigate = useNavigate();

    const [perPage, setPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = page => {
        setCurrentPage(page);
    }

    const productsHelperPaginate = Paginate(products, currentPage, perPage);



    function handleShowDetailProduct(item) {
        const product = item
        navigate("/showDetailProductsHelper", {
            state: {
                product,
            },
        });

    }

    if (!products) { return <p>please wait...</p> }


    console.log("get products =>", products);
    return (
        <Fragment>
            <div className=''>
                <div className="show-products-helper-container row justify-content-center text-center">
                    {productsHelperPaginate.map((item) => (
                        <div key={item.id} className="item col-md-3 m-5 col-6 ">

                            <div className="images" >
                                <div >
                                    <img className="org-img-showpro-helper" alt="example" width="250px" src={`http://localhost:1337${item.images[0].url}`} />
                                    <div class="overlay">
                                        <img className="hover-img-showpro-helper" onClick={() => handleShowDetailProduct(item)} alt="example" width="250px" height="250px" src={`http://localhost:1337${item.images[1].url}`} />
                                    </div>

                                    <button class="btn btn-success col-12 container" type="button" data-hover="hover"><span>انتخاب گزینه ها</span></button>

                                </div>
                            </div>

                            <h6 className="title " onClick={() => handleShowDetailProduct(item)}>
                                {item.title}
                            </h6>
                            <h6 className="price">
                                {item.price}
                            </h6>
                        </div>
                    ))}
                </div>
                <Pagination totalProducts={products.length} currentPage={currentPage} perPage={perPage} onPageChange={handlePageChange} />
            </div>
        </Fragment>

    );
}

export default ShowProductsHelper;







// <div className='mah'>
// <div class="product">
//     <div class="imgbox"> <img src="/images\تیشرت مردانه\a1.jpg" /> </div>
//     <div class="specifies">
//         <button class="btn btn-success">Buy Now</button>
//     </div>
// </div>
// <h4 className='text-right'>modal</h4>
// </div>