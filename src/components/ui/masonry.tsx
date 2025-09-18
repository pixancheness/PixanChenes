"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import Image from "next/image";

const useMedia = (
  queries: string[],
  values: number[],
  defaultValue: number
): number => {
  const [value, setValue] = useState<number>(defaultValue);

  const getValue = () => {
    // Check if we're in the browser and matchMedia is available
    if (typeof window !== "undefined" && window.matchMedia) {
      const index = queries.findIndex((q) => window.matchMedia(q).matches);
      return values[index] ?? defaultValue;
    }
    return defaultValue;
  };

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined" || !window.matchMedia) return;

    const handler = () => setValue(getValue);

    // Set initial value
    setValue(getValue);

    // Add listeners
    queries.forEach((q) => {
      const mediaQuery = window.matchMedia(q);
      mediaQuery.addEventListener("change", handler);
    });

    return () =>
      queries.forEach((q) => {
        const mediaQuery = window.matchMedia(q);
        mediaQuery.removeEventListener("change", handler);
      });
  }, [queries, defaultValue]);

  return value;
};

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width: Math.floor(width), height: Math.floor(height) });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

interface Item {
  id: string;
  img: string;
  height: number;
}

interface GridItem extends Item {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface MasonryProps {
  items: Item[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: "bottom" | "top" | "left" | "right" | "center" | "random";
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const columns = useMedia(
    [
      "(min-width:1500px)",
      "(min-width:1000px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();
  const [imagesReady, setImagesReady] = useState(false);

  const getInitialPosition = (item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === "random") {
      const dirs = ["top", "bottom", "left", "right"];
      direction = dirs[
        Math.floor(Math.random() * dirs.length)
      ] as typeof animateFrom;
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return {
          x: item.x,
          y: (typeof window !== "undefined" ? window.innerHeight : 1000) + 200,
        };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return {
          x: (typeof window !== "undefined" ? window.innerWidth : 1920) + 200,
          y: item.y,
        };
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo<GridItem[]>(() => {
    if (!width || width === 0 || !items.length) return [];

    const colHeights = new Array(columns).fill(0);
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const availableWidth = Math.max(width - totalGaps, 0);
    const columnWidth = Math.max(availableWidth / columns, 0);

    if (columnWidth === 0) return [];

    const gridItems = items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height = Math.max(child.height / 2, 100); // Ensure minimum height
      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
    });

    return gridItems;
  }, [columns, items, width]);

  // Calculate total height needed for the container
  const totalHeight = useMemo(() => {
    if (grid.length === 0) return 0;
    return Math.max(...grid.map((item) => item.y + item.h));
  }, [grid]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady || grid.length === 0) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const element = document.querySelector(selector);
      if (!element) return;

      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const start = getInitialPosition(item);
        gsap.set(element, {
          opacity: 0,
          x: start.x,
          y: start.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: "blur(10px)" }),
        });

        gsap.to(element, {
          opacity: 1,
          x: item.x,
          y: item.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: "blur(0px)" }),
          duration: 0.8,
          ease: "power3.out",
          delay: index * stagger,
        });
      } else {
        gsap.to(element, {
          ...animProps,
          duration,
          ease,
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (id: string, element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay") as HTMLElement;
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (id: string, element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay") as HTMLElement;
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        height: totalHeight > 0 ? `${totalHeight}px` : "auto",
      }}
    >
      {imagesReady &&
        grid.length > 0 &&
        grid.map((item) => (
          <div
            key={item.id}
            data-key={item.id}
            className="absolute"
            style={{
              willChange: "transform, width, height, opacity",
              width: item.w,
              height: item.h,
            }}
            onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
          >
            <div className="relative w-full h-full rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] overflow-hidden">
              <Image
                src={item.img}
                alt={`Imagen ${item.id}`}
                fill
                placeholder="blur"
                className="object-cover rounded-[10px] transition-opacity duration-300"
                sizes="(max-width: 400px) 100vw, (max-width: 600px) 50vw, (max-width: 1000px) 33vw, (max-width: 1500px) 25vw, 20vw"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyBckliyjqTzSlT54b6bk+h0R//2Q=="
                priority={false}
                loading="lazy"
              />
              {colorShiftOnHover && (
                <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Masonry;
