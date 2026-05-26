import React, { useState } from 'react';

import {
  ArrowLeft,
  Lock,
  CreditCard,
  Smartphone,
  Building2
} from 'lucide-react';

import '../styles/PaymentPage.css';

export default function PaymentPage({
  orderData,
  onPaymentSuccess,
  onBack
}) {

  const [paymentMethod, setPaymentMethod] =
    useState('card');

  const [cardData, setCardData] =
    useState({

      cardNumber: '',

      cardHolder: '',

      expiryDate: '',

      cvv: ''
    });

  const [processing, setProcessing] =
    useState(false);

  const [errors, setErrors] =
    useState({});

  const subtotal =
    orderData?.orderItems?.reduce(

      (sum, item) =>

        sum +

        (
          item.price *
          item.quantity
        ),

      0

    ) || 5000;

  const tax = subtotal * 0.1;

  const total = subtotal + tax;

  /* CARD CHANGE */

  const handleCardChange = (e) => {

    const {
      name,
      value
    } = e.target;

    let formattedValue = value;

    if (name === 'cardNumber') {

      formattedValue =
        value
          .replace(/\s/g, '')
          .slice(0, 16);

      formattedValue =
        formattedValue
          .replace(/(\d{4})/g, '$1 ')
          .trim();
    }

    else if (name === 'expiryDate') {

      formattedValue =
        value
          .replace(/\D/g, '')
          .slice(0, 4);

      if (
        formattedValue.length >= 2
      ) {

        formattedValue =

          formattedValue.slice(0, 2)

          +

          '/'

          +

          formattedValue.slice(2);
      }
    }

    else if (name === 'cvv') {

      formattedValue =
        value
          .replace(/\D/g, '')
          .slice(0, 3);
    }

    setCardData(prev => ({

      ...prev,

      [name]: formattedValue

    }));

    if (errors[name]) {

      setErrors(prev => ({

        ...prev,

        [name]: ''

      }));
    }
  };

  /* VALIDATION */

  const validateCardPayment = () => {

    const newErrors = {};

    if (

      !cardData.cardNumber ||

      cardData.cardNumber
        .replace(/\s/g, '')
        .length !== 16

    ) {

      newErrors.cardNumber =
        'Valid 16-digit card number required';
    }

    if (
      !cardData.cardHolder.trim()
    ) {

      newErrors.cardHolder =
        'Card holder name is required';
    }

    if (

      !cardData.expiryDate ||

      cardData.expiryDate.length !== 5

    ) {

      newErrors.expiryDate =
        'Valid expiry date required';
    }

    if (

      !cardData.cvv ||

      cardData.cvv.length !== 3

    ) {

      newErrors.cvv =
        'Valid CVV required';
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors)
        .length === 0
    );
  };

  /* SUBMIT */

  const handlePaymentSubmit =
    async (e) => {

      e.preventDefault();

      if (

        paymentMethod === 'card' &&

        !validateCardPayment()

      ) {

        return;
      }

      setProcessing(true);

      setTimeout(() => {

        setProcessing(false);

        onPaymentSuccess({

          paymentMethod,

          amount: total,

          transactionId:
            `TXN${Date.now()}`,

          timestamp:
            new Date().toISOString()
        });

      }, 2000);
    };

  return (

    <div className="payment-page">

      <div className="container">

        {/* BACK */}

        <button
          className="back-btn"

          onClick={onBack}
        >

          <ArrowLeft size={20} />

          Back

        </button>

        {/* HEADER */}

        <div className="checkout-header">

          <h1>

            Secure Payment

          </h1>

          <p>

            Complete your furniture rental
            booking with safe and encrypted
            payment methods.

          </p>

        </div>

        {/* LAYOUT */}

        <div className="payment-layout">

          {/* LEFT */}

          <div className="payment-form">

            {/* METHODS */}

            <div className="payment-methods">

              <h2>

                Select Payment Method

              </h2>

              <div className="method-grid">

                {/* CARD */}

                <label
                  className={`method-card ${paymentMethod === 'card'
                      ? 'active'
                      : ''
                    }`}
                >

                  <input
                    type="radio"

                    name="payment"

                    value="card"

                    checked={
                      paymentMethod === 'card'
                    }

                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />

                  <CreditCard size={24} />

                  <span>

                    Credit / Debit Card

                  </span>

                </label>

                {/* UPI */}

                <label
                  className={`method-card ${paymentMethod === 'upi'
                      ? 'active'
                      : ''
                    }`}
                >

                  <input
                    type="radio"

                    name="payment"

                    value="upi"

                    checked={
                      paymentMethod === 'upi'
                    }

                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />

                  <Smartphone size={24} />

                  <span>

                    UPI Payment

                  </span>

                </label>

                {/* NETBANKING */}

                <label
                  className={`method-card ${paymentMethod ===
                      'netbanking'
                      ? 'active'
                      : ''
                    }`}
                >

                  <input
                    type="radio"

                    name="payment"

                    value="netbanking"

                    checked={
                      paymentMethod ===
                      'netbanking'
                    }

                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />

                  <Building2 size={24} />

                  <span>

                    Net Banking

                  </span>

                </label>

              </div>

            </div>

            {/* CARD FORM */}

            {paymentMethod === 'card' && (

              <form
                className="card-form"

                onSubmit={
                  handlePaymentSubmit
                }
              >

                {/* CARD NUMBER */}

                <div className="form-group">

                  <label>

                    Card Number *

                  </label>

                  <input
                    type="text"

                    name="cardNumber"

                    value={
                      cardData.cardNumber
                    }

                    onChange={
                      handleCardChange
                    }

                    placeholder="1234 5678 9012 3456"

                    maxLength="19"

                    className={
                      errors.cardNumber
                        ? 'error'
                        : ''
                    }
                  />

                  {errors.cardNumber && (

                    <span className="error-msg">

                      {
                        errors.cardNumber
                      }

                    </span>

                  )}

                </div>

                {/* HOLDER */}

                <div className="form-group">

                  <label>

                    Card Holder Name *

                  </label>

                  <input
                    type="text"

                    name="cardHolder"

                    value={
                      cardData.cardHolder
                    }

                    onChange={
                      handleCardChange
                    }

                    placeholder="John Doe"

                    className={
                      errors.cardHolder
                        ? 'error'
                        : ''
                    }
                  />

                  {errors.cardHolder && (

                    <span className="error-msg">

                      {
                        errors.cardHolder
                      }

                    </span>

                  )}

                </div>

                {/* ROW */}

                <div className="form-row">

                  {/* EXPIRY */}

                  <div className="form-group">

                    <label>

                      Expiry Date *

                    </label>

                    <input
                      type="text"

                      name="expiryDate"

                      value={
                        cardData.expiryDate
                      }

                      onChange={
                        handleCardChange
                      }

                      placeholder="MM/YY"

                      className={
                        errors.expiryDate
                          ? 'error'
                          : ''
                      }
                    />

                  </div>

                  {/* CVV */}

                  <div className="form-group">

                    <label>

                      CVV *

                    </label>

                    <input
                      type="password"

                      name="cvv"

                      value={
                        cardData.cvv
                      }

                      onChange={
                        handleCardChange
                      }

                      placeholder="123"

                      maxLength="3"

                      className={
                        errors.cvv
                          ? 'error'
                          : ''
                      }
                    />

                  </div>

                </div>

                {/* BUTTON */}

                <button
                  type="submit"

                  className="btn btn-primary btn-large"

                  disabled={processing}
                >

                  {processing

                    ? 'Processing...'

                    : 'Pay Now'}

                </button>

              </form>

            )}

            {/* UPI */}

            {paymentMethod === 'upi' && (

              <form
                className="simple-form"

                onSubmit={
                  handlePaymentSubmit
                }
              >

                <div className="form-group">

                  <label>

                    UPI ID *

                  </label>

                  <input
                    type="text"

                    placeholder="yourname@bank"

                    required
                  />

                </div>

                <button
                  type="submit"

                  className="btn btn-primary btn-large"

                  disabled={processing}
                >

                  {processing

                    ? 'Processing...'

                    : 'Pay Now'}

                </button>

              </form>

            )}

            {/* NETBANKING */}

            {paymentMethod ===
              'netbanking' && (

                <form
                  className="simple-form"

                  onSubmit={
                    handlePaymentSubmit
                  }
                >

                  <div className="form-group">

                    <label>

                      Select Bank *

                    </label>

                    <select required>

                      <option value="">

                        Choose your bank

                      </option>

                      <option>

                        State Bank of India

                      </option>

                      <option>

                        HDFC Bank

                      </option>

                      <option>

                        ICICI Bank

                      </option>

                      <option>

                        Axis Bank

                      </option>

                      <option>

                        Other Banks

                      </option>

                    </select>

                  </div>

                  <button
                    type="submit"

                    className="btn btn-primary btn-large"

                    disabled={processing}
                  >

                    {processing

                      ? 'Processing...'

                      : 'Pay Now'}

                  </button>

                </form>

              )}

            {/* SECURITY */}

            <div className="security-info">

              <Lock size={18} />

              <div>

                <h4>

                  Your payment is secure

                </h4>

                <p>

                  We use SSL encryption
                  to protect your data.

                </p>

              </div>

            </div>

          </div>

          {/* SUMMARY */}

          <div className="payment-summary">

            <h2>

              Order Summary

            </h2>

            <div className="summary-box">

              <div className="summary-row">

                <span>

                  Subtotal

                </span>

                <span>

                  ₹{subtotal.toLocaleString()}

                </span>

              </div>

              <div className="summary-row">

                <span>

                  Tax (10%)

                </span>

                <span>

                  ₹{tax.toLocaleString()}

                </span>

              </div>

              <div className="summary-row">

                <span>

                  Delivery

                </span>

                <span className="free">

                  Free

                </span>

              </div>

              <div className="summary-total">

                <span>

                  Total Amount

                </span>

                <span>

                  ₹{total.toLocaleString()}

                </span>

              </div>

            </div>

            {/* CUSTOMER */}

            <div className="customer-details">

              <h3>

                Shipping To

              </h3>

              <p>

                {orderData?.firstName}
                {' '}
                {orderData?.lastName}

              </p>

              <p>

                {orderData?.address}

              </p>

              <p>

                {orderData?.city},
                {' '}
                {orderData?.state}
                {' '}
                {orderData?.pincode}

              </p>

              <p>

                📧 {orderData?.email}

              </p>

              <p>

                📞 {orderData?.phone}

              </p>

            </div>

            {/* TRUST */}

            <div className="payment-trust">

              <div className="trust-badge">

                🔒 100% Secure Payments

              </div>

              <div className="trust-badge">

                🚚 Free Delivery Included

              </div>

              <div className="trust-badge">

                ✅ Trusted Furniture Rentals

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}