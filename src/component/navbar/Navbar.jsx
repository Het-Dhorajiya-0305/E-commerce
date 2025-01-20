import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";





function Navbar() {

  const [showmenu, setShowmenu] = useState(false);
  const [menu,setmenu]=useState("home");

  return (
    <header className='navbar'>
      <IoMenu className='menu_btn' size={26} onClick={() => setShowmenu(!showmenu)} />
      <span className='title_name'>plashoe</span>
      <div id="navlist" className={showmenu ? "show" : "hide"}>
        <RxCross2 id='close_btn' size={55} display={showmenu ? "" : "none"} onClick={() => setShowmenu(!showmenu)} />
        {/* <div className="user"></div> */}
        <ul className='navlist_iteam'>
          <li onClick={()=>{setmenu("home")}} className={menu==="home"?"active":""}><a href='#hero'>Home</a></li>
          <li onClick={()=>{setmenu("men")}} className={menu==="men"?"active":""}><a href="#">Men</a></li>
          <li onClick={()=>{setmenu("women")}} className={menu==="women"?"active":""}><a href='#'>women</a></li>
          <li onClick={()=>{setmenu("best seller")}} className={menu==="best seller"?"active":""}><a href='#best_seller'> best seller</a></li>
          <li onClick={()=>{setmenu("new arrivals")}} className={menu==="new arrivals"?"active":""}><a href='#new_arrivals'>new arrivals</a></li>
          <li onClick={()=>{setmenu("contact")}} className={menu==="contact"?"active":""}><a href='#contact_us'>contact</a></li>
        </ul>
      </div>
      <div className="add_to_cart">
        <a href="">
          <FaShoppingCart size={25} color='black' />
        </a>
        <span className='iteam_count'>0</span>

      </div>
    </header>
  )
}

export default Navbar
