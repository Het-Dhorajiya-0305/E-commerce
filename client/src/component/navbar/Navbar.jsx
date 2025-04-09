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



  return (
    <nav className='navbar'>
      <IoMenu className='menu_btn' size={30} onClick={() => setShowmenu(true)} />
      <span className='title_name'>plashoe</span>
      <div className="navlist">
        <ul className='navlist_iteam' id={showmenu ? 'show' : ''}>
          <IoClose size={30} className='inside-btn' onClick={() => setShowmenu(false)} />
          <li className='user'> <Link to="/singin" className='link'><FaUserAlt  size={25} color='black'/></Link></li>
          <li onClick={() => {
            setmenu("home");
            setShowmenu(false);
          }} className={menu === "home" ? "active" : ""}><Link to="/" className='menubar'>Home</Link></li>
          <li onClick={() => {
            setmenu("men");
            setShowmenu(false);
          }} className={menu === "men" ? "active" : ""}><Link to="/men" className='menubar'>Men</Link></li>
          <li onClick={() => {
            setmenu("women");
            setShowmenu(false);
          }} className={menu === "women" ? "active" : ""}><Link to="/women" className='menubar'>Women</Link></li>

          <li onClick={() => {
            setmenu("contact");
            setShowmenu(false);
          }} className={menu === "contact" ? "active" : ""}><Link to="/contactus" className='menubar'>Contact Us</Link></li>
        </ul>
      </div>
      <div className="nav_right">
        <div className="iteams">
          <Link to="/cart" className='orders'>
            <FaShoppingCart size={25} color='black' />
            <span className='iteam_count'>0</span>
          </Link>
        </div>
        <div className="sing_in_btn">
          <Link to="/singin" className='link'><FaUserAlt className="user" size={25} color='black'/></Link>
        </div>
      </div>
    </nav >
  )
}

export default Navbar
