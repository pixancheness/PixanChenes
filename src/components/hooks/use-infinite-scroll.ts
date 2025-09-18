import { useState, useEffect, useCallback, useMemo } from 'react';

interface UseInfiniteScrollOptions {
  initialItems: number;
  itemsPerLoad: number;
  threshold?: number; // Distancia del final para activar carga (en pixeles)
}

export function useInfiniteScroll<T>(
  items: T[],
  options: UseInfiniteScrollOptions
) {
  const {
    initialItems = 12,
    itemsPerLoad = 8,
    threshold = 1000
  } = options;

  const [displayedCount, setDisplayedCount] = useState(initialItems);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(items.length > initialItems);

  const displayedItems = useMemo(() => {
    return items.slice(0, displayedCount);
  }, [items, displayedCount]);

  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    
    // Simular un pequeño delay para mejor UX
    setTimeout(() => {
      const newCount = Math.min(displayedCount + itemsPerLoad, items.length);
      setDisplayedCount(newCount);
      setHasMore(newCount < items.length);
      setIsLoading(false);
    }, 300);
  }, [displayedCount, itemsPerLoad, items.length, isLoading, hasMore]);

  // Detectar scroll y cargar más elementos cuando sea necesario
  useEffect(() => {
    const handleScroll = () => {
      if (isLoading || !hasMore) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      // Cargar más cuando el usuario esté cerca del final
      if (scrollHeight - scrollTop - clientHeight < threshold) {
        loadMore();
      }
    };

    const throttledScrollHandler = throttle(handleScroll, 200);
    window.addEventListener('scroll', throttledScrollHandler);
    
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [isLoading, hasMore, threshold, loadMore]);

  // Resetear cuando cambien los items
  useEffect(() => {
    setDisplayedCount(initialItems);
    setHasMore(items.length > initialItems);
    setIsLoading(false);
  }, [items, initialItems]);

  return {
    displayedItems,
    isLoading,
    hasMore,
    loadMore,
    totalItems: items.length,
    displayedCount
  };
}

// Función throttle para optimizar el rendimiento del scroll
function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let lastExecTime = 0;
  
  return (...args: Parameters<T>) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}
