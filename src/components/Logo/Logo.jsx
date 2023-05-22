import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import './Logo.css';


const Logo = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleLogoClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div className={`logo ${isRotated ? 'rotate' : ''}`}>
      <Link to="/" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" className="logo__image" />
      </Link>
    </div>
  );
};

export default Logo;
