import React, { useState } from 'react';

import {
  ArrowLeft,
  ShieldCheck,
  Truck,
  BadgeCheck
} from 'lucide-react';

import {
  useParams,
  useNavigate
} from 'react-router-dom';

import '../styles/ProductDetailPage.css';

/* IMAGES */

import Bed from '../assets/Stocks/queen-size-bed.webp';

import Desk from '../assets/Stocks/study-desk.webp';

import Sofa from '../assets/Stocks/sofa.webp';

import Table from '../assets/Stocks/dinning-table.webp';

import Chair from '../assets/Stocks/chair.webp';

import Wardrobe from '../assets/Stocks/wardrobe.webp';

import Bookshelf from '../assets/Stocks/book-shelf.webp';

import Nightstand from '../assets/Stocks/nightstand.webp';

/* PRODUCTS */

const PRODUCTS = [

  {
    id: 1,

    name: 'Queen Size Bed',

    category: 'Beds',

    image: Bed,

    price: 1299,

    rating: 4.8,

    reviews: 234,

    fullDescription:
      'Premium queen size bed on rent with spacious storage compartments, durable wooden finish, and modern bedroom styling perfect for comfortable living spaces.',

    features: [
      'Storage Compartments',
      'Wooden Finish',
      'Premium Comfort',
      'Modern Design'
    ]
  },

  {
    id: 2,

    name: 'Executive Study Desk',

    category: 'Desks',

    image: Desk,

    price: 799,

    rating: 4.7,

    reviews: 156,

    fullDescription:
      'Modern study desk on rent for students and professionals with spacious workspace and cable management.',

    features: [
      'Cable Management',
      'Large Workspace',
      'Modern Design'
    ]
  },

  {
    id: 3,

    name: 'Modern L-Shaped Sofa',

    category: 'Sofas',

    image: Sofa,

    price: 2499,

    rating: 4.9,

    reviews: 512,

    fullDescription:
      'Luxury L-shaped sofa on rent with premium cushions and elegant fabric for modern living rooms.',

    features: [
      'Premium Fabric',
      'Luxury Comfort',
      'Large Seating'
    ]
  },

  {
    id: 4,

    name: 'Wooden Dining Table',

    category: 'Dining',

    image: Table,

    price: 1599,

    rating: 4.6,

    reviews: 189,

    fullDescription:
      'Elegant wooden dining table on rent with premium finish ideal for family dining setups.',

    features: [
      '6-Seater',
      'Solid Wood',
      'Elegant Finish'
    ]
  },

  {
    id: 5,

    name: 'Ergonomic Office Chair',

    category: 'Chairs',

    image: Chair,

    price: 599,

    rating: 4.5,

    reviews: 423,

    fullDescription:
      'Comfortable office chair on rent with ergonomic support and adjustable seating.',

    features: [
      'Adjustable Height',
      'Mesh Support',
      'Soft Cushion'
    ]
  },

  {
    id: 6,

    name: 'Wardrobe Cabinet',

    category: 'Storage',

    image: Wardrobe,

    price: 899,

    rating: 4.4,

    reviews: 267,

    fullDescription:
      'Modern wardrobe on rent with spacious compartments and premium storage functionality.',

    features: [
      '3 Door',
      'Mirror Included',
      'Large Storage'
    ]
  },

  {
    id: 7,

    name: 'Corner Bookshelf',

    category: 'Storage',

    image: Bookshelf,

    price: 499,

    rating: 4.3,

    reviews: 145,

    fullDescription:
      'Compact corner bookshelf on rent suitable for modern homes and offices.',

    features: [
      'Space Saving',
      '5 Shelves',
      'Compact Design'
    ]
  },

  {
    id: 8,

    name: 'Nightstand Wooden',

    category: 'Bedroom',

    image: Nightstand,

    price: 299,

    rating: 4.2,

    reviews: 98,

    fullDescription:
      'Minimal wooden nightstand on rent with elegant storage drawer and modern styling.',

    features: [
      'Drawer Storage',
      'Wooden Finish',
      'Compact Design'
    ]
  }
];

