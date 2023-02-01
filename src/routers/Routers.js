import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from '../pages/home'
import Cart from '../pages/cart'
import Login from '../pages/login'
import ProductDetails from '../pages/productDetails'
import Signup from '../pages/signup'
import Shop from '../pages/shop'
import Checkout from '../pages/checkout'

const Routers=()=> {
  return <Routes>
  <Route path='/' element={<Navigate to='home'/>}></Route>
  <Route path='home' element={<Home/>}></Route>
   <Route path='cart' element={<Cart/>}></Route>
    <Route path='login' element={<Login/>}></Route>
     <Route path='shop/:id' element={<ProductDetails/>}></Route>
      <Route path='signup' element={<Signup/>}></Route>
       <Route path='shop' element={<Shop/>}></Route>
        <Route path='checkout' element={<Checkout/>}></Route>
  </Routes>
} 

export default Routers;
