import { Fragment } from "react";
import SubMenu from "../Components/submenu";
import Navbar from "../Components/navbar";
import AdverticePhoto from "../Components/adverticePhoto";
import FoodCarousel from "../Components/Carousel/foodCarousel";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <SubMenu />
      <AdverticePhoto />
      <FoodCarousel />
    </Fragment>


  );
}

export default Home;