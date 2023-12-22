import React from 'react';
import '../assets/css/About.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
    return (
        <div>
            <Header />
            <section className="contact-section">
            
      <div className="contact-content">
        
      </div>
    </section>
    <section className="contact-info-section">
      <div className="contact-info-content">
        <div className="contact-info-item">
          <img src="src/images/aboutus.jpg" alt="Contact Info" />
        </div>
        <div className="contact-info-item">
          
          <p>
          KingCurd is your go-to destination for premium dairy products, offering a seamless online shopping experience. Our ecommerce website and user-friendly delivery app bring the goodness of fresh curd,
           milk, and cheese directly to your doorstep. Explore a wide selection of high-quality dairy items, place orders with ease, and enjoy the convenience of contactless delivery. With KingCurd, savor the richness of farm-fresh goodness, delivered straight to you.
          </p>
        </div>
      </div>
    </section>
      
            {/* Your Products page content */}
            <Footer />
        </div>
    );
};

export default About;