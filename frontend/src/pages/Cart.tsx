

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartTable from './CartTable';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Cart: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/cart/getAll', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setCartProducts(response.data);
      } catch (error) {
        console.error('Error fetching cart products:', error);
      }
    };

    fetchCartProducts();
  }, []);


  const handleRemoveProduct = async (id: number) => {
    try {
      
      await axios.delete(`http://localhost:8080/cart/deleteById/`+id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      
      setCartProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  return (
    <div>
      <Header />
      <h2>Your Cart</h2>
      <CartTable cartProducts={cartProducts} onRemoveProduct={handleRemoveProduct} />
      <Footer />
    </div>
  );
};

export default Cart;

