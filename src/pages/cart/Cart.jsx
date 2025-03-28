import React, { useState } from 'react'
import defaultarray from '../../component/Defaultarray';
import './cart.css'
import { FaRupeeSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



function Cart() {
  const [ordersNumber,setOrderNumber]=useState(0);

  function increamentOrder()
  {
    setOrderNumber(ordersNumber++);
  }
  function decreamentOrder()
  {
    setOrderNumber(ordersNumber--);
  }

  const arr = defaultarray("male");
  return (
    <div className="main-cart-container">
      <div className="inner-cart-container">
        <div className="cart-title">
          shopping Cart
        </div>
        <div className="cart-content">
          <div className="cart-left">
            <table>
              <tr>
                <th className='image-header'></th>
                <th className='product-detail'>Product</th>
                <th>Prize</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
              <tr className='height-more'>
                <td className='empty-con'>
                  <MdDelete />
                  <img className="img-fluid" src={arr[0].loc} />
                </td>
                <td>{arr[0].name}</td>
                <td><FaRupeeSign />44.00</td>
                <td><div className="increament-btn"><div className="minus" onClick={decreamentOrder}>-</div> <div className="orders-count">{ordersNumber}</div><div className="plus" onClick={increamentOrder}>+</div></div></td>
                <td><FaRupeeSign />44.00</td>
              </tr>
              <tr>
              <td className='empty-con'>
                  <MdDelete />
                  <img className="img-fluid" src={arr[0].loc} />
                </td>
                <td>{arr[0].name}</td>
                <td><FaRupeeSign />44.00</td>
                <td><div className="increament-btn"><div className="minus" onClick={decreamentOrder}>-</div> <div className="orders-count">{ordersNumber}</div><div className="plus" onClick={increamentOrder}>+</div></div></td>
                <td><FaRupeeSign />44.00</td>
              </tr> <tr>
              <td className='empty-con'>
                  <MdDelete />
                  <img className="img-fluid" src={arr[0].loc} />
                </td>
                <td>{arr[0].name}</td>
                <td><FaRupeeSign />44.00</td>
                <td><div className="increament-btn"><div className="minus" onClick={decreamentOrder}>-</div> <div className="orders-count">{ordersNumber}</div><div className="plus" onClick={increamentOrder}>+</div></div></td>
                 <td><FaRupeeSign />44.00</td>
              </tr>
            </table>
          </div>
          <div className="cart-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellendus sunt, tenetur molestiae ipsam ad quis tempore soluta magni officia sit. Velit at ex quaerat consequatur voluptate excepturi repudiandae ratione?</div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
