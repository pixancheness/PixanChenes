"use client";

import { useState, useCallback } from "react";

export interface UseImageModalProps {
  images: Array<{
    id: string;
    img: string;
    alt?: string;
    title?: string;
  }>;
  // Para soporte de carga dinámica
  totalImages?: number;
  hasMore?: boolean;
  isLoading?: boolean;
  loadMore?: () => void;
}

export const useImageModal = ({ 
  images, 
  totalImages, 
  hasMore = false, 
  isLoading = false, 
  loadMore 
}: UseImageModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = useCallback((index: number = 0) => {
    setCurrentIndex(Math.max(0, Math.min(index, images.length - 1)));
    setIsOpen(true);
  }, [images.length]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navigateToIndex = useCallback((index: number) => {
    const maxIndex = totalImages ? totalImages - 1 : images.length - 1;
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    
    // Si navegamos cerca del final y hay más imágenes que cargar
    const threshold = 3; // Cargar cuando estemos a 3 imágenes del final
    if (loadMore && hasMore && !isLoading && newIndex >= images.length - threshold) {
      loadMore();
    }
    
    setCurrentIndex(newIndex);
  }, [images.length, totalImages, loadMore, hasMore, isLoading]);

  const openImageById = useCallback((imageId: string) => {
    const index = images.findIndex(img => img.id === imageId);
    if (index !== -1) {
      openModal(index);
    }
  }, [images, openModal]);

  return {
    isOpen,
    currentIndex,
    openModal,
    closeModal,
    navigateToIndex,
    openImageById,
    // Propiedades adicionales para el modal
    totalImages: totalImages || images.length,
    hasMore,
    isLoading,
  };
};

export default useImageModal;
