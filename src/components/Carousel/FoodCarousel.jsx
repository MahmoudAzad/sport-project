import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router";
import Loading from "../Common/Loading";
import { getProducts } from "../../services/Services";

const FoodCarousel = () => {
  const [foodData, setFoodData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProducts("food-carousel-swipers");
        console.log(data, "data");
        setFoodData(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  function handleShowDetailProduct(food) {
    const product = food;
    navigate("/product", {
      state: {
        product,
      },
    });
  }

  if (!foodData) {
    return <Loading />;
  }
  return (
    <div className="foodCarousel-container mt-5 p-4">
      <h4 className="text-white fw-bold text-center mb-4">پیشنهادهای ویژه</h4>
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
          },
        }}
        modules={[Pagination, Navigation]}
        className="bg-white pt-2 pb-5 rounded-4 container"
      >
        {foodData.map((food) => (
          <SwiperSlide
            className="swiper-slide d-flex flex-column justify-content-end"
            key={food.id}
          >
            <div className="slide-images position-relative overflow-hidden row justify-content-center">
              <img
                src={`http://localhost:1337${food.orgImg.url}`}
                alt="محصولات غذایی رژیمی"
                className="slide-orgImg w-100 h-100"
              />
              <img
                src={`http://localhost:1337${food.hoverImg.url}`}
                alt="محصولات غذایی رژیمی"
                className="slide-hoverImg w-100 h-100"
                onClick={() => handleShowDetailProduct(food)}
              />
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
            <p className="mt-3" onClick={() => handleShowDetailProduct(food)}>
              {food.title}
            </p>

            <div className="d-flex justify-content-center mt-4">
              <p className="carousel-orgPrice mr-3">{food.orginalPrice}</p>
              <p className="text-secondary fw-bold me-2">
                <strike className="mb-3">{food.linedPrice}</strike>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FoodCarousel;
