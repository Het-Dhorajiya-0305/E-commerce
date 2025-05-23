import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar-main-container'>
            <div className='sidebar-container'>
                <h1 className='title-name'>PLASHOES</h1>
                <div className="sidebar">   
                    <ul className='sidebar_iteam' >
                        <div className="add-iteams">
                            <li className="add-iteam-li"><Link to="/addIteams" className='link'>add iteam</Link></li>
                        </div>
                        <div className="iteam-list">
                            <li className="iteam-list-li"><Link to="/iteamList" className='link'>iteams</Link></li>
                        </div>
                        <div className="orders">
                            <li className="orders-li"><Link to="/orders" className='link'>orders</Link></li>
                        </div>
                    </ul>
                </div>
                <div className="login-btn"><Link to="/adminLogin" className='link'>Login</Link></div>
            </div>
        </div>
    )
}

export default Sidebar;