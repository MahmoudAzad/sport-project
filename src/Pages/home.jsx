import { Fragment } from "react";
import SubMenu from "../Components/HomeComponents/submenu";
import Navbar from "../Components/HomeComponents/navbar";
import AdverticePhoto from "../Components/HomeComponents/adverticePhoto";
import FoodCarousel from "../Components/Carousel/foodCarousel";
import ShowProducts from "../Components/HomeComponents/showProducts";
import MensSportwearCarousel from "../Components/Carousel/MensSportswearCarousel";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <SubMenu />
      <AdverticePhoto />
      <FoodCarousel />
      <ShowProducts />
      <MensSportwearCarousel />
    </Fragment>


  );
}

export default Home;