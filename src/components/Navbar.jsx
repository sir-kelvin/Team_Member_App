import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <ul className="nav justify-content-center p-2 bg-black ">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/members" className="nav-link text-white">
            Teams
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
