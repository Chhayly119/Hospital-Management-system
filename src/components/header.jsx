import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MediLab Hospital</div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Appointment</a>
        <a href="#">Services</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>
      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="register">Register</button>
      </div>
    </header>
  );
};

export default Header;
