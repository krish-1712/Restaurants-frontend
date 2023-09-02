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

const ProductCard = ({ data = {}, cartData = [], updateCartData }) => {
  const navigate = useNavigate();



  const handleAddToCart = async () => {
    try {
      console.log('Processing...');
      const userId = sessionStorage.getItem('userId');
      console.log('User ID:', userId);

      const existingCartItem = cartData.find(item => item.itemId === data._id);

      if (existingCartItem) {
        existingCartItem.count++;
        updateCartData([...cartData]);
      } else {
        const itemData = {
          userId,
          itemId: data._id,
          name: data.foodName,
          count: 1,
        };

        const response = await axios.post(`${url}/users/add-to-cart`, itemData);

        if (response.status === 200) {

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
        <img src={data.imageurl} alt='' style={{ "width": "110px", "height": "120px" }}></img>
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
