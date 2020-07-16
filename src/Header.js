import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      {/*logo on left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      {/*search box*/}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 LINKS*/}
      <div className="header__nav">
        {/*1st link */}

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello,</span>
            <span className="header__optionLinetwo">Sign In</span>
          </div>
        </Link>
        {/*2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLinetwo">& Orders</span>
          </div>
        </Link>
        {/*3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLinetwo">Prime</span>
          </div>
        </Link>
        {/*4th */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/*shopping basket icon */}
            <ShoppingBasketIcon />
            {/*number of items */}
            <span className="header__optionLinetwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
      {/*basket icon*/}
    </nav>
  );
}

export default Header;
