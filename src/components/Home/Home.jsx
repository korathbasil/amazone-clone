import React, { useState } from "react";
import "./Home.css";
import BannerImage from "./amazon-banner.jpg";
import Categorycard from "../CategoryCard/CategoryCard";

function Home() {
  const [echoProducts, setEchoProducts] = useState([
    {
      name: "Echo dot (3rd Gen)",
      price: 100,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SX679_.jpg",
      rating: 5,
    },
    {
      name: "Echo Plus (2nd Gen)",
      price: 100,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ZJvf5xWBL._SX679_.jpg",
      rating: 5,
    },
    {
      name: "Echo Input",
      price: 100,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61qIcidztUL._SX522_.jpg",
      rating: 5,
    },
    {
      name: "Echo Show 8",
      price: 100,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51UZ17lvVFL._SX679_.jpg",
      rating: 5,
    },
  ]);
  const [mobileProducts, setmobileProducts] = useState([]);
  const [laptopProducts, setlaptopProducts] = useState([]);
  return (
    <div className="home">
      <img src={BannerImage} alt="" className="home__bannerImage" />
      <div className="home__banner--gradientModifier"></div>
      <div className="home__contents">
        <Categorycard
          category="Amazon Echo"
          products={[echoProducts[0], echoProducts[1], echoProducts[2]]}
        />
        <Categorycard category="Mobiles" />
        <Categorycard category="Laptops" />
      </div>
    </div>
  );
}

export default Home;
