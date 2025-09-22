"use client";

import React from "react";
import { SplitText } from "@/components/ui";
import { useTranslations } from "next-intl";

const createVisionElements = (t: (key: string) => string) => [
  {
    title: t("elements.selfDetermination.title"),
    description: t("elements.selfDetermination.description"),
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: t("elements.naturalHarmony.title"),
    description: t("elements.naturalHarmony.description"),
    icon: (
      <svg
        className="w-10 h-10 text-white"
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
    title: t("elements.flourishingCulture.title"),
    description: t("elements.flourishingCulture.description"),
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
];

const NuestraVision = () => {
  const t = useTranslations("AboutUs.OurVision");

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
              text={t("mainPhrase")}
              tag="h2"
              className="text-2xl  text-yellow-900 italic max-w-5xl mx-auto"
              splitType="words"
              delay={150}
              duration={0.5}
              textAlign="center"
            />
          </div>
        </div>

        {/* Sección principal con imagen */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <img
              src="https://res.cloudinary.com/danv3godx/image/upload/v1758089555/vivero08_s4xw9k.jpg"
              alt={t("imageAlt")}
              className="object-cover w-full h-80 md:h-96 rounded-xl shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-6">
              {t("lighthouseTitle")}
            </h3>
            <p className="text-yellow-700 leading-relaxed text-lg mb-4">
              {t("lighthouseDescription")}
            </p>
          </div>
        </div>

        {/* Elementos clave de la visión */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {createVisionElements(t).map((element, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-yellow-50/80 to-amber-50/60 border border-yellow-200/40 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center">
                {element.icon}
              </div>
              <h4 className="font-bold text-yellow-800 mb-4 text-xl">
                {element.title}
              </h4>
              <p className="text-yellow-700 leading-relaxed text-lg">
                {element.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sección de colaboración */}
        <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-3xl p-8 md:p-12 border border-yellow-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4">
              {t("collaborationTitle")}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-700 leading-relaxed text-lg mb-6 text-center">
                {t("collaborationDescription")}
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-lg p-4 ">
                  <div className="w-12 h-12 mx-auto mb-2 bg-yellow-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-yellow-800 font-semibold text-sm">
                    {t("collaborationLabels.society")}
                  </p>
                </div>
                <div className="p-4 ">
                  <div className="w-12 h-12 mx-auto mb-2 bg-yellow-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <p className="text-yellow-800 font-semibold text-sm">
                    {t("collaborationLabels.businesses")}
                  </p>
                </div>
                <div className=" p-4 ">
                  <div className="w-12 h-12 mx-auto mb-2 bg-yellow-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-yellow-800 font-semibold text-sm">
                    {t("collaborationLabels.ngo")}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className=" p-6 ">
                <h4 className="font-bold text-yellow-800 mb-4 text-2xl text-center">
                  {t("mexicoPlanTitle")}
                </h4>
                <p className="text-yellow-700 text-center leading-relaxed text-lg">
                  {t("mexicoPlanDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestraVision;
