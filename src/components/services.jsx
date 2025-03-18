import React from "react";
import '../assets/Services.css';

const Services = () => {
    const services = [
        {
            icon: "fas fa-heartbeat",
            title: "Cardiology",
            description: "Comprehensive heart care services including diagnostics, treatment, and preventive care for cardiovascular conditions.",
            features: ["Heart Check-ups", "ECG", "Echocardiography", "Cardiac Surgery"]
        },
        {
            icon: "fas fa-tooth",
            title: "Dental Care",
            description: "Complete dental services from routine check-ups to advanced dental procedures and cosmetic dentistry.",
            features: ["Dental Check-ups", "Teeth Whitening", "Root Canal", "Dental Implants"]
        },
        {
            icon: "fas fa-bone",
            title: "Orthopedics",
            description: "Expert care for bones, joints, and muscles with advanced surgical and non-surgical treatments.",
            features: ["Joint Replacement", "Sports Medicine", "Fracture Care", "Physical Therapy"]
        },
        {
            icon: "fas fa-baby",
            title: "Pediatrics",
            description: "Specialized healthcare services for children from birth through adolescence.",
            features: ["Child Health Check-ups", "Vaccinations", "Growth Monitoring", "Pediatric Surgery"]
        },
        {
            icon: "fas fa-brain",
            title: "Neurology",
            description: "Comprehensive care for disorders of the brain, spinal cord, and nervous system.",
            features: ["Brain Scans", "Nerve Studies", "Stroke Care", "Epilepsy Treatment"]
        },
        {
            icon: "fas fa-eye",
            title: "Ophthalmology",
            description: "Complete eye care services including vision correction and treatment of eye diseases.",
            features: ["Eye Exams", "Glaucoma Treatment", "Cataract Surgery", "Vision Correction"]
        }
    ];

    return (
        <div className="services-container">
            <div className="services-header">
                <h1>Our Medical Services</h1>
                <p>Comprehensive healthcare solutions for you and your family</p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">
                            <i className={service.icon}></i>
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <ul className="service-features">
                            {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex}>
                                    <i className="fas fa-check"></i>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="service-btn">Learn More</button>
                    </div>
                ))}
            </div>

            <div className="emergency-section">
                <div className="emergency-content">
                    <h2>24/7 Emergency Services</h2>
                    <p>Our emergency department is open round the clock to provide immediate medical attention when you need it most.</p>
                    <div className="emergency-contact">
                        <i className="fas fa-phone-alt"></i>
                        <span>Emergency: +1 (555) 123-4567</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;


