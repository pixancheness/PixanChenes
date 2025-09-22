"use server";
import {
  HeroSection,
  SobreNosotros,
  MisionVision,
  Valores,
  Comunidades,
  Actividades,
  Equipo,
  Logros,
  Suenos,
  Aliados,
  Apoyo,
  Adicional,
} from "./components";
const PixanChenesHome = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-yellow-100 to-yellow-50 font-sans">
      {/* Hero Section */}
      <HeroSection />

      {/* Sobre Nosotros */}
      <SobreNosotros />

      {/* Misión y Visión */}
      <MisionVision />

      {/* Valores */}
      <Valores />

      {/* Comunidades */}
      <Comunidades />

      {/* Actividades */}
      <Actividades />

      {/* Equipo */}
      <Equipo />

      {/* Logros */}
      <Logros />

      {/* Sueños */}
      <Suenos />

      {/* Aliados */}
      <Aliados />

      {/* Cómo apoyar */}
      <Apoyo />

      {/* FAQ / Información adicional */}
    </div>
  );
};

export default PixanChenesHome;
