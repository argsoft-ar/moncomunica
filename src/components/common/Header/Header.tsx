import React, { useState } from 'react';
import './Header.css';
import type { HeaderProps } from './Header.types';

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${className}`.trim()}>
      <div className="header__container">
        {/* Logo */}
        <a href="/" className="header__logo-link">
          <img
            src="/images/logo3-marron.svg"
            alt="Moncomunica Estudio"
            className="header__logo"
          />
        </a>

        {/* Navigation */}
        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`.trim()}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#inicio" className="header__link" onClick={closeMobileMenu}>Inicio</a>
            </li>
            <li className="header__nav-item">
              <a href="#portfolio" className="header__link" onClick={closeMobileMenu}>Portfolio</a>
            </li>
            <li className="header__nav-item">
              <a href="#servicios" className="header__link" onClick={closeMobileMenu}>Servicios</a>
            </li>
            <li className="header__nav-item">
              <a href="#nosotros" className="header__link" onClick={closeMobileMenu}>Nosotros</a>
            </li>
            <li className="header__nav-item">
              <a href="#contacto" className="header__link" onClick={closeMobileMenu}>Contacto</a>
            </li>
          </ul>
        </nav>

        {/* Actions (Mobile Menu Toggle) */}
        <div className="header__actions">
          <button
            className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--open' : ''}`.trim()}
            onClick={toggleMobileMenu}
            aria-label="Alternar menú móvil"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="header__mobile-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
