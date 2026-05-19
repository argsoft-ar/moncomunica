import React, { useState } from 'react';
import './ContactSection.css';
import type { ContactSectionProps } from './ContactSection.types';

export const ContactSection: React.FC<ContactSectionProps> = ({ className = '' }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simular un envío asíncrono
    setTimeout(() => {
      setFormStatus('success');
      // Limpiar y volver a estado inicial después de un tiempo
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className={`contact ${className}`.trim()} id="contacto">
      <div className="contact__container">
        <div className="contact__text">
          <span className="contact__eyebrow">CONTÁCTANOS</span>
          <h2 className="contact__title">Hablemos de tu marca</h2>
          <p className="contact__description">
            Cuéntanos sobre tus objetivos. Estamos listos para trabajar juntos y llevar la comunicación de tu negocio al siguiente nivel.
          </p>
        </div>

        <div className="contact__form-wrapper">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__label">Nombre completo</label>
              <input type="text" id="name" className="contact__input" placeholder="Tu nombre" aria-label="Nombre completo" required />
            </div>
            <div className="contact__form-group">
              <label htmlFor="reason" className="contact__label">Motivo de tu consulta</label>
              <input type="text" id="reason" className="contact__input" placeholder="Ej: Rediseño de identidad visual" aria-label="Motivo de tu consulta" required />
            </div>
            <div className="contact__form-group contact__form-group--full">
              <label htmlFor="message" className="contact__label">Mensaje</label>
              <textarea id="message" className="contact__input contact__textarea" placeholder="Cuéntanos más sobre tu proyecto..." aria-label="Cuéntanos más sobre tu proyecto" required rows={4}></textarea>
            </div>
            <div className="contact__form-submit-wrapper">
              <button 
                type="submit" 
                className={`contact__submit ${formStatus === 'success' ? 'contact__submit--success' : ''} ${formStatus === 'loading' ? 'contact__submit--loading' : ''}`.trim()}
                disabled={formStatus === 'loading' || formStatus === 'success'}
              >
                {formStatus === 'loading' ? 'Enviando...' : formStatus === 'success' ? '¡Mensaje Enviado!' : 'Enviar Mensaje'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
