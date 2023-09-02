import React from 'react';
import './RestaurantCard.css';

function renderFoodTypes(data = []) {
  const icons = [];
  if (data.includes('nonveg'))
    icons.push(<img className="food-type-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCSTgGGq-nJpZh6feizKB9nOWZHwUAkfZ1tgwpSd6k7OvxbTN5N-SQy1aTdisUA96l30&usqp=CAU" alt=""    style={{"width":"20px"}} />);
  if (data.includes('veg'))
    icons.push(<img className="food-type-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMteAKdX-P1OY8MjE5Li9YDZJAXI_hsAZ47OWYhh_HCCK76_N_E1hr1QUgnGPIIk8RmB8&usqp=CAU" alt=""    style={{"width":"20px"}} />);
  return icons;
}

const RestaurantCard = ({ data = {}, handleClick = (e) => {} }) => {
  return (
    <div className="restaurant-card" id="restaurant-card">
      <div className="restaurant-logo">
        <img src={data.imageurl} alt='' style={{width:"110px",height:"120px"}}/>
      </div>
      <div className="restaurant-details">
        <div className="name-row">
          <h2>{data.name ? data.name : 'Restaurant Name'}</h2>
          {renderFoodTypes(data.foodTypes)}
        </div>
      </div>
      <div
        className="restaurant-goto-cta"
        role="button"
        onClick={() => handleClick(data._id)}
      >
        Menu
      </div>
    </div>
  );
};

export default RestaurantCard;
