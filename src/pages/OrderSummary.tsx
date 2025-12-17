import { useLocation, useNavigate } from "react-router-dom";
import "./OrderSummary.css";

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { formData, paymentData, items, totalPrice } = location.state || {};

  if (!location.state) {
    return (
      <div className="order-summary-container">
        <h2>❌ No order data found</h2>
        <button className="back-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20 container">
      <div className="order-summary-container">
        <h2 className="success-title">🎉 Your Order Has Now Been Confirmed!</h2>
        <p className="subtitle">Thank you for shopping with Tech Stars 💙</p>

        {/* Shipping Info */}
        <div className="order-box">
          <h3>📍 Shipping To</h3>
          <p>{formData.fullName}</p>
          <p>{formData.address}</p>
          <p>{formData.city}, {formData.postalCode}</p>
          <p>{formData.email}</p>
          <p>{formData.phone}</p>
        </div>

        {/* Items List */}
        <div className="order-box">
          <h3>🛍 Products Ordered</h3>
          {items.map((item: any) => (
            <div key={item.id} className="order-product">
              <img src={item.img} alt={item.title} />
              <span>{item.title}</span>
              <strong>Qty: {item.quantity}</strong>
            </div>
          ))}
        </div>

        {/* ORDER STATUS TIMELINE */}
<div className="order-box">
  <h3>📦 Order Status</h3>

  <div className="order-timeline">
    <div className="timeline-step active">
      <span className="dot"></span>
      <p>Confirmed</p>
    </div>

    <div className="timeline-step active">
      <span className="dot"></span>
      <p>Shipped</p>
    </div>

    <div className="timeline-step">
      <span className="dot"></span>
      <p>Delivered</p>
    </div>
  </div>
</div>


        {/* Payment Summary */}
        <div className="order-box">
          <h3>💳 Payment Method</h3>
          <p>Card Ending •••• {paymentData.cardNumber.slice(-4)}</p>
          <strong className="total-price">Total Paid: ${totalPrice}</strong>
        </div>

        <button className="back-btn" onClick={() => navigate("/")}>
          Back to Home 🏡
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
