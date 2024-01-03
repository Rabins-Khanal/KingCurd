import React,{useState} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../assets/css/Products.css';


const Products: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  return (
      <div>
        <Header/>
        
      <section className="search-section">
        
        <form>
          <input type="text" placeholder="Enter product name" />
          <button type="submit">Search</button>
        </form>
        
        </section>

      
      <section className="product-cards">
        <div className="product-card">
          <img src="src/images/juju-dhau.png" alt="Curd 1" />
          <h3>Product 1</h3>
          <p className="price">Rs 200.00</p>
          <div className="ratings">
            
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
            <span>&#9734;</span>
          </div>
          <p>Quantity in Stock: 50</p>
          {/* Quantity Input */}
          <div className="quantity-input">
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button className="add-to-cart" >Add to Cart</button>
        </div>


        <div className="product-card">
          <img src="src/images/juju-dhau.png" alt="Curd 2" />
          <h3>Product 2</h3>
          <p className="price">Rs 150.00</p>
          <div className="ratings">
           
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
          </div>
          <p>Quantity in Stock: 30</p>
          <div className="quantity-input">
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>

        <div className="product-card">
          <img src="src/images/juju-dhau.png" alt="Curd 3" />
          <h3>Product 3</h3>
          <p className="price">Rs 99.99</p>
          <div className="ratings">
            
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
          </div>
          <p>Quantity in Stock: 30</p>
          <div className="quantity-input">
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src="src/images/juju-dhau.png" alt="Curd 3" />
          <h3>Product 3</h3>
          <p className="price">Rs 100.00</p>
          <div className="ratings">
            {/* Add your rating component or display rating as needed */}
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
          </div>
          <p>Quantity in Stock: 30</p>
          <div className="quantity-input">
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src="src/images/juju-dhau.png" alt="Curd 3" />
          <h3>Product 3</h3>
          <p className="price">Rs 120.00</p>
          <div className="ratings">
            {/* Add your rating component or display rating as needed */}
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
          </div>
          <p>Quantity in Stock: 30</p>
          <div className="quantity-input">
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src="src/images/juju-dhau.png" alt="Curd 3" />
          <h3>Product 3</h3>
          <p className="price">Rs 150.00</p>
          <div className="ratings">
            {/* Add your rating component or display rating as needed */}
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
          </div>
          <p>Quantity in Stock: 30</p>
          <div className="quantity-input">
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src="src/images/juju-dhau.png" alt="Curd 3" />
          <h3>Product 3</h3>
          <p className="price">Rs 130.00</p>
          <div className="ratings">
            {/* Add your rating component or display rating as needed */}
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
          </div>
          <p>Quantity in Stock: 30</p>
          <div className="quantity-input">
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src="src/images/juju-dhau.png" alt="Curd 3" />
          <h3>Product 3</h3>
          <p className="price">Rs 250.00</p>
          <div className="ratings">
            {/* Add your rating component or display rating as needed */}
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
          </div>
          <p>Quantity in Stock: 30</p>
          <div className="quantity-input">
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src="src/images/juju-dhau.png" alt="Curd 3" />
          <h3>Product 3</h3>
          <p className="price">Rs 300.00</p>
          <div className="ratings">
            {/* Add your rating component or display rating as needed */}
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
          </div>
          <p>Quantity in Stock: 30</p>
          <div className="quantity-input">
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>






       
      </section>

          
          <Footer />
      </div>
  );
};

export default Products;