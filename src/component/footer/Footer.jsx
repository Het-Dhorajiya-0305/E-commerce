import React from 'react'
import './footer.css'
import shoes_bg from '../assets/shoes_bg.jpg'
import { FaLock } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";




function Footer() {
    return (
        <div>
            <div className='footer'>
                <div className='title_footer'>
                    Better for People & the Planet
                </div>
                <div className='content_data'>Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est dictum in vulputate</div>
                <div className="button">
                    <a href="#" className='shopping_button'>shop men</a>
                    <a href="#" className='shopping_button'>shop women</a>
                </div>
            </div>
            <div className="process">
                <div className="secure_payment">
                    <FaLock size={25}/>
                    <h3>

                    secure payment
                    </h3>
                </div>
                <div className="express_shipping">
                    <FaTruck size={25}/>
                    <h3>

                    Express Shipping
                    </h3>
                </div>
                <div className="free_return">
                    <FaSyncAlt size={25} />
                    <h3>

                    Free Return
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Footer
