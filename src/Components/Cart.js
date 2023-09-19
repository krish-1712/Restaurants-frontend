import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { url } from '../App';
import './Cart.css';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Cart = () => {
  const location = useLocation();
  const userId = location.state?.userId;
  let navigate = useNavigate()

  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    if (userId) {
      console.log('Fetching cart data for userId:', userId);
      const fetchCart = async () => {
        try {
          const response = await axios.get(`${url}/users/get-cart/${userId}`);
          console.log('Response data:', response.data);
          setCartData(response.data);
          toast.success(response.data.message);
        } catch (error) {
          console.error('Error fetching cart:', error);
          toast.error(error.response.data.message);
        }
      };

      fetchCart();
    }
  }, [userId]);

  const incrementCount = (item) => {
    const updatedCartData = cartData.map((cartItem) => {
      if (cartItem.itemId === item.itemId) {
        return {
          ...cartItem,
          count: cartItem.count + 1,
        };
      }
      return cartItem;
    });

    setCartData(updatedCartData);
  };


  const decrementCount = (item) => {

    const updatedCartData = cartData.map((cartItem) => {
      if (cartItem.itemId === item.itemId && cartItem.count > 0) {
        return {
          ...cartItem,
          count: cartItem.count - 1,
        };
      }
      return cartItem;
    });

    setCartData(updatedCartData);
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Cart Details</h1>
      <Button variant="primary" onClick={() => navigate('/restaurant')} style={{ marginLeft: "1230px" }} className='res' >
        Restaurant
      </Button>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {cartData &&
            cartData.map(item => (
              <tr key={item._id}>
                <td>{item.userId}</td>
                <td>{item.itemId}</td>
                <td>{item.name}</td>
                <td>
                  <button onClick={() => incrementCount(item)}>+</button>
                  {item.count}
                  <button onClick={() => decrementCount(item)}>-</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
