import React from 'react';


const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <h2>Send us a message</h2>
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Mobile Number" />
          <input type="email" placeholder="Email" />
        </div>
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
