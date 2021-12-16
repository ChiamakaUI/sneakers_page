import React, { useState, useContext } from "react";
import cartImg from "./Images/icon-cart.svg";
import firstImage from "./Images/image-product-1.jpg";
import delImg from "./Images/icon-delete.svg";
import { CartContext } from "./Cart";

const CartIcon = () => {
    const quantity = useContext(CartContext);
    // console.log(quantity);

    // const cart = "Your Cart is empty";
    // const [cartItems, setCartItems] = useState(cart);
  // const [cartItems, setCartItems] = useState(quantity);
  const [showCart, setShowCart] = useState(false);
  
  // console.log(cartItems)

  // const setCart = () => {
  //   setCartItems(quantity);
  // };

    const showCartItems = () => {
      setShowCart(true);

      // setCart()
  };

  // console.log(cartItems);
  


    return (
      <div>
        <img src={cartImg} alt="cartImg" onClick={showCartItems} />
        <div className={showCart === false ? "hidden" : "cartItem show"}>
          <h3>Cart</h3>
          <hr />

          <p className={quantity === 0 ? "show" : "hidden"}>
            Your Cart is empty
          </p>
          <div className={quantity >= 1 ? "show" : "hidden"}>
                <div className="cartProperty">
              <img src={firstImage} alt="product" id="small" />
              <p>
                Fall Limited Edition Sneakers <br /> <span></span>
              </p>
              <img src={delImg} alt="delete" />
            </div>
            <button id="checkout">Checkout</button>
          </div>
        </div>
      </div>
    );
}

export default CartIcon
