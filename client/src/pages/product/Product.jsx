import { useContext, useState } from 'react'
import React from 'react'
import './product.css'
import { FaRupeeSign } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import defaultarray from '../../component/Defaultarray';


function Product() {
  const { pro_id, gender } = useParams();
  const {addToCart,cartItems} =useContext(StoreContext)

  const arr=defaultarray("");

  const product = arr.find((item) => item.id === pro_id && item.gender === gender);

  // function increamentOrder(p_id, gen) {
  //   setCartItems((prevCart) =>
  //     prevCart.map((item) =>
  //       item.id === p_id && item.gender === gen
  //         ? { ...item, quantity: item.quantity + 1 }
  //         : item
  //     )
  //   );
  // }

  // function decreamentOrder(p_id, gen) {
  //   setCartItems((prevCart) =>
  //     prevCart.map((item) =>
  //       item.id === p_id && item.gender === gen && item.quantity > 1
  //         ? { ...item, quantity: item.quantity - 1 }
  //         : item
  //     )
  //   );
  // }

  if (!product) {
    return (
      <div className='product-main-container'>
        {/* <Navbar /> */}
        <div className="product-inner-container">
          <h2>Product not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className='product-main-container'>
      <div className="product-inner-container">
        <div className="product-detail-container">
          <div className="product-image">
            <img src={product.loc} alt={product.name} />
          </div>
          <div className="product-detail">
            <h2 className='product-name'>{product.name}</h2>
            <h2 className='rupee'><FaRupeeSign />{product.price}</h2>
            <div className="description">
              {product.description}
            </div>
            <div className="add-to-cart-increment">
              <div className="increament-btn">
                <div className="minus" 
                // onClick={() => decreamentOrder(pro_id, gender)}
                  >-</div>
                <div className="orders-count">{product.quantity}</div>
                <div className="plus"
                //  onClick={() => increamentOrder(pro_id, gender)}
                >+</div>
              </div>
              <div className="add-to-cart-btn">
                <button onClick={()=>addToCart(product.id,product.quantity)}>add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;
