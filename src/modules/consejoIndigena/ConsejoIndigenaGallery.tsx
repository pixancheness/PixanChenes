"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ImageModal, useImageModal } from "@/components/ui";
import { optimizeCloudinaryUrl } from "@/lib/cloudinary";
import {
  indigenousCouncilImages,
  type IndigenousCouncilSection,
} from "./constants";

interface ConsejoIndigenaGalleryProps {
  section: IndigenousCouncilSection;
}

export default function ConsejoIndigenaGallery({
  section,
}: ConsejoIndigenaGalleryProps) {
  const t = useTranslations(`IndigenousCouncil.${section}`);
  const sectionImages = indigenousCouncilImages[section];
  const galleryImages = sectionImages.map((image) => ({
    id: image.id,
    img: optimizeCloudinaryUrl(image.src, { width: 1800 }),
    alt: t("imageAlt"),
    title: t("title"),
  }));
  const imageModal = useImageModal({
    images: galleryImages,
    totalImages: galleryImages.length,
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-400/20 via-yellow-300/10 to-amber-400/15 px-4 pb-20 pt-28 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-12 max-w-5xl text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-yellow-900 sm:text-4xl lg:text-5xl">
            {t("title")}
          </h1>
          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-yellow-500" />
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-gray-700">
            {t("description")}
          </p>
        </header>

        <section
          aria-label={t("title")}
          className={`grid grid-cols-1 gap-6 ${
            sectionImages.length > 1 ? "md:grid-cols-2 lg:grid-cols-3" : ""
          }`}
        >
          {sectionImages.map((image, index) => {
            const isSingleImage = sectionImages.length === 1;

            return (
              <figure
                key={image.id}
                className={isSingleImage ? "mx-auto w-full max-w-5xl" : ""}
              >
                <button
                  type="button"
                  onClick={() => imageModal.openModal(index)}
                  className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-500/50"
                  aria-label={t("openImage")}
                >
                  <Image
                    src={optimizeCloudinaryUrl(image.src, {
                      width: 1200,
                      crop: "fit",
                    })}
                    alt={t("imageAlt")}
                    fill
                    sizes={
                      isSingleImage
                        ? "(max-width: 1024px) 100vw, 80vw"
                        : "(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
                    }
                    priority={index === 0}
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                </button>
                {image.captionKey && (
                  <figcaption className="mt-3 text-center text-sm leading-relaxed text-gray-600">
                    {t(image.captionKey)}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </section>
      </div>

      <ImageModal
        images={galleryImages}
        isOpen={imageModal.isOpen}
        currentIndex={imageModal.currentIndex}
        onClose={imageModal.closeModal}
        onNavigate={imageModal.navigateToIndex}
        showNavigation={galleryImages.length > 1}
        showDownloadButton={false}
        totalImages={imageModal.totalImages}
      />
    </main>
  );
}
