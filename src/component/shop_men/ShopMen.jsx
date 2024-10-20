import React from 'react'
import './shop_men.css'
import { FaIndianRupeeSign } from "react-icons/fa6";
import mintshoes from '../assets/mint_shoes.jpg'
import red_shoes from '../assets/red_shoes.jpg'
import black_shoes from '../assets/black_shoes.jpg'
import shoes13 from '../assets/shoes13.jpg'
import shoes7 from '../assets/shoes7.jpg'
import shoes8 from '../assets/shoes8.jpg'
import shoes14 from '../assets/shoes14.jpg'
import shoes1 from '../assets/shoes1.jpg'



function ShopMen() {
  return (
    <div>
       <div>
            <div className='arrival'>
                <div className='new_arrival'>
                    <h2>new arrivals</h2>
                    <a href="Home">view all best seller</a>
                </div>
                <div className="iteam_list">
                    <div className="iteam1 iteam">
                        <img src={shoes7} alt="" />
                        <h2>Men’s Navy Running</h2>
                        <div className="price">

                            <span>
                                <FaIndianRupeeSign className='rupees' />

                                8740</span>
                        </div>
                    </div>
                    <div className="iteam2 iteam">
                        <img src={shoes8} alt="" />
                        <h2>Men’s Green Running</h2>
                        <div className="price">

                            <span>
                                <FaIndianRupeeSign className='rupees' />

                                7480</span>
                        </div>
                    </div>
                    <div className="iteam3 iteam">
                        <img src={mintshoes}></img>
                        <span className='view_detail'>view detail</span>
                        <h2>men’s classic mint
                        </h2>
                        <div className="price">

                            <span>
                                <FaIndianRupeeSign className='rupees' />

                                6720</span>
                        </div>
                    </div>
                    <div className="iteam4 iteam">
                        <img src={red_shoes} alt="" />
                        <h2>men’s red running
                        </h2>
                        <div className="price">

                            <span>
                                <FaIndianRupeeSign className='rupees' />

                                7478</span>
                        </div>
                    </div>
                    <div className="iteam5 iteam">
                        <img src={black_shoes} alt="" />
                        <h2>men’s black running</h2>
                        <div className="price">

                            <span>
                                <FaIndianRupeeSign className='rupees' />

                                4789</span>
                        </div>
                    </div>
                    <div className="iteam7 iteam">
                        <img src={shoes13} alt="" />
                        <h2>Men’s Earth-Tone Sneaker
                        </h2>
                        <div className="price">

                            <span>
                                <FaIndianRupeeSign className='rupees' />

                                6218</span>
                        </div>
                    </div>
                    <div className="iteam8 iteam">
                        <img src={shoes14} alt="" />
                        <h2>Men’s Moonstone Sneaker</h2>
                        <div className="price">

                            <span>
                                <FaIndianRupeeSign className='rupees' />

                                6218</span>
                        </div>
                    </div>
                    <div className="iteam8 iteam">
                        <img src={shoes1} alt="" />
                        <h2>Men’s classic blue</h2>
                        <div className="price">

                            <span>
                                <FaIndianRupeeSign className='rupees' />

                                6218</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopMen
