import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h2>Math Magicians</h2>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/calculator">
          <li>Calculator</li>
        </Link>
        <Link to="/quote">
          <li>Quote</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
