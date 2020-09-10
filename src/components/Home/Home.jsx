import React, { useState } from "react";
import "./Home.css";
import Header from "../Header/Header";

import BannerImage from "./amazon-banner.jpg";
import Categorycard from "../CategoryCard/CategoryCard";

function Home() {
  const [mobileProducts, setmobileProducts] = useState([]);
  const [laptopProducts, setlaptopProducts] = useState([]);
  return (
    <div className="home__wrapper">
      <Header />
      <div className="home">
        <img src={BannerImage} alt="" className="home__bannerImage" />
        <div className="home__banner--gradientModifier"></div>
        <div className="home__contents">
          <Categorycard category="Amazon Echo" />
          <Categorycard category="Mobiles" />
          <Categorycard category="Laptops" />
        </div>
      </div>
    </div>
  );
}

export default Home;
