import {

  Mail,
  Phone,
  MapPin,
  ArrowRight

} from 'lucide-react';

import {

  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter

} from 'react-icons/fa6';

import {

  Link

} from 'react-router-dom';

import '../styles/testimonials-faq-footer.css';

export default function Footer() {

  return (

    <footer className="footer">

      <div className="container">

        {/* CONTENT */}

        <div className="footer-content">

          {/* BRAND */}

          <div className="footer-brand">

            <h3>

              Super Furniture Rent

            </h3>

            <p className="footer-description">

              Premium furniture rental solutions
              for students, working professionals,
              families, offices, and modern living
              spaces across India.

            </p>

            {/* CONTACT */}

            <div className="footer-contact">

              <div className="footer-contact-item">

                <Mail size={16} />

                <span>

                  support@superfurniturerent.com

                </span>

              </div>

              <div className="footer-contact-item">

                <Phone size={16} />

                <span>

                  +91 98765 43210

                </span>

              </div>

              <div className="footer-contact-item">

                <MapPin size={16} />

                <span>

                  Varanasi, Uttar Pradesh

                </span>

              </div>

            </div>

            {/* SOCIAL */}

            <div className="footer-social">

              <a
                href="#"
                className="social-link"
              >

                <FaFacebookF />

              </a>

              <a
                href="#"
                className="social-link"
              >

                <FaInstagram />

              </a>

              <a
                href="#"
                className="social-link"
              >

                <FaXTwitter />

              </a>

              <a
                href="#"
                className="social-link"
              >

                <FaLinkedinIn />

              </a>

            </div>

          </div>

          {/* QUICK LINKS */}

          <div className="footer-section">

            <h3>

              Quick Links

            </h3>

            <ul>

              <li>

                <a href="#home">

                  Home

                </a>

              </li>

              <li>

                <a href="#products">

                  Products

                </a>

              </li>

              <li>

                <a href="#pricing">

                  Pricing

                </a>

              </li>

              <li>

                <a href="#testimonials">

                  Testimonials

                </a>

              </li>

            </ul>

          </div>

          {/* COMPANY */}

          <div className="footer-section">

            <h3>

              Company

            </h3>

            <ul>

              <li>

                <Link to="/about">

                  About Us

                </Link>

              </li>

              <li>

                <Link to="/privacy-policy">

                  Privacy Policy

                </Link>

              </li>

              <li>

                <Link to="/cancellation-policy">

                  Cancellation Policy

                </Link>

              </li>

              <li>

                <Link to="/contact">

                  Contact Us

                </Link>

              </li>

            </ul>

          </div>

          {/* CATEGORIES */}

          <div className="footer-section">

            <h3>

              Categories

            </h3>

            <ul>

              <li>

                <a href="#products">

                  Beds on Rent

                </a>

              </li>

              <li>

                <a href="#products">

                  Sofas on Rent

                </a>

              </li>

              <li>

                <a href="#products">

                  Dining Tables

                </a>

              </li>

              <li>

                <a href="#products">

                  Study Desks

                </a>

              </li>

              <li>

                <a href="#products">

                  Office Furniture

                </a>

              </li>

            </ul>

          </div>

          {/* NEWSLETTER */}

          <div className="footer-section">

            <h3>

              Subscribe Newsletter

            </h3>

            <p className="footer-description">

              Get furniture rental offers,
              discounts, and updates directly
              in your inbox.

            </p>

            <form className="newsletter-form">

              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />

              <button
                type="submit"
                className="newsletter-btn"
              >

                Subscribe

                <ArrowRight size={16} />

              </button>

            </form>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">

          <p>

            © 2026 Super Furniture Rent.
            All Rights Reserved.

          </p>

          <p>

            Designed for modern homes,
            students, and professionals.

          </p>

        </div>

      </div>

    </footer>
  );
}