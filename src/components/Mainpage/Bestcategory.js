import React, { Component, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const BestCategory = () => {
  const [bestCategory, setbestCategory] = useState([]);
  const filterbestCategory = bestCategory
    .slice(0, 4)
    .sort((a, b) => a.property - b.property);

  useEffect(() => {
    axios
      .get("https://ahmetsftwtr.github.io/ESHOP-PROJECT/category.json")
      .then((response) => {
        setbestCategory(response.data);
      });
  });

  return (
    <React.Fragment>
      <h1 className="products_title">Best Category</h1>
      <div className="best_category">
        {filterbestCategory.map((item) => {
          return (
            <NavLink to={`/Category/${item.name}`}>
            <div key={item.id} className="best_category_item">
              <img className="best_category_img" src={item.image} />
              <p className="best_category_title">{item.name}</p>
            </div>
            </NavLink>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default BestCategory;
