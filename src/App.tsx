import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
const App:React.FC = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="singleproduct/:id" element={<SingleProduct/>}/>
      <Route path="cart" element={<Cart/>}/>

    </Routes>
  </Router>
    
  
};

export default App;