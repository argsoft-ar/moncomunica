/**
 * Utilidad para generar URLs optimizadas de Cloudinary.
 * Asegura que todas las imágenes sirvan en formato WebP/AVIF (f_auto)
 * y con compresión de calidad automática (q_auto).
 */

export const CLOUDINARY_CLOUD_NAME = 'dirc7jd9e';

export const getCloudinaryUrl = (imageId: string): string => {
  if (!imageId) return '';
  
  // Si la imagen ya es una URL completa (ej. placeholder actual), devuélvela como está.
  // Esto evita romper la página web antes de que subas tus fotos reales.
  if (imageId.startsWith('http')) return imageId;
  
  // Genera la URL optimizada para el ID proporcionado
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${imageId}`;
};
