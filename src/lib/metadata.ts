import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export async function generateMetadata(
  locale: string,
  page: string = 'home'
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
  // Validación: Si no existe baseUrl, usar localhost
  if (!baseUrl) {
    console.warn('⚠️ NEXT_PUBLIC_BASE_URL no está configurada. Usando localhost por defecto.');
  }
  
  const finalBaseUrl = baseUrl || 'http://localhost:3000';
  const url = `${finalBaseUrl}/${locale}`;
  
  // Generar alternates dinámicamente desde routing
  const languages = routing.locales.reduce((acc, loc) => {
    acc[loc] = `${finalBaseUrl}/${loc}`;
    return acc;
  }, {} as Record<string, string>);
  
  // Metadatos base
  const metadata: Metadata = {
    title: page === 'home' ? t('title') : t(`${page}.title`),
    description: page === 'home' ? t('description') : t(`${page}.description`),
    keywords: t('keywords'),
    
    // Open Graph
    openGraph: {
      title: page === 'home' ? t('title') : t(`${page}.title`),
      description: page === 'home' ? t('description') : t(`${page}.description`),
      url: url,
      siteName: t('title'),
      locale: locale,
      type: 'website',
      images: [
        {
          url: `${finalBaseUrl}/img/logo_pixan.webp`,
          width: 1200,
          height: 630,
          alt: page === 'home' ? t('title') : t(`${page}.title`),
        },
      ],
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: page === 'home' ? t('title') : t(`${page}.title`),
      description: page === 'home' ? t('description') : t(`${page}.description`),
      images: [`${finalBaseUrl}/img/logo_pixan.webp`],
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Canonical URL y alternativas de idioma (hreflang)
    alternates: {
      canonical: url,
      languages,
    },
    
    // Información adicional de SEO
    category: 'sustainability',
    classification: 'cooperative, environmental, indigenous',
    
    // Otros metadatos útiles
    other: {
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'format-detection': 'telephone=no',
    },
  };

  return metadata;
}

export async function generatePageMetadata(
  params: { locale: string },
  page: string = 'home'
): Promise<Metadata> {
  return generateMetadata(params.locale, page);
} 