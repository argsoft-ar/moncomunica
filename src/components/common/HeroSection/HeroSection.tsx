import React from 'react';
import './HeroSection.css';
import type { HeroSectionProps } from './HeroSection.types';

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  primaryCtaText,
  secondaryCtaText,
  imageSrc,
  className = '',
}) => {
  return (
    <section 
      className={`hero ${className}`.trim()}
      id="inicio"
      style={{ backgroundImage: imageSrc ? `url(${imageSrc})` : 'none' }}
    >
      <div className="hero__overlay"></div>
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__description">{description}</p>
          <div className="hero__actions">
            <a href="#portfolio" className="hero__btn hero__btn--primary">{secondaryCtaText}</a>
            <a href="#contacto" className="hero__btn hero__btn--secondary">{primaryCtaText}</a>
          </div>
        </div>
      </div>
    </section>
  );
};
