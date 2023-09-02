// import React from 'react'
// import './RestaurantCard.css'

// function renderFoodTypes(type = []) {
//     let icons = [];
//     if (type === "nonveg")
//       icons.push(<img className="food-type-icon" src="https://www.kindpng.com/picc/m/151-1515155_veg-icon-png-non-veg-symbol-png-transparent.png" alt=''     style={{"width":"20px"}}/>);
//     if (type === "veg") icons.push(<img className="food-type-icon" src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png" alt=''style={{"width":"20px"}}  />);
//     return icons;
//   }
  
  

// const ProductCard = ({ data = {}, handleClick = (e) => {} }) => {




  
//   return (
//     <div className="restaurant-card" id="restaurant-card">
//          <div className="restaurant-logo">
//          <img src={data.imageurl} alt='' style={{"width":"100px","height":"100px"}}></img>

//       </div>
//       <div className="restaurant-details">
//       <div className="name-row">
//       <h2>{data.foodName ? data.foodName : "NA"}</h2>
//           {renderFoodTypes(data.foodType)}
//         </div>
//         <p>{data.foodDescription}</p>
//         <p>{data.actualPrice}</p>
//       </div>
 
//       <div
//         className="restaurant-goto-cta"
//         role="button"
//           onClick={() => handleClick(data._id)  }
   
//       >
//             Add
//       </div>
//     </div>
//   )
// }

// export default ProductCard























// import React from 'react'
// import './RestaurantCard.css'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { url } from '../App';





// function renderFoodTypes(type = []) {
//     let icons = [];
//     if (type === "nonveg")
//       icons.push(<img className="food-type-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCSTgGGq-nJpZh6feizKB9nOWZHwUAkfZ1tgwpSd6k7OvxbTN5N-SQy1aTdisUA96l30&usqp=CAU" alt=''     style={{"width":"20px"}}/>);
//     if (type === "veg") icons.push(<img className="food-type-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMteAKdX-P1OY8MjE5Li9YDZJAXI_hsAZ47OWYhh_HCCK76_N_E1hr1QUgnGPIIk8RmB8&usqp=CAU" alt=''style={{"width":"20px"}}  />);
//     return icons;
//   }
  

  

// const ProductCard = ({ data = {} }) => {

//   const navigate = useNavigate();
  
//   let token = sessionStorage.getItem('token');
//   console.log(token)


//   // const handleAddToCart = async () => {
    
//   //   try {
//   //     console.log('Processing...');
//   //     let userId = sessionStorage.getItem('userId');
//   //     console.log('User ID:', userId);
     
//   //       const response = await axios.post(`${url}/users/add-to-cart`,{
//   //         userId,
//   //           token
//   //       });

        

//   //       if (response.ok) {
//   //         const responseData = await response.json();
//   //         // After adding to cart, navigate to the cart page
//   //         navigate("/cart", { state: { cartDetails: responseData,userId } });
//   //       }
//   //     } catch (error) {
//   //       console.error('Error adding to cart:', error);
//   //     }


//   //   };


//   const handleAddToCart = async () => {
//     try {
//       console.log('Processing...');
//       const userId = sessionStorage.getItem('userId');
//       console.log('User ID:', userId);
  
//       // Define the item data that you want to add to the cart
//       const itemData = {
//         userId,
//         itemId: data._id, // Replace with the actual item ID from the 'data' object
//         name: data.foodName, // Replace with the actual item name from the 'data' object
//         count: 1, // You can set the quantity as needed
//       };
  
//       // Make a POST request to add the item to the cart
//       const response = await axios.post(`${url}/users/add-to-cart`, itemData);
  
//       if (response.status === 200) {
//         // After adding to cart, navigate to the cart page
//         navigate("/cart");
//       }
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };
  
  
//   return (
//     <div className="restaurant-card" id="restaurant-card">
//          <div className="restaurant-logo">
//          <img src={data.imageurl} alt='' style={{"width":"100px","height":"100px"}}></img>

//       </div>
//       <div className="restaurant-details">
//       <div className="name-row">
//       <h2>{data.foodName ? data.foodName : "NA"}</h2>
//           {renderFoodTypes(data.foodType)}
//         </div>
//         <p>{data.foodDescription}</p>
//         <p>{data.actualPrice}</p>
//       </div>
 
//       <div
//         className="restaurant-goto-cta"
//         role="button"
//         onClick={handleAddToCart}
//       > 
//             Add
//       </div>
//     </div>
//   )
// }

// export default ProductCard















// import React from 'react';
// import './RestaurantCard.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { url } from '../App';

// function renderFoodTypes(type = []) {
//   let icons = [];
//   if (type === "nonveg")
//     icons.push(<img className="food-type-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCSTgGGq-nJpZh6feizKB9nOWZHwUAkfZ1tgwpSd6k7OvxbTN5N-SQy1aTdisUA96l30&usqp=CAU" alt='' style={{ "width": "20px" }} />);
//   if (type === "veg") icons.push(<img className="food-type-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMteAKdX-P1OY8MjE5Li9YDZJAXI_hsAZ47OWYhh_HCCK76_N_E1hr1QUgnGPIIk8RmB8&usqp=CAU" alt='' style={{ "width": "20px" }} />);
//   return icons;
// }

