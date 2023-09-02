import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';
import axios from 'axios';
import { url } from '../App';
import { useNavigate } from "react-router-dom";


const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const navigate = useNavigate();
    
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${url}/users/getAllRestaurant`);
        const result = response.data;
        if (result.data.length > 0) {
          setRestaurants(result.data);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }

    fetchData();
  }, []);


  function handleRestaurantSelect(id) {
    if (id) {
      navigate(`/restaurant/${id}`);
    }
  }



  return (
  
    <main className='main-container'>
      {restaurants.length > 0 ? (
        restaurants.map((data, index) => (
          <RestaurantCard key={index} data={data}   handleClick={handleRestaurantSelect} /> 
        ))
      ) : (
        <p>No restaurants available.</p>
      )}
    </main>
    
  )
}

export default Restaurants