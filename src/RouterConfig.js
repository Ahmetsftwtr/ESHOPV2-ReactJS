import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProductDetail from "./components/Products/ProductDetail";
import Category from "./components/Category/ProductList";
import App from "./app";
import Basket from './components/Basket/Basket';

const Router = () => {
    return (


<BrowserRouter>    
<Routes>
  <Route path='/' element={<App/>} />
  <Route  path='/Product' element={<ProductDetail/>} />
  <Route  path='/Product/:Productid' element={<ProductDetail/>} />
  <Route  path='/Category' element={<Category/>} />
  <Route  path='/Category/:Categoryname' element={<Category/>} />
  <Route  path='/Basket' element={<Basket/>} />
</Routes>
</BrowserRouter>
    )
}
export default Router
