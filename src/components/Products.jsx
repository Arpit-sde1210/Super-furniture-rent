import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import '../styles/products-pricing.css';

import Bed from '../assets/Stocks/queen-size-bed.webp';
import Desk from '../assets/Stocks/study-desk.webp';
import Sofa from '../assets/Stocks/sofa.webp';
import Table from '../assets/Stocks/dinning-table.webp';
import Chair from '../assets/Stocks/chair.webp';
import Wardrobe from '../assets/Stocks/wardrobe.webp';
import Bookshelf from '../assets/Stocks/book-shelf.webp';
import Nightstand from '../assets/Stocks/nightstand.webp';

export default function Products({
  addToCart,
  isHomePage = false
}) {

  const navigate = useNavigate();

  const [selectedFilter, setSelectedFilter] =
    useState('all');

  const products = [

    {
      id: 1,

      name: 'Queen Size Bed',

      category: 'Beds',

      image: Bed,

      price: 1299,

      period: '/month',

      rating: 4.8,

      reviews: 234,

      description:
        'Premium queen size bed on rent with spacious storage and modern wooden finish for comfortable bedroom setups.',

      features: [
        'Storage',
        'Wooden Finish',
        'Comfort Mattress'
      ],

      badge: 'Popular',

      inStock: true
    },

    {
      id: 2,

      name: 'Executive Study Desk',

      category: 'Desks',

      image: Desk,

      price: 799,

      period: '/month',

      rating: 4.7,

      reviews: 156,

      description:
        'Modern study desk on rent designed for students and professionals with spacious work area and cable management.',

      features: [
        'Cable Management',
        'Spacious',
        'Modern Design'
      ],

      badge: 'New',

      inStock: true
    },

    {
      id: 3,

      name: 'Modern L-Shaped Sofa',

      category: 'Sofas',

      image: Sofa,

      price: 2499,

      period: '/month',

      rating: 4.9,

      reviews: 512,

      description:
        'Luxury L-shaped sofa on rent with soft cushions and premium fabric perfect for modern living rooms.',

      features: [
        '3-Seater',
        'Soft Fabric',
        'Premium Comfort'
      ],

      badge: 'Premium',

      inStock: true
    },

    {
      id: 4,

      name: 'Wooden Dining Table',

      category: 'Dining',

      image: Table,

      price: 1599,

      period: '/month',

      rating: 4.6,

      reviews: 189,

      description:
        'Elegant wooden dining table on rent suitable for families and modern dining spaces.',

      features: [
        '6-Seater',
        'Solid Wood',
        'Elegant Design'
      ],

      badge: null,

      inStock: true
    },

    {
      id: 5,

      name: 'Ergonomic Office Chair',

      category: 'Chairs',

      image: Chair,

      price: 599,

      period: '/month',

      rating: 4.5,

      reviews: 423,

      description:
        'Comfortable ergonomic office chair on rent with adjustable height and breathable mesh support.',

      features: [
        'Adjustable Height',
        'Mesh Back',
        'Swivel Base'
      ],

      badge: 'Popular',

      inStock: true
    },

    {
      id: 6,

      name: 'Wardrobe Cabinet',

      category: 'Storage',

      image: Wardrobe,

      price: 899,

      period: '/month',

      rating: 4.4,

      reviews: 267,

      description:
        'Spacious wardrobe on rent with multiple compartments and modern storage design.',

      features: [
        '3-Door',
        'Mirror',
        'Large Storage'
      ],

      badge: null,

      inStock: true
    },

    {
      id: 7,

      name: 'Corner Bookshelf',

      category: 'Storage',

      image: Bookshelf,

      price: 499,

      period: '/month',

      rating: 4.3,

      reviews: 145,

      description:
        'Compact bookshelf on rent for modern homes and offices with efficient space-saving design.',

      features: [
        'Space Saving',
        'Compact',
        '5 Shelves'
      ],

      badge: 'New',

      inStock: true
    },

    {
      id: 8,

      name: 'Nightstand Wooden',

      category: 'Bedroom',

      image: Nightstand,

      price: 299,

      period: '/month',

      rating: 4.2,

      reviews: 98,

      description:
        'Minimal wooden nightstand on rent with drawer storage for modern bedroom interiors.',

      features: [
        'Wooden Finish',
        'Drawer Storage',
        'Compact Design'
      ],

      badge: null,

      inStock: true
    }
  ];

  const filters = [

    'all',

    'Beds',

    'Desks',

    'Sofas',

    'Dining',

    'Chairs',

    'Storage'
  ];

  const filteredProducts =

    selectedFilter === 'all'

      ? products

      : products.filter(
        (product) =>
          product.category ===
          selectedFilter
      );

  return (

    <section
      className={
        isHomePage
          ? 'products-section section-spacing'
          : 'products-page'
      }

      id={
        isHomePage
          ? 'products'
          : ''
      }
    >

      <div className="container">

        {/* HEADER */}

        <div className="products-header">

          <h2 className="section-heading">

            {isHomePage
              ? 'Furniture on Rent for Every Space'
              : 'Premium Furniture Collection'}

          </h2>

          <p className="section-subheading">

            Explore affordable furniture rental solutions including beds,
            sofas, study tables, wardrobes, dining tables, and office furniture.

          </p>

        </div>

        {/* FILTERS */}

        <div className="filters">

          {filters.map((filter) => (

            <button
              key={filter}

              className={`filter-btn ${selectedFilter === filter
                ? 'active'
                : ''
                }`}

              onClick={() =>
                setSelectedFilter(filter)
              }
            >

              {filter}

            </button>

          ))}

        </div>

        {/* PRODUCTS GRID */}

        <div className="products-grid">

          {filteredProducts.map(
            (product) => (

              <div
                key={product.id}

                className="product-card"

                onClick={() =>
                  navigate(
                    `/product/${product.id}`
                  )
                }

                style={{
                  cursor: 'pointer'
                }}
              >

                {/* IMAGE */}

                <div className="product-image">

                  <img
                    src={product.image}

                    alt={`${product.name} on rent`}

                    className="product-img"

                    loading="lazy"

                    decoding="async"

                    width="400"

                    height="300"
                  />

                  {product.badge && (

                    <span className="product-badge">

                      {product.badge}

                    </span>

                  )}

                </div>

                {/* INFO */}

                <div className="product-info">

                  <div className="product-category">

                    {product.category}

                  </div>

                  <div className="product-name">

                    {product.name}

                  </div>

                  <p className="product-description">

                    {product.description}

                  </p>

                  {/* RATING */}

                  <div className="product-rating">

                    <span className="stars">

                      ⭐ {product.rating}

                    </span>

                    <span className="reviews">

                      ({product.reviews} reviews)

                    </span>

                  </div>

                  {/* FEATURES */}

                  <div className="product-specs">

                    {product.features.map(
                      (feature, index) => (

                        <span key={index}>

                          ✓ {feature}

                        </span>

                      )
                    )}

                  </div>

                  {/* PRICE */}

                  <div className="product-pricing">

                    <div className="price-info">

                      <span className="price-label">

                        Starting from

                      </span>

                      <div>

                        <span className="price-value">

                          ₹{product.price}

                        </span>

                        <span className="price-period">

                          {product.period}

                        </span>

                      </div>

                    </div>

                  </div>

                  {/* ACTIONS */}

                  <div className="product-actions">

                    <button
                      className="btn-small btn-add"

                      onClick={(e) => {

                        e.stopPropagation();

                        addToCart(product);
                      }}
                    >

                      Add to Cart

                    </button>

                    <button
                      className="btn-small btn-compare"

                      onClick={(e) => {

                        e.stopPropagation();

                        navigate(
                          `/product/${product.id}`
                        );
                      }}
                    >

                      View Details

                    </button>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}