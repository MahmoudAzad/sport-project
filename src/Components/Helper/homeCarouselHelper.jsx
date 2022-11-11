import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useNavigate } from 'react-router';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const HomeCarouselHelper = ({ endPath, title }) => {

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
    }, [])
    const navigate = useNavigate();

    function handleShowDetailProduct(p) {
        console.log("p =>", p);
        const product = p
        navigate("/showDetailProductsHelper", {
            state: {
                product,
            },
        });
    }


    if (!products) {
        return <p>
            please wait...
        </p>
    }


    return (
        <div className="mt-4">
            <h5 className="swiper-container-title container p-2 ">{title}</h5>
            <Swiper
                style={{
                    "--swiper-navigation-color": "black",
                    "--swiper-pagination-color": "black",
                    "--swiper-navigation-size": "20px",
                }}
                slidesPerView={2}
                spaceBetween={10}
                slidesPerGroup={4}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}

                pagination={{
                    clickable: true,
                }}

                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}

                modules={[Pagination, Navigation]}
                className="carousel-swiper container"

            >

                {products.map((p) => (


                    <SwiperSlide className="swiper-slide">
                        <div >
                            <div className="slide-images row justify-content-center" >
                                <img src={`http://localhost:1337${p.img.url}`} alt="cat 1" class="slide-orgImg" />
                                <div class="overlay">
                                    <img className="slide-hoverImg" src={`http://localhost:1337${p.hoverImg.url || p.hoverImg[0].url}`} alt="cat 2" onClick={() => handleShowDetailProduct(p)} />
                                </div>

                                <Tooltip title="انتخاب گزینه ها" className='btn' mouseLeaveDelay={0} color="black"	onClick={() => handleShowDetailProduct(p)}>
                                    <button class=" col-3" type="button" data-hover="hover">
                                        <ShoppingCartOutlined className='icon' />
                                    </button>
                                </Tooltip>


                            </div>
                        </div>


                        {/* <div class="slide-images">
                            <img src={`http://localhost:1337${p.img.url}`} alt="cat 1" class="slide-orgImg" />
                            <img className="slide-hoverImg" src={`http://localhost:1337${p.hoverImg.url || p.hoverImg[0].url}`} alt="cat 2" onClick={() => handleShowDetailProduct(p)} />
                        </div> */}
                        <p className="mt-3 title" onClick={() => handleShowDetailProduct(p)}>{p.title}</p>
                        <div className="carousel-price ">
                            <p className="carousel-orgPrice mr-3 ">{p.price}</p>
                        </div>



                    </SwiperSlide>

                ))}

            </Swiper>
        </div>
    );
}

export default HomeCarouselHelper;