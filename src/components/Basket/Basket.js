import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header/header";

const Basket = () => {
  const [BasketItems, SetBasketItems] = useState([]);

  useEffect(() => {
    const getItem = localStorage.getItem("Product");
    const ParseItem = JSON.parse(getItem);
    SetBasketItems(ParseItem);
  }, []);

  return (
    <div>
      <Header />

      <div className="basket_page">
        <div className="basket_items_list">
          <p className="title">
            <span class="material-symbols-outlined">shopping_bag</span>
            <b>YOUR SHOPPING </b> CART
          </p>
          {BasketItems.map((item) => {
            return (
              <div className="basket_item">
                <img src={item.images} />
                <div className="item_detail">
                  <p className="item_Name">{item.Title}</p>
                  <p className="item_description">{item.Description}</p>
                  <div className="product_detail_count">
                    <button type="button">-</button>
                    <span>{item.Count}</span>
                    <button type="button">+</button>
                  </div>
                  <span className="delete">
                    <span class="material-symbols-outlined">delete</span>Delete
                  </span>
                </div>
                <p className="item_price">{item.Count * item.Price}$</p>
              </div>
            );
          })}
        </div>

        <div className="basket_detail">
          <h2>Cards Total</h2>
          <div className="basket_detail_container">
            <p className="subtotal">
              Subtotal <span>500$</span>
            </p>
            <hr />
            <p className="total">
              Total <span>500$</span>
            </p>
          </div>

          <button type="button">Proceed to checkout </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
