import React from 'react';
import axios from 'axios';
import { useMutation } from "@tanstack/react-query";

interface CartProps {
  cartProducts: any[]; 
  onRemoveProduct: (productId: number) => void;
}

const CartTable: React.FC<CartProps> = ({ cartProducts, onRemoveProduct }) => {
  const calculateTotal = (quantity: number, price: number) => {
    return quantity * price;
  };

  const subtotal = cartProducts.reduce((acc, product) => acc + calculateTotal(product.quantity, product.price), 0);
  
  const grandTotal = subtotal ;

  const checkoutApi=useMutation({
    mutationKey:["CHECKOUT_API"],
    mutationFn(payload){
        return axios.post("http://localhost:8080/order/saveAll",payload,{
            headers:{
                "authorization":"Bearer "+localStorage.getItem("accessToken")
            }
        })
    }
})

  //to checkout 

  const handleCheckout = async () => {
    try {
      const date = new Date();
      console.log(checkoutApi.data);
      
      if (!checkoutApi.data || !Array.isArray(checkoutApi.data)) {
        console.error('No data available for checkout or data is not an array');
        return;
      }
  
      const payload = checkoutApi.data.map((i) => ({
        userId: localStorage.getItem("userId"),
        productId: i?.product?.id,
        deliveryStatus: "pending",
        deliveryTime: date.getTime(),
        deliveryDate: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
        quantity: i?.quantity,
        price: i?.price,
      }));
  
      await checkoutApi.mutateAsync(payload);
  
      console.log('Checkout successful');
      window.location.href = "/dashboard";
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };
  
  return (
    <div>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th> 
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product) => (
            <tr key={product.id}>
              <td>
            <img
                src={`data:image/jpeg;base64,${product.productImage}`}
                alt={product.productImage}
                width="50"
            />
        </td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{calculateTotal(product.quantity, product.price)}</td>
              <td><button onClick={() => onRemoveProduct(product.id)}>Remove</button></td>
            </tr>
            
          ))}
        </tbody>
      </table>
      <div>
        <p>Subtotal: {subtotal}</p>
      
        <p>Grand Total: {grandTotal}</p>
        <button onClick={()=>handleCheckout()}>Check Out</button>
      </div>
    </div>
  );
};

export default CartTable;
