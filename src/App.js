import React from 'react'
import './App.css'
import {  Route, Routes } from "react-router-dom";
import Header from './Components/Header'
import Restaurants from './Components/Restaurants'
import RestaurantDetails from './Components/RestaurantDetails';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Register from './Components/Register';
import Forgot from './Components/Forgot';
import Password from './Components/Password';


export const url = "http://localhost:5000"
const App = () => {
  
 
 
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route>
          <Route path="/restaurant" element={<Restaurants/>} />
          <Route path="/restaurant/:id" element={<RestaurantDetails/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/" element={  <Login/>} />
          <Route path="/signup" element={ <Register/>} />
          <Route path="/forgot" element={<Forgot/>} />
          <Route path="/password" element={<Password/>} />



        </Route>
        </Routes>
    </div>
  )
}

export default App