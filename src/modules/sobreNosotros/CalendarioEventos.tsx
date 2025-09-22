"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const createEventosData = (t: (key: string) => any) => [
  {
    title: t("events.womenDay.title"),
    month: t("events.womenDay.month"),
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-gray-600 md:text-lg dark:text-neutral-200">
          {t("events.womenDay.description")}
        </p>
      </div>
    ),
  },
  {
    title: t("events.beeDay.title"),
    month: t("events.beeDay.month"),
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-gray-600 md:text-lg dark:text-neutral-200">
          <span className="font-semibold text-amber-600">
            {t("events.beeDay.subtitle")}
          </span>
        </p>
        <p className="mb-6 text-sm font-normal text-gray-600 md:text-lg dark:text-neutral-200">
          {t("events.beeDay.description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              {t("events.beeDay.activities.sports.title")}
            </h4>
            <p className="text-sm text-gray-600 dark:text-neutral-300">
              {t("events.beeDay.activities.sports.description")}
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              {t("events.beeDay.activities.culture.title")}
            </h4>
            <p className="text-sm text-gray-600 dark:text-neutral-300">
              {t("events.beeDay.activities.culture.description")}
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              {t("events.beeDay.activities.academic.title")}
            </h4>
            <p className="text-sm text-gray-600 dark:text-neutral-300">
              {t("events.beeDay.activities.academic.description")}
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              {t("events.beeDay.activities.gastronomy.title")}
            </h4>
            <p className="text-sm text-gray-600 dark:text-neutral-300">
              {t("events.beeDay.activities.gastronomy.description")}
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: t("events.treeDay.title"),
    month: t("events.treeDay.month"),
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-gray-600 md:text-lg dark:text-neutral-200">
          {t("events.treeDay.description")}
        </p>
      </div>
    ),
  },
  {
    title: t("events.hanalPixan.title"),
    month: t("events.hanalPixan.month"),
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-gray-600 md:text-lg dark:text-neutral-200">
          {t("events.hanalPixan.description")}
        </p>
      </div>
    ),
  },
  {
    title: t("events.christmasFair.title"),
    month: t("events.christmasFair.month"),
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-gray-600 md:text-lg dark:text-neutral-200">
          {t("events.christmasFair.description")}
        </p>
      </div>
    ),
  },
];

export const CalendarioEventos = () => {
  const t = useTranslations("AboutUs.OurEvents");
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
    <div className="w-full font-sans md:px-10 py-32" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-5xl font-light text-yellow-800  text-center w-full mb-8">
          {t("title")}
        </h2>
        <p className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 max-w-5xl mx-auto text-center mb-16">
          {t("description")}
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {createEventosData(t).map((item, index) => (
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
