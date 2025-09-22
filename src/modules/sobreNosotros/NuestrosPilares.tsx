"use client";

import React from "react";
import { SplitText } from "@/components/ui";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { useTranslations } from "next-intl";

const createPilaresItems = (t: (key: string) => any) => [
  {
    title: "selfManagement",
    key: "selfManagement",
    description: t("pillars.selfManagement.description"),
    header: (
      <img
        src="https://res.cloudinary.com/danv3godx/image/upload/v1758089545/IMG_2997-edited-600x338_pctqgv.jpg"
        alt="Sabiduría ancestral Maya"
        className="object-cover w-full h-full rounded-xl min-h-[18rem] md:min-h-[24rem]"
      />
    ),
    className: "md:col-span-2",
  },
  {
    title: "ancestralWisdom",
    key: "ancestralWisdom",
    description: t("pillars.ancestralWisdom.description"),
    header: (
      <img
        src="https://res.cloudinary.com/danv3godx/image/upload/v1758089497/chenes08_ixjmyv.jpg"
        alt="Sabiduría ancestral Maya"
        className="object-cover w-full h-full rounded-xl min-h-[18rem] md:min-h-[24rem]"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "regeneration",
    key: "regeneration",
    description: t("pillars.regeneration.description"),
    header: (
      <img
        src="https://res.cloudinary.com/danv3godx/image/upload/v1758089548/o-600x800_jftkhv.jpg"
        alt="Sabiduría ancestral Maya"
        className="object-cover w-full h-full rounded-xl min-h-[18rem] md:min-h-[24rem]"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "genderEquity",
    key: "genderEquity",
    description: t("pillars.genderEquity.description"),
    header: (
      <img
        src="https://res.cloudinary.com/danv3godx/image/upload/v1756431603/19_pevqjh.jpg"
        alt="Sabiduría ancestral Maya"
        className="object-cover w-full h-full rounded-xl min-h-[18rem] md:min-h-[24rem]"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "transparency",
    key: "transparency",
    description: t("pillars.transparency.description"),
    header: (
      <img
        src="https://res.cloudinary.com/danv3godx/image/upload/v1758089537/Imagen-de-WhatsApp-2024-03-10-a-las-17.22.28_dfd0cc8e-1-600x450_ilqvmu.jpg"
        alt="Sabiduría ancestral Maya"
        className="object-cover w-full h-full rounded-xl min-h-[18rem] md:min-h-[24rem]"
      />
    ),
    className: "md:col-span-1",
  },
];

const NuestrosPilares = () => {
  const t = useTranslations("AboutUs.OurPilares");

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título principal con efecto */}
        <div className="text-center mb-16">
          <SplitText
            text={t("title")}
            tag="h1"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-800 mb-8"
            splitType="words"
            delay={200}
            duration={0.8}
          />

          {/* Frase principal de la visión */}
          <div className="relative mx-auto mb-12">
            <SplitText
              text={t("subtitle")}
              tag="h2"
              className="text-2xl  text-yellow-900 italic max-w-5xl mx-auto"
              splitType="words"
              delay={150}
              duration={0.5}
              textAlign="center"
            />
          </div>
        </div>

        {/* Bento Grid con los pilares */}
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[28rem] mb-16">
          {createPilaresItems(t).map((item, i) => (
            <BentoGridItem
              key={i}
              title={t(`pillars.${item.key}.title`)}
              description={
                <p className="text-lg text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              }
              header={item.header}
              className={`${item.className} bg-gradient-to-br from-yellow-50/80 to-amber-50/60 border-yellow-200/40 hover:shadow-lg transition-all duration-300`}
            />
          ))}
        </BentoGrid>

        {/* Sección adicional sobre valores */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-yellow-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4">
              {t("valuesInActionTitle")}
            </h3>
            <p className="text-yellow-700 text-lg max-w-3xl mx-auto leading-relaxed">
              {t("valuesInActionDescription")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://res.cloudinary.com/danv3godx/image/upload/v1758089538/Imagen-de-WhatsApp-2024-03-10-a-las-17.22.29_6a86f1a3-600x450_nxpviy.jpg"
                alt={t("valuesInPracticeAlt")}
                className="object-cover w-full h-80 rounded-xl shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className=" p-4 ">
                  <h4 className="font-bold text-yellow-800 mb-2">
                    {t("dailyPracticeTitle")}
                  </h4>
                  <p className="text-yellow-700 text-sm">
                    {t("dailyPracticeDescription")}
                  </p>
                </div>
                <div className=" p-4 ">
                  <h4 className="font-bold text-yellow-800 mb-2">
                    {t("consciousDecisionsTitle")}
                  </h4>
                  <p className="text-yellow-700 text-sm">
                    {t("consciousDecisionsDescription")}
                  </p>
                </div>
                <div className=" p-4 ">
                  <h4 className="font-bold text-yellow-800 mb-2">
                    {t("lastingLegacyTitle")}
                  </h4>
                  <p className="text-yellow-700 text-sm">
                    {t("lastingLegacyDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestrosPilares;
