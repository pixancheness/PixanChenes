"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useTranslations } from "next-intl";

export function CarouselSobreNosotros() {
  const t = useTranslations("HomePage.aboutUs.gallery");

  const data = [
    {
      category: t("conferences.category"),
      title: t("conferences.title"),
      src: "https://res.cloudinary.com/danv3godx/image/upload/v1756431602/22_czcvrc.jpg",
      content: null,
    },
    {
      category: t("preservation.category"),
      title: t("preservation.title"),
      src: "https://res.cloudinary.com/danv3godx/image/upload/v1756431603/18_ghuulw.jpg",
      content: null,
    },
    {
      category: t("community.category"),
      title: t("community.title"),
      src: "https://res.cloudinary.com/danv3godx/image/upload/v1756431603/13_nmn7ln.jpg",
      content: null,
    },
    {
      category: t("environment.category"),
      title: t("environment.title"),
      src: "https://res.cloudinary.com/danv3godx/image/upload/v1756431603/15_jdoriu.jpg",
      content: null,
    },
    {
      category: t("gastronomy.category"),
      title: t("gastronomy.title"),
      src: "https://res.cloudinary.com/danv3godx/image/upload/v1756431606/5_kibul3.jpg",
      content: null,
    },
    {
      category: t("products.category"),
      title: t("products.title"),
      src: "https://res.cloudinary.com/danv3godx/image/upload/v1756432046/1_mktdap.jpg",
      content: null,
    },
    {
      category: t("crafts.category"),
      title: t("crafts.title"),
      src: "https://res.cloudinary.com/danv3godx/image/upload/v1756431606/9_tejgsw.jpg",
      content: null,
    },
    {
      category: t("dance.category"),
      title: t("dance.title"),
      src: "https://res.cloudinary.com/danv3godx/image/upload/v1756431606/11_gym9im.jpg",
      content: null,
    },
    {
      category: t("beekeeping.category"),
      title: t("beekeeping.title"),
      src: "https://res.cloudinary.com/danv3godx/image/upload/v1756431603/14_wzthts.jpg",
      content: null,
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full ">
      <Carousel items={cards} />
    </div>
  );
}
