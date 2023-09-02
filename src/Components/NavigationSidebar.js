import React from 'react'
import './NavigationSidebar.css';

const NavigationSidebar = () => {
  return (
    <div className='menu-navigation-container'>
      <nav>
        <ul>
          <li className="menu-item">Breakfast</li>
          <li className="menu-item">Lunch</li>
          <li className="menu-item">Burger</li>
          <li className="menu-item">Pizza</li>
          <li className="menu-item">Tacos</li>
        </ul>
      </nav>
    </div>
  )
}

export default NavigationSidebar