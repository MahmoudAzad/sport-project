import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router";
import Loading from "../Common/Loading";
import { getProducts } from "../../services/Services";

const HomeCarousels = ({ endPath, title }) => {
  const [products, setProducts] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getProducts(endPath);
      setProducts(data);
    };
    fetchData();
  }, []);

  function handleShowDetailProduct(p) {
    const product = p;
    navigate("/product", {
      state: {
        product,
      },
    });
  }

  if (!products) {
    return <Loading />;
  }

  return (
    <div className="mt-4">
      <h5 className="text-center fw-bold border-bottom border-2 border-muted container p-2 ">
        {title}
      </h5>
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
        className="bg-white pt-2 pb-5 rounded-4 container"
      >
        {products.map((p) => (
          <SwiperSlide
            className="swiper-slide d-flex flex-column justify-content-end"
            key={p.id}
          >
            <div>
              <div className="slide-images position-relative overflow-hidden row justify-content-center">
                <img
                  src={`http://localhost:1337${p.img.url}`}
                  alt="گالری تصاویر محصولات"
                  className="w-100 h-100 object-fit-cover d-block"
                />
                <div className="overlay">
                  <img
                    className="slide-hoverImg w-100 h-100 object-fit-cover d-block"
                    src={`http://localhost:1337${
                      p.hoverImg.url || p.hoverImg[0].url
                    }`}
                    alt="گالری تصاویر محصولات"
                    onClick={() => handleShowDetailProduct(p)}
                  />
                </div>
                <button
                  type="button"
                  className="btn bg-white col-3 tooltipIcon position-absolute text-center "
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="اطلاعات بیشتر"
                >
                  <i className="bi bi-cart3 icon" />
                </button>
              </div>
            </div>

            <p
              className="mt-3 lh-base"
              onClick={() => handleShowDetailProduct(p)}
            >
              {p.title}
            </p>
            <div className="d-flex justify-content-center mt-4 ">
              <p className="carousel-orgPrice mr-3 ">{p.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCarousels;
