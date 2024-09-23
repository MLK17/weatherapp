import React from 'react';
import './Navbar.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <Image 
          src="/assets/logo.png"
          alt="Custom Logo" 
          width={50} 
          height={50} 
        />
        WeatherApp
      </a>
    </nav>
  );
};

export default Navbar;

