import './App.css'
import { useEffect, useState } from 'react';

import Home from './pages/home/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import ContactUs from './component/contact_us/ContactUs.jsx';
import Footer from './component/footer/Footer.jsx'
import Men from './pages/men/Men.jsx';
import Women from './pages/women/Women.jsx';
import NewArrival from './component/new_arrive/NewArrival.jsx';
import Seller from './component/best_seller/Seller.jsx';
import Navbar from './component/navbar/Navbar.jsx';
import SingIn from './component/sing in/SingIn.jsx';

function App() {
  return (
    <>
      <div className="app">
        {/* <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/men' element={<Men />}></Route>
          <Route path='/women' element={<Women />}></Route>
          <Route path='/newArrival' element={<NewArrival />}></Route>
          <Route path='/bestSeller' element={<Seller />}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/singin' element={<SingIn/>}></Route>


        </Routes>
        <ContactUs></ContactUs> */}
        <SingIn></SingIn>
      </div>
      
    </>
  )
}

export default App;