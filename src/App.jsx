import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Navbar from './component/navbar/Navbar';
import Home from './component/hero/Home';
import AboutUs from './component/aboutUs/AboutUs';
import Seller from './component/best_seller/Seller';
import Men_Women from './component/menandwomen/Men_Women';
import NewArrival from './component/new_arrive/NewArrival';
import Info from './component/info/Info';



function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  })

  return (
    <div className="app">
      <Navbar></Navbar>
      <Home></Home>
      <hr />
      <AboutUs></AboutUs>
      <hr />
      <Seller></Seller>
      <Men_Women></Men_Women>
      <NewArrival></NewArrival>
      <Info></Info>
    </div>
  )
}

export default App;