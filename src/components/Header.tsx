
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';


const Header:React.FC = () => {
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
                        <li>
                            
                           
                        
                    <FaShoppingCart className="cart-icon" />
                    </li>
                </div>
            </header>
            </div>



  );
    
  
};

export default Header;
