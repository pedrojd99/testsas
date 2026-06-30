// Guia de la convocatoria del SAS: requisitos, sistema de seleccion, baremo,
// plazos, modalidades y normativa. Contenido de orientacion al opositor.
//
// IMPORTANTE: las cifras y fechas concretas de cada OPE se fijan en las BASES
// oficiales (BOJA). Lo marcado como "orientativo" puede variar por convocatoria.

export interface Modalidad {
  nombre: string;
  descripcion: string;
  cupo?: string;
}

export interface FaseSeleccion {
  nombre: string;
  peso: string;
  descripcion: string;
}

export interface MeritoBaremo {
  bloque: string;
  detalle: string;
  pesoOrientativo?: string;
}

export interface Hito {
  fase: string;
  descripcion: string;
}

export interface Norma {
  titulo: string;
  referencia: string;
  ambito: "estatal" | "andalucia" | "bases";
}

export interface ExamenCategoria {
  preguntas: number;
  reserva: number;
  tiempoMin: number;
  penalizacion: string;
}

export interface CategoriaConvocatoria {
  slug: string;
  nombre: string;
  titulacion: string;
  grupo: string; // grupo/subgrupo de clasificacion profesional
  examen: ExamenCategoria;
}

export interface GuiaConvocatoria {
  ope: string;
  resumen: string;
  modalidades: Modalidad[];
  sistema: { tipo: string; fases: FaseSeleccion[] };
  requisitosGenerales: string[];
  baremo: MeritoBaremo[];
  plazos: Hito[];
  normativa: Norma[];
  faq: { pregunta: string; respuesta: string }[];
  categorias: CategoriaConvocatoria[];
}

