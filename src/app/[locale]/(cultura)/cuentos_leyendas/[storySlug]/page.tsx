import {
  getLegendBySlug,
  getAllLegends,
} from "@/modules/cuentosLeyendas/constants/legends";
import { StoryViewer } from "@/modules/cuentosLeyendas/components";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    locale: string;
    storySlug: string;
  }>;
}

export default async function StoryPage({ params }: PageProps) {
  const { storySlug, locale } = await params;
  const legend = getLegendBySlug(storySlug);

  if (!legend) {
    notFound();
  }

  return <StoryViewer legend={legend} locale={locale} />;
}

// Generar rutas estáticas para todas las leyendas (SSG)
export function generateStaticParams() {
  const legends = getAllLegends();

  return legends.map((legend) => {
    // Extraer el slug de la URL, ej: "/cuentos_leyendas/pajaroToh" -> "pajaroToh"
    const storySlug = legend.url.split("/").pop() || legend.id;

    return {
      storySlug,
    };
  });
}

// Generar metadata estática para SEO
export async function generateMetadata({ params }: PageProps) {
  const { storySlug } = await params;
  const legend = getLegendBySlug(storySlug);

  if (!legend) {
    return {
      title: "Historia no encontrada",
    };
  }

  return {
    title: `${legend.title} - Cuentos y Leyendas | Pixan Chenes`,
    description: legend.metadata.summary,
    keywords: legend.keywords.join(", "),
    openGraph: {
      title: `${legend.title} - Cuentos y Leyendas Maya`,
      description: legend.metadata.summary,
      type: "article",
      locale: "es_MX",
      siteName: "Pixan Chenes",
    },
    twitter: {
      card: "summary_large_image",
      title: `${legend.title} - Cuentos y Leyendas Maya`,
      description: legend.metadata.summary,
    },
  };
}
