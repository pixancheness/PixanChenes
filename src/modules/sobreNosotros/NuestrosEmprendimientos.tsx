"use client";

import React from "react";
import { SplitText } from "@/components/ui";

const NuestrosEmprendimientos = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SplitText
            text="Nuestros Emprendimientos"
            tag="h1"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-800 mb-8"
            splitType="words"
            delay={200}
            duration={0.8}
          />

          {/* Frase principal de la visión */}
          <div className="relative mx-auto mb-12">
            <SplitText
              text="Impacto y ODS"
              tag="h2"
              className="text-2xl  text-yellow-900 italic max-w-5xl mx-auto"
              splitType="words"
              delay={150}
              duration={0.5}
              textAlign="center"
            />
          </div>
        </div>

        {/* Descripción introductoria */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Nuestros emprendimientos están íntimamente ligados a la cosmovisión
            maya, la conservación y la recuperación de la memoria histórica.
          </p>
          <p className="text-lg text-yellow-800 font-semibold">
            El empleo digno es la dedicación al cuidado de la selva.
          </p>
        </div>

        {/* Grid de emprendimientos */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {emprendimientosItems.map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-yellow-50/80 to-amber-50/60 border border-yellow-200/40 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-yellow-800 mb-3 text-xl">
                    {item.title}
                  </h3>
                  <p className="text-yellow-700 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de ODS */}
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4">
              Objetivos de Desarrollo Sostenible
            </h3>
            <p className="text-yellow-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Trabajamos directamente por los Objetivos de Desarrollo Sostenible
              de la ONU, contribuyendo a un mundo más justo y sustentable.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {odsItems.map((ods, i) => (
              <div
                key={i}
                className=" rounded-lg p-4 text-center hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center text-white font-bold text-sm ${ods.color}`}
                >
                  {ods.number}
                </div>
                <p className="text-blue-800 text-xs font-medium leading-tight">
                  {ods.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen y mensaje final */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://res.cloudinary.com/danv3godx/image/upload/v1758089500/image-600x400_j7ghsl.jpg"
              alt="Emprendimientos comunitarios en acción"
              className="object-cover w-full h-80 md:h-96 rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-6">
              Impacto Real, Cambio Duradero
            </h3>
            <p className="text-black leading-relaxed text-lg mb-4">
              Cada uno de nuestros emprendimientos genera un impacto medible en
              la vida de nuestras familias y en la conservación de nuestro
              territorio.
            </p>
            <p className="text-black leading-relaxed text-lg mb-6">
              No son solo proyectos económicos; son expresiones de nuestra
              cosmovisión y herramientas para la recuperación de nuestra memoria
              histórica.
            </p>
            <div className="bg-yellow-100 rounded-lg p-4 ">
              <p className="text-yellow-800 font-semibold text-center">
                "El desarrollo verdadero nace desde adentro, con respeto y en
                armonía"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const emprendimientosItems = [
  {
    title: "Conservación Activa",
    description:
      "30 hectáreas dedicadas a la conservación, con infraestructura para el cuidado de la fauna salvaje y recolección de semillas de árboles melíferos.",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    features: ["30 hectáreas", "Bebederos fauna", "Semillas melíferas"],
  },
  {
    title: "Producción Sustentable",
    description:
      "Siembras orgánicas, producción de miel cumpliendo normas de envasado, vino artesanal de miel y elaboración de artesanías tradicionales.",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ),
    features: [
      "Cultivos orgánicos",
      "Miel certificada",
      "Vino artesanal",
      "Artesanías",
    ],
  },
  {
    title: "Turismo Consciente",
    description:
      "Experiencias auténticas que incluyen rituales de agradecimiento, con capacitación especializada en atención al cliente para recibir visitantes de todo el mundo.",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    features: [
      "Rituales auténticos",
      "Capacitación turística",
      "Experiencias culturales",
    ],
  },
  {
    title: "Vivienda y Comunidad",
    description:
      "Producción de vivienda artesanal que reduce la huella de carbono y manejo integral de residuos para una comunidad sustentable.",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    features: [
      "Construcción sustentable",
      "Manejo residuos",
      "Vivienda artesanal",
    ],
  },
];

const odsItems = [
  { number: "1", title: "Fin de la Pobreza", color: "bg-red-600" },
  { number: "2", title: "Hambre Cero", color: "bg-yellow-600" },
  { number: "5", title: "Igualdad de Género", color: "bg-red-500" },
  { number: "8", title: "Trabajo Decente", color: "bg-red-400" },
  { number: "11", title: "Ciudades Sostenibles", color: "bg-orange-500" },
  { number: "12", title: "Consumo Responsable", color: "bg-yellow-500" },
  { number: "13", title: "Acción Clima", color: "bg-green-600" },
  { number: "15", title: "Vida Terrestre", color: "bg-green-500" },
  { number: "17", title: "Alianzas ODS", color: "bg-blue-600" },
];

export default NuestrosEmprendimientos;