// const ProductCard = ({ data = {} }) => {
//   const navigate = useNavigate();

//   const handleAddToCart = async () => {
//     try {
//       console.log('Processing...');
//       const userId = sessionStorage.getItem('userId');
//       console.log('User ID:', userId);

//       // Define the item data that you want to add to the cart
//       const itemData = {
//         userId,
//         itemId: data._id, // Replace with the actual item ID from the 'data' object
//         name: data.foodName, // Replace with the actual item name from the 'data' object
//         count: 1, // You can set the quantity as needed
//       };

//       // Make a POST request to add the item to the cart
//       const response = await axios.post(`${url}/users/add-to-cart`, itemData);

//       if (response.status === 200) {
//         // After adding to cart, navigate to the cart page
//         navigate("/cart");
//       }
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

//   return (
//     <div className="restaurant-card" id="restaurant-card">
//       <div className="restaurant-logo">
//         <img src={data.imageurl} alt='' style={{ "width": "100px", "height": "100px" }}></img>
//       </div>
//       <div className="restaurant-details">
//         <div className="name-row">
//           <h2>{data.foodName ? data.foodName : "NA"}</h2>
//           {renderFoodTypes(data.foodType)}
//         </div>
//         <p>{data.foodDescription}</p>
//         <p>{data.actualPrice}</p>
//       </div>

//       <div
//         className="restaurant-goto-cta"
//         role="button"
//         onClick={handleAddToCart}
//       >
//         Add
//       </div>
//     </div>
//   );
// }

// export default ProductCard;







import React from 'react';
import './RestaurantCard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../App';

function renderFoodTypes(type = []) {
  let icons = [];
  if (type === "nonveg")
    icons.push(<img className="food-type-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCSTgGGq-nJpZh6feizKB9nOWZHwUAkfZ1tgwpSd6k7OvxbTN5N-SQy1aTdisUA96l30&usqp=CAU" alt='' style={{ "width": "20px" }} />);
  if (type === "veg") icons.push(<img className="food-type-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMteAKdX-P1OY8MjE5Li9YDZJAXI_hsAZ47OWYhh_HCCK76_N_E1hr1QUgnGPIIk8RmB8&usqp=CAU" alt='' style={{ "width": "20px" }} />);
  return icons;
}

const ProductCard = ({ data = {}  , cartData = [], updateCartData }) => {
  const navigate = useNavigate();

  // const handleAddToCart = async () => {
  //   try {
  //     console.log('Processing...');
  //     const userId = sessionStorage.getItem('userId');
  //     console.log('User ID:', userId);

  //     // Define the item data that you want to add to the cart
  //     const itemData = {
  //       userId,
  //       itemId: data._id, // Replace with the actual item ID from the 'data' object
  //       name: data.foodName, // Replace with the actual item name from the 'data' object
  //       count: 0, 
  //     };

  //     const response = await axios.post(`${url}/users/add-to-cart`, itemData);

  //     if (response.status === 200) {
  //       // After adding to cart, navigate to the cart page
  //       navigate("/cart", { state: { userId } });
  //     }
  //   } catch (error) {
  //     console.error('Error adding to cart:', error);
  //   }
  // };

  
  const handleAddToCart = async () => {
    try {
      console.log('Processing...');
      const userId = sessionStorage.getItem('userId');
      console.log('User ID:', userId);

      // Check if the item is already in the cart
      const existingCartItem = cartData.find(item => item.itemId === data._id);

      if (existingCartItem) {
        // If the item is already in the cart, increment the count
        existingCartItem.count++;
        updateCartData([...cartData]); // Update the state to trigger a re-render
      } else {
        // If the item is not in the cart, add it
        const itemData = {
          userId,
          itemId: data._id,
          name: data.foodName,
          count: 1, // Set count to 1 for a new item
        };

        const response = await axios.post(`${url}/users/add-to-cart`, itemData);

        if (response.status === 200) {
          // After adding to cart, navigate to the cart page
          navigate("/cart", { state: { userId } });
        }
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div className="restaurant-card" id="restaurant-card">
      <div className="restaurant-logo">
        <img src={data.imageurl} alt='' style={{ "width": "100px", "height": "100px" }}></img>
      </div>
      <div className="restaurant-details">
        <div className="name-row">
          <h2>{data.foodName ? data.foodName : "NA"}</h2>
          {renderFoodTypes(data.foodType)}
        </div>
        <p>{data.foodDescription}</p>
        <p>{data.actualPrice}</p>
      </div>

      <div
        className="restaurant-goto-cta"
        role="button"
        onClick={handleAddToCart}
      >
        Add
      </div>
    </div>
  );
}

export default ProductCard;
