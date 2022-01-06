import React from "react";
import OurServices from "../../OurSection/OurSecrion";
import OurSecton from "../../OurSection/OurSecton";
import Header from "../../Shared/Header";
import Article from "../Articel/Article";
import Banner from "../Banner/Banner";
import BannerSection from "../BannerSection/BannerSection";
import Fishs from "../Fish/Fish";
import Products from "../Products/Procusts";

import Review from "../Review/Review";
import Shop from "../Shop/Shop";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Article></Article>
      <Fishs></Fishs>
      <BannerSection></BannerSection>

      <Shop></Shop>
      <Review></Review>
    </div>
  );
};

export default Home;
