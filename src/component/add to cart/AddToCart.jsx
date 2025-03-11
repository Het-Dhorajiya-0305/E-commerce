import React from 'react'
import './add-to-cart.css';

function AddToCart() {
  return (
    <div>
      <table>
        <tr>
            <td>Iteam</td>
            <td>quantity</td>
            <td>prize</td>
            <td>total</td>
        </tr>
        <tr>
            <td>phone</td>
            <td>1</td>
            <td>10000</td>
            <td>10000</td>
        </tr>
        <tr>
            <td>tshirt</td>
            <td>3</td>
            <td>500</td>
            <td>1500</td>
        </tr>
      </table>
    </div>
  )
}

export default AddToCart
