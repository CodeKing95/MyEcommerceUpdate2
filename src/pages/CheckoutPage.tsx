import { useSelector } from "react-redux";
import { useState, type ChangeEvent, type FormEvent } from "react";
import "./CheckoutPage.css";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { items, totalPrice, totalQuantity } = useSelector(
    (state: RootState) => state.cart
  );

  const navigate = useNavigate();


  const [step, setStep] = useState<number>(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleProceedToPayment = (e: FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

const handlePayNow = (e: FormEvent) => {
  e.preventDefault();

  navigate("/order-summary", {
    state: { formData, paymentData, items, totalPrice },
  });
};
  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-grid">

        {/* Step 1 — Shipping Form */}
        {step === 1 && (
          <form className="checkout-form" onSubmit={handleProceedToPayment}>
            <h3>Shipping Information</h3>

            {Object.entries(formData).map(([key, value]) => (
              <input
                key={key}
                type="text"
                name={key}
                value={value}
                placeholder={key.replace(/([A-Z])/g, " $1")}
                onChange={handleChange}
                required
              />
            ))}

            <button type="submit" className="place-order-btn">
              Proceed to payment 💳
            </button>
          </form>
        )}

        {/* Step 2 — Payment Form */}
        {step === 2 && (
  <form
    className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200 animate-fadeIn"
    onSubmit={handlePayNow}
  >
    <h3 className="text-2xl font-semibold mb-5 text-gray-800 flex items-center gap-2">
      💳 Payment Details
    </h3>

    {/* Cardholder Name */}
    <label className="text-sm text-gray-600">Cardholder Name</label>
    <div className="relative mb-4">
      <input
        type="text"
        name="cardName"
        placeholder="John Doe"
        value={paymentData.cardName}
        onChange={handlePaymentChange}
        required
        className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-600 outline-none"
      />
    </div>

    {/* Card Number */}
    <label className="text-sm text-gray-600">Card Number</label>
    <div className="relative mb-4">
      <input
        type="text"
        name="cardNumber"
        placeholder="xxxx xxxx xxxx xxxx"
        value={paymentData.cardNumber}
        onChange={handlePaymentChange}
        required
        maxLength={16}
        className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-600 outline-none"
      />
      <span className="absolute right-3 top-[50%] -translate-y-1/2 text-gray-400">💳</span>
    </div>

    <div className="grid grid-cols-2 gap-4">
      {/* Expiry */}
      <div>
        <label className="text-sm text-gray-600">Expiry Date</label>
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={paymentData.expiry}
          onChange={handlePaymentChange}
          required
          maxLength={5}
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-600 outline-none"
        />
      </div>

      {/* CVV */}
      <div>
        <label className="text-sm text-gray-600">CVV</label>
        <input
          type="password"
          name="cvv"
          placeholder="***"
          value={paymentData.cvv}
          onChange={handlePaymentChange}
          required
          maxLength={4}
          className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-600 outline-none"
        />
      </div>
    </div>

    {/* Pay Now Button */}
    <button
      type="submit"
      className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg
                 font-semibold text-lg hover:bg-blue-700 transition-all
                 flex items-center gap-2 justify-center"
    >
      ✔ Pay Now — ${totalPrice}
    </button>

    {/* Security Note */}
    <p className="text-xs text-gray-500 mt-3 text-center">
      🔒 Your payment is securely encrypted
    </p>
  </form>
)}


        {/* Order Summary */}
        <div className="order-summary">
          <h3>Your Order Summary</h3>

          <div className="items-list">
            {items.map((item) => (
              <div key={item.id} className="summary-item">
                <img src={item.img} alt={item.title} className="summary-img" />
                <div className="summary-info">
                  <p>{item.title}</p>
                  <span>Qty: {item.quantity}</span>
                </div>
                <strong>${item.totalPrice}</strong>
              </div>
            ))}
          </div>

          <div className="summary-totals">
            <p>Total Items: {totalQuantity}</p>
            <p className="grand-total">Total: ${totalPrice}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;

