import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://ahmetsftwtr.github.io/ESHOP-PROJECT/category.json")
      .then((response) => {
        setCategory(response.data);
      });
  },[]);

  return (
    <ul className="mega_menu" id="nav_menu">
      <span
        className="material-symbols-outlined"
        onClick={() => {
          const menu = document.getElementById("nav_menu");
          menu.style.display = "none";
          document.body.style.overflow = "scroll";
        }}
      >
        close
      </span>

      {category.map((ct) => {
        return (
          <div key={ct.id} className="mega_menu_item">
           <NavLink to={`/Category/${ct.name}`}><li icon={ct.icon}>{ct.name}</li></NavLink>
            <div className="mega_sub_menu">
              <ul>
                <li>{ct.name} Subcategories 1</li>
                <li>{ct.name} Subcategories 2</li>
                <li>{ct.name} Subcategories 3</li>
              </ul>
              <img className="mega_sub_menu_img" src={ct.image} />
            </div>
          </div>
        );
      })}
    </ul>
  );
};

export default Category;
