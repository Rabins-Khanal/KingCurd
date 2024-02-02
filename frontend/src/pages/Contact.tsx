import React from 'react';
import '../assets/css/Contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };

    return (
        <div>
            <Header />
            <section className="information-section">
        <h2>Contact Us</h2>
        <p>
          
          
        </p>
      </section>
      <section className="contact-form-section">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter phone number" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Type message here" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>


           
            <Footer />
        </div>
    );
};

export default Contact;