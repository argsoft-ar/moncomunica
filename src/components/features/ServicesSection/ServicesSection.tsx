import React from 'react';
import './ServicesSection.css';
import type { ServicesSectionProps } from './ServicesSection.types';

const DEFAULT_SERVICES = [
  {
    id: '1',
    title: 'Identidad y Branding',
    description: 'Creamos sistemas visuales memorables que conectan con tu audiencia y transmiten la esencia real de tu marca en cada punto de contacto.',
    features: [
      'Diseño de Logotipo',
      'Manuales de Marca',
      'Papelería Corporativa',
      'Dirección de Arte'
    ],
    imageUrl: 'https://placehold.co/800x800/D98A8B/5B4938?text=Branding', // Placeholder usando color terciario
    reverseLayout: false,
  },
  {
    id: '2',
    title: 'Contenido para Redes',
    description: 'Estrategias de comunicación digital orientadas a construir comunidad y aumentar la visibilidad de tu negocio de forma orgánica y auténtica.',
    features: [
      'Estrategia de Contenidos',
      'Diseño de Feed',
      'Reels y Videos Cortos',
      'Copywriting Persuasivo'
    ],
    imageUrl: 'https://placehold.co/800x800/F4F2E8/5B4938?text=Social+Media', // Placeholder usando color crema
    reverseLayout: true,
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  services = DEFAULT_SERVICES, 
  className = '' 
}) => {
  return (
    <section className={`services ${className}`.trim()}>
      <div className="services__container">
        <header className="services__header">
          <h2 className="services__title">Nuestros Servicios</h2>
        </header>

        <div className="services__list-container">
          {services.map((service) => (
            <article 
              key={service.id} 
              className={`services__row ${service.reverseLayout ? 'services__row--reverse' : ''}`.trim()}
            >
              {/* Text Content */}
              <div className="services__content">
                <h3 className="services__service-title">{service.title}</h3>
                <p className="services__service-description">{service.description}</p>
                <ul className="services__features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="services__feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Content */}
              <div className="services__visual">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="services__image" 
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
