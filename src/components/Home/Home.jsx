import React from "react";
import "./Home.css";
import BannerImage from "./amazon-banner.jpg";

function Home() {
  return (
    <div className="home">
      <img src={BannerImage} alt="" className="home__bannerImage" />
      <div className="home__banner--gradientModifier"></div>
      <div className="home__contents"></div>
    </div>
  );
}

export default Home;
