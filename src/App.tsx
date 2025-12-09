import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Category2 from "./components/Category2";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Products from "./components/Products";
import headphone from "./assets/website/ear.jpg";
import CartPage from "./pages/CartPage";
import { Toaster } from "react-hot-toast";
import TopProducts from "./components/TopProduct";
import Blogs from "./components/Blog";
import Partnership from "./components/Partnership";
import Footer from "./components/Footer";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSummary from "./pages/OrderSummary";



const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "30 Jan to 10 Feb",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Welcome and take our best tech product",
  bgColor: "#f42c37",
};


const App = () => {
  return (
    <>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Category />
            <Category2 />
            <Services />
            <Banner data={BannerData} />
            <Products  />
            <TopProducts />
            <Blogs/>
            <Partnership />
            <Footer />
          </>
        } />
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/checkout" element={<CheckoutPage />}/>
        <Route path="/order-summary" element={<OrderSummary />}/>
      
      </Routes>
    </>
  );
};

export default App;
