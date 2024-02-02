import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram,FaTwitter} from "react-icons/fa";


const Footer:React.FC = () => {
  return (
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
    
  );
};

export default Footer;