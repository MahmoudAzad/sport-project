import { UpOutlined } from "@ant-design/icons";
import { BackTop } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowDetailProductsHelper from "./Components/Helper/showDetailProductHelper";
import ShowProductsHelper from "./Components/Helper/showProductsHelper";
import Footer from "./Components/HomeComponents/footer";
import ContactUS from "./Pages/contactUs";
import Home from "./Pages/home";
import Login from "./Pages/login";
import Logout from "./Pages/logout";
import Adresses from "./Pages/Profile/addresses";
import Counter from "./Pages/Profile/counter";
import Downloads from "./Pages/Profile/downloads";
import EditAccount from "./Pages/Profile/editAccount";
import Order from "./Pages/Profile/order";
import ProfileList from "./Pages/Profile/profileList";
import Register from "./Pages/register";
import Navbar from "./Components/HomeComponents/Navbar/navbar";
import Menu from "./Components/HomeComponents/Menu/menu";
import Cart from "./Pages/cart";
import TrackOrder from "./Pages/trackOrder";
import Terms from "./Pages/terms";
import ScrollToTop from "./scrollToTop";
import Help from "./Pages/help";
import Privacy from "./Pages/privacy";
import ShakerPrinting from "./Pages/shakerPrinting";
import Cooperation from "./Pages/cooperation";


const AppRouter = () => {

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Menu />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/showProducts/:endPath" element={<ShowProductsHelper />} />
                <Route path="/showDetailProductsHelper" element={<ShowDetailProductsHelper />} />
                <Route path="/contactus" element={<ContactUS />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/track-order" element={<TrackOrder />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/help" element={<Help />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/shaker-printing" element={<ShakerPrinting />} />
                <Route path="/cooperation" element={<Cooperation />} />


                <Route path="/profile" element={<ProfileList />} >
                    <Route index path='' element={<Counter />} />
                    <Route path='order' element={<Order />} />
                    <Route path="downloads" element={<Downloads />} />
                    <Route path="adresses" element={<Adresses />} />
                    <Route path="edit-account" element={<EditAccount />} />
                </Route>

            </Routes>

            <Footer />

            <div >
                <BackTop className="back-top-container">
                    <div className="back-top"><UpOutlined /></div>
                </BackTop>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;



























