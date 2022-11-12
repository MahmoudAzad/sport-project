import { Badge, Drawer, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { ShoppingCartOutlined, CloseOutlined } from '@ant-design/icons';
import { connect, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { cartDrawer, removeCart } from '../../Redux/usefulActions';
import { loadState } from '../../Redux/localStorage';

const CartDrawer = (props) => {
    console.log("props =>=>=>" , props);

    const load = loadState();
    const location = useLocation()
    const dispatch = useDispatch()

    return (
        <>
            <Badge size="small" showZero count={load.cart.length}>
                <div onClick={()=>dispatch(cartDrawer(true))}>
                    <ShoppingCartOutlined style={{ fontSize: 18 }} className="p-1 nav-icon mr-2" />
                </div>
            </Badge>


            <Drawer
                title={<div className='d-flex justify-content-between  pb-3'>
                    <h5 className="font-weight-bold">سبد خرید</h5>
                    <p  className="close-icon"><CloseOutlined onClick={()=>dispatch(cartDrawer(false))} /> بستن (ESC)</p>
                </div>}
                footer={load.cart.length > 0 ? (
                    <div className="shoping-cart-list-btn">
                        <div className="row ">
                            <h6 className=" font-weight-bold col text-right">جمع كل سبد خريد :</h6>
                            <h6 className=" font-weight-bold col text-left price" style={{ color: "rgb(248, 121, 16)" }}>۳,۵۸۰,۰۰۰ تومان</h6>
                        </div>
                        <Link to="/cart" onClick={()=>dispatch(cartDrawer(false))}>
                            <button className="btn btn-success btn-sm col-12 p-2 mt-2 " >مشاهده سبد خرید</button>
                        </Link>
                        <button className="btn btn-success btn-sm col-12 p-2 mt-2 mb-4" >تسویه حساب</button>
                    </div>
                ) : (
                    null
                )

                }
                placement="left"
                closable={false}
                onClose={()=>dispatch(cartDrawer(false))}
                visible={props.cartDrawer}
                width={340}
                className="cart-drawer"

            >
                {load.cart.length > 0 ? (
                    <>
                        {load.cart.map((p) => (
                            <div className='shoping-cart-list-drawer-items pt-3 pb-2 row border-bottom'>
                                <div className=" row">
                                    <div className='col-3'>
                                        {p.images && (
                                            <img src={`http://localhost:1337${p.images[0].url}`} alt='' width="60px" />
                                        )}

                                        {p.img && (
                                            <img src={`http://localhost:1337${p.img.url}`} alt='' width="60px" />
                                        )}

                                        {p.orgImg && (
                                            <img src={`http://localhost:1337${p.orgImg.url}`} alt='' width="60px" />
                                        )}
                                    </div>
                                    <div className='col-7 text-right'>
                                        <p className="font-weight-bold">{p.title}</p>
                                        <div className='d-flex align-items-center'>
                                            {p.quantify} <CloseOutlined style={{ fontSize: "8px", marginLeft: "5px", marginRight: "5px" }} /> <p className='price'> {p.price} </p>
                                        </div>
                                    </div>
                                    <div className='col-2 text-right'>
                                        <CloseOutlined onClick={() => dispatch(removeCart(p))} />
                                    </div>

                                </div>
                            </div>
                        ))}
                    </>

                ) : (
                    <div className='empty-shoping-cart-list-drawer'>
                        {location.pathname !== "/" &&
                            <div className="text-center mt-3">
                                <ShoppingCartOutlined style={{ fontSize: "100px", color: "rgb(228, 228, 228)" }} />
                                <p className='font-weight-bold mt-3'>هیچ محصولی در سبد خرید نیست.</p>
                                <Link to="/">
                                    <button onClick={()=>dispatch(cartDrawer(false))} className='btn btn-success btn-sm mt-3'>بازگشت به فروشگاه</button>
                                </Link>
                            </div>
                        }

                    </div>
                )}
            </Drawer>







        </>
    );
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        cartDrawer : state.cartDrawer
    }
}

export default connect(mapStateToProps)(CartDrawer);




// const load = loadState();
// const location = useLocation()
// const dispatch = useDispatch()

// const [visible, setVisible] = useState(false);

// const showDrawer = () => {
//     setVisible(true);
// };

// const onClose = () => {
//     setVisible(false);
// };
// console.log("load cart 11 =>", load.cart);

// return (
//     <>
//         <Badge size="small" showZero count={load.cart.length}>
//             <div onClick={showDrawer}>
//                 <ShoppingCartOutlined style={{ fontSize: 18 }} className="p-1 nav-icon mr-2" />
//             </div>
//         </Badge>




//         <Drawer
//         // visible={setVisible(true)}
//             title={<div className='d-flex justify-content-between  pb-3'>
//                 <h5 className="font-weight-bold">سبد خرید</h5>
//                 <p onClick={onClose} className="close-icon"><CloseOutlined /> بستن (ESC)</p>
//             </div>}
//             footer={load.cart.length > 0 ? (
//                 <div className="shoping-cart-list-btn">
//                     <div className="row ">
//                         <h6 className=" font-weight-bold col text-right">جمع كل سبد خريد :</h6>
//                         <h6 className=" font-weight-bold col text-left price" style={{ color: "rgb(248, 121, 16)" }}>۳,۵۸۰,۰۰۰ تومان</h6>
//                     </div>
//                     <Link to="/cart">
//                         <button className="btn btn-success btn-sm col-12 p-2 mt-2 " onClick={onClose} >مشاهده سبد خرید</button>
//                     </Link>
//                     <button className="btn btn-success btn-sm col-12 p-2 mt-2 mb-4" >تسویه حساب</button>
//                 </div>
//             ) : (
//                 null
//             )

//             }
//             placement="left"
//             closable={false}
//             onClose={onClose}
//             visible={visible}
//             width={340}
//             className="cart-drawer"

//         >
//             {load.cart.length > 0 ? (
//                 <>
//                     {load.cart.map((p) => (
//                         <div className='shoping-cart-list-drawer-items pt-3 pb-2 row border-bottom'>
//                             <div className=" row">
//                                 <div className='col-3'>
//                                     {p.images && (
//                                         <img src={`http://localhost:1337${p.images[0].url}`} alt='' width="60px" />
//                                     )}

//                                     {p.img && (
//                                         <img src={`http://localhost:1337${p.img.url}`} alt='' width="60px" />
//                                     )}

//                                     {p.orgImg && (
//                                         <img src={`http://localhost:1337${p.orgImg.url}`} alt='' width="60px" />
//                                     )}
//                                 </div>
//                                 <div className='col-7 text-right'>
//                                     <p className="font-weight-bold">{p.title}</p>
//                                     <div className='d-flex align-items-center'>
//                                         {p.quantify} <CloseOutlined style={{ fontSize: "8px", marginLeft: "5px", marginRight: "5px" }} /> <p className='price'> {p.price} </p>
//                                     </div>
//                                 </div>
//                                 <div className='col-2 text-right'>
//                                     <CloseOutlined onClick={() => dispatch(removeCart(p))} />
//                                 </div>

//                             </div>
//                         </div>
//                     ))}
//                 </>

//             ) : (
//                 <div className='empty-shoping-cart-list-drawer'>
//                     {location.pathname !== "/" &&
//                         <div className="text-center mt-3">
//                             <ShoppingCartOutlined style={{ fontSize: "100px", color: "rgb(228, 228, 228)" }} />
//                             <p className='font-weight-bold mt-3'>هیچ محصولی در سبد خرید نیست.</p>
//                             <Link to="/">
//                                 <button onClick={onClose} className='btn btn-success btn-sm mt-3'>بازگشت به فروشگاه</button>
//                             </Link>
//                         </div>
//                     }

//                 </div>
//             )}
//         </Drawer>







//     </>
// );





