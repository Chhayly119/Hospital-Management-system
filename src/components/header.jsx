import React from 'react';
import '../assets/Header.css';
import './appointment';
import './aboutus';
import './contactus';
import './services';








const Header = () => {
  return (
    <header className="header">
      <div className="logo">MediLab Hospital</div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="/appointment">Appointment</a>
        <a href="/services">Services</a>
        <a href="/aboutus">About Us</a>
        <a href="/contactus">Contact Us</a>
      </nav>
      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="register">Register</button>
      </div>
    </header>
  );
};

export default Header;

