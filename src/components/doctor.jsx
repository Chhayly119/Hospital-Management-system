import React from 'react';


const doctors = Array(12).fill({
  name: 'Silva A.D.M.P',
  specialization: 'Medical Doctor',
  image: 'data:image/jpeg;base64,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', // Replace with image URL or import
});

const DoctorsSection = () => {
  return (
    <section className="doctors-section">
      <h2>Our Doctors</h2>
      <div className="doctors-grid">
        {doctors.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <img src={doctor.image} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <p>{doctor.specialization}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorsSection;
