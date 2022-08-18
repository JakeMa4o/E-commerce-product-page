import { ReactComponent as Delete } from "../assets/icon-delete.svg";

function Cart({ item, setCartItem, amount, setAmount }) {

  function deleteItem() {
    setAmount(0);
    setCartItem({});
  }


  return (
    <div>
      <span className="cart-header">Cart</span>
      <hr />
      {Object.keys(item).length === 0 ? <div className="empty-cart" style={{fontWeight: "700", color: "hsl(219, 9%, 45%)"}}>Your cart is empty</div> :
        <div className="cart-body">
          <div className="cart-info">
            <img className="cart-img" src={item.url} alt={item.alt} />
            <div className="price-description">
              <p>{item.brandName.substring(0, 20)}...</p>
              <p>{item.price}.00 x {amount} <span style={{fontWeight: "700", display: "inline", color: "#000"}}>{item.price * amount}.00</span></p>
            </div>
            <div className="delete-btn">
            <Delete style={{cursor: "pointer"}} onClick={deleteItem} />
            </div>
          </div>
          <button className="checkout">Checkout</button>
        </div>}
    </div>
  )
}

export default Cart