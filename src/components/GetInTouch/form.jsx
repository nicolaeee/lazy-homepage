import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './form.css';
import './formMobile.css';

const Form = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        formRef.current,
        'your_user_id' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          console.log(result.text);
        },
        (error) => {
          setStatus('Failed to send the message.');
          console.error(error.text);
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
      <h2 className="form-header">Get in Touch</h2>
      <label htmlFor="from_name">Your Name</label>
      <input
        type="text"
        id="from_name"
        name="from_name"
        placeholder="Enter your name"
        required
      />

      <label htmlFor="company">Company Name</label>
      <input
        type="text"
        id="company"
        name="company"
        placeholder="Enter your company name"
      />

      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      />

      <label htmlFor="message">Custom Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Write your message"
        required
      ></textarea>

      <button type="submit" className="submit-button">Submit</button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
};

export default Form;
