"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { getAllLegends } from "./constants/legends";
import { Legend } from "./types/legend";

interface LegendCardProps {
  legend: Legend;
  locale: string;
}

function LegendCard({ legend, locale }: LegendCardProps) {
  return (
    <Link href={`/${locale}${legend.url}`} className="group block">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100  overflow-hidden">
        {/* Header con keywords */}
        <div className="p-6 pb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {legend.keywords.slice(0, 3).map((keyword, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-green-100  text-green-800  rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>

          {/* Título */}
          <h2 className="text-xl font-bold text-gray-900  mb-3 group-hover:text-green-600  transition-colors">
            {legend.title}
          </h2>

          {/* Summary/Preview */}
          <p className="text-gray-600  text-sm line-clamp-3 mb-4">
            {legend.metadata.summary}
          </p>

          {/* Info adicional */}
          <div className="flex items-center justify-between text-xs text-gray-500 ">
            <div className="flex items-center space-x-4">
              {legend.narrators.storyteller && (
                <span className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>Narrador</span>
                </span>
              )}

              {legend.videoUrl && (
                <span className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 011.414.586l.775.776a2.5 2.5 0 001.414.586H15"
                    />
                  </svg>
                  <span>Video</span>
                </span>
              )}
            </div>

            <div className="text-right">
              <span className="text-green-600  font-medium">Leer más →</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CuentosLeyendasMain() {
  const t = useTranslations();
  const legends = getAllLegends();

  // Por ahora usaremos 'es' como locale por defecto, pero esto se puede mejorar
  const locale = "es";

  return (
    <div className="min-h-screen font-sans pt-16">
      <div className="text-center pt-9 pb-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-900 mb-4 leading-tight">
          Cuentos y Leyendas
        </h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        <p className="text-lg text-gray-600  max-w-3xl mx-auto pt-4">
          Descubre las historias ancestrales de la cultura maya, contadas por
          las voces de nuestra comunidad. Cada leyenda lleva consigo la
          sabiduría de generaciones pasadas.
        </p>
      </div>

      {/* Grid de leyendas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {legends.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legends.map((legend) => (
              <LegendCard key={legend.id} legend={legend} locale={locale} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 text-gray-400  mb-4">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Próximamente más historias
            </h3>
            <p className="text-gray-500 ">
              Estamos trabajando en recopilar más cuentos y leyendas para
              compartir contigo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
