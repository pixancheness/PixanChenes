"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const eventosData = [
  {
    title: "Marzo - Día Internacional de la Mujer",
    month: "Marzo",
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-gray-600 md:text-lg dark:text-neutral-200">
          Un evento para reconocer y fortalecer el liderazgo de las mujeres de
          la zona, con foros y actividades culturales.
        </p>
      </div>
    ),
  },
  {
    title: "Mayo - Evento Internacional Día Mundial de la Abeja",
    month: "Mayo",
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-gray-600 md:text-lg dark:text-neutral-200">
          <span className="font-semibold text-amber-600">
            Nuestro evento emblemático (20-24 Mayo, 2026)
          </span>
        </p>
        <p className="mb-6 text-sm font-normal text-gray-600 md:text-lg dark:text-neutral-200">
          Una serie de actividades culturales, recreativas, económicas,
          folclóricas, ceremoniales, gastronómicas y deportivas para fortalecer
          el tejido social y vincularnos con el mundo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              Actividades Deportivas
            </h4>
            <p className="text-sm text-gray-600 dark:text-neutral-300">
              "Minimundialito" de fútbol para todas las edades y escuelas de más
              de 10 comunidades, baloncesto, voleibol y juegos tradicionales.
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              Expresión Cultural
            </h4>
            <p className="text-sm text-gray-600 dark:text-neutral-300">
              Bandas de guerra, batucada, bailes tradicionales, competencias de
              fuerza y evento ceremonial.
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              Feria Económica
            </h4>
            <p className="text-sm text-gray-600 dark:text-neutral-300">
              Concurso gastronómico con jueces especialistas, exhibición y venta
              de artesanías.
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              Conocimiento
            </h4>
            <p className="text-sm text-gray-600 dark:text-neutral-300">
              Conferencias y producción de contenido para "Repensar la Cultura
              Maya".
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Junio - Día Internacional del Árbol",
    month: "Junio",
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-gray-600 md:text-lg dark:text-neutral-200">
          Un llamado a la acción para trabajos de reforestación en nuestra
          región, abierto a voluntarios.
        </p>
      </div>
    ),
  },
  {
    title: "Octubre/Noviembre - Hannal Pixan",
    month: "Oct/Nov",
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-gray-600 md:text-lg dark:text-neutral-200">
          Una experiencia profunda y respetuosa sobre la tradición maya de Día
          de Muertos, abierta a la comunidad y visitantes.
        </p>
      </div>
    ),
  },
  {
    title: "Diciembre - Feria Navideña",
    month: "Diciembre",
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-gray-600 md:text-lg dark:text-neutral-200">
          Una celebración comunitaria (2025) que evolucionará a una feria
          abierta al público (2026) para la venta de productos y artesanías
          locales.
        </p>
      </div>
    ),
  },
];

export const CalendarioEventos = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 font-sans md:px-10 py-32"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-5xl font-light text-yellow-800  text-center w-full mb-8">
          Calendario Anual de Eventos Comunitarios
        </h2>
        <p className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 max-w-5xl mx-auto text-center mb-16">
          Nuestro año está tejido alrededor de eventos que celebran nuestra
          cultura y generan economía local
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {eventosData.map((item, index) => (
          <div key={index} className="flex justify-start pt-16 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-amber-100 dark:bg-amber-900 border-2 border-amber-300 dark:border-amber-700 flex items-center justify-center shadow-lg">
                <div className="h-6 w-6 rounded-full bg-amber-400 dark:bg-amber-600" />
              </div>
              <div className="hidden md:block md:pl-20">
                <div className="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  {item.month}
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-700 dark:text-gray-300">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden block mb-4">
                <div className="bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
                  {item.month}
                </div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  {item.title}
                </h3>
              </div>
              <div className="bg-amber-50  rounded-xl p-6 shadow-lg ">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-amber-300 dark:via-amber-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-amber-500 via-amber-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarioEventos;
