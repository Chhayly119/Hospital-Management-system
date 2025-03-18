import React from "react";
import '../assets/AboutUs.css';

const Aboutus = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About MediLab Hospital</h1>
                <p className="subtitle">Providing Quality Healthcare Since 1990</p>
            </div>

            <div className="about-content">
                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        To provide exceptional healthcare services with compassion, 
                        innovation, and excellence, making quality healthcare accessible 
                        to all members of our community.
                    </p>
                </div>

                <div className="about-section">
                    <h2>Our Vision</h2>
                    <p>
                        To be the leading healthcare institution, recognized for 
                        clinical excellence, patient-centered care, and medical 
                        innovation in the region.
                    </p>
                </div>

                <div className="about-section">
                    <h2>Why Choose Us?</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <i className="fas fa-user-md"></i>
                            <h3>Expert Doctors</h3>
                            <p>Our team of experienced healthcare professionals</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-hospital"></i>
                            <h3>Modern Facilities</h3>
                            <p>State-of-the-art medical equipment and facilities</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-clock"></i>
                            <h3>24/7 Service</h3>
                            <p>Round-the-clock emergency and medical services</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-heart"></i>
                            <h3>Patient Care</h3>
                            <p>Compassionate and personalized patient care</p>
                        </div>
                    </div>
                </div>

                <div className="about-section">
                    <h2>Our Departments</h2>
                    <div className="departments-grid">
                        <div className="department-item">Cardiology</div>
                        <div className="department-item">Orthopedics</div>
                        <div className="department-item">Pediatrics</div>
                        <div className="department-item">Dental</div>
                        <div className="department-item">General Medicine</div>
                        <div className="department-item">Emergency Care</div>
                    </div>
                </div>

                <div className="about-section">
                    <h2>Contact Information</h2>
                    <div className="contact-info">
                        <p><strong>Address:</strong> 123 Healthcare Avenue, Medical District, City</p>
                        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                        <p><strong>Email:</strong> info@medilabhospital.com</p>
                        <p><strong>Working Hours:</strong> 24/7 Emergency Services</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
