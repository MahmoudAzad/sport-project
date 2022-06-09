import { Fragment } from "react";
import SubMenu from "../Components/submenu";
import Navbar from "../Components/navbar";
import AdverticePhoto from "../Components/adverticePhoto";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <SubMenu />
      <AdverticePhoto />
    </Fragment>


  );
}

export default Home;