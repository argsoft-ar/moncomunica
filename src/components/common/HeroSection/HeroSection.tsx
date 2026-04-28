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
    <section className={`hero ${className}`.trim()}>
      <div className="hero__container">
        {/* Left Column: Content */}
        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__description">{description}</p>
          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary">{primaryCtaText}</button>
            <button className="hero__btn hero__btn--secondary">{secondaryCtaText}</button>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="hero__visual">
          {imageSrc && (
            <img 
              src={imageSrc} 
              alt="Estudio visual" 
              className="hero__image" 
            />
          )}
        </div>
      </div>
    </section>
  );
};
