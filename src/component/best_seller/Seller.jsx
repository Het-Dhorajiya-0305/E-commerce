import React from 'react'
import './seller.css'
import shoes1 from '../assets/shoes1.jpg'
import shoes2 from '../assets/shoes2.jpg'
import shoes3 from '../assets/shoes3.jpg'
import shoes4 from '../assets/shoes4.jpg'
import shoes5 from '../assets/shoes5.jpg'
import shoes8 from '../assets/shoes8.jpg'
import { FaIndianRupeeSign } from "react-icons/fa6";


function Seller() {


    return (
        <div className='seller'>
            <div className='best_seller'>
                <h2>our best seller</h2>
            </div>
            <div className="iteam_list">
                <div className="iteam1 iteam">
                    <img src={shoes1} alt="" />
                    <h2>men's classic blue</h2>
                    <div className="price">

                        <span>
                            <FaIndianRupeeSign className='rupees' />

                            5220</span>
                    </div>
                </div>
                <div className="iteam2 iteam">
                    <img src={shoes2} alt="" />
                    <h2>Women’s Cream Suede</h2>
                    <div className="price">

                        <span>
                            <FaIndianRupeeSign className='rupees' />

                            4860</span>
                    </div>
                </div>
                <div className="iteam3 iteam">
                    <img src={shoes3}></img>
                    <h2>Women’s Candy City Run</h2>
                    <div className="price">
                        <span>
                            <FaIndianRupeeSign  className='rupees' />
                            3350</span>
                    </div>
                </div>
                <div className="iteam4 iteam">
                    <img src={shoes4} alt="" />
                    <h2>men's classic blue</h2>
                    <div className="price">

                        <span>
                            <FaIndianRupeeSign className='rupees' />

                            5040</span>
                    </div>
                </div>
                <div className="iteam5 iteam">
                    <img src={shoes5} alt="" />
                    <h2>Women’s Orange Sneaker</h2>
                    <div className="price">

                        <span>
                            <FaIndianRupeeSign className='rupees' />

                            3648</span>
                    </div>
                </div>
                <div className="iteam6 iteam">
                    <img src={shoes8} alt="" />
                    <h2>Men’s Green Running</h2>
                    <div className="price">

                        <span>
                            <FaIndianRupeeSign className='rupees' />

                            7276</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seller
