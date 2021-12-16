import React from 'react'
import Cart from './Cart';
import "./style.css";

const Description = () => {
    return (
      <div className='productDes'>
        <p className="com">Sneaker Company</p>
        <h3 className="des_header">Fall Limited Edition Sneakers</h3>
        <p className="des_para">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <Cart/>
      </div>
    );
}

export default Description
