import { useState } from 'react';

import {
  Check,
  ShieldCheck,
  Truck,
  BadgeCheck
} from 'lucide-react';

import '../styles/products-pricing.css';

export default function Pricing() {

  const [billingCycle, setBillingCycle] =
    useState('monthly');

  const plans = [

    {
      name: 'Basic Rental',

      monthlyPrice: 1999,

      annualPrice: 19990,

      description:
        'Affordable furniture rental plan for students, bachelors, and small room setups.',

      features: [
        'Up to 2 Furniture Products',
        'Free Standard Delivery',
        'Basic Customer Support',
        'Flexible Monthly Rental',
        'Easy Product Replacement'
      ]
    },

    {
      name: 'Premium Rental',

      monthlyPrice: 4999,

      annualPrice: 49990,

      description:
        'Perfect furniture rental solution for families and furnished apartment setups.',

      features: [
        'Up to 5 Furniture Products',
        'Priority Delivery Support',
        'Premium Customer Assistance',
        'Flexible Rental Duration',
        'Damage Protection Included',
        'Free Furniture Upgrade Support'
      ],

      featured: true
    },

    {
      name: 'Business Rental',

      monthlyPrice: 9999,

      annualPrice: 99990,

      description:
        'Complete furniture rental solution for offices, startups, and co-living spaces.',

      features: [
        'Unlimited Furniture Rental',
        'Dedicated Account Support',
        'Custom Office Setup',
        'Flexible Billing Terms',
        'Premium Damage Protection',
        'Priority Maintenance Service',
        'Corporate Pricing Benefits'
      ]
    }
  ];

  const getPrice = (plan) => {

    return billingCycle === 'monthly'

      ? plan.monthlyPrice

      : plan.annualPrice;
  };

  return (

    <section
      className="pricing-section section-spacing"
      id="pricing"
    >

      <div className="container">

        {/* HEADER */}

        <div className="section-header">

          <h2 className="section-heading">

            Flexible Furniture Rental Pricing

          </h2>

          <p className="section-subheading">

            Choose affordable furniture rental plans for homes,
            offices, students, and modern living spaces with flexible billing options.

          </p>

        </div>

        {/* TOGGLE */}

        <div className="pricing-tabs">

          <button
            className={`pricing-tab ${billingCycle === 'monthly'
                ? 'active'
                : ''
              }`}

            onClick={() =>
              setBillingCycle('monthly')
            }
          >

            Monthly Billing

          </button>

          <button
            className={`pricing-tab ${billingCycle === 'annual'
                ? 'active'
                : ''
              }`}

            onClick={() =>
              setBillingCycle('annual')
            }
          >

            Annual Billing
            {' '}
            <span>
              Save 17%
            </span>

          </button>

        </div>

        {/* PRICING CARDS */}

        <div className="pricing-cards">

          {plans.map(
            (plan, index) => (

              <div
                key={index}

                className={`pricing-card ${plan.featured
                    ? 'featured'
                    : ''
                  }`}
              >

                {/* BADGE */}

                {plan.featured && (

                  <div className="pricing-badge">

                    Most Popular

                  </div>

                )}

                {/* TITLE */}

                <h3 className="pricing-name">

                  {plan.name}

                </h3>

                {/* PRICE */}

                <div className="pricing-price-wrapper">

                  <span className="currency">

                    ₹

                  </span>

                  <span className="pricing-price">

                    {getPrice(plan)}

                  </span>

                </div>

                <p className="pricing-period">

                  {billingCycle === 'monthly'

                    ? 'Per Month'

                    : 'Per Year'}

                </p>

                {/* DESCRIPTION */}

                <p className="pricing-description">

                  {plan.description}

                </p>

                {/* TRUST ITEMS */}

                <div className="pricing-trust">

                  <div className="trust-pill">

                    <Truck size={16} />

                    Fast Delivery

                  </div>

                  <div className="trust-pill">

                    <ShieldCheck size={16} />

                    Secure Rental

                  </div>

                  <div className="trust-pill">

                    <BadgeCheck size={16} />

                    Verified Service

                  </div>

                </div>

                {/* FEATURES */}

                <ul className="pricing-features">

                  {plan.features.map(
                    (feature, i) => (

                      <li key={i}>

                        <Check size={18} />

                        {feature}

                      </li>

                    )
                  )}

                </ul>

                {/* CTA */}

                <button
                  className={`pricing-cta ${plan.featured
                      ? 'primary'
                      : 'secondary'
                    }`}
                >

                  Get Started

                </button>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}