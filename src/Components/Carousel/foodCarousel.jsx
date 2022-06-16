import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const FoodCarousel = () => {

    const [foodData, setFoodData] = useState("")

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


    if (!foodData) { return <p>please wait...</p> }
    console.log("food data =>", foodData);

    return (
        <div className="foodCarousel-container">
            <Swiper
                   style={{
                    "--swiper-pagination-color": "black",
                  }}
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={4}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="carousel-swiper container"
            >

                {foodData.map((food) => (


                    <SwiperSlide className="swiper-slide">
                        <img className="orginal-img" src={`http://localhost:1337${food.orgImg.url}`} />
                        <div class="overlay-container">
                            <img className="overlay-img" src={`http://localhost:1337${food.hoverImg.url}`} />
                            <p className="mt-5">{food.title}</p>
                        </div>
                        <p className="mt-3 ">{food.title}</p>
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
