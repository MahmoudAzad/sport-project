import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const ShakerPrintingCarousel = () => {
  return (
    <Swiper
      slidesPerView={3}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={false}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className=" p-4"
    >
      <SwiperSlide>
        <img src="/images\shaker-printing/N1.jpg" alt="شیکر با لوگو دلخواه" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images\shaker-printing/N2.jpg" alt="شیکر با لوگو دلخواه" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images\shaker-printing/N3.jpg" alt="شیکر با لوگو دلخواه" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images\shaker-printing/N4.jpg" alt="شیکر با لوگو دلخواه" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images\shaker-printing/N5.jpg" alt="شیکر با لوگو دلخواه" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images\shaker-printing/N6.jpg" alt="شیکر با لوگو دلخواه" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images\shaker-printing/N7.jpg" alt="شیکر با لوگو دلخواه" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images\shaker-printing/N8.jpg" alt="شیکر با لوگو دلخواه" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images\shaker-printing/N9.jpg" alt="شیکر با لوگو دلخواه" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images\shaker-printing/N10.jpg" alt="شیکر با لوگو دلخواه" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images\shaker-printing/N11.jpg" alt="شیکر با لوگو دلخواه" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images\shaker-printing/N12.jpg" alt="شیکر با لوگو دلخواه" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images\shaker-printing/N13.jpg" alt="شیکر با لوگو دلخواه" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images\shaker-printing/N14.jpg" alt="شیکر با لوگو دلخواه" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images\shaker-printing/N15.jpg" alt="شیکر با لوگو دلخواه" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images\shaker-printing/N16.jpg" alt="شیکر با لوگو دلخواه" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ShakerPrintingCarousel;
