import React from 'react'
import './contact_us.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';



function ContactUs() {
    return (
        <>
            <div id='contact_us'>
                <Footer></Footer>
                <div className='main_box'>
                    <div className="plashoe_content">
                        <h3>plashoe</h3>
                        <p>Praesent eget tortor sit risus egestas nulla pharetra ornare quis bibendum est bibendum sapien proin nascetur</p>

                    </div>
                    <div className="all_detail">
                        <div className="shop">
                            <h3>shop</h3>
                            <li><Link>shop men</Link></li>
                            <li><Link>shop women</Link></li>
                            <li><Link>lookbook</Link></li>
                            <li><Link>sale</Link></li>
                        </div>
                        <div className="need_help">
                            <h3>need help?</h3>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">size chart</a></li>
                            <li><a href="#">contact</a></li>
                            <li><a href="#">shipping & returns</a></li>
                        </div>
                    </div>
                </div>
                <div className="icons">
                    <a href="#" className='icon' target='blank'>
                        <FaInstagram size={23} />
                    </a>
                    <a href="#" className='icon' target='blank'>
                        <FaFacebook size={23} />
                    </a>
                    <a href="#" className='icon' target='blank'>
                        <FaTwitter size={23} />
                    </a>

                </div>
            </div>
        </>

    )
}

export default ContactUs
