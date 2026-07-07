import type { SeedPregunta } from "../tipos";

export const BANCO_AUX_ADMINISTRATIVO: SeedPregunta[] = [
  // Tema 1: aux-seleccion-personal
  {
    enunciado:
      "Segun el articulo 9 de la Ley 55/2003, los nombramientos de personal estatutario temporal pueden ser:",
    opciones: [
      "De interino, eventual y de sustitucion",
      "De interino, fijo y eventual",
      "De sustitucion, refuerzo y eventual",
      "De interino, laboral y de sustitucion",
    ],
    correctaIndex: 0,
    explicacion:
      "El articulo 9 de la Ley 55/2003 distingue tres tipos de nombramiento temporal: interino, eventual y de sustitucion. El personal fijo o laboral no es una modalidad temporal.",
    fuente: "Ley 55/2003, art. 9",
    dificultad: "facil",
    temaSlug: "aux-seleccion-personal",
  },
  {
    enunciado: "El nombramiento de personal estatutario temporal interino se expide para:",
    opciones: [
      "Atender necesidades de caracter coyuntural o extraordinario",
      "El desempeno de una plaza vacante, cuando sea necesario atender las correspondientes funciones",
      "Sustituir a personal fijo durante situaciones que conlleven reserva de plaza",
      "Reforzar servicios durante periodos vacacionales",
    ],
    correctaIndex: 1,
    explicacion:
      "El interino ocupa una plaza vacante hasta su cobertura reglamentaria. El coyuntural corresponde al eventual y la reserva de plaza a la sustitucion.",
    fuente: "Ley 55/2003, art. 9.2",
    dificultad: "facil",
    temaSlug: "aux-seleccion-personal",
  },
  {
    enunciado: "En cual de estos supuestos procede un nombramiento de caracter eventual?",
    opciones: [
      "Para ocupar una plaza vacante hasta su cobertura reglamentaria",
      "Para sustituir a un trabajador con derecho a reserva de plaza",
      "Para la prestacion de servicios de naturaleza temporal, coyuntural o extraordinaria",
      "Para desempenar de forma permanente funciones estructurales",
    ],
    correctaIndex: 2,
    explicacion:
      "El nombramiento eventual atiende necesidades de naturaleza temporal, coyuntural o extraordinaria; nunca funciones permanentes ni estructurales.",
    fuente: "Ley 55/2003, art. 9.3",
    dificultad: "media",
    temaSlug: "aux-seleccion-personal",
  },
  {
    enunciado: "El nombramiento de sustitucion procede cuando:",
    opciones: [
      "Exista un exceso o acumulacion de tareas",
      "Se trate de cubrir de forma definitiva una plaza vacante",
      "Concurran razones de urgencia no previsibles",
      "Sea necesario atender las funciones de personal fijo o temporal durante ausencias que comporten reserva de la plaza",
    ],
    correctaIndex: 3,
    explicacion:
      "La sustitucion cubre ausencias del titular (fijo o temporal) que conllevan reserva de plaza, como excedencias o permisos.",
    fuente: "Ley 55/2003, art. 9.4",
    dificultad: "media",
    temaSlug: "aux-seleccion-personal",
  },
  {
    enunciado:
      "Cual de los siguientes NO es un tipo de nombramiento de personal estatutario temporal?",
    opciones: ["Interino", "De refuerzo estructural", "Eventual", "De sustitucion"],
    correctaIndex: 1,
    explicacion:
      "El refuerzo estructural no es una modalidad de nombramiento temporal en la Ley 55/2003; las tres modalidades son interino, eventual y de sustitucion.",
    fuente: "Ley 55/2003, art. 9",
    dificultad: "media",
    temaSlug: "aux-seleccion-personal",
  },
  {
    enunciado: "La inscripcion en la Bolsa Unica de Empleo Temporal del SAS se realiza:",
    opciones: [
      "De forma presencial en cada centro sanitario",
      "Unicamente durante los diez primeros dias de cada ano",
      "Por medios telematicos, con caracter permanente",
      "Mediante solicitud remitida por correo postal certificado",
    ],
    correctaIndex: 2,
    explicacion:
      "La bolsa unica del SAS se gestiona telematicamente y admite inscripcion permanente, sin necesidad de acudir presencialmente a los centros.",
    fuente: "Pacto de gestion de la Bolsa Unica del SAS",
    dificultad: "facil",
    temaSlug: "aux-seleccion-personal",
  },
  {
    enunciado:
      "En el baremo de meritos de la bolsa del SAS, el apartado con mayor peso en la puntuacion suele ser:",
    opciones: [
      "La formacion academica de grado",
      "Las publicaciones cientificas",
      "El conocimiento de idiomas",
      "La experiencia profesional",
    ],
    correctaIndex: 3,
    explicacion:
      "La experiencia profesional es el bloque con mayor peso en el baremo de la bolsa; la formacion e idiomas puntuan de forma complementaria.",
    fuente: "Pacto de gestion de la Bolsa Unica del SAS, baremo",
    dificultad: "media",
    temaSlug: "aux-seleccion-personal",
  },
  {
    enunciado: "La seleccion del personal estatutario se rige por los principios de:",
    opciones: [
      "Igualdad, merito, capacidad y publicidad",
      "Jerarquia, eficacia y coordinacion",
      "Antiguedad, disponibilidad y arraigo",
      "Confianza, discrecionalidad y oportunidad",
    ],
    correctaIndex: 0,
    explicacion:
      "La seleccion se rige por igualdad, merito, capacidad y publicidad, como garantia del acceso al empleo publico.",
    fuente: "Ley 55/2003, art. 29",
    dificultad: "media",
    temaSlug: "aux-seleccion-personal",
  },
  {
    enunciado: "El nombramiento de personal estatutario temporal:",
    opciones: [
      "Consolida la condicion de fijo transcurridos tres anos",
      "Equivale a una plaza en propiedad tras superar el periodo de prueba",
      "No otorga en ningun caso la condicion de personal estatutario fijo",
      "Convierte automaticamente al trabajador en funcionario de carrera",
    ],
    correctaIndex: 2,
    explicacion:
      "El nombramiento temporal nunca genera por si mismo la condicion de fijo, que solo se adquiere superando el proceso selectivo correspondiente.",
    fuente: "Ley 55/2003, art. 9.1",
    dificultad: "dificil",
    temaSlug: "aux-seleccion-personal",
  },
  {
    enunciado: "El personal estatutario eventual cesara:",
    opciones: [
      "Unicamente cuando la plaza se cubra por personal fijo",
      "Solo por sancion disciplinaria firme",
      "Cuando cumpla la edad de jubilacion forzosa",
      "Cuando se produzca la causa o venza el plazo que expresamente se determino en su nombramiento",
    ],
    correctaIndex: 3,
    explicacion:
      "El eventual cesa al cumplirse la causa o vencer el plazo fijado en el nombramiento, ya que responde a necesidades temporales concretas.",
    fuente: "Ley 55/2003, art. 9.3",
    dificultad: "media",
    temaSlug: "aux-seleccion-personal",
  },
  {
    enunciado: "Los meritos alegados por los aspirantes en la bolsa del SAS se valoran:",
    opciones: [
      "Hasta una fecha de corte determinada, con actualizacion periodica",
      "Solo en el momento de tomar posesion",
      "Sin limite temporal, incorporandose en tiempo real",
      "Exclusivamente los obtenidos durante el ano en curso",
    ],
    correctaIndex: 0,
    explicacion:
      "La bolsa establece cortes periodicos con una fecha de referencia para valorar los meritos, que se actualizan en cada nuevo periodo.",
    fuente: "Pacto de gestion de la Bolsa Unica del SAS",
    dificultad: "facil",
    temaSlug: "aux-seleccion-personal",
  },
  {
    enunciado:
      "En la gestion de la bolsa del SAS, los llamamientos para ofertar nombramientos temporales se efectuan:",
    opciones: [
      "Por riguroso orden alfabetico de los aspirantes",
      "Segun el orden de puntuacion obtenido en el listado correspondiente",
      "Por sorteo publico entre los inscritos",
      "Atendiendo a la fecha de inscripcion en la bolsa",
    ],
    correctaIndex: 1,
    explicacion:
      "Los llamamientos respetan el orden de puntuacion del listado, garantizando merito y capacidad, no el orden alfabetico ni la fecha de inscripcion.",
    fuente: "Pacto de gestion de la Bolsa Unica del SAS",
    dificultad: "dificil",
    temaSlug: "aux-seleccion-personal",
  },

  // Tema 2: aux-prl
  {
    enunciado: "El Real Decreto 488/1997 regula:",
    opciones: [
      "La prevencion de riesgos por exposicion al ruido",
      "La manipulacion manual de cargas",
      "La senalizacion de seguridad en los lugares de trabajo",
      "Las disposiciones minimas de seguridad y salud en el trabajo con equipos que incluyen pantallas de visualizacion",
    ],
    correctaIndex: 3,
    explicacion:
      "El RD 488/1997 fija las disposiciones minimas de seguridad y salud relativas al trabajo con pantallas de visualizacion de datos.",
    fuente: "RD 488/1997, art. 1",
    dificultad: "facil",
    temaSlug: "aux-prl",
  },
  {
    enunciado:
      "Segun los criterios de la Guia Tecnica del RD 488/1997, se considera trabajador usuario de pantallas, entre otros, a quien:",
    opciones: [
      "Utiliza la pantalla de forma esporadica",
      "Trabaja menos de dos horas diarias con pantalla",
      "Supera las cuatro horas diarias o veinte horas semanales de trabajo efectivo con pantallas",
      "Maneja exclusivamente cajas registradoras",
    ],
    correctaIndex: 2,
    explicacion:
      "La Guia Tecnica considera usuario a quien supera cuatro horas diarias o veinte semanales de trabajo efectivo con pantalla; el uso esporadico o breve no lo convierte en usuario.",
    fuente: "Guia Tecnica del RD 488/1997 (INSST)",
    dificultad: "media",
    temaSlug: "aux-prl",
  },
  {
    enunciado:
      "El empresario garantizara una vigilancia adecuada de la salud de los usuarios de pantallas, referida especialmente a:",
    opciones: [
      "El aparato respiratorio",
      "Los ojos y la vista",
      "El sistema cardiovascular",
      "El aparato digestivo",
    ],
    correctaIndex: 1,
    explicacion:
      "La vigilancia de la salud en el trabajo con pantallas se centra en los ojos y la vista, ademas de los problemas musculoesqueleticos y la carga mental.",
    fuente: "RD 488/1997, art. 4",
    dificultad: "facil",
    temaSlug: "aux-prl",
  },
  {
    enunciado:
      "El reconocimiento del estado de los ojos y la vista de los usuarios de pantallas debe ofrecerse:",
    opciones: [
      "Antes de comenzar a trabajar con la pantalla, periodicamente despues y cuando aparezcan trastornos que puedan deberse a ella",
      "Solo una vez, al finalizar la relacion laboral",
      "Exclusivamente cuando el trabajador lo solicite por escrito",
      "Unicamente cada cinco anos",
    ],
    correctaIndex: 0,
    explicacion:
      "El reconocimiento oftalmologico se ofrece antes de empezar, con posterioridad de forma periodica y cuando aparezcan trastornos que pudieran deberse al trabajo con pantalla.",
    fuente: "RD 488/1997, art. 4",
    dificultad: "media",
    temaSlug: "aux-prl",
  },
  {
    enunciado:
      "Para reducir la carga de trabajo con pantallas, el RD 488/1997 obliga al empresario a organizar la actividad de modo que:",
    opciones: [
      "Se limite la jornada a cuatro horas en todo caso",
      "Se sustituya la pantalla cada seis meses",
      "Se introduzcan pausas periodicas o cambios de actividad que reduzcan la carga",
      "Se prohiba el uso continuado de mas de diez minutos",
    ],
    correctaIndex: 2,
    explicacion:
      "La norma exige organizar el trabajo con pausas periodicas o alternancia de tareas para reducir la carga visual, fisica y mental.",
    fuente: "RD 488/1997, art. 3",
    dificultad: "media",
    temaSlug: "aux-prl",
  },
  {
    enunciado: "En cuanto al equipamiento del puesto con pantalla, el asiento de trabajo debe ser:",
    opciones: [
      "Fijo y sin respaldo para favorecer el movimiento",
      "Estable y regulable en altura, con respaldo reclinable y ajustable",
      "De altura fija normalizada para todos los puestos",
      "Necesariamente con reposabrazos rigidos",
    ],
    correctaIndex: 1,
    explicacion:
      "El asiento debe ser estable, regulable en altura y con respaldo reclinable y ajustable para adaptarse a cada trabajador.",
    fuente: "RD 488/1997, Anexo",
    dificultad: "facil",
    temaSlug: "aux-prl",
  },
  {
    enunciado: "Respecto al teclado del puesto con pantalla, el RD 488/1997 exige que sea:",
    opciones: [
      "Inclinable e independiente de la pantalla, para permitir una postura comoda",
      "De una sola pieza con la pantalla",
      "De tamano reducido y sin apoyo posible para las manos",
      "Retroiluminado en color para facilitar la lectura",
    ],
    correctaIndex: 0,
    explicacion:
      "El teclado debe ser inclinable e independiente de la pantalla, y disponer de espacio suficiente delante para apoyar manos y brazos.",
    fuente: "RD 488/1997, Anexo",
    dificultad: "media",
    temaSlug: "aux-prl",
  },
  {
    enunciado: "La pantalla de visualizacion debe reunir, entre otras, la caracteristica de:",
    opciones: [
      "Mostrar caracteres en un unico tamano no modificable",
      "Carecer de regulacion de brillo y contraste",
      "Estar fija al plano de la mesa sin posibilidad de giro",
      "Ser orientable e inclinable y estar libre de reflejos y reverberaciones molestas",
    ],
    correctaIndex: 3,
    explicacion:
      "La pantalla debe ser orientable e inclinable, con brillo y contraste regulables, y estar libre de reflejos molestos.",
    fuente: "RD 488/1997, Anexo",
    dificultad: "media",
    temaSlug: "aux-prl",
  },
  {
    enunciado: "El puesto de trabajo con pantalla debe disponer de un reposapies:",
    opciones: [
      "De manera obligatoria para todos los trabajadores",
      "Para quien lo desee o lo necesite",
      "Solo en puestos ocupados por personal directivo",
      "En ningun caso, por motivos de higiene",
    ],
    correctaIndex: 1,
    explicacion:
      "El reposapies se pondra a disposicion de quien lo desee o lo necesite, no es obligatorio para todos.",
    fuente: "RD 488/1997, Anexo",
    dificultad: "facil",
    temaSlug: "aux-prl",
  },
  {
    enunciado: "A cual de los siguientes equipos NO se aplica el RD 488/1997?",
    opciones: [
      "A las maquinas calculadoras, cajas registradoras y equipos con un pequeno dispositivo de visualizacion necesario para su uso directo",
      "A los ordenadores de sobremesa de una oficina administrativa",
      "A las estaciones de trabajo con pantalla de un centro de gestion",
      "A los terminales de consulta de datos de uso continuado",
    ],
    correctaIndex: 0,
    explicacion:
      "El RD 488/1997 excluye expresamente las calculadoras, cajas registradoras y equipos con pequenos dispositivos de visualizacion necesarios para su uso directo.",
    fuente: "RD 488/1997, art. 1.3",
    dificultad: "dificil",
    temaSlug: "aux-prl",
  },
  {
    enunciado:
      "La distancia de la vista a la pantalla, segun la Guia Tecnica de referencia, no deberia ser inferior a:",
    opciones: ["100 mm", "200 mm", "300 mm", "400 mm"],
    correctaIndex: 3,
    explicacion:
      "La Guia Tecnica recomienda que la distancia entre los ojos y la pantalla no sea inferior a 400 mm para un trabajo comodo.",
    fuente: "Guia Tecnica del RD 488/1997 (INSST)",
    dificultad: "dificil",
    temaSlug: "aux-prl",
  },
  {
    enunciado: "En relacion con los puestos con pantalla, el empresario esta obligado a:",
    opciones: [
      "Prohibir el uso de portatiles en todo caso",
      "Sustituir anualmente todo el mobiliario",
      "Evaluar los riesgos de estos puestos atendiendo a la carga visual, fisica y mental",
      "Reducir la plantilla expuesta a pantallas",
    ],
    correctaIndex: 2,
    explicacion:
      "El empresario debe evaluar los riesgos de los puestos con pantalla considerando la carga visual, la fatiga fisica y la carga mental.",
    fuente: "RD 488/1997, art. 3",
    dificultad: "media",
    temaSlug: "aux-prl",
  },

  // Tema 3: aux-regimen-juridico
  {
    enunciado:
      "Conforme al articulo 9 de la Ley 40/2015, los organos administrativos podran delegar el ejercicio de sus competencias:",
    opciones: [
      "Solamente en organos jerarquicamente inferiores",
      "En otros organos de la misma Administracion, aun cuando no sean jerarquicamente dependientes",
      "En cualquier persona fisica ajena a la Administracion",
      "Unicamente en organos de otra Administracion distinta",
    ],
    correctaIndex: 1,
    explicacion:
      "La delegacion cabe en organos de la misma Administracion aunque no exista dependencia jerarquica, e incluso en entidades de derecho publico vinculadas.",
    fuente: "Ley 40/2015, art. 9.1",
    dificultad: "facil",
    temaSlug: "aux-regimen-juridico",
  },
  {
    enunciado: "Cual de las siguientes competencias NO puede ser objeto de delegacion?",
    opciones: [
      "La tramitacion de expedientes de gestion ordinaria",
      "La firma de comunicaciones internas",
      "La instruccion de procedimientos rutinarios",
      "La resolucion de los recursos en los organos administrativos que hayan dictado los actos objeto de recurso",
    ],
    correctaIndex: 3,
    explicacion:
      "No es delegable la resolucion de recursos por el mismo organo que dicto el acto recurrido, ni las competencias sobre disposiciones de caracter general.",
    fuente: "Ley 40/2015, art. 9.2",
    dificultad: "dificil",
    temaSlug: "aux-regimen-juridico",
  },
  {
    enunciado: "La delegacion de competencias y su revocacion deberan:",
    opciones: [
      "Publicarse en el boletin oficial correspondiente",
      "Inscribirse en el Registro Civil",
      "Comunicarse solo verbalmente al organo delegado",
      "Aprobarse por referendum",
    ],
    correctaIndex: 0,
    explicacion:
      "Tanto la delegacion como su revocacion deben publicarse en el boletin oficial del Estado, de la Comunidad Autonoma o de la provincia, segun corresponda.",
    fuente: "Ley 40/2015, art. 9.3",
    dificultad: "media",
    temaSlug: "aux-regimen-juridico",
  },
  {
    enunciado: "La avocacion consiste en que un organo:",
    opciones: [
      "Delega su competencia en un organo inferior",
      "Encomienda a otro la realizacion de tareas materiales",
      "Superior asume para si el conocimiento de un asunto cuya resolucion corresponda ordinariamente o por delegacion a otro organo dependiente",
      "Renuncia definitivamente a su competencia",
    ],
    correctaIndex: 2,
    explicacion:
      "La avocacion permite al organo superior recabar para si un asunto concreto que correspondia a un organo dependiente, por circunstancias que lo justifiquen.",
    fuente: "Ley 40/2015, art. 10",
    dificultad: "facil",
    temaSlug: "aux-regimen-juridico",
  },
  {
    enunciado: "Contra el acuerdo de avocacion:",
    opciones: [
      "No cabra recurso, aunque podra impugnarse en el recurso que, en su caso, se interponga contra la resolucion del procedimiento",
      "Cabe siempre recurso de alzada en el plazo de un mes",
      "Cabe recurso de reposicion ante el organo avocante",
      "Cabe recurso contencioso-administrativo directo",
    ],
    correctaIndex: 0,
    explicacion:
      "El acuerdo de avocacion no es recurrible por si mismo, aunque puede impugnarse junto con la resolucion que ponga fin al procedimiento.",
    fuente: "Ley 40/2015, art. 10.2",
    dificultad: "media",
    temaSlug: "aux-regimen-juridico",
  },
  {
    enunciado: "La encomienda de gestion de actividades de caracter material o tecnico:",
    opciones: [
      "Transfiere la titularidad de la competencia al organo encomendado",
      "Requiere siempre autorizacion judicial previa",
      "No supone cesion de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio",
      "Solo puede realizarse entre organos jerarquicamente dependientes",
    ],
    correctaIndex: 2,
    explicacion:
      "La encomienda de gestion no cede la titularidad de la competencia; el organo encomendante sigue siendo responsable de dictar los actos que le den soporte.",
    fuente: "Ley 40/2015, art. 11",
    dificultad: "media",
    temaSlug: "aux-regimen-juridico",
  },
  {
    enunciado:
      "La suplencia de los titulares de los organos administrativos en casos de vacante, ausencia o enfermedad:",
    opciones: [
      "Supone una delegacion de competencias en el suplente",
      "No implicara alteracion de la competencia y se determinara por el organo competente",
      "Requiere publicacion en el BOE en todo caso",
      "Obliga a modificar la relacion de puestos de trabajo",
    ],
    correctaIndex: 1,
    explicacion:
      "La suplencia no altera la competencia del organo; solo cubre temporalmente a su titular, sin exigir publicacion en el boletin oficial.",
    fuente: "Ley 40/2015, art. 13",
    dificultad: "facil",
    temaSlug: "aux-regimen-juridico",
  },
  {
    enunciado: "Entre los motivos de abstencion del articulo 23 de la Ley 40/2015 figura:",
    opciones: [
      "Residir en el mismo municipio que el interesado",
      "Haber nacido el mismo ano que el interesado",
      "Pertenecer al mismo cuerpo o escala funcionarial",
      "Tener parentesco de consanguinidad dentro del cuarto grado o de afinidad dentro del segundo con cualquiera de los interesados",
    ],
    correctaIndex: 3,
    explicacion:
      "Es motivo de abstencion el parentesco de consanguinidad hasta el cuarto grado o de afinidad hasta el segundo con interesados, administradores o asesores.",
    fuente: "Ley 40/2015, art. 23.2",
    dificultad: "media",
    temaSlug: "aux-regimen-juridico",
  },
  {
    enunciado: "La autoridad o el personal en quien concurra un motivo de abstencion debe:",
    opciones: [
      "Continuar el procedimiento sin ninguna comunicacion",
      "Solicitar autorizacion a los interesados",
      "Delegar sin mas el asunto en un subordinado",
      "Abstenerse de intervenir en el procedimiento y comunicarlo a su superior inmediato",
    ],
    correctaIndex: 3,
    explicacion:
      "Quien concurra en causa de abstencion debe abstenerse y comunicarlo a su superior, que resolvera lo procedente.",
    fuente: "Ley 40/2015, art. 23.1",
    dificultad: "facil",
    temaSlug: "aux-regimen-juridico",
  },
  {
    enunciado: "Planteada la recusacion, el superior resolvera en el plazo de:",
    opciones: [
      "Un mes",
      "Tres dias, previos los informes y comprobaciones que considere oportunos",
      "Quince dias",
      "Diez dias",
    ],
    correctaIndex: 1,
    explicacion:
      "El superior debe resolver la recusacion en el plazo de tres dias, tras oir al recusado y practicar las comprobaciones necesarias.",
    fuente: "Ley 40/2015, art. 24.3",
    dificultad: "dificil",
    temaSlug: "aux-regimen-juridico",
  },
  {
    enunciado: "La recusacion podra promoverse por los interesados:",
    opciones: [
      "Unicamente al inicio del procedimiento",
      "Solo tras la resolucion final",
      "En cualquier momento de la tramitacion del procedimiento",
      "Exclusivamente durante el tramite de audiencia",
    ],
    correctaIndex: 2,
    explicacion:
      "La recusacion puede plantearse en cualquier momento de la tramitacion, mediante escrito en el que se exprese la causa en que se funda.",
    fuente: "Ley 40/2015, art. 24.1",
    dificultad: "media",
    temaSlug: "aux-regimen-juridico",
  },
  {
    enunciado: "La delegacion de firma de resoluciones y actos administrativos:",
    opciones: [
      "No altera la competencia del organo delegante y no requiere publicacion",
      "Transfiere la competencia al organo que firma",
      "Debe publicarse siempre en el BOE",
      "Solo cabe entre Administraciones distintas",
    ],
    correctaIndex: 0,
    explicacion:
      "La delegacion de firma no altera la competencia y no necesita publicacion, aunque en la firma debe constar la autoridad de procedencia.",
    fuente: "Ley 40/2015, art. 12",
    dificultad: "media",
    temaSlug: "aux-regimen-juridico",
  },

  // Tema 4: aux-acto-administrativo
  {
    enunciado:
      "Segun el articulo 35 de la Ley 39/2015, seran motivados, entre otros, los actos que:",
    opciones: [
      "Sean de mero tramite sin efectos",
      "Carezcan de destinatario",
      "Limiten derechos subjetivos o intereses legitimos",
      "Se dicten en el ejercicio de potestades regladas simples",
    ],
    correctaIndex: 2,
    explicacion:
      "Deben motivarse, entre otros, los actos que limiten derechos o intereses legitimos, resuelvan recursos o se separen del criterio seguido en actuaciones precedentes.",
    fuente: "Ley 39/2015, art. 35",
    dificultad: "facil",
    temaSlug: "aux-acto-administrativo",
  },
  {
    enunciado: "Con caracter general, los actos administrativos:",
    opciones: [
      "Se presumen validos y producen efectos desde la fecha en que se dicten, salvo que en ellos se disponga otra cosa",
      "No producen efectos hasta su firmeza en via judicial",
      "Solo son validos si los ratifica el superior jerarquico",
      "Producen efectos desde su publicacion en el BOE en todo caso",
    ],
    correctaIndex: 0,
    explicacion:
      "Los actos se presumen validos y son eficaces desde la fecha en que se dictan, salvo eficacia demorada por su contenido o por depender de notificacion o publicacion.",
    fuente: "Ley 39/2015, art. 39",
    dificultad: "facil",
    temaSlug: "aux-acto-administrativo",
  },
  {
    enunciado: "La eficacia de un acto administrativo quedara demorada cuando:",
    opciones: [
      "El interesado no este de acuerdo con el",
      "No haya sido motivado",
      "Hayan transcurrido mas de seis meses desde su dictado",
      "Asi lo exija el contenido del acto o este supeditada a su notificacion, publicacion o aprobacion superior",
    ],
    correctaIndex: 3,
    explicacion:
      "La eficacia se demora cuando lo exija el contenido del acto o cuando dependa de notificacion, publicacion o aprobacion superior.",
    fuente: "Ley 39/2015, art. 39.2",
    dificultad: "media",
    temaSlug: "aux-acto-administrativo",
  },
  {
    enunciado: "Toda notificacion debera cursarse en el plazo de:",
    opciones: [
      "Un mes desde la solicitud del interesado",
      "Diez dias a partir de la fecha en que el acto haya sido dictado",
      "Tres dias habiles desde la firmeza",
      "Quince dias naturales desde su publicacion",
    ],
    correctaIndex: 1,
    explicacion:
      "La notificacion debe cursarse dentro del plazo de diez dias a partir de que se dicte el acto, e incluir el texto integro y el regimen de recursos.",
    fuente: "Ley 39/2015, art. 40.2",
    dificultad: "media",
    temaSlug: "aux-acto-administrativo",
  },
  {
    enunciado: "Toda notificacion debera contener, ademas del texto integro de la resolucion:",
    opciones: [
      "Solo la firma del titular del organo",
      "Exclusivamente la fecha del acto",
      "Unicamente el numero de expediente",
      "La indicacion de si pone fin o no a la via administrativa, los recursos que procedan, el organo ante el que hubieran de presentarse y el plazo",
    ],
    correctaIndex: 3,
    explicacion:
      "La notificacion debe indicar si el acto agota la via administrativa, los recursos procedentes, el organo competente y los plazos de interposicion.",
    fuente: "Ley 39/2015, art. 40.2",
    dificultad: "media",
    temaSlug: "aux-acto-administrativo",
  },
  {
    enunciado:
      "Cuando los interesados sean desconocidos o se ignore el lugar o medio de la notificacion, la notificacion se hara:",
    opciones: [
      "Por edicto en la puerta del domicilio",
      "Por medio de un anuncio publicado en el Boletin Oficial del Estado",
      "Mediante llamada telefonica registrada",
      "En el tablon del ayuntamiento durante un ano",
    ],
    correctaIndex: 1,
    explicacion:
      "Cuando la notificacion resulte infructuosa o se ignore al interesado, se publica un anuncio en el BOE (Tablon Edictal Unico).",
    fuente: "Ley 39/2015, art. 44",
    dificultad: "media",
    temaSlug: "aux-acto-administrativo",
  },
  {
    enunciado: "Son nulos de pleno derecho, entre otros, los actos administrativos:",
    opciones: [
      "Dictados por organo manifiestamente incompetente por razon de la materia o del territorio",
      "Que incurran en cualquier infraccion del ordenamiento juridico",
      "Dictados con un simple defecto de forma no invalidante",
      "Notificados con un dia de retraso",
    ],
    correctaIndex: 0,
    explicacion:
      "Es causa de nulidad la incompetencia manifiesta por razon de la materia o del territorio; la mera infraccion del ordenamiento genera anulabilidad.",
    fuente: "Ley 39/2015, art. 47.1",
    dificultad: "media",
    temaSlug: "aux-acto-administrativo",
  },
  {
    enunciado: "Es causa de nulidad de pleno derecho el acto dictado:",
    opciones: [
      "Con una motivacion sucinta pero suficiente",
      "Fuera del plazo maximo por causa justificada",
      "Prescindiendo total y absolutamente del procedimiento legalmente establecido",
      "Sin haber sido publicado en prensa",
    ],
    correctaIndex: 2,
    explicacion:
      "Prescindir total y absolutamente del procedimiento, o de las normas del organo colegiado, es causa de nulidad de pleno derecho.",
    fuente: "Ley 39/2015, art. 47.1.e)",
    dificultad: "media",
    temaSlug: "aux-acto-administrativo",
  },
  {
    enunciado: "El defecto de forma solo determinara la anulabilidad del acto cuando:",
    opciones: [
      "Afecte a cualquier elemento accesorio del acto",
      "Carezca de los requisitos formales indispensables para alcanzar su fin o de lugar a la indefension de los interesados",
      "El interesado no haya sido oido en ningun caso",
      "Se trate de un acto verbal",
    ],
    correctaIndex: 1,
    explicacion:
      "El defecto de forma solo anula si el acto carece de requisitos formales indispensables para alcanzar su fin o produce indefension del interesado.",
    fuente: "Ley 39/2015, art. 48.2",
    dificultad: "dificil",
    temaSlug: "aux-acto-administrativo",
  },
  {
    enunciado:
      "El recurso de alzada, contra actos que no ponen fin a la via administrativa, se interpone en el plazo de:",
    opciones: [
      "Quince dias, ante el mismo organo que lo dicto",
      "Dos meses, ante el organo judicial",
      "Diez dias, ante el Defensor del Pueblo",
      "Un mes si el acto es expreso, ante el superior jerarquico del organo que lo dicto",
    ],
    correctaIndex: 3,
    explicacion:
      "La alzada se interpone en un mes si el acto es expreso (tres meses si es presunto), ante el superior jerarquico del organo autor del acto.",
    fuente: "Ley 39/2015, arts. 121 y 122",
    dificultad: "facil",
    temaSlug: "aux-acto-administrativo",
  },
  {
    enunciado: "El recurso potestativo de reposicion se interpone:",
    opciones: [
      "Ante el superior jerarquico",
      "Ante el orden jurisdiccional contencioso-administrativo",
      "Ante el mismo organo que dicto el acto que pone fin a la via administrativa",
      "Ante el Consejo Consultivo",
    ],
    correctaIndex: 2,
    explicacion:
      "La reposicion es potestativa y se interpone ante el mismo organo que dicto el acto que agota la via administrativa, en el plazo de un mes si es expreso.",
    fuente: "Ley 39/2015, arts. 123 y 124",
    dificultad: "facil",
    temaSlug: "aux-acto-administrativo",
  },
  {
    enunciado:
      "El recurso extraordinario de revision procede contra actos firmes en via administrativa cuando concurra alguna de sus causas tasadas, como:",
    opciones: [
      "Aparecer documentos de valor esencial para resolver el asunto que, aunque posteriores, evidencien el error de la resolucion recurrida",
      "Existir cualquier discrepancia del interesado con el acto",
      "Haberse notificado el acto por medios electronicos",
      "Haber transcurrido el plazo de un mes desde el acto",
    ],
    correctaIndex: 0,
    explicacion:
      "La revision extraordinaria solo cabe por causas tasadas, como la aparicion de documentos esenciales de fecha posterior que evidencien el error de la resolucion.",
    fuente: "Ley 39/2015, art. 125",
    dificultad: "dificil",
    temaSlug: "aux-acto-administrativo",
  },

  // Tema 5: procedimiento-administrativo
  {
    enunciado:
      "Conforme al articulo 4 de la Ley 39/2015, se consideran interesados en el procedimiento, entre otros:",
    opciones: [
      "Unicamente las personas juridicas",
      "Solo quienes hayan sido citados por la Administracion",
      "Exclusivamente los mayores de edad con nacionalidad espanola",
      "Quienes lo promuevan como titulares de derechos o intereses legitimos individuales o colectivos",
    ],
    correctaIndex: 3,
    explicacion:
      "Son interesados quienes promuevan el procedimiento como titulares de derechos o intereses legitimos, y quienes puedan resultar afectados por la resolucion.",
    fuente: "Ley 39/2015, art. 4",
    dificultad: "facil",
    temaSlug: "procedimiento-administrativo",
  },
  {
    enunciado:
      "Para interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona:",
    opciones: [
      "Se presume la representacion en todo caso",
      "Debera acreditarse la representacion",
      "No es posible actuar mediante representante",
      "Basta con la manifestacion verbal del interesado",
    ],
    correctaIndex: 1,
    explicacion:
      "Para formular solicitudes, interponer recursos, desistir y renunciar debe acreditarse la representacion; para actos de mero tramite se presume.",
    fuente: "Ley 39/2015, art. 5.3",
    dificultad: "media",
    temaSlug: "procedimiento-administrativo",
  },
  {
    enunciado:
      "Los documentos que los interesados dirijan a las Administraciones podran presentarse, entre otros lugares, en:",
    opciones: [
      "El registro electronico de la Administracion, asi como en las oficinas de Correos y en las oficinas de asistencia en materia de registros",
      "Cualquier notaria del territorio nacional",
      "Las sedes de los partidos politicos",
      "Exclusivamente en el organo competente para resolver",
    ],
    correctaIndex: 0,
    explicacion:
      "Los documentos pueden presentarse en el registro electronico, oficinas de Correos, representaciones diplomaticas y oficinas de asistencia en materia de registros.",
    fuente: "Ley 39/2015, art. 16.4",
    dificultad: "media",
    temaSlug: "procedimiento-administrativo",
  },
  {
    enunciado: "Cuando los plazos se senalen por dias, se entiende que estos son:",
    opciones: [
      "Naturales, incluyendo sabados y domingos",
      "Solo los dias de apertura de la oficina de asistencia",
      "Habiles, excluyendose del computo los sabados, los domingos y los declarados festivos",
      "Los cinco primeros dias de cada semana sin excepcion",
    ],
    correctaIndex: 2,
    explicacion:
      "Los plazos por dias se entienden habiles, excluyendo sabados, domingos y festivos, salvo que la ley indique que son naturales.",
    fuente: "Ley 39/2015, art. 30.2",
    dificultad: "facil",
    temaSlug: "procedimiento-administrativo",
  },
  {
    enunciado: "Cuando el ultimo dia del plazo sea inhabil:",
    opciones: [
      "El plazo se considerara vencido ese mismo dia",
      "Se entendera prorrogado al primer dia habil siguiente",
      "Se adelantara al dia habil inmediatamente anterior",
      "Se suspendera el procedimiento indefinidamente",
    ],
    correctaIndex: 1,
    explicacion:
      "Si el ultimo dia del plazo es inhabil, se entiende prorrogado al primer dia habil siguiente.",
    fuente: "Ley 39/2015, art. 30.5",
    dificultad: "media",
    temaSlug: "procedimiento-administrativo",
  },
  {
    enunciado: "Si el plazo se fija en meses o anos, estos se computan:",
    opciones: [
      "Por dias habiles equivalentes",
      "Descontando los periodos vacacionales",
      "En periodos de treinta dias naturales",
      "De fecha a fecha",
    ],
    correctaIndex: 3,
    explicacion:
      "Los plazos por meses o anos se cuentan de fecha a fecha; si en el mes de vencimiento no hay dia equivalente, el plazo expira el ultimo dia del mes.",
    fuente: "Ley 39/2015, art. 30.4",
    dificultad: "media",
    temaSlug: "procedimiento-administrativo",
  },
  {
    enunciado: "La Administracion podra conceder una ampliacion de los plazos que no exceda de:",
    opciones: [
      "El doble de los mismos",
      "Un ano en todo caso",
      "La mitad de los mismos, si las circunstancias lo aconsejan y no se perjudican derechos de terceros",
      "Una tercera parte, solo a instancia del organo superior",
    ],
    correctaIndex: 2,
    explicacion:
      "La ampliacion de plazos no puede exceder de la mitad de los mismos y no cabe respecto de un plazo ya vencido.",
    fuente: "Ley 39/2015, art. 32",
    dificultad: "media",
    temaSlug: "procedimiento-administrativo",
  },
  {
    enunciado:
      "Cuando razones de interes publico lo aconsejen, la tramitacion de urgencia supondra:",
    opciones: [
      "La reduccion a la mitad de los plazos establecidos para el procedimiento ordinario, salvo los relativos a la presentacion de solicitudes y recursos",
      "La duplicacion de todos los plazos",
      "La supresion del tramite de audiencia en todo caso",
      "La resolucion inmediata sin instruccion",
    ],
    correctaIndex: 0,
    explicacion:
      "La tramitacion de urgencia reduce a la mitad los plazos del procedimiento ordinario, excepto los de presentacion de solicitudes y recursos.",
    fuente: "Ley 39/2015, art. 33",
    dificultad: "media",
    temaSlug: "procedimiento-administrativo",
  },
  {
    enunciado:
      "En los procedimientos iniciados a solicitud del interesado, el vencimiento del plazo sin resolucion expresa, como regla general:",
    opciones: [
      "Produce efectos estimatorios (silencio positivo), salvo las excepciones previstas legalmente",
      "Produce siempre efectos desestimatorios",
      "Carece de todo efecto juridico",
      "Obliga a iniciar de nuevo el procedimiento",
    ],
    correctaIndex: 0,
    explicacion:
      "La regla general del silencio a solicitud del interesado es estimatoria, salvo excepciones legales como la responsabilidad patrimonial o la impugnacion de actos.",
    fuente: "Ley 39/2015, art. 24.1",
    dificultad: "media",
    temaSlug: "procedimiento-administrativo",
  },
  {
    enunciado: "En los procedimientos de impugnacion de actos, el silencio administrativo tendra:",
    opciones: [
      "Siempre sentido estimatorio",
      "El sentido que decida el interesado",
      "Sentido desestimatorio, sin perjuicio del silencio estimatorio cuando el recurso de alzada se interponga contra la desestimacion por silencio de una solicitud",
      "Efectos suspensivos automaticos",
    ],
    correctaIndex: 2,
    explicacion:
      "En impugnacion de actos el silencio es desestimatorio, salvo el doble silencio: alzada frente a la desestimacion presunta de una solicitud, que se estima.",
    fuente: "Ley 39/2015, art. 24.1",
    dificultad: "dificil",
    temaSlug: "procedimiento-administrativo",
  },
  {
    enunciado:
      "En los procedimientos iniciados de oficio de los que pudieran derivarse el reconocimiento de situaciones favorables, el vencimiento del plazo maximo sin resolucion expresa produce:",
    opciones: [
      "La estimacion por silencio",
      "La caducidad en todo caso",
      "La nulidad del procedimiento",
      "La desestimacion por silencio administrativo",
    ],
    correctaIndex: 3,
    explicacion:
      "En los procedimientos de oficio favorables, el silencio es desestimatorio; en los sancionadores o de intervencion (gravamen) se produce la caducidad.",
    fuente: "Ley 39/2015, art. 25.1",
    dificultad: "dificil",
    temaSlug: "procedimiento-administrativo",
  },
  {
    enunciado:
      "Estan obligadas a relacionarse electronicamente con las Administraciones, en todo caso:",
    opciones: [
      "Todas las personas fisicas sin excepcion",
      "Las personas juridicas y las entidades sin personalidad juridica",
      "Unicamente los empleados publicos jubilados",
      "Solo los extranjeros no residentes",
    ],
    correctaIndex: 1,
    explicacion:
      "El articulo 14 obliga a relacionarse electronicamente a las personas juridicas, entidades sin personalidad, profesionales colegiados y quienes les representen.",
    fuente: "Ley 39/2015, art. 14.2",
    dificultad: "facil",
    temaSlug: "procedimiento-administrativo",
  },

  // Tema 6: aux-documentos-archivo
  {
    enunciado:
      "Los documentos administrativos que contienen una declaracion de voluntad de un organo sobre materias de su competencia son los documentos de:",
    opciones: [
      "Decision, como las resoluciones y los acuerdos",
      "Transmision, como las notificaciones",
      "Constancia, como las actas",
      "Juicio, como los informes",
    ],
    correctaIndex: 0,
    explicacion:
      "Los documentos de decision (resoluciones y acuerdos) contienen una declaracion de voluntad del organo sobre asuntos de su competencia.",
    fuente: "Manual de documentos administrativos",
    dificultad: "facil",
    temaSlug: "aux-documentos-archivo",
  },
  {
    enunciado: "Un acta o un certificado son ejemplos de documentos administrativos de:",
    opciones: ["Decision", "Transmision", "Constancia", "Juicio"],
    correctaIndex: 2,
    explicacion:
      "Las actas y los certificados son documentos de constancia, pues acreditan hechos, actos o situaciones con efectos administrativos.",
    fuente: "Manual de documentos administrativos",
    dificultad: "facil",
    temaSlug: "aux-documentos-archivo",
  },
  {
    enunciado: "Los informes son documentos administrativos de:",
    opciones: [
      "Decision, pues resuelven el procedimiento",
      "Transmision, pues comunican actos",
      "Constancia, pues acreditan hechos",
      "Juicio, pues valoran o dictaminan sobre cuestiones planteadas en el procedimiento",
    ],
    correctaIndex: 3,
    explicacion:
      "Los informes son documentos de juicio, ya que contienen una valoracion o dictamen sobre las cuestiones objeto del procedimiento.",
    fuente: "Manual de documentos administrativos",
    dificultad: "dificil",
    temaSlug: "aux-documentos-archivo",
  },
  {
    enunciado: "Las notificaciones y las comunicaciones son documentos administrativos de:",
    opciones: ["Decision", "Transmision", "Constancia", "Juicio"],
    correctaIndex: 1,
    explicacion:
      "Las notificaciones, comunicaciones y publicaciones son documentos de transmision, ya que trasladan informacion o actos a sus destinatarios.",
    fuente: "Manual de documentos administrativos",
    dificultad: "facil",
    temaSlug: "aux-documentos-archivo",
  },
  {
    enunciado:
      "El archivo que custodia la documentacion en tramite o sometida a consulta frecuente por las propias oficinas es el archivo:",
    opciones: ["Historico", "Intermedio", "De gestion o de oficina", "Central autonomico"],
    correctaIndex: 2,
    explicacion:
      "El archivo de gestion u oficina guarda la documentacion activa, en tramite o de consulta frecuente por la unidad que la produce.",
    fuente: "Ciclo vital de los documentos",
    dificultad: "media",
    temaSlug: "aux-documentos-archivo",
  },
  {
    enunciado:
      "El archivo que recibe los documentos procedentes de los archivos de gestion una vez concluida su tramitacion, para su consulta no habitual, es el archivo:",
    opciones: ["Central", "De gestion", "Historico", "De oficina"],
    correctaIndex: 0,
    explicacion:
      "El archivo central recibe la documentacion de los archivos de gestion tras concluir su tramitacion, cuando su consulta ya no es frecuente.",
    fuente: "Ciclo vital de los documentos",
    dificultad: "media",
    temaSlug: "aux-documentos-archivo",
  },
  {
    enunciado:
      "El archivo en el que se realiza la valoracion y seleccion de la documentacion antes de su conservacion permanente o eliminacion es el archivo:",
    opciones: ["De gestion", "Intermedio", "De oficina", "Central"],
    correctaIndex: 1,
    explicacion:
      "El archivo intermedio custodia la documentacion en la fase en que se valora y selecciona para decidir su conservacion permanente o su eliminacion.",
    fuente: "Ciclo vital de los documentos",
    dificultad: "dificil",
    temaSlug: "aux-documentos-archivo",
  },
  {
    enunciado:
      "El archivo destinado a la conservacion permanente de los documentos con valor historico es el archivo:",
    opciones: ["De gestion", "Central", "Intermedio", "Historico"],
    correctaIndex: 3,
    explicacion:
      "El archivo historico conserva de forma permanente los documentos con valor historico, cultural o de investigacion.",
    fuente: "Ciclo vital de los documentos",
    dificultad: "facil",
    temaSlug: "aux-documentos-archivo",
  },
  {
    enunciado: "El ciclo vital de los documentos establece que estos:",
    opciones: [
      "Permanecen siempre en el archivo de gestion",
      "Se eliminan al finalizar cada ejercicio presupuestario",
      "Nacen ya en el archivo historico",
      "Atraviesan distintas fases o edades a las que corresponden los diferentes tipos de archivo",
    ],
    correctaIndex: 3,
    explicacion:
      "El ciclo vital asocia cada edad del documento (activa, semiactiva e inactiva) a un tipo de archivo: gestion, central, intermedio e historico.",
    fuente: "Ciclo vital de los documentos",
    dificultad: "media",
    temaSlug: "aux-documentos-archivo",
  },
  {
    enunciado:
      "El traslado ordenado de los documentos de un archivo a otro, segun cumplen su edad, se denomina:",
    opciones: ["Expurgo", "Transferencia", "Foliado", "Signatura"],
    correctaIndex: 1,
    explicacion:
      "La transferencia es el traslado de documentos de un archivo a otro conforme avanzan en su ciclo vital, siguiendo un calendario de conservacion.",
    fuente: "Gestion documental",
    dificultad: "media",
    temaSlug: "aux-documentos-archivo",
  },
  {
    enunciado:
      "La eliminacion controlada de documentos carentes de valor, tras el correspondiente proceso de valoracion, se denomina:",
    opciones: ["Expurgo", "Transferencia", "Clasificacion", "Registro"],
    correctaIndex: 0,
    explicacion:
      "El expurgo o eliminacion es la destruccion controlada de documentos sin valor que conservar, previa valoracion por el organo competente.",
    fuente: "Gestion documental",
    dificultad: "media",
    temaSlug: "aux-documentos-archivo",
  },
  {
    enunciado: "Cual de los siguientes NO es un tipo de archivo dentro del ciclo documental?",
    opciones: [
      "Archivo de gestion",
      "Archivo central",
      "Archivo provisional de urgencia",
      "Archivo historico",
    ],
    correctaIndex: 2,
    explicacion:
      "Los tipos de archivo son gestion, central, intermedio e historico; el archivo provisional de urgencia no forma parte del ciclo documental.",
    fuente: "Ciclo vital de los documentos",
    dificultad: "media",
    temaSlug: "aux-documentos-archivo",
  },

  // Tema 7: aux-atencion-ciudadania
  {
    enunciado: "La Carta de Derechos y Deberes de la ciudadania en materia de salud recoge:",
    opciones: [
      "Solo los derechos del personal sanitario",
      "El conjunto de derechos y deberes de los usuarios de los servicios sanitarios publicos de Andalucia",
      "Las tarifas de los servicios sanitarios privados",
      "El regimen disciplinario del personal estatutario",
    ],
    correctaIndex: 1,
    explicacion:
      "La Carta recoge los derechos y deberes de la ciudadania como usuaria del sistema sanitario publico de Andalucia.",
    fuente: "Carta de Derechos y Deberes de la ciudadania (SSPA)",
    dificultad: "facil",
    temaSlug: "aux-atencion-ciudadania",
  },
  {
    enunciado: "Entre los derechos de la ciudadania en el ambito sanitario andaluz se encuentra:",
    opciones: [
      "El derecho a recibir informacion sobre su proceso asistencial de forma comprensible",
      "El derecho a elegir libremente el tratamiento sin criterio clinico",
      "El derecho a no ser identificado en ningun registro",
      "El derecho a exigir personal concreto para su atencion",
    ],
    correctaIndex: 0,
    explicacion:
      "La ciudadania tiene derecho a recibir informacion asistencial comprensible sobre su proceso; el tratamiento se decide con criterio clinico.",
    fuente: "Carta de Derechos y Deberes de la ciudadania (SSPA)",
    dificultad: "media",
    temaSlug: "aux-atencion-ciudadania",
  },
  {
    enunciado: "El Libro de Sugerencias y Reclamaciones de la Junta de Andalucia sirve para:",
    opciones: [
      "Solicitar cita con el medico especialista",
      "Tramitar la tarjeta sanitaria individual",
      "Que la ciudadania formule sugerencias y reclamaciones sobre el funcionamiento de los servicios",
      "Presentar recursos administrativos de alzada",
    ],
    correctaIndex: 2,
    explicacion:
      "El Libro de Sugerencias y Reclamaciones permite a la ciudadania expresar sugerencias de mejora y reclamaciones sobre el funcionamiento de los servicios.",
    fuente: "Libro de Sugerencias y Reclamaciones de la Junta de Andalucia",
    dificultad: "facil",
    temaSlug: "aux-atencion-ciudadania",
  },
  {
    enunciado: "La presentacion de una reclamacion en el Libro de Sugerencias y Reclamaciones:",
    opciones: [
      "Sustituye a la via judicial",
      "Paraliza automaticamente el procedimiento",
      "Equivale a un recurso de alzada",
      "No tiene la calificacion ni los efectos de un recurso administrativo",
    ],
    correctaIndex: 3,
    explicacion:
      "Las reclamaciones del Libro no son recursos administrativos ni suspenden plazos; permiten conocer el grado de satisfaccion y mejorar los servicios.",
    fuente: "Libro de Sugerencias y Reclamaciones de la Junta de Andalucia",
    dificultad: "dificil",
    temaSlug: "aux-atencion-ciudadania",
  },
  {
    enunciado: "El derecho a la segunda opinion medica en el SSPA consiste en:",
    opciones: [
      "Obtener un nuevo informe de otro facultativo ante determinados diagnosticos, para contrastar el primero",
      "Cambiar de hospital sin justificacion clinica",
      "Recibir dos tratamientos simultaneos",
      "Duplicar todas las pruebas diagnosticas por sistema",
    ],
    correctaIndex: 0,
    explicacion:
      "La segunda opinion medica permite obtener un nuevo dictamen de otro facultativo en supuestos tasados, para contrastar el diagnostico o el tratamiento propuesto.",
    fuente: "Decreto de segunda opinion medica (SSPA)",
    dificultad: "media",
    temaSlug: "aux-atencion-ciudadania",
  },
  {
    enunciado: "Entre los supuestos que dan derecho a la segunda opinion medica figura:",
    opciones: [
      "Un resfriado comun",
      "Una revision rutinaria sin patologia",
      "La solicitud de una baja laboral",
      "El diagnostico de un proceso neoplasico maligno (cancer)",
    ],
    correctaIndex: 3,
    explicacion:
      "El derecho a la segunda opinion se reconoce en supuestos graves como el diagnostico de cancer, enfermedades degenerativas o procesos de pronostico fatal.",
    fuente: "Decreto de segunda opinion medica (SSPA)",
    dificultad: "media",
    temaSlug: "aux-atencion-ciudadania",
  },
  {
    enunciado: "En el SSPA, la ciudadania tiene reconocido el derecho a:",
    opciones: [
      "Elegir el hospital solo si reside fuera de Andalucia",
      "No ser atendida por ningun profesional concreto",
      "La libre eleccion de medico y de centro sanitario en los terminos legalmente establecidos",
      "Cambiar de medico una sola vez en la vida",
    ],
    correctaIndex: 2,
    explicacion:
      "La ciudadania puede elegir medico general, pediatra y centro sanitario en los terminos previstos en la normativa autonomica.",
    fuente: "Normativa de libre eleccion (SSPA)",
    dificultad: "facil",
    temaSlug: "aux-atencion-ciudadania",
  },
  {
    enunciado: "La tarjeta sanitaria individual es el documento que:",
    opciones: [
      "Sustituye al documento nacional de identidad",
      "Identifica y acredita a cada persona como usuaria del sistema sanitario publico",
      "Solo sirve para adquirir medicamentos",
      "Acredita la condicion de personal estatutario",
    ],
    correctaIndex: 1,
    explicacion:
      "La tarjeta sanitaria individual identifica y acredita a cada persona como usuaria del sistema sanitario, facilitando el acceso a las prestaciones.",
    fuente: "Normativa de la tarjeta sanitaria individual",
    dificultad: "media",
    temaSlug: "aux-atencion-ciudadania",
  },
  {
    enunciado: "La tarjeta sanitaria individual en Andalucia es emitida por:",
    opciones: [
      "La Seguridad Social estatal en exclusiva",
      "El ayuntamiento de residencia",
      "El Servicio Andaluz de Salud",
      "Las mutuas colaboradoras",
    ],
    correctaIndex: 2,
    explicacion:
      "En Andalucia la tarjeta sanitaria individual la emite el Servicio Andaluz de Salud, vinculada a los datos de la Base de Datos de Usuarios.",
    fuente: "Normativa de la tarjeta sanitaria individual (SAS)",
    dificultad: "media",
    temaSlug: "aux-atencion-ciudadania",
  },
  {
    enunciado: "Entre los derechos de la ciudadania en el ambito sanitario esta el derecho a:",
    opciones: [
      "Difundir libremente los datos clinicos de terceros",
      "Acceder a la historia clinica de otros pacientes",
      "Renunciar a la proteccion de sus datos de salud",
      "La confidencialidad de la informacion relacionada con su salud",
    ],
    correctaIndex: 3,
    explicacion:
      "La confidencialidad de los datos de salud es un derecho de la ciudadania; el acceso a la informacion clinica ajena esta prohibido.",
    fuente: "Carta de Derechos y Deberes de la ciudadania (SSPA)",
    dificultad: "media",
    temaSlug: "aux-atencion-ciudadania",
  },
  {
    enunciado: "Entre los deberes de la ciudadania en los servicios sanitarios andaluces figura:",
    opciones: [
      "Aportar los medicamentos que utilice el hospital",
      "Hacer un uso adecuado de las instalaciones y de los recursos sanitarios",
      "Sustituir al personal en tareas asistenciales",
      "Renunciar a la asistencia en caso de lista de espera",
    ],
    correctaIndex: 1,
    explicacion:
      "Es deber de la ciudadania hacer un uso adecuado y responsable de las instalaciones, los servicios y los recursos sanitarios.",
    fuente: "Carta de Derechos y Deberes de la ciudadania (SSPA)",
    dificultad: "facil",
    temaSlug: "aux-atencion-ciudadania",
  },
  {
    enunciado: "Cual de las siguientes NO es una garantia reconocida a la ciudadania en el SSPA?",
    opciones: [
      "El derecho a elegir el resultado clinico de un tratamiento",
      "El derecho a la informacion asistencial",
      "El derecho a la segunda opinion medica",
      "El derecho a la libre eleccion de facultativo",
    ],
    correctaIndex: 0,
    explicacion:
      "No existe un derecho a elegir el resultado clinico; si se reconocen la informacion asistencial, la segunda opinion y la libre eleccion.",
    fuente: "Carta de Derechos y Deberes de la ciudadania (SSPA)",
    dificultad: "media",
    temaSlug: "aux-atencion-ciudadania",
  },

  // Tema 8: aux-seguridad-social
  {
    enunciado: "La afiliacion al sistema de la Seguridad Social es:",
    opciones: [
      "Distinta para cada empresa en la que se trabaje",
      "Temporal y renovable cada ano",
      "Unica y para toda la vida del trabajador, aunque cambie de regimen o de actividad",
      "Voluntaria para los trabajadores por cuenta ajena",
    ],
    correctaIndex: 2,
    explicacion:
      "La afiliacion es unica y vitalicia: se produce una sola vez y se mantiene aunque el trabajador cambie de actividad o de regimen.",
    fuente: "LGSS (RDL 8/2015), art. 15",
    dificultad: "facil",
    temaSlug: "aux-seguridad-social",
  },
  {
    enunciado:
      "Respecto de las personas incluidas en el campo de aplicacion del sistema, la afiliacion es:",
    opciones: [
      "Potestativa",
      "Revisable cada cinco anos",
      "Gratuita solo para autonomos",
      "Obligatoria",
    ],
    correctaIndex: 3,
    explicacion:
      "La afiliacion es obligatoria para quienes esten incluidos en el campo de aplicacion del sistema y unica para toda su vida laboral.",
    fuente: "LGSS (RDL 8/2015), art. 15",
    dificultad: "facil",
    temaSlug: "aux-seguridad-social",
  },
  {
    enunciado: "Los trabajadores por cuenta propia o autonomos se integran en:",
    opciones: [
      "El Regimen General sin especialidad alguna",
      "El Regimen Especial de Trabajadores Autonomos (RETA)",
      "El Regimen del Seguro Escolar",
      "Un regimen ajeno a la Seguridad Social",
    ],
    correctaIndex: 1,
    explicacion:
      "Los trabajadores autonomos se encuadran en el RETA, un regimen especial dentro del sistema de la Seguridad Social.",
    fuente: "LGSS (RDL 8/2015), art. 10",
    dificultad: "media",
    temaSlug: "aux-seguridad-social",
  },
  {
    enunciado:
      "Estan comprendidos en el campo de aplicacion del sistema de la Seguridad Social, a efectos de la modalidad contributiva:",
    opciones: [
      "Los trabajadores por cuenta ajena y por cuenta propia que ejerzan su actividad en territorio nacional",
      "Unicamente los funcionarios de carrera del Estado",
      "Solo las personas mayores de 65 anos",
      "Exclusivamente los extranjeros no residentes",
    ],
    correctaIndex: 0,
    explicacion:
      "La modalidad contributiva comprende a los trabajadores por cuenta ajena y propia y asimilados que ejerzan su actividad en territorio nacional.",
    fuente: "LGSS (RDL 8/2015), art. 7",
    dificultad: "media",
    temaSlug: "aux-seguridad-social",
  },
  {
    enunciado:
      "La obligacion de solicitar el alta del trabajador por cuenta ajena en la Seguridad Social corresponde:",
    opciones: [
      "Al propio trabajador, una vez transcurrido un mes",
      "A la mutua, tras el primer accidente",
      "A la Inspeccion de Trabajo de oficio",
      "Al empresario, con caracter previo al inicio de la prestacion de servicios",
    ],
    correctaIndex: 3,
    explicacion:
      "El empresario debe solicitar el alta del trabajador con caracter previo al inicio de la actividad; el alta previa evita responsabilidades.",
    fuente: "LGSS (RDL 8/2015), art. 139",
    dificultad: "media",
    temaSlug: "aux-seguridad-social",
  },
  {
    enunciado: "La duracion maxima de la situacion de incapacidad temporal es de:",
    opciones: [
      "365 dias, prorrogables por otros 180 cuando se presuma que durante ellos pueda ser dado de alta medica por curacion",
      "180 dias improrrogables",
      "24 meses en todo caso",
      "90 dias sin posibilidad de prorroga",
    ],
    correctaIndex: 0,
    explicacion:
      "La incapacidad temporal tiene una duracion maxima de 365 dias, prorrogables por otros 180 cuando se prevea el alta por curacion.",
    fuente: "LGSS (RDL 8/2015), art. 169",
    dificultad: "media",
    temaSlug: "aux-seguridad-social",
  },
  {
    enunciado:
      "En la incapacidad temporal por enfermedad comun, el subsidio equivale al 60% de la base reguladora:",
    opciones: [
      "Desde el primer dia y de forma indefinida",
      "Desde el dia 4 hasta el 20, y al 75% a partir del dia 21",
      "Solo durante los tres primeros dias",
      "Al 100% durante todo el proceso",
    ],
    correctaIndex: 1,
    explicacion:
      "Por enfermedad comun, el subsidio es del 60% de la base reguladora del dia 4 al 20 y del 75% a partir del dia 21.",
    fuente: "LGSS (RDL 8/2015), regimen de la IT",
    dificultad: "dificil",
    temaSlug: "aux-seguridad-social",
  },
  {
    enunciado:
      "Para acceder a la pension contributiva de jubilacion se exige, con caracter general, un periodo minimo de cotizacion de:",
    opciones: ["Cinco anos", "Diez anos", "Quince anos", "Veinticinco anos"],
    correctaIndex: 2,
    explicacion:
      "El periodo minimo de cotizacion para la pension contributiva de jubilacion es de quince anos, dos de ellos dentro de los quince anteriores al hecho causante.",
    fuente: "LGSS (RDL 8/2015), art. 205",
    dificultad: "media",
    temaSlug: "aux-seguridad-social",
  },
  {
    enunciado:
      "La obligacion de ingresar las cuotas de la Seguridad Social del trabajador por cuenta ajena y las propias corresponde:",
    opciones: [
      "Al empresario, que descuenta e ingresa tambien la aportacion del trabajador",
      "Exclusivamente al trabajador",
      "A la mutua colaboradora",
      "Al Servicio Publico de Empleo",
    ],
    correctaIndex: 0,
    explicacion:
      "El empresario es el responsable de ingresar la cotizacion, descontando de la nomina la aportacion que corresponde al trabajador.",
    fuente: "LGSS (RDL 8/2015), regimen de cotizacion",
    dificultad: "media",
    temaSlug: "aux-seguridad-social",
  },
  {
    enunciado: "Cual de los siguientes es un regimen especial de la Seguridad Social?",
    opciones: [
      "El regimen general de la industria",
      "El de los trabajadores del mar",
      "El regimen de la banca privada",
      "El regimen del comercio minorista",
    ],
    correctaIndex: 1,
    explicacion:
      "El de los trabajadores del mar es un regimen especial, junto al de autonomos y al de la mineria del carbon.",
    fuente: "LGSS (RDL 8/2015), art. 10",
    dificultad: "facil",
    temaSlug: "aux-seguridad-social",
  },
  {
    enunciado: "Cual de los siguientes NO constituye un regimen especial de la Seguridad Social?",
    opciones: [
      "El Regimen Especial de Trabajadores Autonomos",
      "El Regimen Especial del Mar",
      "El Regimen General de la Seguridad Social",
      "El Regimen Especial de la Mineria del Carbon",
    ],
    correctaIndex: 2,
    explicacion:
      "El Regimen General no es especial; los regimenes especiales son, entre otros, el de autonomos, el del mar y el de la mineria del carbon.",
    fuente: "LGSS (RDL 8/2015), art. 10",
    dificultad: "facil",
    temaSlug: "aux-seguridad-social",
  },
  {
    enunciado:
      "Las prestaciones no contributivas del sistema de la Seguridad Social se caracterizan por:",
    opciones: [
      "Calcularse en funcion de las bases de cotizacion del beneficiario",
      "Requerir un periodo minimo de quince anos cotizados",
      "Reservarse a los trabajadores en activo",
      "No exigir cotizacion previa y dirigirse a personas en situacion de necesidad que carecen de recursos suficientes",
    ],
    correctaIndex: 3,
    explicacion:
      "Las prestaciones no contributivas no exigen cotizacion previa y protegen a personas en situacion de necesidad y sin recursos suficientes.",
    fuente: "LGSS (RDL 8/2015), modalidad no contributiva",
    dificultad: "dificil",
    temaSlug: "aux-seguridad-social",
  },

  // Tema 9: aux-retribuciones
  {
    enunciado: "Las retribuciones del personal estatutario se clasifican en:",
    opciones: [
      "Fijas y variables unicamente",
      "Ordinarias y extraordinarias unicamente",
      "Directas e indirectas",
      "Basicas y complementarias",
    ],
    correctaIndex: 3,
    explicacion:
      "El sistema retributivo del personal estatutario se compone de retribuciones basicas y complementarias.",
    fuente: "Ley 55/2003, art. 41",
    dificultad: "facil",
    temaSlug: "aux-retribuciones",
  },
  {
    enunciado: "El sueldo, como retribucion basica, se asigna:",
    opciones: [
      "A cada categoria en funcion del titulo exigido para su desempeno",
      "Segun el rendimiento individual de cada mes",
      "En funcion de las guardias realizadas",
      "Por el nivel del puesto concreto desempenado",
    ],
    correctaIndex: 0,
    explicacion:
      "El sueldo se asigna a cada categoria segun el titulo exigido para su desempeno; el nivel del puesto corresponde al complemento de destino.",
    fuente: "Ley 55/2003, art. 42",
    dificultad: "facil",
    temaSlug: "aux-retribuciones",
  },
  {
    enunciado: "Los trienios son una retribucion basica que consiste en una cantidad:",
    opciones: [
      "Por cada ano de servicios prestados",
      "Por cada tres anos de servicios prestados",
      "Por objetivos anuales cumplidos",
      "Por cada cinco anos de antiguedad",
    ],
    correctaIndex: 1,
    explicacion:
      "El trienio es una retribucion basica por cada tres anos de servicios prestados en la misma o distinta categoria.",
    fuente: "Ley 55/2003, art. 42",
    dificultad: "facil",
    temaSlug: "aux-retribuciones",
  },
  {
    enunciado: "Las pagas extraordinarias del personal estatutario:",
    opciones: [
      "Seran tres al ano por importe de un complemento especifico",
      "Se abonan solo al personal fijo con mas de diez anos",
      "Seran dos al ano y comprenderan, como minimo, una mensualidad de sueldo y trienios",
      "Equivalen al complemento de productividad anual",
    ],
    correctaIndex: 2,
    explicacion:
      "Hay dos pagas extraordinarias al ano, que comprenden como minimo una mensualidad de sueldo y trienios, ademas del complemento de destino en su caso.",
    fuente: "Ley 55/2003, art. 42",
    dificultad: "dificil",
    temaSlug: "aux-retribuciones",
  },
  {
    enunciado: "El complemento de destino retribuye:",
    opciones: [
      "El nivel del puesto que se desempena",
      "El especial rendimiento del trabajador",
      "Las guardias y la atencion continuada",
      "Los anos de servicio prestados",
    ],
    correctaIndex: 0,
    explicacion:
      "El complemento de destino retribuye el nivel del puesto que se desempena, dentro de la clasificacion de puestos.",
    fuente: "Ley 55/2003, art. 43",
    dificultad: "media",
    temaSlug: "aux-retribuciones",
  },
  {
    enunciado: "El complemento especifico esta destinado a retribuir:",
    opciones: [
      "El rendimiento individual y el interes",
      "La antiguedad del trabajador",
      "Las condiciones particulares de algunos puestos, como su especial dificultad tecnica, dedicacion, responsabilidad, peligrosidad o penosidad",
      "El grado de carrera profesional alcanzado",
    ],
    correctaIndex: 2,
    explicacion:
      "El complemento especifico retribuye las condiciones particulares del puesto: dificultad tecnica, dedicacion, responsabilidad, peligrosidad o penosidad.",
    fuente: "Ley 55/2003, art. 43",
    dificultad: "media",
    temaSlug: "aux-retribuciones",
  },
  {
    enunciado: "El complemento de productividad retribuye:",
    opciones: [
      "El nivel del puesto ocupado",
      "El especial rendimiento, el interes o la iniciativa en el desempeno del puesto",
      "Los trienios acumulados",
      "La realizacion de guardias",
    ],
    correctaIndex: 1,
    explicacion:
      "El complemento de productividad retribuye el especial rendimiento, el interes o la iniciativa del trabajador en el desempeno de su puesto.",
    fuente: "Ley 55/2003, art. 43",
    dificultad: "media",
    temaSlug: "aux-retribuciones",
  },
  {
    enunciado: "El complemento de atencion continuada retribuye:",
    opciones: [
      "El nivel del puesto de trabajo",
      "El rendimiento del trabajador",
      "La antiguedad en la categoria",
      "La atencion a los usuarios de manera permanente y continuada, como las guardias",
    ],
    correctaIndex: 3,
    explicacion:
      "El complemento de atencion continuada retribuye la necesidad de atender a los usuarios de forma permanente y continuada, como ocurre con las guardias.",
    fuente: "Ley 55/2003, art. 43",
    dificultad: "facil",
    temaSlug: "aux-retribuciones",
  },
  {
    enunciado: "El complemento de carrera esta destinado a retribuir:",
    opciones: [
      "Las condiciones particulares del puesto",
      "El grado de carrera profesional reconocido al trabajador",
      "Las pagas extraordinarias",
      "La realizacion de horas extraordinarias",
    ],
    correctaIndex: 1,
    explicacion:
      "El complemento de carrera retribuye el grado de carrera profesional que se haya reconocido al trabajador.",
    fuente: "Ley 55/2003, art. 43",
    dificultad: "media",
    temaSlug: "aux-retribuciones",
  },
  {
    enunciado: "Cual de las siguientes es una retribucion basica del personal estatutario?",
    opciones: [
      "El complemento especifico",
      "El complemento de destino",
      "El complemento de productividad",
      "El trienio",
    ],
    correctaIndex: 3,
    explicacion:
      "El trienio es una retribucion basica, junto con el sueldo y las pagas extraordinarias; los complementos son retribuciones complementarias.",
    fuente: "Ley 55/2003, arts. 42 y 43",
    dificultad: "media",
    temaSlug: "aux-retribuciones",
  },
  {
    enunciado: "Cual de las siguientes es una retribucion complementaria?",
    opciones: ["El complemento de destino", "El sueldo", "El trienio", "La paga extraordinaria"],
    correctaIndex: 0,
    explicacion:
      "El complemento de destino es una retribucion complementaria; el sueldo, los trienios y las pagas extraordinarias son retribuciones basicas.",
    fuente: "Ley 55/2003, arts. 42 y 43",
    dificultad: "media",
    temaSlug: "aux-retribuciones",
  },
  {
    enunciado:
      "La remuneracion de las guardias y de la atencion prestada fuera de la jornada ordinaria se realiza a traves del:",
    opciones: [
      "Complemento de destino",
      "Sueldo base",
      "Complemento de atencion continuada",
      "Trienio",
    ],
    correctaIndex: 2,
    explicacion:
      "Las guardias y la atencion prestada fuera de la jornada ordinaria se retribuyen mediante el complemento de atencion continuada.",
    fuente: "Ley 55/2003, art. 43",
    dificultad: "media",
    temaSlug: "aux-retribuciones",
  },

  // Tema 10: aux-presupuesto
  {
    enunciado:
      "El principio presupuestario segun el cual los creditos deben destinarse a la finalidad concreta para la que fueron aprobados se denomina principio de:",
    opciones: ["Especialidad", "Publicidad", "Jerarquia", "Descentralizacion"],
    correctaIndex: 0,
    explicacion:
      "El principio de especialidad exige que los creditos se destinen a la finalidad concreta para la que fueron aprobados (especialidad cualitativa, cuantitativa y temporal).",
    fuente: "Principios presupuestarios",
    dificultad: "facil",
    temaSlug: "aux-presupuesto",
  },
  {
    enunciado:
      "La clasificacion del presupuesto de gastos que responde a la pregunta en que se gasta es la estructura:",
    opciones: ["Organica", "Territorial", "Funcional", "Economica"],
    correctaIndex: 3,
    explicacion:
      "La clasificacion economica ordena el gasto por su naturaleza (en que se gasta), agrupandolo en capitulos, articulos y conceptos.",
    fuente: "Estructura del presupuesto",
    dificultad: "facil",
    temaSlug: "aux-presupuesto",
  },
  {
    enunciado: "Dentro de la clasificacion economica del gasto, el Capitulo I corresponde a:",
    opciones: [
      "Las inversiones reales",
      "Los gastos financieros",
      "Los gastos de personal",
      "Las transferencias de capital",
    ],
    correctaIndex: 2,
    explicacion:
      "En la clasificacion economica, el Capitulo I recoge los gastos de personal; las inversiones reales son el Capitulo VI.",
    fuente: "Estructura economica del presupuesto",
    dificultad: "dificil",
    temaSlug: "aux-presupuesto",
  },
  {
    enunciado:
      "La clasificacion que responde a la pregunta quien gasta, agrupando el gasto por secciones y servicios, es la estructura:",
    opciones: ["Economica", "Organica", "Por programas", "Funcional"],
    correctaIndex: 1,
    explicacion:
      "La clasificacion organica identifica al organo que realiza el gasto (secciones y servicios): responde a quien gasta.",
    fuente: "Estructura del presupuesto",
    dificultad: "media",
    temaSlug: "aux-presupuesto",
  },
  {
    enunciado:
      "La clasificacion del gasto que responde a la pregunta para que se gasta, atendiendo a los objetivos a alcanzar, es la estructura:",
    opciones: ["Organica", "Economica", "Territorial", "Por programas"],
    correctaIndex: 3,
    explicacion:
      "La clasificacion por programas ordena el gasto segun los objetivos o finalidades a alcanzar: responde a para que se gasta.",
    fuente: "Estructura del presupuesto",
    dificultad: "media",
    temaSlug: "aux-presupuesto",
  },
  {
    enunciado: "El Presupuesto de la Comunidad Autonoma de Andalucia se aprueba:",
    opciones: [
      "Por el Consejo de Gobierno mediante decreto",
      "Por el Parlamento de Andalucia mediante la Ley del Presupuesto",
      "Por la Consejeria de Hacienda mediante orden",
      "Por la Camara de Cuentas mediante informe",
    ],
    correctaIndex: 1,
    explicacion:
      "El Presupuesto lo elabora el Consejo de Gobierno, pero se aprueba por el Parlamento de Andalucia mediante la Ley del Presupuesto.",
    fuente: "Estatuto de Autonomia y regimen presupuestario de Andalucia",
    dificultad: "media",
    temaSlug: "aux-presupuesto",
  },
  {
    enunciado: "El orden correcto de las fases de ejecucion del presupuesto de gastos es:",
    opciones: [
      "Pago, autorizacion, disposicion y reconocimiento",
      "Reconocimiento, pago, disposicion y autorizacion",
      "Autorizacion, disposicion o compromiso, reconocimiento de la obligacion y ordenacion del pago",
      "Disposicion, pago, autorizacion y reconocimiento",
    ],
    correctaIndex: 2,
    explicacion:
      "Las fases del gasto siguen el orden ADOP: autorizacion, disposicion o compromiso, reconocimiento de la obligacion y ordenacion del pago.",
    fuente: "Fases de ejecucion del gasto publico",
    dificultad: "dificil",
    temaSlug: "aux-presupuesto",
  },
  {
    enunciado:
      "La modificacion presupuestaria que atiende un gasto especifico y determinado que no puede demorarse y para el que no existe credito es:",
    opciones: [
      "El credito extraordinario",
      "El suplemento de credito",
      "La transferencia de credito",
      "La ampliacion de credito",
    ],
    correctaIndex: 0,
    explicacion:
      "El credito extraordinario se aplica cuando hay que atender un gasto que no puede demorarse y no existe credito presupuestario para el mismo.",
    fuente: "Modificaciones presupuestarias",
    dificultad: "media",
    temaSlug: "aux-presupuesto",
  },
  {
    enunciado:
      "La modificacion presupuestaria que se aplica cuando el credito existente resulta insuficiente y no puede ampliarse es:",
    opciones: [
      "El credito extraordinario",
      "La generacion de credito",
      "El suplemento de credito",
      "La incorporacion de remanentes",
    ],
    correctaIndex: 2,
    explicacion:
      "El suplemento de credito procede cuando existe credito pero resulta insuficiente y no ampliable, para el mismo gasto ya previsto.",
    fuente: "Modificaciones presupuestarias",
    dificultad: "media",
    temaSlug: "aux-presupuesto",
  },
  {
    enunciado: "La transferencia de credito es la modificacion presupuestaria que:",
    opciones: [
      "Traslada el importe de unos creditos a otros sin alterar la cuantia total del presupuesto",
      "Incrementa el presupuesto con nuevos ingresos",
      "Crea un credito inexistente por gasto urgente",
      "Amplia automaticamente un credito por mayor recaudacion",
    ],
    correctaIndex: 0,
    explicacion:
      "La transferencia de credito traslada dotaciones entre partidas sin variar el importe global del presupuesto, con determinadas limitaciones.",
    fuente: "Modificaciones presupuestarias",
    dificultad: "media",
    temaSlug: "aux-presupuesto",
  },
  {
    enunciado:
      "El control externo de la actividad economico-financiera de la Junta de Andalucia corresponde, entre otros organos, a:",
    opciones: [
      "La Intervencion General de la Junta de Andalucia",
      "La Camara de Cuentas de Andalucia",
      "La Consejeria de Hacienda",
      "La Tesoreria General",
    ],
    correctaIndex: 1,
    explicacion:
      "El control externo lo ejercen la Camara de Cuentas de Andalucia y el Parlamento; la Intervencion General ejerce el control interno.",
    fuente: "Control de la actividad economico-financiera",
    dificultad: "media",
    temaSlug: "aux-presupuesto",
  },
  {
    enunciado: "El principio presupuestario de anualidad implica que el presupuesto se refiere:",
    opciones: [
      "A un periodo indefinido sin limite temporal",
      "A un periodo de cuatro anos",
      "Exclusivamente al semestre natural",
      "A un ejercicio economico que coincide, con caracter general, con el ano natural",
    ],
    correctaIndex: 3,
    explicacion:
      "El principio de anualidad supone que el presupuesto se aprueba para un ejercicio economico que coincide, por regla general, con el ano natural.",
    fuente: "Principios presupuestarios",
    dificultad: "facil",
    temaSlug: "aux-presupuesto",
  },

  // Tema 11: aux-contratacion
  {
    enunciado: "Segun la Ley 9/2017 (LCSP), son contratos tipicos del sector publico, entre otros:",
    opciones: [
      "Los de trabajo, arrendamiento urbano y compraventa civil",
      "Los de obras, suministro, servicios y concesion de obras y de servicios",
      "Los de seguro privado y de sociedad mercantil",
      "Los de prestamo y de deposito bancario",
    ],
    correctaIndex: 1,
    explicacion:
      "Los contratos tipicos de la LCSP son los de obras, concesion de obras, concesion de servicios, suministro y servicios.",
    fuente: "Ley 9/2017 (LCSP), arts. 12 y ss.",
    dificultad: "facil",
    temaSlug: "aux-contratacion",
  },
  {
    enunciado:
      "Tienen la consideracion de contratos menores los contratos de obras de valor estimado inferior a:",
    opciones: ["15.000 euros", "25.000 euros", "40.000 euros", "60.000 euros"],
    correctaIndex: 2,
    explicacion:
      "El contrato menor de obras es el de valor estimado inferior a 40.000 euros; para suministros y servicios el umbral es de 15.000 euros.",
    fuente: "Ley 9/2017 (LCSP), art. 118",
    dificultad: "media",
    temaSlug: "aux-contratacion",
  },
  {
    enunciado:
      "Tienen la consideracion de contratos menores los contratos de suministro o de servicios de valor estimado inferior a:",
    opciones: ["15.000 euros", "40.000 euros", "60.000 euros", "6.000 euros"],
    correctaIndex: 0,
    explicacion:
      "El contrato menor de suministros o servicios es el de valor estimado inferior a 15.000 euros, IVA excluido.",
    fuente: "Ley 9/2017 (LCSP), art. 118",
    dificultad: "media",
    temaSlug: "aux-contratacion",
  },
  {
    enunciado: "El contrato menor tiene una duracion maxima de:",
    opciones: [
      "Cuatro anos, prorrogable por dos mas",
      "Dos anos, prorrogable un ano",
      "Seis meses, prorrogable indefinidamente",
      "Un ano y no puede ser objeto de prorroga",
    ],
    correctaIndex: 3,
    explicacion:
      "El contrato menor no puede tener una duracion superior a un ano ni ser objeto de prorroga.",
    fuente: "Ley 9/2017 (LCSP), art. 29.8",
    dificultad: "dificil",
    temaSlug: "aux-contratacion",
  },
  {
    enunciado: "En el procedimiento abierto de adjudicacion:",
    opciones: [
      "Solo pueden participar los empresarios invitados por el organo",
      "La adjudicacion se realiza sin publicidad alguna",
      "Cualquier empresario interesado puede presentar una proposicion, quedando excluida toda negociacion de los terminos del contrato",
      "Se negocia el contrato con un unico empresario",
    ],
    correctaIndex: 2,
    explicacion:
      "En el procedimiento abierto puede presentar oferta cualquier empresario interesado, sin negociacion de los terminos del contrato.",
    fuente: "Ley 9/2017 (LCSP), art. 156",
    dificultad: "media",
    temaSlug: "aux-contratacion",
  },
  {
    enunciado: "En el procedimiento restringido:",
    opciones: [
      "Puede participar cualquier empresario sin seleccion previa",
      "No se exige acreditar solvencia",
      "Se adjudica siempre al de menor precio sin mas tramite",
      "Solo pueden presentar proposiciones los empresarios seleccionados por el organo de contratacion tras su solicitud de participacion",
    ],
    correctaIndex: 3,
    explicacion:
      "En el restringido, cualquier empresario puede solicitar participar, pero solo presentan oferta los seleccionados por el organo tras valorar su solvencia.",
    fuente: "Ley 9/2017 (LCSP), art. 160",
    dificultad: "media",
    temaSlug: "aux-contratacion",
  },
  {
    enunciado: "El perfil de contratante es el instrumento que:",
    opciones: [
      "Difunde a traves de internet la informacion relativa a la actividad contractual de los organos de contratacion",
      "Recoge la contabilidad interna del organo",
      "Sustituye al contrato formalizado",
      "Acredita la solvencia de los licitadores",
    ],
    correctaIndex: 0,
    explicacion:
      "El perfil de contratante difunde por internet la actividad contractual del organo y se aloja en la Plataforma de Contratacion del Sector Publico.",
    fuente: "Ley 9/2017 (LCSP), art. 63",
    dificultad: "media",
    temaSlug: "aux-contratacion",
  },
  {
    enunciado: "Cual de los siguientes NO es un contrato tipico del sector publico segun la LCSP?",
    opciones: [
      "El contrato de obras",
      "El contrato de arrendamiento de vivienda",
      "El contrato de suministro",
      "El contrato de servicios",
    ],
    correctaIndex: 1,
    explicacion:
      "El arrendamiento de vivienda es un contrato privado; los contratos tipicos son obras, concesiones, suministro y servicios.",
    fuente: "Ley 9/2017 (LCSP), arts. 12 y ss.",
    dificultad: "facil",
    temaSlug: "aux-contratacion",
  },
  {
    enunciado:
      "La contratacion del sector publico debe ajustarse, entre otros, a los principios de:",
    opciones: [
      "Discrecionalidad y confidencialidad absoluta",
      "Adjudicacion directa preferente",
      "Reserva de contratos a empresas locales",
      "Libertad de acceso a las licitaciones, publicidad, transparencia, no discriminacion e igualdad de trato",
    ],
    correctaIndex: 3,
    explicacion:
      "La contratacion publica se rige por libertad de acceso, publicidad, transparencia, no discriminacion e igualdad de trato entre los licitadores.",
    fuente: "Ley 9/2017 (LCSP), art. 1",
    dificultad: "media",
    temaSlug: "aux-contratacion",
  },
  {
    enunciado: "El dialogo competitivo es un procedimiento de adjudicacion en el que:",
    opciones: [
      "El organo de contratacion dirige un dialogo con los candidatos seleccionados para desarrollar soluciones que sirvan de base a las ofertas",
      "Se contrata directamente sin publicidad ni ofertas",
      "Solo se valora el precio mas bajo",
      "Se prescinde de la seleccion previa de candidatos",
    ],
    correctaIndex: 0,
    explicacion:
      "En el dialogo competitivo el organo dialoga con los candidatos para definir las soluciones que serviran de base a las ofertas finales.",
    fuente: "Ley 9/2017 (LCSP), art. 172",
    dificultad: "dificil",
    temaSlug: "aux-contratacion",
  },
  {
    enunciado:
      "En la tramitacion del expediente de un contrato menor se exige, entre otros requisitos:",
    opciones: [
      "La publicacion en el Diario Oficial de la Union Europea",
      "La aprobacion del gasto y la incorporacion de la factura correspondiente",
      "La constitucion obligatoria de garantia definitiva del 5%",
      "La celebracion de mesa de contratacion",
    ],
    correctaIndex: 1,
    explicacion:
      "El expediente del contrato menor exige la aprobacion del gasto y la incorporacion de la factura, sin mesa de contratacion ni publicidad europea.",
    fuente: "Ley 9/2017 (LCSP), art. 118",
    dificultad: "media",
    temaSlug: "aux-contratacion",
  },
  {
    enunciado:
      "En el contrato de concesion de servicios, la contraprestacion a favor del concesionario consiste:",
    opciones: [
      "Siempre en un precio cierto abonado por la Administracion",
      "En la transmision de la titularidad del servicio",
      "En el derecho a explotar el servicio, asumiendo el riesgo operacional, o en ese derecho acompanado de un precio",
      "Exclusivamente en subvenciones a fondo perdido",
    ],
    correctaIndex: 2,
    explicacion:
      "En la concesion de servicios el concesionario asume el riesgo operacional y su contraprestacion es el derecho a explotar el servicio, con o sin precio.",
    fuente: "Ley 9/2017 (LCSP), art. 15",
    dificultad: "dificil",
    temaSlug: "aux-contratacion",
  },

  // Tema 12: aux-sistemas-informacion
  {
    enunciado: "El NUHSA (Numero Unico de Historia de Salud de Andalucia) es:",
    opciones: [
      "El numero de la tarjeta de credito sanitaria",
      "El codigo del centro de salud",
      "El codigo que identifica de forma unica a cada usuario en el sistema sanitario publico andaluz",
      "El numero de colegiado del medico",
    ],
    correctaIndex: 2,
    explicacion:
      "El NUHSA es el identificador unico de cada usuario en el sistema sanitario andaluz, que vincula toda su informacion de salud.",
    fuente: "Sistemas de informacion del SSPA",
    dificultad: "facil",
    temaSlug: "aux-sistemas-informacion",
  },
  {
    enunciado: "La Base de Datos de Usuarios (BDU) del SSPA contiene:",
    opciones: [
      "El historial de compras de la farmacia",
      "Los datos identificativos y administrativos de la poblacion usuaria del sistema sanitario",
      "El inventario de material clinico",
      "Las nominas del personal",
    ],
    correctaIndex: 1,
    explicacion:
      "La BDU almacena los datos identificativos y administrativos de la poblacion usuaria del SSPA y se vincula a la tarjeta sanitaria.",
    fuente: "Sistemas de informacion del SSPA",
    dificultad: "facil",
    temaSlug: "aux-sistemas-informacion",
  },
  {
    enunciado: "En los sistemas de informacion del SAS, Diraya es:",
    opciones: [
      "Un programa de gestion de nominas",
      "Una red social de pacientes",
      "Un sistema de videovigilancia hospitalaria",
      "El sistema que integra la historia clinica electronica unica de los usuarios del SSPA",
    ],
    correctaIndex: 3,
    explicacion:
      "Diraya es el sistema de historia clinica electronica unica del SSPA, que integra la informacion de atencion primaria y hospitalaria.",
    fuente: "Sistemas de informacion del SSPA",
    dificultad: "media",
    temaSlug: "aux-sistemas-informacion",
  },
  {
    enunciado: "El modulo de citacion de Diraya permite:",
    opciones: [
      "Gestionar las citas de los usuarios en atencion primaria y especializada",
      "Elaborar el presupuesto del centro",
      "Controlar el acceso fisico al edificio",
      "Tramitar las pensiones de jubilacion",
    ],
    correctaIndex: 0,
    explicacion:
      "El modulo de citacion de Diraya gestiona las citas de los usuarios tanto en atencion primaria como en especializada.",
    fuente: "Sistemas de informacion del SSPA",
    dificultad: "media",
    temaSlug: "aux-sistemas-informacion",
  },
  {
    enunciado: "El Registro de Demanda Quirurgica recoge:",
    opciones: [
      "El listado del personal quirurgico de guardia",
      "La relacion de pacientes pendientes de una intervencion quirurgica programada",
      "El inventario de quirofanos disponibles",
      "Las facturas de material quirurgico",
    ],
    correctaIndex: 1,
    explicacion:
      "El Registro de Demanda Quirurgica contiene la relacion de pacientes pendientes de una intervencion quirurgica programada (lista de espera quirurgica).",
    fuente: "Sistemas de informacion del SSPA",
    dificultad: "media",
    temaSlug: "aux-sistemas-informacion",
  },
  {
    enunciado:
      "En Andalucia, la garantia de respuesta quirurgica para determinados procesos establece un plazo maximo de:",
    opciones: ["180 dias", "365 dias", "30 dias", "90 dias"],
    correctaIndex: 0,
    explicacion:
      "La garantia de plazo de respuesta quirurgica en Andalucia se fija, con caracter general, en 180 dias para los procesos incluidos.",
    fuente: "Garantia de plazos de respuesta asistencial (SSPA)",
    dificultad: "dificil",
    temaSlug: "aux-sistemas-informacion",
  },
  {
    enunciado:
      "La garantia de plazo de respuesta para primeras consultas de asistencia especializada y procedimientos diagnosticos se situa, con caracter general, en:",
    opciones: ["180 dias", "24 horas", "15 dias", "60 dias"],
    correctaIndex: 3,
    explicacion:
      "La garantia de respuesta para primeras consultas de asistencia especializada y procedimientos diagnosticos se fija, con caracter general, en 60 dias.",
    fuente: "Garantia de plazos de respuesta asistencial (SSPA)",
    dificultad: "dificil",
    temaSlug: "aux-sistemas-informacion",
  },
  {
    enunciado: "El Conjunto Minimo Basico de Datos (CMBD) recoge:",
    opciones: [
      "Los datos meteorologicos de la provincia",
      "El catalogo de medicamentos financiados",
      "Informacion clinica y administrativa que se registra al alta de cada episodio de hospitalizacion",
      "Las tarifas de los servicios privados",
    ],
    correctaIndex: 2,
    explicacion:
      "El CMBD recoge, al alta de cada episodio de hospitalizacion, informacion clinica y administrativa homogenea (diagnosticos y procedimientos).",
    fuente: "Sistemas de informacion del SSPA",
    dificultad: "media",
    temaSlug: "aux-sistemas-informacion",
  },
  {
    enunciado: "En el sistema de informacion sanitario andaluz, el NUHSA permite:",
    opciones: [
      "Acceder a las cuentas bancarias del usuario",
      "Sustituir al DNI en todos los tramites",
      "Gestionar el pago de las nominas",
      "Vincular toda la informacion clinica de una persona bajo un identificador unico en el sistema",
    ],
    correctaIndex: 3,
    explicacion:
      "El NUHSA vincula toda la informacion clinica de una persona bajo un identificador unico, garantizando la continuidad asistencial.",
    fuente: "Sistemas de informacion del SSPA",
    dificultad: "media",
    temaSlug: "aux-sistemas-informacion",
  },
  {
    enunciado: "La tarjeta sanitaria individual esta asociada:",
    opciones: [
      "Al registro mercantil provincial",
      "Al padron municipal exclusivamente",
      "A los datos que la persona tiene registrados en la Base de Datos de Usuarios (BDU)",
      "Al registro de la propiedad",
    ],
    correctaIndex: 2,
    explicacion:
      "La tarjeta sanitaria individual se asocia a los datos del usuario recogidos en la BDU, que la identifican en el sistema sanitario.",
    fuente: "Sistemas de informacion del SSPA",
    dificultad: "media",
    temaSlug: "aux-sistemas-informacion",
  },
  {
    enunciado: "Cual de los siguientes NO es un sistema o registro de informacion del SSPA?",
    opciones: [
      "El Boletin Oficial del Estado",
      "Diraya",
      "La Base de Datos de Usuarios (BDU)",
      "El Conjunto Minimo Basico de Datos (CMBD)",
    ],
    correctaIndex: 0,
    explicacion:
      "El Boletin Oficial del Estado no es un sistema de informacion del SSPA; si lo son Diraya, la BDU y el CMBD.",
    fuente: "Sistemas de informacion del SSPA",
    dificultad: "facil",
    temaSlug: "aux-sistemas-informacion",
  },
  {
    enunciado: "El CMBD resulta especialmente util para:",
    opciones: [
      "Controlar el acceso a los aparcamientos",
      "Obtener informacion homogenea sobre la morbilidad atendida y la actividad hospitalaria",
      "Elaborar el calendario laboral",
      "Gestionar la megafonia del centro",
    ],
    correctaIndex: 1,
    explicacion:
      "El CMBD proporciona informacion homogenea y comparable sobre la morbilidad atendida y la actividad hospitalaria, util para la gestion y la planificacion.",
    fuente: "Sistemas de informacion del SSPA",
    dificultad: "media",
    temaSlug: "aux-sistemas-informacion",
  },

  // Tema 13: aux-administracion-electronica
  {
    enunciado: "La sede electronica es:",
    opciones: [
      "Un edificio fisico de atencion al publico",
      "Un programa antivirus institucional",
      "Una red social de empleados publicos",
      "La direccion electronica, disponible a traves de redes de telecomunicaciones, cuya titularidad corresponde a una Administracion Publica",
    ],
    correctaIndex: 3,
    explicacion:
      "La sede electronica es la direccion electronica de titularidad de una Administracion a traves de la cual la ciudadania accede a informacion y servicios.",
    fuente: "Legislacion de administracion electronica",
    dificultad: "facil",
    temaSlug: "aux-administracion-electronica",
  },
  {
    enunciado:
      "El registro electronico de cada Administracion permite la presentacion de documentos:",
    opciones: [
      "Todos los dias del ano, durante las veinticuatro horas",
      "Solo en horario de oficina de lunes a viernes",
      "Unicamente los dias habiles administrativos",
      "Exclusivamente durante el primer trimestre del ano",
    ],
    correctaIndex: 0,
    explicacion:
      "El registro electronico permite la presentacion de documentos todos los dias del ano, las veinticuatro horas (24x365).",
    fuente: "Ley 39/2015, art. 16",
    dificultad: "facil",
    temaSlug: "aux-administracion-electronica",
  },
  {
    enunciado: "La notificacion por medios electronicos se entiende rechazada cuando transcurran:",
    opciones: [
      "Tres dias habiles",
      "Un mes natural",
      "Diez dias naturales desde su puesta a disposicion sin que se acceda a su contenido",
      "Cuarenta y ocho horas",
    ],
    correctaIndex: 2,
    explicacion:
      "La notificacion electronica se entiende rechazada cuando transcurren diez dias naturales desde su puesta a disposicion sin acceder a su contenido.",
    fuente: "Ley 39/2015, art. 43.2",
    dificultad: "dificil",
    temaSlug: "aux-administracion-electronica",
  },
  {
    enunciado: "La notificacion electronica se entiende practicada:",
    opciones: [
      "Cuando se emite, con independencia del acceso",
      "En el momento en que se produzca el acceso a su contenido",
      "A los treinta dias de su puesta a disposicion",
      "Solo tras confirmacion telefonica",
    ],
    correctaIndex: 1,
    explicacion:
      "La notificacion electronica se entiende practicada en el momento en que se accede a su contenido en la sede o en la carpeta ciudadana.",
    fuente: "Ley 39/2015, art. 43.2",
    dificultad: "media",
    temaSlug: "aux-administracion-electronica",
  },
  {
    enunciado: "El certificado electronico es un documento que:",
    opciones: [
      "Vincula unos datos de verificacion de firma a un firmante, confirmando su identidad, emitido por un prestador de servicios de confianza",
      "Cifra automaticamente todo el disco duro",
      "Sustituye a la conexion a internet",
      "Es un tipo de virus informatico",
    ],
    correctaIndex: 0,
    explicacion:
      "El certificado electronico vincula unos datos de verificacion de firma a un firmante y confirma su identidad; lo emite un prestador de servicios de confianza.",
    fuente: "Normativa de servicios electronicos de confianza",
    dificultad: "media",
    temaSlug: "aux-administracion-electronica",
  },
  {
    enunciado: "La firma electronica cualificada:",
    opciones: [
      "Carece de todo valor juridico",
      "Tiene, respecto de los datos consignados en forma electronica, el mismo valor que la firma manuscrita en relacion con los consignados en papel",
      "Solo es valida entre particulares",
      "Requiere presencia fisica ante notario en cada uso",
    ],
    correctaIndex: 1,
    explicacion:
      "La firma electronica cualificada tiene, respecto de los datos electronicos, el mismo valor juridico que la firma manuscrita respecto de los datos en papel.",
    fuente: "Reglamento eIDAS y normativa de firma electronica",
    dificultad: "media",
    temaSlug: "aux-administracion-electronica",
  },
  {
    enunciado: "En la administracion electronica, el sistema Cl@ve es:",
    opciones: [
      "Un procesador de textos oficial",
      "Una red de telefonia publica",
      "Un sistema de identificacion y firma electronica para relacionarse con las Administraciones Publicas",
      "Un modelo de tributacion telematica",
    ],
    correctaIndex: 2,
    explicacion:
      "Cl@ve es un sistema de identificacion, autenticacion y firma electronica que permite a la ciudadania relacionarse con las Administraciones Publicas.",
    fuente: "Sistema Cl@ve de identificacion electronica",
    dificultad: "facil",
    temaSlug: "aux-administracion-electronica",
  },
  {
    enunciado: "La interoperabilidad, en el ambito de la administracion electronica, es:",
    opciones: [
      "La obligacion de usar un unico fabricante de software",
      "La prohibicion de intercambiar datos entre administraciones",
      "La copia de seguridad de los expedientes",
      "La capacidad de los sistemas de informacion para compartir datos y posibilitar el intercambio de informacion entre ellos",
    ],
    correctaIndex: 3,
    explicacion:
      "La interoperabilidad es la capacidad de los sistemas para compartir datos e intercambiar informacion, regulada por el Esquema Nacional de Interoperabilidad.",
    fuente: "Esquema Nacional de Interoperabilidad",
    dificultad: "media",
    temaSlug: "aux-administracion-electronica",
  },
  {
    enunciado: "El Esquema Nacional de Seguridad tiene por objeto:",
    opciones: [
      "Establecer la politica de seguridad en la utilizacion de medios electronicos y los principios y requisitos de proteccion adecuada de la informacion",
      "Regular el horario de las oficinas fisicas",
      "Fijar las retribuciones del personal informatico",
      "Aprobar el presupuesto de tecnologia",
    ],
    correctaIndex: 0,
    explicacion:
      "El Esquema Nacional de Seguridad establece la politica de seguridad en el uso de medios electronicos y los requisitos para proteger la informacion.",
    fuente: "Esquema Nacional de Seguridad",
    dificultad: "media",
    temaSlug: "aux-administracion-electronica",
  },
  {
    enunciado:
      "En sus relaciones con la Administracion por medios electronicos, estan obligadas en todo caso:",
    opciones: [
      "Solo las personas fisicas mayores de 70 anos",
      "Unicamente los turistas extranjeros",
      "Exclusivamente los menores de edad",
      "Las personas juridicas y quienes ejerzan una actividad profesional para la que se requiera colegiacion obligatoria, en los tramites propios de dicha actividad",
    ],
    correctaIndex: 3,
    explicacion:
      "Estan obligadas a relacionarse electronicamente las personas juridicas y los profesionales de colegiacion obligatoria en los tramites propios de su actividad.",
    fuente: "Ley 39/2015, art. 14.2",
    dificultad: "media",
    temaSlug: "aux-administracion-electronica",
  },
  {
    enunciado: "La firma electronica avanzada se caracteriza, frente a la simple, por:",
    opciones: [
      "No identificar en ningun caso al firmante",
      "Permitir identificar al firmante y detectar cualquier cambio posterior de los datos firmados, estando vinculada al firmante de manera unica",
      "Ser siempre en papel",
      "No admitir el uso de certificados",
    ],
    correctaIndex: 1,
    explicacion:
      "La firma avanzada permite identificar al firmante, esta vinculada a el de forma unica y detecta cualquier alteracion posterior de los datos firmados.",
    fuente: "Reglamento eIDAS y normativa de firma electronica",
    dificultad: "dificil",
    temaSlug: "aux-administracion-electronica",
  },
  {
    enunciado: "El DNI electronico permite, ademas de acreditar la identidad fisica de su titular:",
    opciones: [
      "Conectarse a internet sin necesidad de red",
      "Sustituir a la tarjeta sanitaria en la asistencia",
      "Firmar electronicamente documentos e identificarse en tramites telematicos",
      "Realizar copias de seguridad automaticas del movil",
    ],
    correctaIndex: 2,
    explicacion:
      "El DNI electronico acredita la identidad y ademas permite firmar electronicamente documentos e identificarse de forma segura en tramites telematicos.",
    fuente: "Normativa del DNI electronico",
    dificultad: "facil",
    temaSlug: "aux-administracion-electronica",
  },

  // Tema 14: aux-ofimatica
  {
    enunciado: "En informatica, se denomina hardware:",
    opciones: [
      "Al conjunto de componentes fisicos o materiales de un equipo informatico",
      "A los programas y aplicaciones que ejecuta el equipo",
      "A los datos almacenados por el usuario",
      "A la conexion a internet",
    ],
    correctaIndex: 0,
    explicacion:
      "El hardware es el conjunto de componentes fisicos del equipo; el software son los programas y aplicaciones que lo hacen funcionar.",
    fuente: "Conceptos basicos de informatica",
    dificultad: "facil",
    temaSlug: "aux-ofimatica",
  },
  {
    enunciado: "El sistema operativo es el software que:",
    opciones: [
      "Se utiliza solo para redactar textos",
      "Gestiona los recursos del equipo y sirve de intermediario entre el usuario y el hardware",
      "Protege exclusivamente frente a virus",
      "Conecta el equipo a la impresora unicamente",
    ],
    correctaIndex: 1,
    explicacion:
      "El sistema operativo gestiona los recursos del equipo (memoria, procesador, dispositivos) y actua de intermediario entre el usuario y el hardware.",
    fuente: "Conceptos basicos de informatica",
    dificultad: "facil",
    temaSlug: "aux-ofimatica",
  },
  {
    enunciado:
      "En una hoja de calculo, para introducir una formula en una celda se comienza escribiendo:",
    opciones: [
      "El signo de suma (+) en todo caso",
      "Un asterisco (*)",
      "El signo igual (=)",
      "Una comilla simple (')",
    ],
    correctaIndex: 2,
    explicacion:
      "Toda formula en una hoja de calculo comienza con el signo igual (=), que indica al programa que debe realizar un calculo.",
    fuente: "Hoja de calculo",
    dificultad: "facil",
    temaSlug: "aux-ofimatica",
  },
  {
    enunciado: "En una hoja de calculo, la referencia $A$1 es una referencia:",
    opciones: [
      "Relativa, que se ajusta al copiarla",
      "Mixta de columna variable",
      "A un rango de celdas",
      "Absoluta, que no cambia al copiar la formula a otras celdas",
    ],
    correctaIndex: 3,
    explicacion:
      "La referencia $A$1 es absoluta: los simbolos de dolar fijan fila y columna, de modo que no cambia al copiar la formula.",
    fuente: "Hoja de calculo",
    dificultad: "dificil",
    temaSlug: "aux-ofimatica",
  },
  {
    enunciado:
      "En una hoja de calculo, la referencia A1 (sin simbolos de dolar) es una referencia:",
    opciones: [
      "Absoluta, que permanece fija",
      "De solo lectura",
      "Relativa, que se ajusta automaticamente al copiar la formula a otras celdas",
      "A un archivo externo",
    ],
    correctaIndex: 2,
    explicacion:
      "La referencia A1 es relativa: al copiar la formula, la referencia se ajusta automaticamente en funcion de la posicion de destino.",
    fuente: "Hoja de calculo",
    dificultad: "media",
    temaSlug: "aux-ofimatica",
  },
  {
    enunciado:
      "Para sumar el contenido del rango de celdas de A1 a A10 en una hoja de calculo se utiliza la funcion:",
    opciones: ["=CONTAR(A1:A10)", "=PROMEDIO(A1:A10)", "=MAX(A1:A10)", "=SUMA(A1:A10)"],
    correctaIndex: 3,
    explicacion:
      "La funcion SUMA suma el contenido de un rango; CONTAR cuenta celdas con numeros, PROMEDIO calcula la media y MAX devuelve el valor mayor.",
    fuente: "Hoja de calculo",
    dificultad: "dificil",
    temaSlug: "aux-ofimatica",
  },
  {
    enunciado: "En el correo electronico, el campo CCO (copia oculta) se utiliza para:",
    opciones: [
      "Enviar copia a destinatarios sin que el resto de receptores vean sus direcciones",
      "Adjuntar archivos de gran tamano",
      "Responder automaticamente a todos",
      "Cifrar el asunto del mensaje",
    ],
    correctaIndex: 0,
    explicacion:
      "El campo CCO (con copia oculta) permite enviar el mensaje a destinatarios cuyas direcciones no ven los demas receptores, protegiendo su privacidad.",
    fuente: "Correo electronico",
    dificultad: "media",
    temaSlug: "aux-ofimatica",
  },
  {
    enunciado: "Los archivos adjuntos de un correo electronico son:",
    opciones: [
      "Las direcciones de los destinatarios",
      "Ficheros que se envian junto al mensaje",
      "El texto del cuerpo del mensaje",
      "La firma automatica del remitente",
    ],
    correctaIndex: 1,
    explicacion:
      "Los adjuntos son ficheros (documentos, imagenes, etc.) que se envian junto con el mensaje de correo electronico.",
    fuente: "Correo electronico",
    dificultad: "facil",
    temaSlug: "aux-ofimatica",
  },
  {
    enunciado: "El phishing es una tecnica fraudulenta que consiste en:",
    opciones: [
      "Realizar copias de seguridad automaticas",
      "Suplantar a una entidad de confianza para enganar al usuario y obtener sus datos personales o credenciales",
      "Aumentar la velocidad de la conexion",
      "Comprimir archivos para ahorrar espacio",
    ],
    correctaIndex: 1,
    explicacion:
      "El phishing suplanta a una entidad de confianza (banco, administracion) para enganar al usuario y robarle datos personales o credenciales de acceso.",
    fuente: "Seguridad informatica basica",
    dificultad: "media",
    temaSlug: "aux-ofimatica",
  },
  {
    enunciado: "Una buena practica para crear una contrasena segura es:",
    opciones: [
      "Utilizar el nombre propio y la fecha de nacimiento",
      "Usar la misma contrasena en todos los servicios",
      "Combinar mayusculas, minusculas, numeros y simbolos, evitando datos personales faciles de adivinar",
      "Anotarla visible junto al equipo",
    ],
    correctaIndex: 2,
    explicacion:
      "Una contrasena segura combina mayusculas, minusculas, numeros y simbolos, y evita datos personales previsibles; ademas conviene no reutilizarla.",
    fuente: "Seguridad informatica basica",
    dificultad: "media",
    temaSlug: "aux-ofimatica",
  },
  {
    enunciado: "Una copia de seguridad (backup) sirve para:",
    opciones: [
      "Acelerar el arranque del sistema operativo",
      "Eliminar de forma definitiva los archivos",
      "Conectar el equipo a la red local",
      "Disponer de un duplicado de la informacion que permita recuperarla ante perdidas o fallos",
    ],
    correctaIndex: 3,
    explicacion:
      "La copia de seguridad es un duplicado de la informacion que permite recuperarla en caso de perdida, borrado accidental o fallo del sistema.",
    fuente: "Seguridad informatica basica",
    dificultad: "media",
    temaSlug: "aux-ofimatica",
  },
  {
    enunciado: "Una aplicacion de procesamiento de textos permite, principalmente:",
    opciones: [
      "Redactar, dar formato e imprimir documentos de texto",
      "Realizar calculos con celdas y formulas",
      "Gestionar bases de datos relacionales",
      "Editar y retocar fotografias profesionales",
    ],
    correctaIndex: 0,
    explicacion:
      "El procesador de textos sirve para redactar, dar formato e imprimir documentos; los calculos con celdas corresponden a la hoja de calculo.",
    fuente: "Ofimatica basica",
    dificultad: "facil",
    temaSlug: "aux-ofimatica",
  },
];
