"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ImageModal, useImageModal } from "@/components/ui";
import { optimizeCloudinaryUrl } from "@/lib/cloudinary";
import { members } from "./constants/members";

const galleryImages = members.map((member) => ({
  id: member.id,
  img: optimizeCloudinaryUrl(member.image, { width: 1600 }),
  alt: member.name,
  title: member.name,
}));

export default function MembersGallery() {
  const t = useTranslations("Members");
  const imageModal = useImageModal({
    images: galleryImages,
    totalImages: galleryImages.length,
  });

  return (
    <main className="min-h-screen px-4 font-sans pt-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center pt-9 pb-4">
          <header className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-900 mb-4 leading-tight">
            {t("title")}
          </header>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600  max-w-3xl mx-auto pt-4">
            {t("subtitle")}
          </p>
        </div>

        <section
          aria-label={t("title")}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {members.map((member, index) => (
            <button
              key={member.id}
              id={member.id}
              type="button"
              onClick={() => imageModal.openModal(index)}
              className="group overflow-hidden rounded-2xl bg-white text-left shadow-md ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-500/50"
              aria-label={t("openImage", { name: member.name })}
            >
              <span className="relative block aspect-[4/5] overflow-hidden bg-stone-100">
                <Image
                  src={optimizeCloudinaryUrl(member.image, {
                    width: 800,
                    crop: "fit",
                  })}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  priority={index < 4}
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </span>
              <span className="block px-5 py-4 text-center text-lg font-semibold text-stone-800">
                {member.name}
              </span>
            </button>
          ))}
        </section>
      </div>

      <ImageModal
        images={galleryImages}
        isOpen={imageModal.isOpen}
        currentIndex={imageModal.currentIndex}
        onClose={imageModal.closeModal}
        onNavigate={imageModal.navigateToIndex}
        showNavigation
        showDownloadButton={false}
        totalImages={imageModal.totalImages}
      />
    </main>
  );
}
