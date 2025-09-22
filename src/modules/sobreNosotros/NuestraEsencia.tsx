"use client";

import React from "react";
import { SplitText } from "@/components/ui";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { useTranslations } from "next-intl";

const createEsenciaItems = (t: (key: string) => string) => [
  {
    title: t("title1"),
    description: t("description1"),
    header: (
      <img
        src="https://res.cloudinary.com/danv3godx/image/upload/v1758089544/IMG_2994-edited-600x338_bjl4k8.jpg"
        alt="Comunidad indígena Maya"
        className="object-cover w-full h-full rounded-xl min-h-[18rem] md:min-h-[24rem]"
      />
    ),
    className: "md:col-span-2",
  },
  {
    title: t("title2"),
    description: t("description2"),
    header: (
      <img
        src="https://res.cloudinary.com/danv3godx/image/upload/v1758089533/Imagen-de-WhatsApp-2024-03-10-a-las-17.22.27_933ab8ee-600x800_pr976u.jpg"
        alt="Autogestión comunitaria"
        className="object-cover w-full h-full rounded-xl min-h-[18rem] md:min-h-[24rem]"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: t("title3"),
    description: t("description3"),
    header: (
      <img
        src="https://res.cloudinary.com/danv3godx/image/upload/v1756431603/19_pevqjh.jpg"
        alt="Tradiciones culturales Maya"
        className="object-cover w-full h-full rounded-xl min-h-[18rem] md:min-h-[24rem]"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: t("title4"),
    description: t("description4"),
    header: (
      <img
        src="https://res.cloudinary.com/danv3godx/image/upload/v1758089538/Imagen-de-WhatsApp-2024-03-10-a-las-17.22.29_6a86f1a3-600x450_nxpviy.jpg"
        alt="Conocimiento ancestral Maya"
        className="object-cover w-full h-full rounded-xl min-h-[18rem] md:min-h-[24rem]"
      />
    ),
    className: "md:col-span-2",
  },
];

const NuestraEsencia = () => {
  const t = useTranslations("AboutUs.OurEssence");
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título principal con efecto */}
        <div className="text-center mb-16 pt-9">
          <SplitText
            text={t("title")}
            tag="h1"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-800 mb-8"
            splitType="words"
            delay={200}
            duration={0.8}
          />

          {/* Frase destacada */}
          <div className="relative mx-auto mb-12">
            <SplitText
              text={t("description")}
              tag="h2"
              className="text-3xl text-yellow-900 italic"
              splitType="words"
              delay={150}
              duration={1}
              textAlign="center"
            />
          </div>
        </div>

        {/* Bento Grid con contenido */}
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[28rem]">
          {createEsenciaItems(t).map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={
                <p className="text-lg  text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              }
              header={item.header}
              className={`${item.className} bg-gradient-to-br from-yellow-50/80 to-amber-50/60  border-yellow-200/40  transition-all duration-300`}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default NuestraEsencia;
