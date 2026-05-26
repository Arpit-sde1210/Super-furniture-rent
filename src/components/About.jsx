import {
    Sofa,
    Truck,
    ShieldCheck,
    BadgeCheck,
    Users,
    Building2,
    Sparkles,
    Clock
} from 'lucide-react';

import '../styles/about.css';

export default function AboutUs() {

    return (

        <section className="about-page">

            <div className="container">

                {/* HERO */}

                <div className="about-hero">

                    <span className="about-badge">

                        About Super Furniture Rent

                    </span>

                    <h1>

                        Premium Furniture Rental
                        Solutions For Modern Living

                    </h1>

                    <p>

                        Super Furniture Rent is a trusted
                        furniture rental company in India
                        offering stylish, affordable,
                        and premium-quality furniture
                        for homes, offices, students,
                        and working professionals.

                    </p>

                </div>

                {/* STATS */}

                <div className="about-stats">

                    <div className="stat-card">

                        <h3>

                            10K+

                        </h3>

                        <p>

                            Happy Customers

                        </p>

                    </div>

                    <div className="stat-card">

                        <h3>

                            500+

                        </h3>

                        <p>

                            Furniture Products

                        </p>

                    </div>

                    <div className="stat-card">

                        <h3>

                            25+

                        </h3>

                        <p>

                            Service Cities

                        </p>

                    </div>

                    <div className="stat-card">

                        <h3>

                            24/7

                        </h3>

                        <p>

                            Customer Support

                        </p>

                    </div>

                </div>

                {/* GRID */}

                <div className="about-grid">

                    {/* LEFT */}

                    <div className="about-content">

                        {/* WHO WE ARE */}

                        <section className="about-section">

                            <div className="section-icon">

                                <Users size={24} />

                            </div>

                            <h2>

                                Who We Are

                            </h2>

                            <p>

                                At Super Furniture Rent,
                                we believe that everyone
                                deserves access to premium
                                furniture without spending
                                a fortune.

                            </p>

                            <p>

                                Our platform provides
                                high-quality furniture on rent
                                for apartments, offices,
                                co-living spaces, hostels,
                                and rental homes across India.

                            </p>

                            <p>

                                Whether you need a comfortable bed,
                                modern sofa, study desk,
                                wardrobe, dining table,
                                or office furniture,
                                we provide flexible rental
                                plans designed to match
                                your lifestyle and budget.

                            </p>

                        </section>

                        {/* MISSION */}

                        <section className="about-section">

                            <div className="section-icon">

                                <Sparkles size={24} />

                            </div>

                            <h2>

                                Our Mission

                            </h2>

                            <p>

                                Our mission is to make
                                furniture rental simple,
                                affordable, and accessible
                                for everyone.

                            </p>

                            <p>

                                We aim to help students,
                                families, and professionals
                                create beautiful living
                                and working spaces with
                                hassle-free rental solutions,
                                quick delivery,
                                and reliable support.

                            </p>

                        </section>

                        {/* WHY CHOOSE */}

                        <section className="about-section">

                            <div className="section-icon">

                                <BadgeCheck size={24} />

                            </div>

                            <h2>

                                Why Choose Super Furniture Rent

                            </h2>

                            <div className="about-features">

                                <div className="about-feature">

                                    <Sofa size={26} />

                                    <h3>

                                        Premium Furniture Collection

                                    </h3>

                                    <p>

                                        Stylish and durable
                                        furniture for modern homes
                                        and offices.

                                    </p>

                                </div>

                                <div className="about-feature">

                                    <Truck size={26} />

                                    <h3>

                                        Fast Delivery & Installation

                                    </h3>

                                    <p>

                                        Quick doorstep delivery
                                        with professional setup support.

                                    </p>

                                </div>

                                <div className="about-feature">

                                    <ShieldCheck size={26} />

                                    <h3>

                                        Secure Rental Experience

                                    </h3>

                                    <p>

                                        Reliable support and
                                        safe rental processes
                                        for complete peace of mind.

                                    </p>

                                </div>

                                <div className="about-feature">

                                    <Clock size={26} />

                                    <h3>

                                        Flexible Rental Plans

                                    </h3>

                                    <p>

                                        Monthly plans designed
                                        for students,
                                        families, and professionals.

                                    </p>

                                </div>

                            </div>

                        </section>

                    </div>

                    {/* RIGHT */}

                    <div className="about-sidebar">

                        {/* CARD */}

                        <div className="sidebar-card">

                            <div className="sidebar-icon">

                                <Building2 size={28} />

                            </div>

                            <h3>

                                Trusted Furniture Rental Brand

                            </h3>

                            <p>

                                Super Furniture Rent proudly
                                serves customers across
                                major Indian cities with
                                reliable furniture rental
                                services for homes,
                                offices, students,
                                and working professionals.

                            </p>

                        </div>

                        {/* CARD */}

                        <div className="sidebar-card">

                            <div className="sidebar-icon">

                                <Sparkles size={28} />

                            </div>

                            <h3>

                                Our Vision

                            </h3>

                            <p>

                                To become India’s most trusted
                                furniture rental platform by
                                delivering affordable luxury,
                                exceptional customer experience,
                                and flexible rental solutions.

                            </p>

                        </div>

                        {/* TRUST BADGES */}

                        <div className="about-trust">

                            <div className="trust-item">

                                ✅ Affordable Rentals

                            </div>

                            <div className="trust-item">

                                🚚 Free Delivery

                            </div>

                            <div className="trust-item">

                                🛡️ Secure Payments

                            </div>

                            <div className="trust-item">

                                ⭐ Premium Quality

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}