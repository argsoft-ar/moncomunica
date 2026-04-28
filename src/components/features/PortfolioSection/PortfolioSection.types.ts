export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface PortfolioSectionProps {
  /** Array of projects to display in the masonry grid */
  projects: Project[];
  /** Optional custom CSS class */
  className?: string;
}
