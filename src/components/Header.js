import { ReactComponent as CartSvg } from "../assets/icon-cart.svg";
import { ReactComponent as Menu } from "../assets/icon-menu.svg";
import { ReactComponent as CloseBtn } from "../assets/icon-close.svg";
import avatar from "../assets/image-avatar.png";
import { useState } from "react";
import Cart from "./Cart";

function Header({cartItem, setCartItem, amount, setAmount}) {

  // hamburger
  const [menu, toggleMenu] = useState(false);
  function openTab() {
    toggleMenu(prevVal => !prevVal);
  }
  function closeTab() {
    toggleMenu(prevVal => !prevVal);
  }

  // cart
  const [cartIsOpen, setCartIsOpen] = useState(false);
  function toggleCart () {
    setCartIsOpen(prevVal => !prevVal);
  }

  return (
    <header className="header body-wrapper">
    {/* Mobile nav */}
      <div className="menu">
      {!menu ?  <div className="hamburger">
          <Menu onClick={openTab} style={{cursor: "pointer"}}/>
        </div> : <nav className="hamburger-nav"> 
        <CloseBtn onClick={closeTab}/>
          <ul className="hamburger-links">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>}
        {menu && <div className="overlay"></div>}
      </div>
      <div className="logo">
        sneakers
      </div>
      {/* Laptop nav */}
      <div className="laptop-nav">
      <ul className="laptop-links">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </div>
      <div className="cart">
        <CartSvg className="cart-btn" onClick={toggleCart}/>
        { cartIsOpen && <div className="cart-overlay container">
          <Cart item={cartItem} setCartItem={setCartItem} amount={amount} setAmount={setAmount}/>
        </div>}
        <div className="amount-in-cart">
          {Object.keys(cartItem).length !== 0 && amount}
        </div>
      </div>
      <div className="avatar" style={{margin: "0rem 1rem"}}>
        <img src={avatar} alt="avatar" width="22" height="20" />
      </div>
    </header>
  )
}

export default Header