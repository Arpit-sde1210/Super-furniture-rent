import { useState } from 'react';

import {
  ChevronDown,
  ShieldCheck,
  Truck,
  BadgeCheck
} from 'lucide-react';

import '../styles/testimonials-faq-footer.css';

export default function FAQ() {

  const [openIndex, setOpenIndex] =
    useState(0);

  const faqs = [

    {
      question:
        'How does the furniture rental process work?',

      answer:
        'Browse our premium furniture collection, select your preferred products, choose a rental duration, and complete your booking online. Our team handles fast delivery and professional setup at your location.'
    },

    {
      question:
        'What is included in the furniture rental pricing?',

      answer:
        'Our furniture rental pricing includes the selected furniture products, free delivery in supported locations, and basic maintenance support. Additional protection plans can also be added.'
    },

    {
      question:
        'Can I upgrade or change rented furniture later?',

      answer:
        'Yes. Super Furniture Rent allows customers to upgrade, replace, or swap furniture products anytime during the rental period based on availability and requirements.'
    },

    {
      question:
        'What happens if rented furniture gets damaged?',

      answer:
        'Minor wear and tear are covered under our standard policy. We also provide optional damage protection plans for enhanced security and peace of mind.'
    },

    {
      question:
        'Is there any minimum rental duration?',

      answer:
        'Our standard minimum furniture rental duration is 3 months. However, flexible rental options may be available for students, offices, and special requests.'
    },

    {
      question:
        'Do you provide furniture rental delivery in my city?',

      answer:
        'We currently provide furniture rental delivery across major Indian cities and continuously expand our service network. Contact our support team to confirm availability in your area.'
    },

    {
      question:
        'Are there any hidden delivery or setup charges?',

      answer:
        'No hidden charges. Basic delivery and installation are included with most rental plans. Additional charges may apply only for express delivery requests.'
    },

    {
      question:
        'Can I purchase the furniture after renting it?',

      answer:
        'Yes. Customers can buy rented furniture products after completing a minimum rental duration. Existing rental payments may also contribute toward the final purchase cost.'
    }
  ];

  const toggleFAQ = (index) => {

    setOpenIndex(

      openIndex === index
        ? -1
        : index

    );
  };

  return (

    <section
      className="faq-section section-spacing"
      id="faq"
    >

      <div className="container">

        {/* HEADER */}

        <div className="section-header">

          <h2 className="section-heading">

            Frequently Asked Questions

          </h2>

          <p className="section-subheading">

            Find answers to common questions about
            furniture rentals, delivery, pricing,
            support, and rental policies at
            Super Furniture Rent.

          </p>

        </div>

        {/* TRUST PILLS */}

        <div className="trust-features">

          <div className="trust-item">

            <Truck size={18} />

            Fast Delivery

          </div>

          <div className="trust-item">

            <ShieldCheck size={18} />

            Secure Rentals

          </div>

          <div className="trust-item">

            <BadgeCheck size={18} />

            Verified Support

          </div>

        </div>

        {/* FAQ LIST */}

        <div className="faq-container">

          {faqs.map(
            (faq, index) => (

              <div
                key={index}

                className={`faq-item ${openIndex === index
                    ? 'open'
                    : ''
                  }`}
              >

                {/* QUESTION */}

                <button
                  className="faq-question"

                  onClick={() =>
                    toggleFAQ(index)
                  }
                >

                  <span>

                    {faq.question}

                  </span>

                  <span
                    className={`faq-toggle ${openIndex === index
                        ? 'active'
                        : ''
                      }`}
                  >

                    <ChevronDown size={18} />

                  </span>

                </button>

                {/* ANSWER */}

                <div
                  className={`faq-answer ${openIndex === index
                      ? 'active'
                      : ''
                    }`}
                >

                  {faq.answer}

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}