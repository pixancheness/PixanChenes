/**
 * Utilidades para optimizar imágenes de Cloudinary
 */

interface CloudinaryOptimizeOptions {
  width?: number;
  height?: number;
  quality?: 'auto' | number;
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  crop?: 'auto' | 'fill' | 'fit' | 'scale';
}

/**
 * Optimiza una URL de Cloudinary con transformaciones automáticas para ahorrar ancho de banda
 * @param url - URL original de Cloudinary
 * @param options - Opciones de optimización
 * @returns URL optimizada
 */
export const optimizeCloudinaryUrl = (
  url: string,
  options: CloudinaryOptimizeOptions = {}
): string => {
  if (!url.includes('cloudinary.com')) return url;

  const {
    width = 600,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'auto'
  } = options;

  const transformations = [
    `c_${crop}`,
    `f_${format}`,
    `q_${quality}`,
    `w_${width}`,
    ...(height ? [`h_${height}`] : [])
  ].join(',');

  return url.replace('/upload/', `/upload/${transformations}/`);
};

/**
 * Genera múltiples tamaños de una imagen para responsive design
 * @param url - URL original de Cloudinary
 * @param sizes - Array de anchos deseados
 * @returns Array de objetos con urls y tamaños
 */
export const generateResponsiveSizes = (
  url: string,
  sizes: number[] = [400, 600, 800, 1200]
): { url: string; width: number }[] => {
  return sizes.map(width => ({
    url: optimizeCloudinaryUrl(url, { width }),
    width
  }));
};

/**
 * Genera un srcSet para imágenes responsive
 * @param url - URL original de Cloudinary
 * @param sizes - Array de anchos deseados
 * @returns String de srcSet
 */
export const generateSrcSet = (
  url: string,
  sizes: number[] = [400, 600, 800, 1200]
): string => {
  return generateResponsiveSizes(url, sizes)
    .map(({ url, width }) => `${url} ${width}w`)
    .join(', ');
};
