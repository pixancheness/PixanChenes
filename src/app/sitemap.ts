import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { getAllLegends } from '@/modules/cuentosLeyendas/constants/legends';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
  // Validación: Si no existe baseUrl en producción, lanzar error
  if (!baseUrl) {
    console.warn('⚠️ NEXT_PUBLIC_BASE_URL no está configurada. Usando localhost por defecto.');
  }
  
  const finalBaseUrl = baseUrl || 'http://localhost:3000';
  
  // Páginas estáticas disponibles
  const staticPages = [
    '', // página principal
    '/about',
    '/documents',
    '/galeria',
    '/FAQ',
    '/cuentos_leyendas',
    '/certificados',
    '/certificados/donacion',
    '/certificados/solicitar',
    '/miel',
    '/vino',
    '/ctc',
    '/grandparentsAndYoungPeople',
    '/nodess',
    '/seminario',
  ];
  
  // Obtener leyendas dinámicamente
  const legends = getAllLegends();
  const legendPages = legends.map((legend) => {
    const slug = legend.url.split('/').pop() || legend.id;
    return `/cuentos_leyendas/${slug}`;
  });
  
  // Combinar todas las páginas
  const allPages = [...staticPages, ...legendPages];
  
  const sitemap: MetadataRoute.Sitemap = [];
  
  // Generar entradas para cada idioma y página
  routing.locales.forEach((locale) => {
    allPages.forEach((page) => {
      const isHomePage = page === '';
      const isStoryPage = page.includes('/cuentos_leyendas/') && page !== '/cuentos_leyendas';
      
      sitemap.push({
        url: `${finalBaseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: isHomePage ? 'daily' : isStoryPage ? 'monthly' : 'weekly',
        priority: isHomePage ? 1 : isStoryPage ? 0.7 : 0.8,
        alternates: {
          languages: routing.locales.reduce((acc, loc) => {
            acc[loc] = `${finalBaseUrl}/${loc}${page}`;
            return acc;
          }, {} as Record<string, string>),
        },
      });
    });
  });
  
  return sitemap;
} 