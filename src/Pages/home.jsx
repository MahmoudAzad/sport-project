import { Fragment } from "react";
import SubMenu from "../Components/HomeComponents/submenu";
import Navbar from "../Components/HomeComponents/navbar";
import HeaderPhoto from "../Components/HomeComponents/headerPhoto";
import FoodCarousel from "../Components/Carousel/foodCarousel";
import ShowProducts from "../Components/HomeComponents/showProducts";
import MensSportwearCarousel from "../Components/Carousel/MensSportswearCarousel";
import AccessoriesCarousel from "../Components/Carousel/accessoriesCarousel";
import AdvertisePhotos from "../Components/HomeComponents/advertisePhotos";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <SubMenu />
      <HeaderPhoto />
      <FoodCarousel />
      <ShowProducts />
      <MensSportwearCarousel />
      <AccessoriesCarousel />
      <AdvertisePhotos />
    </Fragment>


  );
}

export default Home;