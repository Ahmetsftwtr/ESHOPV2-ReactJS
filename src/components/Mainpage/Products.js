import React, { Component, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [product, setProduct] = useState([]);
  const filterproduct = product
    .slice(0, 6)
    .sort((a, b) => a.property - b.property);

  useEffect(() => {
    axios
      .get("https://ahmetsftwtr.github.io/ESHOP-PROJECT/product.json")
      .then((response) => {
        setProduct(response.data);
      });
  });

  return (
    <React.Fragment>
      <h1 className="products_title">New Products</h1>
      <div className="products">
        {filterproduct.map((item) => {
          return (
            <NavLink to={`/Product/${item.id}`}>
            <div key={item.id} className="product_item">
              <p className="product_title">{item.title}</p>
              <img className="product_img" src={item.images} width="200" />
              <p className="product_price">{item.price}$</p>
              <button type="button">
                <span className="material-symbols-outlined notranslate">shopping_cart</span> Add
                Basket
              </button>
            </div>
            </NavLink>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Products;
