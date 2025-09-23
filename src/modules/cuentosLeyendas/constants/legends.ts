import { legendPajaroToh } from "../metadata/elPajaroToh";
import { legendElTesoro } from "../metadata/elTesoro";
import { legendPiedraDelVenado } from "../metadata/piedraDelVenado";
import { legendLaXtabay } from "../metadata/laXtabay";
import { legendLosAluxes } from "../metadata/losAluxes";
import { Legend } from "../types/legend";

export const allLegends: Legend[] = [
  legendPajaroToh,
  legendElTesoro,
  legendPiedraDelVenado,
  legendLaXtabay,
  legendLosAluxes,

];

// Helper para obtener una leyenda por ID
export const getLegendById = (id: string): Legend | undefined => {
  return allLegends.find(legend => legend.id === id);
};

// Helper para obtener una leyenda por slug en URL
export const getLegendBySlug = (slug: string): Legend | undefined => {
  return allLegends.find(legend => {
    // Extraer el slug de la URL de la leyenda
    const legendSlug = legend.url.split('/').pop();
    return legendSlug === slug || legend.id === slug;
  });
};

// Helper para obtener todas las leyendas
export const getAllLegends = (): Legend[] => {
  return allLegends;
};
