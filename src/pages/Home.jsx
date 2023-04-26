import { Fragment } from "react";
import FoodCarousel from "../components/Carousel/FoodCarousel";
import HomeCarousels from "../components/Carousel/HomeCarousels";
import HeaderCarousel from "../components/Carousel/HeaderCarousel";
import AdvertiseCards from "../components/Card/AdvertiseCards";
import CategoriesCards from "../components/Card/CategoriesCards";

const Home = () => {
  return (
    <Fragment>
      <HeaderCarousel />
      <FoodCarousel />
      <CategoriesCards />
      <HomeCarousels
        endPath={"mens-sport-carousels"}
        title="لباس ورزشی مردانه"
      />
      <HomeCarousels endPath={"accessories"} title="لوازم و تجهیزات بدنسازی" />
      <AdvertiseCards />
      <HomeCarousels
        endPath={"womens-sport-carousels"}
        title="لباس ورزشی زنانه"
      />
      <HomeCarousels endPath={"shaker-carousels"} title="شیکر و جاگ واتر" />
    </Fragment>
  );
};

export default Home;
