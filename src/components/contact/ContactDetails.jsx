"use client"
import { useState } from 'react';
import './contacts.css'
import Image from 'next/image';

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    saveInfo: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">
            <button className="contact-button">Contact Us</button>
            <h2 className="contact-title">Get in touch with GreenApple</h2>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="service"
                  placeholder="contact/ join us/ donate"
                  value={formData.service}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group full-width">
              <textarea
                name="message"
                placeholder="Write a Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-footer">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleChange}
                />
                <span className="checkbox-text">Save my info for future comments</span>
              </label>

              <button type="submit" className="submit-button">
                Send A Message
                <span className="arrow">→</span>
              </button>
            </div>
          </form>
        </div>
        <Image src="/farmer2.jpg" className='img' alt='contact' width={500} height={500} />
      </div>
    </section>
  );
};

export default ContactDetails;