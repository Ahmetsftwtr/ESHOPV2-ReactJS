import React, { Component } from "react";
import App from "./app";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import ProductDetail from "./components/Products/ProductDetail";
import Category from "./components/Category/ProductList";
import RouterConfig from './RouterConfig'
export class Index extends Component {
  render() {
    return (
      <div>
        <RouterConfig/>
      </div>
    );
  }
}


ReactDOM.render(<Index />, document.getElementById("root"));
