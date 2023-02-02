
import React, { useState }  from 'react'

const getsProduct = (props) => {
const Product = [props.Data];
console.log(Product)
    return (
        <div className='products'>

{Product.map((item) => {
        return (
<div className='product_item'>
        <p className='product_title'>{item.title}</p>
        <img className='product_img' src='https://cdn.lorem.space/images/shoes/.cache/640x480/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg'  width='200'/>
        <p className='product_price'>500$</p>
        <button type='button'><span class="material-symbols-outlined notranslate">shopping_cart</span> Add Basket</button>
</div>
        )
})}



</div>
    )
}
 
export default getsProduct
