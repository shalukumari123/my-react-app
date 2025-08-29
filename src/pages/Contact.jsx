import React, { useState } from "react";
import "./Contact.css"; 
import Header from "./Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <Header/>
    
    <div className="contact-container">
    
      <div className="contact-header">
        <h1>Get in Touch 📩</h1>
        <p>
          Have a question, feedback, or just want to say hi? Fill out the form
          below or reach us through our contact details.
        </p>
      </div>

      
      <div className="contact-info">
        <div className="info-card">
          <h3>📍 Address</h3>
          <p>123 Tech Street, Bangalore, India</p>
        </div>
        <div className="info-card">
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
        </div>
        <div className="info-card">
          <h3>📧 Email</h3>
          <p>support@example.com</p>
        </div>
      </div>

      
      <div className="contact-form-container">
        {submitted ? (
          <div className="success-msg">
            ✅ Thank you! Your message has been received.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
            />

            <button type="submit">Send Message</button>
          </form>
        )}
      </div>

      
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6753145019754!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f4d2b8db%3A0xfdfec89b07b86c6!2sBangalore%20City!5e0!3m2!1sen!2sin!4v1631018341234!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default Contact;
