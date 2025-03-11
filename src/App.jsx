import './App.css'
import { useState } from 'react';

import Home from './pages/home/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import ContactUs from './component/contact_us/ContactUs.jsx';
import Men from './pages/men/Men.jsx';
import Women from './pages/women/Women.jsx';
import NewArrival from './component/new_arrive/NewArrival.jsx';
import Seller from './component/best_seller/Seller.jsx';
import Navbar from './component/navbar/Navbar.jsx';
import SingIn from './pages/sing_in/SingIn.jsx';
import Cart from './pages/cart/Cart.jsx';
import Orders from './pages/orders/Orders.jsx';
import PlaceOrder from './pages/placeorder/PlaceOrder.jsx';
import Product from './pages/product/Product.jsx';

function App() {
  return (
    <>
      <div className="app">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/men' element={<Men />}></Route>
          <Route path='/women' element={<Women />}></Route>
          <Route path='/newArrival' element={<NewArrival />}></Route>
          <Route path='/bestSeller' element={<Seller />}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/singin' element={<SingIn/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/orders' element={<Orders/>}></Route>
          <Route path='/place-order' element={<PlaceOrder/>}></Route>
          <Route path='/product/:productId' element={<Product/>}></Route>

        </Routes>
        <ContactUs></ContactUs>
      </div>
      
    </>
  )
}

export default App;