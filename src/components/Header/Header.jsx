import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import DarkMode from '../DarkMode/DarkMode';

const Header = () => {
    return (
    <div className='header__content'>
  <header className="header">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">Your Logo</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/about">Works</Link>
            </li>
            <li>
              <Link to="/projects">Source</Link>
            </li>
          </ul>
          <DarkMode/>
        </nav>
      </header>
    </div>

    );
  };


export default Header