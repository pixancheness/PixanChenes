import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
  // Validación: Si no existe baseUrl, usar localhost
  if (!baseUrl) {
    console.warn('⚠️ NEXT_PUBLIC_BASE_URL no está configurada. Usando localhost por defecto.');
  }
  
  const finalBaseUrl = baseUrl || 'http://localhost:3000';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      // Configuración específica para bots de imágenes
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    // Next.js genera UN SOLO sitemap.xml en la raíz, no por idioma
    sitemap: `${finalBaseUrl}/sitemap.xml`,
  };
} 