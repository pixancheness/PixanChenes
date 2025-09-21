"use client";

import React from "react";

const NuestraRealidad = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Título principal */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-800 mb-8">
            Nuestra Realidad: El Reto que Convertimos en Oportunidad
          </h1>
        </div>

        {/* Contexto del desafío */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl  text-gray-700  leading-relaxed">
              Vivir en la región de los Chenes es una lucha diaria por la
              dignidad. Somos una comunidad donde más del 80% de la población es
              indígena y enfrentamos realidades crudas:
            </p>
          </div>

          {/* Grid de estadísticas/desafíos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Estadística 1 */}
            <div className="bg-red-50  rounded-xl p-6 border border-red-200 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">80%</span>
              </div>
              <h3 className="font-bold text-red-800  mb-2">
                Población Indígena
              </h3>
              <p className="text-sm text-red-700 ">
                Más del 80% de nuestra comunidad es indígena
              </p>
            </div>

            {/* Estadística 2 */}
            <div className="bg-orange-50  rounded-xl p-6 border border-orange-200 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">70%</span>
              </div>
              <h3 className="font-bold text-orange-800  mb-2">
                Pobreza Multidimensional
              </h3>
              <p className="text-sm text-orange-700 ">
                Supera el 70% en nuestra región
              </p>
            </div>

            {/* Estadística 3 */}
            <div className="bg-red-50  rounded-xl p-6 border border-red-200 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">1/5</span>
              </div>
              <h3 className="font-bold text-red-800  mb-2">Pobreza Extrema</h3>
              <p className="text-sm text-red-700 ">
                Afecta a 1 de cada 5 familias
              </p>
            </div>

            {/* Estadística 4 */}
            <div className="bg-yellow-50  rounded-xl p-6 border border-yellow-200 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">6+</span>
              </div>
              <h3 className="font-bold text-yellow-800  mb-2">
                Meses de Sequía
              </h3>
              <p className="text-sm text-yellow-700 ">
                Más de seis meses al año sin agua suficiente
              </p>
            </div>
          </div>
        </div>

        {/* Sección de desafíos específicos */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Imagen de sequía */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-100  rounded-xl p-6 border border-yellow-200 ">
              <img
                src="https://res.cloudinary.com/danv3godx/image/upload/v1758089506/Imagen-de-WhatsApp-2023-10-10-a-las-10.57.04_78041787-768x576_afugwh.jpg"
                alt="Comunidad indígena Maya"
                className="object-cover w-full h-64 md:h-80 rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-yellow-800  mb-2">
                La Sequía
              </h3>
              <p className="text-yellow-700 ">
                Nuestro enemigo constante durante más de seis meses al año
              </p>
            </div>

            {/* Texto descriptivo de desafíos */}
            <div className=" rounded-xl p-8   flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800  mb-6">
                Desafíos Diarios
              </h3>
              <p className="text-gray-700  leading-relaxed mb-4 text-lg">
                La sequía es nuestro enemigo constante durante más de seis meses
                al año. No contamos con sistemas de riego suficientes y llevar
                agua a nuestras casas es una tarea exhaustiva.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Esta realidad afecta a nuestra tierra, nuestra fauna y sustento.
              </p>
              <p className="text-sm text-gray-600  mt-4 italic">
                La lucha constante por recursos básicos que determina nuestro
                día a día
              </p>
            </div>
          </div>
        </div>

        {/* Transición hacia la oportunidad */}
        <div className="relative ">
          <div className="absolute inset-0 bg-gradient-to-r  rounded-2xl transform -rotate-1 opacity-10"></div>
          <div className="relative rounded-2xl p-8 md:p-12 border-yellow-200 ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-900  text-center ">
              Pero frente a la adversidad, se levanta una oportunidad histórica.
            </h2>
          </div>
        </div>

        {/* Sección de oportunidad */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50  rounded-3xl p-8 md:p-12  border-yellow-200 ">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Estadística del Tren Maya */}
            <div className="text-center">
              <div className="inline-block bg-yellow-500 rounded-2xl p-6 mb-6">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  5M+
                </div>
                <p className="text-yellow-100 font-semibold">Turistas al año</p>
              </div>
              <h3 className="text-lg font-bold text-yellow-800  mb-4">
                Tren Maya
              </h3>
              <p className="text-yellow-700 text-lg  leading-relaxed">
                La proyección del Tren Maya anticipa la llegada de más de 5
                millones de turistas al año. La pregunta no es si el cambio
                llegará, sino quién se beneficiará de él.
              </p>
            </div>

            {/* Imagen/gráfico del Tren Maya */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-100  rounded-xl p-6 border border-yellow-200 ">
                <div className="text-center">
                  <img
                    src="https://res.cloudinary.com/danv3godx/image/upload/v1758337883/operadores-tren-maya-espana_k7wwwu.jpg"
                    alt="Comunidad indígena Maya"
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <p className="text-yellow-700 py-4 font-medium">
                    Imagen del proyecto Tren Maya y su impacto en la región
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nuestra respuesta */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-800  mb-6">
              Nosotros Tenemos la Respuesta
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tierra y conservación */}
            <div className="  rounded-xl p-6  text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-yellow-800  mb-3">
                Tesoro Natural
              </h3>
              <p className="text-yellow-700  text-sm">
                Extensiones de tierra dentro de la selva que son un tesoro de
                conservación y cultura
              </p>
            </div>

            {/* Responsabilidad */}
            <div className=" rounded-xl p-6   text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
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
              </div>
              <h3 className="font-bold text-yellow-800  mb-3">
                Con Responsabilidad
              </h3>
              <p className="text-yellow-700  text-sm">
                Listos para recibir al mundo con responsabilidad y respeto por
                nuestra cultura
              </p>
            </div>

            {/* Alianza estratégica */}
            <div className=" rounded-xl p-6  text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-yellow-800  mb-3">
                Alianza Estratégica
              </h3>
              <p className="text-yellow-700  text-sm">
                Para quien quiera invertir en un desarrollo verdadero,
                sustentable y justo
              </p>
            </div>
          </div>

          {/* Mensaje final poderoso */}
          <div className="mt-12 bg-gradient-to-r from-yellow-100 to-green-50 rounded-2xl p-8 text-center">
            <p className="text-lg  text-gray-900  leading-relaxed">
              Pixan Chenes es nuestra respuesta organizada. Transformamos la
              dificultad en propósito y la amenaza en determinación.{" "}
              <span className="font-bold">
                No pedimos limosna; ofrecemos una alianza estratégica.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestraRealidad;
