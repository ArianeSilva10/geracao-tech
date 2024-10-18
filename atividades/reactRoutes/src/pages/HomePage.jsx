import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Bem-vindo à Home Page!</p>
      <Link to="/about">Go to About</Link>
      <br />
      <Link to="/contact">Go to Contact</Link>
    </div>
  );
}

export default Home;
