import React from 'react';
import './Footer.css';
import type { FooterProps } from './Footer.types';

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`footer ${className}`.trim()}>
      <div className="footer__container">

        {/* Main Section: Info Grid */}
        <div className="footer__grid">
          {/* Column 1: Brand */}
          <div className="footer__col footer__col--brand">
            <img
              src="/images/logo2-blanco.svg"
              alt="Moncomunica Estudio"
              className="footer__logo"
              loading="lazy"
            />
            <p className="footer__description">
              Elevando marcas al siguiente nivel.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div className="footer__col">
            <h3 className="footer__col-title">Contacto</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="mailto:moncomunica@gmail.com" className="footer__link">moncomunica@gmail.com</a>
              </li>
              <li className="footer__list-item">
                <a href="tel:+5491167368908" className="footer__link">
                  +54 9 11 6736 8908
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div className="footer__col">
            <h3 className="footer__col-title">Redes Sociales</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="https://www.instagram.com/moncomunica/" className="footer__link">Instagram</a>
              </li>
              <li className="footer__list-item">
                <a href="https://www.behance.net/evaami206d1" className="footer__link">Behance</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Estudio Moncomunica. Todos los derechos reservados.
          </p>
          <br/>
          <p className="footer__copyright">Desarrollado por <a href="https://www.argsoft.ar/"
              target="_blank"/> </p>
        </div>
      </div>
    </footer>
  );
};
