import type { SeedPregunta } from "../tipos";

export const BANCO_TCAE_A: SeedPregunta[] = [
  // ---------------------------------------------------------------------------
  // Tema 1: tcae-informacion-clinica
  // ---------------------------------------------------------------------------
  {
    enunciado: "En el Servicio Andaluz de Salud, Diraya es:",
    opciones: [
      "El sistema de historia clínica electrónica del Sistema Sanitario Público de Andalucía",
      "Un registro nacional de listas de espera quirúrgica",
      "El programa de cita previa exclusivo de atención primaria",
      "La base de datos de profesionales sanitarios del SAS",
    ],
    correctaIndex: 0,
    explicacion:
      "Diraya es el sistema que gestiona la historia clínica electrónica única del ciudadano en el SSPA, integrando la información de atención primaria y hospitalaria.",
    fuente: "Sistema Diraya, SAS",
    dificultad: "facil",
    temaSlug: "tcae-informacion-clinica",
  },
  {
    enunciado: "La identificación inequívoca del paciente debe basarse en:",
    opciones: [
      "El número de cama y la habitación",
      "El diagnóstico principal de ingreso",
      "Al menos dos identificadores como el nombre completo y la fecha de nacimiento",
      "El nombre de pila y el color de la pulsera",
    ],
    correctaIndex: 2,
    explicacion:
      "La identificación inequívoca exige al menos dos identificadores independientes de la ubicación física; nunca deben usarse el número de habitación o de cama.",
    fuente: "Protocolo de identificación inequívoca de pacientes",
    dificultad: "media",
    temaSlug: "tcae-informacion-clinica",
  },
  {
    enunciado: "Según la Ley 41/2002, la historia clínica es:",
    opciones: [
      "Un documento único administrativo de facturación del proceso",
      "El conjunto de documentos que contienen los datos, valoraciones e informaciones sobre la situación y evolución clínica de un paciente",
      "El informe de alta firmado por el médico responsable",
      "El registro de constantes vitales de enfermería",
    ],
    correctaIndex: 1,
    explicacion:
      "El artículo 14 de la Ley 41/2002 define la historia clínica como el conjunto de documentos relativos a los procesos asistenciales de cada paciente.",
    fuente: "Ley 41/2002, art. 14",
    dificultad: "facil",
    temaSlug: "tcae-informacion-clinica",
  },
  {
    enunciado: "El consentimiento informado deberá prestarse por escrito:",
    opciones: [
      "Siempre y para cualquier actuación sanitaria",
      "Únicamente cuando lo solicite el paciente",
      "Solo en caso de ingreso hospitalario programado",
      "En intervención quirúrgica, procedimientos diagnósticos invasivos y los que supongan riesgos o inconvenientes notorios",
    ],
    correctaIndex: 3,
    explicacion:
      "El artículo 8.2 de la Ley 41/2002 reserva la forma escrita para la cirugía, los procedimientos diagnósticos y terapéuticos invasivos y aquellos que suponen riesgos notorios.",
    fuente: "Ley 41/2002, art. 8.2",
    dificultad: "media",
    temaSlug: "tcae-informacion-clinica",
  },
  {
    enunciado: "La notificación de incidentes de seguridad del paciente se caracteriza por ser:",
    opciones: [
      "Voluntaria, confidencial y orientada al aprendizaje, no a sancionar",
      "Obligatoria y con identificación del profesional para depurar responsabilidades",
      "Exclusiva del personal médico",
      "Anónima pero con sanción automática al notificante",
    ],
    correctaIndex: 0,
    explicacion:
      "Los sistemas de notificación de incidentes son voluntarios, confidenciales y no punitivos, ya que su fin es aprender de los errores para prevenirlos.",
    fuente: "Estrategia de Seguridad del Paciente",
    dificultad: "media",
    temaSlug: "tcae-informacion-clinica",
  },
  {
    enunciado: "Un evento centinela es:",
    opciones: [
      "Cualquier error que no llega a alcanzar al paciente",
      "Una reacción alérgica leve prevista",
      "Un suceso inesperado que produce la muerte o un daño grave y que exige investigación inmediata",
      "Un retraso administrativo en la cita",
    ],
    correctaIndex: 2,
    explicacion:
      "El evento centinela es un suceso inesperado que causa la muerte o un daño físico o psicológico grave y obliga a una investigación inmediata.",
    fuente: "Seguridad del paciente, terminología",
    dificultad: "dificil",
    temaSlug: "tcae-informacion-clinica",
  },
  {
    enunciado: "El acceso del TCAE a la historia clínica se limita a:",
    opciones: [
      "Toda la historia de cualquier paciente del hospital sin restricción",
      "Solo los datos necesarios para las funciones asistenciales que presta al paciente",
      "Únicamente con autorización escrita del paciente en cada caso",
      "Ningún dato, ya que es competencia exclusiva del médico",
    ],
    correctaIndex: 1,
    explicacion:
      "El acceso a la historia clínica se rige por el principio de necesidad: cada profesional accede solo a los datos precisos para las funciones que desempeña.",
    fuente: "Ley 41/2002, art. 16",
    dificultad: "media",
    temaSlug: "tcae-informacion-clinica",
  },
  {
    enunciado: "La historia clínica debe conservarse, como mínimo:",
    opciones: [
      "Un año desde el alta",
      "Tres años desde el alta",
      "Diez años en todo caso",
      "Cinco años como mínimo desde la fecha de alta de cada proceso asistencial",
    ],
    correctaIndex: 3,
    explicacion:
      "El artículo 17 de la Ley 41/2002 fija un periodo mínimo de conservación de cinco años contados desde la fecha del alta de cada proceso asistencial.",
    fuente: "Ley 41/2002, art. 17",
    dificultad: "dificil",
    temaSlug: "tcae-informacion-clinica",
  },
  {
    enunciado: "¿Cuál de los siguientes es un documento clínico?",
    opciones: [
      "El informe de alta hospitalaria",
      "La nómina del personal",
      "El parte de averías del servicio",
      "El pedido de material al almacén",
    ],
    correctaIndex: 0,
    explicacion:
      "El informe de alta forma parte de la documentación clínica; la nómina, el parte de averías y el pedido de almacén son documentos no clínicos.",
    fuente: "Documentación clínica y no clínica",
    dificultad: "facil",
    temaSlug: "tcae-informacion-clinica",
  },
  {
    enunciado: "Antes de colocar la pulsera identificativa, el TCAE debe:",
    opciones: [
      "Colocarla sin comprobar para no molestar",
      "Copiar los datos del paciente de la cama contigua",
      "Verificar los datos con el propio paciente siempre que sea posible",
      "Anotar solo el número de habitación",
    ],
    correctaIndex: 2,
    explicacion:
      "Los datos de la pulsera deben verificarse con el propio paciente cuando sea posible, para garantizar la identificación inequívoca.",
    fuente: "Protocolo de identificación inequívoca de pacientes",
    dificultad: "facil",
    temaSlug: "tcae-informacion-clinica",
  },
  {
    enunciado: "Los datos de salud, según el RGPD, se consideran:",
    opciones: [
      "Datos de acceso público",
      "Categorías especiales de datos, con protección reforzada",
      "Datos meramente administrativos",
      "Datos anonimizados por defecto",
    ],
    correctaIndex: 1,
    explicacion:
      "El artículo 9 del RGPD incluye los datos de salud entre las categorías especiales de datos, cuyo tratamiento está especialmente protegido.",
    fuente: "RGPD, art. 9",
    dificultad: "media",
    temaSlug: "tcae-informacion-clinica",
  },
  {
    enunciado: "La regla de los cinco correctos en la administración segura de medicación incluye:",
    opciones: [
      "Nombre, apellidos, cama, planta y turno",
      "Diagnóstico, pronóstico, tratamiento, dieta y reposo",
      "Médico, enfermera, TCAE, celador y farmacéutico",
      "Paciente, medicamento, dosis, vía y hora correctos",
    ],
    correctaIndex: 3,
    explicacion:
      "La regla de los cinco correctos verifica paciente, medicamento, dosis, vía y hora correctos antes de administrar cualquier fármaco.",
    fuente: "Regla de los cinco correctos",
    dificultad: "media",
    temaSlug: "tcae-informacion-clinica",
  },

  // ---------------------------------------------------------------------------
  // Tema 2: tcae-trabajo-equipo
  // ---------------------------------------------------------------------------
  {
    enunciado: "¿Cuál de las siguientes es una función propia del TCAE?",
    opciones: [
      "El aseo y la higiene del paciente encamado",
      "La prescripción de medicamentos",
      "El diagnóstico de enfermería",
      "La sutura de heridas",
    ],
    correctaIndex: 0,
    explicacion:
      "La higiene del paciente encamado es una función propia del TCAE; prescribir, diagnosticar o suturar corresponden a otras categorías.",
    fuente: "Funciones del TCAE",
    dificultad: "facil",
    temaSlug: "tcae-trabajo-equipo",
  },
  {
    enunciado: "Señale la actividad que NO corresponde al TCAE:",
    opciones: [
      "Ayudar en la alimentación del paciente",
      "Hacer la cama",
      "Administrar medicación por vía intravenosa",
      "Recoger datos como el peso y la talla",
    ],
    correctaIndex: 2,
    explicacion:
      "La administración de medicación intravenosa es competencia de enfermería; el TCAE colabora en la higiene, la alimentación y la recogida de datos.",
    fuente: "Funciones del TCAE",
    dificultad: "media",
    temaSlug: "tcae-trabajo-equipo",
  },
  {
    enunciado: "El modelo de Virginia Henderson describe:",
    opciones: [
      "10 necesidades básicas",
      "14 necesidades básicas",
      "12 necesidades básicas",
      "16 necesidades básicas",
    ],
    correctaIndex: 1,
    explicacion:
      "Virginia Henderson estructura los cuidados en torno a 14 necesidades básicas de la persona.",
    fuente: "Modelo de Virginia Henderson",
    dificultad: "facil",
    temaSlug: "tcae-trabajo-equipo",
  },
  {
    enunciado: "Según Henderson, el objetivo de los cuidados es:",
    opciones: [
      "Sustituir siempre a la persona en todas sus actividades",
      "Curar la enfermedad de base con fármacos",
      "Prolongar la estancia hospitalaria",
      "Ayudar a la persona a recuperar su independencia en la satisfacción de sus necesidades",
    ],
    correctaIndex: 3,
    explicacion:
      "Para Henderson el fin del cuidado es ayudar a la persona a recuperar cuanto antes su independencia en la satisfacción de sus necesidades.",
    fuente: "Modelo de Virginia Henderson",
    dificultad: "media",
    temaSlug: "tcae-trabajo-equipo",
  },
  {
    enunciado: "El TCAE puede recoger y registrar:",
    opciones: [
      "El peso, la talla, la diuresis y datos de la ingesta y eliminación",
      "El juicio diagnóstico del proceso",
      "La pauta farmacológica de alta",
      "La indicación de pruebas radiológicas",
    ],
    correctaIndex: 0,
    explicacion:
      "El TCAE colabora recogiendo datos como el peso, la talla, la diuresis o la ingesta; el diagnóstico y las pautas corresponden a otros profesionales.",
    fuente: "Funciones del TCAE",
    dificultad: "facil",
    temaSlug: "tcae-trabajo-equipo",
  },
  {
    enunciado: "El equipo de enfermería está formado por:",
    opciones: [
      "Solo médicos especialistas",
      "Celadores y personal administrativo",
      "Enfermeras y enfermeros y técnicos en cuidados auxiliares de enfermería",
      "Fisioterapeutas y trabajadores sociales exclusivamente",
    ],
    correctaIndex: 2,
    explicacion:
      "El equipo de enfermería lo integran las enfermeras y enfermeros y los técnicos en cuidados auxiliares de enfermería.",
    fuente: "Organización del equipo de enfermería",
    dificultad: "media",
    temaSlug: "tcae-trabajo-equipo",
  },
  {
    enunciado: "La escucha activa en la comunicación con el paciente implica:",
    opciones: [
      "Interrumpir para acelerar la conversación",
      "Prestar atención plena, mostrar interés y verificar lo que se ha comprendido",
      "Dar consejos antes de que el paciente termine",
      "Centrarse solo en la tarea sin mirar al paciente",
    ],
    correctaIndex: 1,
    explicacion:
      "Escuchar de forma activa supone atender plenamente, mostrar interés y comprobar que se ha entendido correctamente el mensaje.",
    fuente: "Habilidades de comunicación asistencial",
    dificultad: "media",
    temaSlug: "tcae-trabajo-equipo",
  },
  {
    enunciado: "Forman parte de la comunicación no verbal:",
    opciones: [
      "Las palabras escritas en la historia clínica",
      "El idioma utilizado",
      "Los términos técnicos empleados",
      "Los gestos, la postura, la mirada y la expresión facial",
    ],
    correctaIndex: 3,
    explicacion:
      "La comunicación no verbal se transmite mediante gestos, postura, mirada y expresión facial, no mediante las palabras.",
    fuente: "Habilidades de comunicación asistencial",
    dificultad: "media",
    temaSlug: "tcae-trabajo-equipo",
  },
  {
    enunciado: "En el orden funcional del equipo, el TCAE desarrolla sus tareas:",
    opciones: [
      "Bajo la supervisión de la enfermera o enfermero responsable",
      "Con total autonomía en los cuidados de enfermería",
      "Dependiendo directamente del servicio de admisión",
      "Bajo las órdenes exclusivas del celador",
    ],
    correctaIndex: 0,
    explicacion:
      "El TCAE realiza sus funciones bajo la supervisión de la enfermera o enfermero responsable del paciente.",
    fuente: "Organización del equipo de enfermería",
    dificultad: "media",
    temaSlug: "tcae-trabajo-equipo",
  },
  {
    enunciado: "¿Cuál es una barrera en la comunicación con el paciente?",
    opciones: [
      "Adaptar el lenguaje al nivel del paciente",
      "Mantener el contacto visual",
      "El uso de tecnicismos que el paciente no comprende",
      "Confirmar que ha entendido el mensaje",
    ],
    correctaIndex: 2,
    explicacion:
      "El uso de tecnicismos dificulta la comprensión y constituye una barrera; el resto de opciones favorecen la comunicación.",
    fuente: "Habilidades de comunicación asistencial",
    dificultad: "media",
    temaSlug: "tcae-trabajo-equipo",
  },
  {
    enunciado:
      "¿Cuál de las siguientes NO es una de las 14 necesidades básicas de Virginia Henderson?",
    opciones: [
      "Respirar normalmente",
      "Administrar el tratamiento farmacológico prescrito",
      "Dormir y descansar",
      "Vestirse y desvestirse",
    ],
    correctaIndex: 1,
    explicacion:
      "Administrar el tratamiento farmacológico no es una necesidad básica del modelo; respirar, dormir o vestirse sí figuran entre las catorce.",
    fuente: "Modelo de Virginia Henderson",
    dificultad: "dificil",
    temaSlug: "tcae-trabajo-equipo",
  },
  {
    enunciado: "La anotación de los cuidados realizados por el TCAE debe ser:",
    opciones: [
      "Opcional si hay poco tiempo",
      "Redactada con juicios de valor sobre el paciente",
      "Realizada al final de la semana en bloque",
      "Objetiva, legible, fechada y firmada por quien la realiza",
    ],
    correctaIndex: 3,
    explicacion:
      "El registro de cuidados debe ser objetivo, legible, estar fechado y firmado por el profesional que ejecuta la acción.",
    fuente: "Registro de cuidados de enfermería",
    dificultad: "dificil",
    temaSlug: "tcae-trabajo-equipo",
  },

  // ---------------------------------------------------------------------------
  // Tema 3: tcae-prl
  // ---------------------------------------------------------------------------
  {
    enunciado: "El Real Decreto 487/1997 regula:",
    opciones: [
      "Las disposiciones mínimas de seguridad y salud relativas a la manipulación manual de cargas",
      "El uso de pantallas de visualización de datos",
      "La protección frente al ruido",
      "La señalización de seguridad en el trabajo",
    ],
    correctaIndex: 0,
    explicacion:
      "El RD 487/1997 establece las disposiciones mínimas de seguridad y salud relativas a la manipulación manual de cargas.",
    fuente: "RD 487/1997",
    dificultad: "facil",
    temaSlug: "tcae-prl",
  },
  {
    enunciado:
      "En condiciones ideales, el peso máximo recomendado de referencia general para la manipulación manual de cargas es:",
    opciones: ["40 kg", "10 kg", "25 kg", "50 kg"],
    correctaIndex: 2,
    explicacion:
      "La guía técnica del RD 487/1997 fija un peso de referencia de 25 kg en condiciones ideales para la población trabajadora general.",
    fuente: "RD 487/1997, guía técnica INSST",
    dificultad: "media",
    temaSlug: "tcae-prl",
  },
  {
    enunciado: "Para levantar correctamente una carga del suelo se debe:",
    opciones: [
      "Flexionar la espalda manteniendo las piernas rectas",
      "Flexionar las rodillas manteniendo la espalda recta y la carga cerca del cuerpo",
      "Girar el tronco mientras se levanta",
      "Levantar de forma brusca para aprovechar el impulso",
    ],
    correctaIndex: 1,
    explicacion:
      "El levantamiento seguro se realiza flexionando las rodillas, con la espalda recta y la carga próxima al cuerpo, sin girar el tronco.",
    fuente: "RD 487/1997, guía técnica INSST",
    dificultad: "facil",
    temaSlug: "tcae-prl",
  },
  {
    enunciado: "Las precauciones estándar frente al riesgo biológico se aplican:",
    opciones: [
      "Solo a pacientes con infección confirmada",
      "Solo en el quirófano",
      "Únicamente a pacientes VIH positivos",
      "A todos los pacientes, con independencia de su diagnóstico o estado infeccioso",
    ],
    correctaIndex: 3,
    explicacion:
      "Las precauciones estándar se aplican a todos los pacientes por igual, ya que asumen que cualquier fluido puede ser potencialmente infeccioso.",
    fuente: "Precauciones estándar",
    dificultad: "media",
    temaSlug: "tcae-prl",
  },
  {
    enunciado: "Ante un pinchazo accidental con una aguja usada, la primera actuación es:",
    opciones: [
      "Lavar la herida con agua y jabón, permitiendo el sangrado, sin frotar con violencia",
      "Aplicar un torniquete por encima de la herida",
      "Ignorarlo si la aguja parecía limpia",
      "Cubrir la herida sin lavarla y continuar trabajando",
    ],
    correctaIndex: 0,
    explicacion:
      "Ante un accidente biológico se lava de inmediato la zona con agua y jabón dejando fluir la sangre, y después se notifica según protocolo.",
    fuente: "Protocolo de accidente biológico",
    dificultad: "media",
    temaSlug: "tcae-prl",
  },
  {
    enunciado: "Las agujas usadas deben desecharse:",
    opciones: [
      "En la bolsa negra de residuos urbanos",
      "Reencapuchando la aguja con las dos manos",
      "En un contenedor rígido específico para material punzante, sin reencapuchar",
      "En el contenedor de residuos de vidrio",
    ],
    correctaIndex: 2,
    explicacion:
      "El material punzante se deposita directamente en un contenedor rígido específico, sin reencapuchar la aguja para evitar pinchazos.",
    fuente: "Gestión de residuos sanitarios",
    dificultad: "media",
    temaSlug: "tcae-prl",
  },
  {
    enunciado: "Un equipo de protección individual (EPI) es:",
    opciones: [
      "Un dispositivo de protección colectiva de la sala",
      "Cualquier equipo destinado a ser llevado o sujetado por el trabajador para protegerle de uno o varios riesgos",
      "El botiquín de primeros auxilios",
      "El sistema de ventilación del edificio",
    ],
    correctaIndex: 1,
    explicacion:
      "El EPI es cualquier equipo que lleva o sujeta el trabajador para protegerse de riesgos; a diferencia de la protección colectiva, es de uso individual.",
    fuente: "RD 773/1997",
    dificultad: "facil",
    temaSlug: "tcae-prl",
  },
  {
    enunciado: "Respecto al uso de guantes como EPI:",
    opciones: [
      "Pueden reutilizarse entre pacientes si no están rotos",
      "Sustituyen por completo al lavado de manos",
      "Se colocan antes de la bata en todos los casos",
      "No sustituyen a la higiene de manos y deben cambiarse entre pacientes",
    ],
    correctaIndex: 3,
    explicacion:
      "Los guantes no sustituyen a la higiene de manos y deben cambiarse entre pacientes y entre tareas para evitar la transmisión cruzada.",
    fuente: "Precauciones estándar",
    dificultad: "media",
    temaSlug: "tcae-prl",
  },
  {
    enunciado: "El trabajo a turnos y nocturno puede alterar principalmente:",
    opciones: [
      "El ritmo circadiano, el sueño y la alimentación",
      "Únicamente la vista",
      "Solo la capacidad auditiva",
      "Exclusivamente la fuerza muscular",
    ],
    correctaIndex: 0,
    explicacion:
      "La turnicidad afecta al ritmo circadiano, provocando alteraciones del sueño, la alimentación y el bienestar general del trabajador.",
    fuente: "Turnicidad y salud laboral",
    dificultad: "facil",
    temaSlug: "tcae-prl",
  },
  {
    enunciado: "Para movilizar a un paciente muy dependiente, lo recomendable es:",
    opciones: [
      "Hacerlo siempre una sola persona para ir más rápido",
      "Tirar del paciente por los brazos",
      "Utilizar grúas o ayudas mecánicas y realizarlo entre el personal necesario",
      "Evitar cualquier movilización",
    ],
    correctaIndex: 2,
    explicacion:
      "El uso de grúas y ayudas mecánicas, junto a la participación de varios profesionales, previene lesiones osteomusculares en la movilización.",
    fuente: "Prevención de riesgos por manipulación de pacientes",
    dificultad: "media",
    temaSlug: "tcae-prl",
  },
  {
    enunciado:
      "Frente al riesgo biológico, en el personal sanitario se recomienda especialmente la vacunación frente a:",
    opciones: ["Fiebre amarilla", "Hepatitis B", "Rabia", "Malaria"],
    correctaIndex: 1,
    explicacion:
      "La vacunación frente a la hepatitis B es una medida clave de protección del trabajador sanitario expuesto a sangre y fluidos.",
    fuente: "Vigilancia de la salud del trabajador sanitario",
    dificultad: "dificil",
    temaSlug: "tcae-prl",
  },
  {
    enunciado:
      "Según el RD 487/1997, NO es un factor de riesgo asociado a la carga que se manipula:",
    opciones: [
      "Que la carga sea demasiado pesada o voluminosa",
      "Que la carga esté en equilibrio inestable",
      "Que la carga deba sostenerse a distancia del tronco",
      "El nivel de ruido ambiental de la sala",
    ],
    correctaIndex: 3,
    explicacion:
      "El peso, el volumen, el equilibrio y la distancia al tronco son factores de riesgo de la carga; el ruido ambiental no se refiere a la carga en sí.",
    fuente: "RD 487/1997",
    dificultad: "dificil",
    temaSlug: "tcae-prl",
  },

  // ---------------------------------------------------------------------------
  // Tema 4: tcae-bioetica
  // ---------------------------------------------------------------------------
  {
    enunciado: "Los cuatro principios clásicos de la bioética son:",
    opciones: [
      "Autonomía, beneficencia, no maleficencia y justicia",
      "Libertad, igualdad, fraternidad y solidaridad",
      "Prevención, curación, rehabilitación y paliación",
      "Eficacia, eficiencia, calidad y seguridad",
    ],
    correctaIndex: 0,
    explicacion:
      "La bioética principialista se articula en torno a autonomía, beneficencia, no maleficencia y justicia.",
    fuente: "Principios de bioética",
    dificultad: "facil",
    temaSlug: "tcae-bioetica",
  },
  {
    enunciado: "El principio de autonomía se relaciona directamente con:",
    opciones: [
      "Repartir los recursos con equidad",
      "No causar daño al paciente",
      "El respeto a la capacidad de decisión del paciente y el consentimiento informado",
      "Buscar siempre el beneficio del paciente",
    ],
    correctaIndex: 2,
    explicacion:
      "La autonomía implica respetar las decisiones libres e informadas del paciente, y se concreta en el consentimiento informado.",
    fuente: "Principios de bioética",
    dificultad: "media",
    temaSlug: "tcae-bioetica",
  },
  {
    enunciado: "La máxima primum non nocere corresponde al principio de:",
    opciones: ["Justicia", "No maleficencia", "Autonomía", "Beneficencia"],
    correctaIndex: 1,
    explicacion:
      "Primum non nocere (lo primero, no dañar) expresa el principio de no maleficencia: la obligación de no causar daño.",
    fuente: "Principios de bioética",
    dificultad: "facil",
    temaSlug: "tcae-bioetica",
  },
  {
    enunciado: "El principio de justicia se refiere a:",
    opciones: [
      "Hacer siempre el bien al paciente",
      "Respetar la voluntad del paciente",
      "Evitar el daño al paciente",
      "La distribución equitativa de los recursos sanitarios y la no discriminación",
    ],
    correctaIndex: 3,
    explicacion:
      "El principio de justicia exige distribuir los recursos de forma equitativa y tratar a todos los pacientes sin discriminación.",
    fuente: "Principios de bioética",
    dificultad: "media",
    temaSlug: "tcae-bioetica",
  },
  {
    enunciado: "El secreto profesional del TCAE:",
    opciones: [
      "Obliga a mantener la confidencialidad y se mantiene incluso tras el alta o el fallecimiento del paciente",
      "Deja de aplicarse cuando el paciente recibe el alta",
      "Solo afecta al personal médico",
      "Permite comentar el caso con familiares y amigos",
    ],
    correctaIndex: 0,
    explicacion:
      "El deber de confidencialidad vincula a todos los profesionales y persiste tras el alta e incluso tras el fallecimiento del paciente.",
    fuente: "Deber de confidencialidad, Ley 41/2002",
    dificultad: "media",
    temaSlug: "tcae-bioetica",
  },
  {
    enunciado: "Para preservar la intimidad del paciente durante el aseo, el TCAE debe:",
    opciones: [
      "Dejar la puerta abierta por seguridad",
      "Realizar el aseo con las visitas presentes",
      "Utilizar biombos o cortinas y descubrir únicamente la zona necesaria",
      "Comentar el estado del paciente en voz alta",
    ],
    correctaIndex: 2,
    explicacion:
      "Usar biombos o cortinas y descubrir solo lo imprescindible protege la intimidad y la dignidad del paciente durante los cuidados.",
    fuente: "Respeto a la intimidad del paciente",
    dificultad: "facil",
    temaSlug: "tcae-bioetica",
  },
  {
    enunciado: "Un Comité de Ética Asistencial es:",
    opciones: [
      "Un tribunal que sanciona a los profesionales",
      "Un órgano consultivo y multidisciplinar que asesora en la toma de decisiones ante conflictos éticos",
      "Un servicio clínico de urgencias",
      "Un organismo que autoriza las altas hospitalarias",
    ],
    correctaIndex: 1,
    explicacion:
      "El Comité de Ética Asistencial es un órgano consultivo, multidisciplinar y de carácter asesor ante los conflictos éticos de la asistencia.",
    fuente: "Comités de Ética Asistencial",
    dificultad: "media",
    temaSlug: "tcae-bioetica",
  },
  {
    enunciado: "Las recomendaciones de un Comité de Ética Asistencial tienen carácter:",
    opciones: [
      "De obligado cumplimiento penal",
      "Vinculante para el juez",
      "Sustitutivo de la decisión del paciente",
      "Consultivo y no vinculante",
    ],
    correctaIndex: 3,
    explicacion:
      "El comité asesora y orienta, pero sus recomendaciones no son vinculantes ni sustituyen la responsabilidad del profesional o del paciente.",
    fuente: "Comités de Ética Asistencial",
    dificultad: "dificil",
    temaSlug: "tcae-bioetica",
  },
  {
    enunciado: "Comentar datos de un paciente en el pasillo o el ascensor supone:",
    opciones: [
      "Una vulneración del deber de confidencialidad",
      "Una buena práctica de coordinación",
      "Algo permitido si no se dice el nombre completo",
      "Una obligación del trabajo en equipo",
    ],
    correctaIndex: 0,
    explicacion:
      "Divulgar información clínica en espacios comunes vulnera la confidencialidad, aunque no se cite el nombre completo del paciente.",
    fuente: "Deber de confidencialidad",
    dificultad: "facil",
    temaSlug: "tcae-bioetica",
  },
  {
    enunciado: "El principio de beneficencia consiste en:",
    opciones: [
      "No causar daño al paciente",
      "Repartir los recursos con equidad",
      "Actuar procurando el mayor beneficio posible para el paciente",
      "Respetar únicamente la autonomía del paciente",
    ],
    correctaIndex: 2,
    explicacion:
      "La beneficencia obliga a actuar en beneficio del paciente; no causar daño corresponde a la no maleficencia.",
    fuente: "Principios de bioética",
    dificultad: "media",
    temaSlug: "tcae-bioetica",
  },
  {
    enunciado: "El deber de confidencialidad puede ceder:",
    opciones: [
      "Cuando lo pida un familiar por curiosidad",
      "Ante un riesgo grave para la salud pública o por imperativo legal",
      "Cuando el caso resulte interesante para comentarlo",
      "En cualquier reunión informal del servicio",
    ],
    correctaIndex: 1,
    explicacion:
      "La confidencialidad puede limitarse solo en supuestos tasados, como un riesgo grave para la salud pública o una obligación legal.",
    fuente: "Deber de confidencialidad",
    dificultad: "dificil",
    temaSlug: "tcae-bioetica",
  },
  {
    enunciado: "Un paciente competente e informado rechaza un tratamiento. La actitud correcta es:",
    opciones: [
      "Aplicar el tratamiento en contra de su voluntad",
      "Dar el alta forzosa de inmediato",
      "Ocultar información para convencerlo",
      "Respetar su decisión, una vez informado adecuadamente y dejando constancia",
    ],
    correctaIndex: 3,
    explicacion:
      "El respeto a la autonomía obliga a aceptar el rechazo de un paciente competente e informado, documentándolo debidamente.",
    fuente: "Principio de autonomía, Ley 41/2002",
    dificultad: "media",
    temaSlug: "tcae-bioetica",
  },

  // ---------------------------------------------------------------------------
  // Tema 5: tcae-infecciones
  // ---------------------------------------------------------------------------
  {
    enunciado: "La cadena epidemiológica está formada por:",
    opciones: [
      "Agente causal, reservorio o fuente, mecanismo de transmisión y huésped susceptible",
      "Virus, bacteria, hongo y parásito",
      "Fiebre, dolor, inflamación y tumor",
      "Prevención, diagnóstico, tratamiento y curación",
    ],
    correctaIndex: 0,
    explicacion:
      "La cadena epidemiológica encadena el agente causal, el reservorio o fuente, el mecanismo de transmisión y el huésped susceptible.",
    fuente: "Cadena epidemiológica",
    dificultad: "facil",
    temaSlug: "tcae-infecciones",
  },
  {
    enunciado: "Las siglas IRAS corresponden a:",
    opciones: [
      "Insuficiencias respiratorias agudas",
      "Índices de riesgo de anestesia",
      "Infecciones relacionadas con la asistencia sanitaria",
      "Inmunizaciones de refuerzo anuales",
    ],
    correctaIndex: 2,
    explicacion:
      "Las IRAS son las infecciones relacionadas con la asistencia sanitaria, antes llamadas infecciones nosocomiales.",
    fuente: "Infecciones relacionadas con la asistencia sanitaria",
    dificultad: "facil",
    temaSlug: "tcae-infecciones",
  },
  {
    enunciado: "La OMS establece para la higiene de las manos:",
    opciones: ["3 momentos", "5 momentos", "7 momentos", "10 momentos"],
    correctaIndex: 1,
    explicacion:
      "La OMS define los 5 momentos para la higiene de las manos, referidos al contacto con el paciente y su entorno.",
    fuente: "OMS, cinco momentos para la higiene de manos",
    dificultad: "facil",
    temaSlug: "tcae-infecciones",
  },
  {
    enunciado:
      "Según los cinco momentos de la OMS, uno de los momentos para higienizar las manos es:",
    opciones: [
      "Solo después de salir del hospital",
      "Únicamente al iniciar el turno",
      "Solo si las manos están visiblemente sucias",
      "Antes de tocar al paciente",
    ],
    correctaIndex: 3,
    explicacion:
      "Los cinco momentos incluyen: antes de tocar al paciente, antes de una tarea aséptica, tras riesgo de exposición a fluidos, tras tocar al paciente y tras tocar su entorno.",
    fuente: "OMS, cinco momentos para la higiene de manos",
    dificultad: "media",
    temaSlug: "tcae-infecciones",
  },
  {
    enunciado:
      "Cuando las manos están visiblemente sucias o contaminadas con materia orgánica, se debe:",
    opciones: [
      "Lavarlas con agua y jabón, ya que la solución hidroalcohólica no basta con suciedad visible",
      "Usar únicamente solución hidroalcohólica",
      "No hacer nada si se usan guantes",
      "Aplicar polvos de talco",
    ],
    correctaIndex: 0,
    explicacion:
      "Con suciedad visible o materia orgánica es obligatorio el lavado con agua y jabón; la solución hidroalcohólica se reserva para manos aparentemente limpias.",
    fuente: "OMS, higiene de manos",
    dificultad: "media",
    temaSlug: "tcae-infecciones",
  },
  {
    enunciado: "Las precauciones por gotas están indicadas, entre otras, en:",
    opciones: [
      "Sarampión y tuberculosis",
      "Infecciones cutáneas por contacto",
      "Gripe, tosferina o enfermedad meningocócica",
      "Todas las infecciones digestivas",
    ],
    correctaIndex: 2,
    explicacion:
      "Las precauciones por gotas se aplican en procesos como la gripe, la tosferina o la enfermedad meningocócica; el sarampión y la tuberculosis exigen precauciones aéreas.",
    fuente: "Precauciones por transmisión",
    dificultad: "dificil",
    temaSlug: "tcae-infecciones",
  },
  {
    enunciado: "Ante un paciente con tuberculosis pulmonar (transmisión aérea) se utiliza:",
    opciones: [
      "Mascarilla quirúrgica sencilla",
      "Mascarilla de protección respiratoria tipo FFP2 o FFP3",
      "Solo guantes",
      "Ninguna protección especial",
    ],
    correctaIndex: 1,
    explicacion:
      "La transmisión aérea requiere mascarilla de protección respiratoria FFP2 o FFP3, que filtra los núcleos goticulares, no una simple mascarilla quirúrgica.",
    fuente: "Precauciones por transmisión aérea",
    dificultad: "media",
    temaSlug: "tcae-infecciones",
  },
  {
    enunciado: "Las precauciones por contacto exigen fundamentalmente:",
    opciones: [
      "Mascarilla FFP3 obligatoria",
      "Habitación con presión negativa",
      "Gafas de sol",
      "Uso de guantes y bata, además de la higiene de manos",
    ],
    correctaIndex: 3,
    explicacion:
      "En las precauciones por contacto se utilizan guantes y bata, junto con una higiene de manos rigurosa, para evitar la transmisión por contacto directo o indirecto.",
    fuente: "Precauciones por transmisión",
    dificultad: "media",
    temaSlug: "tcae-infecciones",
  },
  {
    enunciado: "El orden correcto de colocación del equipo de protección individual es:",
    opciones: [
      "Bata, mascarilla, protección ocular y, por último, guantes",
      "Guantes, gafas, mascarilla y bata",
      "Mascarilla, guantes, bata y gafas",
      "Guantes primero y bata al final",
    ],
    correctaIndex: 0,
    explicacion:
      "El EPI se coloca en el orden bata, mascarilla, protección ocular y guantes en último lugar.",
    fuente: "Protocolo de colocación y retirada de EPI",
    dificultad: "media",
    temaSlug: "tcae-infecciones",
  },
  {
    enunciado:
      "Al retirar el equipo de protección individual, en general se quita en primer lugar:",
    opciones: [
      "La mascarilla",
      "La bata antes que los guantes",
      "Los guantes",
      "Las gafas al final del todo",
    ],
    correctaIndex: 2,
    explicacion:
      "La retirada comienza por los guantes, que son la pieza más contaminada; la mascarilla se retira la última y ya fuera de la habitación.",
    fuente: "Protocolo de colocación y retirada de EPI",
    dificultad: "dificil",
    temaSlug: "tcae-infecciones",
  },
  {
    enunciado: "En la cadena epidemiológica, la persona enferma o portadora actúa como:",
    opciones: [
      "Huésped susceptible",
      "Reservorio o fuente de infección",
      "Mecanismo de transmisión",
      "Puerta de entrada",
    ],
    correctaIndex: 1,
    explicacion:
      "El enfermo o portador es el reservorio o fuente desde donde el agente se transmite hacia el huésped susceptible.",
    fuente: "Cadena epidemiológica",
    dificultad: "media",
    temaSlug: "tcae-infecciones",
  },
  {
    enunciado: "La medida más sencilla y eficaz para prevenir las IRAS es:",
    opciones: [
      "El uso rutinario de antibióticos",
      "El aislamiento de todos los pacientes",
      "La esterilización del aire",
      "La higiene de las manos",
    ],
    correctaIndex: 3,
    explicacion:
      "La higiene de manos es la medida más simple, barata y eficaz para prevenir las infecciones relacionadas con la asistencia sanitaria.",
    fuente: "OMS, prevención de IRAS",
    dificultad: "facil",
    temaSlug: "tcae-infecciones",
  },

  // ---------------------------------------------------------------------------
  // Tema 6: tcae-residuos
  // ---------------------------------------------------------------------------
  {
    enunciado: "El Decreto 73/2012 regula:",
    opciones: [
      "La gestión de los residuos sanitarios en la comunidad autónoma de Andalucía",
      "El transporte de pacientes críticos",
      "La historia clínica digital",
      "Los horarios de visita hospitalarios",
    ],
    correctaIndex: 0,
    explicacion:
      "El Decreto 73/2012 aprueba el Reglamento de residuos de Andalucía, que incluye la gestión de los residuos sanitarios.",
    fuente: "Decreto 73/2012, de Andalucía",
    dificultad: "facil",
    temaSlug: "tcae-residuos",
  },
  {
    enunciado: "Los residuos clasificados en el Grupo I son:",
    opciones: [
      "Residuos citotóxicos",
      "Residuos punzantes contaminados",
      "Residuos asimilables a los urbanos, sin riesgo específico",
      "Restos anatómicos humanos",
    ],
    correctaIndex: 2,
    explicacion:
      "El Grupo I lo integran los residuos generales asimilables a los urbanos, que no presentan riesgo específico.",
    fuente: "Clasificación de residuos sanitarios",
    dificultad: "media",
    temaSlug: "tcae-residuos",
  },
  {
    enunciado: "Los residuos cortantes y punzantes deben depositarse en:",
    opciones: [
      "Una bolsa negra de basura urbana",
      "Un contenedor rígido e imperforable de color amarillo",
      "Una bolsa de plástico verde",
      "Un contenedor de cartón para papel",
    ],
    correctaIndex: 1,
    explicacion:
      "El material cortante y punzante se elimina en contenedores rígidos, imperforables y de color amarillo para evitar pinchazos.",
    fuente: "Gestión de residuos sanitarios",
    dificultad: "facil",
    temaSlug: "tcae-residuos",
  },
  {
    enunciado: "Tras utilizar una aguja, el TCAE debe:",
    opciones: [
      "Reencapuchar la aguja antes de tirarla",
      "Doblarla con las manos",
      "Dejarla en la bandeja para más tarde",
      "Depositarla directamente en el contenedor rígido de punzantes, sin reencapuchar",
    ],
    correctaIndex: 3,
    explicacion:
      "La aguja se deposita directamente en el contenedor rígido sin reencapuchar ni manipular, para prevenir el accidente biológico.",
    fuente: "Gestión de residuos sanitarios",
    dificultad: "facil",
    temaSlug: "tcae-residuos",
  },
  {
    enunciado: "La segregación de los residuos sanitarios debe realizarse:",
    opciones: [
      "En el punto de generación del residuo, en el mismo momento",
      "En la planta de tratamiento externa",
      "Al final del turno, todos juntos",
      "En el almacén general del hospital",
    ],
    correctaIndex: 0,
    explicacion:
      "La segregación correcta se realiza en origen, es decir, en el mismo lugar y momento en que se genera el residuo.",
    fuente: "Gestión de residuos sanitarios",
    dificultad: "media",
    temaSlug: "tcae-residuos",
  },
  {
    enunciado: "Los residuos citostáticos o citotóxicos:",
    opciones: [
      "Se eliminan con los residuos urbanos",
      "No requieren ninguna precaución",
      "Se consideran residuos peligrosos y exigen un contenedor específico y gestión diferenciada",
      "Se vierten por el desagüe",
    ],
    correctaIndex: 2,
    explicacion:
      "Los residuos citostáticos son peligrosos y deben segregarse en contenedores específicos, con una gestión diferenciada por su toxicidad.",
    fuente: "Gestión de residuos citostáticos",
    dificultad: "media",
    temaSlug: "tcae-residuos",
  },
  {
    enunciado: "Los restos anatómicos humanos de entidad:",
    opciones: [
      "Se depositan en la bolsa negra",
      "Reciben un tratamiento específico, diferenciado de los residuos generales",
      "Se pueden reutilizar",
      "No están regulados",
    ],
    correctaIndex: 1,
    explicacion:
      "Los restos anatómicos humanos reciben un tratamiento específico regulado, distinto del de los residuos asimilables a urbanos.",
    fuente: "Gestión de residuos sanitarios",
    dificultad: "dificil",
    temaSlug: "tcae-residuos",
  },
  {
    enunciado:
      "La responsabilidad de depositar cada residuo en su envase correcto recae principalmente en:",
    opciones: [
      "El servicio de limpieza exclusivamente",
      "La empresa gestora externa",
      "El celador de planta",
      "El profesional que genera el residuo, en el momento de producirlo",
    ],
    correctaIndex: 3,
    explicacion:
      "La correcta segregación es responsabilidad del profesional que genera el residuo, que debe depositarlo en el envase adecuado en el mismo momento.",
    fuente: "Gestión de residuos sanitarios",
    dificultad: "dificil",
    temaSlug: "tcae-residuos",
  },
  {
    enunciado: "El principal riesgo de una mala gestión del material punzante es:",
    opciones: [
      "El pinchazo accidental y la posible transmisión de agentes infecciosos",
      "El mal olor únicamente",
      "El aumento del volumen de basura",
      "El deterioro estético del contenedor",
    ],
    correctaIndex: 0,
    explicacion:
      "Una gestión incorrecta del material punzante facilita el pinchazo accidental y la transmisión de agentes infecciosos transmitidos por sangre.",
    fuente: "Gestión de residuos sanitarios",
    dificultad: "facil",
    temaSlug: "tcae-residuos",
  },
  {
    enunciado: "Los envases rígidos de color amarillo se destinan a:",
    opciones: [
      "Papel y cartón",
      "Vidrio",
      "Residuos cortantes, punzantes y biosanitarios especiales",
      "Restos de comida",
    ],
    correctaIndex: 2,
    explicacion:
      "Los envases rígidos amarillos recogen los residuos cortantes, punzantes y biosanitarios especiales o de riesgo.",
    fuente: "Gestión de residuos sanitarios",
    dificultad: "media",
    temaSlug: "tcae-residuos",
  },
  {
    enunciado: "Los contenedores de material punzante deben cerrarse y sustituirse:",
    opciones: [
      "Cuando rebosen por completo",
      "Antes de llenarse del todo, en torno a sus tres cuartas partes de capacidad",
      "Una vez al mes de forma fija",
      "Nunca, ya que se vacían y se reutilizan",
    ],
    correctaIndex: 1,
    explicacion:
      "Para evitar accidentes, los contenedores de punzantes se cierran antes de llenarse por completo, aproximadamente a las tres cuartas partes de su capacidad.",
    fuente: "Gestión de residuos sanitarios",
    dificultad: "media",
    temaSlug: "tcae-residuos",
  },
  {
    enunciado: "¿Cuál de los siguientes es un residuo del Grupo I (asimilable a urbano)?",
    opciones: [
      "Una aguja usada",
      "Una gasa empapada en sangre",
      "Un frasco de citostático",
      "El papel y el cartón de los embalajes",
    ],
    correctaIndex: 3,
    explicacion:
      "El papel y el cartón de embalajes son residuos asimilables a urbanos (Grupo I); los otros ejemplos son residuos peligrosos o de riesgo.",
    fuente: "Clasificación de residuos sanitarios",
    dificultad: "facil",
    temaSlug: "tcae-residuos",
  },

  // ---------------------------------------------------------------------------
  // Tema 7: tcae-higiene-hospitalaria
  // ---------------------------------------------------------------------------
  {
    enunciado: "La esterilización es el proceso que:",
    opciones: [
      "Destruye toda forma de vida microbiana, incluidas las esporas",
      "Reduce el número de microorganismos de la piel",
      "Elimina solo las bacterias, pero no los virus",
      "Solo retira la suciedad visible",
    ],
    correctaIndex: 0,
    explicacion:
      "La esterilización elimina toda forma de vida microbiana, incluidas las esporas, que son las formas más resistentes.",
    fuente: "Higiene hospitalaria, conceptos",
    dificultad: "facil",
    temaSlug: "tcae-higiene-hospitalaria",
  },
  {
    enunciado: "La desinfección se diferencia de la esterilización en que:",
    opciones: [
      "Elimina más microorganismos que la esterilización",
      "Se aplica solo sobre la piel",
      "No asegura la destrucción de las esporas bacterianas",
      "Es sinónimo de limpieza",
    ],
    correctaIndex: 2,
    explicacion:
      "La desinfección destruye los microorganismos patógenos, pero no garantiza la eliminación de las esporas, a diferencia de la esterilización.",
    fuente: "Higiene hospitalaria, conceptos",
    dificultad: "media",
    temaSlug: "tcae-higiene-hospitalaria",
  },
  {
    enunciado: "La antisepsia se aplica sobre:",
    opciones: [
      "Superficies y objetos inanimados",
      "Tejidos vivos, como la piel y las mucosas",
      "El instrumental quirúrgico",
      "El agua de consumo",
    ],
    correctaIndex: 1,
    explicacion:
      "La antisepsia actúa sobre tejidos vivos (piel y mucosas), mientras que la desinfección se aplica sobre objetos y superficies inertes.",
    fuente: "Higiene hospitalaria, conceptos",
    dificultad: "media",
    temaSlug: "tcae-higiene-hospitalaria",
  },
  {
    enunciado: "La asepsia se define como:",
    opciones: [
      "La destrucción de esporas por calor",
      "Un tipo de antibiótico",
      "La limpieza con agua y jabón",
      "El conjunto de procedimientos para impedir la llegada de microorganismos a un medio o zona",
    ],
    correctaIndex: 3,
    explicacion:
      "La asepsia es el conjunto de medidas destinadas a impedir la llegada de microorganismos a una zona que se mantiene libre de ellos.",
    fuente: "Higiene hospitalaria, conceptos",
    dificultad: "media",
    temaSlug: "tcae-higiene-hospitalaria",
  },
  {
    enunciado: "Antes de esterilizar el instrumental es imprescindible:",
    opciones: [
      "Limpiarlo previamente para retirar la materia orgánica",
      "Sumergirlo en alcohol únicamente",
      "Esterilizarlo directamente sin limpiar",
      "Envolverlo en papel de periódico",
    ],
    correctaIndex: 0,
    explicacion:
      "La limpieza previa es imprescindible, ya que la materia orgánica protege a los microorganismos e impide una esterilización eficaz.",
    fuente: "Higiene hospitalaria, procesos",
    dificultad: "facil",
    temaSlug: "tcae-higiene-hospitalaria",
  },
  {
    enunciado: "El autoclave esteriliza mediante:",
    opciones: [
      "Radiación ultravioleta",
      "Óxido de etileno",
      "Calor húmedo, es decir, vapor de agua a presión",
      "Calor seco a baja temperatura",
    ],
    correctaIndex: 2,
    explicacion:
      "El autoclave esteriliza por calor húmedo, empleando vapor de agua a presión, método eficaz para el material termorresistente.",
    fuente: "Métodos de esterilización",
    dificultad: "facil",
    temaSlug: "tcae-higiene-hospitalaria",
  },
  {
    enunciado: "El óxido de etileno se emplea para esterilizar:",
    opciones: [
      "Solo material metálico",
      "Material termosensible que no resiste las altas temperaturas",
      "Las superficies de los suelos",
      "La piel del paciente",
    ],
    correctaIndex: 1,
    explicacion:
      "El óxido de etileno permite esterilizar en frío material termosensible que no soportaría el calor del autoclave.",
    fuente: "Métodos de esterilización",
    dificultad: "dificil",
    temaSlug: "tcae-higiene-hospitalaria",
  },
  {
    enunciado: "El alcohol a una concentración en torno al 70% se utiliza como:",
    opciones: [
      "Esterilizante de esporas",
      "Detergente para los suelos",
      "Colorante de tinción",
      "Antiséptico y desinfectante de acción rápida sobre piel intacta",
    ],
    correctaIndex: 3,
    explicacion:
      "El alcohol al 70% actúa como antiséptico y desinfectante de acción rápida, aunque no destruye las esporas.",
    fuente: "Antisépticos y desinfectantes",
    dificultad: "media",
    temaSlug: "tcae-higiene-hospitalaria",
  },
  {
    enunciado: "La clorhexidina y la povidona yodada son:",
    opciones: [
      "Antisépticos empleados sobre la piel y las mucosas",
      "Detergentes para la limpieza de suelos",
      "Esterilizantes por calor seco",
      "Medios de cultivo microbiológico",
    ],
    correctaIndex: 0,
    explicacion:
      "La clorhexidina y la povidona yodada son antisépticos de uso habitual sobre la piel y las mucosas.",
    fuente: "Antisépticos y desinfectantes",
    dificultad: "facil",
    temaSlug: "tcae-higiene-hospitalaria",
  },
  {
    enunciado: "La lejía (hipoclorito sódico) es:",
    opciones: [
      "Un antiséptico para heridas abiertas",
      "Un anestésico local",
      "Un desinfectante de superficies e instrumental, no indicado sobre heridas",
      "Un esterilizante en frío para tejidos",
    ],
    correctaIndex: 2,
    explicacion:
      "El hipoclorito sódico es un desinfectante de superficies e instrumental; no debe aplicarse como antiséptico sobre heridas o tejidos vivos.",
    fuente: "Antisépticos y desinfectantes",
    dificultad: "media",
    temaSlug: "tcae-higiene-hospitalaria",
  },
  {
    enunciado: "Los controles biológicos de la esterilización utilizan:",
    opciones: [
      "Termómetros de mercurio",
      "Esporas de microorganismos de referencia para comprobar su destrucción",
      "Tiras de pH",
      "Detectores de humo",
    ],
    correctaIndex: 1,
    explicacion:
      "El control biológico emplea esporas de microorganismos muy resistentes; si el proceso las destruye, se confirma la eficacia de la esterilización.",
    fuente: "Controles de esterilización",
    dificultad: "dificil",
    temaSlug: "tcae-higiene-hospitalaria",
  },
  {
    enunciado: "Un envase de material estéril debe considerarse NO estéril si:",
    opciones: [
      "Solo está visiblemente sucio por fuera",
      "Nunca caduca mientras permanezca cerrado",
      "Solo cuando lo indica el médico",
      "Está abierto, roto, húmedo o ha superado la fecha de caducidad",
    ],
    correctaIndex: 3,
    explicacion:
      "El material estéril pierde su condición si el envase está abierto, roto o húmedo, o si ha superado la fecha de caducidad indicada.",
    fuente: "Almacenamiento de material estéril",
    dificultad: "media",
    temaSlug: "tcae-higiene-hospitalaria",
  },

  // ---------------------------------------------------------------------------
  // Tema 8: tcae-muestras
  // ---------------------------------------------------------------------------
  {
    enunciado: "Para un urocultivo, la muestra idónea es:",
    opciones: [
      "La primera orina de la mañana, de la mitad de la micción, recogida en recipiente estéril",
      "Cualquier orina en un bote sin esterilizar",
      "La orina de 24 horas mezclada",
      "La orina tras beber abundante líquido durante horas",
    ],
    correctaIndex: 0,
    explicacion:
      "El urocultivo se realiza preferentemente con la primera orina de la mañana, recogida de la porción media de la micción en recipiente estéril.",
    fuente: "Manual de toma de muestras",
    dificultad: "facil",
    temaSlug: "tcae-muestras",
  },
  {
    enunciado: "La técnica de la micción media consiste en:",
    opciones: [
      "Recoger la primera parte del chorro miccional",
      "Recoger la última parte del chorro miccional",
      "Desechar el primer chorro y recoger la porción intermedia de la micción",
      "Recoger toda la orina en varios botes",
    ],
    correctaIndex: 2,
    explicacion:
      "En la micción media se desecha el primer chorro, que arrastra flora uretral, y se recoge la porción intermedia, más representativa.",
    fuente: "Manual de toma de muestras",
    dificultad: "media",
    temaSlug: "tcae-muestras",
  },
  {
    enunciado: "En la recogida de orina de 24 horas:",
    opciones: [
      "Se recoge solo la primera orina de la mañana",
      "Se desecha la primera micción y se recoge toda la orina hasta la misma hora del día siguiente",
      "Se recogen solo tres muestras aleatorias",
      "Se guarda a temperatura ambiente sin ninguna conservación",
    ],
    correctaIndex: 1,
    explicacion:
      "En la orina de 24 horas se desecha la primera micción y se recoge toda la diuresis, incluida la de la misma hora del día siguiente, conservándola según protocolo.",
    fuente: "Manual de toma de muestras",
    dificultad: "dificil",
    temaSlug: "tcae-muestras",
  },
  {
    enunciado: "Antes de recoger la orina para un urocultivo se debe:",
    opciones: [
      "Aplicar un antiséptico en el interior de la uretra",
      "No lavarse para no alterar la muestra",
      "Tomar un antibiótico previo",
      "Realizar una higiene previa de los genitales",
    ],
    correctaIndex: 3,
    explicacion:
      "La higiene previa de los genitales reduce la contaminación de la muestra por flora externa antes de recoger la orina para urocultivo.",
    fuente: "Manual de toma de muestras",
    dificultad: "facil",
    temaSlug: "tcae-muestras",
  },
  {
    enunciado: "La muestra de heces para coprocultivo o estudio de parásitos:",
    opciones: [
      "Se recoge en un recipiente limpio, evitando su contaminación con orina o agua del inodoro",
      "Debe mezclarse con orina",
      "Se recoge del agua del inodoro",
      "Requiere siempre 24 horas de ayuno",
    ],
    correctaIndex: 0,
    explicacion:
      "La muestra de heces se recoge en recipiente limpio evitando el contacto con la orina o el agua del inodoro, que la contaminarían.",
    fuente: "Manual de toma de muestras",
    dificultad: "media",
    temaSlug: "tcae-muestras",
  },
  {
    enunciado: "La muestra de esputo idónea se obtiene:",
    opciones: [
      "Recogiendo saliva de la boca",
      "Por la noche antes de dormir",
      "Por la mañana, en ayunas, tras una tos profunda que arrastre secreción bronquial",
      "Justo después de comer",
    ],
    correctaIndex: 2,
    explicacion:
      "El esputo se recoge preferentemente por la mañana en ayunas, tras una tos profunda; la saliva no es una muestra válida.",
    fuente: "Manual de toma de muestras",
    dificultad: "media",
    temaSlug: "tcae-muestras",
  },
  {
    enunciado: "La fase preanalítica del laboratorio incluye:",
    opciones: [
      "El procesamiento de la muestra en el analizador",
      "La preparación del paciente, la obtención, identificación, conservación y transporte de la muestra",
      "La emisión del informe de resultados",
      "La interpretación clínica del resultado",
    ],
    correctaIndex: 1,
    explicacion:
      "La fase preanalítica abarca desde la preparación del paciente hasta el transporte de la muestra, previa al análisis propiamente dicho.",
    fuente: "Fases del proceso analítico",
    dificultad: "media",
    temaSlug: "tcae-muestras",
  },
  {
    enunciado: "La mayoría de los errores de laboratorio se producen en:",
    opciones: [
      "La fase analítica",
      "La fase postanalítica",
      "El transporte informático de datos",
      "La fase preanalítica",
    ],
    correctaIndex: 3,
    explicacion:
      "La fase preanalítica concentra la mayor parte de los errores del laboratorio, por fallos en la identificación, recogida, conservación o transporte.",
    fuente: "Fases del proceso analítico",
    dificultad: "dificil",
    temaSlug: "tcae-muestras",
  },
  {
    enunciado: "El tubo de una muestra debe etiquetarse:",
    opciones: [
      "En presencia del paciente, tras comprobar su identidad",
      "Al final del turno, de forma conjunta",
      "Solo con el número de cama",
      "Únicamente si el laboratorio lo reclama",
    ],
    correctaIndex: 0,
    explicacion:
      "El etiquetado se realiza en presencia del paciente y tras verificar su identidad, para garantizar la trazabilidad y evitar confusiones.",
    fuente: "Fase preanalítica, identificación",
    dificultad: "media",
    temaSlug: "tcae-muestras",
  },
  {
    enunciado: "Si una muestra no puede procesarse de inmediato, con carácter general:",
    opciones: [
      "Se deja expuesta al sol",
      "Se congela siempre a cualquier temperatura",
      "Se conserva refrigerada o según indique el protocolo específico de cada determinación",
      "Se mantiene siempre a 37 grados",
    ],
    correctaIndex: 2,
    explicacion:
      "Cuando no se procesa al momento, la muestra se conserva refrigerada o según el protocolo específico, para preservar su validez.",
    fuente: "Fase preanalítica, conservación",
    dificultad: "media",
    temaSlug: "tcae-muestras",
  },
  {
    enunciado: "El tubo con anticoagulante EDTA se emplea habitualmente para:",
    opciones: [
      "Las pruebas de coagulación",
      "El hemograma o recuento celular completo",
      "La bioquímica en suero, sin anticoagulante",
      "La gasometría arterial",
    ],
    correctaIndex: 1,
    explicacion:
      "El tubo con EDTA se usa para el hemograma; las pruebas de coagulación utilizan citrato y la bioquímica se realiza en suero.",
    fuente: "Tubos de extracción y anticoagulantes",
    dificultad: "media",
    temaSlug: "tcae-muestras",
  },
  {
    enunciado: "En un lactante, la orina para análisis se recoge habitualmente mediante:",
    opciones: [
      "Un sondaje permanente rutinario",
      "Exprimiendo el pañal",
      "Una punción directa en todos los casos",
      "Una bolsa colectora adhesiva colocada en el periné",
    ],
    correctaIndex: 3,
    explicacion:
      "En lactantes la orina se recoge con una bolsa colectora adhesiva perineal, previa higiene de la zona, evitando métodos innecesariamente invasivos.",
    fuente: "Manual de toma de muestras",
    dificultad: "media",
    temaSlug: "tcae-muestras",
  },

  // ---------------------------------------------------------------------------
  // Tema 9: tcae-higiene-paciente
  // ---------------------------------------------------------------------------
  {
    enunciado: "La temperatura del agua para el aseo del paciente encamado debe rondar:",
    opciones: [
      "Entre 37 y 40 grados, templada y agradable",
      "Muy caliente, por encima de 50 grados",
      "Fría, en torno a 15 grados",
      "La temperatura del agua es indiferente",
    ],
    correctaIndex: 0,
    explicacion:
      "El agua del aseo debe estar templada, en torno a 37-40 grados, para resultar confortable y no dañar la piel del paciente.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "facil",
    temaSlug: "tcae-higiene-paciente",
  },
  {
    enunciado: "En el aseo del paciente encamado se procede:",
    opciones: [
      "De los pies hacia la cabeza",
      "Empezando por los genitales",
      "De las zonas más limpias a las más sucias, terminando por los genitales",
      "Sin un orden concreto",
    ],
    correctaIndex: 2,
    explicacion:
      "El aseo avanza de las zonas más limpias a las más sucias, dejando los genitales y la zona perianal para el final, a fin de evitar contaminaciones.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "media",
    temaSlug: "tcae-higiene-paciente",
  },
  {
    enunciado: "Para la higiene bucal de un paciente inconsciente se le coloca:",
    opciones: [
      "En decúbito supino con la cabeza recta",
      "En decúbito lateral con la cabeza ladeada, para prevenir la broncoaspiración",
      "Sentado y con la cabeza hacia atrás",
      "En posición de Trendelenburg",
    ],
    correctaIndex: 1,
    explicacion:
      "En el paciente inconsciente se realiza la higiene bucal en decúbito lateral con la cabeza ladeada, para evitar la aspiración de líquidos.",
    fuente: "Higiene bucal del paciente inconsciente",
    dificultad: "media",
    temaSlug: "tcae-higiene-paciente",
  },
  {
    enunciado: "Durante el aseo, el agua de la palangana se cambia:",
    opciones: [
      "Nunca, con una sola agua es suficiente",
      "Solo al terminar el aseo",
      "Una vez por semana",
      "Cuantas veces sea necesario, cuando se enfríe o ensucie, y antes del aseo genital",
    ],
    correctaIndex: 3,
    explicacion:
      "El agua se renueva siempre que se enfríe o se ensucie, y en especial antes del aseo de la zona genital, para garantizar la higiene.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "facil",
    temaSlug: "tcae-higiene-paciente",
  },
  {
    enunciado: "Las uñas de los pies del paciente se cortan:",
    opciones: [
      "Rectas, para evitar que se encarnen",
      "En pico o redondeadas",
      "Lo más cortas posible, hasta la piel",
      "No se cortan nunca",
    ],
    correctaIndex: 0,
    explicacion:
      "Las uñas de los pies se cortan rectas para prevenir la aparición de uñas encarnadas.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "facil",
    temaSlug: "tcae-higiene-paciente",
  },
  {
    enunciado: "El lavado del cabello en un paciente encamado se realiza:",
    opciones: [
      "Obligando al paciente a sentarse aunque esté contraindicado",
      "En la ducha común en todos los casos",
      "Con el paciente acostado, usando un lavacabezas o dispositivo adaptado",
      "Sin agua, solo peinando el cabello",
    ],
    correctaIndex: 2,
    explicacion:
      "En el paciente encamado el cabello se lava con el enfermo acostado, empleando un lavacabezas o dispositivo adaptado que recoge el agua.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "media",
    temaSlug: "tcae-higiene-paciente",
  },
  {
    enunciado: "Al hacer la cama ocupada se coloca al paciente:",
    opciones: [
      "Sentado en una silla",
      "En decúbito lateral, cambiando la ropa por mitades, primero un lado y después el otro",
      "De pie junto a la cama",
      "En decúbito prono en todo momento",
    ],
    correctaIndex: 1,
    explicacion:
      "La cama ocupada se realiza girando al paciente a decúbito lateral y trabajando por mitades, primero un lado y luego el otro.",
    fuente: "Técnica de la cama ocupada",
    dificultad: "media",
    temaSlug: "tcae-higiene-paciente",
  },
  {
    enunciado: "Además de la limpieza, el aseo del paciente permite:",
    opciones: [
      "Ahorrar tiempo de enfermería",
      "Sustituir la movilización del paciente",
      "Evitar el registro de cuidados",
      "Observar el estado de la piel y detectar precozmente zonas de riesgo de úlceras por presión",
    ],
    correctaIndex: 3,
    explicacion:
      "El aseo es un momento clave para valorar la piel y detectar de forma precoz zonas enrojecidas o de riesgo de úlceras por presión.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "media",
    temaSlug: "tcae-higiene-paciente",
  },
  {
    enunciado: "Tras el aseo, la piel del paciente debe:",
    opciones: [
      "Secarse cuidadosamente, insistiendo en los pliegues, sin frotar con brusquedad",
      "Dejarse húmeda para que se hidrate sola",
      "Secarse solo en la cara",
      "Frotarse con fuerza para activar la circulación",
    ],
    correctaIndex: 0,
    explicacion:
      "La piel se seca con cuidado, prestando atención a los pliegues para evitar la maceración, sin frotar con brusquedad.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "facil",
    temaSlug: "tcae-higiene-paciente",
  },
  {
    enunciado: "En la higiene bucal de un paciente portador de prótesis dental removible:",
    opciones: [
      "Se limpia dentro de la boca sin retirarla",
      "No se limpia nunca",
      "Se retira la prótesis y se limpia por separado",
      "Se sustituye por una nueva cada día",
    ],
    correctaIndex: 2,
    explicacion:
      "La prótesis dental removible se retira para limpiarla por separado y poder higienizar también la mucosa y las encías.",
    fuente: "Higiene bucal, prótesis dental",
    dificultad: "media",
    temaSlug: "tcae-higiene-paciente",
  },
  {
    enunciado: "En un paciente inconsciente, la higiene de la boca:",
    opciones: [
      "No es necesaria porque no come",
      "Es importante y frecuente, ya que la ausencia de ingesta y la respiración bucal resecan la mucosa",
      "Se realiza solo una vez a la semana",
      "La lleva a cabo únicamente el dentista",
    ],
    correctaIndex: 1,
    explicacion:
      "En el paciente inconsciente la boca se reseca por la falta de ingesta y la respiración bucal, por lo que la higiene debe ser frecuente y cuidadosa.",
    fuente: "Higiene bucal del paciente inconsciente",
    dificultad: "dificil",
    temaSlug: "tcae-higiene-paciente",
  },
  {
    enunciado:
      "Tras el aseo, para prevenir las úlceras por presión, sobre las prominencias óseas se recomienda:",
    opciones: [
      "Masajear con fuerza la zona enrojecida",
      "Aplicar alcohol y colonia",
      "Dejar la piel húmeda",
      "Aplicar ácidos grasos hiperoxigenados y evitar masajear con fuerza las zonas enrojecidas",
    ],
    correctaIndex: 3,
    explicacion:
      "Se aplican ácidos grasos hiperoxigenados y se evita el masaje enérgico sobre las zonas enrojecidas, ya que este puede agravar la lesión.",
    fuente: "Prevención de úlceras por presión",
    dificultad: "dificil",
    temaSlug: "tcae-higiene-paciente",
  },

  // ---------------------------------------------------------------------------
  // Tema 10: tcae-eliminacion
  // ---------------------------------------------------------------------------
  {
    enunciado: "El balance hídrico es:",
    opciones: [
      "La relación entre los ingresos y las pérdidas de líquidos del organismo",
      "El peso del paciente en ayunas",
      "La cantidad de orina de una sola micción",
      "La temperatura corporal del paciente",
    ],
    correctaIndex: 0,
    explicacion:
      "El balance hídrico compara los líquidos que entran en el organismo con los que se eliminan en un periodo determinado.",
    fuente: "Balance hídrico",
    dificultad: "facil",
    temaSlug: "tcae-eliminacion",
  },
  {
    enunciado: "La oliguria se define como:",
    opciones: [
      "La ausencia total de orina",
      "El aumento de la cantidad de orina",
      "La disminución del volumen de orina eliminado",
      "La presencia de sangre en la orina",
    ],
    correctaIndex: 2,
    explicacion:
      "La oliguria es la disminución del volumen de orina; su ausencia total se denomina anuria y su aumento, poliuria.",
    fuente: "Alteraciones de la diuresis",
    dificultad: "facil",
    temaSlug: "tcae-eliminacion",
  },
  {
    enunciado: "La anuria consiste en:",
    opciones: [
      "El aumento de la diuresis nocturna",
      "La ausencia o supresión casi total de la emisión de orina",
      "El dolor al orinar",
      "La necesidad urgente de orinar",
    ],
    correctaIndex: 1,
    explicacion: "La anuria es la ausencia o supresión prácticamente total de la emisión de orina.",
    fuente: "Alteraciones de la diuresis",
    dificultad: "media",
    temaSlug: "tcae-eliminacion",
  },
  {
    enunciado: "La poliuria consiste en:",
    opciones: [
      "La disminución de la orina",
      "La presencia de sangre en la orina",
      "La ausencia de orina",
      "El aumento del volumen de orina eliminado",
    ],
    correctaIndex: 3,
    explicacion:
      "La poliuria es el aumento del volumen de orina eliminado, por encima de los valores normales.",
    fuente: "Alteraciones de la diuresis",
    dificultad: "facil",
    temaSlug: "tcae-eliminacion",
  },
  {
    enunciado: "La bolsa colectora de una sonda vesical debe mantenerse:",
    opciones: [
      "Por debajo del nivel de la vejiga, para evitar el reflujo de orina",
      "Por encima del nivel de la vejiga",
      "A la altura del pecho del paciente",
      "Colgada del cuello del paciente",
    ],
    correctaIndex: 0,
    explicacion:
      "La bolsa se coloca siempre por debajo del nivel de la vejiga para favorecer el drenaje por gravedad y evitar el reflujo, que aumenta el riesgo de infección.",
    fuente: "Cuidados de la sonda vesical",
    dificultad: "media",
    temaSlug: "tcae-eliminacion",
  },
  {
    enunciado: "El sistema de drenaje de una sonda vesical debe ser:",
    opciones: [
      "Abierto, para vaciarlo con facilidad",
      "Reutilizable entre pacientes",
      "Un sistema cerrado, para reducir el riesgo de infección urinaria",
      "Sustituido cada hora",
    ],
    correctaIndex: 2,
    explicacion:
      "El sondaje vesical se maneja en circuito cerrado para minimizar la entrada de microorganismos y el riesgo de infección urinaria asociada.",
    fuente: "Cuidados de la sonda vesical",
    dificultad: "media",
    temaSlug: "tcae-eliminacion",
  },
  {
    enunciado: "El colector externo o uripen es:",
    opciones: [
      "Una sonda que se introduce en la vejiga",
      "Un dispositivo externo para la incontinencia urinaria del varón, que no requiere sondaje",
      "Un tipo de enema de limpieza",
      "Un absorbente de uso rectal",
    ],
    correctaIndex: 1,
    explicacion:
      "El colector externo o uripen es un dispositivo que se coloca sobre el pene para recoger la orina en la incontinencia masculina, sin necesidad de sondaje.",
    fuente: "Dispositivos de eliminación urinaria",
    dificultad: "media",
    temaSlug: "tcae-eliminacion",
  },
  {
    enunciado: "El uso de absorbentes en un paciente incontinente exige:",
    opciones: [
      "Cambiarlos solo una vez al día",
      "Ajustarlos muy apretados",
      "No revisar el estado de la piel",
      "Cambiarlos siempre que estén húmedos y vigilar la piel para evitar la maceración y las úlceras",
    ],
    correctaIndex: 3,
    explicacion:
      "Los absorbentes se cambian cada vez que se humedecen y se vigila la piel, ya que la humedad mantenida favorece la maceración y las úlceras por presión.",
    fuente: "Cuidados de la incontinencia",
    dificultad: "dificil",
    temaSlug: "tcae-eliminacion",
  },
  {
    enunciado: "En relacion con las ostomias digestivas, una colostomía es:",
    opciones: [
      "Una abertura del colon en la pared abdominal para la salida de las heces",
      "Una sonda colocada en la vejiga",
      "Un drenaje torácico",
      "Una vía venosa central",
    ],
    correctaIndex: 0,
    explicacion:
      "La colostomía es la abertura quirúrgica del colon a la pared abdominal (estoma) por donde se eliminan las heces.",
    fuente: "Cuidados del paciente ostomizado",
    dificultad: "media",
    temaSlug: "tcae-eliminacion",
  },
  {
    enunciado: "La piel que rodea un estoma (piel periestomal) debe mantenerse:",
    opciones: [
      "Húmeda de forma constante",
      "Cubierta con alcohol",
      "Limpia, seca y protegida del contacto con las heces",
      "Sin ningún cuidado especial",
    ],
    correctaIndex: 2,
    explicacion:
      "La piel periestomal se mantiene limpia y seca, protegida del contenido del estoma, para prevenir irritaciones y lesiones.",
    fuente: "Cuidados del paciente ostomizado",
    dificultad: "media",
    temaSlug: "tcae-eliminacion",
  },
  {
    enunciado: "Para administrar un enema, el paciente se coloca preferentemente en:",
    opciones: [
      "Decúbito supino con las piernas estiradas",
      "Decúbito lateral izquierdo (posición de Sims), que facilita el paso hacia el colon",
      "Sentado en el borde de la cama",
      "Decúbito prono",
    ],
    correctaIndex: 1,
    explicacion:
      "La posición de Sims (decúbito lateral izquierdo) aprovecha la anatomía del colon descendente y facilita la progresión del líquido del enema.",
    fuente: "Técnica de administración de enemas",
    dificultad: "media",
    temaSlug: "tcae-eliminacion",
  },
  {
    enunciado:
      "Si durante la administración de un enema el paciente refiere deseos intensos de defecar o dolor, se debe:",
    opciones: [
      "Aumentar la velocidad para terminar antes",
      "Subir el irrigador al máximo",
      "Retirar la sonda de forma brusca",
      "Detener o enlentecer la entrada del líquido, bajando la altura del irrigador, hasta que ceda la sensación",
    ],
    correctaIndex: 3,
    explicacion:
      "Ante deseos intensos de defecar o dolor se detiene o enlentece el flujo y se baja el irrigador, reanudando después lentamente para que el paciente tolere el enema.",
    fuente: "Técnica de administración de enemas",
    dificultad: "dificil",
    temaSlug: "tcae-eliminacion",
  },
];
