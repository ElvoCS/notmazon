import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684223_.jpg"
        alt=""
      />
      {/* product id, title, price, rating, image*/}
      <Product
        id={12334421}
        title="The Lean startup"
        price={11.96}
        rating={5}
        image="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/merch/2020/campaign/91874378/uk-v3-gateway-dashboard-card-379x304._SY304_CB429036539_.jpg"
      />
      {/*product */}
    </div>
  );
}

export default Home;
