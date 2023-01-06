import { ShoppingCartOutlined, CloseOutlined, HeartOutlined } from '@ant-design/icons';
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeWishList } from '../Redux/usefulActions';

const WishList = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleShowDetailProduct(item) {
        const product = item
        navigate("/showDetailProductsHelper", {
            state: {
                product,
            },
        });
    }

    return (
        <div>
            {props.wishList.length > 0 ? (
                <div className='container mt-5'>
                <h5 className='text-right border-bottom pb-3'>محصولات علاقه مندی شما</h5>
                    <div className="wishList-container row ">
                        {props.wishList.map((item) => (
                            <div key={item.id} className="item col-md-4  col-6 mt-4">
                                <div className="wishlist-top-items">
                                    <p onClick={() => dispatch(removeWishList(item))} style={{ fontSize: "15px" }}><CloseOutlined style={{ fontSize: "12px" }} /> حذف</p>
                                    <input type="checkbox" name="" />
                                </div>
                                <div className="images mr-5" >
                                    <div >
                                        <img className="org-img-showpro-helper" alt="تصاویر محصولات" width="250px" src={`http://localhost:1337${item.images[0].url}`} />
                                        <div className="overlay">
                                            <img className="hover-img-showpro-helper" onClick={() => handleShowDetailProduct(item)} alt="تصاویر محصولات" width="250px" height="250px" src={`http://localhost:1337${item.images[1].url}`} />
                                        </div>

                                        <button className="btn btn-success col-12 container" type="button" data-hover="hover"><span>انتخاب گزینه ها</span></button>

                                    </div>
                                </div>

                                <h6 className="title text-center" onClick={() => handleShowDetailProduct(item)}>
                                    {item.title}
                                </h6>
                                <h6 className="price text-center">
                                    {item.price}
                                </h6>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                < div className="text-center mt-5" >
                    <HeartOutlined style={{ fontSize: "200px", color: "rgb(228, 228, 228)" }} />
                    <h1 className='font-weight-bold mt-3 mb-3'>این لیست علاقه مندی خالی است.</h1>
                    <h6>شما هیچ محصولی به لیست علاقه مندی هایتان اظافه نکرده اید!</h6>
                    <h6>برای پیدا کردن محصولات مورد علاقه یتان جهت افزودن به لیست علاقه مندی ها میتوانید از فروشگاه دیدن نمایید.</h6>

                    <Link to="/">
                        <button className='btn btn-success btn-lg mt-3'>بازگشت به فروشگاه</button>
                    </Link>
                </div >)}
        </div>

    );
}

function mapStateToProps(state) {
    return {
        wishList: state.wishList,
    }
}

export default connect(mapStateToProps)(WishList);   