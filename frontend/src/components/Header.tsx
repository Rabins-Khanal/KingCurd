// Header.tsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { isLoggedIn, doLogout } from '../auth/authService';

const Header: React.FC = () => {
  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      doLogout();
      // Redirect to the login page after logout
      window.location.href = '/login';
    }
  };

  return (
    <div>
      <header className="navbar">
        <div className="logo-container">
          <img src={"src/images/logo1.png"} alt="King Curd Logo" />
          <span className="brand-name"></span>
        </div>
        <nav>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/HomeProduct">Products</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <nav>
          <div className="user-icons">
            {isLoggedIn() ? (
              <>
                <li className="login-signup">
                  <button onClick={handleLogout}style={{ fontSize: '12px', padding: '4px 8px', width: '60px', height: '30px'  }}>Logout</button>
                </li>
                <li>
                  {/* Link to the "/cart" route using a simple anchor tag */}
                  <Link to="/cart" className="cart-icon"style={{ fontSize: '18px', height: '15px' }}>
                    <FaShoppingCart />
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="login-signup">
                  <Link to="/login">Login</Link>
                </li>
                <li className="login-signup">
                  <Link to="/signup">Signup</Link>
                </li>
                {/* Always show the cart icon */}
                <li>
                  <Link to="/cart" className="cart-icon"style={{ fontSize: '18px', height: '15px' }}>
                    <FaShoppingCart />
                  </Link>
                </li>
              </>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