export default function ProductDetailPage({
  onAddToCart
}) {

  const { id } = useParams();

  const navigate = useNavigate();

  const product = PRODUCTS.find(
    (p) => p.id === Number(id)
  );

  const [rentalDays, setRentalDays] =
    useState(30);

  const [quantity, setQuantity] =
    useState(1);

  /* PRODUCT NOT FOUND */

  if (!product) {

    return (

      <div className="product-not-found">

        <h1>

          Product Not Found

        </h1>

        <button
          className="primary-btn"

          onClick={() =>
            navigate('/products')
          }
        >

          Back to Products

        </button>

      </div>
    );
  }

  /* TOTAL PRICE */

  const totalPrice =
    (
      product.price *
      rentalDays /
      30
    ) * quantity;

  return (

    <section className="product-detail-page">

      <div className="container">

        {/* BACK BUTTON */}

        <button
          className="back-btn"

          onClick={() =>
            navigate('/products')
          }
        >

          <ArrowLeft size={18} />

          Back to Products

        </button>

        {/* MAIN GRID */}

        <div className="detail-grid">

          {/* LEFT IMAGE */}

          <div className="detail-left">

            <div className="image-wrapper">

              <img
                src={product.image}

                alt={`${product.name} on rent`}

                className="detail-product-img"

                loading="lazy"

                decoding="async"

                fetchPriority="high"

                width="700"

                height="700"
              />

              {product.rating >= 4.8 && (

                <span className="premium-badge">

                  Premium Choice

                </span>

              )}

            </div>

          </div>

          {/* RIGHT DETAILS */}

          <div className="detail-right">

            <span className="category-badge">

              {product.category}

            </span>

            <h1 className="detail-title">

              {product.name}

            </h1>

            <div className="rating">

              ⭐ {product.rating}
              {' '}
              ({product.reviews} reviews)

            </div>

            <p className="full-description">

              {product.fullDescription}

            </p>

            {/* TRUST FEATURES */}

            <div className="trust-features">

              <div className="trust-item">

                <Truck size={20} />

                Fast Delivery

              </div>

              <div className="trust-item">

                <ShieldCheck size={20} />

                Quality Assured

              </div>

              <div className="trust-item">

                <BadgeCheck size={20} />

                Verified Product

              </div>

            </div>

            {/* FEATURES */}

            <div className="features-section">

              <h3>

                Product Features

              </h3>

              <ul className="features-list">

                {product.features.map(
                  (feature, index) => (

                    <li key={index}>

                      ✓ {feature}

                    </li>

                  )
                )}

              </ul>

            </div>

            {/* RENTAL DURATION */}

            <div className="duration-wrapper">

              <h3>

                Choose Rental Duration

              </h3>

              <div className="duration-options">

                {[30, 60, 90, 180].map(
                  (days) => (

                    <button
                      key={days}

                      className={`duration-btn ${rentalDays === days
                          ? 'active'
                          : ''
                        }`}

                      onClick={() =>
                        setRentalDays(days)
                      }
                    >

                      {days} Days

                    </button>

                  )
                )}

              </div>

            </div>

            {/* QUANTITY */}

            <div className="quantity-wrapper">

              <h3>

                Quantity

              </h3>

              <div className="quantity-section">

                <button
                  onClick={() =>
                    setQuantity(
                      Math.max(
                        1,
                        quantity - 1
                      )
                    )
                  }
                >

                  −

                </button>

                <span>

                  {quantity}

                </span>

                <button
                  onClick={() =>
                    setQuantity(
                      quantity + 1
                    )
                  }
                >

                  +

                </button>

              </div>

            </div>

            {/* PRICE */}

            <div className="pricing-section">

              <span className="price-label">

                Total Rental Price

              </span>

              <h2>

                ₹
                {totalPrice.toLocaleString()}

              </h2>

              <p>

                For {rentalDays} days rental duration

              </p>

            </div>

            {/* ACTION BUTTONS */}

            <div className="action-buttons">

              <button
                className="primary-btn"

                onClick={() => {

                  if (onAddToCart) {

                    onAddToCart({
                      ...product,
                      quantity,
                      rentalDays
                    });
                  }
                }}
              >

                Add to Cart

              </button>

              <button
                className="secondary-btn"

                onClick={() =>
                  navigate('/contact')
                }
              >

                Request Callback

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}