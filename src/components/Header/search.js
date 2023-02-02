import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [Searchlist, setSearchlist] = useState([]);
  const filterSearch = Searchlist.filter((item) =>
    item.title.toUpperCase().includes(keyword.toUpperCase())
  );
  useEffect(() => {
    axios
      .get("https://ahmetsftwtr.github.io/ESHOP-PROJECT/product.json")
      .then((response) => {
        setSearchlist(response.data);
      });
  },[keyword]);

  return (
    <div className="search">
      <input
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        className="search_input"
        type="text"
        placeholder="Search product..."
      />
      <span className="material-symbols-outlined notranslate">search</span>

      <div
        style={{ display: keyword ? "block" : "none" }}
        className="search_box"
        id="search_box"
      >
        <p>Popular Category</p>
        <div className="search_box_category">
          <a href="">CATEGORY 1</a>
          <a href="">CATEGORY 1</a>
          <a href="">CATEGORY 1</a>
          <a href="">CATEGORY 1</a>
        </div>

        {
       filterSearch.length>0 ? filterSearch.map((item) => {
           return (
            <NavLink to={`/Product/${item.id}`}>
              <div key={item.id} className="search_box_item">
                <img src={item.images} />
                <p>{item.title}</p>
              </div>
            </NavLink>
            );
        }):
        (<p>Product not found</p>)
        }

      </div>
    </div>
  );
};

export default Search;
