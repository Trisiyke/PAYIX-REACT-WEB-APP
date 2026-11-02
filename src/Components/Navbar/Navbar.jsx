import React from 'react'
import './Navbar.css'
import payixlogo from '../../assets/payiximages/Payix Fintech Logo.png'
import passport from '../../assets/payiximages/Ikechukwu passport.jpg'

const Navbar = () => {
  return (
    
    <div className="container">
      <nav className="navbar">
        <div className="nav-logo">
          <img src={payixlogo} alt="payixlogo" />
          <p>PAYMENTS <br />MADE <br />SIMPLE</p>
          <p>Workspace / <span>Overview</span></p>
        </div>
        <div className="search-name">
          <input type="text" placeholder="Search..." />
          <div className="name">
            <img src={passport} alt="passport" />
            <div>
            <h1>Tristan Ikechukwu</h1>
             <p>Tech Bro</p>
             </div>
             </div>
            
         
        </div>
        
      </nav>
    </div>
      
  )
}

export default Navbar