export type Legend = {
    id: string; // identificador único, por ejemplo slug
    title: string;
    url: string;
    videoUrl?: string; 
    keywords: string[];
    narrators: {
      students: string[];
      storyteller: string;
      date: string;
    };
    metadata: {
      origin: string;
      summary: string;
      characters: {
        name: string;
        description: string;
      }[];
    };
    content: {
      script: string;   // Guion para narración
      text: string;     // Texto completo de la leyenda
      audioUrl: string; // Ruta/URL al archivo de audio
    };
  };