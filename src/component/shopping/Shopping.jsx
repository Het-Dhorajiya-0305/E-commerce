import React from 'react'
import './shopping.css';
import Footer from '../footer/Footer';
import ContactUs from '../contact_us/ContactUs';
import { IoMenu } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';


function Shopping(props) {
    // console.log(props.details[1]+"from shopping");  
    
    return (
        <div id='main_box'>
            <div className='main_content_box' id={props.category=="men"?"men_box":"women_box"} >
                <div className='shopping_content'>
                    <h1 className='heading'>{props.category}</h1>
                    <div className="filter_sort">
                        <div className="filter_btn">
                            <button className='filter_button'>
                                <span className='menu_icon_btn'><IoMenu className='menu_btn_filter' size={26} /></span>
                                <span>filter shoes</span>
                            </button>
                        </div>
                        <div className="sorting_shoes">
                            <form action="">
                                <select name="sorting" id="sorting">
                                    <option value="menu_order" selected="selected">Default sorting</option>
                                    <option value="price">Sort by price: low to high</option>
                                    <option value="price-desc">Sort by price: high to low</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div className="shopping">
                        {props.details.map((detail) => (
                            <div key={detail.id} className="iteam_shopping">
                                <img src={detail.loc} alt="not found" />
                                <h2>{detail.name}</h2>
                                <div className="price">
                                    <span>
                                        <FaIndianRupeeSign className='rupees' />
                                        {detail.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer></Footer>
            <ContactUs></ContactUs>
        </div>
    )
}

export default Shopping
