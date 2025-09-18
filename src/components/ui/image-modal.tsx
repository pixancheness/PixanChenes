"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/components/hooks/use-outside-click";
import {
  IconX,
  IconChevronLeft,
  IconChevronRight,
  IconDownload,
  IconMaximize,
  IconMinimize,
} from "@tabler/icons-react";

export interface ImageModalProps {
  images: Array<{
    id: string;
    img: string;
    alt?: string;
    title?: string;
  }>;
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNavigate?: (index: number) => void;
  showNavigation?: boolean;
  showDownloadButton?: boolean;
  className?: string;
  // Props adicionales para paginación dinámica
  totalImages?: number;
  hasMore?: boolean;
  isLoading?: boolean;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  images,
  isOpen,
  currentIndex,
  onClose,
  onNavigate,
  showNavigation = true,
  showDownloadButton = false,
  className,
  totalImages,
  hasMore = false,
  isLoading = false,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
    null
  );
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement>(null!);
  const imageRef = useRef<HTMLDivElement>(null);

  const currentImage = images[currentIndex];

  // Manejo de teclado
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          handleClose();
          break;
        case "ArrowLeft":
          event.preventDefault();
          handlePrevious();
          break;
        case "ArrowRight":
          event.preventDefault();
          handleNext();
          break;
        case "f":
        case "F":
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            toggleFullscreen();
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "var(--scrollbar-width, 0px)";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  // Reset image loaded state cuando cambia la imagen
  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  const handleClose = useCallback(() => {
    setIsFullscreen(false);
    onClose();
  }, [onClose]);

  const handlePrevious = useCallback(() => {
    if (!showNavigation) return;
    const maxImages = totalImages || images.length;
    if (maxImages <= 1) return;

    const newIndex = currentIndex > 0 ? currentIndex - 1 : maxImages - 1;
    onNavigate?.(newIndex);
  }, [currentIndex, totalImages, images.length, onNavigate, showNavigation]);

  const handleNext = useCallback(() => {
    if (!showNavigation) return;
    const maxImages = totalImages || images.length;
    if (maxImages <= 1) return;

    const newIndex = currentIndex < maxImages - 1 ? currentIndex + 1 : 0;
    onNavigate?.(newIndex);
  }, [currentIndex, totalImages, images.length, onNavigate, showNavigation]);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(!isFullscreen);
  }, [isFullscreen]);

  const handleDownload = useCallback(async () => {
    if (!currentImage) return;

    try {
      const response = await fetch(currentImage.img);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `imagen-${currentImage.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al descargar la imagen:", error);
    }
  }, [currentImage]);

  // Manejo de gestos táctiles para navegación
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
    setTouchEnd(null);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchEnd({ x: touch.clientX, y: touch.clientY });
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = Math.abs(touchStart.y - touchEnd.y);
    const minSwipeDistance = 50;

    // Solo navegar si es un swipe horizontal y no vertical
    if (Math.abs(deltaX) > minSwipeDistance && deltaY < 100) {
      if (deltaX > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, handleNext, handlePrevious]);

  useOutsideClick(containerRef, handleClose);

  if (!isOpen) return null;

  // Si no tenemos la imagen actual pero estamos dentro del rango total, mostrar placeholder
  const isImageAvailable = currentImage !== undefined;
  const isWithinRange = currentIndex < (totalImages || images.length);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={cn(
            "relative z-10 flex flex-col w-full h-full max-w-7xl max-h-full",
            isFullscreen ? "w-screen h-screen max-w-none" : "p-4 md:p-8",
            className
          )}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Header con controles */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className={cn(
              "flex items-center justify-between mb-4",
              isFullscreen && "absolute top-4 left-4 right-4 z-20"
            )}
          >
            {/* Info de la imagen */}
            <div className="flex items-center space-x-4 text-white">
              {currentImage.title && (
                <h2 className="text-lg md:text-xl font-semibold truncate max-w-md">
                  {currentImage.title}
                </h2>
              )}
              {(totalImages || images.length) > 1 && (
                <span className="text-sm text-white/70 bg-black/30 px-2 py-1 rounded flex items-center gap-2">
                  {currentIndex + 1} / {totalImages || images.length}
                  {isLoading && (
                    <div className="w-3 h-3 border border-white/50 border-t-white rounded-full animate-spin" />
                  )}
                </span>
              )}
            </div>

            {/* Controles */}
            <div className="flex items-center space-x-2">
              {showDownloadButton && (
                <button
                  onClick={handleDownload}
                  className="p-2 rounded-lg bg-black/30 hover:bg-black/50 text-white transition-colors"
                  title="Descargar imagen"
                >
                  <IconDownload className="w-5 h-5" />
                </button>
              )}

              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-lg bg-black/30 hover:bg-black/50 text-white transition-colors hidden md:block"
                title={
                  isFullscreen
                    ? "Salir de pantalla completa"
                    : "Pantalla completa"
                }
              >
                {isFullscreen ? (
                  <IconMinimize className="w-5 h-5" />
                ) : (
                  <IconMaximize className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={handleClose}
                className="p-2 rounded-lg bg-black/30 hover:bg-black/50 text-white transition-colors"
                title="Cerrar"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Contenedor de la imagen */}
          <motion.div
            ref={imageRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", damping: 20 }}
            className={cn(
              "relative flex-1 flex items-center justify-center overflow-hidden rounded-lg",
              isFullscreen && "rounded-none"
            )}
          >
            {/* Imagen */}
            <div className="relative w-full h-full flex items-center justify-center">
              {isImageAvailable ? (
                <>
                  <Image
                    src={currentImage.img}
                    alt={
                      currentImage.alt ||
                      currentImage.title ||
                      `Imagen ${currentIndex + 1}`
                    }
                    fill
                    className={cn(
                      "object-contain transition-opacity duration-300",
                      imageLoaded ? "opacity-100" : "opacity-0"
                    )}
                    sizes={
                      isFullscreen ? "100vw" : "(max-width: 768px) 95vw, 80vw"
                    }
                    priority
                    quality={95}
                    onLoad={() => setImageLoaded(true)}
                  />

                  {/* Loading indicator */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                  )}
                </>
              ) : isWithinRange ? (
                /* Placeholder cuando la imagen aún no está cargada */
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin mb-4" />
                  <p className="text-white/70 text-lg">Cargando imagen...</p>
                  <p className="text-white/50 text-sm mt-2">
                    {currentIndex + 1} de {totalImages || images.length}
                  </p>
                </div>
              ) : (
                /* Error state */
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 text-white/50 mb-4">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 14.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <p className="text-white/70 text-lg">Imagen no disponible</p>
                </div>
              )}
            </div>

            {/* Botones de navegación */}
            {showNavigation && (totalImages || images.length) > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all z-10 backdrop-blur-sm"
                  title="Imagen anterior"
                >
                  <IconChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all z-10 backdrop-blur-sm"
                  title="Siguiente imagen"
                >
                  <IconChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </motion.div>

          {/* Indicadores de navegación en móvil */}
          {showNavigation && (totalImages || images.length) > 1 && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={cn(
                "flex justify-center space-x-2 mt-4 md:hidden",
                isFullscreen && "absolute bottom-4 left-1/2 -translate-x-1/2"
              )}
            >
              {/* Solo mostrar indicadores para las primeras imágenes, máximo 20 */}
              {Array.from(
                { length: Math.min(totalImages || images.length, 20) },
                (_, index) => {
                  const isVisible = index < images.length;
                  return (
                    <button
                      key={index}
                      onClick={() => onNavigate?.(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        index === currentIndex
                          ? "bg-white scale-125"
                          : isVisible
                          ? "bg-white/40 hover:bg-white/60"
                          : "bg-white/20"
                      )}
                      disabled={!isVisible}
                    />
                  );
                }
              )}
              {(totalImages || images.length) > 20 && (
                <span className="text-white/50 text-xs ml-2">
                  +{(totalImages || images.length) - 20}
                </span>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ImageModal;
