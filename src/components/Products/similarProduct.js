import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Similarproduct = (props) => {

let Categoryname = props.Product;

const [similarproduct,setsimilarproduct] = useState([]);
const filterdata= similarproduct.slice(0,6).sort((a,b) => a.property - b.property);

useEffect(()=> {
    axios.get('https://ahmetsftwtr.github.io/ESHOP-PROJECT/product.json')
    .then((response) => {
    setsimilarproduct(response.data.filter((item)=> item.category.name == Categoryname))
    })
})


 return (
<div className='similar_products'>
<p>Similar Products</p>
<div className='similar_products_container'>
        {filterdata.map((item) => {
        return(
        <div className='similar_product_item'>
        <img src={item.images}/>
        <p>{item.title}</p>
        <Link to={`/Product/${item.id}`}><button type='button'>View</button></Link>

        </div>
        )
        })}

</div>
</div>
)}



export default Similarproduct
