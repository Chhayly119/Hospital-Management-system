import React, { useState } from "react";
import '../assets/appointment.css';


const Appointment = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        department: '',
        doctor: '',
        reason: ''
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
        <div className="appointment-container">
            <h1>Book an Appointment</h1>
            <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
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
                    <label htmlFor="phone">Phone Number:</label>
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
                    <label htmlFor="date">Preferred Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="time">Preferred Time:</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="department">Department:</label>
                    <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Department</option>
                        <option value="general">General Medicine</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="dental">Dental</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="pediatrics">Pediatrics</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="doctor">Preferred Doctor:</label>
                    <select
                        id="doctor"
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Doctor</option>
                        <option value="dr-smith">Dr. Smith</option>
                        <option value="dr-johnson">Dr. Johnson</option>
                        <option value="dr-williams">Dr. Williams</option>
                        <option value="dr-brown">Dr. Brown</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="reason">Reason for Visit:</label>
                    <textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">Book Appointment</button>
            </form>
        </div>
    );
};

export default Appointment;