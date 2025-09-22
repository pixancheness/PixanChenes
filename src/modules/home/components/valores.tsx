"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { SplitText } from "@/components/ui";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

export default function Valores() {
  const t = useTranslations("HomePage");

  const valoresData = t.raw("values.items") as Array<{
    title: string;
    description: string;
  }>;
  const images = [
    "https://res.cloudinary.com/danv3godx/image/upload/v1758089497/chenes08_ixjmyv.jpg",
    "https://res.cloudinary.com/danv3godx/image/upload/v1756431603/19_pevqjh.jpg",
    "https://res.cloudinary.com/danv3godx/image/upload/v1758089538/Imagen-de-WhatsApp-2024-03-10-a-las-17.22.29_6a86f1a3-600x450_nxpviy.jpg",
    "https://res.cloudinary.com/danv3godx/image/upload/v1758089537/Imagen-de-WhatsApp-2024-03-10-a-las-17.22.28_dfd0cc8e-1-600x450_ilqvmu.jpg",
    "https://res.cloudinary.com/danv3godx/image/upload/v1758089558/vivero11_fwqaik.jpg",
    "https://res.cloudinary.com/danv3godx/image/upload/v1758089545/IMG_2997-edited-600x338_pctqgv.jpg",
  ];

  const gridClasses = [
    "md:col-span-2",
    "md:col-span-1",
    "md:col-span-1",
    "md:col-span-2",
    "md:col-span-2",
    "md:col-span-1",
  ];

  const valoresItems = valoresData.map((valor, index) => ({
    title: valor.title,
    description: valor.description,
    header: (
      <Image
        src={images[index]}
        alt={valor.title}
        className="object-cover w-full h-full rounded-xl min-h-[18rem] md:min-h-[24rem]"
        width={1000}
        height={1000}
      />
    ),
    className: gridClasses[index],
  }));

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título principal con efecto */}
        <div className="text-center mb-16">
          <SplitText
            text={t("values.title")}
            tag="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-800 mb-8"
            splitType="words"
            delay={200}
            duration={0.8}
          />

          {/* Subtítulo descriptivo */}
          <div className="relative mx-auto mb-12">
            <SplitText
              text={t("values.subtitle")}
              tag="h3"
              className="text-2xl text-yellow-900 italic max-w-5xl mx-auto"
              splitType="words"
              delay={150}
              duration={0.5}
              textAlign="center"
            />
          </div>
        </div>

        {/* Bento Grid con los valores */}
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[28rem] mb-16">
          {valoresItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
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

        {/* Sección adicional sobre valores en acción */}
        <div className="  p-8 md:p-12 ">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4">
              {t("values.liveValues.title")}
            </h3>
            <p className="text-black text-lg max-w-3xl mx-auto leading-relaxed">
              {t("values.liveValues.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="https://res.cloudinary.com/danv3godx/image/upload/v1758089538/Imagen-de-WhatsApp-2024-03-10-a-las-17.22.29_6a86f1a3-600x450_nxpviy.jpg"
                alt="Valores en práctica comunitaria"
                className="object-cover w-full h-80 rounded-xl shadow-lg"
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <div className="space-y-6">
                {(
                  t.raw("values.liveValues.practices") as Array<{
                    title: string;
                    description: string;
                  }>
                ).map((practice, index) => (
                  <div key={index} className="p-4">
                    <h4 className="font-bold text-black mb-2">
                      {practice.title}
                    </h4>
                    <p className="text-black text-sm">{practice.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
