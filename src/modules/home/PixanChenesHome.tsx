"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Heart,
  Users,
  Target,
  CheckCircle,
  MapPin,
  Activity,
  Star,
  Trophy,
  Compass,
  HandHeart,
  HelpCircle,
  ArrowRight,
  Leaf,
  Sparkles,
} from "lucide-react";
import SplitText from "../ui/SplitText";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const PixanChenesHome = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              {t("hero.galleryButton")}
            </button>
            <button className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              {t("hero.supportButton")}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInVariants}>
              <SplitText
                text={t("aboutUs.title")}
                className="text-4xl md:text-5xl font-bold text-yellow-800 mb-8"
                tag="h2"
                delay={80}
                duration={0.6}
                splitType="words"
              />
            </motion.div>
            <motion.p
              variants={fadeInVariants}
              className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
            >
              {t("aboutUs.description")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.div
              variants={fadeInVariants}
              className="flex justify-center mb-8"
            >
              <Target className="w-16 h-16 text-yellow-500" />
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <SplitText
                text={t("purpose.title")}
                className="text-4xl md:text-5xl font-bold text-yellow-800 mb-8"
                tag="h2"
                delay={80}
                duration={0.6}
                splitType="words"
              />
            </motion.div>
            <motion.p
              variants={fadeInVariants}
              className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
            >
              {t("purpose.description")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInVariants}>
              <SplitText
                text={t("values.title")}
                className="text-4xl md:text-5xl font-bold text-yellow-800 mb-12"
                tag="h2"
                delay={80}
                duration={0.6}
                splitType="words"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(t.raw("values.items") as string[]).map(
              (valor: string, index: number) => (
                <motion.div
                  key={index}
                  variants={fadeInVariants}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium leading-relaxed">
                      {valor}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Comunidades */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.div
              variants={fadeInVariants}
              className="flex justify-center mb-8"
            >
              <MapPin className="w-16 h-16 text-yellow-500" />
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <SplitText
                text={t("communities.title")}
                className="text-4xl md:text-5xl font-bold text-yellow-800 mb-8"
                tag="h2"
                delay={80}
                duration={0.6}
                splitType="words"
              />
            </motion.div>
            <motion.p
              variants={fadeInVariants}
              className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
            >
              {t("communities.description")}
              <span className="font-semibold text-yellow-700">
                {" "}
                {t("communities.list")}
              </span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Actividades */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInVariants}
              className="flex justify-center mb-8"
            >
              <Activity className="w-16 h-16 text-yellow-500" />
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <SplitText
                text={t("activities.title")}
                className="text-4xl md:text-5xl font-bold text-yellow-800 mb-12"
                tag="h2"
                delay={80}
                duration={0.6}
                splitType="words"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(t.raw("activities.items") as string[]).map(
              (actividad: string, index: number) => (
                <motion.div
                  key={index}
                  variants={fadeInVariants}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-yellow-500"
                >
                  <div className="flex items-start gap-4">
                    <Leaf className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium leading-relaxed">
                      {actividad}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.div
              variants={fadeInVariants}
              className="flex justify-center mb-8"
            >
              <Users className="w-16 h-16 text-yellow-500" />
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <SplitText
                text={t("leadership.title")}
                className="text-4xl md:text-5xl font-bold text-yellow-800 mb-8"
                tag="h2"
                delay={80}
                duration={0.6}
                splitType="words"
              />
            </motion.div>
            <motion.p
              variants={fadeInVariants}
              className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
            >
              {t("leadership.description")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Logros */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.div
              variants={fadeInVariants}
              className="flex justify-center mb-8"
            >
              <Trophy className="w-16 h-16 text-yellow-500" />
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <SplitText
                text={t("achievements.title")}
                className="text-4xl md:text-5xl font-bold text-yellow-800 mb-8"
                tag="h2"
                delay={80}
                duration={0.6}
                splitType="words"
              />
            </motion.div>
            <motion.p
              variants={fadeInVariants}
              className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
            >
              {t("achievements.description")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sueños */}
      <section className="py-20 px-6 bg-gradient-to-r bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.div
              variants={fadeInVariants}
              className="flex justify-center mb-8"
            >
              <Compass className="w-16 h-16 text-yellow-500" />
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <SplitText
                text={t("future.title")}
                className="text-4xl md:text-5xl font-bold text-yellow-800 mb-8"
                tag="h2"
                delay={80}
                duration={0.6}
                splitType="words"
              />
            </motion.div>
            <motion.p
              variants={fadeInVariants}
              className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
            >
              {t("future.description")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Aliados */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.div
              variants={fadeInVariants}
              className="flex justify-center mb-8"
            >
              <Star className="w-16 h-16 text-yellow-500" />
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <SplitText
                text={t("allies.title")}
                className="text-4xl md:text-5xl font-bold text-yellow-800 mb-8"
                tag="h2"
                delay={80}
                duration={0.6}
                splitType="words"
              />
            </motion.div>
            <motion.p
              variants={fadeInVariants}
              className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
            >
              {t("allies.description")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Cómo apoyar */}
      <section className="py-20 px-6 bg-yellow-500 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.div
              variants={fadeInVariants}
              className="flex justify-center mb-8"
            >
              <HandHeart className="w-16 h-16 text-white" />
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <SplitText
                text={t("joinUs.title")}
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                tag="h2"
                delay={80}
                duration={0.6}
                splitType="words"
              />
            </motion.div>
            <motion.p
              variants={fadeInVariants}
              className="text-xl text-yellow-100 leading-relaxed max-w-4xl mx-auto mb-12 font-semibold"
            >
              {t("joinUs.description")}
            </motion.p>
            <motion.button
              variants={fadeInVariants}
              className="bg-white text-yellow-500 hover:bg-yellow-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto"
            >
              <ArrowRight className="w-5 h-5" />
              {t("joinUs.button")}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FAQ / Información adicional */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInVariants}
              className="flex justify-center mb-8"
            >
              <HelpCircle className="w-16 h-16 text-yellow-500" />
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <SplitText
                text={t("additionalInfo.title")}
                className="text-4xl md:text-5xl font-bold text-yellow-800 mb-12"
                tag="h2"
                delay={80}
                duration={0.6}
                splitType="words"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: t("additionalInfo.items.quality.title"),
                description: t("additionalInfo.items.quality.description"),
              },
              {
                title: t("additionalInfo.items.technology.title"),
                description: t("additionalInfo.items.technology.description"),
              },
              {
                title: t("additionalInfo.items.benefits.title"),
                description: t("additionalInfo.items.benefits.description"),
              },
              {
                title: t("additionalInfo.items.recipients.title"),
                description: t("additionalInfo.items.recipients.description"),
              },
            ].map((item: any, index: number) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-yellow-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PixanChenesHome;
