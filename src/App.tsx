import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Category2 from "./components/Category2";
import Services from "./components/Services";
import Banner from "./components/Banner";

import headphone from "./assets/website/ear.jpg";

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
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData}/>
    </div>
  ); 
};

export default App;
