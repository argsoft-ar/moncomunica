export interface AboutSectionProps {
  /** Text for the eyebrow (small uppercase text above the title) */
  eyebrow?: string;
  /** Main title of the section */
  title?: string;
  /** Main description paragraph */
  description?: string;
  /** Image URL for the visual column */
  imageUrl?: string;
  /** Optional custom CSS class */
  className?: string;
}
