import type { SeedPregunta } from "../tipos";

export const BANCO_ENFERMERIA_D: SeedPregunta[] = [
  // enf-63 Atencion domiciliaria
  {
    enunciado: "En atención domiciliaria, se considera paciente inmovilizado a aquel que:",
    opciones: [
      "Vive solo y carece de red de apoyo social en su entorno",
      "Presenta cualquier enfermedad crónica aunque mantenga autonomía para desplazarse",
      "Pasa la mayor parte del tiempo en cama, del que solo puede salir con la ayuda de otras personas, de forma permanente o durante un periodo previsiblemente superior a dos meses",
      "Ha sido dado de alta hospitalaria en la última semana",
    ],
    correctaIndex: 2,
    explicacion:
      "El inmovilizado es la persona con dificultad importante para desplazarse que le impide salir de su domicilio salvo con ayuda, de manera permanente o por un periodo prolongado (habitualmente más de dos meses). No basta con tener una enfermedad crónica.",
    fuente: "Proceso Asistencial Integrado Atención Domiciliaria (SSPA)",
    dificultad: "media",
    temaSlug: "enf-63",
  },
  {
    enunciado:
      "La sobrecarga de la persona cuidadora principal en el domicilio se valora habitualmente con la escala:",
    opciones: ["Escala de Norton", "Índice de Barthel", "Escala de Glasgow", "Escala de Zarit"],
    correctaIndex: 3,
    explicacion:
      "La escala de Zarit mide la sobrecarga del cuidador informal. Norton valora riesgo de úlceras, Glasgow el nivel de conciencia y Barthel las actividades básicas de la vida diaria.",
    fuente: "Escala de sobrecarga del cuidador de Zarit",
    dificultad: "facil",
    temaSlug: "enf-63",
  },
  {
    enunciado: "El servicio de teleasistencia domiciliaria tiene como finalidad principal:",
    opciones: [
      "Sustituir por completo las visitas presenciales del equipo de atención primaria",
      "Realizar analíticas a domicilio de forma automatizada",
      "Ofrecer atención inmediata ante situaciones de emergencia, inseguridad o soledad mediante un dispositivo conectado a un centro de atención permanente",
      "Gestionar únicamente la dispensación de medicación crónica",
    ],
    correctaIndex: 2,
    explicacion:
      "La teleasistencia permite a la persona, pulsando un dispositivo, contactar de forma permanente con un centro de atención para resolver emergencias o situaciones de inseguridad y soledad. No sustituye la atención presencial.",
    fuente: "Servicio Andaluz de Teleasistencia",
    dificultad: "facil",
    temaSlug: "enf-63",
  },
  {
    enunciado:
      "En la atención al paciente terminal en domicilio, el objetivo prioritario de los cuidados es:",
    opciones: [
      "Prolongar la supervivencia mediante medidas de soporte vital",
      "Trasladar al paciente al hospital ante cualquier síntoma",
      "Realizar pruebas diagnósticas de forma periódica",
      "El control de síntomas y el confort, garantizando calidad de vida y respeto a la autonomía del paciente y su familia",
    ],
    correctaIndex: 3,
    explicacion:
      "En cuidados paliativos domiciliarios el objetivo es el confort y el control de síntomas (dolor, disnea, etc.), no prolongar la vida a toda costa ni multiplicar pruebas o ingresos innecesarios.",
    fuente: "Proceso Asistencial Integrado Cuidados Paliativos (SSPA)",
    dificultad: "media",
    temaSlug: "enf-63",
  },
  {
    enunciado: "Se denomina claudicación familiar en el contexto de la atención domiciliaria a:",
    opciones: [
      "La negativa del paciente a recibir tratamiento",
      "La derivación programada del paciente a una residencia",
      "El rechazo del equipo sanitario a continuar las visitas",
      "La incapacidad de los miembros de la familia para ofrecer una respuesta adecuada a las demandas y necesidades del paciente por agotamiento o sobrecarga",
    ],
    correctaIndex: 3,
    explicacion:
      "La claudicación familiar es la incapacidad de los cuidadores para seguir atendiendo las necesidades del paciente, generalmente por agotamiento físico y emocional. Es una situación que el equipo debe prevenir y detectar.",
    fuente: "Proceso Asistencial Integrado Cuidados Paliativos (SSPA)",
    dificultad: "media",
    temaSlug: "enf-63",
  },
  {
    enunciado:
      "En el paciente inmovilizado encamado, la principal medida enfermera para prevenir las úlceras por presión es:",
    opciones: [
      "Aplicar masajes enérgicos sobre las prominencias óseas enrojecidas",
      "Mantener la piel húmeda de forma continua",
      "Realizar cambios posturales programados y aliviar la presión sobre las zonas de riesgo",
      "Elevar el cabecero de la cama por encima de 45 grados de forma permanente",
    ],
    correctaIndex: 2,
    explicacion:
      "La prevención de las úlceras por presión se basa en cambios posturales y alivio de la presión. No debe masajearse la piel enrojecida ni mantenerla húmeda, y la elevación excesiva del cabecero aumenta la presión y la cizalla sobre el sacro.",
    fuente: "Guía de prevención y cuidados de úlceras por presión (SSPA)",
    dificultad: "media",
    temaSlug: "enf-63",
  },
  {
    enunciado:
      "En el marco de la atención a la persona cuidadora, la tarjeta +Cuidado (Andalucía) está dirigida a:",
    opciones: [
      "Cuidadoras y cuidadores de personas en situación de dependencia, para facilitarles atención y apoyo por parte del sistema sanitario",
      "Pacientes crónicos polimedicados exclusivamente",
      "Profesionales de enfermería con dedicación a domicilio",
      "Personas mayores de 80 años que viven solas",
    ],
    correctaIndex: 0,
    explicacion:
      "La tarjeta +Cuidado identifica a las personas cuidadoras principales para ofrecerles apoyo, información y atención preferente por parte del sistema sanitario andaluz.",
    fuente: "Plan de Apoyo a las Familias Cuidadoras (Andalucía)",
    dificultad: "media",
    temaSlug: "enf-63",
  },
  {
    enunciado:
      "¿Cuál de las siguientes NO es una actividad propia de la atención domiciliaria de enfermería?",
    opciones: [
      "Valoración integral de las necesidades del paciente y su entorno",
      "Educación sanitaria a la persona cuidadora",
      "Realización de intervenciones quirúrgicas programadas en el domicilio",
      "Seguimiento de curas, sondajes y tratamiento en el hogar",
    ],
    correctaIndex: 2,
    explicacion:
      "La atención domiciliaria incluye valoración, educación sanitaria y técnicas como curas o sondajes, pero las intervenciones quirúrgicas programadas se realizan en el ámbito hospitalario, no en el domicilio.",
    fuente: "Cartera de servicios de Atención Primaria (SSPA)",
    dificultad: "facil",
    temaSlug: "enf-63",
  },
  {
    enunciado:
      "En la valoración del paciente inmovilizado, el instrumento más adecuado para medir su grado de dependencia en las actividades básicas de la vida diaria es:",
    opciones: [
      "El test de Pfeiffer",
      "La escala de Zarit",
      "El cuestionario Apgar familiar",
      "El índice de Barthel",
    ],
    correctaIndex: 3,
    explicacion:
      "El índice de Barthel valora la independencia en actividades básicas (comer, asearse, vestirse, deambular). Pfeiffer valora el deterioro cognitivo, Zarit la sobrecarga del cuidador y el Apgar la función familiar.",
    fuente: "Índice de Barthel para actividades básicas de la vida diaria",
    dificultad: "media",
    temaSlug: "enf-63",
  },
  {
    enunciado:
      "Ante un paciente terminal en domicilio con dolor mal controlado, la actuación enfermera más adecuada es:",
    opciones: [
      "Esperar a la siguiente visita programada sin modificar nada",
      "Derivar de inmediato a urgencias hospitalarias en todos los casos",
      "Suspender la analgesia pautada para evitar dependencia",
      "Valorar el dolor, comunicarlo al equipo para ajustar la analgesia y educar a la familia en su administración y en la identificación de signos de alarma",
    ],
    correctaIndex: 3,
    explicacion:
      "El control del dolor es prioritario en el paciente terminal. La enfermera valora la intensidad, coordina con el equipo el ajuste analgésico y educa a la familia, evitando ingresos innecesarios y sin suspender la pauta por temor infundado a la dependencia.",
    fuente: "Proceso Asistencial Integrado Cuidados Paliativos (SSPA)",
    dificultad: "dificil",
    temaSlug: "enf-63",
  },

  // enf-64 Atencion a la familia
  {
    enunciado: "El genograma es una herramienta que permite representar de forma gráfica:",
    opciones: [
      "El nivel de dependencia funcional del paciente",
      "El consumo de recursos sanitarios de una zona básica de salud",
      "El riesgo cardiovascular a diez años",
      "La estructura familiar, las relaciones entre sus miembros y los antecedentes de salud a lo largo de al menos tres generaciones",
    ],
    correctaIndex: 3,
    explicacion:
      "El genograma es una representación gráfica de la familia que recoge su composición, las relaciones entre miembros y la información de salud, habitualmente a lo largo de tres generaciones.",
    fuente: "Atención Familiar en Atención Primaria",
    dificultad: "facil",
    temaSlug: "enf-64",
  },
  {
    enunciado:
      "El cuestionario Apgar familiar evalúa la percepción del individuo sobre el funcionamiento de su familia mediante cinco componentes. ¿Cuáles son?",
    opciones: [
      "Aspecto, pulso, gesticulación, actividad y respiración",
      "Alimentación, prevención, gestión, ayuda y rehabilitación",
      "Autonomía, protección, ganancia, apoyo y respeto",
      "Adaptación, participación, gradiente de crecimiento, afecto y resolución",
    ],
    correctaIndex: 3,
    explicacion:
      "El Apgar familiar de Smilkstein valora cinco dimensiones: Adaptación, Participación, Gradiente de crecimiento (o desarrollo), Afecto y Resolución (capacidad resolutiva/recursos).",
    fuente: "Cuestionario Apgar familiar de Smilkstein",
    dificultad: "media",
    temaSlug: "enf-64",
  },
  {
    enunciado:
      "Según el ciclo vital familiar, la etapa que se inicia cuando los hijos comienzan a abandonar el hogar se denomina:",
    opciones: [
      "Familia con hijos en edad escolar",
      "Formación de la pareja",
      "Nido vacío o plataforma de lanzamiento",
      "Extensión familiar",
    ],
    correctaIndex: 2,
    explicacion:
      'La etapa de contracción o "nido vacío" (plataforma de lanzamiento) corresponde a la salida progresiva de los hijos del hogar. Es una fase de reajuste de la pareja.',
    fuente: "Ciclo vital familiar (Duvall)",
    dificultad: "media",
    temaSlug: "enf-64",
  },
  {
    enunciado:
      "En un genograma, la línea que representa una relación conflictiva entre dos miembros de la familia se dibuja habitualmente como:",
    opciones: [
      "Una línea recta continua y sencilla",
      "Una doble línea continua paralela",
      "Una línea en zigzag o quebrada entre ambos",
      "Una línea de puntos discontinua",
    ],
    correctaIndex: 2,
    explicacion:
      "En la simbología del genograma, la relación conflictiva se representa con una línea quebrada o en zigzag. La línea sencilla indica relación normal, la doble una relación muy estrecha y la discontinua una relación distante.",
    fuente: "Simbología del genograma familiar",
    dificultad: "dificil",
    temaSlug: "enf-64",
  },
  {
    enunciado: "Se define familia nuclear como:",
    opciones: [
      "La formada por miembros de tres o más generaciones que conviven",
      "La constituida por una sola persona que vive sola",
      "La formada por parejas y sus parientes colaterales sin descendencia",
      "La formada por dos generaciones: los progenitores (o uno de ellos) y sus hijos",
    ],
    correctaIndex: 3,
    explicacion:
      "La familia nuclear está compuesta por dos generaciones que conviven: los padres (o uno de ellos) y los hijos. La de tres generaciones es extensa y la de una sola persona es unipersonal.",
    fuente: "Tipología de la estructura familiar",
    dificultad: "facil",
    temaSlug: "enf-64",
  },
  {
    enunciado:
      "Una puntuación baja en el cuestionario Apgar familiar (por ejemplo, de 0 a 3 puntos) indica:",
    opciones: [
      "Una familia normofuncional",
      "Una familia sin hijos a cargo",
      "Una familia gravemente disfuncional",
      "Ausencia de red de apoyo comunitario",
    ],
    correctaIndex: 2,
    explicacion:
      "En el Apgar familiar, a mayor puntuación mejor función familiar percibida. Las puntuaciones más bajas reflejan disfunción familiar grave, dato relevante para el abordaje enfermero.",
    fuente: "Cuestionario Apgar familiar de Smilkstein",
    dificultad: "media",
    temaSlug: "enf-64",
  },
  {
    enunciado:
      'El concepto de "acontecimiento vital estresante" en la atención familiar hace referencia a:',
    opciones: [
      "Los conflictos exclusivamente económicos de la familia",
      "Únicamente enfermedades crónicas de un miembro",
      "Sucesos que requieren un esfuerzo de adaptación de la familia, como un fallecimiento, un divorcio o el nacimiento de un hijo",
      "Las visitas programadas del equipo de atención primaria",
    ],
    correctaIndex: 2,
    explicacion:
      "Los acontecimientos vitales estresantes son sucesos (positivos o negativos) que obligan a la familia a reajustarse: nacimientos, muertes, separaciones, cambios laborales, etc. Pueden repercutir en la salud de sus miembros.",
    fuente: "Atención Familiar en Atención Primaria",
    dificultad: "media",
    temaSlug: "enf-64",
  },
  {
    enunciado: "¿Cuál de los siguientes NO es un componente evaluado por el Apgar familiar?",
    opciones: ["Afecto", "Participación", "Nivel socioeconómico de la familia", "Resolución"],
    correctaIndex: 2,
    explicacion:
      "El Apgar familiar evalúa Adaptación, Participación, Gradiente de crecimiento, Afecto y Resolución. El nivel socioeconómico no forma parte de sus cinco componentes.",
    fuente: "Cuestionario Apgar familiar de Smilkstein",
    dificultad: "facil",
    temaSlug: "enf-64",
  },
  {
    enunciado: "En el genograma, para representar a una persona ya fallecida se utiliza:",
    opciones: [
      "Un círculo o cuadrado de mayor tamaño que el resto",
      "Un triángulo",
      "Una figura rellena de color negro por completo",
      "El símbolo correspondiente (cuadrado u óvalo) con una cruz o aspa en su interior",
    ],
    correctaIndex: 3,
    explicacion:
      "El fallecimiento se representa con una X o aspa dentro del símbolo de la persona (cuadrado para hombre, círculo para mujer). El triángulo suele indicar embarazo o aborto según la notación.",
    fuente: "Simbología del genograma familiar",
    dificultad: "media",
    temaSlug: "enf-64",
  },
  {
    enunciado:
      "El instrumento que representa gráficamente las relaciones de la familia con los sistemas y recursos externos de su entorno (amigos, trabajo, servicios sanitarios, etc.) se denomina:",
    opciones: ["Cronograma familiar", "Genograma", "Ecomapa", "Sociograma escolar"],
    correctaIndex: 2,
    explicacion:
      "El ecomapa representa las relaciones de la familia con su entorno y los recursos comunitarios. El genograma se centra en la estructura y relaciones internas de la familia.",
    fuente: "Atención Familiar en Atención Primaria",
    dificultad: "media",
    temaSlug: "enf-64",
  },

  // enf-65 Atencion a la comunidad
  {
    enunciado: "El diagnóstico de salud de una comunidad tiene como finalidad principal:",
    opciones: [
      "Elaborar la historia clínica de los pacientes crónicos",
      "Diagnosticar enfermedades individuales de cada paciente del cupo",
      "Identificar y describir los problemas y necesidades de salud de una población para priorizar intervenciones",
      "Calcular exclusivamente el gasto farmacéutico de una zona",
    ],
    correctaIndex: 2,
    explicacion:
      "El diagnóstico de salud comunitaria describe el estado de salud de una población y sus determinantes para identificar necesidades, priorizar y planificar intervenciones de salud comunitaria.",
    fuente: "Guía de atención comunitaria basada en activos (SSPA)",
    dificultad: "facil",
    temaSlug: "enf-65",
  },
  {
    enunciado: "Según la definición de la OMS, un activo para la salud es:",
    opciones: [
      "Cualquier fármaco incluido en la cartera de servicios",
      "El presupuesto sanitario destinado a una zona básica de salud",
      "Cualquier factor o recurso que potencia la capacidad de individuos, comunidades y poblaciones para mantener la salud y el bienestar",
      "Un factor de riesgo modificable de enfermedad crónica",
    ],
    correctaIndex: 2,
    explicacion:
      "Un activo para la salud es todo recurso (personas, asociaciones, espacios, servicios) que mejora la capacidad de las personas y comunidades para mantener y aumentar su salud. Se contrapone al modelo centrado solo en déficits.",
    fuente: "Modelo de activos para la salud (Morgan y Ziglio; OMS)",
    dificultad: "media",
    temaSlug: "enf-65",
  },
  {
    enunciado:
      'La recomendación o "prescripción" de un recurso comunitario a una persona por parte de un profesional sanitario se conoce como:',
    opciones: [
      "Derivación hospitalaria",
      "Cribado poblacional",
      "Interconsulta especializada",
      "Recomendación de activos o prescripción social",
    ],
    correctaIndex: 3,
    explicacion:
      "La recomendación de activos (prescripción social) consiste en orientar a la persona hacia recursos comunitarios (grupos de paseo, asociaciones, actividades) que favorecen su salud, complementando la atención clínica.",
    fuente: "Guía de recomendación de activos para la salud (SSPA)",
    dificultad: "media",
    temaSlug: "enf-65",
  },
  {
    enunciado: "El mapeo de activos para la salud consiste en:",
    opciones: [
      "Registrar únicamente los casos de enfermedad de una zona",
      "Elaborar el mapa epidemiológico de mortalidad",
      "Medir el consumo de recursos sanitarios por barrio",
      "Identificar y visibilizar los recursos y activos de salud existentes en una comunidad para ponerlos en valor y facilitar su uso",
    ],
    correctaIndex: 3,
    explicacion:
      "El mapeo de activos es el proceso de identificar, localizar y dar a conocer los recursos comunitarios que favorecen la salud, con participación de la propia comunidad.",
    fuente: "Guía de atención comunitaria basada en activos (SSPA)",
    dificultad: "media",
    temaSlug: "enf-65",
  },
  {
    enunciado:
      "Según el modelo de Dahlgren y Whitehead, los determinantes sociales de la salud se representan como:",
    opciones: [
      "Capas o arcos concéntricos que van desde los factores individuales hasta las condiciones socioeconómicas, culturales y ambientales generales",
      "Una pirámide de necesidades de tres niveles",
      "Un árbol de decisiones clínicas",
      "Una escalera analgésica de cuatro peldaños",
    ],
    correctaIndex: 0,
    explicacion:
      "El modelo de Dahlgren y Whitehead representa los determinantes de la salud en capas concéntricas: en el centro los factores individuales (edad, sexo, genética) y hacia fuera los estilos de vida, redes sociales, condiciones de vida y trabajo y factores estructurales.",
    fuente: "Modelo de determinantes sociales de Dahlgren y Whitehead",
    dificultad: "media",
    temaSlug: "enf-65",
  },
  {
    enunciado:
      "Entre los determinantes sociales de la salud, se consideran determinantes estructurales:",
    opciones: [
      "La carga genética y la edad de la persona",
      "La adherencia al tratamiento farmacológico",
      "El consumo individual de tabaco",
      "El nivel de ingresos, la educación, el empleo y la clase social",
    ],
    correctaIndex: 3,
    explicacion:
      "Los determinantes estructurales incluyen la posición socioeconómica, el nivel educativo, la ocupación, la clase social y el género, que condicionan las desigualdades en salud. La genética y la edad son factores individuales no modificables.",
    fuente: "Determinantes sociales de la salud (OMS)",
    dificultad: "media",
    temaSlug: "enf-65",
  },
  {
    enunciado: "La participación comunitaria en salud se caracteriza por:",
    opciones: [
      "Ser un proceso en el que la propia comunidad interviene en la identificación de sus problemas y en la toma de decisiones sobre su salud",
      "Limitarse a informar a la población de las decisiones ya tomadas por la administración",
      "Consistir exclusivamente en la asistencia a consultas médicas",
      "Ser una competencia únicamente del personal sanitario, sin implicación vecinal",
    ],
    correctaIndex: 0,
    explicacion:
      "La participación comunitaria implica que la comunidad se involucre activamente en detectar sus necesidades, priorizar y decidir sobre las intervenciones de salud, no ser un mero receptor pasivo de información.",
    fuente: "Atención Primaria orientada a la comunidad",
    dificultad: "facil",
    temaSlug: "enf-65",
  },
  {
    enunciado:
      "¿Cuál de las siguientes fuentes proporciona datos cuantitativos para elaborar el diagnóstico de salud de una comunidad?",
    opciones: [
      "Únicamente las entrevistas informales a vecinos",
      "Exclusivamente la observación del profesional",
      "Los indicadores demográficos, de morbimortalidad y socioeconómicos de la zona",
      "El genograma de una familia concreta",
    ],
    correctaIndex: 2,
    explicacion:
      "El diagnóstico de salud comunitaria integra datos cuantitativos (demográficos, de morbilidad y mortalidad, socioeconómicos) con información cualitativa. El genograma es una herramienta de nivel familiar, no comunitario.",
    fuente: "Guía de atención comunitaria basada en activos (SSPA)",
    dificultad: "media",
    temaSlug: "enf-65",
  },
  {
    enunciado: "El modelo salutogénico de Antonovsky pone el foco en:",
    opciones: [
      "Las causas de la enfermedad y sus factores de riesgo",
      "El origen de la salud y los factores que la generan y la mantienen",
      "El coste de la asistencia sanitaria",
      "La clasificación internacional de enfermedades",
    ],
    correctaIndex: 1,
    explicacion:
      "La salutogénesis de Antonovsky estudia el origen de la salud (qué hace que las personas se mantengan sanas), en contraposición al modelo patogénico centrado en la enfermedad. Es la base conceptual del enfoque de activos.",
    fuente: "Modelo salutogénico (Antonovsky)",
    dificultad: "dificil",
    temaSlug: "enf-65",
  },
  {
    enunciado:
      "En el proceso de intervención comunitaria, tras el diagnóstico de salud, la siguiente fase lógica es:",
    opciones: [
      "Dar de alta a todos los pacientes crónicos de la zona",
      "Cerrar el centro de salud durante la evaluación",
      "Suspender toda actividad asistencial",
      "Priorizar los problemas identificados y planificar las intervenciones con participación de la comunidad",
    ],
    correctaIndex: 3,
    explicacion:
      "Después del diagnóstico de salud se priorizan los problemas y se planifican las intervenciones (con objetivos, actividades y evaluación), contando con la participación de la comunidad.",
    fuente: "Atención Primaria orientada a la comunidad",
    dificultad: "facil",
    temaSlug: "enf-65",
  },

  // enf-66 Pacientes cronicos
  {
    enunciado:
      "La estratificación de la población según la pirámide de Kaiser Permanente clasifica a los pacientes crónicos en función de:",
    opciones: [
      "Su edad cronológica exclusivamente",
      "El orden alfabético de sus apellidos",
      "Su nivel de complejidad y necesidad de cuidados, en niveles de menor a mayor riesgo",
      "El número de fármacos que toman únicamente",
    ],
    correctaIndex: 2,
    explicacion:
      "La pirámide de Kaiser estratifica a la población crónica por niveles de complejidad y riesgo para asignar intervenciones proporcionadas: autocuidado en la base y gestión de casos en la cúspide.",
    fuente: "Modelo de estratificación de Kaiser Permanente",
    dificultad: "facil",
    temaSlug: "enf-66",
  },
  {
    enunciado:
      "En la pirámide de Kaiser, el nivel superior (vértice), correspondiente a los pacientes de mayor complejidad, requiere una intervención de:",
    opciones: [
      "Promoción de la salud poblacional",
      "Únicamente educación para el autocuidado",
      "Ninguna intervención específica",
      "Gestión de casos por una enfermera gestora de casos",
    ],
    correctaIndex: 3,
    explicacion:
      "En el vértice de la pirámide se sitúan los pacientes altamente complejos que necesitan gestión de casos individualizada, habitualmente coordinada por la enfermera gestora de casos. La base recibe apoyo al autocuidado.",
    fuente: "Modelo de estratificación de Kaiser Permanente",
    dificultad: "media",
    temaSlug: "enf-66",
  },
  {
    enunciado: "En Andalucía se define paciente pluripatológico como aquel que:",
    opciones: [
      "Padece dos o más enfermedades crónicas incluidas en determinadas categorías clínicas, con especial fragilidad y tendencia a la discapacidad",
      "Toma más de cinco fármacos al día",
      "Tiene más de 65 años de edad",
      "Ha ingresado en el hospital al menos una vez en el último año",
    ],
    correctaIndex: 0,
    explicacion:
      "El paciente pluripatológico se define por la presencia de enfermedades crónicas de dos o más categorías clínicas definidas, con especial fragilidad clínica y riesgo de deterioro funcional. No se define solo por edad, polifarmacia o ingresos.",
    fuente: "Proceso Asistencial Integrado Atención al Paciente Pluripatológico (SSPA)",
    dificultad: "media",
    temaSlug: "enf-66",
  },
  {
    enunciado:
      'El concepto de "paciente activo" en el abordaje de la cronicidad hace referencia a la persona que:',
    opciones: [
      "Realiza actividad física de forma regular únicamente",
      "Está de alta laboral pese a su enfermedad",
      "Acude con frecuencia a los servicios de urgencias",
      "Adquiere conocimientos y habilidades para gestionar su propia enfermedad, tomando un papel corresponsable en su cuidado",
    ],
    correctaIndex: 3,
    explicacion:
      "El paciente activo es aquel que, formado e informado, participa de forma corresponsable en el manejo de su enfermedad crónica (autocuidado, adherencia, toma de decisiones). La actividad física no es su definición.",
    fuente: "Estrategia de cuidados y de atención a la cronicidad (SSPA)",
    dificultad: "media",
    temaSlug: "enf-66",
  },
  {
    enunciado: "La Escuela de Pacientes de Andalucía tiene como objetivo fundamental:",
    opciones: [
      "Formar a médicos residentes en gestión clínica",
      "Formar e informar a pacientes, familiares y personas cuidadoras para mejorar el conocimiento y el manejo de la enfermedad",
      "Sustituir las consultas de atención primaria por formación en línea",
      "Certificar oficialmente la capacidad laboral de los pacientes",
    ],
    correctaIndex: 1,
    explicacion:
      "La Escuela de Pacientes ofrece formación a pacientes, cuidadores y ciudadanía para que aprendan a cuidarse y a manejar mejor su enfermedad, potenciando el autocuidado y la educación entre iguales.",
    fuente: "Escuela de Pacientes (Andalucía)",
    dificultad: "facil",
    temaSlug: "enf-66",
  },
  {
    enunciado:
      "La educación grupal entre iguales, en la que pacientes con experiencia en una enfermedad crónica ayudan a formar a otros pacientes, se denomina:",
    opciones: [
      "Consulta de alta resolución",
      "Formación de paciente experto o paciente formador entre iguales",
      "Interconsulta virtual",
      "Auditoría clínica",
    ],
    correctaIndex: 1,
    explicacion:
      "El programa de paciente experto o formación entre iguales se apoya en pacientes con experiencia que transmiten conocimientos y habilidades de autocuidado a otros pacientes, mejorando la adherencia y la autonomía.",
    fuente: "Escuela de Pacientes (Andalucía)",
    dificultad: "media",
    temaSlug: "enf-66",
  },
  {
    enunciado:
      "En la base de la pirámide de Kaiser se encuentra el mayor porcentaje de la población crónica, cuya intervención prioritaria es:",
    opciones: [
      "El apoyo y la promoción del autocuidado y la autogestión de su enfermedad",
      "El ingreso hospitalario programado",
      "La gestión de casos individualizada",
      "La atención en unidades de cuidados intensivos",
    ],
    correctaIndex: 0,
    explicacion:
      "En la base se sitúa la mayoría de pacientes crónicos con enfermedad en fase inicial o bien controlada; la estrategia es fomentar el autocuidado y la autogestión. La gestión de casos se reserva para la cúspide.",
    fuente: "Modelo de estratificación de Kaiser Permanente",
    dificultad: "media",
    temaSlug: "enf-66",
  },
  {
    enunciado:
      "La figura profesional encargada de coordinar la atención de los pacientes crónicos complejos y garantizar la continuidad asistencial entre niveles es:",
    opciones: [
      "El celador de planta",
      "La enfermera gestora de casos",
      "El técnico de emergencias sanitarias",
      "El trabajador social del hospital, en exclusiva",
    ],
    correctaIndex: 1,
    explicacion:
      "La enfermera gestora de casos coordina y garantiza la continuidad de cuidados de los pacientes de alta complejidad, articulando la actuación de los distintos profesionales y niveles asistenciales.",
    fuente: "Estrategia de cuidados y de atención a la cronicidad (SSPA)",
    dificultad: "media",
    temaSlug: "enf-66",
  },
  {
    enunciado:
      "¿Cuál de los siguientes NO es un componente clásico del Modelo de Atención a Crónicos (Chronic Care Model) de Wagner?",
    opciones: [
      "El apoyo al autocuidado del paciente",
      "El rediseño del sistema de prestación de servicios",
      "El apoyo a la toma de decisiones basada en la evidencia",
      "La privatización obligatoria de los servicios sanitarios",
    ],
    correctaIndex: 3,
    explicacion:
      "El Chronic Care Model de Wagner incluye el apoyo al autocuidado, el rediseño de la provisión de servicios, el apoyo a la decisión clínica y los sistemas de información, dentro de la organización sanitaria y la comunidad. La privatización no es un componente del modelo.",
    fuente: "Chronic Care Model (Wagner)",
    dificultad: "dificil",
    temaSlug: "enf-66",
  },
  {
    enunciado: "La estratificación del riesgo de la población crónica permite fundamentalmente:",
    opciones: [
      "Asignar la intensidad de la intervención en función del nivel de complejidad de cada grupo de pacientes",
      "Eliminar la atención a los pacientes de bajo riesgo",
      "Sustituir la valoración clínica individual",
      "Reducir el número de profesionales de enfermería necesarios",
    ],
    correctaIndex: 0,
    explicacion:
      "La estratificación identifica subgrupos de riesgo para adaptar la intensidad de las intervenciones (autocuidado, gestión de la enfermedad o gestión de casos), optimizando recursos y personalizando la atención.",
    fuente: "Estrategia de cuidados y de atención a la cronicidad (SSPA)",
    dificultad: "media",
    temaSlug: "enf-66",
  },

  // enf-67 Accidentabilidad
  {
    enunciado:
      "En la valoración inicial del paciente traumatizado grave según el enfoque ABCDE, la primera prioridad es:",
    opciones: [
      "El control de la vía aérea con control de la columna cervical",
      "La valoración neurológica del paciente",
      "La exposición completa del paciente",
      "El control de la hemorragia externa masiva",
    ],
    correctaIndex: 0,
    explicacion:
      "En la secuencia ABCDE, la A (Airway) es la primera prioridad: asegurar la vía aérea permeable con control de la columna cervical. Algunos protocolos anteponen el control de hemorragia exanguinante (C-ABCDE), pero en el ABCDE clásico la A es lo primero.",
    fuente: "Soporte vital avanzado en trauma (ATLS)",
    dificultad: "media",
    temaSlug: "enf-67",
  },
  {
    enunciado:
      "Ante un accidentado del que se sospecha lesión de columna cervical, la maniobra de apertura de la vía aérea de elección es:",
    opciones: [
      "La hiperextensión cervical máxima",
      "La tracción o subluxación mandibular sin extensión del cuello",
      "El giro lateral inmediato de la cabeza",
      "La flexión anterior del cuello",
    ],
    correctaIndex: 1,
    explicacion:
      "Con sospecha de lesión cervical se emplea la tracción/subluxación mandibular (maniobra de tracción del maxilar inferior) manteniendo el cuello alineado, evitando la hiperextensión que podría agravar una lesión medular.",
    fuente: "Soporte vital avanzado en trauma (ATLS)",
    dificultad: "media",
    temaSlug: "enf-67",
  },
  {
    enunciado:
      "En la prevención de accidentes infantiles en el hogar, una recomendación adecuada para evitar intoxicaciones es:",
    opciones: [
      "Almacenar los productos de limpieza en envases de bebida reutilizados",
      "Dejar los medicamentos al alcance para administrarlos con rapidez",
      "Guardar productos de limpieza y medicamentos en lugares elevados, cerrados y fuera del alcance de los niños",
      "Mantener los productos tóxicos en la zona baja de la cocina",
    ],
    correctaIndex: 2,
    explicacion:
      "Para prevenir intoxicaciones en la infancia, los productos de limpieza y medicamentos deben guardarse en lugares altos, cerrados y fuera del alcance de los niños, y nunca trasvasarse a envases de alimentos o bebidas.",
    fuente: "Programa de prevención de accidentes infantiles",
    dificultad: "facil",
    temaSlug: "enf-67",
  },
  {
    enunciado: "Las caídas son la principal causa de lesiones por accidente doméstico en:",
    opciones: [
      "Los adolescentes",
      "Los adultos jóvenes deportistas",
      "Los profesionales de oficina",
      "Las personas mayores",
    ],
    correctaIndex: 3,
    explicacion:
      "En las personas mayores las caídas constituyen la principal causa de accidente doméstico y de lesiones, con importante repercusión funcional. La prevención de caídas es una intervención prioritaria en este grupo.",
    fuente: "Estrategia de seguridad y prevención de accidentes",
    dificultad: "facil",
    temaSlug: "enf-67",
  },
  {
    enunciado:
      "El sistema de retención infantil adecuado en el automóvil debe seleccionarse fundamentalmente en función de:",
    opciones: [
      "El peso y/o la talla del niño según el grupo homologado",
      "La marca del vehículo",
      "El color preferido por el niño",
      "La duración prevista del trayecto",
    ],
    correctaIndex: 0,
    explicacion:
      "Los sistemas de retención infantil se homologan y eligen según el peso y/o la talla del menor (grupos o normativa i-Size), garantizando la protección adecuada en caso de accidente de tráfico.",
    fuente: "Prevención de accidentes de tráfico infantiles (DGT)",
    dificultad: "facil",
    temaSlug: "enf-67",
  },
  {
    enunciado:
      "En un accidente de tráfico, la actuación correcta de un primer interviniente sigue la conducta PAS, que significa:",
    opciones: [
      "Presionar, Aislar y Suturar",
      "Proteger, Avisar y Socorrer",
      "Preguntar, Anotar y Salir",
      "Prevenir, Analizar y Sedar",
    ],
    correctaIndex: 1,
    explicacion:
      "La conducta PAS establece el orden de actuación ante un accidente: Proteger el lugar y a uno mismo, Avisar a los servicios de emergencia (112) y Socorrer a las víctimas.",
    fuente: "Conducta PAS en primeros auxilios",
    dificultad: "facil",
    temaSlug: "enf-67",
  },
  {
    enunciado:
      "Ante una hemorragia externa importante en una extremidad, la primera medida de control es:",
    opciones: [
      "Aplicar presión directa sobre el punto sangrante con un apósito",
      "Colocar de inmediato un torniquete de forma sistemática",
      "Aplicar frío local en la zona",
      "Administrar analgésicos por vía oral",
    ],
    correctaIndex: 0,
    explicacion:
      "El control de una hemorragia externa comienza con la presión directa sobre la herida. El torniquete se reserva para hemorragias exanguinantes de extremidades que no ceden con presión, por su potencial lesivo.",
    fuente: "Manual de primeros auxilios (control de hemorragias)",
    dificultad: "media",
    temaSlug: "enf-67",
  },
  {
    enunciado:
      'La regla de "no mover a un accidentado con sospecha de lesión medular salvo peligro inminente" se justifica porque:',
    opciones: [
      "Facilita la exploración neurológica posterior",
      "Reduce el tiempo de asistencia sanitaria",
      "Una movilización inadecuada puede agravar la lesión y provocar daño neurológico irreversible",
      "Evita la aparición de dolor en la víctima",
    ],
    correctaIndex: 2,
    explicacion:
      "En una sospecha de lesión de columna, movilizar sin control puede desplazar fragmentos y causar o agravar la lesión medular. Solo se moviliza si existe un peligro vital inmediato (fuego, riesgo de explosión), preferentemente en bloque.",
    fuente: "Atención inicial al traumatizado (inmovilización)",
    dificultad: "media",
    temaSlug: "enf-67",
  },
  {
    enunciado:
      "En la prevención de accidentes en la infancia, ¿cuál de estas medidas es adecuada para evitar ahogamientos?",
    opciones: [
      "Permitir que los niños pequeños permanezcan solos junto a piscinas si saben nadar",
      "Vaciar cubos y recipientes con agua tras su uso",
      "Dejar sin vallar las piscinas de uso familiar",
      "Confiar la vigilancia a otros niños de mayor edad",
    ],
    correctaIndex: 1,
    explicacion:
      "Los niños pequeños pueden ahogarse en escasa cantidad de agua; vaciar cubos y recipientes, vallar las piscinas y mantener supervisión adulta constante son medidas preventivas clave.",
    fuente: "Programa de prevención de accidentes infantiles",
    dificultad: "facil",
    temaSlug: "enf-67",
  },
  {
    enunciado:
      'En el paciente politraumatizado, tras asegurar vía aérea y ventilación, la "C" del ABCDE se centra en:',
    opciones: [
      "La valoración del nivel de conciencia",
      "La exposición y prevención de la hipotermia",
      "La reevaluación de la vía aérea",
      "La circulación con control de las hemorragias",
    ],
    correctaIndex: 3,
    explicacion:
      "En el ABCDE, la C (Circulation) valora el estado circulatorio y controla las hemorragias, canaliza vías y repone volumen. La D corresponde al estado neurológico y la E a la exposición.",
    fuente: "Soporte vital avanzado en trauma (ATLS)",
    dificultad: "media",
    temaSlug: "enf-67",
  },

  // enf-68 Proceso de diabetes
  {
    enunciado:
      "Según los criterios diagnósticos habituales, se establece el diagnóstico de diabetes mellitus con una hemoglobina glicosilada (HbA1c) igual o superior a:",
    opciones: ["6,5 %", "5,0 %", "8,0 %", "4,5 %"],
    correctaIndex: 0,
    explicacion:
      "Una HbA1c igual o mayor del 6,5 % es uno de los criterios diagnósticos de diabetes. Valores entre 5,7 % y 6,4 % se consideran prediabetes.",
    fuente: "Criterios diagnósticos de diabetes (ADA)",
    dificultad: "media",
    temaSlug: "enf-68",
  },
  {
    enunciado:
      'La "regla del 15" en el tratamiento de la hipoglucemia leve en un paciente consciente consiste en:',
    opciones: [
      "Administrar 15 unidades de insulina rápida y esperar 15 minutos",
      "Realizar 15 minutos de ejercicio para consumir glucosa",
      "Tomar unos 15 gramos de hidratos de carbono de absorción rápida y reevaluar la glucemia a los 15 minutos",
      "Beber 15 vasos de agua y esperar 15 minutos",
    ],
    correctaIndex: 2,
    explicacion:
      "La regla del 15 indica administrar 15 g de hidratos de carbono de absorción rápida, esperar 15 minutos y repetir la determinación; si persiste la hipoglucemia, se repite el aporte. Nunca se administra insulina para tratar una hipoglucemia.",
    fuente: "Guía de manejo de la hipoglucemia (regla del 15)",
    dificultad: "facil",
    temaSlug: "enf-68",
  },
  {
    enunciado:
      "En la exploración del pie diabético, el monofilamento de Semmes-Weinstein de 10 g se utiliza para valorar:",
    opciones: [
      "El pulso pedio del paciente",
      "La sensibilidad protectora (presión) del pie",
      "La temperatura cutánea",
      "La fuerza muscular del tobillo",
    ],
    correctaIndex: 1,
    explicacion:
      "El monofilamento de 10 g explora la sensibilidad protectora del pie; su ausencia indica neuropatía y riesgo elevado de ulceración. El pulso pedio se valora por palpación o Doppler.",
    fuente: "Proceso Asistencial Integrado Diabetes Mellitus (SSPA)",
    dificultad: "media",
    temaSlug: "enf-68",
  },
  {
    enunciado: "¿Cuál de las siguientes NO es una manifestación clínica típica de la hipoglucemia?",
    opciones: [
      "Sudoración fría y temblor",
      "Palpitaciones y sensación de hambre",
      "Confusión y alteración del comportamiento",
      "Poliuria y aliento afrutado (cetónico)",
    ],
    correctaIndex: 3,
    explicacion:
      "La poliuria y el aliento cetónico (afrutado) son propios de la hiperglucemia y la cetoacidosis, no de la hipoglucemia. La hipoglucemia cursa con síntomas adrenérgicos (sudoración, temblor, palpitaciones, hambre) y neuroglucopénicos (confusión).",
    fuente: "Proceso Asistencial Integrado Diabetes Mellitus (SSPA)",
    dificultad: "media",
    temaSlug: "enf-68",
  },
  {
    enunciado:
      "La rotación de las zonas de inyección de insulina subcutánea tiene como objetivo principal:",
    opciones: [
      "Prevenir la aparición de lipodistrofias que alteran la absorción de la insulina",
      "Acelerar deliberadamente la absorción de la insulina",
      "Reducir la dosis total de insulina necesaria",
      "Facilitar la conservación del bolígrafo de insulina",
    ],
    correctaIndex: 0,
    explicacion:
      "Rotar los puntos de inyección evita las lipodistrofias (lipohipertrofias), que alteran de forma errática la absorción de insulina y empeoran el control glucémico.",
    fuente: "Guía de administración de insulina",
    dificultad: "media",
    temaSlug: "enf-68",
  },
  {
    enunciado:
      "En un paciente diabético con hipoglucemia grave que presenta pérdida de conciencia y no puede tragar, la actuación correcta es:",
    opciones: [
      "Administrar zumo azucarado por vía oral aunque esté inconsciente",
      "Administrar insulina rápida subcutánea",
      "Administrar glucagón (intramuscular/subcutáneo) o glucosa intravenosa si se dispone de vía",
      "Esperar a que recupere la conciencia por sí mismo",
    ],
    correctaIndex: 2,
    explicacion:
      "Ante una hipoglucemia grave con disminución del nivel de conciencia no debe administrarse nada por boca (riesgo de aspiración); se emplea glucagón parenteral o glucosa intravenosa. La insulina está contraindicada.",
    fuente: "Guía de manejo de la hipoglucemia grave",
    dificultad: "media",
    temaSlug: "enf-68",
  },
  {
    enunciado:
      "En la técnica de administración de insulina con bolígrafo y agujas cortas en un adulto, la recomendación actual sobre el pliegue cutáneo y el ángulo es:",
    opciones: [
      "Inyectar siempre a 90 grados sin pliegue con agujas largas de 12 mm",
      "Con agujas cortas suele inyectarse a 90 grados, empleando pliegue cutáneo cuando el tejido subcutáneo es escaso para evitar la vía intramuscular",
      "Inyectar siempre a 45 grados en el músculo",
      "Aplicar la insulina por vía intradérmica",
    ],
    correctaIndex: 1,
    explicacion:
      "La insulina se administra en el tejido subcutáneo. Con agujas cortas se inyecta habitualmente a 90 grados; el pliegue cutáneo se usa cuando el panículo es delgado para no alcanzar el músculo, que absorbe la insulina de forma más rápida e impredecible.",
    fuente: "Guía de administración de insulina",
    dificultad: "dificil",
    temaSlug: "enf-68",
  },
  {
    enunciado:
      "En la educación del paciente diabético sobre el cuidado de los pies, ¿cuál de estas recomendaciones es correcta?",
    opciones: [
      "Caminar descalzo en casa para fortalecer la planta",
      "Cortar las uñas de forma redondeada y muy apurada",
      "Aplicar directamente fuentes de calor (bolsas de agua caliente) sobre los pies fríos",
      "Inspeccionar los pies a diario, secarlos bien (también entre los dedos) y utilizar calzado adecuado",
    ],
    correctaIndex: 3,
    explicacion:
      "El autocuidado del pie diabético incluye inspección diaria, secado cuidadoso entre los dedos, hidratación (salvo entre dedos) y calzado adecuado. No debe caminarse descalzo, cortar las uñas en curva ni aplicar calor directo por riesgo de lesiones inadvertidas.",
    fuente: "Proceso Asistencial Integrado Diabetes Mellitus (SSPA)",
    dificultad: "facil",
    temaSlug: "enf-68",
  },
  {
    enunciado: "La HbA1c refleja el control glucémico medio del paciente aproximadamente de:",
    opciones: [
      "Los 2 a 3 meses previos a la determinación",
      "Las últimas 24 horas",
      "El último año completo",
      "La última semana",
    ],
    correctaIndex: 0,
    explicacion:
      "La hemoglobina glicosilada refleja la glucemia media de los últimos 2-3 meses, ya que depende de la vida media de los hematíes. Por eso se usa para valorar el control a medio plazo.",
    fuente: "Proceso Asistencial Integrado Diabetes Mellitus (SSPA)",
    dificultad: "facil",
    temaSlug: "enf-68",
  },
  {
    enunciado:
      "Entre las insulinas, se consideran de acción rápida o ultrarrápida (análogos como lispro, aspart o glulisina):",
    opciones: [
      "Las de inicio de acción muy lento y duración de 24 horas",
      "Las que se administran una sola vez a la semana",
      "Las de inicio de acción muy rápido, utilizadas para controlar la glucemia asociada a las comidas",
      "Las insulinas basales de acción prolongada",
    ],
    correctaIndex: 2,
    explicacion:
      "Los análogos de insulina de acción ultrarrápida tienen un inicio muy rápido y corta duración; se administran con las comidas para controlar la glucemia posprandial. Las basales (glargina, detemir, degludec) son de acción prolongada.",
    fuente: "Guía de tratamiento con insulina",
    dificultad: "media",
    temaSlug: "enf-68",
  },

  // enf-69 Plan andaluz del dolor
  {
    enunciado: "La Escala Visual Analógica (EVA) para valorar la intensidad del dolor consiste en:",
    opciones: [
      'Una línea, habitualmente de 10 cm, en cuyos extremos figuran "sin dolor" y "máximo dolor imaginable", donde el paciente marca su nivel',
      "Una serie de preguntas sobre el tipo de dolor",
      "Una escala de cinco caras dibujadas exclusivamente para adultos",
      "Un cuestionario de calidad de vida de 36 ítems",
    ],
    correctaIndex: 0,
    explicacion:
      "La EVA es una línea de 10 cm cuyos extremos representan la ausencia de dolor y el dolor máximo; el paciente señala su intensidad y se mide la distancia. Es una escala unidimensional de autovaloración.",
    fuente: "Plan Andaluz de Atención a las Personas con Dolor",
    dificultad: "facil",
    temaSlug: "enf-69",
  },
  {
    enunciado:
      "El dolor cuyo origen está en una lesión o disfunción del sistema nervioso (por ejemplo, la neuralgia postherpética o la neuropatía diabética) se clasifica como:",
    opciones: [
      "Dolor nociceptivo somático",
      "Dolor neuropático",
      "Dolor visceral",
      "Dolor psicógeno puro",
    ],
    correctaIndex: 1,
    explicacion:
      "El dolor neuropático se debe a una lesión o enfermedad del sistema somatosensorial; ejemplos típicos son la neuralgia postherpética y la neuropatía diabética. El nociceptivo procede de la activación de receptores por daño tisular.",
    fuente: "Plan Andaluz de Atención a las Personas con Dolor",
    dificultad: "media",
    temaSlug: "enf-69",
  },
  {
    enunciado: "En el primer escalón de la escalera analgésica de la OMS se sitúan:",
    opciones: [
      "Los opioides mayores como la morfina",
      "Los opioides menores como el tramadol",
      "Los analgésicos no opioides (paracetamol y antiinflamatorios no esteroideos)",
      "Los anestésicos generales",
    ],
    correctaIndex: 2,
    explicacion:
      "El primer escalón de la escalera analgésica de la OMS lo componen los analgésicos no opioides (paracetamol, AINE). El segundo, los opioides menores; el tercero, los opioides mayores.",
    fuente: "Escalera analgésica de la OMS",
    dificultad: "facil",
    temaSlug: "enf-69",
  },
  {
    enunciado: 'Se afirma que el dolor debe considerarse "la quinta constante vital" porque:',
    opciones: [
      "Sustituye a la medición de la temperatura",
      "Solo debe registrarse en pacientes oncológicos",
      "Es un signo objetivo medible por el profesional sin contar con el paciente",
      "Debe valorarse y registrarse de forma sistemática, junto con las otras constantes, para su adecuado tratamiento",
    ],
    correctaIndex: 3,
    explicacion:
      "Considerar el dolor la quinta constante implica valorarlo y registrarlo de forma sistemática como se hace con temperatura, pulso, tensión y respiración, garantizando que no pase desapercibido y se trate adecuadamente.",
    fuente: "Plan Andaluz de Atención a las Personas con Dolor",
    dificultad: "media",
    temaSlug: "enf-69",
  },
  {
    enunciado:
      "En el tercer escalón de la escalera analgésica de la OMS, el opioide mayor de referencia es:",
    opciones: ["La morfina", "El ibuprofeno", "El paracetamol", "El metamizol"],
    correctaIndex: 0,
    explicacion:
      "La morfina es el opioide mayor de referencia del tercer escalón. Ibuprofeno, paracetamol y metamizol son analgésicos no opioides del primer escalón.",
    fuente: "Escalera analgésica de la OMS",
    dificultad: "facil",
    temaSlug: "enf-69",
  },
  {
    enunciado:
      "El efecto adverso más frecuente y persistente del tratamiento con opioides, que requiere prevención sistemática, es:",
    opciones: [
      "La hipertensión arterial",
      "El estreñimiento",
      "La hiperglucemia",
      "La taquicardia mantenida",
    ],
    correctaIndex: 1,
    explicacion:
      "El estreñimiento es el efecto adverso más frecuente y persistente de los opioides (no genera tolerancia), por lo que se recomienda pautar laxantes de forma profiláctica. Otros efectos, como las náuseas, suelen ceder con el tiempo.",
    fuente: "Manejo del dolor con opioides (efectos adversos)",
    dificultad: "media",
    temaSlug: "enf-69",
  },
  {
    enunciado:
      "Para valorar el dolor en un paciente adulto que no puede comunicarse verbalmente (por ejemplo, con demencia avanzada), se recomienda utilizar:",
    opciones: [
      "Exclusivamente la escala numérica verbal",
      "Escalas de observación conductual (indicadores como expresión facial, vocalizaciones o lenguaje corporal)",
      "Únicamente la EVA autoadministrada",
      "No valorar el dolor por imposibilidad de comunicación",
    ],
    correctaIndex: 1,
    explicacion:
      "Cuando el paciente no puede autoinformar, se emplean escalas de heteroevaluación basadas en la observación de conductas (expresión facial, quejidos, movimientos, tensión corporal). Nunca debe asumirse ausencia de dolor por falta de comunicación.",
    fuente: "Plan Andaluz de Atención a las Personas con Dolor",
    dificultad: "media",
    temaSlug: "enf-69",
  },
  {
    enunciado: "El dolor irruptivo se define como:",
    opciones: [
      "Un dolor leve que aparece solo por la noche",
      "El dolor basal continuo bien controlado con analgesia",
      "Una exacerbación transitoria e intensa del dolor que aparece sobre un dolor basal controlado",
      "Un dolor psicógeno sin base orgánica",
    ],
    correctaIndex: 2,
    explicacion:
      "El dolor irruptivo es una exacerbación aguda y transitoria del dolor que surge sobre un dolor basal estable y controlado; requiere dosis de rescate de analgesia de inicio rápido.",
    fuente: "Plan Andaluz de Atención a las Personas con Dolor",
    dificultad: "dificil",
    temaSlug: "enf-69",
  },
  {
    enunciado:
      "En la escalera analgésica de la OMS, cuando el dolor no se controla con un escalón, la conducta recomendada es:",
    opciones: [
      "Repetir indefinidamente el mismo fármaco a la misma dosis",
      "Suspender toda analgesia durante 24 horas",
      "Combinar varios opioides mayores desde el inicio",
      "Ascender al siguiente escalón, pudiendo mantener los analgésicos no opioides y los coadyuvantes en cualquier escalón",
    ],
    correctaIndex: 3,
    explicacion:
      "Si el dolor no cede, se asciende de escalón. Los analgésicos no opioides y los fármacos coadyuvantes pueden asociarse en cualquier escalón para potenciar el efecto y tratar componentes específicos del dolor.",
    fuente: "Escalera analgésica de la OMS",
    dificultad: "media",
    temaSlug: "enf-69",
  },
  {
    enunciado:
      "El dolor que se prolonga en el tiempo (habitualmente más de 3-6 meses) y persiste más allá del proceso que lo originó se clasifica como:",
    opciones: ["Dolor crónico", "Dolor agudo", "Dolor incidental", "Dolor referido"],
    correctaIndex: 0,
    explicacion:
      "El dolor crónico es el que persiste en el tiempo (más de 3-6 meses) o más allá de la curación de la lesión, y suele acompañarse de repercusión funcional y emocional. El agudo es reciente y de finalidad protectora.",
    fuente: "Plan Andaluz de Atención a las Personas con Dolor",
    dificultad: "facil",
    temaSlug: "enf-69",
  },

  // enf-70 Prevencion de caidas
  {
    enunciado: "Entre los factores de riesgo de caídas, se consideran factores intrínsecos:",
    opciones: [
      "La iluminación deficiente del domicilio",
      "Las alteraciones de la marcha y el equilibrio, los déficits sensoriales y la polimedicación",
      "La presencia de alfombras sueltas y suelos resbaladizos",
      "La ausencia de barandillas en las escaleras",
    ],
    correctaIndex: 1,
    explicacion:
      "Los factores intrínsecos dependen del propio individuo (trastornos de la marcha y el equilibrio, déficits visuales o auditivos, enfermedades, fármacos). Los extrínsecos son ambientales (iluminación, alfombras, suelos, barreras).",
    fuente: "Programa de prevención de caídas en el mayor",
    dificultad: "media",
    temaSlug: "enf-70",
  },
  {
    enunciado: "La escala de Downton se utiliza para valorar:",
    opciones: [
      "El riesgo de úlceras por presión",
      "El nivel de conciencia",
      "El riesgo de caídas del paciente",
      "La sobrecarga del cuidador",
    ],
    correctaIndex: 2,
    explicacion:
      "La escala de Downton estima el riesgo de caídas valorando caídas previas, medicación, déficits sensoriales, estado mental y la marcha. Norton valora úlceras, Glasgow la conciencia y Zarit la sobrecarga.",
    fuente: "Escala de riesgo de caídas de Downton",
    dificultad: "facil",
    temaSlug: "enf-70",
  },
  {
    enunciado: "La prueba Timed Up and Go (TUG) valora:",
    opciones: [
      "La agudeza visual del paciente",
      "La función cognitiva mediante preguntas",
      "La saturación de oxígeno durante el ejercicio",
      "La movilidad y el riesgo de caídas midiendo el tiempo que tarda la persona en levantarse de una silla, caminar unos metros, girar y volver a sentarse",
    ],
    correctaIndex: 3,
    explicacion:
      "El test Timed Up and Go cronometra la maniobra de levantarse de una silla, caminar unos 3 metros, girar, volver y sentarse. Tiempos prolongados se asocian a mayor riesgo de caídas y a deterioro de la movilidad.",
    fuente: "Prueba Timed Up and Go (movilidad y equilibrio)",
    dificultad: "media",
    temaSlug: "enf-70",
  },
  {
    enunciado: "El síndrome poscaída se caracteriza principalmente por:",
    opciones: [
      "El miedo a volver a caer, que provoca restricción de la actividad, pérdida de autonomía y aislamiento",
      "Una fractura de cadera secundaria a la caída",
      "Un cuadro de confusión aguda tras el traumatismo",
      "La aparición de úlceras por presión inmediatas",
    ],
    correctaIndex: 0,
    explicacion:
      "El síndrome poscaída es una reacción psicológica de miedo a caer nuevamente que lleva a la persona a limitar su actividad y movilidad, con la consiguiente pérdida funcional, dependencia y aislamiento social.",
    fuente: "Programa de prevención de caídas en el mayor",
    dificultad: "media",
    temaSlug: "enf-70",
  },
  {
    enunciado:
      "¿Cuál de las siguientes es una medida ambiental (extrínseca) para prevenir caídas en el domicilio de una persona mayor?",
    opciones: [
      "Ajustar la medicación sedante del paciente",
      "Corregir los déficits visuales con gafas adecuadas",
      "Eliminar alfombras sueltas, mejorar la iluminación y colocar asideros en el baño",
      "Tratar la hipotensión ortostática",
    ],
    correctaIndex: 2,
    explicacion:
      "Las medidas extrínsecas actúan sobre el entorno: retirar alfombras y obstáculos, mejorar la iluminación, instalar barras de apoyo y suelos antideslizantes. Ajustar la medicación o corregir la visión son medidas intrínsecas.",
    fuente: "Programa de prevención de caídas en el mayor",
    dificultad: "facil",
    temaSlug: "enf-70",
  },
  {
    enunciado:
      "En la escala de Downton, ¿cuál de los siguientes NO es uno de los parámetros que se valoran?",
    opciones: [
      "Las caídas previas",
      "El consumo de determinados medicamentos",
      "El nivel de glucemia capilar",
      "Los déficits sensoriales (visión y audición)",
    ],
    correctaIndex: 2,
    explicacion:
      "La escala de Downton valora caídas previas, medicamentos, déficits sensoriales, estado mental y deambulación. La glucemia capilar no forma parte de sus ítems.",
    fuente: "Escala de riesgo de caídas de Downton",
    dificultad: "media",
    temaSlug: "enf-70",
  },
  {
    enunciado:
      "Ciertos grupos de fármacos aumentan el riesgo de caídas en las personas mayores. Entre ellos destacan:",
    opciones: [
      "Los suplementos de vitamina D",
      "Las benzodiacepinas y otros psicofármacos sedantes",
      "Los antiácidos",
      "Los colirios lubricantes",
    ],
    correctaIndex: 1,
    explicacion:
      "Los psicofármacos (benzodiacepinas, hipnóticos, antipsicóticos, algunos antidepresivos) y los fármacos que producen hipotensión o sedación aumentan el riesgo de caídas. La polimedicación es un factor de riesgo intrínseco reconocido.",
    fuente: "Programa de prevención de caídas en el mayor",
    dificultad: "media",
    temaSlug: "enf-70",
  },
  {
    enunciado:
      "La intervención más eficaz para prevenir caídas en personas mayores de la comunidad incluye, de forma destacada:",
    opciones: [
      "El reposo en cama para evitar el riesgo de tropiezos",
      "La restricción física con sujeciones de forma preventiva",
      "El uso rutinario de sedantes por la noche",
      "Programas de ejercicio físico dirigidos a mejorar la fuerza y el equilibrio",
    ],
    correctaIndex: 3,
    explicacion:
      "El ejercicio físico orientado a fuerza y equilibrio es una de las intervenciones más eficaces para reducir caídas. El reposo, las sujeciones o los sedantes empeoran la movilidad y aumentan el riesgo.",
    fuente: "Programa de prevención de caídas en el mayor",
    dificultad: "media",
    temaSlug: "enf-70",
  },
  {
    enunciado: "La caída en una persona mayor debe considerarse siempre:",
    opciones: [
      "Un acontecimiento centinela que exige valorar sus causas y las consecuencias funcionales, físicas y psicológicas",
      "Un hecho accidental sin relevancia clínica",
      "Una consecuencia inevitable del envejecimiento que no requiere intervención",
      "Un motivo para restringir de forma permanente la movilidad del paciente",
    ],
    correctaIndex: 0,
    explicacion:
      "Toda caída en el mayor obliga a una valoración integral de sus causas (intrínsecas y extrínsecas) y de sus consecuencias (lesiones, síndrome poscaída, pérdida de autonomía), para planificar la prevención de nuevas caídas.",
    fuente: "Programa de prevención de caídas en el mayor",
    dificultad: "facil",
    temaSlug: "enf-70",
  },
  {
    enunciado:
      "En la valoración de una persona mayor que ha sufrido una caída, un buen punto de partida enfermero es:",
    opciones: [
      "Registrar únicamente la hora de la caída",
      "Realizar una anamnesis de las circunstancias de la caída y valorar la marcha, el equilibrio y los factores de riesgo modificables",
      "Prescribir de inmediato un andador sin más valoración",
      "Recomendar reposo absoluto indefinido",
    ],
    correctaIndex: 1,
    explicacion:
      "La valoración incluye conocer cómo y por qué se produjo la caída (anamnesis), explorar marcha y equilibrio (por ejemplo con el TUG) e identificar factores de riesgo intrínsecos y extrínsecos para intervenir sobre los modificables.",
    fuente: "Programa de prevención de caídas en el mayor",
    dificultad: "media",
    temaSlug: "enf-70",
  },

  // enf-71 Dependencia
  {
    enunciado: "La Ley 39/2006 regula:",
    opciones: [
      "La promoción de la autonomía personal y atención a las personas en situación de dependencia",
      "La ordenación de las profesiones sanitarias",
      "La cohesión y calidad del Sistema Nacional de Salud",
      "La autonomía del paciente y los derechos de información clínica",
    ],
    correctaIndex: 0,
    explicacion:
      "La Ley 39/2006 es la Ley de Promoción de la Autonomía Personal y Atención a las personas en situación de dependencia, que crea el Sistema para la Autonomía y Atención a la Dependencia (SAAD).",
    fuente: "Ley 39/2006",
    dificultad: "facil",
    temaSlug: "enf-71",
  },
  {
    enunciado: "Según la Ley 39/2006, la situación de dependencia se clasifica en:",
    opciones: [
      "Dos niveles: leve y grave",
      "Tres grados: dependencia moderada (grado I), severa (grado II) y gran dependencia (grado III)",
      "Cinco categorías numeradas del 1 al 5",
      "Cuatro escalones análogos a la escalera analgésica",
    ],
    correctaIndex: 1,
    explicacion:
      "La Ley 39/2006 establece tres grados de dependencia: grado I (dependencia moderada), grado II (dependencia severa) y grado III (gran dependencia), según la necesidad de ayuda para las actividades de la vida diaria.",
    fuente: "Ley 39/2006, art. 26",
    dificultad: "media",
    temaSlug: "enf-71",
  },
  {
    enunciado:
      "¿Cuál de las siguientes NO es una prestación o servicio del catálogo del Sistema para la Autonomía y Atención a la Dependencia (SAAD)?",
    opciones: [
      "El servicio de ayuda a domicilio",
      "El servicio de teleasistencia",
      "El servicio de centro de día y de noche",
      "La prestación por desempleo",
    ],
    correctaIndex: 3,
    explicacion:
      "El catálogo del SAAD incluye teleasistencia, ayuda a domicilio, centros de día y de noche, atención residencial y prestaciones económicas (vinculada al servicio, cuidados en el entorno familiar y asistencia personal). La prestación por desempleo pertenece al sistema de la Seguridad Social, no al SAAD.",
    fuente: "Ley 39/2006 (catálogo de servicios)",
    dificultad: "media",
    temaSlug: "enf-71",
  },
  {
    enunciado:
      "El grado III de la Ley 39/2006, denominado gran dependencia, corresponde a la persona que:",
    opciones: [
      "Necesita ayuda para las actividades básicas una o dos veces al día",
      "Es totalmente autónoma para las actividades de la vida diaria",
      "Requiere ayuda para varias actividades básicas de la vida diaria varias veces al día pero no de forma continua",
      "Necesita ayuda varias veces al día y, por su pérdida total de autonomía, precisa el apoyo indispensable y continuo de otra persona",
    ],
    correctaIndex: 3,
    explicacion:
      "El grado III (gran dependencia) se reconoce cuando la persona necesita ayuda para varias actividades básicas varias veces al día y, por su pérdida total de autonomía, requiere la presencia y apoyo continuo de otra persona.",
    fuente: "Ley 39/2006, art. 26",
    dificultad: "media",
    temaSlug: "enf-71",
  },
  {
    enunciado:
      "La coordinación sociosanitaria en la atención a la dependencia tiene como finalidad:",
    opciones: [
      "Garantizar una atención integral y continuada que combine los recursos sanitarios y los servicios sociales según las necesidades de la persona",
      "Sustituir los servicios sociales por servicios sanitarios",
      "Trasladar todas las competencias a la atención hospitalaria",
      "Limitar el acceso de las personas dependientes a los recursos comunitarios",
    ],
    correctaIndex: 0,
    explicacion:
      "La coordinación sociosanitaria busca articular de forma conjunta los recursos sanitarios y sociales para ofrecer una atención integral y continua a personas con necesidades de ambos ámbitos, evitando la fragmentación de la atención.",
    fuente: "Atención sociosanitaria (coordinación de recursos)",
    dificultad: "media",
    temaSlug: "enf-71",
  },
  {
    enunciado: "El reconocimiento de la situación de dependencia se realiza mediante:",
    opciones: [
      "Una simple declaración del interesado sin valoración",
      "La aplicación de un baremo de valoración de la dependencia por parte de los órganos competentes de la comunidad autónoma",
      "El criterio exclusivo del médico de familia",
      "La edad del solicitante como único criterio",
    ],
    correctaIndex: 1,
    explicacion:
      "La valoración de la dependencia se efectúa aplicando un baremo (BVD) que mide la capacidad de la persona para realizar las actividades básicas de la vida diaria, realizada por los órganos de valoración de la comunidad autónoma.",
    fuente: "Ley 39/2006 (baremo de valoración de la dependencia)",
    dificultad: "media",
    temaSlug: "enf-71",
  },
  {
    enunciado:
      "El instrumento que recoge las prestaciones y servicios más adecuados a las necesidades de la persona en situación de dependencia se denomina:",
    opciones: [
      "Programa Individual de Atención (PIA)",
      "Historia clínica compartida",
      "Plan de cuidados estandarizado",
      "Informe de continuidad de cuidados",
    ],
    correctaIndex: 0,
    explicacion:
      "El Programa Individual de Atención (PIA) determina, con participación de la persona y su familia, las modalidades de intervención y los servicios o prestaciones más adecuados a sus necesidades una vez reconocido el grado de dependencia.",
    fuente: "Ley 39/2006 (Programa Individual de Atención)",
    dificultad: "media",
    temaSlug: "enf-71",
  },
  {
    enunciado:
      "Dentro de las prestaciones económicas del SAAD, la prestación económica para cuidados en el entorno familiar tiene carácter:",
    opciones: [
      "Prioritario y de concesión automática frente a los servicios",
      "Excepcional, cuando se cumplen determinadas condiciones y el beneficiario es atendido por cuidadores no profesionales en su domicilio",
      "Exclusivo para personas sin domicilio",
      "Universal e incondicionado para cualquier solicitante",
    ],
    correctaIndex: 1,
    explicacion:
      "La Ley 39/2006 prioriza la prestación de servicios; la prestación económica para cuidados en el entorno familiar tiene carácter excepcional y se concede cuando se dan las condiciones adecuadas de convivencia y la persona es atendida por cuidadores no profesionales.",
    fuente: "Ley 39/2006 (prestaciones económicas)",
    dificultad: "dificil",
    temaSlug: "enf-71",
  },
  {
    enunciado: "El Sistema para la Autonomía y Atención a la Dependencia (SAAD) se configura como:",
    opciones: [
      "Un servicio exclusivamente privado sin financiación pública",
      "Un régimen de la Seguridad Social contributivo",
      "La colaboración y participación de las administraciones públicas (Estado, comunidades autónomas y entidades locales) para garantizar los derechos de las personas dependientes",
      "Una entidad dependiente únicamente de los ayuntamientos",
    ],
    correctaIndex: 2,
    explicacion:
      "El SAAD es el sistema que articula la colaboración de las administraciones públicas (Administración General del Estado, comunidades autónomas y entidades locales) para hacer efectivos los derechos reconocidos en la Ley 39/2006.",
    fuente: "Ley 39/2006 (Sistema para la Autonomía y Atención a la Dependencia)",
    dificultad: "media",
    temaSlug: "enf-71",
  },
  {
    enunciado:
      "Entre las actividades básicas de la vida diaria (ABVD) que valora el baremo de dependencia se encuentran:",
    opciones: [
      "Manejar el dinero y utilizar el transporte público",
      "Comer, asearse, vestirse y desplazarse dentro del hogar",
      "Realizar la declaración de la renta",
      "Utilizar el teléfono y hacer la compra",
    ],
    correctaIndex: 1,
    explicacion:
      "Las ABVD incluyen tareas esenciales de autocuidado: comer, higiene, vestirse, control de esfínteres, desplazamientos básicos. Manejar dinero, transporte, teléfono o compras son actividades instrumentales (AIVD).",
    fuente: "Ley 39/2006 (baremo de valoración de la dependencia)",
    dificultad: "media",
    temaSlug: "enf-71",
  },

  // enf-72 Promocion de la autonomia
  {
    enunciado: "El envejecimiento activo, según la OMS, se define como:",
    opciones: [
      "El proceso de optimizar las oportunidades de salud, participación y seguridad para mejorar la calidad de vida a medida que las personas envejecen",
      "La práctica exclusiva de ejercicio físico en la vejez",
      "El mantenimiento de la actividad laboral más allá de la edad de jubilación",
      "La ausencia total de enfermedades en las personas mayores",
    ],
    correctaIndex: 0,
    explicacion:
      "La OMS define el envejecimiento activo como el proceso de optimizar las oportunidades de salud, participación y seguridad para mejorar la calidad de vida al envejecer. Va más allá de la actividad física e integra la dimensión social y de seguridad.",
    fuente: "Envejecimiento activo (OMS)",
    dificultad: "facil",
    temaSlug: "enf-72",
  },
  {
    enunciado: "Un producto de apoyo (antes llamado ayuda técnica) es:",
    opciones: [
      "Un fármaco de dispensación hospitalaria",
      "Un servicio de atención domiciliaria",
      "Cualquier producto que permite prevenir, compensar o neutralizar una deficiencia, limitación o discapacidad, favoreciendo la autonomía de la persona",
      "Una prestación económica de la Seguridad Social",
    ],
    correctaIndex: 2,
    explicacion:
      "Un producto de apoyo es cualquier producto (dispositivo, equipo, instrumento) utilizado para mejorar el funcionamiento y la autonomía de personas con limitaciones (por ejemplo, andadores, grúas, adaptadores). No es un fármaco ni una prestación económica.",
    fuente: "Norma UNE-EN ISO 9999 (productos de apoyo)",
    dificultad: "media",
    temaSlug: "enf-72",
  },
  {
    enunciado: "¿Cuál de los siguientes es un ejemplo de producto de apoyo para la movilidad?",
    opciones: [
      "Un tensiómetro digital",
      "Un pulsioxímetro",
      "Un glucómetro",
      "Un andador o un bastón",
    ],
    correctaIndex: 3,
    explicacion:
      "Los andadores, bastones, muletas y sillas de ruedas son productos de apoyo a la movilidad que favorecen los desplazamientos y la autonomía. Tensiómetro, pulsioxímetro y glucómetro son dispositivos de monitorización clínica.",
    fuente: "Norma UNE-EN ISO 9999 (productos de apoyo)",
    dificultad: "facil",
    temaSlug: "enf-72",
  },
  {
    enunciado: "La rehabilitación basada en la comunidad se caracteriza por:",
    opciones: [
      "Desarrollarse en el entorno de la persona, aprovechando los recursos comunitarios y con participación de la propia persona y su familia",
      "Realizarse exclusivamente en unidades hospitalarias especializadas",
      "Prescindir de la participación de la familia y la comunidad",
      "Centrarse únicamente en la recuperación de deportistas de élite",
    ],
    correctaIndex: 0,
    explicacion:
      "La rehabilitación basada en la comunidad es una estrategia que se desarrolla en el propio entorno de la persona con discapacidad, implicando a la familia y a los recursos comunitarios para promover su inclusión, participación y autonomía.",
    fuente: "Rehabilitación basada en la comunidad (OMS)",
    dificultad: "media",
    temaSlug: "enf-72",
  },
  {
    enunciado:
      "Según el enfoque de la OMS, los tres pilares o determinantes fundamentales del envejecimiento activo son:",
    opciones: [
      "Nutrición, descanso y medicación",
      "Salud, participación y seguridad",
      "Trabajo, ahorro e inversión",
      "Prevención, diagnóstico y tratamiento",
    ],
    correctaIndex: 1,
    explicacion:
      "El marco del envejecimiento activo de la OMS se apoya en tres pilares: salud, participación y seguridad, sostenidos por determinantes transversales como el género y la cultura.",
    fuente: "Envejecimiento activo (OMS)",
    dificultad: "media",
    temaSlug: "enf-72",
  },
  {
    enunciado: "La promoción de la autonomía personal tiene como objetivo prioritario:",
    opciones: [
      "Fomentar la dependencia para asegurar la supervisión continua",
      "Sustituir a la persona en todas las tareas para evitar riesgos",
      "Desarrollar y mantener la capacidad de la persona para controlar, afrontar y tomar decisiones sobre su vida cotidiana",
      "Trasladar de forma preventiva a las personas mayores a instituciones",
    ],
    correctaIndex: 2,
    explicacion:
      "La promoción de la autonomía busca que la persona conserve o mejore su capacidad de decidir y de desenvolverse en la vida diaria. Sustituirla o fomentar su dependencia es contrario a este objetivo.",
    fuente: "Ley 39/2006 (promoción de la autonomía personal)",
    dificultad: "facil",
    temaSlug: "enf-72",
  },
  {
    enunciado:
      "En el mantenimiento de la autonomía de una persona mayor con limitación funcional, la actuación enfermera más adecuada es:",
    opciones: [
      "Realizar por ella todas las actividades para ahorrarle esfuerzo",
      "Favorecer que realice por sí misma las actividades que pueda, ofreciendo el apoyo justo y necesario",
      "Recomendar reposo absoluto para evitar la fatiga",
      "Limitar sus desplazamientos dentro del domicilio",
    ],
    correctaIndex: 1,
    explicacion:
      "El principio de autonomía indica ayudar solo en lo necesario, potenciando que la persona haga por sí misma cuanto pueda; sustituirla en todo genera dependencia y pérdida de capacidades (fomenta el desuso).",
    fuente: "Cuidados centrados en la persona (promoción de la autonomía)",
    dificultad: "media",
    temaSlug: "enf-72",
  },
  {
    enunciado:
      "La adaptación del domicilio de una persona con limitaciones de movilidad (eliminación de barreras, instalación de asideros, adaptación del baño) es una medida orientada a:",
    opciones: [
      "Aumentar la dependencia de la persona",
      "Reducir la accesibilidad del entorno",
      "Sustituir la atención de los profesionales sanitarios",
      "Favorecer la autonomía y la seguridad de la persona en su entorno habitual",
    ],
    correctaIndex: 3,
    explicacion:
      "La adaptación y accesibilidad del entorno (eliminación de barreras, asideros, adaptación del baño) permite que la persona se desenvuelva de forma más segura y autónoma en su domicilio, previniendo accidentes y favoreciendo la permanencia en su entorno.",
    fuente: "Accesibilidad y adaptación del entorno",
    dificultad: "facil",
    temaSlug: "enf-72",
  },
  {
    enunciado: 'El concepto de "fragilidad" en la persona mayor hace referencia a:',
    opciones: [
      "Un estado de vulnerabilidad y disminución de la reserva funcional que aumenta el riesgo de eventos adversos y dependencia",
      "Cualquier persona mayor de 65 años por el hecho de su edad",
      "Una enfermedad infecciosa de la vejez",
      "La presencia de una única enfermedad crónica bien controlada",
    ],
    correctaIndex: 0,
    explicacion:
      "La fragilidad es un estado de vulnerabilidad por disminución de la reserva fisiológica que predispone a caídas, discapacidad, hospitalización y dependencia. Su detección precoz permite intervenir para prevenir el deterioro funcional.",
    fuente: "Detección y manejo de la fragilidad en el mayor",
    dificultad: "media",
    temaSlug: "enf-72",
  },
  {
    enunciado:
      "Entre las actividades de promoción del envejecimiento activo en la comunidad se incluyen:",
    opciones: [
      "El aislamiento social como medida de protección",
      "La restricción de la actividad física por precaución",
      "Los programas de actividad física, participación social y estimulación cognitiva para personas mayores",
      "La medicalización sistemática de todos los mayores",
    ],
    correctaIndex: 2,
    explicacion:
      "El envejecimiento activo se promueve con programas de ejercicio físico, fomento de la participación social y actividades de estimulación cognitiva, que mejoran la salud, la autonomía y la calidad de vida. El aislamiento y la inactividad tienen el efecto contrario.",
    fuente: "Envejecimiento activo (OMS)",
    dificultad: "facil",
    temaSlug: "enf-72",
  },

  // enf-73 Cuidados y tecnicas I
  {
    enunciado:
      "En un adulto sano en reposo, la frecuencia respiratoria normal se sitúa aproximadamente en:",
    opciones: [
      "12 a 20 respiraciones por minuto",
      "4 a 8 respiraciones por minuto",
      "30 a 40 respiraciones por minuto",
      "45 a 55 respiraciones por minuto",
    ],
    correctaIndex: 0,
    explicacion:
      "La frecuencia respiratoria normal del adulto en reposo es de unas 12 a 20 respiraciones por minuto. Por debajo se habla de bradipnea y por encima de taquipnea.",
    fuente: "Manual de constantes vitales",
    dificultad: "facil",
    temaSlug: "enf-73",
  },
  {
    enunciado: "La fracción inspirada de oxígeno (FiO2) del aire ambiente es aproximadamente:",
    opciones: ["Del 100 %", "Del 21 %", "Del 50 %", "Del 5 %"],
    correctaIndex: 1,
    explicacion:
      "El aire ambiente tiene una FiO2 de aproximadamente el 21 %. Los dispositivos de oxigenoterapia elevan esa fracción según el flujo y el sistema empleado.",
    fuente: "Manual de oxigenoterapia",
    dificultad: "facil",
    temaSlug: "enf-73",
  },
  {
    enunciado:
      "Entre los sistemas de oxigenoterapia, la mascarilla tipo Venturi se caracteriza por:",
    opciones: [
      "Aportar oxígeno al 100 % de forma constante",
      "Ser un sistema de bajo flujo con FiO2 impredecible",
      "Ser un sistema de alto flujo que proporciona una FiO2 conocida y regulable",
      "No requerir fuente de oxígeno",
    ],
    correctaIndex: 2,
    explicacion:
      "La mascarilla Venturi es un sistema de alto flujo que, mediante el efecto Venturi, mezcla oxígeno y aire en proporciones fijas, aportando una FiO2 conocida y precisa, útil por ejemplo en el paciente con EPOC.",
    fuente: "Manual de oxigenoterapia",
    dificultad: "media",
    temaSlug: "enf-73",
  },
  {
    enunciado:
      "Durante la aspiración de secreciones por vía traqueal, la aspiración debe aplicarse:",
    opciones: [
      "Durante la introducción de la sonda, presionando de forma continua",
      "Durante todo el procedimiento sin límite de tiempo",
      "Solo si el paciente presenta bradicardia",
      "Al retirar la sonda, de forma intermitente y durante un tiempo breve",
    ],
    correctaIndex: 3,
    explicacion:
      "La aspiración se realiza al retirar la sonda, de forma intermitente y durante pocos segundos (habitualmente no más de 10-15), para minimizar la hipoxia, el traumatismo de la mucosa y la estimulación vagal. La sonda se introduce sin aspirar.",
    fuente: "Manual de técnicas básicas de enfermería (aspiración de secreciones)",
    dificultad: "media",
    temaSlug: "enf-73",
  },
  {
    enunciado:
      "Para comprobar la correcta colocación de una sonda nasogástrica antes de administrar nutrición, un método recomendado es:",
    opciones: [
      "Verificar la posición mediante control radiológico y/o comprobación del pH del aspirado gástrico",
      "Introducir agua rápidamente y observar si el paciente tose",
      "Auscultar exclusivamente, como único método fiable",
      "Administrar directamente la nutrición y esperar la reacción",
    ],
    correctaIndex: 0,
    explicacion:
      "La verificación más segura de la posición de la SNG es el control radiológico y/o la medición del pH del contenido aspirado (ácido en el estómago). La auscultación aislada del insuflado de aire no es un método fiable.",
    fuente: "Guía de sondaje nasogástrico",
    dificultad: "media",
    temaSlug: "enf-73",
  },
  {
    enunciado: "En el sondaje vesical, la técnica debe realizarse con:",
    opciones: [
      "Técnica limpia sin guantes",
      "Técnica estéril (asepsia) para prevenir la infección urinaria asociada a sonda",
      "Técnica estéril solo en varones",
      "Cualquier técnica, ya que el riesgo de infección es despreciable",
    ],
    correctaIndex: 1,
    explicacion:
      "El sondaje vesical se realiza con técnica estéril, ya que la introducción de la sonda en la vía urinaria conlleva riesgo de infección urinaria asociada a sonda, una de las infecciones relacionadas con la asistencia sanitaria más frecuentes.",
    fuente: "Protocolo de sondaje vesical",
    dificultad: "facil",
    temaSlug: "enf-73",
  },
  {
    enunciado:
      "Tras introducir una sonda vesical tipo Foley y obtener orina, el paso siguiente es:",
    opciones: [
      "Retirar la sonda inmediatamente tras comprobar la salida de orina",
      "Inflar el balón de la sonda con la cantidad de agua estéril indicada para fijarla en la vejiga",
      "Traccionar con fuerza para comprobar su resistencia",
      "Pinzar la sonda de forma permanente",
    ],
    correctaIndex: 1,
    explicacion:
      "Una vez comprobada la salida de orina (lo que confirma que la sonda está en la vejiga), se infla el balón con agua estéril según el volumen indicado para fijar la sonda. Inflar el balón antes de comprobar la posición puede lesionar la uretra.",
    fuente: "Protocolo de sondaje vesical",
    dificultad: "media",
    temaSlug: "enf-73",
  },
  {
    enunciado: "En el cuidado del paciente portador de traqueostomía, una medida fundamental es:",
    opciones: [
      "Mantener seca la mucosa respiratoria evitando toda humidificación",
      "Aspirar secreciones únicamente una vez al día de forma programada",
      "Ocluir el estoma con un apósito impermeable de forma continua",
      "Mantener la permeabilidad de la cánula, humidificar el aire y realizar cuidados asépticos del estoma",
    ],
    correctaIndex: 3,
    explicacion:
      "Los cuidados de la traqueostomía incluyen mantener la cánula permeable (aspiración según necesidad), humidificar el aire inspirado (porque la vía aérea superior queda excluida) y cuidar el estoma con técnica aséptica para prevenir infecciones.",
    fuente: "Manual de cuidados de traqueostomía",
    dificultad: "media",
    temaSlug: "enf-73",
  },
  {
    enunciado:
      "La temperatura corporal considerada febril en un adulto se sitúa habitualmente cuando la temperatura axilar es igual o superior a:",
    opciones: [
      "38 grados centígrados",
      "35 grados centígrados",
      "36 grados centígrados",
      "34,5 grados centígrados",
    ],
    correctaIndex: 0,
    explicacion:
      "Se considera fiebre una temperatura axilar igual o superior a 38 grados; entre 37,1 y 37,9 se habla de febrícula. Por debajo de 35 grados se considera hipotermia.",
    fuente: "Manual de constantes vitales",
    dificultad: "facil",
    temaSlug: "enf-73",
  },
  {
    enunciado:
      "En la administración de oxígeno a un paciente con EPOC retenedor de carbónico, la precaución fundamental es:",
    opciones: [
      "Administrar siempre oxígeno a flujos muy altos",
      "Administrar oxígeno de forma controlada, con la FiO2 mínima eficaz, por el riesgo de depresión del estímulo respiratorio",
      "Evitar por completo la oxigenoterapia en estos pacientes",
      "Utilizar únicamente gafas nasales a 15 litros por minuto",
    ],
    correctaIndex: 1,
    explicacion:
      "En el paciente EPOC retenedor, el oxígeno se administra de forma controlada con la FiO2 mínima que consiga una saturación adecuada, ya que flujos altos pueden deprimir el estímulo respiratorio y agravar la hipercapnia. La mascarilla Venturi permite ese control.",
    fuente: "Manual de oxigenoterapia (paciente EPOC)",
    dificultad: "dificil",
    temaSlug: "enf-73",
  },

  // enf-74 Cuidados y tecnicas II
  {
    enunciado:
      "Para prevenir la formación de hematoma tras una punción venosa (extracción de sangre), la medida correcta es:",
    opciones: [
      "Flexionar con fuerza el brazo y frotar la zona de punción",
      "No comprimir para que la sangre salga con facilidad",
      "Comprimir el punto de punción con un algodón durante unos minutos sin flexionar bruscamente el brazo",
      "Masajear enérgicamente la vena tras retirar la aguja",
    ],
    correctaIndex: 2,
    explicacion:
      "Tras retirar la aguja se comprime el punto de punción con un algodón o gasa durante unos minutos, sin flexionar bruscamente ni frotar, para favorecer la hemostasia y evitar el hematoma.",
    fuente: "Manual de técnicas básicas de enfermería (punción venosa)",
    dificultad: "facil",
    temaSlug: "enf-74",
  },
  {
    enunciado:
      "En la extracción de sangre con sistema de vacío y varios tubos, el orden de llenado tiene como objetivo principal:",
    opciones: [
      "Facilitar la identificación visual del paciente",
      "Evitar la contaminación cruzada entre aditivos de los tubos y garantizar resultados fiables",
      "Reducir el dolor de la punción",
      "Acortar el tiempo total de la extracción",
    ],
    correctaIndex: 1,
    explicacion:
      "El orden de extracción de los tubos evita el arrastre de aditivos de un tubo a otro (contaminación cruzada) que alteraría los resultados, por ejemplo, la coagulación o determinados iones.",
    fuente: "Recomendaciones sobre el orden de extracción de tubos",
    dificultad: "media",
    temaSlug: "enf-74",
  },
  {
    enunciado: "Un electrocardiograma estándar de 12 derivaciones incluye:",
    opciones: [
      "6 derivaciones de las extremidades y 6 derivaciones precordiales",
      "12 derivaciones precordiales exclusivamente",
      "3 derivaciones bipolares únicamente",
      "6 derivaciones precordiales y 3 de las extremidades",
    ],
    correctaIndex: 0,
    explicacion:
      "El ECG de 12 derivaciones se compone de 6 derivaciones de los miembros (I, II, III, aVR, aVL, aVF) y 6 derivaciones precordiales (V1 a V6).",
    fuente: "Manual de electrocardiografía",
    dificultad: "media",
    temaSlug: "enf-74",
  },
  {
    enunciado: "En el registro de un ECG, el electrodo precordial V1 se coloca en:",
    opciones: [
      "La línea medioclavicular izquierda en el quinto espacio intercostal",
      "El cuarto espacio intercostal en la línea axilar anterior derecha",
      "El quinto espacio intercostal en la línea axilar media izquierda",
      "El cuarto espacio intercostal, en el borde derecho del esternón",
    ],
    correctaIndex: 3,
    explicacion:
      "V1 se sitúa en el cuarto espacio intercostal, junto al borde derecho del esternón; V2 en el mismo espacio en el borde izquierdo. Una colocación incorrecta altera la morfología del trazado.",
    fuente: "Manual de electrocardiografía (colocación de electrodos)",
    dificultad: "dificil",
    temaSlug: "enf-74",
  },
  {
    enunciado:
      "Antes de administrar una transfusión de concentrado de hematíes, la comprobación de seguridad imprescindible es:",
    opciones: [
      "Verificar la identidad del paciente y la compatibilidad de la bolsa (grupo y pruebas cruzadas) según el protocolo de identificación inequívoca",
      "Calentar la bolsa en el microondas antes de la transfusión",
      "Administrar la sangre en un plazo máximo de diez segundos",
      "Añadir a la bolsa una solución glucosada para diluir",
    ],
    correctaIndex: 0,
    explicacion:
      "La verificación de la identidad del paciente y de la compatibilidad de la unidad (identificación inequívoca) es imprescindible para evitar la reacción hemolítica por incompatibilidad ABO, la complicación transfusional más grave. La sangre no se calienta al microondas ni se mezcla con sueros glucosados.",
    fuente: "Protocolo de seguridad transfusional",
    dificultad: "media",
    temaSlug: "enf-74",
  },
  {
    enunciado:
      "Durante una transfusión sanguínea, si el paciente presenta fiebre, escalofríos, dolor lumbar o hipotensión, la actuación inmediata correcta es:",
    opciones: [
      "Acelerar el ritmo de la transfusión para terminar antes",
      "Detener la transfusión, mantener la vía con suero fisiológico y avisar al médico",
      "Administrar un antitérmico y continuar la transfusión sin interrumpirla",
      "Retirar la vía venosa por completo de inmediato",
    ],
    correctaIndex: 1,
    explicacion:
      "Ante signos de reacción transfusional se debe detener de inmediato la transfusión, mantener la vía permeable con suero fisiológico, valorar constantes y avisar al médico, conservando la bolsa y el equipo para su estudio.",
    fuente: "Protocolo de seguridad transfusional (reacciones)",
    dificultad: "media",
    temaSlug: "enf-74",
  },
  {
    enunciado:
      "En un adulto en ayunas, la glucemia capilar se considera dentro del rango normal aproximadamente entre:",
    opciones: ["20 y 50 mg/dl", "200 y 300 mg/dl", "70 y 100 mg/dl", "120 y 180 mg/dl"],
    correctaIndex: 2,
    explicacion:
      "La glucemia normal en ayunas se sitúa aproximadamente entre 70 y 100 mg/dl. Valores por debajo de 70 mg/dl indican hipoglucemia y una glucemia en ayunas igual o superior a 126 mg/dl es criterio de diabetes.",
    fuente: "Manual de determinación de glucemia capilar",
    dificultad: "media",
    temaSlug: "enf-74",
  },
  {
    enunciado: "En la técnica de glucemia capilar, para obtener una muestra fiable se recomienda:",
    opciones: [
      "Pinchar en el centro del pulpejo del dedo para menor dolor",
      "Exprimir con fuerza el dedo para conseguir sangre rápidamente",
      "Utilizar la primera gota sin limpiar la zona",
      "Lavar y secar las manos, y desechar la primera gota si se ha exprimido, puncionando en la zona lateral del pulpejo",
    ],
    correctaIndex: 3,
    explicacion:
      "Se recomienda higiene y secado de las manos, puncionar en la parte lateral del pulpejo (menos dolorosa y con buena vascularización) y evitar exprimir en exceso, que diluye la muestra con líquido intersticial y falsea el resultado.",
    fuente: "Manual de determinación de glucemia capilar",
    dificultad: "media",
    temaSlug: "enf-74",
  },
  {
    enunciado:
      "La reacción transfusional más grave e inmediata, potencialmente mortal, es la producida por:",
    opciones: [
      "La incompatibilidad ABO por error en la identificación, que provoca una reacción hemolítica aguda",
      "Una reacción febril no hemolítica leve",
      "Una reacción alérgica cutánea leve",
      "La sobrecarga de volumen en pacientes jóvenes",
    ],
    correctaIndex: 0,
    explicacion:
      "La reacción hemolítica aguda por incompatibilidad ABO, casi siempre debida a un error de identificación, es la complicación transfusional más grave y puede ser mortal. De ahí la importancia de la identificación inequívoca del paciente y la unidad.",
    fuente: "Protocolo de seguridad transfusional",
    dificultad: "media",
    temaSlug: "enf-74",
  },
  {
    enunciado:
      "Las derivaciones del plano frontal de un ECG (I, II, III, aVR, aVL, aVF) se obtienen a partir de:",
    opciones: [
      "Los seis electrodos precordiales",
      "Los electrodos colocados en las cuatro extremidades",
      "Un único electrodo colocado en el tórax",
      "Los electrodos esofágicos",
    ],
    correctaIndex: 1,
    explicacion:
      "Las derivaciones del plano frontal (bipolares I, II, III y monopolares aumentadas aVR, aVL, aVF) se registran a partir de los electrodos de las extremidades. Las precordiales (V1-V6) exploran el plano horizontal.",
    fuente: "Manual de electrocardiografía",
    dificultad: "media",
    temaSlug: "enf-74",
  },

  // enf-75 Calidad asistencial
  {
    enunciado:
      "Según el modelo de Avedis Donabedian, la calidad asistencial puede evaluarse desde tres enfoques o dimensiones que son:",
    opciones: [
      "Estructura, proceso y resultado",
      "Eficacia, eficiencia y efectividad",
      "Prevención, diagnóstico y tratamiento",
      "Accesibilidad, equidad y sostenibilidad",
    ],
    correctaIndex: 0,
    explicacion:
      "Donabedian propuso evaluar la calidad a través de tres componentes: estructura (recursos y organización), proceso (lo que se hace) y resultado (efectos en la salud del paciente).",
    fuente: "Modelo de calidad de Donabedian",
    dificultad: "facil",
    temaSlug: "enf-75",
  },
  {
    enunciado:
      "En el modelo de Donabedian, el número y cualificación de los profesionales, los equipamientos y las instalaciones de un centro corresponden al componente de:",
    opciones: ["Proceso", "Estructura", "Resultado", "Impacto"],
    correctaIndex: 1,
    explicacion:
      "La estructura se refiere a los recursos disponibles: recursos humanos (número y cualificación), instalaciones, equipamiento y organización. El proceso es la actividad asistencial y el resultado, sus efectos.",
    fuente: "Modelo de calidad de Donabedian",
    dificultad: "media",
    temaSlug: "enf-75",
  },
  {
    enunciado:
      "El ciclo de mejora continua de la calidad PDCA (ciclo de Deming) se compone de las fases:",
    opciones: [
      "Prevenir, Diagnosticar, Curar y Alta",
      "Proteger, Detectar, Comunicar y Actuar",
      "Planificar (Plan), Hacer (Do), Verificar (Check) y Actuar (Act)",
      "Priorizar, Delegar, Coordinar y Auditar",
    ],
    correctaIndex: 2,
    explicacion:
      "El ciclo PDCA de Deming consta de cuatro fases: Plan (planificar), Do (hacer/implantar), Check (verificar/evaluar) y Act (actuar/mejorar), aplicadas de forma cíclica para la mejora continua.",
    fuente: "Ciclo de mejora continua PDCA (Deming)",
    dificultad: "facil",
    temaSlug: "enf-75",
  },
  {
    enunciado: "La tasa de infección quirúrgica de un servicio es un ejemplo de indicador de:",
    opciones: ["Estructura", "Proceso administrativo", "Satisfacción del profesional", "Resultado"],
    correctaIndex: 3,
    explicacion:
      "La tasa de infección quirúrgica mide un efecto en la salud del paciente derivado de la asistencia, por lo que es un indicador de resultado. Un indicador de estructura sería, por ejemplo, la dotación de personal.",
    fuente: "Modelo de calidad de Donabedian (indicadores)",
    dificultad: "media",
    temaSlug: "enf-75",
  },
  {
    enunciado: "La Agencia de Calidad Sanitaria de Andalucía (ACSA) es el organismo encargado de:",
    opciones: [
      "La acreditación de la calidad de los centros, servicios y profesionales del sistema sanitario andaluz",
      "La gestión de las nóminas del personal estatutario",
      "La compra centralizada de medicamentos",
      "La inspección tributaria de los centros sanitarios",
    ],
    correctaIndex: 0,
    explicacion:
      "La ACSA gestiona los modelos de acreditación de la calidad de centros, unidades, profesionales, formación y páginas web sanitarias en Andalucía, promoviendo la mejora continua.",
    fuente: "Agencia de Calidad Sanitaria de Andalucía (ACSA)",
    dificultad: "media",
    temaSlug: "enf-75",
  },
  {
    enunciado:
      "Un buen indicador de calidad asistencial debe reunir, entre otras, las características de:",
    opciones: [
      "Ser subjetivo y difícil de medir",
      "Ser válido, fiable, relevante y basado en la evidencia",
      "Depender exclusivamente de la opinión de un profesional",
      "No tener definido un estándar de referencia",
    ],
    correctaIndex: 1,
    explicacion:
      "Un indicador útil debe ser válido (mide lo que pretende), fiable (reproducible), relevante (clínicamente importante), basado en la evidencia y contar con un estándar de comparación. Los indicadores subjetivos o sin estándar no son adecuados.",
    fuente: "Indicadores de calidad asistencial",
    dificultad: "media",
    temaSlug: "enf-75",
  },
  {
    enunciado:
      "La comparación sistemática de los procesos y resultados de una organización con los de otras consideradas de referencia o excelencia se denomina:",
    opciones: ["Benchmarking", "Triaje", "Cribado", "Auditoría financiera"],
    correctaIndex: 0,
    explicacion:
      "El benchmarking es la comparación sistemática de procesos, prácticas y resultados con organizaciones de referencia para identificar oportunidades de mejora y adoptar buenas prácticas.",
    fuente: "Herramientas de gestión de la calidad",
    dificultad: "dificil",
    temaSlug: "enf-75",
  },
  {
    enunciado:
      "El grado en que la atención sanitaria disponible se corresponde con las necesidades de la población y puede ser obtenida sin barreras se conoce como:",
    opciones: ["Eficiencia", "Efectividad", "Accesibilidad", "Rentabilidad"],
    correctaIndex: 2,
    explicacion:
      "La accesibilidad es la facilidad con que los servicios pueden ser obtenidos por la población que los necesita, sin barreras geográficas, económicas, organizativas o culturales. Es una dimensión clave de la calidad.",
    fuente: "Dimensiones de la calidad asistencial",
    dificultad: "media",
    temaSlug: "enf-75",
  },
  {
    enunciado: "La diferencia entre eficacia y efectividad en calidad asistencial es que:",
    opciones: [
      "Son sinónimos exactos y se usan indistintamente",
      "La eficacia es el resultado en condiciones ideales o experimentales y la efectividad es el resultado en las condiciones reales de la práctica",
      "La eficacia mide el coste y la efectividad la satisfacción",
      "La efectividad se aplica solo a la cirugía y la eficacia a la medicina",
    ],
    correctaIndex: 1,
    explicacion:
      "La eficacia es la capacidad de una intervención para producir el efecto deseado en condiciones ideales (ensayo), mientras que la efectividad valora el resultado en las condiciones habituales de la práctica clínica. La eficiencia añade la relación con los recursos.",
    fuente: "Dimensiones de la calidad asistencial",
    dificultad: "media",
    temaSlug: "enf-75",
  },
  {
    enunciado: 'En el ciclo PDCA, la fase "Check" (verificar) consiste en:',
    opciones: [
      "Diseñar el plan de mejora inicial",
      "Ejecutar las acciones planificadas",
      "Estandarizar los cambios y volver a planificar",
      "Evaluar los resultados obtenidos comparándolos con los objetivos previstos",
    ],
    correctaIndex: 3,
    explicacion:
      "En la fase Check se miden y evalúan los resultados de lo implantado y se comparan con los objetivos, para decidir en la fase Act si se estandariza el cambio o se corrige. Planificar corresponde a Plan y ejecutar a Do.",
    fuente: "Ciclo de mejora continua PDCA (Deming)",
    dificultad: "media",
    temaSlug: "enf-75",
  },

  // enf-76 Seguridad clinica
  {
    enunciado: "En seguridad del paciente, se define evento adverso como:",
    opciones: [
      "El daño no intencionado causado al paciente por la asistencia sanitaria y no por su enfermedad de base",
      "Cualquier síntoma propio de la evolución de la enfermedad",
      "El coste económico de una hospitalización",
      "La ausencia de complicaciones tras un tratamiento",
    ],
    correctaIndex: 0,
    explicacion:
      "El evento (o efecto) adverso es el daño causado al paciente por la atención sanitaria, no por su enfermedad de base. Puede ser prevenible o no prevenible.",
    fuente: "Estrategia de Seguridad del Paciente (SSPA)",
    dificultad: "facil",
    temaSlug: "enf-76",
  },
  {
    enunciado:
      "El estudio ENEAS analizó los efectos adversos ligados a la asistencia sanitaria en el ámbito:",
    opciones: [
      "De la atención primaria",
      "Hospitalario",
      "De las oficinas de farmacia",
      "De los servicios de emergencias extrahospitalarias",
    ],
    correctaIndex: 1,
    explicacion:
      "El estudio ENEAS (Estudio Nacional sobre los Efectos Adversos ligados a la hospitalización) analizó los efectos adversos en el ámbito hospitalario. Su equivalente en atención primaria es el estudio APEAS.",
    fuente: "Estudio ENEAS",
    dificultad: "media",
    temaSlug: "enf-76",
  },
  {
    enunciado: "El estudio APEAS se centró en la seguridad del paciente en:",
    opciones: [
      "Las unidades de cuidados intensivos",
      "Los quirófanos",
      "La atención primaria",
      "Los servicios de urgencias hospitalarias",
    ],
    correctaIndex: 2,
    explicacion:
      "El estudio APEAS (Estudio sobre la seguridad de los pacientes en Atención Primaria de salud) evaluó la frecuencia y características de los efectos adversos en el ámbito de la atención primaria.",
    fuente: "Estudio APEAS",
    dificultad: "media",
    temaSlug: "enf-76",
  },
  {
    enunciado: "Se denomina evento centinela a:",
    opciones: [
      "Cualquier incidente sin daño para el paciente",
      "Un error interceptado antes de llegar al paciente",
      "Una molestia leve y transitoria durante el ingreso",
      "Un suceso inesperado que produce la muerte o un daño físico o psicológico grave, y que obliga a una investigación y respuesta inmediatas",
    ],
    correctaIndex: 3,
    explicacion:
      "El evento centinela es un suceso grave e inesperado (muerte o lesión grave no relacionada con el curso natural de la enfermedad) que exige análisis inmediato de sus causas y medidas para evitar su repetición, por ejemplo mediante análisis de causa raíz.",
    fuente: "Estrategia de Seguridad del Paciente (SSPA)",
    dificultad: "media",
    temaSlug: "enf-76",
  },
  {
    enunciado: "El análisis causa raíz (ACR) es una herramienta que se utiliza para:",
    opciones: [
      "Identificar los factores subyacentes que han contribuido a que se produzca un incidente de seguridad, con un enfoque en el sistema y no en la culpa individual",
      "Calcular el coste de un ingreso hospitalario",
      "Medir la satisfacción de los pacientes",
      "Seleccionar el tratamiento farmacológico de primera línea",
    ],
    correctaIndex: 0,
    explicacion:
      "El análisis causa raíz es un método reactivo, sistemático y estructurado para identificar las causas latentes de un evento adverso, centrado en los fallos del sistema y orientado a prevenir su recurrencia, no a buscar culpables.",
    fuente: "Herramientas de gestión de riesgos (análisis causa raíz)",
    dificultad: "media",
    temaSlug: "enf-76",
  },
  {
    enunciado:
      'En seguridad del paciente, la diferencia entre "incidente sin daño" y "evento adverso" es que:',
    opciones: [
      "Son términos idénticos",
      "El incidente sin daño llega al paciente pero no le causa lesión, mientras que el evento adverso sí produce daño",
      "El evento adverso nunca llega al paciente",
      "El incidente sin daño siempre provoca la muerte",
    ],
    correctaIndex: 1,
    explicacion:
      "Un incidente sin daño alcanza al paciente pero no le ocasiona lesión apreciable; el evento adverso, en cambio, produce un daño. Ambos deben notificarse para aprender y mejorar la seguridad.",
    fuente: "Clasificación internacional para la seguridad del paciente (OMS)",
    dificultad: "media",
    temaSlug: "enf-76",
  },
  {
    enunciado:
      "El enfoque sistémico de la seguridad del paciente (modelo del queso suizo de Reason) propone que los errores:",
    opciones: [
      "Se deben siempre a la negligencia individual del profesional",
      "Deben abordarse sancionando al profesional implicado",
      "Resultan generalmente de la alineación de múltiples fallos latentes del sistema más que de un único error individual",
      "No pueden prevenirse de ninguna manera",
    ],
    correctaIndex: 2,
    explicacion:
      "El modelo del queso suizo de Reason plantea que los eventos adversos ocurren cuando se alinean varios fallos latentes de las barreras del sistema. Por ello, la cultura de seguridad es no punitiva y busca corregir el sistema.",
    fuente: "Modelo de error humano de Reason",
    dificultad: "dificil",
    temaSlug: "enf-76",
  },
  {
    enunciado:
      "Entre las prácticas seguras recomendadas para prevenir errores de medicación se encuentra:",
    opciones: [
      "Almacenar juntos y sin identificar los medicamentos de aspecto o nombre parecido",
      "Prescribir siempre con abreviaturas ambiguas para ganar tiempo",
      'Aplicar la regla de los "cinco correctos" (paciente, medicamento, dosis, vía y hora correctos)',
      "Administrar la medicación sin comprobar la identidad del paciente",
    ],
    correctaIndex: 2,
    explicacion:
      "La regla de los cinco correctos (paciente, medicamento, dosis, vía y hora) es una práctica segura básica en la administración de medicación. Además se recomienda diferenciar los medicamentos de aspecto/nombre similar y evitar abreviaturas peligrosas.",
    fuente: "Prácticas seguras en el uso de medicamentos",
    dificultad: "facil",
    temaSlug: "enf-76",
  },
  {
    enunciado: "Una cultura de seguridad del paciente adecuada se caracteriza por:",
    opciones: [
      "Sancionar de forma sistemática a quien comunica un error",
      "Fomentar la notificación no punitiva de incidentes para aprender de ellos y mejorar el sistema",
      "Ocultar los errores para no dañar la imagen del centro",
      "Considerar que los errores son inevitables y no analizarlos",
    ],
    correctaIndex: 1,
    explicacion:
      "La cultura de seguridad promueve la notificación voluntaria y no punitiva de incidentes, entendiendo que analizar los errores permite aprender y rediseñar el sistema para que no se repitan. Castigar la notificación la inhibe.",
    fuente: "Estrategia de Seguridad del Paciente (SSPA)",
    dificultad: "media",
    temaSlug: "enf-76",
  },
  {
    enunciado: "Los medicamentos de alto riesgo son aquellos que:",
    opciones: [
      "Tienen una probabilidad elevada de causar daños graves o mortales al paciente cuando se produce un error en su uso",
      "Son siempre los más caros del hospital",
      "Solo pueden administrarse en atención primaria",
      "Nunca requieren doble comprobación",
    ],
    correctaIndex: 0,
    explicacion:
      "Los medicamentos de alto riesgo (como insulinas, anticoagulantes, opioides o electrolitos concentrados) son los que, ante un error, tienen mayor probabilidad de provocar daño grave. Por ello se recomiendan medidas especiales como la doble verificación.",
    fuente: "Prácticas seguras con medicamentos de alto riesgo",
    dificultad: "media",
    temaSlug: "enf-76",
  },

  // enf-77 Observatorio de Seguridad del Paciente
  {
    enunciado: "El Observatorio para la Seguridad del Paciente en Andalucía depende de:",
    opciones: [
      "La Agencia de Calidad Sanitaria de Andalucía (ACSA)",
      "El Ministerio de Hacienda",
      "Una entidad privada aseguradora",
      "El Instituto Nacional de Estadística",
    ],
    correctaIndex: 0,
    explicacion:
      "El Observatorio para la Seguridad del Paciente es una iniciativa de la Agencia de Calidad Sanitaria de Andalucía que impulsa y difunde la estrategia de seguridad del paciente en el sistema sanitario andaluz.",
    fuente: "Observatorio para la Seguridad del Paciente (ACSA)",
    dificultad: "media",
    temaSlug: "enf-77",
  },
  {
    enunciado:
      'La campaña de la OMS y la estrategia de seguridad que promueve la higiene de manos con el lema "Salve vidas: límpiese las manos" se relaciona con:',
    opciones: [
      "La prevención de caídas",
      "La prevención de las infecciones relacionadas con la asistencia sanitaria",
      "La conciliación de la medicación",
      "La identificación inequívoca del paciente",
    ],
    correctaIndex: 1,
    explicacion:
      "La estrategia de higiene de manos (Manos seguras) tiene como objetivo prevenir las infecciones relacionadas con la asistencia sanitaria, una de las principales causas de daño evitable en los sistemas de salud.",
    fuente: "Estrategia de higiene de manos (OMS / Observatorio de Seguridad del Paciente)",
    dificultad: "facil",
    temaSlug: "enf-77",
  },
  {
    enunciado:
      'Según los "5 momentos para la higiene de manos" de la OMS, se debe realizar higiene de manos:',
    opciones: [
      "Únicamente al finalizar el turno de trabajo",
      "Solamente si las manos están visiblemente sucias",
      "Solo antes de entrar en el hospital",
      "Antes del contacto con el paciente, antes de una tarea aséptica, tras riesgo de exposición a fluidos, tras el contacto con el paciente y tras el contacto con su entorno",
    ],
    correctaIndex: 3,
    explicacion:
      "Los cinco momentos son: antes del contacto con el paciente, antes de realizar una tarea aséptica, después del riesgo de exposición a fluidos corporales, después del contacto con el paciente y después del contacto con el entorno del paciente.",
    fuente: "Los 5 momentos para la higiene de manos (OMS)",
    dificultad: "media",
    temaSlug: "enf-77",
  },
  {
    enunciado: "La identificación inequívoca del paciente tiene como finalidad principal:",
    opciones: [
      "Garantizar que cada actuación (medicación, pruebas, transfusiones) se realiza en el paciente correcto, evitando errores por confusión de identidad",
      "Facilitar la facturación de los servicios prestados",
      "Sustituir la historia clínica del paciente",
      "Acelerar los trámites administrativos de ingreso",
    ],
    correctaIndex: 0,
    explicacion:
      "La identificación inequívoca (por ejemplo, con pulsera con al menos dos identificadores) previene errores por confusión de pacientes en la administración de medicación, extracciones, transfusiones o intervenciones.",
    fuente: "Estrategia de identificación inequívoca del paciente",
    dificultad: "facil",
    temaSlug: "enf-77",
  },
  {
    enunciado:
      "El sistema de notificación de incidentes de seguridad promovido en el ámbito de la seguridad del paciente se caracteriza por ser:",
    opciones: [
      "Obligatorio, nominativo y con finalidad sancionadora",
      "Voluntario, confidencial, no punitivo y orientado al aprendizaje y la mejora",
      "Exclusivo de los cargos directivos",
      "Público, con difusión de los datos personales de los implicados",
    ],
    correctaIndex: 1,
    explicacion:
      "Los sistemas de notificación de incidentes (como el SiNASP en el ámbito nacional) son voluntarios, confidenciales, anónimos y no punitivos, con la finalidad de aprender de los incidentes y mejorar la seguridad, no de sancionar.",
    fuente: "Sistemas de notificación y aprendizaje en seguridad del paciente",
    dificultad: "media",
    temaSlug: "enf-77",
  },
  {
    enunciado:
      "Según la evidencia, la medida más eficaz y de bajo coste para prevenir la transmisión de infecciones en la asistencia sanitaria es:",
    opciones: [
      "La administración profiláctica de antibióticos a todos los pacientes",
      "El aislamiento de todos los pacientes ingresados",
      "La higiene de manos por parte de los profesionales",
      "La sustitución diaria de todo el material clínico",
    ],
    correctaIndex: 2,
    explicacion:
      "La higiene de manos es la medida más sencilla, eficaz y coste-efectiva para prevenir las infecciones relacionadas con la asistencia sanitaria, por lo que es un eje central de las estrategias de manos seguras.",
    fuente: "Estrategia de higiene de manos (OMS)",
    dificultad: "media",
    temaSlug: "enf-77",
  },
  {
    enunciado:
      "El objetivo de la estrategia de seguridad quirúrgica que impulsa el uso de un listado de verificación (checklist) antes, durante y después de la cirugía es:",
    opciones: [
      "Reducir errores y complicaciones quirúrgicas evitables, como la cirugía en lugar o paciente equivocado",
      "Acortar el tiempo total de las intervenciones",
      "Sustituir la información al paciente sobre la intervención",
      "Reducir el número de profesionales presentes en el quirófano",
    ],
    correctaIndex: 0,
    explicacion:
      "El listado de verificación de seguridad quirúrgica de la OMS busca prevenir errores evitables (cirugía en el sitio o paciente equivocado, olvido de material, problemas de vía aérea) mediante comprobaciones sistemáticas en tres momentos de la cirugía.",
    fuente: "Listado de verificación de seguridad quirúrgica (OMS)",
    dificultad: "media",
    temaSlug: "enf-77",
  },
  {
    enunciado: "La conciliación de la medicación es una práctica segura que consiste en:",
    opciones: [
      "Suspender toda la medicación del paciente al ingreso",
      "Comparar la medicación habitual del paciente con la prescrita en las transiciones asistenciales para detectar y resolver discrepancias",
      "Administrar la medicación a la misma hora a todos los pacientes",
      "Reducir de forma sistemática el número de fármacos a la mitad",
    ],
    correctaIndex: 1,
    explicacion:
      "La conciliación de la medicación compara el tratamiento crónico del paciente con el prescrito en cada transición (ingreso, traslado, alta) para detectar discrepancias no justificadas (omisiones, duplicidades, dosis erróneas) y evitar errores de medicación.",
    fuente: "Prácticas seguras de conciliación de la medicación",
    dificultad: "media",
    temaSlug: "enf-77",
  },
  {
    enunciado:
      "En la técnica de higiene de manos con preparados de base alcohólica, una indicación correcta es:",
    opciones: [
      "Utilizarlos siempre que las manos estén visiblemente sucias o manchadas de sangre",
      "Aplicarlos y secarlos de inmediato con papel para ahorrar tiempo",
      "Emplearlos cuando las manos no están visiblemente sucias, frotando hasta su completa evaporación",
      "Sustituir por completo el lavado con agua y jabón en todas las situaciones",
    ],
    correctaIndex: 2,
    explicacion:
      "La solución hidroalcohólica es de elección cuando las manos no están visiblemente sucias, frotando todas las superficies hasta que se sequen. Si las manos están visiblemente sucias o contaminadas con fluidos, debe realizarse lavado con agua y jabón.",
    fuente: "Los 5 momentos para la higiene de manos (OMS)",
    dificultad: "media",
    temaSlug: "enf-77",
  },
  {
    enunciado:
      "El uso de dos identificadores del paciente (por ejemplo, nombre completo y fecha de nacimiento o número de historia) antes de una actuación asistencial responde al objetivo de:",
    opciones: [
      "Reducir el consumo de material sanitario",
      "Evitar la comunicación con el paciente",
      "Cumplir un requisito meramente estadístico",
      "Garantizar la identificación inequívoca y prevenir errores por confusión de pacientes",
    ],
    correctaIndex: 3,
    explicacion:
      "Emplear al menos dos identificadores no basados en el número de habitación o cama evita confusiones y garantiza que la actuación se realiza en el paciente correcto, uno de los objetivos internacionales de seguridad del paciente.",
    fuente: "Estrategia de identificación inequívoca del paciente",
    dificultad: "facil",
    temaSlug: "enf-77",
  },

  // enf-78 Duelo
  {
    enunciado: "El duelo anticipado se define como:",
    opciones: [
      "El proceso de duelo que se inicia antes de la pérdida, ante la certeza de una muerte próxima de un ser querido",
      "El duelo que se prolonga durante más de dos años",
      "El duelo que aparece de forma tardía tras la pérdida",
      "El duelo ante la pérdida de un objeto material",
    ],
    correctaIndex: 0,
    explicacion:
      "El duelo anticipado es el que comienza antes de la muerte, cuando se conoce la irreversibilidad y proximidad de la pérdida (por ejemplo, en enfermedades terminales), permitiendo iniciar la elaboración emocional.",
    fuente: "Proceso Asistencial Integrado Cuidados Paliativos (duelo)",
    dificultad: "media",
    temaSlug: "enf-78",
  },
  {
    enunciado:
      "Según Elisabeth Kübler-Ross, las cinco etapas o fases emocionales ante la muerte y la pérdida son:",
    opciones: [
      "Alarma, resistencia, agotamiento, recuperación y adaptación",
      "Negación, ira, negociación, depresión y aceptación",
      "Shock, culpa, rabia, tristeza y olvido",
      "Ansiedad, evitación, confrontación, reorganización y cierre",
    ],
    correctaIndex: 1,
    explicacion:
      "Kübler-Ross describió cinco fases: negación, ira, negociación (o pacto), depresión y aceptación. No son necesariamente lineales ni todas las personas las atraviesan de la misma forma.",
    fuente: "Modelo de las cinco fases de Kübler-Ross",
    dificultad: "facil",
    temaSlug: "enf-78",
  },
  {
    enunciado: 'El modelo de las "tareas del duelo" fue formulado por:',
    opciones: ["Elisabeth Kübler-Ross", "Avedis Donabedian", "William Worden", "Abraham Maslow"],
    correctaIndex: 2,
    explicacion:
      "William Worden propuso el modelo de las tareas del duelo, según el cual el doliente debe realizar un proceso activo para elaborar la pérdida, frente a los modelos de fases o etapas.",
    fuente: "Modelo de las tareas del duelo de Worden",
    dificultad: "media",
    temaSlug: "enf-78",
  },
  {
    enunciado:
      "¿Cuál de las siguientes NO es una de las cuatro tareas del duelo descritas por Worden?",
    opciones: [
      "Aceptar la realidad de la pérdida",
      "Trabajar o elaborar las emociones y el dolor de la pérdida",
      "Adaptarse a un medio en el que el fallecido está ausente",
      "Olvidar por completo al fallecido para poder rehacer la vida",
    ],
    correctaIndex: 3,
    explicacion:
      "Las cuatro tareas de Worden son: aceptar la realidad de la pérdida, elaborar el dolor, adaptarse a un entorno sin el fallecido y recolocar emocionalmente al fallecido para continuar viviendo. La tarea no es olvidar, sino encontrar un lugar para el vínculo y seguir adelante.",
    fuente: "Modelo de las tareas del duelo de Worden",
    dificultad: "media",
    temaSlug: "enf-78",
  },
  {
    enunciado: "Se considera duelo complicado o patológico aquel que:",
    opciones: [
      "Se resuelve de forma progresiva en los primeros meses",
      "Cursa con tristeza y añoranza que van disminuyendo con el tiempo",
      "Se caracteriza por reacciones que van desapareciendo tras el primer aniversario",
      "Se prolonga de forma intensa e incapacitante en el tiempo, con dificultad importante para aceptar la pérdida y reanudar la vida",
    ],
    correctaIndex: 3,
    explicacion:
      "El duelo complicado es aquel que, por su intensidad y duración, interfiere de forma persistente con el funcionamiento de la persona, sin evolución hacia la aceptación. El duelo normal, aunque doloroso, evoluciona progresivamente hacia la adaptación.",
    fuente: "Atención al duelo (duelo normal y complicado)",
    dificultad: "media",
    temaSlug: "enf-78",
  },
  {
    enunciado: "El acompañamiento enfermero en el duelo normal tiene como objetivo principal:",
    opciones: [
      "Facilitar la expresión de emociones y acompañar a la persona en la elaboración de su pérdida, normalizando el proceso",
      "Evitar que la persona hable del fallecido para no sufrir",
      "Prescribir sistemáticamente psicofármacos desde el inicio",
      "Acelerar el proceso para que finalice cuanto antes",
    ],
    correctaIndex: 0,
    explicacion:
      "En el duelo normal la intervención se basa en la escucha, el acompañamiento y la facilitación de la expresión emocional, normalizando las reacciones. La medicalización rutinaria o evitar hablar del fallecido no favorecen la elaboración del duelo.",
    fuente: "Atención al duelo en Atención Primaria",
    dificultad: "media",
    temaSlug: "enf-78",
  },
  {
    enunciado: "El duelo perinatal hace referencia al duelo por:",
    opciones: [
      "La pérdida de un progenitor durante la infancia",
      "La pérdida de un hijo durante la gestación, el parto o los primeros días de vida",
      "La pérdida de la capacidad reproductiva",
      "El duelo de los profesionales sanitarios ante la muerte de un paciente",
    ],
    correctaIndex: 1,
    explicacion:
      "El duelo perinatal es el que experimentan los progenitores ante la muerte de un hijo en el periodo perinatal (durante el embarazo, el parto o los primeros días de vida). Requiere un acompañamiento específico y sensible.",
    fuente: "Guía de atención al duelo perinatal",
    dificultad: "media",
    temaSlug: "enf-78",
  },
  {
    enunciado: "Entre los factores de riesgo para desarrollar un duelo complicado se encuentra:",
    opciones: [
      "Disponer de una buena red de apoyo social y familiar",
      "Haber podido despedirse del fallecido",
      "Una muerte repentina, inesperada o especialmente traumática",
      "Un proceso de enfermedad largo que permitió el duelo anticipado",
    ],
    correctaIndex: 2,
    explicacion:
      "Las muertes súbitas, inesperadas o traumáticas, así como la falta de apoyo social o vínculos muy dependientes, son factores de riesgo de duelo complicado. Una buena red de apoyo, por el contrario, es un factor protector.",
    fuente: "Atención al duelo (factores de riesgo)",
    dificultad: "media",
    temaSlug: "enf-78",
  },
  {
    enunciado: "En relación con las fases del duelo de Kübler-Ross, es correcto afirmar que:",
    opciones: [
      "Todas las personas las atraviesan en el mismo orden estricto y sin excepción",
      "No siguen necesariamente un orden fijo ni todas las personas experimentan todas las fases",
      "Se completan siempre en un plazo máximo de una semana",
      "Solo se aplican al personal sanitario",
    ],
    correctaIndex: 1,
    explicacion:
      "Las fases de Kübler-Ross son orientativas: no se viven necesariamente de forma lineal ni ordenada, pueden solaparse o repetirse, y no todas las personas atraviesan todas ellas. Es un error interpretarlas como etapas rígidas y obligatorias.",
    fuente: "Modelo de las cinco fases de Kübler-Ross",
    dificultad: "media",
    temaSlug: "enf-78",
  },
  {
    enunciado:
      "Ante una familia que acaba de sufrir la pérdida de un ser querido, una intervención enfermera adecuada de comunicación es:",
    opciones: [
      'Ofrecer respuestas rápidas del tipo "hay que ser fuerte" para cortar el llanto',
      "Evitar todo contacto para no incomodar a la familia",
      "Dar información técnica detallada sobre la causa de la muerte de inmediato",
      "Mostrar una escucha activa y empática, respetando los silencios y permitiendo la expresión del dolor",
    ],
    correctaIndex: 3,
    explicacion:
      "La comunicación en el duelo se basa en la escucha activa, la empatía, el respeto de los silencios y la validación de las emociones. Las frases hechas que minimizan el dolor o la evitación no ayudan a la elaboración del duelo.",
    fuente: "Atención al duelo (habilidades de comunicación)",
    dificultad: "facil",
    temaSlug: "enf-78",
  },
];
