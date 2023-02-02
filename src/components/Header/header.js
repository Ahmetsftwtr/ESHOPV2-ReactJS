import React, { Component } from "react";
import Category from "./category";
import Search from "./search";
import Headertop from "./Headertop";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Headertop />
      <div className="header">
        <div className="header_top">
          <div
            onClick={() => {
              const menu = document.getElementById("nav_menu");
              menu.style.display = "block";
              document.body.style.overflow = "hidden";
            }}
            className="mobile_menu_button"
          >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Link to={'/'}>
          <h1>ESHOP V2</h1>
          </Link>

          <Search />

          <div className="header_top_right" notranslate>
            <div className="account" >
              <span className="material-symbols-outlined notranslate" >person</span>
              <span>Account</span>
            </div>
            <div className="favorites">
              <span className="material-symbols-outlined notranslate">favorite</span>
              <span>My Favorites</span>
            </div>
            <NavLink to={'/Basket'}>
            <div className="basket">
              <span className="material-symbols-outlined notranslate">shopping_basket</span>
              <span>My Basket</span>
              <div className="basket_header_box">
                <h3>
                  <span className="material-symbols-outlined notranslate">
                    shopping_basket
                  </span>
                  My Basket
                </h3>
                <div className="basket_header_box_container">s</div>
                <button type="button">Go to cart</button>
              </div>
            </div>
            </NavLink>

          </div>
        </div>

        <Category />
      </div>
    </>
  );
};

export default Header;
