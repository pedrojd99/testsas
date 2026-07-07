// Tipos compartidos del contenido semilla (apuntes de estudio y banco de
// preguntas). Los modulos de lib/content/apuntes/ y lib/content/bancos/
// exportan arrays de estos tipos, anclados a los temas por slug.

export interface SeedApunte {
  temaSlug: string;
  titulo: string;
  resumen: string;
  contenido: string;
  puntosClave: string[];
}

export interface SeedPregunta {
  enunciado: string;
  opciones: [string, string, string, string];
  correctaIndex: 0 | 1 | 2 | 3;
  explicacion: string;
  fuente: string;
  dificultad: "facil" | "media" | "dificil";
  temaSlug: string;
  oficial?: boolean;
}
