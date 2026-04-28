import React from 'react';
import './AboutSection.css';
import type { AboutSectionProps } from './AboutSection.types';

export const AboutSection: React.FC<AboutSectionProps> = ({
  eyebrow = 'EL ESTUDIO',
  title = 'Creamos marcas con alma',
  description = 'Nos especializamos en construir identidades visuales que conectan y perduran. Detrás de cada marca hay un equipo apasionado por el diseño, la estrategia y el impacto digital.',
  imageUrl = 'https://placehold.co/800x1000/F4F2E8/5B4938?text=Estudio',
  className = ''
}) => {
  return (
    <section className={`about ${className}`.trim()} id="estudio">
      <div className="about__container">
        {/* Left Column: Text Content */}
        <div className="about__content">
          <span className="about__eyebrow">{eyebrow}</span>
          <h2 className="about__title">{title}</h2>
          <p className="about__description">{description}</p>
        </div>

        {/* Right Column: Visual */}
        <div className="about__visual">
          <div className="about__image-wrapper">
            <img 
              src={imageUrl} 
              alt="Nuestro equipo de trabajo" 
              className="about__image" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
