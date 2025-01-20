import React from 'react'
import './contact_us.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



function ContactUs() {
    return (
        <div id='contact_us'>
            <div className='main_box'>
                <div className="plashoe_content">
                    <h3>plashoe</h3>
                    <p>Praesent eget tortor sit risus egestas nulla pharetra ornare quis bibendum est bibendum sapien proin nascetur</p>

                </div>
                <div className="all_detail">
                    <div className="shop">
                        <h3>shop</h3>
                        <li><a href="#">shop men</a></li>
                        <li><a href="#">shop women</a></li>
                        <li><a href="#">lookbook</a></li>
                        <li><a href="#">sale</a></li>
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
    )
}

export default ContactUs
