import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoActive, setIsLogoActive] = useState(false); // New state for logo click

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    setIsLogoActive(!isLogoActive); // Toggle the active state
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer} onClick={handleLogoClick}>
        <img
          src={logo}
          alt="LadyWithLens Logo"
          className={`${styles.logo} ${isLogoActive ? styles.active : ''}`} // Add active class
        />
        <h1 className={styles.brandName}>LadyWithLens</h1>
      </div>

      <nav className={`${styles.navbar} ${isMenuOpen ? styles.showMenu : ''}`}>
        <ul className={styles.navList}>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </header>
  );
};

export default Header;
