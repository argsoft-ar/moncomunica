import { Header } from './components/common/Header/Header'
import { HeroSection } from './components/common/HeroSection/HeroSection'
import { PortfolioSection } from './components/features/PortfolioSection/PortfolioSection'
import { ServicesSection } from './components/features/ServicesSection/ServicesSection'
import { AboutSection } from './components/features/AboutSection/AboutSection'
import { Footer } from './components/common/Footer/Footer'
import type { Project } from './components/features/PortfolioSection/PortfolioSection.types'
import type { Service } from './components/features/ServicesSection/ServicesSection.types'
import { getCloudinaryUrl } from './utils/cloudinary'
import './App.css'

// ==========================================
// 1. DATOS DEL PORTFOLIO
// ==========================================
const portfolioProjects: Project[] = [
  {
    id: '1',
    title: 'TechCorp Studio',
    category: 'Identidad Visual',
    // TODO: Reemplaza la URL del placeholder con el ID de tu imagen en Cloudinary (ej: 'proyectos/techcorp')
    imageUrl: getCloudinaryUrl('https://res.cloudinary.com/dirc7jd9e/image/upload/v1777341042/MON_COMUNICACION_4_rceyw1.jpg')
  },
  {
    id: '2',
    title: 'Aurora Beauty',
    category: 'Packaging',
    imageUrl: getCloudinaryUrl('https://res.cloudinary.com/dirc7jd9e/image/upload/v1777341042/MON_COMUNICACION_3_ppd130.jpg')
  },
  {
    id: '3',
    title: 'Verde & Co.',
    category: 'Web Design',
    imageUrl: getCloudinaryUrl('https://res.cloudinary.com/dirc7jd9e/image/upload/v1777341043/MON_COMUNICACION_11_rnfjml.jpg')
  },
  {
    id: '4',
    title: 'Nexus Fintech',
    category: 'UI/UX Design',
    imageUrl: getCloudinaryUrl('https://res.cloudinary.com/dirc7jd9e/image/upload/v1777341041/PAO_30_flrltz.jpg')
  },
  {
    id: '5',
    title: 'Aura Arquitectura',
    category: 'Branding',
    imageUrl: getCloudinaryUrl('https://res.cloudinary.com/dirc7jd9e/image/upload/v1777341041/PAO_35_hk7fjw.jpg')
  },
];

// ==========================================
// 2. DATOS DE SERVICIOS
// ==========================================
const servicesData: Service[] = [
  {
    id: '1',
    title: 'Identidad y Branding',
    description: 'Creamos sistemas visuales memorables que conectan con tu audiencia y transmiten la esencia real de tu marca en cada punto de contacto.',
    features: ['Diseño de Logotipo', 'Manuales de Marca', 'Papelería Corporativa', 'Dirección de Arte'],
    // TODO: Reemplaza la URL del placeholder con el ID de tu imagen en Cloudinary
    imageUrl: getCloudinaryUrl('https://res.cloudinary.com/dirc7jd9e/image/upload/v1777341043/MON_COMUNICACION_2_puoyf6.jpg'),
    reverseLayout: false,
  },
  {
    id: '2',
    title: 'Contenido para Redes',
    description: 'Estrategias de comunicación digital orientadas a construir comunidad y aumentar la visibilidad de tu negocio de forma orgánica y auténtica.',
    features: ['Estrategia de Contenidos', 'Diseño de Feed', 'Reels y Videos Cortos', 'Copywriting Persuasivo'],
    // TODO: Reemplaza la URL del placeholder con el ID de tu imagen en Cloudinary
    imageUrl: getCloudinaryUrl('https://res.cloudinary.com/dirc7jd9e/image/upload/v1777341040/MON_COMUNICACION_70_1_ojh4fe.jpg'),
    reverseLayout: true,
  }
];

// ==========================================
// 3. DATOS DEL ESTUDIO (NOSOTROS)
// ==========================================
const aboutData = {
  eyebrow: 'EL ESTUDIO',
  title: 'Creamos marcas con alma',
  description: 'Nos especializamos en construir identidades visuales que conectan y perduran. Detrás de cada marca hay un equipo apasionado por el diseño, la estrategia y el impacto digital.',
  // TODO: Reemplaza la URL del placeholder con el ID de la foto de tu equipo en Cloudinary
  imageUrl: getCloudinaryUrl('https://res.cloudinary.com/dirc7jd9e/image/upload/v1777341043/MON_COMUNICACION_24_j1tkos.jpg')
};

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          title={
            <>
              Diseño premium para <br />
              marcas <span className="hero__highlight">inolvidables</span>
            </>
          }
          description="Somos un estudio especializado en estrategia de marca, identidad visual y experiencias digitales que elevan el valor de tu negocio."
          primaryCtaText="Inicia tu proyecto"
          secondaryCtaText="Explorar portfolio"
          // TODO: Reemplaza la URL del placeholder con el ID de la foto de tu Hero en Cloudinary
          imageSrc={getCloudinaryUrl('https://res.cloudinary.com/dirc7jd9e/image/upload/v1777341042/MON_COMUNICACION_30_ctgp77.jpg')}
        />

        <PortfolioSection projects={portfolioProjects} />

        <ServicesSection services={servicesData} />

        <AboutSection
          eyebrow={aboutData.eyebrow}
          title={aboutData.title}
          description={aboutData.description}
          imageUrl={aboutData.imageUrl}
        />
      </main>

      <Footer />
    </>
  )
}

export default App
