import React from 'react';
import './PortfolioSection.css';
import type { PortfolioSectionProps } from './PortfolioSection.types';

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ 
  projects, 
  className = '' 
}) => {
  return (
    <section className={`portfolio ${className}`.trim()}>
      <div className="portfolio__container">
        <header className="portfolio__header">
          <h2 className="portfolio__title">Nuestro Trabajo</h2>
        </header>

        <div className="portfolio__grid">
          {projects.map((project) => (
            <article key={project.id} className="portfolio__item">
              <div className="portfolio__image-wrapper">
                <img 
                  src={project.imageUrl} 
                  alt={`Proyecto ${project.title}`} 
                  className="portfolio__image" 
                  loading="lazy"
                />
                <div className="portfolio__overlay">
                  <h3 className="portfolio__project-title">{project.title}</h3>
                  <p className="portfolio__project-category">{project.category}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
