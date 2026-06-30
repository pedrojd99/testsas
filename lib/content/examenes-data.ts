// Examenes oficiales historicos de muestra. Estructura lista para cargar
// examenes reales completos (enunciados + opciones + correccion + tema).
// El contenido es una muestra de ejemplo; sustituye por el examen real.

export interface SeedExamenPregunta {
  enunciado: string;
  opciones: [string, string, string, string];
  correctaIndex: 0 | 1 | 2 | 3;
  explicacion: string;
  fuente: string;
  temaSlug: string;
}

export interface SeedExamen {
  categoriaSlug: string;
  anio: number;
  titulo: string;
  descripcion: string;
  tiempoMin: number;
  preguntas: SeedExamenPregunta[];
}

export const SEED_EXAMENES: SeedExamen[] = [
  {
    categoriaSlug: "celador",
    anio: 2023,
    titulo: "Examen Celador/a SAS (muestra)",
    descripcion: "Modelo de examen de ejemplo con la estructura y correccion reales.",
    tiempoMin: 20,
    preguntas: [
      {
        enunciado: "Conforme a la Constitucion Espanola, la soberania nacional reside en:",
        opciones: [
          "El Rey",
          "El pueblo espanol, del que emanan los poderes del Estado",
          "Las Cortes Generales",
          "El Gobierno de la Nacion",
        ],
        correctaIndex: 1,
        explicacion:
          "El articulo 1.2 CE establece que la soberania nacional reside en el pueblo espanol.",
        fuente: "Constitucion Espanola, art. 1.2",
        temaSlug: "constitucion",
      },
      {
        enunciado: "El derecho a la proteccion de la salud se recoge en el articulo:",
        opciones: ["41 CE", "43 CE", "27 CE", "35 CE"],
        correctaIndex: 1,
        explicacion: "El articulo 43 CE reconoce el derecho a la proteccion de la salud.",
        fuente: "Constitucion Espanola, art. 43",
        temaSlug: "constitucion",
      },
      {
        enunciado: "Segun la Ley 31/1995 de PRL, el coste de las medidas de seguridad y salud:",
        opciones: [
          "Se reparte entre empresa y trabajador",
          "Lo asume integramente el trabajador",
          "No debera recaer en modo alguno sobre los trabajadores",
          "Lo asume la Seguridad Social",
        ],
        correctaIndex: 2,
        explicacion:
          "El art. 14 LPRL establece que el coste no puede recaer sobre los trabajadores.",
        fuente: "Ley 31/1995, art. 14",
        temaSlug: "prl",
      },
      {
        enunciado: "Entre las funciones del celador NO se encuentra:",
        opciones: [
          "Trasladar pacientes dentro del centro",
          "Vigilar los accesos del centro",
          "Realizar curas a los pacientes",
          "Ayudar en la movilizacion de enfermos",
        ],
        correctaIndex: 2,
        explicacion: "Las curas son competencia del personal sanitario, no del celador.",
        fuente: "Estatuto de Personal No Sanitario, funciones del celador",
        temaSlug: "funciones-celador",
      },
      {
        enunciado: "En la movilizacion de cargas, la mecanica corporal correcta recomienda:",
        opciones: [
          "Flexionar la espalda con las piernas rectas",
          "Flexionar las rodillas manteniendo la espalda recta",
          "Girar el tronco al levantar",
          "Separar la carga del cuerpo",
        ],
        correctaIndex: 1,
        explicacion:
          "Se flexionan las rodillas, se mantiene la espalda recta y se acerca la carga al cuerpo.",
        fuente: "Manual de higiene postural y mecanica corporal",
        temaSlug: "movilizacion-pacientes",
      },
      {
        enunciado: "Segun la Ley 41/2002, el consentimiento informado, como regla general, es:",
        opciones: [
          "Siempre por escrito",
          "Verbal, salvo los supuestos que la ley exige por escrito",
          "Innecesario",
          "Otorgado por el celador",
        ],
        correctaIndex: 1,
        explicacion:
          "El consentimiento es verbal por regla general; por escrito en cirugia y procedimientos invasores (art. 8.2).",
        fuente: "Ley 41/2002, art. 8.2",
        temaSlug: "autonomia-paciente",
      },
    ],
  },
];
