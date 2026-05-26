import { useState } from 'react';

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ShieldCheck,
  BadgeCheck,
  Truck
} from 'lucide-react';

import '../styles/contact.css';

export default function Contact() {

  const [formData, setFormData] =
    useState({

      name: '',

      email: '',

      phone: '',

      message: ''
    });

  const [submitted, setSubmitted] =
    useState(false);

  const handleChange = (e) => {

    const {
      name,
      value
    } = e.target;

    setFormData(prev => ({

      ...prev,

      [name]: value

    }));
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(
      'Form submitted:',
      formData
    );

    setSubmitted(true);

    setTimeout(() => {

      setFormData({

        name: '',

        email: '',

        phone: '',

        message: ''
      });

      setSubmitted(false);

    }, 3000);
  };

  return (

    <section className="contact-page">

      <div className="container">

        {/* HEADER */}

        <div className="contact-header">

          <h1>

            Let’s Build
            Your Dream Space

          </h1>

          <p>

            Contact Super Furniture Rent
            for premium furniture rental
            solutions across India.

          </p>

        </div>

        {/* MAIN LAYOUT */}

        <div className="contact-wrapper">

          {/* FORM */}

          <div className="contact-form-box">

            <h2>

              Send Us A Message

            </h2>

            <p>

              Fill out the form below and our
              team will get back to you shortly.

            </p>

            <form
              className="contact-form"

              onSubmit={handleSubmit}
            >

              {/* ROW */}

              <div className="form-row">

                {/* NAME */}

                <div className="form-group">

                  <label htmlFor="name">

                    Full Name

                  </label>

                  <input
                    type="text"

                    id="name"

                    name="name"

                    placeholder="Enter your full name"

                    value={formData.name}

                    onChange={handleChange}

                    required
                  />

                </div>

                {/* PHONE */}

                <div className="form-group">

                  <label htmlFor="phone">

                    Phone Number

                  </label>

                  <input
                    type="tel"

                    id="phone"

                    name="phone"

                    placeholder="+91 98765 43210"

                    value={formData.phone}

                    onChange={handleChange}
                  />

                </div>

              </div>

              {/* EMAIL */}

              <div className="form-group">

                <label htmlFor="email">

                  Email Address

                </label>

                <input
                  type="email"

                  id="email"

                  name="email"

                  placeholder="Enter your email address"

                  value={formData.email}

                  onChange={handleChange}

                  required
                />

              </div>

              {/* MESSAGE */}

              <div className="form-group">

                <label htmlFor="message">

                  Your Message

                </label>

                <textarea
                  id="message"

                  name="message"

                  placeholder="Tell us about your furniture rental requirement..."

                  rows="6"

                  value={formData.message}

                  onChange={handleChange}

                  required
                />

              </div>

              {/* BUTTON */}

              <button
                type="submit"

                className="contact-submit-btn"
              >

                {submitted ? (

                  '✓ Message Sent Successfully'

                ) : (

                  <>
                    <Send size={18} />

                    Send Message
                  </>

                )}

              </button>

            </form>

          </div>

          {/* INFO */}

          <div className="contact-info-box">

            <h2>

              Get In Touch

            </h2>

            <p>

              We help customers across India
              with premium furniture rental
              solutions for homes, offices,
              students, and modern living spaces.

            </p>

            <div className="contact-info-list">

              <div className="contact-info-item">

                <div className="contact-icon">

                  <Phone size={24} />

                </div>

                <div className="contact-info-content">

                  <h4>

                    Call Us

                  </h4>

                  <p>

                    +91 98765 43210
                    <br />
                    Mon - Sat | 9 AM - 6 PM

                  </p>

                </div>

              </div>

              <div className="contact-info-item">

                <div className="contact-icon">

                  <Mail size={24} />

                </div>

                <div className="contact-info-content">

                  <h4>

                    Email Support

                  </h4>

                  <p>

                    support@superfurniturerent.com
                    <br />
                    Quick response within 24 hrs

                  </p>

                </div>

              </div>

              <div className="contact-info-item">

                <div className="contact-icon">

                  <MapPin size={24} />

                </div>

                <div className="contact-info-content">

                  <h4>

                    Service Locations

                  </h4>

                  <p>

                    Delhi, Mumbai,
                    Bangalore, Pune,
                    Hyderabad & More

                  </p>

                </div>

              </div>

              <div className="contact-info-item">

                <div className="contact-icon">

                  <Clock size={24} />

                </div>

                <div className="contact-info-content">

                  <h4>

                    Working Hours

                  </h4>

                  <p>

                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM

                  </p>

                </div>

              </div>

            </div>

            {/* TRUST */}

            <div className="contact-trust">

              <div className="contact-trust-item">

                <Truck size={16} />

                Fast Delivery

              </div>

              <div className="contact-trust-item">

                <ShieldCheck size={16} />

                Secure Rentals

              </div>

              <div className="contact-trust-item">

                <BadgeCheck size={16} />

                Trusted Support

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}