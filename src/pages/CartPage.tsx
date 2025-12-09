import { useSelector, useDispatch } from "react-redux";
import "./CartPage.css"; // ← Add this
import {
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
} from "../redux/cartSlice";
import type { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Order Cart</h2>

      {items.length === 0 ? (
        <p className="empty-text">Your cart is empty! Keep shopping 😊</p>
      ) : (
        <div className="cart-layout">
          
          {/* Cart Items */}
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-details">
                  <img src={item.img} alt={item.title} className="item-img" />

                  <div>
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-price">${item.price} each</p>

                    {/* Quantity Controls */}
                    <div className="qty-controls">
                      <button
                        onClick={() => dispatch(decreaseQty(item.id))}
                        className="qty-btn"
                      >
                        –
                      </button>

                      <span className="qty-value">{item.quantity}</span>

                      <button
                        onClick={() => dispatch(increaseQty(item.id))}
                        className="qty-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="item-total">
                  <p>${item.totalPrice}</p>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="summary-box">
            <h3>Your Order Summary</h3>
            <p className="summary-row">
              Total Items: <span>{totalQuantity}</span>
            </p>
            <p className="summary-total">
              Total: <span>${totalPrice}</span>
            </p>

            <Link to="/checkout">
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>

            <button
              onClick={() => dispatch(clearCart())}
              className="clear-btn"
            >
              Clear Cart 🗑
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default CartPage;
