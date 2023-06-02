import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Footer from "./components/Common/Footer";
import ContactUS from "./pages/ContactUs";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import Logout from "./components/Function/Logout";
import Adresses from "./pages/Profile/Addresses";
import Counter from "./pages/Profile/Counter";
import Downloads from "./pages/Profile/Downloads";
import EditAccount from "./pages/Profile/EditAccount";
import Order from "./pages/Profile/Order";
import ProfileList from "./pages/Profile/ProfileList";
import Menu from "./components/Menu/Menu";
import Cart from "./pages/Cart";
import TrackOrder from "./pages/TrackOrder";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/Function/ScrollToTop";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";
import ShakerPrinting from "./pages/ShakerPrinting";
import Cooperation from "./pages/Cooperation";
import MajorShopping from "./pages/MajorShopping";
import Installment from "./pages/Installment";
import Wishlist from "./pages/Wishlist";
import Navbar from "./components/Navbar/Navbar";
import Test from "./pages/test";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />

        <Route path="/products/:endPath" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/help" element={<Help />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/shaker-printing" element={<ShakerPrinting />} />
        <Route path="/cooperation" element={<Cooperation />} />
        <Route path="/major-shopping" element={<MajorShopping />} />
        <Route path="/installment" element={<Installment />} />
        <Route path="/wish-list" element={<Wishlist />} />

        <Route path="/profile" element={<ProfileList />}>
          <Route index path="" element={<Counter />} />
          <Route path="order" element={<Order />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="adresses" element={<Adresses />} />
          <Route path="edit-account" element={<EditAccount />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
