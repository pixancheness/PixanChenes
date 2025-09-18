"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import ImageModal from "./image-modal";
import { useImageModal } from "../hooks/use-image-modal";

export interface ClickableImageProps extends Omit<ImageProps, "onClick"> {
  modalTitle?: string;
  showModalNavigation?: boolean;
  showDownloadButton?: boolean;
  modalClassName?: string;
  containerClassName?: string;
  onClick?: () => void;
  disableModal?: boolean;
}

/**
 * Componente de imagen clickeable que abre un modal para ver la imagen completa
 * Útil para casos simples donde solo necesitas mostrar una imagen en modal
 */
export const ClickableImage: React.FC<ClickableImageProps> = ({
  src,
  alt,
  modalTitle,
  showModalNavigation = false, // Por defecto false para una sola imagen
  showDownloadButton = false,
  modalClassName,
  containerClassName,
  onClick,
  disableModal = false,
  className,
  ...imageProps
}) => {
  // Preparar datos para el modal
  const modalImages = [
    {
      id: "single-image",
      img: src as string,
      alt: alt || modalTitle || "Imagen",
      title: modalTitle || alt || "Imagen",
    },
  ];

  const imageModal = useImageModal({
    images: modalImages,
    totalImages: 1,
    hasMore: false,
    isLoading: false,
  });

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    if (!disableModal) {
      imageModal.openModal(0);
    }
  };

  return (
    <>
      <div
        className={cn(
          "relative overflow-hidden",
          !disableModal && "cursor-pointer",
          containerClassName
        )}
        onClick={handleClick}
      >
        <Image
          src={src}
          alt={alt}
          className={cn(
            "transition-transform duration-300",
            !disableModal && "hover:scale-105",
            className
          )}
          {...imageProps}
        />

        {/* Overlay opcional cuando es clickeable */}
        {!disableModal && (
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-full p-2">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {!disableModal && (
        <ImageModal
          images={modalImages}
          isOpen={imageModal.isOpen}
          currentIndex={imageModal.currentIndex}
          onClose={imageModal.closeModal}
          onNavigate={imageModal.navigateToIndex}
          showNavigation={showModalNavigation}
          showDownloadButton={showDownloadButton}
          className={modalClassName}
          totalImages={imageModal.totalImages}
          hasMore={imageModal.hasMore}
          isLoading={imageModal.isLoading}
        />
      )}
    </>
  );
};

export default ClickableImage;
