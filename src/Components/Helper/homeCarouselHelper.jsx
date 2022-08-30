import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const HomeCarouselHelper = ({ products, title }) => {

    console.log("pro Heelp =>", products);

    return (
        <div className="mt-4">
            <h5 className="swiper-container-title container p-2 ">{title}</h5>
            <Swiper
                style={{
                    "--swiper-navigation-color": "black",
                    "--swiper-pagination-color": "black",
                    "--swiper-navigation-size": "20px",
                }}
                slidesPerView={5}
                spaceBetween={10}
                slidesPerGroup={4}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}

                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="carousel-swiper container"
            >

                {products.map((p) => (


                    <SwiperSlide className="swiper-slide">



                        <div class="slide-images">
                            <img src={`http://localhost:1337${p.img.url}`} alt="cat 1" class="slide-orgImg" />
                            <img  src={`http://localhost:1337${p.hoverImg.url || p.hoverImg[0].url}`} alt="cat 2" class="slide-hoverImg" />
                        </div>
                        <p className="mt-3 ">{p.title}</p>
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