import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router";
import { Tooltip } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Loading from "../Common/loading";

const FoodCarousel = () => {

    const [foodData, setFoodData] = useState("")
    const navigate = useNavigate();

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

        fetch("http://localhost:1337/food-carousel-swipers", requestOptions)
            .then(response => response.json())
            .then(result => { setFoodData(result) });
    }, [])

    function handleShowDetailProduct(food) {
        console.log("food =>", food);
        const product = food
        navigate("/showDetailProductsHelper", {
            state: {
                product,
            },
        });
    }

    if (!foodData) { return <Loading /> }
    
    return (
        <div className="foodCarousel-container">
            <h4>پیشنهادهای ویژه</h4>
            <Swiper
                style={{
                    "--swiper-pagination-color": "black",
                }}
                slidesPerView={2}
                spaceBetween={30}
                slidesPerGroup={4}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}

                breakpoints={{
                    576: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    }
                }}


                modules={[Pagination, Navigation]}
                className="carousel-swiper container"
            >

                {foodData.map((food) => (


                    <SwiperSlide className="swiper-slide">


                        <div class="slide-images row justify-content-center">
                            <img src={`http://localhost:1337${food.orgImg.url}`} alt="cat 1" class="slide-orgImg" />
                            <img src={`http://localhost:1337${food.hoverImg.url}`} alt="cat 2" class="slide-hoverImg" onClick={() => handleShowDetailProduct(food)} />
                            <Tooltip title="اطلاعات بیشتر" className='btn ' mouseLeaveDelay={0} color="black" >
                                <button class=" col-3" type="button" data-hover="hover">
                                    <ShoppingCartOutlined className='icon' />
                                </button>
                            </Tooltip>
                        </div>
                        <p className="mt-3" onClick={() => handleShowDetailProduct(food)}>{food.title}</p>

                        <div className="carousel-price ">
                            <p className="carousel-orgPrice mr-3">{food.orginalPrice}</p>
                            <p className="carousel-linedPrice"><strike className="mb-3">{food.linedPrice}</strike></p>
                        </div>

                    </SwiperSlide>

                ))}

            </Swiper>
        </div>
    );
}

export default FoodCarousel;
