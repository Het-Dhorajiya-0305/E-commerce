import React from 'react'
import './shopping.css';

import { FaIndianRupeeSign } from "react-icons/fa6";


function Shopping(props) {
    return (
            <div className='shopping-main-container'  >
                <div className='shopping_content'>
                    <h1 className='heading'>{props.category}</h1>
                    <div className="shopping" id={props.category == "men" ? "men_box" : "women_box"}>
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
    )
}

export default Shopping
