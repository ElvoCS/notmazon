import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://i.imgur.com/dZU3dHa.jpg"
        alt=""
      />
      {/* product id, title, price, rating, image*/}
      <div className="home__row">
        <Product
          id={12334421}
          title="The Lean startup"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41ahdXpJqUL.jpg"
        />
        <Product
          id={121}
          title="Echo Dot (3rd gen)"
          price={150.96}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_UL160_SR160,160_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={123}
          title="CRAYOLA 12pk"
          price={9.96}
          rating={3}
          image="https://images-eu.ssl-images-amazon.com/images/I/41Ve7V25GfL._AC_UL320_SR320,320_.jpg"
        />
        <Product
          id={421}
          title="Pack of 50 3-Ply safety masks"
          price={20.0}
          rating={1}
          image="https://images-eu.ssl-images-amazon.com/images/I/61NaFIwlB7L._AC_UL320_SR320,320_.jpg"
        />
        <Product
          id={5959}
          title="UNO Card Game"
          price={5.0}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/81mQ3fkopbL._AC_UL480_SR336,480_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={334421}
          title="Gorilla Tape"
          price={9.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/81qfTRLdLFL._AC_UL200_SR200,200_.jpg"
        />
      </div>
      {/*product */}
    </div>
  );
}

export default Home;
