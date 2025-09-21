"use client";

import React from "react";
import { SplitText } from "@/components/ui";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const NuestrosPilares = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título principal con efecto */}
        <div className="text-center mb-16">
          <SplitText
            text="Nuestros Pilares"
            tag="h1"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-800 mb-8"
            splitType="words"
            delay={200}
            duration={0.8}
          />

          {/* Frase principal de la visión */}
          <div className="relative mx-auto mb-12">
            <SplitText
              text="Los Valores que nos Guían"
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
          {pilaresItems.map((item, i) => (
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

        {/* Sección adicional sobre valores */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-yellow-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4">
              Valores en Acción
            </h3>
            <p className="text-yellow-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Estos pilares no son solo palabras bonitas; son la base de cada
              decisión que tomamos y cada acción que emprendemos en nuestra
              comunidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://res.cloudinary.com/danv3godx/image/upload/v1758089538/Imagen-de-WhatsApp-2024-03-10-a-las-17.22.29_6a86f1a3-600x450_nxpviy.jpg"
                alt="Valores en práctica comunitaria"
                className="object-cover w-full h-80 rounded-xl shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className=" p-4 ">
                  <h4 className="font-bold text-yellow-800 mb-2">
                    Práctica Diaria
                  </h4>
                  <p className="text-yellow-700 text-sm">
                    Cada día aplicamos estos valores en nuestro trabajo
                    comunitario y familiar.
                  </p>
                </div>
                <div className=" p-4 ">
                  <h4 className="font-bold text-yellow-800 mb-2">
                    Decisiones Conscientes
                  </h4>
                  <p className="text-yellow-700 text-sm">
                    Nuestros pilares guían cada decisión importante en la
                    organización.
                  </p>
                </div>
                <div className=" p-4 ">
                  <h4 className="font-bold text-yellow-800 mb-2">
                    Legado Duradero
                  </h4>
                  <p className="text-yellow-700 text-sm">
                    Trabajamos para que estos valores sean el legado para
                    futuras generaciones.
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

const pilaresItems = [
  {
    title: "Autogestión Sintrópica",
    description:
      "Creemos en la organización comunitaria como el camino para crear orden, abundancia y resiliencia, imitando a la naturaleza.",
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
    title: "Sabiduría Ancestral",
    description:
      "Nuestro punto de partida es el conocimiento heredado de nuestro pueblo maya. Es nuestra brújula y nuestra mayor fortaleza.",
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
    title: "Regeneración",
    description:
      "No solo queremos conservar, queremos sanar y mejorar nuestro entorno para dejarlo mejor de lo que lo encontramos.",
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
    title: "Equidad de Género",
    description:
      "Nuestra directiva está integrada y liderada por mujeres. Creemos en el poder transformador de la mujer indígena.",
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
    title: "Transparencia y Confianza",
    description:
      "Actuamos con honestidad y rendimos cuentas claras a nuestra comunidad y a quienes creen en nosotros.",
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

export default NuestrosPilares;
