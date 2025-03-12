import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { StoreContext } from '../../context/StoreContext';
import { FaUserAlt } from "react-icons/fa";

function Navbar() {
  const { menu, setmenu } = useContext(StoreContext);
  const { showmenu, setShowmenu } = useContext(StoreContext);

  function toggle_menu()
  {
    setShowmenu(!showmenu);
  }

  return (
    <nav className='navbar'>
      <IoMenu className='menu_btn' size={30} onClick={toggle_menu} />
      <span className='title_name'>plashoe</span>
      <div className="navlist">

        <ul className='navlist_iteam' id={showmenu ? 'show' : ''}>
          <button className='close-btn' onClick={toggle_menu}><IoClose size={55} className='inside-btn' /></button>
          <li className='user'><FaUserAlt size={25} className='user-icon' /></li>
          <li onClick={() => { setmenu("home") }} className={menu === "home" ? "active" : ""}><Link to="/" className='menubar'>Home</Link></li>
          <li onClick={() => { setmenu("men") }} className={menu === "men" ? "active" : ""}><Link to="/men" className='menubar'>Men</Link></li>
          <li onClick={() => { setmenu("women") }} className={menu === "women" ? "active" : ""}><Link to="/women" className='menubar'>Women</Link></li>

          <li onClick={() => { setmenu("contact") }} className={menu === "contact" ? "active" : ""}><Link to="/contactus" className='menubar'>Contact Us</Link></li>
          <li> <Link to="/singin" className='link'>sing in </Link></li>
        </ul>
      </div>
      <div className="nav_right">
        <div className="iteams">
          <Link to="/orders" className='orders'>
            <FaShoppingCart size={25} color='black' />
            <span className='iteam_count'>0</span>
          </Link>
        </div>
        <div className="sing_in_btn">
          <FaUserAlt className="user" size={25} />
          <Link to="/singin" className='link'>sing in </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
