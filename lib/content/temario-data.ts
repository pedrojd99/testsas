// Fragmentos de temario que sirven de FUENTE para el generador de preguntas.
// Cada fragmento se ancla a un tema (por slug) y lleva su cita legal exacta.
// Amplia este banco pegando el temario real de cada categoria.

export interface SeedTemario {
  temaSlug: string;
  titulo: string;
  fuente: string;
  contenido: string;
}

export const SEED_TEMARIO: SeedTemario[] = [
  {
    temaSlug: "constitucion",
    titulo: "Valores superiores y derechos fundamentales",
    fuente: "Constitucion Espanola de 1978, arts. 1, 14, 15 y 43",
    contenido: `Articulo 1.1: Espana se constituye en un Estado social y democratico de Derecho, que propugna como valores superiores de su ordenamiento juridico la libertad, la justicia, la igualdad y el pluralismo politico.
Articulo 1.3: La forma politica del Estado espanol es la Monarquia parlamentaria.
Articulo 14: Los espanoles son iguales ante la ley, sin que pueda prevalecer discriminacion alguna por razon de nacimiento, raza, sexo, religion, opinion o cualquier otra condicion o circunstancia personal o social.
Articulo 15: Todos tienen derecho a la vida y a la integridad fisica y moral, sin que, en ningun caso, puedan ser sometidos a tortura ni a penas o tratos inhumanos o degradantes.
Articulo 43: Se reconoce el derecho a la proteccion de la salud. Compete a los poderes publicos organizar y tutelar la salud publica a traves de medidas preventivas y de las prestaciones y servicios necesarios.`,
  },
  {
    temaSlug: "estatuto-marco",
    titulo: "Clasificacion y derechos del personal estatutario",
    fuente: "Ley 55/2003, de 16 de diciembre, del Estatuto Marco, arts. 5 y 17",
    contenido: `Articulo 5: El personal estatutario se clasifica atendiendo a la funcion desarrollada, al nivel del titulo exigido para el ingreso y al tipo de su nombramiento. Segun la funcion se clasifica en personal estatutario sanitario y personal estatutario de gestion y servicios.
Articulo 6: El personal estatutario sanitario es el que ostenta esta condicion en virtud de nombramiento expedido para el desempeno de una profesion o especialidad sanitaria. Se divide en personal de formacion universitaria y personal de formacion profesional.
Articulo 17: El personal estatutario tiene derecho a la estabilidad en el empleo y al ejercicio efectivo de la profesion, a la percepcion de las retribuciones correspondientes y a la jornada y descansos establecidos.`,
  },
  {
    temaSlug: "prl",
    titulo: "Principios de la accion preventiva",
    fuente: "Ley 31/1995, de 8 de noviembre, de Prevencion de Riesgos Laborales, arts. 15 y 16",
    contenido: `Articulo 15: El empresario aplicara las medidas preventivas con arreglo a los siguientes principios generales: evitar los riesgos; evaluar los riesgos que no se puedan evitar; combatir los riesgos en su origen; adaptar el trabajo a la persona; tener en cuenta la evolucion de la tecnica; sustituir lo peligroso por lo que entrane poco o ningun peligro; planificar la prevencion; anteponer la proteccion colectiva a la individual; y dar las debidas instrucciones a los trabajadores.
Articulo 16: La prevencion de riesgos laborales debera integrarse en el sistema general de gestion de la empresa. Los instrumentos esenciales para la gestion y aplicacion del plan de prevencion son la evaluacion de riesgos y la planificacion de la actividad preventiva. El empresario debera realizar una evaluacion inicial de los riesgos para la seguridad y salud de los trabajadores.`,
  },
  {
    temaSlug: "autonomia-paciente",
    titulo: "Consentimiento informado e historia clinica",
    fuente: "Ley 41/2002, de 14 de noviembre, arts. 8 y 9",
    contenido: `Articulo 8.2: El consentimiento sera verbal por regla general. Sin embargo, se prestara por escrito en los casos siguientes: intervencion quirurgica, procedimientos diagnosticos y terapeuticos invasores y, en general, aplicacion de procedimientos que suponen riesgos o inconvenientes de notoria y previsible repercusion negativa sobre la salud del paciente.
Articulo 9.2: Los facultativos podran llevar a cabo las intervenciones clinicas indispensables a favor de la salud del paciente, sin necesidad de contar con su consentimiento, cuando exista riesgo para la salud publica o cuando exista riesgo inmediato grave para la integridad fisica o psiquica del enfermo y no sea posible conseguir su autorizacion.
Articulo 9.3: Se otorgara el consentimiento por representacion cuando el paciente no sea capaz de tomar decisiones o cuando sea menor de edad no capaz intelectual ni emocionalmente de comprender el alcance de la intervencion.`,
  },
  {
    temaSlug: "procedimiento-administrativo",
    titulo: "Plazos y registro electronico",
    fuente: "Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Comun, arts. 21 y 31",
    contenido: `Articulo 21.2: El plazo maximo para resolver y notificar las resoluciones sera el fijado por la norma reguladora del procedimiento, sin que pueda exceder de seis meses salvo que una norma con rango de Ley o el Derecho de la Union Europea establezcan uno mayor.
Articulo 21.3: Cuando las normas reguladoras de los procedimientos no fijen el plazo maximo, este sera de tres meses. Este plazo se contara, en los procedimientos iniciados de oficio, desde la fecha del acuerdo de iniciacion; y en los iniciados a solicitud del interesado, desde la fecha de entrada de la solicitud en el registro electronico de la Administracion competente.
Articulo 31.2: El registro electronico de cada Administracion u Organismo se regira a efectos de computo de los plazos por la fecha y hora oficial de la sede electronica de acceso, debiendo permitir la presentacion de documentos todos los dias del ano durante las veinticuatro horas.`,
  },
  {
    temaSlug: "funciones-celador",
    titulo: "Funciones del celador",
    fuente:
      "Estatuto de Personal No Sanitario de las Instituciones Sanitarias de la Seguridad Social, art. 14",
    contenido:
      "El celador realizara, entre otras, las siguientes funciones: tramitar o conducir sin tardanza las comunicaciones verbales, documentos, correspondencia u objetos que les sean confiados; trasladar y trasportar a los pacientes dentro del centro, tanto los servicios clinicos como complementarios; vigilar los accesos y la permanencia de los familiares y visitantes en las habitaciones; ayudar al personal sanitario en la movilizacion y traslado de los enfermos que precisen un trato especial. El celador NO podra en ningun caso administrar medicamentos ni realizar curas a los pacientes, funciones reservadas al personal sanitario.",
  },
  {
    temaSlug: "constantes-vitales",
    titulo: "Valores normales de las constantes vitales",
    fuente: "Manual de tecnicas basicas de enfermeria, constantes vitales",
    contenido:
      "Las constantes vitales son indicadores del estado fisiologico del paciente. Valores de referencia en el adulto sano en reposo: frecuencia cardiaca entre 60 y 100 latidos por minuto (por debajo se denomina bradicardia y por encima taquicardia); frecuencia respiratoria entre 12 y 20 respiraciones por minuto; temperatura corporal normal entre 36 y 37 grados centigrados; tension arterial considerada normal en torno a 120/80 mmHg. La saturacion de oxigeno normal se situa entre el 95 y el 100 por ciento.",
  },
];