export const GUIA_CONVOCATORIA: GuiaConvocatoria = {
  ope: "Oferta de Empleo Publico del SAS (horizonte 2027)",
  resumen:
    "El acceso a las categorias del Servicio Andaluz de Salud se realiza, con caracter general, por el sistema de concurso-oposicion: una fase de oposicion (examen tipo test) y una fase de concurso (baremo de meritos). Esta guia resume el marco comun; las cifras y fechas exactas se publican en las bases de cada convocatoria en el BOJA.",

  modalidades: [
    {
      nombre: "Acceso libre",
      descripcion:
        "Turno general, abierto a quien reuna los requisitos de la categoria. La mayor parte de las plazas.",
    },
    {
      nombre: "Promocion interna",
      descripcion:
        "Reservado a personal estatutario fijo con cierta antiguedad que opta a una categoria distinta, normalmente de grupo superior.",
    },
    {
      nombre: "Reserva por discapacidad",
      descripcion:
        "Cupo reservado a personas con discapacidad igual o superior al 33%, con adaptacion de tiempos y medios.",
      cupo: "minimo legal del 7% (orientativo)",
    },
    {
      nombre: "Estabilizacion",
      descripcion:
        "Procesos extraordinarios (Ley 20/2021) para reducir la temporalidad; pueden tener sistema y baremo propios.",
    },
  ],

  sistema: {
    tipo: "Concurso-oposicion",
    fases: [
      {
        nombre: "Fase de oposicion",
        peso: "mayoritaria (orientativo)",
        descripcion:
          "Examen tipo test sobre el temario de la categoria. Las respuestas erroneas penalizan. Es eliminatoria: hay que alcanzar la nota minima que fijen las bases.",
      },
      {
        nombre: "Fase de concurso",
        peso: "complementaria (orientativo)",
        descripcion:
          "Valoracion de meritos (experiencia, formacion, etc.) segun el baremo. Solo se valora a quien supera la fase de oposicion.",
      },
    ],
  },

  requisitosGenerales: [
    "Nacionalidad espanola o de un Estado miembro de la UE (u otros supuestos legales).",
    "Tener cumplidos 16 anos y no exceder la edad de jubilacion forzosa.",
    "Poseer la titulacion exigida para la categoria (ver mas abajo).",
    "Tener capacidad funcional para el desempeno de las tareas.",
    "No haber sido separado del servicio ni hallarse inhabilitado para el empleo publico.",
    "Abonar la tasa de examen (con exenciones segun bases) y presentar la solicitud en plazo.",
  ],

  baremo: [
    {
      bloque: "Experiencia profesional",
      detalle:
        "Servicios prestados en la misma categoria u otras equivalentes, especialmente en el sistema sanitario publico.",
      pesoOrientativo: "el bloque de mayor peso del concurso",
    },
    {
      bloque: "Formacion",
      detalle:
        "Titulaciones, cursos de formacion continuada acreditada relacionados con la categoria, expediente academico.",
    },
    {
      bloque: "Otros meritos",
      detalle:
        "Docencia, publicaciones, ponencias y actividad cientifica, segun lo previsto en las bases.",
    },
  ],

  plazos: [
    {
      fase: "Publicacion de la OPE",
      descripcion:
        "Se aprueba y publica la Oferta de Empleo Publico con el numero de plazas por categoria.",
    },
    {
      fase: "Convocatoria y bases",
      descripcion:
        "El BOJA publica las bases especificas: requisitos, plazos, temario, sistema y baremo.",
    },
    {
      fase: "Plazo de solicitudes",
      descripcion:
        "Periodo para inscribirse y abonar la tasa (habitualmente unos 20 dias habiles).",
    },
    {
      fase: "Lista de admitidos",
      descripcion:
        "Listas provisionales y definitivas de personas admitidas y excluidas, con plazo de subsanacion.",
    },
    {
      fase: "Examen (fase de oposicion)",
      descripcion: "Realizacion del examen tipo test en la fecha y sede senaladas.",
    },
    {
      fase: "Correccion y nota de corte",
      descripcion:
        "Publicacion de la plantilla, plazo de alegaciones y resultados de la oposicion.",
    },
    {
      fase: "Fase de concurso",
      descripcion: "Presentacion y valoracion de meritos de quienes superan la oposicion.",
    },
    {
      fase: "Adjudicacion y toma de posesion",
      descripcion: "Eleccion de plaza por orden de puntuacion y nombramiento.",
    },
  ],

  normativa: [
    {
      titulo: "Estatuto Basico del Empleado Publico",
      referencia: "Real Decreto Legislativo 5/2015 (TREBEP)",
      ambito: "estatal",
    },
    {
      titulo: "Estatuto Marco del personal estatutario",
      referencia: "Ley 55/2003, de 16 de diciembre",
      ambito: "estatal",
    },
    {
      titulo: "Medidas para reducir la temporalidad (estabilizacion)",
      referencia: "Ley 20/2021, de 28 de diciembre",
      ambito: "estatal",
    },
    {
      titulo: "Seleccion de personal estatutario del SAS",
      referencia: "Decreto 136/2001 y normativa autonomica de desarrollo",
      ambito: "andalucia",
    },
    {
      titulo: "Bases especificas de la convocatoria",
      referencia: "Resolucion de la Direccion General de Personal del SAS (BOJA)",
      ambito: "bases",
    },
  ],

  faq: [
    {
      pregunta: "Como se corrige el examen?",
      respuesta:
        "Es un test de respuesta multiple en el que las respuestas erroneas penalizan (habitualmente restan una fraccion del valor de un acierto). Las preguntas en blanco no penalizan. La nota minima para superar la oposicion la fijan las bases.",
    },
    {
      pregunta: "Que diferencia hay entre oposicion y concurso-oposicion?",
      respuesta:
        "En el SAS el sistema general es concurso-oposicion: primero el examen (oposicion) y, si se supera, se valoran los meritos (concurso). La nota final combina ambas fases segun el peso de las bases.",
    },
    {
      pregunta: "Necesito experiencia previa para presentarme?",
      respuesta:
        "No para el turno libre: basta con cumplir los requisitos y la titulacion. La experiencia suma en la fase de concurso, pero no es obligatoria para opositar.",
    },
    {
      pregunta: "Donde se publican las fechas oficiales?",
      respuesta:
        "En el Boletin Oficial de la Junta de Andalucia (BOJA) y en el portal del SAS. Esta guia es orientativa; ante cualquier duda, prevalecen las bases oficiales.",
    },
  ],

  categorias: [
    {
      slug: "celador",
      nombre: "Celador/a",
      titulacion: "Certificado de escolaridad o equivalente.",
      grupo: "Agrupaciones profesionales (sin requisito de titulacion academica)",
      examen: { preguntas: 100, reserva: 10, tiempoMin: 120, penalizacion: "las erroneas restan" },
    },
    {
      slug: "tcae",
      nombre: "Tecnico/a en Cuidados Auxiliares de Enfermeria",
      titulacion:
        "Titulo de Tecnico en Cuidados Auxiliares de Enfermeria (FP grado medio) o equivalente.",
      grupo: "Tecnico (formacion profesional grado medio)",
      examen: { preguntas: 100, reserva: 10, tiempoMin: 120, penalizacion: "las erroneas restan" },
    },
    {
      slug: "enfermeria",
      nombre: "Enfermero/a",
      titulacion: "Grado o Diplomatura en Enfermeria.",
      grupo: "Tecnico superior / formacion universitaria",
      examen: { preguntas: 100, reserva: 10, tiempoMin: 120, penalizacion: "las erroneas restan" },
    },
    {
      slug: "aux-administrativo",
      nombre: "Auxiliar Administrativo",
      titulacion: "Titulo de Graduado en ESO o equivalente.",
      grupo: "Tecnico (formacion profesional / ESO)",
      examen: { preguntas: 100, reserva: 10, tiempoMin: 120, penalizacion: "las erroneas restan" },
    },
  ],
};
