
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faClipboardList, faUsers, faChartBar, faExchangeAlt, faCog, faSearch,faEnvelope, faUser, faHome,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '/Users/puja/Movies/Software Dev/src/assets/css/admin/AdminDashboard.css';
import ProductForm from './ProductForm';

const DashboardContent: React.FC = () => (
  <div>
    <h2>Dashboard Page</h2>
    {/* Add content for the Dashboard page */}
  </div>
);

const ProductsContent: React.FC = () => (
  <div>
    <h2>Products Page</h2>
    <ProductForm />
    {/* Add content for the Products page */}
  </div>
);
const LogoutContent: React.FC = () => (
  <div>
    <h2>Logout Page</h2>
    {/* Add content for the Logout page */}
    {/* This can include a logout button or any other logout-related content */}
  </div>
);
const AdminDashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('dashboard'); // Default page is 'dashboard'

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardContent />;
      case 'products':
        return <ProductsContent />;
        case 'logout':
          return <LogoutContent />;
      default:
        return <DashboardContent />;
    }
  };
  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div className="admin-icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="menu">
        <div className={`menu-item ${currentPage === 'dashboard' ? 'active' : ''}`} onClick={() => setCurrentPage('dashboard')}>
            <FontAwesomeIcon icon={faHome} />
            Dashboard
          </div>
          <div className={`menu-item ${currentPage === 'products' ? 'active' : ''}`} onClick={() => setCurrentPage('products')}>
            <FontAwesomeIcon icon={faBox} />
            Products
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faClipboardList} />
            Orders
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faUsers} />
            Customers
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faChartBar} />
            Statistics
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faExchangeAlt} />
            Transactions
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faCog} />
            Settings
          </div>
          <div className={`menu-item ${currentPage === 'logout' ? 'active' : ''}`} onClick={() => setCurrentPage('logout')}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          Logout
        </div>
        </div>
      </div>
      <div className="content">
        <div className="top-bar">
         
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="message-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="admin-icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <div className="main-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
