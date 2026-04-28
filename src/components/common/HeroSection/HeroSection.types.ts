import { ReactNode } from 'react';

export interface HeroSectionProps {
  /** The main title, supports ReactNode for passing highlights like <span> */
  title: ReactNode;
  /** Description paragraph below the title */
  description: string;
  /** Text for the primary call to action button */
  primaryCtaText: string;
  /** Text for the secondary call to action button */
  secondaryCtaText: string;
  /** Optional image URL for the right column visual */
  imageSrc?: string;
  /** Optional custom CSS class */
  className?: string;
}
