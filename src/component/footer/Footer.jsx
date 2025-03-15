import React from 'react'
import './footer.css'
import { FaLock } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';




function Footer() {
    return (
        <div className='footer-main-container'>
            <div className='footer'>
                <div className='title_footer'>
                    Better for People & the Planet
                </div>
                <div className='content_data'>Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est dictum in vulputate</div>
                <div className="button">
                    <Link to='/men' className='shopping_button'>shop men</Link>
                    <Link to='/women' className='shopping_button'>shop women</Link>
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
