"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SplitText from "@/components/ui/SplitText";
import { Sparkles, Heart } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function HeroSection() {
  const t = useTranslations("HomePage");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-yellow-300/10 to-amber-400/10"></div>
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <SplitText
            text={t("hero.title")}
            className="text-6xl md:text-8xl font-bold text-yellow-800 mb-6"
            tag="h1"
            delay={100}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 100, rotationX: -90 }}
            to={{ opacity: 1, y: 0, rotationX: 0 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl text-yellow-700 font-semibold mb-6">
            {t("hero.subtitle")}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            {t("hero.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
            href="/galeria"
          >
            <Sparkles className="w-5 h-5" />
            {t("hero.galleryButton")}
          </Link>
          <button className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <Heart className="w-5 h-5" />
            {t("hero.supportButton")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
