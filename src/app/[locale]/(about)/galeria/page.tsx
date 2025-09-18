"use client";
import { useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";

import Masonry from "@/components/ui/masonry";
import SplitText from "@/components/ui/SplitText";
import { mansoyItems } from "@/modules/home/constants/mansoy";
import { optimizeCloudinaryUrl } from "@/lib/cloudinary";
import { useInfiniteScroll } from "@/components/hooks/use-infinite-scroll";

// Optimizar todas las imágenes
const optimizedMansoyItems = mansoyItems.map((item) => ({
  ...item,
  img: optimizeCloudinaryUrl(item.img, { width: 600 }),
  originalImg: item.img, // Guardamos la original por si se necesita
}));

export default function Galery() {
  const t = useTranslations("Gallery");

  const { displayedItems, isLoading, hasMore, totalItems, displayedCount } =
    useInfiniteScroll(optimizedMansoyItems, {
      initialItems: 16,
      itemsPerLoad: 8,
      threshold: 1000, // Cargar más cuando esté a 1000px del final
    });

  return (
    <div className="pt-16 bg-gradient-to-br from-yellow-400/30 via-yellow-300/10 to-amber-400/10 min-h-screen">
      <div className="flex justify-center items-center mb-6">
        <SplitText
          text={t("title")}
          className="text-4xl font-bold py-5 text-darkkkk"
          delay={60}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>

      {/* Contador de imágenes cargadas
      <div className="flex justify-center items-center mb-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
          <p className="text-gray-700 font-medium">
            {displayedCount} {t("pagination.of")} {totalItems}{" "}
            {t("pagination.totalImages")}
            {hasMore && (
              <span className="text-gray-500 ml-2">
                • {t("infiniteScroll.scrollHint")}
              </span>
            )}
          </p>
        </div>
      </div> */}

      <div className="container mx-auto px-4">
        <Masonry
          items={displayedItems}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />

        {/* Indicador de carga */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
              <Loader2 className="w-8 h-8 text-yellow-500 animate-spin" />
            </div>
            <p className="text-gray-600 font-medium mt-4">
              {t("infiniteScroll.loading")}
            </p>
          </div>
        )}

        {/* Mensaje cuando se han cargado todas las imágenes */}
        {!hasMore && !isLoading && displayedCount > 16 && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg">
              <p className="text-gray-700 font-medium text-center">
                {t("infiniteScroll.allLoaded")}
                <span className="block text-sm text-gray-500 mt-1">
                  {displayedCount} {t("pagination.totalImages")}
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Botón para volver al inicio */}
        {displayedCount > 20 && (
          <div className="flex justify-center py-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              <span>{t("infiniteScroll.backToTop")}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
