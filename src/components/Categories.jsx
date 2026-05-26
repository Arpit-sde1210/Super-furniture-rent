import '../styles/hero-features.css';

import Bed from '../assets/Stocks/queen-size-bed.webp';

import Desk from '../assets/Stocks/study-desk.webp';

import Sofa from '../assets/Stocks/sofa.webp';

import Table from '../assets/Stocks/dinning-table.webp';

import Chair from '../assets/Stocks/chair.webp';

import Wardrobe from '../assets/Stocks/wardrobe.webp';

import Bookshelf from '../assets/Stocks/book-shelf.webp';

import Nightstand from '../assets/Stocks/nightstand.webp';

export default function Categories() {

  const categories = [

    {
      image: Bed,

      name: 'Beds & Mattresses',

      count: '24+ Items',

      description:
        'Premium beds and mattresses on rent for comfortable bedroom setups.'
    },

    {
      image: Chair,

      name: 'Chairs & Seating',

      count: '18+ Items',

      description:
        'Comfortable office chairs and seating furniture for homes and workspaces.'
    },

    {
      image: Sofa,

      name: 'Sofas & Couches',

      count: '15+ Items',

      description:
        'Luxury sofas and modern couches on rent for stylish living rooms.'
    },

    {
      image: Wardrobe,

      name: 'Wardrobes',

      count: '12+ Items',

      description:
        'Spacious wardrobes with modern storage solutions and premium finishes.'
    },

    {
      image: Table,

      name: 'Dining Tables',

      count: '10+ Items',

      description:
        'Elegant dining tables on rent for family dining and modern interiors.'
    },

    {
      image: Desk,

      name: 'Study Desks',

      count: '14+ Items',

      description:
        'Modern study desks for students and professionals with spacious workspace.'
    },

    {
      image: Bookshelf,

      name: 'Bookshelves',

      count: '20+ Items',

      description:
        'Compact bookshelves and storage racks for organized modern spaces.'
    },

    {
      image: Nightstand,

      name: 'Nightstands',

      count: '16+ Items',

      description:
        'Minimal wooden nightstands with drawer storage and elegant styling.'
    }
  ];

  return (

    <section
      className="section-spacing"
      id="categories"
      style={{
        background: '#ffffff'
      }}
    >

      <div className="container">

        {/* HEADER */}

        <div className="section-header">

          <h2 className="section-heading">

            Browse Furniture by Category

          </h2>

          <p className="section-subheading">

            Explore affordable furniture on rent including beds,
            sofas, wardrobes, study desks, dining tables,
            office chairs, and modern home furniture solutions.

          </p>

        </div>

        {/* GRID */}

        <div className="categories-grid">

          {categories.map(
            (category, index) => (

              <div
                key={index}
                className="category-card"
              >

                {/* IMAGE */}

                <div className="category-image">

                  <img
                    src={category.image}

                    alt={`${category.name} on rent`}

                    className="category-img"

                    loading="lazy"

                    decoding="async"

                    width="400"

                    height="320"
                  />

                </div>

                {/* CONTENT */}

                <div className="category-content">

                  <h3 className="category-name">

                    {category.name}

                  </h3>

                  <div className="category-count">

                    {category.count}

                  </div>

                  <p className="category-description">

                    {category.description}

                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}