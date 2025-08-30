"use client";
import React from "react";
import { motion } from "framer-motion";
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
              text="Pixan Chenes"
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
              Economía con alma, comunidad con futuro.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Pixan Chenes es una cooperativa maya que protege la selva, cuida a
              las abejas y construye un futuro digno para nuestras comunidades.
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
              Galeria de fotos
            </button>
            <button className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Apoya nuestro proyecto
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
                text="¿Quiénes somos?"
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
              Pixan significa 'alma' en lengua maya y Chenes hace referencia a
              los pozos de nuestra región. Nacimos en 2020 con la convicción de
              que, desde la comunidad, podemos cambiar nuestro destino. Somos
              cinco comunidades mayas que trabajan juntas para defender la vida,
              la cultura y el futuro de nuestro pueblo.
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
                text="Nuestro propósito"
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
              Queremos que nuestras comunidades mayas vivan con dignidad, sin
              abandonar su tierra ni su cultura. Soñamos con un modelo de
              desarrollo sustentable donde tradición e innovación caminen
              juntas. Al conocer Pixan Chenes, sentirás el latido de un pueblo
              que resiste, cuida y sigue de pie.
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
                text="Nuestros valores"
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
            {[
              "Respeto a la vida, la tierra y nuestra identidad",
              "Equidad como base del desarrollo",
              "Participación comunitaria",
              "Vinculación solidaria",
              "Cuidado ecológico",
              "Dignidad",
            ].map((valor, index) => (
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
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comunidades */}
      <section className="py-20 px-6 bg-yellow-50">
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
                text="Comunidades que conforman Pixan Chenes"
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
              Cinco comunidades indígenas mayas en Hopelchén, Campeche:
              <span className="font-semibold text-yellow-700">
                {" "}
                San Francisco Suc Tuc, Sahcabchén, Yakché Akal, Xcupil y Oxá.
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
                text="¿Qué hacemos?"
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
            {[
              "Apicultura tradicional y tecnificada",
              "Siembra de limón y árboles forestales",
              "Manejo de viveros comunitarios",
              "Elaboración y venta de productos básicos",
              "Ruta de la Miel Maya (experiencia vivencial)",
              "Proyectos de ecoturismo comunitario",
              "Procesamiento de productos con valor agregado",
              "Recuperación del patrimonio cultural",
              "Talleres de formación para jóvenes y mujeres",
            ].map((actividad, index) => (
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
            ))}
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
                text="Liderazgo comunitario"
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
              La cooperativa está liderada por mujeres indígenas mayas, quienes
              encabezan la organización con compromiso, sabiduría y visión. Son
              el corazón del proyecto y ejemplo de transformación desde lo
              colectivo.
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
                text="Nuestros logros"
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
              Hemos constituido la cooperativa, articulado el NODESS junto al
              IPN y otras instituciones, y desarrollado proyectos innovadores
              como una aplicación para el manejo del acopio de miel. Estas
              alianzas han fortalecido nuestras capacidades productivas y
              organizativas.
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
                text="Nuestro futuro"
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
              En 5 años soñamos con ser una comunidad modelo de desarrollo con
              identidad, exportando productos con trazabilidad maya, liderando
              en reforestación y bonos de carbono, turismo responsable,
              biotecnología comunitaria y educación transformadora.
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
                text="Vinculación y aliados"
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
              Instituciones como el Instituto Politécnico Nacional,
              Telebachillerato Comunitario de Suc Tuc, Tierra Fértil y el
              Comisariado de Xcupil, entre otras, acompañan y fortalecen nuestro
              camino.
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
                text="Súmate a Pixan Chenes"
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
              Queremos que quienes nos visitan participen activamente:
              adquiriendo nuestros productos, comprando certificados ambientales
              y apoyando así la reforestación y el desarrollo comunitario.
            </motion.p>
            <motion.button
              variants={fadeInVariants}
              className="bg-white text-yellow-500 hover:bg-yellow-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto"
            >
              <ArrowRight className="w-5 h-5" />
              Únete a nuestra causa
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
                text="Información adicional"
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
                title: "Calidad y autenticidad",
                content:
                  "Procesos artesanales y saberes ancestrales con acompañamiento técnico.",
              },
              {
                title: "Tecnologías",
                content:
                  "Combinación de prácticas tradicionales y herramientas tecnológicas.",
              },
              {
                title: "Beneficios",
                content: "En proceso de implementación, con impacto creciente.",
              },
              {
                title: "Destinatarios",
                content:
                  "Comunidades, juventudes, mujeres, instituciones, empresas y consumidores conscientes.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-yellow-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PixanChenesHome;
