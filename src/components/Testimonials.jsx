import {
  Star,
  Quote
} from 'lucide-react';

import '../styles/testimonials-faq-footer.css';

export default function Testimonials() {

  const testimonials = [

    {
      name: 'Aditya Kumar',

      role: 'Engineering Student',

      initials: 'AK',

      rating: 5,

      text:
        'Super Furniture Rent made furnishing my student apartment extremely easy. The delivery was quick, pricing was affordable, and the furniture quality exceeded my expectations.'
    },

    {
      name: 'Priya Sharma',

      role: 'Working Professional',

      initials: 'PS',

      rating: 5,

      text:
        'I frequently relocate for work, and renting furniture from Super Furniture Rent has been the most convenient solution for setting up my home quickly.'
    },

    {
      name: 'Rajesh Patel',

      role: 'College Graduate',

      initials: 'RP',

      rating: 5,

      text:
        'Affordable furniture rental with premium quality products and excellent customer support. The entire rental process was smooth and professional.'
    },

    {
      name: 'Neha Singh',

      role: 'Interior Design Student',

      initials: 'NS',

      rating: 5,

      text:
        'Loved the modern furniture collection and flexible rental plans. The website experience and delivery support were seamless from start to finish.'
    },

    {
      name: 'Vikram Gupta',

      role: 'Software Engineer',

      initials: 'VG',

      rating: 5,

      text:
        'The study desk and ergonomic chair setup completely improved my work-from-home experience. Highly recommended furniture rental service.'
    },

    {
      name: 'Anjali Mehta',

      role: 'MBA Student',

      initials: 'AM',

      rating: 5,

      text:
        'Transparent pricing, no hidden charges, and excellent furniture quality. Super Furniture Rent offers one of the best furniture rental experiences.'
    }
  ];

  return (

    <section
      className="testimonials-section section-spacing"
      id="testimonials"
    >

      <div className="container">

        {/* HEADER */}

        <div className="section-header">

          <h2 className="section-heading">

            Trusted by Happy Customers

          </h2>

          <p className="section-subheading">

            Discover why students, working professionals,
            families, and businesses trust Super Furniture Rent
            for affordable and premium furniture rental solutions.

          </p>

        </div>

        {/* GRID */}

        <div className="testimonials-grid">

          {testimonials.map(
            (testimonial, index) => (

              <div
                key={index}
                className="testimonial-card"
              >

                {/* QUOTE ICON */}

                <div className="quote-icon">

                  <Quote size={28} />

                </div>

                {/* RATING */}

                <div className="testimonial-rating">

                  {[...Array(testimonial.rating)].map(
                    (_, i) => (

                      <Star
                        key={i}
                        size={18}
                        fill="#c89b3c"
                        color="#c89b3c"
                      />

                    )
                  )}

                </div>

                {/* TEXT */}

                <p className="testimonial-text">

                  "
                  {testimonial.text}
                  "

                </p>

                {/* AUTHOR */}

                <div className="testimonial-author">

                  <div className="testimonial-avatar">

                    {testimonial.initials}

                  </div>

                  <div className="testimonial-info">

                    <h4>

                      {testimonial.name}

                    </h4>

                    <p>

                      {testimonial.role}

                    </p>

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