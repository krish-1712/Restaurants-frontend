import React from 'react'
import './AppLayout.css';
const AppLayout = ({ children }) => {
  return (
    <div id="app-container" className="app-container">
      {children}
    </div>
  )
}

export default AppLayout