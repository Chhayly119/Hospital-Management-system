import React, { useState } from "react";
import '../assets/ContactUs.css';

const Contactus = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add the logic to submit the form data to your backend
        console.log('Form submitted:', formData);
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>Get in touch with us for any questions or concerns</p>
            </div>

            <div className="contact-content">
                <div className="contact-info-section">
                    <div className="info-card">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>Our Location</h3>
                        <p>123 Healthcare Avenue</p>
                        <p>Medical District, City</p>
                    </div>

                    <div className="info-card">
                        <i className="fas fa-phone"></i>
                        <h3>Phone Numbers</h3>
                        <p>Emergency: +1 (555) 123-4567</p>
                        <p>General: +1 (555) 987-6543</p>
                    </div>

                    <div className="info-card">
                        <i className="fas fa-envelope"></i>
                        <h3>Email Address</h3>
                        <p>info@medilabhospital.com</p>
                        <p>support@medilabhospital.com</p>
                    </div>

                    <div className="info-card">
                        <i className="fas fa-clock"></i>
                        <h3>Working Hours</h3>
                        <p>Emergency: 24/7</p>
                        <p>General: 8:00 AM - 8:00 PM</p>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h2>Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>

                <div className="map-section">
                    <h2>Find Us</h2>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986532934433!3d40.69714941678941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647681234567!5m2!1sen!2s"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactus;

