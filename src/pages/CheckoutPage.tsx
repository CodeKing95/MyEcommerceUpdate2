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

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  /* ---------------- Handlers ---------------- */

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleProceedToPayment = (e: FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  /* ---------------- Validation ---------------- */

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (paymentData.cardName.trim().length < 3) {
      newErrors.cardName = "Cardholder name must be at least 3 characters";
    }

    if (!/^\d{16}$/.test(paymentData.cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentData.expiry)) {
      newErrors.expiry = "Expiry must be in MM/YY format";
    }

    if (!/^\d{3,4}$/.test(paymentData.cvv)) {
      newErrors.cvv = "CVV must be 3 or 4 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayNow = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    navigate("/order-summary", {
      state: { formData, paymentData, items, totalPrice },
    });
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="pt-20 container">
      <div className="checkout-container">
        <h2 className="checkout-title">Checkout</h2>

        <div className="checkout-grid">
          {/* Step 1 — Shipping */}
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

          {/* Step 2 — Payment (VALIDATED) */}
          {step === 2 && (
            <form
              onSubmit={handlePayNow}
              className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold mb-5 text-gray-800">
                💳 Payment Details
              </h3>

              {/* Cardholder Name */}
              <label className="text-sm text-gray-600">Cardholder Name</label>
              <input
                type="text"
                name="cardName"
                placeholder="MR JACKIE CHAN"
                value={paymentData.cardName}
                onChange={handlePaymentChange}
                className={`w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 outline-none ${
                  errors.cardName
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-blue-600"
                }`}
              />
              {errors.cardName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.cardName}
                </p>
              )}

              {/* Card Number */}
              <label className="text-sm text-gray-600 mt-4 block">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                placeholder="XXXX XXXX XXXXXX"
                maxLength={16}
                value={paymentData.cardNumber}
                onChange={handlePaymentChange}
                className={`w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 outline-none ${
                  errors.cardNumber
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-blue-600"
                }`}
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.cardNumber}
                </p>
              )}

              <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Expiry */}
                <div>
                  <label className="text-sm text-gray-600">Expiry (MM/YY)</label>
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    maxLength={5}
                    value={paymentData.expiry}
                    onChange={handlePaymentChange}
                    className={`w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 outline-none ${
                      errors.expiry
                        ? "border-red-500 focus:ring-red-400"
                        : "focus:ring-blue-600"
                    }`}
                  />
                  {errors.expiry && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.expiry}
                    </p>
                  )}
                </div>

                {/* CVV */}
                <div>
                  <label className="text-sm text-gray-600">CVV</label>
                  <input
                    type="password"
                    name="cvv"
                    placeholder="CVV"
                    maxLength={4}
                    value={paymentData.cvv}
                    onChange={handlePaymentChange}
                    className={`w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 outline-none ${
                      errors.cvv
                        ? "border-red-500 focus:ring-red-400"
                        : "focus:ring-blue-600"
                    }`}
                  />
                  {errors.cvv && (
                    <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
              >
                ✔ Pay Now — ${totalPrice}
              </button>

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
    </div>
  );
};

export default CheckoutPage;
