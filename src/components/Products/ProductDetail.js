import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/header";
import Similarproduct from "./similarProduct";

const ProductDetail = () => {
  const { Productid } = useParams();
  const [productcount, setProductcount] = useState(1);
  const [Product, setProduct] = useState([]);
  const [BasketItem, setBasketItem] = useState([{}]);

  useEffect(() => {
    if (!BasketItem.length) {
      const jsonItems = localStorage.getItem("Product");
      const localItems = JSON.parse(jsonItems);
      setBasketItem(localItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Product", JSON.stringify(BasketItem));
  }, [BasketItem]);

  const AddBasket = (item) => {
    const Item = {
      Id: item.id,
      Title: item.title,
      Description: item.description,
      Price: item.price,
      images: item.images,
      Count: productcount,
    };

    setBasketItem((BasketItem) => [...BasketItem, Item]);
  };

  useEffect(() => {
    axios
      .get("https://ahmetsftwtr.github.io/ESHOP-PROJECT/product.json")
      .then((response) => {
        setProduct(response.data.filter((item) => item.id == Productid));
      });
  });

  return (
    <div className="page">
      <Header />
      {Product.map((item) => {
        return (
          <>
            <p className="site_road_title">
              Home <span></span> Products <span></span> {item.category.name}{" "}
              <span></span> <b>{item.title}</b>
            </p>
            <div className="Product_details">
              <div className="product_details_container">
                <div className="product_detail_img">
                  <img src={item.images[0]} />
                  <div className="other_img">
                    <button className="other_img_button next_img"> </button>
                    <button className="other_img_button back_img"> </button>
                    <img src={item.images[0]} />
                    <img src={item.images[1]} />
                    <img src={item.images[2]} />
                  </div>
                </div>

                <div className="product_detail_product">
                  <p>
                    {item.title} <span className="freecargo">Free Cargo</span>
                  </p>
                  <p>620$</p>
                  <p>{item.price * productcount}$</p>
                  <p>{item.description}</p>
                  <div className="product_detail_count">
                    <button
                      type="button"
                      onClick={() => {
                        setProductcount((productcount) => productcount - 1);
                      }}
                    >
                      -
                    </button>
                    <span>{productcount}</span>
                    <button
                      type="button"
                      onClick={() => {
                        setProductcount((productcount) => productcount + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => AddBasket(item)}
                    className="addbutton"
                  >
                    <span>Add Basket</span>
                  </button>
                  <br></br>
                  <button className="favoritebutton" type="button">
                    <span>Add to Favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <Similarproduct Product={Product.map((item) => item.category.name)} />
    </div>
  );
};

export default ProductDetail;
