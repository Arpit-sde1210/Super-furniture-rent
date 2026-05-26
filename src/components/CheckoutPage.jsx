import React, { useState } from 'react';

import {
  ArrowLeft,
  MapPin,
  ShieldCheck,
  Truck,
  BadgeCheck
} from 'lucide-react';

import '../styles/CheckoutPage.css';

export default function CheckoutPage({
  cart = [],
  onProceedToPayment = () => { },
  onBackToCart = () => { }
}) {

  const [formData, setFormData] =
    useState({

      firstName: '',

      lastName: '',

      email: '',

      phone: '',

      address: '',

      city: '',

      state: '',

      pincode: ''
    });

  const [errors, setErrors] =
    useState({});

  const handleChange = (e) => {

    const {
      name,
      value
    } = e.target;

    setFormData(prev => ({

      ...prev,

      [name]: value

    }));

    if (errors[name]) {

      setErrors(prev => ({

        ...prev,

        [name]: ''
      }));
    }
  };

  const validateForm = () => {

    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName =
        'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName =
        'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email =
        'Email is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone =
        'Phone is required';
    }

    if (!formData.address.trim()) {
      newErrors.address =
        'Address is required';
    }

    if (!formData.city.trim()) {
      newErrors.city =
        'City is required';
    }

    if (!formData.state.trim()) {
      newErrors.state =
        'State is required';
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode =
        'Pincode is required';
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validateForm()) {

      onProceedToPayment(formData);
    }
  };

  /* TOTALS */

  const subtotal = cart.reduce(

    (sum, item) =>

      sum +

      (
        item.price *
        item.quantity *
        item.rentalDays / 30
      ),

    0
  );

  const tax = subtotal * 0.1;

  const total = subtotal + tax;

  return (

    <div className="checkout-page">

      <div className="container">

        {/* BACK */}

        <button
          className="back-btn"

          onClick={onBackToCart}
        >

          <ArrowLeft size={18} />

          Back To Cart

        </button>

        {/* HEADER */}

        <div className="checkout-header">

          <h1>

            Secure Checkout

          </h1>

          <p>

            Complete your furniture rental
            booking with secure checkout.

          </p>

        </div>

        {/* LAYOUT */}

        <div className="checkout-layout">

          {/* LEFT */}

          <div className="checkout-form">

            <form onSubmit={handleSubmit}>

              {/* SHIPPING */}

              <section className="form-section">

                <h2>

                  Shipping Information

                </h2>

                <div className="form-row">

                  <div className="form-group">

                    <label>

                      First Name *

                    </label>

                    <input
                      type="text"

                      name="firstName"

                      value={formData.firstName}

                      onChange={handleChange}

                      placeholder="John"

                      className={
                        errors.firstName
                          ? 'error'
                          : ''
                      }
                    />

                    {errors.firstName && (

                      <span className="error-msg">

                        {errors.firstName}

                      </span>

                    )}

                  </div>

                  <div className="form-group">

                    <label>

                      Last Name *

                    </label>

                    <input
                      type="text"

                      name="lastName"

                      value={formData.lastName}

                      onChange={handleChange}

                      placeholder="Doe"

                      className={
                        errors.lastName
                          ? 'error'
                          : ''
                      }
                    />

                    {errors.lastName && (

                      <span className="error-msg">

                        {errors.lastName}

                      </span>

                    )}

                  </div>

                </div>

                {/* EMAIL + PHONE */}

                <div className="form-row">

                  <div className="form-group">

                    <label>

                      Email Address *

                    </label>

                    <input
                      type="email"

                      name="email"

                      value={formData.email}

                      onChange={handleChange}

                      placeholder="john@example.com"

                      className={
                        errors.email
                          ? 'error'
                          : ''
                      }
                    />

                  </div>

                  <div className="form-group">

                    <label>

                      Phone Number *

                    </label>

                    <input
                      type="tel"

                      name="phone"

                      value={formData.phone}

                      onChange={handleChange}

                      placeholder="+91 98765 43210"

                      className={
                        errors.phone
                          ? 'error'
                          : ''
                      }
                    />

                  </div>

                </div>

                {/* ADDRESS */}

                <div className="form-group">

                  <label>

                    Street Address *

                  </label>

                  <input
                    type="text"

                    name="address"

                    value={formData.address}

                    onChange={handleChange}

                    placeholder="123 Main Street"

                    className={
                      errors.address
                        ? 'error'
                        : ''
                    }
                  />

                </div>

                {/* CITY */}

                <div className="form-row">

                  <div className="form-group">

                    <label>

                      City *

                    </label>

                    <input
                      type="text"

                      name="city"

                      value={formData.city}

                      onChange={handleChange}

                      placeholder="New Delhi"

                      className={
                        errors.city
                          ? 'error'
                          : ''
                      }
                    />

                  </div>

                  <div className="form-group">

                    <label>

                      State *

                    </label>

                    <input
                      type="text"

                      name="state"

                      value={formData.state}

                      onChange={handleChange}

                      placeholder="Delhi"

                      className={
                        errors.state
                          ? 'error'
                          : ''
                      }
                    />

                  </div>

                  <div className="form-group">

                    <label>

                      Pincode *

                    </label>

                    <input
                      type="text"

                      name="pincode"

                      value={formData.pincode}

                      onChange={handleChange}

                      placeholder="110001"

                      className={
                        errors.pincode
                          ? 'error'
                          : ''
                      }
                    />

                  </div>

                </div>

              </section>

              {/* DELIVERY */}

              <section className="form-section">

                <h2>

                  Delivery Method

                </h2>

                <div className="delivery-options">

                  <label className="delivery-card">

                    <input
                      type="radio"

                      name="delivery"

                      defaultChecked
                    />

                    <div>

                      <h4>

                        Standard Delivery

                      </h4>

                      <p>

                        Free · 5-7 Business Days

                      </p>

                    </div>

                  </label>

                  <label className="delivery-card">

                    <input
                      type="radio"

                      name="delivery"
                    />

                    <div>

                      <h4>

                        Express Delivery

                      </h4>

                      <p>

                        ₹199 · 2-3 Business Days

                      </p>

                    </div>

                  </label>

                </div>

              </section>

              {/* BUTTON */}

              <button
                type="submit"

                className="checkout-btn"
              >

                Proceed To Payment

              </button>

            </form>

          </div>

          {/* RIGHT */}

          <div className="checkout-summary">

            <h2>

              Order Summary

            </h2>

            <div className="summary-items">

              {cart.map((item) => (

                <div
                  key={item.id}

                  className="summary-item"
                >

                  <div>

                    <h4>

                      {item.name}

                    </h4>

                    <p>

                      Qty:
                      {' '}
                      {item.quantity}

                    </p>

                  </div>

                  <span>

                    ₹
                    {(
                      item.price *
                      item.quantity *
                      item.rentalDays /
                      30
                    ).toLocaleString()}

                  </span>

                </div>

              ))}

            </div>

            <div className="summary-breakdown">

              <div className="breakdown-row">

                <span>

                  Subtotal

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

                  Delivery

                </span>

                <span className="free">

                  Free

                </span>

              </div>

              <div className="breakdown-total">

                <span>

                  Total

                </span>

                <span>

                  ₹{total.toLocaleString()}

                </span>

              </div>

            </div>

            {/* TRUST */}

            <div className="checkout-trust">

              <div className="trust-item">

                <ShieldCheck size={18} />

                Secure Payments

              </div>

              <div className="trust-item">

                <Truck size={18} />

                Free Delivery

              </div>

              <div className="trust-item">

                <BadgeCheck size={18} />

                Trusted Furniture Rentals

              </div>

            </div>

            {/* INFO */}

            <div className="info-box">

              <MapPin size={18} />

              <div>

                <h4>

                  PAN India Delivery

                </h4>

                <p>

                  Available in all major cities.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}