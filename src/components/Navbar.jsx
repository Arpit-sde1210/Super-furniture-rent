import React, { useState } from 'react';

import {
  ShoppingCart,
  Menu,
  X
} from 'lucide-react';

import {
  useNavigate,
  useLocation
} from 'react-router-dom';

import logo from '../assets/logo.png';

import '../styles/navbar.css';

export default function Navbar({
  cartCount = 0
}) {

  const navigate = useNavigate();

  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [activeLink, setActiveLink] =
    useState('home');

  const scrollToSection = (
    sectionId
  ) => {

    if (
      location.pathname !== '/'
    ) {

      navigate('/');

      setTimeout(() => {

        const element =
          document.getElementById(
            sectionId
          );

        if (element) {

          element.scrollIntoView({
            behavior: 'smooth'
          });
        }

      }, 300);

    }

    else {

      const element =
        document.getElementById(
          sectionId
        );

      if (element) {

        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }

    setActiveLink(sectionId);

    setMobileMenuOpen(false);
  };

  return (

    <nav className="navbar">

      <div className="container">

        <div className="navbar-content">

          {/* LOGO */}

          <div
            className="navbar-logo"

            onClick={() =>
              navigate('/')
            }
          >

            <img
              src={logo}
              alt="Super Furniture Rent"
              className="navbar-brand-logo"
            />

          </div>

          {/* NAV LINKS */}

          <ul
            className={`nav-links ${mobileMenuOpen
              ? 'active'
              : ''
              }`}
          >

            {/* HOME */}

            <li
              className={`nav-link ${activeLink === 'home'
                ? 'active'
                : ''
                }`}

              onClick={() =>
                scrollToSection(
                  'home'
                )
              }
            >
              Home
            </li>

            {/* ABOUT */}

            <li
              className="nav-link"

              onClick={() =>
                navigate('/about')
              }
            >
              About
            </li>

            {/* PRODUCTS */}

            <li
              className={`nav-link ${activeLink ===
                'products'
                ? 'active'
                : ''
                }`}

              onClick={() => {

                setActiveLink(
                  'products'
                );

                navigate('/products');
              }}
            >
              Products
            </li>

            {/* CONTACT */}

            <li
              className="nav-link"

              onClick={() =>
                navigate('/contact')
              }
            >
              Contact
            </li>

            {/* CTA */}

            <li>

              <button
                className="nav-cta"

                onClick={() =>
                  navigate('/products')
                }
              >
                Browse Furniture
              </button>

            </li>

          </ul>

          {/* ACTIONS */}

          <div className="navbar-actions">

            {/* CART */}

            <button
              className="cart-btn"

              onClick={() =>
                navigate('/cart')
              }
            >

              <ShoppingCart
                size={22}
              />

              {cartCount > 0 && (

                <span className="cart-badge">
                  {cartCount}
                </span>

              )}

            </button>

            {/* MOBILE MENU */}

            <button
              className="mobile-menu-btn"

              onClick={() =>
                setMobileMenuOpen(
                  !mobileMenuOpen
                )
              }
            >

              {mobileMenuOpen
                ? <X size={24} />
                : <Menu size={24} />}

            </button>

          </div>

        </div>

      </div>

    </nav>
  );
}