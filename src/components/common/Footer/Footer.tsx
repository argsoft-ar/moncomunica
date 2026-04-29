import React from 'react';
import './Footer.css';
import type { FooterProps } from './Footer.types';

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`footer ${className}`.trim()}>
      <div className="footer__container">

        {/* Top Section: High-End Contact Form */}
        <div className="footer__contact-grid">
          {/* Left Column: Text */}
          <div className="footer__contact-text">
            <h2 className="footer__contact-title">Escríbenos</h2>
            <p className="footer__contact-description">
              Hablemos sobre tu marca, tus objetivos y cómo podemos trabajar juntos para llevarlos al siguiente nivel.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="footer__contact-form-wrapper">
            <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
              <div className="footer__form-group">
                <input type="text" className="footer__input" placeholder="Nombre completo" required />
              </div>
              <div className="footer__form-group">
                <input type="text" className="footer__input" placeholder="Motivo de tu consulta" required />
              </div>
              <div className="footer__form-group">
                <textarea className="footer__input footer__textarea" placeholder="Cuéntanos más sobre tu proyecto..." required rows={3}></textarea>
              </div>
              <div className="footer__form-submit-wrapper">
                <button type="submit" className="footer__submit">Enviar Mensaje</button>
              </div>
            </form>
          </div>
        </div>

        <hr className="footer__divider" />

        {/* Middle Section: Info Grid */}
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
                <a href="mailto:hola@moncomunica.com" className="footer__link">hola@moncomunica.com</a>
              </li>
              <li className="footer__list-item">
                <a href="tel:+5491112345678" className="footer__link">+54 9 11 1234 5678</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div className="footer__col">
            <h3 className="footer__col-title">Redes Sociales</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="#instagram" className="footer__link">Instagram</a>
              </li>
              <li className="footer__list-item">
                <a href="#behance" className="footer__link">Behance</a>
              </li>
              <li className="footer__list-item">
                <a href="#linkedin" className="footer__link">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Estudio Moncomunica. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
