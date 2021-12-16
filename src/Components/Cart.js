import React, { useState } from "react";
import cartImage from "./Images/icon-cart.svg";
import plus from "./Images/icon-plus.svg";
import minus from "./Images/icon-minus.svg";
import "./style.css";
import CartIcon from "./CartIcon";
export const CartContext = React.createContext();
const Cart = () => {

  const [quantity, setQuantity] = useState(0)
  const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }
    const decreaseQuantity = () => {
        if (quantity === 0) return;
        setQuantity(quantity - 1);
  }
  
  const showCart = () => {
    alert(quantity);
  }
    return (
      <div className="price">
        <h3>
          $125.00 <span id="discount">50%</span>
        </h3>
        <p id="prevPrice">$250. 00</p>
        <CartContext.Provider value={quantity}>
          <div className="addToCart">
            <div className="quantity">
              <button id="first" onClick={decreaseQuantity}>
                <img src={minus} alt="cartImg" />
              </button>
              <p>{quantity}</p>
              <button id="second" onClick={increaseQuantity}>
                <img src={plus} alt="cartImg" />
              </button>
            </div>
            <div className="hidden">
              <CartIcon />
            </div>
            <button id="addToCartBtn" onClick={showCart}>
              <img src={cartImage} alt="cartImg" />
              Add to Cart
            </button>
          </div>
        </CartContext.Provider>
      </div>
    );
}

export default Cart
