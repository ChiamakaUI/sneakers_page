import React, { useContext } from "react";
import logo from './Images/logo.svg'

import avatar from './Images/image-avatar.png'

import './style.css'
import { CartContext } from "./Cart"
import CartIcon from "./CartIcon";



const Navbar = () => {
  const quantity = useContext(CartContext);
  console.log(quantity)

  // const cart = 'Your Cart is empty';

  // const [cartItems, setCartItems] = useState(cart);
  // const [showCart, setShowCart] = useState(false);

  // const showCartItems = () => {
  //   setShowCart(true)
  // }

    return (
      <div className="navbar">
        <div className="navbarUl">
          <img src={logo} alt="logo" />
          <ul>
            <li>Collections </li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="navbarProfile">
            <CartIcon />    
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </div>
    );
}

export default Navbar
