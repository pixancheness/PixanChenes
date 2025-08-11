"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "./TestimonialCard";
import "./testimonial.type";
import { useTranslations } from "next-intl";

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "Tu aportación es una semilla para el futuro de la biodiversidad, las comunidades y el planeta.",
    author: "Marc Andreessen",
    certificates: 790,
    imageUrl: "https://placehold.co/100x100/EFE8D8/333?text=MA",
  },
  {
    id: 2,
    quote:
      "Tu aportación es una semilla para el futuro de la biodiversidad, las comunidades y el planeta.",
    author: "Alexis Ohanian",
    certificates: 160,
    imageUrl: "https://placehold.co/100x100/EFE8D8/333?text=AO",
  },
  {
    id: 3,
    quote:
      "Tu aportación es una semilla para el futuro de la biodiversidad, las comunidades y el planeta.",
    author: "David Lieb",
    certificates: 138,
    imageUrl: "https://placehold.co/100x100/EFE8D8/333?text=DL",
  },
  {
    id: 4,
    quote:
      "Tu aportación es una semilla para el futuro de la biodiversidad, las comunidades y el planeta.",
    author: "David Ulevitch",
    certificates: 98,
    imageUrl: "https://placehold.co/100x100/EFE8D8/333?text=DU",
  },
  {
    id: 5,
    quote:
      "Invertir en la naturaleza es la mejor inversión en nuestro futuro compartido y próspero.",
    author: "Jane Goodall",
    certificates: 950,
    imageUrl: "https://placehold.co/100x100/EFE8D8/333?text=JG",
  },
  {
    id: 6,
    quote:
      "Cada pequeña acción cuenta para construir un mañana más verde y sostenible para todos.",
    author: "Greta Thunberg",
    certificates: 540,
    imageUrl: "https://placehold.co/100x100/EFE8D8/333?text=GT",
  },
  {
    id: 7,
    quote:
      "Cada pequeña acción cuenta para construir un mañana más verde y sostenible para todos.",
    author: "Greta Thunberg",
    certificates: 540,
    imageUrl: "https://placehold.co/100x100/EFE8D8/333?text=GT",
  },
  {
    id: 8,
    quote:
      "Cada pequeña acción cuenta para construir un mañana más verde y sostenible para todos.",
    author: "Greta Thunberg",
    certificates: 540,
    imageUrl: "https://placehold.co/100x100/EFE8D8/333?text=GT",
  },
  {
    id: 9,
    quote:
      "Cada pequeña acción cuenta para construir un mañana más verde y sostenible para todos.",
    author: "Greta Thunberg",
    certificates: 540,
    imageUrl: "https://placehold.co/100x100/EFE8D8/333?text=GT",
  },
  {
    id: 10,
    quote:
      "Cada pequeña acción cuenta para construir un mañana más verde y sostenible para todos.",
    author: "Greta Thunberg",
    certificates: 540,
    imageUrl: "https://placehold.co/100x100/EFE8D8/333?text=GT",
  },
  {
    id: 11,
    quote:
      "Cada pequeña acción cuenta para construir un mañana más verde y sostenible para todos.",
    author: "Greta Thunberg",
    certificates: 540,
    imageUrl: "https://placehold.co/100x100/EFE8D8/333?text=GT",
  },
];

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const t = useTranslations("Certificates.testimonials");
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      const newItemsPerPage = getItemsPerPage();
      setItemsPerPage(newItemsPerPage);

      // Ajustar currentIndex si es necesario
      const newTotalPages = Math.ceil(
        testimonialsData.length / newItemsPerPage
      );
      if (currentIndex >= newTotalPages) {
        setCurrentIndex(Math.max(0, newTotalPages - 1));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  // Función para determinar items por página según el tamaño de pantalla
  const getItemsPerPage = () => {
    if (typeof window === "undefined") return 3;
    const width = window.innerWidth;
    if (width >= 1280) return 4; // xl: 4 cards
    if (width >= 1024) return 3; // lg: 3 cards
    if (width >= 768) return 2; // md: 2 cards
    return 1; // sm: 1 card
  };

  const [itemsPerPage, setItemsPerPage] = useState<number>(3);
  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

  const goToPrevious = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(currentIndex === 0 ? totalPages - 1 : currentIndex - 1);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToNext = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(currentIndex === totalPages - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToPage = (pageIndex: number): void => {
    if (isAnimating || pageIndex === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(pageIndex);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * itemsPerPage;
    return testimonialsData.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section className="w-full bg-background py-16 sm:py-24 antialiased">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-600 text-center w-full">
            {t("title")}
          </h2>

          {/* Controles de navegación solo en desktop */}
          <div className="hidden md:flex gap-x-3">
            <button
              onClick={goToPrevious}
              disabled={isAnimating}
              className={`p-3 rounded-full bg-white/60 hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 ${
                isAnimating ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={goToNext}
              disabled={isAnimating}
              className={`p-3 rounded-full bg-white/60 hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 ${
                isAnimating ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Carrusel Desktop */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden">
            <div
              className={`grid gap-6 transition-all duration-300 ease-in-out py-5 ${
                itemsPerPage === 1
                  ? "grid-cols-1"
                  : itemsPerPage === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : itemsPerPage === 3
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : itemsPerPage === 4
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
              }`}
              style={{
                opacity: isAnimating ? 0.7 : 1,
                transform: isAnimating ? "translateY(10px)" : "translateY(0px)",
              }}
            >
              {getVisibleTestimonials().map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  certificates={testimonial.certificates}
                  imageUrl={testimonial.imageUrl}
                />
              ))}
            </div>
          </div>

          {/* Indicadores de página */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                disabled={isAnimating}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-gray-600 scale-110"
                    : "bg-gray-300 hover:bg-gray-400 hover:scale-105"
                } ${isAnimating ? "cursor-not-allowed" : "cursor-pointer"}`}
              />
            ))}
          </div>
        </div>

        {/* Carrusel Mobile - scroll horizontal nativo */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-4 gap-4">
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[85%] flex-shrink-0 snap-center"
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  certificates={testimonial.certificates}
                  imageUrl={testimonial.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          <p className="text-center text-sm md:lg lg:text-2xl  font-light  text-gray-600">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
};
