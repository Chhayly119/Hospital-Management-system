import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/HeroSection.css';
import './appointment';





const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Your Health, Our Priority</h1>
        <p>
          Experience healthcare at your fingertips. Book appointments with top healthcare 
          professionals, access medical records, and receive personalized care - all from 
          the comfort of your home. Our platform makes healthcare accessible, efficient, 
          and patient-centered.
        </p>
        <Link to="/appointment" className="cta-button">Book Appointment</Link>
      </div>
      <div className="hero-image">
        <img 
          src="https://img.freepik.com/free-photo/medical-banner-with-doctor-working-hospital_23-2149611193.jpg" 
          alt="Healthcare Professional" 
        />
      </div>
    </section>
  );
};

export default HeroSection;
