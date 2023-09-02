// import React from 'react'
// import './RestaurantCard.css'


// function renderFoodTypes(data = []) {
//     let icons = [];
//     if (data.includes("nonveg"))
//       icons.push(<img className="food-type-icon" src="https://www.kindpng.com/picc/m/151-1515155_veg-icon-png-non-veg-symbol-png-transparent.png" alt='' />);
//     if (data.includes("veg"))
//       icons.push(<img className="food-type-icon" src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png" alt='' />);
//     return icons;
//   }
  

// const RestaurantCard = ({ data = {}, handleClick = (e) => {} }) => {
//   return (
//     <div className="restaurant-card" id="restaurant-card">
//          <div className="restaurant-logo">
//         <img
//           className="logo-image"
//           src="https://i.pinimg.com/originals/26/7c/ba/267cba475e6f2c2f1601df0f947a2b28.jpg"
//           alt=""
//         />
//       </div>
//       <div className="restaurant-details">
//       <div className="name-row">
//           <h2>{data.name ? data.name : "Restaurant Name"}</h2>
//           {renderFoodTypes(data.foodTypes)}
//         </div>
//       </div>
//       <div
//         className="restaurant-goto-cta"
//         role="button"
//         onClick={() => handleClick(data._id)}
//       >
//         Menu
//       </div>
//     </div>
//   )
// }

// export default RestaurantCard



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
        <img src={data.imageurl} alt=''/>
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
