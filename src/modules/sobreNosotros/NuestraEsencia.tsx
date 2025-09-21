"use client";

import React from "react";
import { SplitText } from "@/components/ui";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const NuestraEsencia = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título principal con efecto */}
        <div className="text-center mb-16 pt-9">
          <SplitText
            text="Nuestra Esencia"
            tag="h1"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-800 mb-8"
            splitType="words"
            delay={200}
            duration={0.8}
          />

          {/* Frase destacada */}
          <div className="relative mx-auto mb-12">
            <SplitText
              text="Somos el latido del pueblo Maya en la región de los Chenes."
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
          {esenciaItems.map((item, i) => (
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

const esenciaItems = [
  {
    title: "Guardianes del Territorio",
    description:
      "Pixan Chenes es el fruto de la unión de mujeres y hombres indígenas, guardianes de un territorio milenario. Surgimos como una semilla de esperanza ante los desafíos.",
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
    title: "Nuestro Propósito",
    description:
      "Tenemos el firme propósito de escribir nuestro propio destino mediante la autogestión, el respeto a nuestra madre tierra y la recuperación de nuestra memoria histórica.",
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
    title: "Museo Vivo",
    description:
      "No somos solo una cooperativa; somos un museo vivo, un espacio de resistencia cultural y un modelo tangible de desarrollo comunitario regenerativo.",
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
    title: "Sabiduría Ancestral",
    description:
      "Fusionamos el profundo conocimiento ancestral de nuestros abuelos con la ciencia moderna y los principios de la economía social, para crear abundancia y bienestar para todas las familias.",
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

export default NuestraEsencia;
