import '../assets/css/Home.css';
import { FaShoppingCart } from 'react-icons/fa';
import { LuShoppingBag } from "react-icons/lu";
import { MdHighQuality } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



// Home.tsx

import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            {/* Navigation Bar */}
            <header className="navbar">
                <div className="logo-container">
                    <img
                        src={"src/images/logo1.png"}
                         alt="King Curd Logo"/>
                    <span className="brand-name">KingCurd</span>
                </div>
                <nav>
                    <div>
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
                    </div>
                </nav>
                <div className="user-icons">
                 <li className="login-signup">
                   <a href="/login">Login</a>
                 </li>
                 <li className="login-signup">
                            <a href="/signup">Signup</a>
                        </li>
                    <FaShoppingCart className="cart-icon" />
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
            <div className="background-slider" style={{ backgroundImage: 'url("src/images/curd3.jpg")' }}></div>
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
                    <img src="src/images/cheese1.jpg" alt="Product 1" />
                    <div className="overlay">
                    <p>Smooth and creamy curd with a timeless taste.</p>
                    </div>
                </div>
                <div className="product-card">
                    <img src="src/images/curd3.jpg" alt="Product 2" />
                    <h3>Flavored Delight</h3>
                    <p>Experience a burst of flavors with our curated blends.</p>
                </div>
                <div className="product-card">
                    <img src="src/images/milk1.jpg" alt="Product 3" />
                    <h3>Flavored Delight</h3>
                    <p>Experience a burst of flavors with our curated blends.</p>
                </div>
            </section>

            {/* About Us Section */}
            <section className="about-us">
                <h2>Why Choose KingCurd?</h2>
                <p>
                    King Curd is dedicated to bringing you the finest and most delicious curd
                    products. Our commitment to quality and taste makes us the preferred choice
                    for curd enthusiasts around the world.
                </p>
                <div className="about-point">
            <h3>01. Freshness Guaranteed</h3>
            <p>We guarantee the freshness of all our dairy products, ensuring that you get the best quality possible.</p>
        </div>
        <div className="about-point">
            <h3>02. Wide Range of Products</h3>
            <p>We offer a wide range of dairy products, including curd, cheese, and milk, all made from the highest quality ingredients.</p>
        </div>
        <div className="about-point">
            <h3>03. Flexible Delivery Options</h3>
            <p>We offer flexible delivery options, including same-day and next-day delivery, to ensure that you receive your dairy products at a time that suits you.</p>
        </div>
        <div className="about-point">
            <h3>04. Secure Payment Gateways</h3>
            <p>We use integrated payment gateways to ensure that your online transactions with us are secure and hassle-free.</p>
        </div>


                
            </section>

            {/* Contact Section */}
            <section className="contact">
                <h2>Our Mission</h2>
                <p>At KingCurd, our mission is to bring the richness of dairy to your home. We are committed to sourcing the highest quality ingredients, promoting sustainable and ethical food practices, and delivering a seamless customer experience. Join us on our journey towards excellence in dairy.</p>
                
                <div className="free-shipping-container">
                 <LuShoppingBag className="free-shipping-icon" />
                 <p className="free-shipping-text">Free Shipping on all orders above 300 Rs.</p>
                </div>
                <div className="free-shipping-container">
                 <MdHighQuality className="free-shipping-icon" />
                 <p className="free-shipping-text">Quality Products.
                    Good and Quality Products</p>
                </div>
                <div className="free-shipping-container">
                 <BiSolidLike className="free-shipping-icon" />
                 <p className="free-shipping-text">Maintain Hygiene and Purity
                    Clean and free from germs</p>
                </div>
            </section>
            <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About </h3>
            <p>
              Strengthen your muscles with a glass of pure cow’s milk. KingCurd provides you the best quality milk and milk products with natural sweetness. The amazing taste is our focus that every child will love. Along with Cow milk, we also supply the rich and creamy buffalo milk.
            </p>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
            <FaFacebook className="free-shipping-icon" />
                <i className="fab fa-facebook-f"></i>
              
                <FaInstagram className="free-shipping-icon" />
                <i className="fab fa-instagram"></i>
             
                <FaTwitter className="free-shipping-icon" />
                <i className="fab fa-twitter"></i>
             
            </div>
          </div>

          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li><a href="/franchise">Franchise</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Use</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Information</h3>
            <p>
              KingCurd
              <br />
              Shop no 15, DilliBazar,Kathmandu
              Near Softwarica college of IT and Ecommerce, DilliBazar,Kathmandu Nepal
              
              <br />
              +977 98059 17951
              <br />
              info@kingcurd.com
            </p>
          </div>
        </div>
      </footer>
            </div>
            
      
        
    );
};

export default Home;


