export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  /** If true, image will be on the left and text on the right (Desktop only) */
  reverseLayout?: boolean;
}

export interface ServicesSectionProps {
  /** Array of services. If not provided, default mockup data is used. */
  services?: Service[];
  /** Optional custom CSS class */
  className?: string;
}
