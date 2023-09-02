// import React from 'react'


// const Cart = () => {


//   return (

//     <main className='main-container'>
//       <h3>cart</h3>
//     </main>

//   )
// }

// export default Cart




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import { url } from '../App';

// const CartPage = () => {
//   const location = useLocation();
//   const userId = location.state?.userId; // Use optional chaining to handle null or undefined

//   const [cartData, setCartData] = useState(null);

//   // useEffect(() => {
//   //   if (userId) {
//   //     console.log('Fetching cart data for userId:', userId);
//   //     const fetchCart = async () => {
//   //       try {
//   //         const response = await axios.get(`${url}/users/get-cart/${userId}`);
//   //         console.log('Response data:', response.data); // Log the response data
//   //         setCartData(response.data);
//   //       } catch (error) {
//   //         console.error('Error fetching cart:', error);
//   //       }
//   //     };

//   //     fetchCart();
//   //   }
//   // }, [userId]);


//   useEffect(() => {
//     if (userId) {
//       console.log('Fetching cart data for userId:', userId);
//       const fetchCart = async () => {
//         try {
//           const response = await axios.get(`${url}/users/get-cart/${userId}`);
//           console.log('Response data:', response.data); // Log the response data
//           setCartData(response.data);
//         } catch (error) {
//           console.error('Error fetching cart:', error);
//         }
//       };

//       fetchCart();
//     }
//   }, [userId]);


//   return (
//     <div>
//       <h1>Cart</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>User ID</th>
//             <th>Item ID</th>
//             <th>Item Name</th>
//             <th>Count</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartData &&
//             cartData.items.map(item => (
//               <tr key={item.itemId._id}>
//                 <td>{item.userId}</td>
//                 <td>{item.itemId._id}</td>
//                 <td>{item.itemId.foodName}</td>
//                 <td>{item.count}</td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CartPage;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { url } from '../App';
// import './Cart.css'
// import { Button } from 'react-bootstrap';

// const Cart = () => {
//   const location = useLocation();
//   const userId = location.state?.userId;
//   let navigate = useNavigate()

//   const [cartData, setCartData] = useState(null);

//   useEffect(() => {
//     if (userId) {
//       console.log('Fetching cart data for userId:', userId);
//       const fetchCart = async () => {
//         try {
//           const response = await axios.get(`${url}/users/get-cart/${userId}`);
//           console.log('Response data:', response.data);
//           setCartData(response.data);
//         } catch (error) {
//           console.error('Error fetching cart:', error);
//         }
//       };

//       fetchCart();
//     }
//   }, [userId]);

//   return (
//     <div>
//       <h1 style={{ color: "white" }}>Cart Details</h1>
//       <Button variant="primary" onClick={() => navigate('/restaurant')} style={{ marginLeft: "1230px" }} className='res' >
//         Restaurant
//       </Button>
//       <table>
//         <thead>
//           <tr>
//             <th>User ID</th>
//             <th>Item ID</th>
//             <th>Item Name</th>
//             <th>Count</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {cartData &&
//             cartData.map(item => (
//               <tr key={item._id}>
//                 <td>{item.userId}</td>
//                 <td>{item.itemId}</td>
//                 <td>{item.name}</td>
//                 <td>{item.count}</td>
//               </tr>
//             ))} */}


//           {cartData &&
//             cartData.map(item => (
//               <tr key={item._id}>
//                 <td>{item.userId}</td>
//                 <td>{item.itemId}</td>
//                 <td>{item.name}</td>
//                 <td>
//                   <button onClick={() => incrementCount(item)}>+</button>
//                   {item.count}
//                   <button onClick={() => decrementCount(item)}>-</button>
//                 </td>
//               </tr>
//             ))}

//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { url } from '../App';
import './Cart.css';

const Cart = () => {
  const location = useLocation();
  const userId = location.state?.userId; // Use optional chaining to handle null or undefined

  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    if (userId) {
      console.log('Fetching cart data for userId:', userId);
      const fetchCart = async () => {
        try {
          const response = await axios.get(`${url}/users/get-cart/${userId}`);
          console.log('Response data:', response.data); // Log the response data
          setCartData(response.data);
        } catch (error) {
          console.error('Error fetching cart:', error);
        }
      };

      fetchCart();
    }
  }, [userId]);

  // Function to increment the count for an item
  const incrementCount = (item) => {
    // Make an API call to increment the count in the database
    // You should update the count in the database and then update the state
    // For now, let's just update the state to demonstrate the concept
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

  // Function to decrement the count for an item
  const decrementCount = (item) => {
    // Make an API call to decrement the count in the database
    // You should update the count in the database and then update the state
    // For now, let's just update the state to demonstrate the concept
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
      <h1>Cart</h1>
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
