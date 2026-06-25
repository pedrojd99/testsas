// Banco inicial de contenido para el seed. Ampliable: cada pregunta lleva su
// fuente (cita legal/temario) como exige el dominio de oposiciones.

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

export interface SeedTema {
  slug: string;
  nombre: string;
  bloque: "comun" | "especifica";
}

export interface SeedCategoria {
  slug: string;
  nombre: string;
  descripcion: string;
  temas: SeedTema[];
  preguntas: SeedPregunta[];
}

// Temas comunes a casi todas las categorias del SAS (parte general)
const TEMAS_COMUNES: SeedTema[] = [
  { slug: "constitucion", nombre: "La Constitucion Espanola de 1978", bloque: "comun" },
  { slug: "estatuto-andalucia", nombre: "Estatuto de Autonomia para Andalucia", bloque: "comun" },
  { slug: "estatuto-marco", nombre: "Estatuto Marco (Ley 55/2003)", bloque: "comun" },
  { slug: "prl", nombre: "Prevencion de Riesgos Laborales (Ley 31/1995)", bloque: "comun" },
  { slug: "autonomia-paciente", nombre: "Autonomia del paciente (Ley 41/2002)", bloque: "comun" },
];

const PREGUNTAS_COMUNES: SeedPregunta[] = [
  {
    enunciado:
      "Segun la Constitucion Espanola, Espana se constituye en un Estado social y democratico de Derecho que propugna como valores superiores de su ordenamiento juridico:",
    opciones: [
      "La libertad, la justicia, la igualdad y el pluralismo politico",
      "La libertad, la solidaridad, la igualdad y la democracia",
      "La justicia, la igualdad, la dignidad y la libertad",
      "La libertad, la justicia, la seguridad y el pluralismo politico",
    ],
    correctaIndex: 0,
    explicacion:
      "El articulo 1.1 CE enumera como valores superiores la libertad, la justicia, la igualdad y el pluralismo politico.",
    fuente: "Constitucion Espanola, art. 1.1",
    dificultad: "facil",
    temaSlug: "constitucion",
  },
  {
    enunciado:
      "El derecho a la proteccion de la salud se reconoce en la Constitucion Espanola en su articulo:",
    opciones: ["Articulo 41", "Articulo 43", "Articulo 49", "Articulo 51"],
    correctaIndex: 1,
    explicacion:
      "El articulo 43 CE reconoce el derecho a la proteccion de la salud y atribuye a los poderes publicos la organizacion y tutela de la salud publica.",
    fuente: "Constitucion Espanola, art. 43",
    dificultad: "media",
    temaSlug: "constitucion",
  },
  {
    enunciado:
      "Conforme al Estatuto Marco del personal estatutario de los servicios de salud, el personal estatutario se clasifica atendiendo a:",
    opciones: [
      "Unicamente a la funcion desarrollada",
      "La funcion desarrollada, el nivel del titulo exigido y el tipo de su nombramiento",
      "El nivel retributivo y la antiguedad",
      "El centro de destino y la categoria profesional",
    ],
    correctaIndex: 1,
    explicacion:
      "La Ley 55/2003 clasifica al personal estatutario atendiendo a la funcion desarrollada, al nivel del titulo exigido para el ingreso y al tipo de su nombramiento.",
    fuente: "Ley 55/2003, Estatuto Marco, art. 5",
    dificultad: "media",
    temaSlug: "estatuto-marco",
  },
  {
    enunciado:
      "Segun la Ley 31/1995 de Prevencion de Riesgos Laborales, la accion preventiva en la empresa se planifica a partir de:",
    opciones: [
      "La formacion de los trabajadores",
      "Una evaluacion inicial de los riesgos para la seguridad y salud de los trabajadores",
      "El reglamento de regimen interior",
      "La auditoria externa obligatoria",
    ],
    correctaIndex: 1,
    explicacion:
      "El empresario debe planificar la accion preventiva a partir de una evaluacion inicial de los riesgos (art. 16 LPRL).",
    fuente: "Ley 31/1995, art. 16",
    dificultad: "media",
    temaSlug: "prl",
  },
  {
    enunciado:
      "De acuerdo con la Ley 41/2002, como regla general el consentimiento informado del paciente sera:",
    opciones: [
      "Siempre por escrito",
      "Verbal, salvo en intervencion quirurgica y procedimientos invasores donde sera por escrito",
      "Tacito en todos los casos",
      "Otorgado siempre por un familiar",
    ],
    correctaIndex: 1,
    explicacion:
      "El consentimiento sera verbal por regla general, prestandose por escrito en intervencion quirurgica, procedimientos diagnosticos y terapeuticos invasores y los que supongan riesgos notorios.",
    fuente: "Ley 41/2002, art. 8.2",
    dificultad: "dificil",
    temaSlug: "autonomia-paciente",
  },
];

