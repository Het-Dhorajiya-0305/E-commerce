import React from 'react'
import './Navbar.css'
import { FaShoppingCart } from "react-icons/fa";



function Navbar() {
  return (
    <div className='navbar'>
      <div className="title_name">PLASHOE</div>
      <div className="nav_content">
        <div className="navlist">
          <ul>
            <li><a href="#">MEN</a></li>
            <li><a href='#'>women</a></li>
            <li><a href='#'>collection</a></li>
            <li><a href='#'>lookbook</a></li>
            <li><a href='#'>sale</a></li>
            <li><a href='#'>contact</a></li>
          </ul>
        </div>
      </div>
      <div className="add_to_cart">
        <span className='iteam_count'>0</span>
        <a href="">
          <FaShoppingCart size={25} color='black'/>
        </a>
      </div>
    </div>
  )
}

export default Navbar
