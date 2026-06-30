// Apuntes de muestra del temario comun, para que la seccion de estudio y el
// audio funcionen sin necesidad de generar con IA. El resto se genera con
// `pnpm gen-temario`.

export interface SeedApunte {
  temaSlug: string;
  titulo: string;
  resumen: string;
  contenido: string;
  puntosClave: string[];
}

export const SEED_APUNTES: SeedApunte[] = [
  {
    temaSlug: "constitucion",
    titulo: "La Constitucion Espanola de 1978",
    resumen:
      "Norma suprema del ordenamiento juridico espanol: estructura del Estado, valores superiores, derechos fundamentales y su garantia.",
    contenido: `INTRODUCCION
La Constitucion Espanola fue aprobada por las Cortes el 31 de octubre de 1978, ratificada en referendum el 6 de diciembre y sancionada por el Rey el 27 de diciembre. Es la norma suprema del ordenamiento juridico, a la que se subordinan todas las demas.

VALORES Y CARACTERISTICAS DEL ESTADO
El articulo 1.1 define Espana como un Estado social y democratico de Derecho que propugna como valores superiores la libertad, la justicia, la igualdad y el pluralismo politico. La soberania nacional reside en el pueblo espanol, del que emanan los poderes del Estado. La forma politica del Estado es la Monarquia parlamentaria.

DERECHOS FUNDAMENTALES
El Titulo I regula los derechos y deberes fundamentales. El articulo 14 proclama la igualdad ante la ley sin discriminacion. El articulo 15 reconoce el derecho a la vida y a la integridad fisica y moral. Especial relevancia para el ambito sanitario tiene el articulo 43, que reconoce el derecho a la proteccion de la salud y encomienda a los poderes publicos organizar y tutelar la salud publica.

GARANTIA DE LOS DERECHOS
Los derechos vinculan a todos los poderes publicos. Los reconocidos en el articulo 14 y en la Seccion primera del Capitulo segundo gozan de una proteccion reforzada: tutela ante los tribunales ordinarios y, en su caso, recurso de amparo ante el Tribunal Constitucional.

ORGANIZACION DE LOS PODERES
Las Cortes Generales, formadas por el Congreso de los Diputados y el Senado, ejercen la potestad legislativa. El Gobierno dirige la politica y ejerce la funcion ejecutiva y la potestad reglamentaria. El poder judicial administra justicia. Territorialmente, el Estado se organiza en municipios, provincias y Comunidades Autonomas.`,
    puntosClave: [
      "Valores superiores (art. 1.1): libertad, justicia, igualdad y pluralismo politico",
      "Forma del Estado: Monarquia parlamentaria",
      "Derecho a la proteccion de la salud: articulo 43",
      "Igualdad ante la ley: articulo 14",
      "Recurso de amparo ante el Tribunal Constitucional para los arts. 14 a 29",
    ],
  },
  {
    temaSlug: "estatuto-marco",
    titulo: "Estatuto Marco del personal estatutario (Ley 55/2003)",
    resumen:
      "Regula la relacion de empleo del personal estatutario de los servicios de salud: clasificacion, derechos y deberes.",
    contenido: `INTRODUCCION
La Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, establece las normas basicas de la relacion de empleo del personal que presta servicios en las instituciones sanitarias publicas.

CLASIFICACION DEL PERSONAL
Segun el articulo 5, el personal estatutario se clasifica atendiendo a tres criterios: la funcion desarrollada, el nivel del titulo exigido para el ingreso y el tipo de su nombramiento. Atendiendo a la funcion se distingue entre personal sanitario y personal de gestion y servicios. El personal sanitario se divide, segun el nivel academico, en personal de formacion universitaria y personal de formacion profesional.

TIPOS DE NOMBRAMIENTO
El personal estatutario fijo es el que, tras superar el proceso selectivo, obtiene nombramiento para una plaza con caracter permanente. El personal estatutario temporal se nombra por razones de necesidad, urgencia o para programas de caracter temporal, y puede ser interino, eventual o de sustitucion.

DERECHOS Y DEBERES
El articulo 17 reconoce derechos individuales como la estabilidad en el empleo, la percepcion puntual de las retribuciones, el descanso, la formacion continuada y la carrera profesional. Entre los deberes del articulo 19 figuran respetar la Constitucion, ejercer la profesion con lealtad y eficacia, y mantener la confidencialidad de la informacion conocida por razon del trabajo.`,
    puntosClave: [
      "Clasificacion (art. 5): funcion, nivel del titulo y tipo de nombramiento",
      "Personal sanitario y de gestion y servicios",
      "Personal temporal: interino, eventual o de sustitucion",
      "Deber de confidencialidad de la informacion",
    ],
  },
  {
    temaSlug: "autonomia-paciente",
    titulo: "Autonomia del paciente (Ley 41/2002)",
    resumen:
      "Regula los derechos de informacion, el consentimiento informado y la historia clinica del paciente.",
    contenido: `INTRODUCCION
La Ley 41/2002, de 14 de noviembre, basica reguladora de la autonomia del paciente y de derechos y obligaciones en materia de informacion y documentacion clinica, desarrolla el respeto a la voluntad del paciente.

PRINCIPIOS BASICOS
El articulo 2 establece como principios la dignidad de la persona, el respeto a la autonomia de su voluntad y a su intimidad. Toda actuacion sanitaria requiere, con caracter general, el consentimiento previo del paciente, obtenido tras recibir una informacion adecuada. El paciente puede decidir entre las opciones clinicas y negarse al tratamiento, salvo las excepciones legales.

EL CONSENTIMIENTO INFORMADO
Como regla general el consentimiento es verbal. Sin embargo, se presta por escrito en la intervencion quirurgica, en procedimientos diagnosticos y terapeuticos invasores y en aquellos que supongan riesgos de notoria repercusion sobre la salud. Existe consentimiento por representacion cuando el paciente no es capaz de decidir o es menor sin capacidad de comprension.

LA HISTORIA CLINICA
La historia clinica recoge la informacion trascendental sobre el estado de salud del paciente y tiene como fin principal facilitar la asistencia. El paciente tiene derecho de acceso a su historia clinica y a obtener copia de sus datos.`,
    puntosClave: [
      "Consentimiento verbal por regla general; por escrito en cirugia y procedimientos invasores",
      "Consentimiento por representacion en pacientes no capaces",
      "Finalidad de la historia clinica: facilitar la asistencia",
      "Derecho de acceso del paciente a su historia clinica",
    ],
  },
  {
    temaSlug: "prl",
    titulo: "Prevencion de Riesgos Laborales (Ley 31/1995)",
    resumen:
      "Marco de derechos y obligaciones en seguridad y salud en el trabajo: accion preventiva y vigilancia de la salud.",
    contenido: `INTRODUCCION
La Ley 31/1995, de 8 de noviembre, de Prevencion de Riesgos Laborales, tiene por objeto promover la seguridad y la salud de los trabajadores mediante la aplicacion de medidas y actividades preventivas.

CONCEPTOS BASICOS
Se entiende por riesgo laboral la posibilidad de que un trabajador sufra un dano derivado del trabajo. El riesgo es grave e inminente cuando resulte probable que se materialice en un futuro inmediato y pueda suponer un dano grave para la salud.

DERECHO A LA PROTECCION
El articulo 14 reconoce el derecho de los trabajadores a una proteccion eficaz en materia de seguridad y salud, con el correlativo deber del empresario. El coste de las medidas preventivas no puede recaer sobre los trabajadores.

ACCION PREVENTIVA
El articulo 15 enumera los principios de la accion preventiva: evitar los riesgos, evaluar los inevitables, combatirlos en su origen, adaptar el trabajo a la persona y anteponer la proteccion colectiva a la individual. Los instrumentos esenciales son la evaluacion de riesgos y la planificacion de la actividad preventiva.

VIGILANCIA DE LA SALUD
El empresario garantiza la vigilancia periodica de la salud en funcion de los riesgos. Esta vigilancia es voluntaria para el trabajador, salvo excepciones legalmente previstas. El trabajador, por su parte, debe velar por su propia seguridad y la de los afectados por su actividad.`,
    puntosClave: [
      "El coste de la prevencion nunca recae sobre el trabajador",
      "Instrumentos: evaluacion de riesgos y planificacion preventiva",
      "Anteponer la proteccion colectiva a la individual",
      "La vigilancia de la salud es voluntaria, salvo excepciones",
    ],
  },
  {
    temaSlug: "proteccion-datos",
    titulo: "Proteccion de Datos y Transparencia",
    resumen:
      "Principios del RGPD y la LOPDGDD aplicados al ambito sanitario, y derecho de acceso a la informacion publica.",
    contenido: `INTRODUCCION
El tratamiento de datos personales se rige por el Reglamento General de Proteccion de Datos (Reglamento UE 2016/679) y por la Ley Organica 3/2018, de Proteccion de Datos Personales y garantia de los derechos digitales.

PRINCIPIOS DEL TRATAMIENTO
Los datos deben tratarse con licitud, lealtad y transparencia; recogerse con fines determinados y legitimos; ser adecuados y limitados a lo necesario; exactos y actualizados; conservarse el tiempo imprescindible; y tratarse garantizando su seguridad. Estos principios son especialmente exigentes con los datos de salud, que son categorias especiales de datos.

CONFIDENCIALIDAD Y CONSENTIMIENTO
Todas las personas que intervienen en el tratamiento estan sujetas al deber de confidencialidad, que se mantiene aun finalizada la relacion con el afectado. El consentimiento, cuando es la base del tratamiento, debe ser libre, especifico, informado e inequivoco.

TRANSPARENCIA PUBLICA
La Ley 1/2014 de Transparencia Publica de Andalucia regula la publicidad activa y el derecho de acceso a la informacion publica. Con caracter general, el ejercicio del derecho de acceso no exige motivar la solicitud, y la denegacion solo cabe cuando concurra un limite legalmente previsto.`,
    puntosClave: [
      "Datos de salud: categoria especial de datos, proteccion reforzada",
      "Deber de confidencialidad que perdura tras la relacion",
      "Consentimiento libre, especifico, informado e inequivoco",
      "El derecho de acceso a informacion publica no exige motivacion",
    ],
  },
];
