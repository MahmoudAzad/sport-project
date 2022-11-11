import { Fragment } from "react";
import HeaderPhoto from "../Components/HomeComponents/headerPhoto";
import FoodCarousel from "../Components/Carousel/foodCarousel";
import ShowProducts from "../Components/HomeComponents/showProducts";
import AdvertisePhotos from "../Components/HomeComponents/advertisePhotos";
import HomeCarouselHelper from "../Components/Helper/homeCarouselHelper";


const Home = () => {


  return (
    <Fragment>
      <HeaderPhoto />
      <FoodCarousel />
      <ShowProducts />

      <HomeCarouselHelper endPath={"mens-sport-carousels"} title="لباس ورزشی مردانه" />
      <HomeCarouselHelper endPath={"accessories"} title="لوازم و تجهیزات بدنسازی" />

      <AdvertisePhotos />

      <HomeCarouselHelper endPath={"womens-sport-carousels"} title="لباس ورزشی زنانه" />
      <HomeCarouselHelper endPath={"shaker-carousels"} title="شیکر و جاگ واتر" />

    </Fragment>
  );
}

export default Home;