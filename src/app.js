import React, { Component } from 'react'
import Header from './components/Header/header'
import Slider from './components/Slider/slide'
import Products from './components/Mainpage/Products'
import Bestcategory from './components/Mainpage/Bestcategory'
import ProductDetail from './components/Products/ProductDetail' 

class App extends Component {
  render() {
    return (
      <div>
       <Header/>
       <Slider/>
       <Bestcategory/>
      <Products/>
      {/* <ProductDetail/> */}


      </div>
    )
  }
}


export default App
