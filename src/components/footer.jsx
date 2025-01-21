import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Golden Hospital</h3>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Appointment</li>
            <li>Service</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-hours">
          <h4>Hours</h4>
          <p>Monday - Friday: 9:00 - 18:00</p>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>023 880 880</p>
          <p>info@gmail.com</p>
          <p>I love you more than i can say</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
