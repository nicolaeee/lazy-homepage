import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './form.css';
import './formMobile.css';

const Form = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'default_service', // Replace with your EmailJS service ID
        'template_rzuzb2n', // Replace with your EmailJS template ID
        formRef.current,
        'OQ4_YOZOMkDkKCz2_' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log('EmailJS result:', result.text);
        },
        (error) => {
          alert('Failed to send the message. Please try again later.');
          console.error('EmailJS error:', error.text);
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
      <h2 className="form-header">Get in Touch</h2>

      <div className="field">
        <label htmlFor="from_name">Your Name</label>
        <input type="text" name="from_name" id="from_name" required />
      </div>

      <div className="field">
        <label htmlFor="email">Your Email</label>
        <input type="email" name="email" id="email" required />
      </div>

      <div className="field">
        <label htmlFor="company">Company name</label>
        <input type="text" name="company" id="company" />
      </div>

      <div className="field">
        <label htmlFor="message">Leave a message</label>
        <textarea name="message" id="message" required></textarea>
      </div>

      <button type="submit" className="submit-button">Send Email</button>
    </form>
  );
};

export default Form;
