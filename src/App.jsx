import './App.css'
import { useState } from 'react';

import Home from './pages/home/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import ContactUs from './component/contact_us/ContactUs.jsx';
import Men from './pages/men/Men.jsx';
import Women from './pages/women/Women.jsx';
import SingIn from './pages/sing_in/SingIn.jsx';
import Cart from './pages/cart/Cart.jsx';

import Product from './pages/product/Product.jsx';
import CheckOut from './pages/checkout/CheckOut.jsx';

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/men' element={<Men />}></Route>
          <Route path='/women' element={<Women />}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/singin' element={<SingIn />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/product/:gender/:pro_id' element={<Product />}></Route>
          <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        </Routes>
      </div>

    </>
  )
}

export default App;