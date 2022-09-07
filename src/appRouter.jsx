import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import ShowDetailProductsHelper from "./Components/Helper/showDetailProductHelper";
import ShowProductsHelper from "./Components/Helper/showProductsHelper";
import Footer from "./Components/HomeComponents/footer";
import Navbar from "./Components/HomeComponents/navbar";
import SubMenu from "./Components/HomeComponents/submenu";
import RingSleeves from "./Components/Products/Mens_sport/ringSleeves";
import Sweatshirts from "./Components/Products/Mens_sport/sweatshirts";
import Tshirts from "./Components/Products/Mens_sport/tshirts";
import ContactUS from "./Pages/contactUs";
import Home from "./Pages/home";
import Login from "./Pages/login";
import Register from "./Pages/register";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <SubMenu />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/showProducts" element={<ShowProductsHelper />} />
                <Route path="/ringSleeves" element={<RingSleeves />} />
                <Route path="/tshirts" element={<Tshirts />} />
                <Route path="/sweatshirts" element={<Sweatshirts />} />
                <Route path="/showDetailProductsHelper" element={<ShowDetailProductsHelper />} />
                <Route path="/contactus" element={<ContactUS />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;