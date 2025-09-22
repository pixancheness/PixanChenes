"use client";

import React from "react";
import { SplitText } from "@/components/ui";
import { useTranslations } from "next-intl";

const createMisionItems = (t: (key: string) => string) => [
  {
    title: t("goals.regeneration.title"),
    description: t("goals.regeneration.description"),
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
  },
  {
    title: t("goals.protection.title"),
    description: t("goals.protection.description"),
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
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: t("goals.localEconomy.title"),
    description: t("goals.localEconomy.description"),
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: t("goals.livingCulture.title"),
    description: t("goals.livingCulture.description"),
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
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: t("goals.foodSovereignty.title"),
    description: t("goals.foodSovereignty.description"),
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
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l.917-.409a6.004 6.004 0 001.83-1.83L12 16.5l-1.747 2.261a6.004 6.004 0 001.83 1.83L12 21z"
        />
      </svg>
    ),
  },
];

const NuestraMision = () => {
  const t = useTranslations("AboutUs.OurMission");

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

          {/* Frase principal de la misión */}
          <div className="relative mx-auto mb-12">
            <SplitText
              text={t("mainDescription")}
              tag="h2"
              className="text-2xl  text-yellow-900 italic max-w-4xl mx-auto"
              splitType="words"
              delay={150}
              duration={1}
              textAlign="center"
            />
          </div>
        </div>

        {/* Sección "Trabajamos día a día para:" */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl  text-yellow-800 mb-8">
              {t("dailyWorkTitle")}
            </h3>
          </div>

          {/* Grid de objetivos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {createMisionItems(t).map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-yellow-50/80 to-amber-50/60 border border-yellow-200/40 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="font-bold text-yellow-800 mb-3 text-center text-lg">
                  {item.title}
                </h4>
                <p className="text-yellow-700 text-center text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen destacada */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-3xl p-8 md:p-12 border border-yellow-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://res.cloudinary.com/danv3godx/image/upload/v1758089556/vivero11-768x574_kvk8kk.jpg"
                alt={t("imageAlt")}
                className="object-cover w-full h-80 rounded-xl shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-6">
                {t("commitment.title")}
              </h3>
              <p className="text-yellow-700 leading-relaxed text-lg mb-4">
                {t("commitment.description1")}
              </p>
              <p className="text-yellow-700 leading-relaxed text-lg">
                {t("commitment.description2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestraMision;
