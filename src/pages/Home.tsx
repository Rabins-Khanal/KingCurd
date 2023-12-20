import '../assets/css/Home.css';
// Home.tsx

import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            {/* Navigation Bar */}
            <header className="navbar">
                <div className="logo-container">
                    <img
                        src={"src/images/logo.png"}
                         alt="King Curd Logo"/>
                    <span className="brand-name">King Curd</span>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/products">Products</a>
                        </li>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to the World of Delicious Curd</h1>
                    <p>Discover the richness of taste with King Curd</p>
                    <a href="/products" className="cta-button">
                        Explore Products
                    </a>
                </div>
            </section>

            {/* Featured Products */}
            <section className="featured-products">
                <h2>Featured Products</h2>
                <div className="product-card">
                    <img src="product1.jpg" alt="Product 1" />
                    <h3>Classic Curd</h3>
                    <p>Smooth and creamy curd with a timeless taste.</p>
                </div>
                <div className="product-card">
                    <img src="product2.jpg" alt="Product 2" />
                    <h3>Flavored Delight</h3>
                    <p>Experience a burst of flavors with our curated blends.</p>
                </div>
                {/* Add more product cards as needed */}
            </section>

            {/* About Us Section */}
            <section className="about-us">
                <h2>About Us</h2>
                <p>
                    King Curd is dedicated to bringing you the finest and most delicious curd
                    products. Our commitment to quality and taste makes us the preferred choice
                    for curd enthusiasts around the world.
                </p>
            </section>

            {/* Contact Section */}
            <section className="contact">
                <h2>Contact Us</h2>
                <p>Have questions or want to place an order? Reach out to us!</p>
                <a href="/contact" className="cta-button">
                    Contact Now
                </a>
            </section>
        </div>
    );
};

export default Home;



