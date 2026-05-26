import {
  Truck,
  Wallet,
  RefreshCcw,
  BadgeCheck,
  ShieldCheck,
  Headphones
} from 'lucide-react';

import '../styles/hero-features.css';

export default function Features() {

  const features = [

    {
      icon: <Truck size={34} />,

      title: 'Fast Furniture Delivery',

      description:
        'Get beds, sofas, wardrobes, study tables, and other rental furniture delivered quickly across your location with hassle-free setup support.'
    },

    {
      icon: <Wallet size={34} />,

      title: 'Affordable Monthly Rentals',

      description:
        'Flexible furniture rental plans designed for students, working professionals, families, and businesses at budget-friendly pricing.'
    },

    {
      icon: <RefreshCcw size={34} />,

      title: 'Easy Upgrade & Replacement',

      description:
        'Upgrade, replace, or return furniture easily whenever your requirements change during the rental period.'
    },

    {
      icon: <BadgeCheck size={34} />,

      title: 'Premium Quality Furniture',

      description:
        'All furniture products are carefully maintained, cleaned, and quality checked to ensure long-lasting comfort and reliability.'
    },

    {
      icon: <ShieldCheck size={34} />,

      title: 'Safe & Reliable Service',

      description:
        'Transparent rental process with dedicated customer support and secure handling of every furniture delivery and pickup.'
    },

    {
      icon: <Headphones size={34} />,

      title: 'Dedicated Customer Support',

      description:
        'Our support team is available to assist you with product inquiries, delivery coordination, and rental assistance.'
    }
  ];

  return (

    <section
      className="features-section section-spacing"
      id="why-rent"
    >

      <div className="container">

        <div className="section-header">

          <h2 className="section-heading">

            Why Choose Super Furniture Rent?

          </h2>

          <p className="section-subheading">

            Affordable furniture on rent with fast delivery,
            flexible plans, premium quality products, and reliable customer support.

          </p>

        </div>

        <div className="features-grid">

          {features.map(
            (feature, index) => (

              <div
                key={index}
                className="feature-card"
              >

                <div className="feature-icon">

                  {feature.icon}

                </div>

                <h3>

                  {feature.title}

                </h3>

                <p>

                  {feature.description}

                </p>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}