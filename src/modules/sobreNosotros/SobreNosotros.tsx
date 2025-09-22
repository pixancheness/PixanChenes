"use client";

import React from "react";
import NuestraEsencia from "./NuestraEsencia";
import NuestraRealidad from "./NuestraRealidad";
import NuestraMision from "./NuestraMision";
import NuestraVision from "./NuestraVision";
import NuestrosPilares from "./NuestrosPilares";
import NuestrosEmprendimientos from "./NuestrosEmprendimientos";
import CalendarioEventos from "./CalendarioEventos";

const SobreNosotros = () => {
  return (
    <div className="min-h-screen  bg-yellow-50 font-sans">
      {/* Componente Nuestra Esencia */}
      <NuestraEsencia />

      {/* Componente Nuestra Realidad */}
      <NuestraRealidad />

      {/* Componente Nuestra Misión */}
      <NuestraMision />

      {/* Componente Nuestra Visión */}
      <NuestraVision />

      {/* Componente Nuestros Pilares */}
      <NuestrosPilares />

      {/* Componente Nuestros Emprendimientos */}
      <NuestrosEmprendimientos />

      {/* Componente Calendario de Eventos */}
      <CalendarioEventos />
    </div>
  );
};

export default SobreNosotros;
