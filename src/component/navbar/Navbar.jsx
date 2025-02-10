import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { StoreContext } from '../../context/StoreContext';

function Navbar() {
  const { menu, setmenu } = useContext(StoreContext);
  const { showmenu, setShowmenu } = useContext(StoreContext);

  return (
    <header className='navbar'>
      <IoMenu className='menu_btn' size={26} onClick={() => setShowmenu(!showmenu)} />
      <span className='title_name'>plashoe</span>
      <div id="navlist" className={showmenu ? "show" : "hide"}>
        <RxCross2 id='close_btn' size={55} display={showmenu ? "" : "none"} onClick={() => setShowmenu(!showmenu)} />
        <ul className='navlist_iteam'>
          <li onClick={() => { setmenu("home") }} className={menu === "home" ? "active" : ""}><Link to="/" className='menubar'>Home</Link></li>
          <li onClick={() => { setmenu("men") }} className={menu === "men" ? "active" : ""}><Link to="/men" className='menubar'>Men</Link></li>
          <li onClick={() => { setmenu("women") }} className={menu === "women" ? "active" : ""}><Link to="/women" className='menubar'>Women</Link></li>
          <li onClick={() => { setmenu("best seller") }} className={menu === "best seller" ? "active" : ""}><Link to="/bestSeller" className='menubar'>Best Seller</Link></li>
          <li onClick={() => { setmenu("new arrivals") }} className={menu === "new arrivals" ? "active" : ""}><Link to="/newArrival" className='menubar'>New Arrival</Link></li>
          <li onClick={() => { setmenu("contact") }} className={menu === "contact" ? "active" : ""}><a href='#contact_us' className='menubar'>contact</a></li>
        </ul>
      </div>
      <div className="nav_right">
        <div className="add_to_cart">
          <a href="">
            <FaShoppingCart size={25} color='black' />
          </a>
          <span className='iteam_count'>0</span>
        </div>
        <div className="sing_in_btn">
          <Link to="/singin" className='singin'>sing in</Link>
          <button></button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
