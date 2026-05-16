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
      style={{ backgroundImage: imageSrc ? `url(${imageSrc})` : 'none' }}
    >
      <div className="hero__overlay"></div>
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__description">{description}</p>
          <div className="hero__actions">
            <a href="#contacto" className="hero__btn hero__btn--primary">{primaryCtaText}</a>
            <a href="#portfolio" className="hero__btn hero__btn--secondary">{secondaryCtaText}</a>
          </div>
        </div>
      </div>
    </section>
  );
};