export const SEED_CATEGORIAS: SeedCategoria[] = [
  {
    slug: "celador",
    nombre: "Celador/a",
    descripcion:
      "Categoria con mayor numero de plazas y temario breve. Parte comun + funciones del celador.",
    temas: [
      ...TEMAS_COMUNES,
      { slug: "funciones-celador", nombre: "Funciones del celador", bloque: "especifica" },
      {
        slug: "movilizacion-pacientes",
        nombre: "Movilizacion y traslado de pacientes",
        bloque: "especifica",
      },
      {
        slug: "celador-mortuorio",
        nombre: "El celador en la unidad de mortuorio",
        bloque: "especifica",
      },
    ],
    preguntas: [
      ...PREGUNTAS_COMUNES,
      {
        enunciado: "Entre las funciones del celador NO se encuentra:",
        opciones: [
          "Trasladar a los pacientes dentro del centro",
          "Vigilar los accesos y permanencia de personas ajenas",
          "Administrar la medicacion pautada a los pacientes",
          "Ayudar al personal sanitario en la movilizacion de pacientes",
        ],
        correctaIndex: 2,
        explicacion:
          "La administracion de medicacion es competencia del personal sanitario (enfermeria), nunca del celador. El celador colabora en traslados, vigilancia y movilizacion.",
        fuente: "Estatuto de Personal No Sanitario, funciones del celador",
        dificultad: "facil",
        temaSlug: "funciones-celador",
      },
      {
        enunciado:
          "En la movilizacion de un paciente encamado, para evitar lesiones de espalda el celador debe:",
        opciones: [
          "Flexionar la cintura manteniendo las piernas rectas",
          "Flexionar las rodillas y mantener la espalda recta, acercando la carga al cuerpo",
          "Girar el tronco bruscamente hacia la cama",
          "Levantar el peso con los brazos extendidos lejos del cuerpo",
        ],
        correctaIndex: 1,
        explicacion:
          "La mecanica corporal correcta exige flexionar rodillas, mantener la espalda recta y acercar la carga al centro de gravedad del cuerpo.",
        fuente: "Manual de higiene postural y mecanica corporal",
        dificultad: "facil",
        temaSlug: "movilizacion-pacientes",
      },
    ],
  },
  {
    slug: "tcae",
    nombre: "Tecnico/a en Cuidados Auxiliares de Enfermeria (TCAE)",
    descripcion:
      "Una de las categorias con mas plazas. Cuidados auxiliares, higiene y atencion al paciente.",
    temas: [
      ...TEMAS_COMUNES,
      { slug: "higiene-paciente", nombre: "Higiene y aseo del paciente", bloque: "especifica" },
      { slug: "constantes-vitales", nombre: "Constantes vitales", bloque: "especifica" },
      {
        slug: "ulceras-presion",
        nombre: "Prevencion de ulceras por presion",
        bloque: "especifica",
      },
    ],
    preguntas: [
      ...PREGUNTAS_COMUNES,
      {
        enunciado:
          "El valor normal de la frecuencia cardiaca en reposo en un adulto sano se situa aproximadamente entre:",
        opciones: ["40-50 lpm", "60-100 lpm", "100-120 lpm", "120-140 lpm"],
        correctaIndex: 1,
        explicacion:
          "La frecuencia cardiaca normal en reposo del adulto oscila entre 60 y 100 latidos por minuto. Por debajo se habla de bradicardia y por encima de taquicardia.",
        fuente: "Tecnicas basicas de enfermeria, constantes vitales",
        dificultad: "facil",
        temaSlug: "constantes-vitales",
      },
      {
        enunciado:
          "Para prevenir las ulceras por presion en un paciente encamado, los cambios posturales se realizan generalmente cada:",
        opciones: ["12 horas", "8 horas", "2-3 horas", "Una vez al dia"],
        correctaIndex: 2,
        explicacion:
          "Se recomienda realizar cambios posturales cada 2-3 horas para redistribuir la presion y prevenir las ulceras por presion.",
        fuente: "Guia de prevencion de ulceras por presion (GNEAUPP)",
        dificultad: "media",
        temaSlug: "ulceras-presion",
      },
    ],
  },
  {
    slug: "enfermeria",
    nombre: "Enfermero/a",
    descripcion:
      "Temario amplio: parte comun + proceso enfermero, farmacologia y cuidados especializados.",
    temas: [
      ...TEMAS_COMUNES,
      {
        slug: "proceso-enfermero",
        nombre: "Proceso de atencion de enfermeria (PAE)",
        bloque: "especifica",
      },
      {
        slug: "administracion-medicacion",
        nombre: "Administracion de medicacion",
        bloque: "especifica",
      },
    ],
    preguntas: [
      ...PREGUNTAS_COMUNES,
      {
        enunciado: "Las etapas del Proceso de Atencion de Enfermeria (PAE) son, en orden:",
        opciones: [
          "Valoracion, diagnostico, planificacion, ejecucion y evaluacion",
          "Diagnostico, valoracion, ejecucion, planificacion y evaluacion",
          "Valoracion, planificacion, diagnostico, evaluacion y ejecucion",
          "Planificacion, valoracion, diagnostico, ejecucion y evaluacion",
        ],
        correctaIndex: 0,
        explicacion:
          "El PAE consta de cinco etapas secuenciales: valoracion, diagnostico, planificacion, ejecucion y evaluacion.",
        fuente: "Proceso de Atencion de Enfermeria, metodologia",
        dificultad: "media",
        temaSlug: "proceso-enfermero",
      },
      {
        enunciado:
          "Entre los 'cinco correctos' en la administracion segura de medicacion se incluye:",
        opciones: [
          "Paciente correcto, medicamento correcto, dosis correcta, via correcta y hora correcta",
          "Paciente, color, dosis, via y temperatura correctos",
          "Medicamento, sabor, dosis, via y hora correctos",
          "Paciente, medicamento, prescriptor, via y coste correctos",
        ],
        correctaIndex: 0,
        explicacion:
          "La regla clasica de seguridad incluye los cinco correctos: paciente, medicamento, dosis, via y hora correctos.",
        fuente: "Seguridad del paciente, administracion de medicamentos",
        dificultad: "facil",
        temaSlug: "administracion-medicacion",
      },
    ],
  },
  {
    slug: "aux-administrativo",
    nombre: "Auxiliar Administrativo",
    descripcion:
      "Temario transversal: parte comun + procedimiento administrativo, informatica y gestion.",
    temas: [
      ...TEMAS_COMUNES,
      {
        slug: "procedimiento-administrativo",
        nombre: "Procedimiento administrativo comun (Ley 39/2015)",
        bloque: "especifica",
      },
      {
        slug: "documentos-archivo",
        nombre: "Documentos, registro y archivo",
        bloque: "especifica",
      },
    ],
    preguntas: [
      ...PREGUNTAS_COMUNES,
      {
        enunciado:
          "Segun la Ley 39/2015, el plazo general para resolver y notificar cuando una norma no fije un plazo especifico es de:",
        opciones: ["10 dias", "Un mes", "Tres meses", "Seis meses"],
        correctaIndex: 2,
        explicacion:
          "Cuando las normas reguladoras no fijen plazo, este sera de tres meses (art. 21.3 de la Ley 39/2015).",
        fuente: "Ley 39/2015, art. 21.3",
        dificultad: "media",
        temaSlug: "procedimiento-administrativo",
      },
      {
        enunciado:
          "De acuerdo con la Ley 39/2015, los registros electronicos de las Administraciones permiten la presentacion de documentos:",
        opciones: [
          "Solo en dias y horas habiles",
          "Todos los dias del ano durante las 24 horas",
          "Unicamente de lunes a viernes en horario de oficina",
          "Solo mediante cita previa presencial",
        ],
        correctaIndex: 1,
        explicacion:
          "El registro electronico permite la presentacion de documentos todos los dias del ano durante las veinticuatro horas (art. 31.2 Ley 39/2015).",
        fuente: "Ley 39/2015, art. 31.2",
        dificultad: "media",
        temaSlug: "procedimiento-administrativo",
      },
    ],
  },
];
