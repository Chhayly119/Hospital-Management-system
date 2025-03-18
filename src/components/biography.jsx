import React from 'react';
import '../assets/BiographySection.css';

const BiographySection = () => {
  return (
    <section className="biography">
      <h2>Why Choose Us</h2>
      <h3>Excellence in Healthcare Services</h3>
      <div className="bio-content">
        <p>
          With over a decade of experience in healthcare services, we've built a 
          reputation for excellence and patient-centered care. Our platform connects 
          you with qualified healthcare professionals and provides seamless access 
          to medical services.
        </p>
        <div className="features">
          <div className="feature-card">
            <img 
              src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg" 
              alt="Expert Doctors"
            />
            <h4>Expert Doctors</h4>
            <p>Access to certified healthcare professionals</p>
          </div>
          <div className="feature-card">
            <img 
              src="https://img.freepik.com/free-photo/medical-workers-covid-19-vaccination-concept-confident-female-doctor-nurse-blue-scrubs-medical-mask-cross-arms-chest-ready-help-patients-standing-white-background_1258-57360.jpg" 
              alt="24/7 Support"
            />
            <h4>24/7 Support</h4>
            <p>Round-the-clock medical assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;

