import React, { Component, useEffect, useState } from 'react'
import Header from '../Header/header'
import { Link, NavLink, useParams } from 'react-router-dom';
import GetProduct from './getsProduct'
import axios from 'axios';

const ProductList = () => {

let {Categoryname} = useParams();

const [Product,setProduct] = useState([]);

useEffect(() => {
  axios.get('https://ahmetsftwtr.github.io/ESHOP-PROJECT/product.json')
  .then((response) => {
    setProduct(response.data.filter((item)=> item.category.name == Categoryname))
  })
},[Product])

    return (
      <div>
        <Header/>
<div className='product_list_container'>
<div className='product_list_head'>
<div className='left'>
<p className='site_road_title'>Home <span></span> Category <span></span>  <b>{Categoryname} </b></p>
<p className='founditem'><span>{Product.length}</span> products found</p>
</div>
<div className='product_list_filter'>
  <select>
    <option value='1'>Highest by price</option>
    <option value='2'>Lowest by price</option>
    <option value='3'>Latest</option>

  </select>
  </div>
</div>

<div className='products'>
{Product.map((item) => {
  return (
<NavLink className='link_item' to={`/Product/${item.id}`}>
<div className='product_item'>
        <p className='product_title'>{item.title}</p>
        <img className='product_img' src={item.images[0]}  width='200'/>
        <p className='product_price'>{item.price}$</p>
        <button type='button'><span class="material-symbols-outlined notranslate">shopping_cart</span> Add Basket</button>
</div>
</NavLink>
  )
})}
</div>

</div>
      </div>
    )
  }


export default ProductList
