import './App.css'
import { useEffect, useState } from 'react';

import Home from './pages/home/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './component/contact_us/ContactUs.jsx';
import Footer from './component/footer/Footer.jsx'
// import Men from './pages/men/Men.jsx';
// import Women from './pages/women/Women.jsx';



function App() {


  return (
    <>
      <div className="app">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          {/* <Route path='/men' element={<Men />}></Route>
        <Route path='/women' element={<Women />}></Route> */}
        </Routes>
      </div>
      <Footer></Footer>
      <ContactUs></ContactUs>
    </>
  )
}

export default App;