import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { useState } from 'react';
import Loading from '../Common/loading';

const HeaderCarousel = () => {
    const [items, setItems] = useState();

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

        fetch("http://localhost:1337/header-carousels", requestOptions)
            .then(response => response.json())
            .then(result => { setItems(result) });
    }, [])

    if (!items) {
        return <Loading />
    }

    return (
        <Swiper
            className="mySwiper header-swiper col-10 mt-5"
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}

        >
            {items[0].images.map((i) => (
                <SwiperSlide key={i.id}>
                    <img src={`http://localhost:1337${i.url}`} alt="فروشگاه اینترنتی محصولات ورزشی " />
                </SwiperSlide>
            ))}

        </Swiper>
    );
}

export default HeaderCarousel;