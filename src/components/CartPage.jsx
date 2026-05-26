import React from 'react';

import {
  Trash2,
  ArrowRight,
  ShieldCheck,
  Truck,
  BadgeCheck
} from 'lucide-react';

import '../styles/CartPage.css';

export default function CartPage({
  cart = [],
  onRemoveFromCart = () => { },
  onUpdateQuantity = () => { },
  onCheckout = () => { },
  onContinueShopping = () => { }
}) {

  const subtotal = (cart || []).reduce(
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

  if (cart.length === 0) {

    return (

      <div className="cart-page">

        <div className="container">

          <div className="empty-cart">

            <div className="empty-icon">

              🛒

            </div>

            <h1>

              Your Cart Is Empty

            </h1>

            <p>

              Discover premium furniture rentals
              for your dream home and workspace.

            </p>

            <button
              className="btn btn-primary"

              onClick={onContinueShopping}
            >

              Explore Furniture

            </button>

          </div>

        </div>

      </div>
    );
  }

  return (

    <div className="cart-page">

      <div className="container">

        {/* HEADER */}

        <div className="cart-header">

          <h1>

            Shopping Cart

          </h1>

          <p>

            Review your selected
            furniture rentals before checkout.

          </p>

        </div>

        <div className="cart-layout">

          {/* LEFT */}

          <div className="cart-items">

            {cart.map((item) => (

              <div
                key={item.id}

                className="cart-item"
              >

                {/* IMAGE */}

                <div className="item-image">

                  <img
                    src={item.image}

                    alt={item.name}

                    className="cart-item-img"
                  />

                </div>

                {/* DETAILS */}

                <div className="item-details">

                  <span className="item-category">

                    {item.category}

                  </span>

                  <h3>

                    {item.name}

                  </h3>

                  <p className="rental-duration">

                    Rental Duration:
                    {' '}
                    {item.rentalDays} Days

                  </p>

                </div>

                {/* QUANTITY */}

                <div className="item-quantity">

                  <button
                    onClick={() =>
                      onUpdateQuantity(
                        item.id,
                        item.quantity - 1
                      )
                    }
                  >

                    −

                  </button>

                  <input
                    type="number"

                    value={item.quantity}

                    onChange={(e) =>
                      onUpdateQuantity(
                        item.id,
                        parseInt(
                          e.target.value
                        ) || 1
                      )
                    }
                  />

                  <button
                    onClick={() =>
                      onUpdateQuantity(
                        item.id,
                        item.quantity + 1
                      )
                    }
                  >

                    +

                  </button>

                </div>

                {/* PRICE */}

                <div className="item-price">

                  ₹
                  {(
                    item.price *
                    item.quantity *
                    item.rentalDays /
                    30
                  ).toLocaleString()}

                </div>

                {/* REMOVE */}

                <button
                  className="remove-btn"

                  onClick={() =>
                    onRemoveFromCart(item.id)
                  }
                >

                  <Trash2 size={18} />

                </button>

              </div>

            ))}

          </div>

          {/* RIGHT */}

          <div className="cart-summary">

            <h2>

              Order Summary

            </h2>

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

                Total

              </span>

              <span>

                ₹{total.toLocaleString()}

              </span>

            </div>

            {/* BUTTONS */}

            <button
              className="btn btn-primary btn-full"

              onClick={onCheckout}
            >

              Proceed To Checkout

              <ArrowRight size={18} />

            </button>

            <button
              className="btn btn-secondary btn-full"

              onClick={onContinueShopping}
            >

              Continue Shopping

            </button>

            {/* TRUST */}

            <div className="trust-badges">

              <div className="badge">

                <ShieldCheck size={16} />

                Secure Checkout

              </div>

              <div className="badge">

                <BadgeCheck size={16} />

                Trusted Rentals

              </div>

              <div className="badge">

                <Truck size={16} />

                Free Delivery

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}