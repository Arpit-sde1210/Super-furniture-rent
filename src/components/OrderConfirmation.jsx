import React from 'react';

import {
  CheckCircle2,
  Download,
  Home,
  Truck,
  ShieldCheck,
  BadgeCheck,
  Mail
} from 'lucide-react';

import '../styles/OrderConfirmation.css';

export default function OrderConfirmation({
  orderData,
  onBackToHome
}) {

  const subtotal = 5000;

  const tax = subtotal * 0.1;

  const total = subtotal + tax;

  return (

    <div className="confirmation-page">

      <div className="container">

        <div className="confirmation-card">

          {/* SUCCESS */}

          <div className="success-icon">

            <CheckCircle2 size={90} />

          </div>

          <span className="success-badge">

            Payment Successful

          </span>

          <h1>

            Order Confirmed!

          </h1>

          <p className="confirmation-message">

            Thank you for choosing
            Super Furniture Rent.
            Your premium furniture rental
            order has been successfully placed.

          </p>

          {/* ORDER ID */}

          <div className="order-id">

            <span className="label">

              Order ID

            </span>

            <span className="value">

              {orderData?.orderId}

            </span>

          </div>

          {/* TRUST */}

          <div className="confirmation-trust">

            <div className="trust-badge">

              <ShieldCheck size={16} />

              Secure Payment

            </div>

            <div className="trust-badge">

              <Truck size={16} />

              Fast Delivery

            </div>

            <div className="trust-badge">

              <BadgeCheck size={16} />

              Verified Order

            </div>

          </div>

          {/* DETAILS */}

          <div className="confirmation-details">

            {/* DELIVERY */}

            <section className="detail-section">

              <h2>

                Delivery Information

              </h2>

              <div className="detail-item">

                <span className="label">

                  Shipping To

                </span>

                <span className="value">

                  {orderData?.firstName}
                  {' '}
                  {orderData?.lastName}

                  <br />

                  {orderData?.address}

                  <br />

                  {orderData?.city},
                  {' '}
                  {orderData?.state}
                  {' '}
                  {orderData?.pincode}

                </span>

              </div>

              <div className="detail-item">

                <span className="label">

                  Email

                </span>

                <span className="value">

                  {orderData?.email}

                </span>

              </div>

              <div className="detail-item">

                <span className="label">

                  Phone

                </span>

                <span className="value">

                  {orderData?.phone}

                </span>

              </div>

              <div className="detail-item">

                <span className="label">

                  Estimated Delivery

                </span>

                <span className="value">

                  5-7 Business Days

                </span>

              </div>

            </section>

            {/* PAYMENT */}

            <section className="detail-section">

              <h2>

                Payment Details

              </h2>

              <div className="detail-item">

                <span className="label">

                  Payment Method

                </span>

                <span className="value">

                  {

                    orderData?.paymentMethod === 'card'

                      ? 'Credit / Debit Card'

                      : orderData?.paymentMethod === 'upi'

                        ? 'UPI Payment'

                        : 'Net Banking'

                  }

                </span>

              </div>

              <div className="detail-item">

                <span className="label">

                  Transaction ID

                </span>

                <span className="value">

                  {orderData?.transactionId}

                </span>

              </div>

              <div className="detail-item">

                <span className="label">

                  Amount Paid

                </span>

                <span className="value">

                  ₹{total.toLocaleString()}

                </span>

              </div>

              <div className="detail-item">

                <span className="label">

                  Payment Status

                </span>

                <span className="value status-success">

                  ✓ Successfully Paid

                </span>

              </div>

            </section>

            {/* SUMMARY */}

            <section className="detail-section">

              <h2>

                Order Summary

              </h2>

              <div className="summary-breakdown">

                <div className="breakdown-row">

                  <span>

                    Product Amount

                  </span>

                  <span>

                    ₹{subtotal.toLocaleString()}

                  </span>

                </div>

                <div className="breakdown-row">

                  <span>

                    Tax (10%)

                  </span>

                  <span>

                    ₹{tax.toLocaleString()}

                  </span>

                </div>

                <div className="breakdown-row">

                  <span>

                    Delivery Charges

                  </span>

                  <span className="free">

                    Free

                  </span>

                </div>

                <div className="breakdown-total">

                  <span>

                    Total Amount

                  </span>

                  <span>

                    ₹{total.toLocaleString()}

                  </span>

                </div>

              </div>

            </section>

          </div>

          {/* NEXT STEPS */}

          <div className="next-steps">

            <h2>

              What Happens Next?

            </h2>

            <ul>

              <li>

                <span className="step-number">

                  1

                </span>

                <span className="step-text">

                  We prepare your furniture
                  for dispatch.

                </span>

              </li>

              <li>

                <span className="step-number">

                  2

                </span>

                <span className="step-text">

                  Delivery updates will be
                  sent via email & SMS.

                </span>

              </li>

              <li>

                <span className="step-number">

                  3

                </span>

                <span className="step-text">

                  Furniture will be delivered
                  and installed at your location.

                </span>

              </li>

              <li>

                <span className="step-number">

                  4

                </span>

                <span className="step-text">

                  Enjoy your premium
                  rental experience.

                </span>

              </li>

            </ul>

          </div>

          {/* BUTTONS */}

          <div className="action-buttons">

            <button className="btn btn-primary">

              <Download size={18} />

              Download Invoice

            </button>

            <button
              className="btn btn-secondary"

              onClick={onBackToHome}
            >

              <Home size={18} />

              Continue Shopping

            </button>

          </div>

          {/* SUPPORT */}

          <div className="contact-support">

            <Mail size={20} />

            <div>

              <h3>

                Need Help?

              </h3>

              <p>

                support@superfurniturerent.com

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}