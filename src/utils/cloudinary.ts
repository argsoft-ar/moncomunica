/**
 * Utilidad para generar URLs optimizadas de Cloudinary.
 * Asegura que todas las imágenes sirvan en formato WebP/AVIF (f_auto)
 * y con compresión de calidad automática (q_auto).
 */

export const CLOUDINARY_CLOUD_NAME = 'dirc7jd9e';

export const getCloudinaryUrl = (imageId: string): string => {
  if (!imageId) return '';
  
  // Si la URL ya incluye f_auto,q_auto, devolverla como está
  if (imageId.includes('f_auto') && imageId.includes('q_auto')) return imageId;

  // Si es una URL de Cloudinary cruda, le inyectamos los parámetros de optimización
  if (imageId.includes('res.cloudinary.com')) {
    return imageId.replace('/upload/', '/upload/f_auto,q_auto/');
  }

  // Si es otra URL externa (como placeholders de placehold.co), devolverla intacta
  if (imageId.startsWith('http')) return imageId;
  
  // Genera la URL optimizada para IDs proporcionados
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${imageId}`;
};
