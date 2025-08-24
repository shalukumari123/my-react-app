
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">We’d love to hear from you! Fill out the form below or reach us at our office.</p>

      <div className="contact-grid">
        <form className="contact-form card" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {submitted && <p className="success-message">✅ Thank you! We’ll get back to you soon.</p>}
        </form>

        <div className="contact-info card">
          <h3>Contact Information</h3>
          <p>📍 123 React Street, Web City, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 contact@example.com</p>
          <div className="social-icons">
            <a href="#">🌐</a>
            <a href="#">🐦</a>
            <a href="#">💼</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
