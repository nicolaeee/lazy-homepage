import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/img/logo.svg';
import DarkMode from '../DarkMode/DarkMode';
import Logo from '../Logo/Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header__content'>
      <header className="header">
        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
          <div className='logo__block'>
          <Logo />
          <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="hamburger"></div>
          </div>
          </div>

          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li>
              <Link to="/" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>Works</Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu}>Source</Link>
            </li>
          </ul>

        </nav>
        <DarkMode />
      </header>
    </div>
  );
};

export default Header;
