import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Esta é a página About.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default About;
