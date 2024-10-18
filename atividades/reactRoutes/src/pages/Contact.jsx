import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Entre em contato conosco!</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Contact;
