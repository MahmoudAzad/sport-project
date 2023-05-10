import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";

const ProductCarousel = ({ params }) => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper "
    >
      {params.state.product.img && (
        <SwiperSlide>
          <img
            src={`http://localhost:1337${params.state.product.img.url}`}
            alt="جزییات محصول انتخابی"
          />
        </SwiperSlide>
      )}

      {params.state.product.orgImg && (
        <SwiperSlide>
          <img
            src={`http://localhost:1337${params.state.product.orgImg.url}`}
            alt="جزییات محصول انتخابی"
          />
        </SwiperSlide>
      )}

      {params.state.product.images &&
        params.state.product.images.map((img) => (
          <SwiperSlide key={img.id}>
            <img
              src={`http://localhost:1337${img.url}`}
              alt="جزییات محصول انتخابی"
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ProductCarousel;
