# Cuentos y Leyendas - Sistema de Gestión

## Cómo agregar una nueva leyenda

### 1. Crear el archivo de metadata

Crear un archivo `metadata.ts` en la carpeta metadata:

```
src/modules/cuentosLeyendas/
  └── metadata/
      └── nombreLeyenda.ts
```

### 2. Estructura del metadata

El archivo debe seguir el tipo `Legend` y exportar una constante:

```typescript
import { Legend } from "../types/legend";

export const legendNombreLeyenda: Legend = {
  id: "nombre-leyenda", // slug único
  title: "Nombre de la Leyenda",
  url: "/cuentos_leyendas/nombreLeyenda", // ruta automática
  videoUrl: "https://www.youtube.com/watch?v=...", // opcional
  keywords: ["palabra1", "palabra2", "palabra3"],
  narrators: {
    students: ["Nombre Estudiante 1", "Nombre Estudiante 2"],
    storyteller: "Nombre del Narrador Principal",
    date: "YYYY-MM-DD",
  },
  metadata: {
    origin: "Descripción del origen de la leyenda...",
    summary: "Resumen breve que aparecerá en la card...",
    characters: [
      {
        name: "Personaje 1",
        description: "Descripción del personaje...",
      },
    ],
  },
  content: {
    script: "Guión completo para narración...",
    text: "Texto completo de la leyenda...",
    audioUrl: "/audios/nombre-leyenda.mp3",
  },
};
```

### 3. Registrar la leyenda

Agregar la nueva leyenda al archivo `constants/legends.ts`:

```typescript
import { legendNombreLeyenda } from "../metadata/nombreLeyenda";

export const allLegends: Legend[] = [
  legendPajaroToh,
  legendNombreLeyenda, // ← agregar aquí
  // más leyendas...
];
```

**¡Eso es todo!** 🎉
La página se generará automáticamente gracias a los **Dynamic Routes** de Next.js con **SSG (Static Site Generation)**.

## Estructura actual

- **Página principal**: `/cuentos_leyendas` - muestra el grid con todas las leyendas
- **Páginas dinámicas**: `/cuentos_leyendas/[storySlug]` - páginas generadas automáticamente
- **Escalabilidad**: Solo agregar metadata y registrar en el array central
- **Performance**: SSG para carga ultra-rápida y mejor SEO

## Features implementadas

### Portal Principal (cuentosLeyendasMain.tsx)

- ✅ Grid responsive de cards
- ✅ Preview con título, resumen y keywords
- ✅ Navegación automática a páginas individuales
- ✅ Diseño moderno con hover effects
- ✅ Sistema escalable para agregar más leyendas
- ✅ Paleta de colores yellow como principal

### Visor Individual (StoryViewer.tsx)

- ✅ Header completo con información general
- ✅ Sistema de tabs (Cuento/Narrar cuento)
- ✅ Integración de video de YouTube
- ✅ Visualización de texto completo
- ✅ Guión de narración separado
- ✅ Información de narradores y estudiantes
- ✅ Descripción de personajes
- ✅ Keywords visuales
- ✅ Breadcrumb de navegación
- ✅ Optimizado para SSG (Static Site Generation)
- ✅ Internacionalización completa
- ✅ Metadata SEO automática

### Dynamic Routes & Performance

- ✅ **Dynamic Routes** automáticas con `[storySlug]`
- ✅ **SSG** con `generateStaticParams` para máximo rendimiento
- ✅ **SEO optimizado** con `generateMetadata`
- ✅ **OpenGraph** y **Twitter Cards** incluidas
- ✅ **Rutas estáticas** generadas en build time
- ✅ **Carga instantánea** de páginas

## Ventajas del sistema actual

1. **Cero configuración manual**: Solo agregar metadata y listo
2. **Rendimiento óptimo**: SSG genera páginas estáticas súper rápidas
3. **SEO perfecto**: Metadata automática para cada historia
4. **Escalabilidad total**: Agregar 100 historias requiere los mismos 2 pasos
5. **Mantenimiento mínimo**: Sin páginas individuales que mantener
