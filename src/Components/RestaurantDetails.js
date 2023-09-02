import React, { useEffect, useState } from 'react'


import axios from 'axios';
import { url } from '../App';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';


const RestaurantDetails = () => {
    const { id } = useParams();
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        if (id) {
            async function fetchData() {
                try {
                    const response = await axios.get(`${url}/users/getAllFood/${id}`);
                    const result = response.data;
                    console.log(result);
                    if (result.data.length > 0) {
                        setFoods(result.data);
                    }
                } catch (error) {
                    console.error('An error occurred:', error);
                }
            }

            fetchData();
        }
    }, [id]);
    return (

        <main className='main-container'>

            {foods.length > 0 ? (
                foods.map((data, index) => (
                    <ProductCard key={index} data={data} />
                ))
            ) : (
                <p>No restaurants available.</p>
            )}
        </main>

    )
}

export default RestaurantDetails