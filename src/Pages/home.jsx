import { Fragment } from "react";
import SubMenu from "../Components/HomeComponents/submenu";
import Navbar from "../Components/HomeComponents/navbar";
import HeaderPhoto from "../Components/HomeComponents/headerPhoto";
import FoodCarousel from "../Components/Carousel/foodCarousel";
import ShowProducts from "../Components/HomeComponents/showProducts";
import MensSportwearCarousel from "../Components/Carousel/MensSportswearCarousel";
import AccessoriesCarousel from "../Components/Carousel/accessoriesCarousel";
import AdvertisePhotos from "../Components/HomeComponents/advertisePhotos";
import WomensSportwearCarousel from "../Components/Carousel/womensSportwearCarousel";

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
      <WomensSportwearCarousel />
    </Fragment>


  );
}

export default Home;