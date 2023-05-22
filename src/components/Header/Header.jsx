import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/img/logo.svg';
import DarkMode from '../DarkMode/DarkMode';
import Logo from '../Logo/Logo';

const Header = () => {
    return (
    <div className='header__content'>
  <header className="header">
        <nav className="navbar">
          <Logo/>
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