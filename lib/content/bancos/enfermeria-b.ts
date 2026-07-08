import type { SeedPregunta } from "../tipos";

export const BANCO_ENFERMERIA_B: SeedPregunta[] = [
  // Tema enf-28: Gestion de cuidados
  {
    enunciado: "La enfermera referente en Atención Primaria se define como:",
    opciones: [
      "La enfermera asignada de forma estable a un paciente y su familia para garantizar la continuidad de sus cuidados",
      "La enfermera que solo atiende urgencias del centro de salud",
      "La enfermera coordinadora de la unidad de hospitalización",
      "La enfermera responsable exclusivamente de la consulta de crónicos",
    ],
    correctaIndex: 0,
    explicacion:
      "La enfermera referente es la profesional asignada de manera estable a la persona y su familia para dar continuidad y personalizar los cuidados a lo largo del tiempo.",
    fuente: "Gestión de cuidados en Atención Primaria",
    dificultad: "facil",
    temaSlug: "enf-28",
  },
  {
    enunciado: "El informe de continuidad de cuidados tiene como finalidad principal:",
    opciones: [
      "Sustituir la historia clínica del paciente",
      "Garantizar la transferencia de información de cuidados entre niveles asistenciales",
      "Registrar únicamente la medicación prescrita por el médico",
      "Servir como documento de consentimiento informado",
    ],
    correctaIndex: 1,
    explicacion:
      "El informe de continuidad de cuidados transfiere la información enfermera entre niveles (por ejemplo del hospital a Atención Primaria) para dar continuidad a los cuidados; no sustituye a la historia clínica.",
    fuente: "Informe de continuidad de cuidados de enfermería",
    dificultad: "media",
    temaSlug: "enf-28",
  },
  {
    enunciado: "La cartera de servicios de enfermería es:",
    opciones: [
      "Un listado de medicamentos financiados por el sistema",
      "Un catálogo de técnicas exclusivamente quirúrgicas",
      "El conjunto de servicios y prestaciones que la enfermera ofrece a la población",
      "Un documento aplicable solo en la atención hospitalaria",
    ],
    correctaIndex: 2,
    explicacion:
      "La cartera de servicios recoge las prestaciones y servicios que la enfermera presta a la población, tanto en Atención Primaria como en atención hospitalaria.",
    fuente: "Cartera de servicios del Sistema Sanitario Público",
    dificultad: "facil",
    temaSlug: "enf-28",
  },
  {
    enunciado: "La gestión de cuidados enfermeros se basa fundamentalmente en:",
    opciones: [
      "La improvisación según la demanda diaria",
      "La atención centrada únicamente en la enfermedad",
      "La delegación completa de los cuidados en el personal auxiliar",
      "La planificación, organización y evaluación de los cuidados centrados en la persona",
    ],
    correctaIndex: 3,
    explicacion:
      "Gestionar cuidados supone planificar, organizar, dirigir y evaluar los cuidados de forma sistemática y centrada en la persona, no de manera improvisada.",
    fuente: "Gestión de cuidados enfermeros",
    dificultad: "media",
    temaSlug: "enf-28",
  },
  {
    enunciado:
      "¿Cuál de los siguientes NO es un elemento propio del informe de continuidad de cuidados?",
    opciones: [
      "El diagnóstico judicial del paciente",
      "La valoración de enfermería al alta",
      "Los diagnósticos enfermeros activos",
      "Las recomendaciones de cuidados al alta",
    ],
    correctaIndex: 0,
    explicacion:
      "El informe recoge valoración, diagnósticos enfermeros y recomendaciones de cuidados; el llamado diagnóstico judicial no forma parte del documento clínico enfermero.",
    fuente: "Informe de continuidad de cuidados de enfermería",
    dificultad: "dificil",
    temaSlug: "enf-28",
  },
  {
    enunciado: "El modelo de enfermera referente persigue principalmente:",
    opciones: [
      "Aumentar el número de profesionales por turno",
      "Personalizar y dar continuidad a la atención mediante un profesional de referencia",
      "Reducir la documentación clínica del paciente",
      "Eliminar la coordinación con la atención especializada",
    ],
    correctaIndex: 1,
    explicacion:
      "La enfermera referente busca personalizar la atención y garantizar la continuidad de los cuidados asignando un profesional estable a la persona y su familia.",
    fuente: "Gestión de cuidados en Atención Primaria",
    dificultad: "media",
    temaSlug: "enf-28",
  },
  {
    enunciado:
      "La continuidad de cuidados entre el hospital y la Atención Primaria se favorece especialmente mediante:",
    opciones: [
      "La ausencia de registros compartidos",
      "La atención fragmentada por episodios aislados",
      "El informe de continuidad de cuidados emitido al alta hospitalaria",
      "La derivación verbal sin ningún documento",
    ],
    correctaIndex: 2,
    explicacion:
      "El informe de continuidad de cuidados al alta es la herramienta que asegura la transferencia de información enfermera y la coordinación entre niveles asistenciales.",
    fuente: "Informe de continuidad de cuidados de enfermería",
    dificultad: "media",
    temaSlug: "enf-28",
  },
  {
    enunciado: "En la gestión de cuidados, la enfermera referente asume:",
    opciones: [
      "Únicamente funciones administrativas",
      "La prescripción completa de tratamientos farmacológicos",
      "La sustitución del médico de familia",
      "La responsabilidad de la valoración, planificación y seguimiento de los cuidados del paciente asignado",
    ],
    correctaIndex: 3,
    explicacion:
      "La enfermera referente es responsable del proceso de cuidados (valoración, planificación, ejecución y seguimiento) de la persona y familia que tiene asignadas.",
    fuente: "Gestión de cuidados enfermeros",
    dificultad: "media",
    temaSlug: "enf-28",
  },
  {
    enunciado: "La cartera de servicios comunes del Sistema Nacional de Salud está regulada por:",
    opciones: [
      "El Real Decreto 1030/2006",
      "La Ley 55/2003 del Estatuto Marco",
      "El Real Decreto 954/2015",
      "La Ley 44/2003 de ordenación de las profesiones sanitarias",
    ],
    correctaIndex: 0,
    explicacion:
      "El Real Decreto 1030/2006 establece la cartera de servicios comunes del Sistema Nacional de Salud y el procedimiento para su actualización.",
    fuente: "Real Decreto 1030/2006",
    dificultad: "dificil",
    temaSlug: "enf-28",
  },
  {
    enunciado: "El objetivo de la continuidad asistencial es:",
    opciones: [
      "Multiplicar las visitas del paciente al centro",
      "Asegurar la coherencia y el seguimiento de la atención a lo largo del tiempo y entre niveles",
      "Centralizar toda la atención exclusivamente en el hospital",
      "Limitar el acceso del paciente a la atención especializada",
    ],
    correctaIndex: 1,
    explicacion:
      "La continuidad asistencial busca que la atención sea coherente y esté coordinada en el tiempo y entre los distintos niveles y profesionales que atienden al paciente.",
    fuente: "Continuidad asistencial y de cuidados",
    dificultad: "facil",
    temaSlug: "enf-28",
  },

  // Tema enf-29: Gestion de casos
  {
    enunciado: "La enfermera gestora de casos dirige su actuación principalmente a:",
    opciones: [
      "Toda la población sana del área de salud",
      "Únicamente pacientes pediátricos",
      "Pacientes con alta complejidad, pluripatología o dependencia",
      "Pacientes que acuden a urgencias por procesos banales",
    ],
    correctaIndex: 2,
    explicacion:
      "La gestión de casos se centra en pacientes complejos, pluripatológicos, dependientes o inmovilizados y en sus personas cuidadoras, no en la población general sana.",
    fuente: "Gestión de casos en el Sistema Sanitario",
    dificultad: "media",
    temaSlug: "enf-29",
  },
  {
    enunciado: "La población diana de la gestión de casos está formada por:",
    opciones: [
      "Pacientes agudos totalmente autónomos",
      "Personas sin necesidades de cuidados",
      "Trabajadores sanitarios del centro",
      "Pacientes crónicos complejos, inmovilizados y sus personas cuidadoras",
    ],
    correctaIndex: 3,
    explicacion:
      "La población diana la integran pacientes crónicos complejos, inmovilizados o dependientes y quienes los cuidan, por su elevada necesidad de coordinación de recursos.",
    fuente: "Gestión de casos en el Sistema Sanitario",
    dificultad: "media",
    temaSlug: "enf-29",
  },
  {
    enunciado: "La función principal de la enfermera gestora de casos es:",
    opciones: [
      "Coordinar recursos y garantizar la continuidad asistencial de los casos complejos",
      "Realizar exclusivamente curas de heridas",
      "Gestionar las nóminas del personal del centro",
      "Sustituir a la enfermera referente en todas sus funciones",
    ],
    correctaIndex: 0,
    explicacion:
      "La enfermera gestora de casos coordina recursos sanitarios y sociales y asegura la continuidad de la atención en pacientes de alta complejidad.",
    fuente: "Gestión de casos en el Sistema Sanitario",
    dificultad: "facil",
    temaSlug: "enf-29",
  },
  {
    enunciado: "La gestión de casos se caracteriza por:",
    opciones: [
      "Atender de forma aislada y sin coordinación",
      "Un enfoque integral e individualizado con coordinación de recursos sociosanitarios",
      "Actuar solo en el ámbito hospitalario",
      "Prescindir del plan de cuidados",
    ],
    correctaIndex: 1,
    explicacion:
      "La gestión de casos aplica un abordaje integral e individualizado que coordina recursos sanitarios y sociales en torno a las necesidades del paciente.",
    fuente: "Gestión de casos en el Sistema Sanitario",
    dificultad: "media",
    temaSlug: "enf-29",
  },
  {
    enunciado: "¿Cuál es un objetivo propio de la gestión de casos?",
    opciones: [
      "Aumentar los reingresos hospitalarios",
      "Fragmentar la atención entre profesionales",
      "Reducir la variabilidad y mejorar la coordinación entre niveles",
      "Incrementar la estancia media innecesaria",
    ],
    correctaIndex: 2,
    explicacion:
      "La gestión de casos pretende reducir la variabilidad, evitar reingresos y mejorar la coordinación y la eficiencia entre niveles asistenciales.",
    fuente: "Gestión de casos en el Sistema Sanitario",
    dificultad: "media",
    temaSlug: "enf-29",
  },
  {
    enunciado: "La coordinación sociosanitaria en la gestión de casos implica:",
    opciones: [
      "Trabajar sin contacto con los servicios sociales",
      "Ignorar el entorno familiar del paciente",
      "Actuar solo sobre la enfermedad aguda",
      "La colaboración entre el sistema sanitario y los servicios sociales",
    ],
    correctaIndex: 3,
    explicacion:
      "La atención a los casos complejos exige la colaboración entre lo sanitario y lo social para dar respuesta a las necesidades globales del paciente.",
    fuente: "Coordinación sociosanitaria",
    dificultad: "facil",
    temaSlug: "enf-29",
  },
  {
    enunciado: "La valoración inicial en la gestión de casos incluye:",
    opciones: [
      "Una valoración integral biopsicosocial del paciente y su entorno",
      "Solo la toma de constantes vitales",
      "Únicamente la revisión de la medicación",
      "Exclusivamente la exploración física",
    ],
    correctaIndex: 0,
    explicacion:
      "La valoración en gestión de casos es integral y biopsicosocial, abarcando la situación clínica, funcional, mental, social y el entorno del paciente.",
    fuente: "Gestión de casos en el Sistema Sanitario",
    dificultad: "media",
    temaSlug: "enf-29",
  },
  {
    enunciado: "La enfermera gestora de casos actúa como:",
    opciones: [
      "Auditora de la facturación del centro",
      "Enlace y referente entre los niveles asistenciales y los recursos",
      "Responsable único de la prescripción médica",
      "Sustituta del trabajador social",
    ],
    correctaIndex: 1,
    explicacion:
      "Actúa como enlace o referente que articula los distintos niveles asistenciales y recursos en torno al paciente, sin sustituir a otros profesionales.",
    fuente: "Gestión de casos en el Sistema Sanitario",
    dificultad: "facil",
    temaSlug: "enf-29",
  },
  {
    enunciado: "Un criterio de inclusión habitual en la gestión de casos es:",
    opciones: [
      "Ser un paciente joven y autónomo",
      "No presentar patología alguna",
      "Presentar pluripatología con alta dependencia o una persona cuidadora con sobrecarga",
      "Acudir por un proceso agudo autolimitado",
    ],
    correctaIndex: 2,
    explicacion:
      "Se incluyen pacientes con pluripatología, alta dependencia o inmovilización y personas cuidadoras con riesgo de sobrecarga, por su necesidad de coordinación.",
    fuente: "Gestión de casos en el Sistema Sanitario",
    dificultad: "dificil",
    temaSlug: "enf-29",
  },
  {
    enunciado: "El beneficio esperado de la gestión de casos es:",
    opciones: [
      "Una mayor descoordinación entre profesionales",
      "El aumento de complicaciones evitables",
      "La duplicación de pruebas diagnósticas",
      "La mejora de la continuidad, la eficiencia y la calidad de vida del paciente",
    ],
    correctaIndex: 3,
    explicacion:
      "La gestión de casos mejora la continuidad y la eficiencia asistencial y la calidad de vida del paciente complejo y de su cuidador.",
    fuente: "Gestión de casos en el Sistema Sanitario",
    dificultad: "dificil",
    temaSlug: "enf-29",
  },

  // Tema enf-30: Seguimiento telefonico
  {
    enunciado: "En el SAS, el servicio Salud Responde es:",
    opciones: [
      "El servicio de información y atención telefónica del Sistema Sanitario Público de Andalucía",
      "Un hospital de referencia de Sevilla",
      "Una unidad de cuidados intensivos",
      "Un programa de vacunación infantil",
    ],
    correctaIndex: 0,
    explicacion:
      "Salud Responde es el servicio de información, gestión de citas y atención telefónica del Sistema Sanitario Público de Andalucía.",
    fuente: "Salud Responde (SSPA)",
    dificultad: "facil",
    temaSlug: "enf-30",
  },
  {
    enunciado: "El consejo telefónico de enfermería permite:",
    opciones: [
      "Sustituir siempre la valoración presencial del paciente",
      "Orientar, resolver dudas y priorizar la atención del paciente a distancia",
      "Prescribir cualquier medicamento sin límites",
      "Emitir diagnósticos definitivos sin exploración",
    ],
    correctaIndex: 1,
    explicacion:
      "El consejo telefónico orienta, resuelve dudas, refuerza el autocuidado y ayuda a priorizar el nivel asistencial adecuado; no sustituye siempre a la valoración presencial ni permite diagnosticar sin explorar.",
    fuente: "Consejo sanitario telefónico",
    dificultad: "media",
    temaSlug: "enf-30",
  },
  {
    enunciado: "La teleasistencia domiciliaria está especialmente dirigida a:",
    opciones: [
      "Población laboral activa sin problemas de salud",
      "Pacientes ingresados en la UCI",
      "Personas mayores o dependientes que viven solas",
      "Deportistas de alto rendimiento",
    ],
    correctaIndex: 2,
    explicacion:
      "La teleasistencia se dirige a personas mayores, dependientes o que viven solas, ofreciendo atención inmediata ante emergencias o necesidades desde el domicilio.",
    fuente: "Teleasistencia domiciliaria",
    dificultad: "facil",
    temaSlug: "enf-30",
  },
  {
    enunciado: "El seguimiento telefónico de pacientes crónicos tiene como finalidad:",
    opciones: [
      "Aumentar los desplazamientos al centro de salud",
      "Sustituir por completo la atención presencial",
      "Reducir la adherencia al tratamiento",
      "Monitorizar la evolución y reforzar el autocuidado y la adherencia",
    ],
    correctaIndex: 3,
    explicacion:
      "El seguimiento telefónico permite monitorizar la evolución del paciente crónico, detectar precozmente descompensaciones y reforzar el autocuidado y la adherencia.",
    fuente: "Seguimiento telefónico de pacientes crónicos",
    dificultad: "media",
    temaSlug: "enf-30",
  },
  {
    enunciado: "Una ventaja del seguimiento telefónico es:",
    opciones: [
      "Facilitar el acceso y evitar desplazamientos innecesarios",
      "Impedir la comunicación con el paciente",
      "Aumentar la lista de espera presencial",
      "Eliminar el registro en la historia clínica",
    ],
    correctaIndex: 0,
    explicacion:
      "El seguimiento telefónico mejora la accesibilidad y evita desplazamientos innecesarios, manteniendo el registro de la actuación en la historia clínica.",
    fuente: "Seguimiento telefónico de pacientes crónicos",
    dificultad: "facil",
    temaSlug: "enf-30",
  },
  {
    enunciado: "En una llamada de consejo telefónico, ante signos de alarma la enfermera debe:",
    opciones: [
      "Restar importancia a los síntomas",
      "Derivar al paciente al recurso asistencial adecuado con la urgencia que precise",
      "Posponer la atención al menos una semana",
      "Recomendar únicamente reposo sin más indicaciones",
    ],
    correctaIndex: 1,
    explicacion:
      "Ante signos de alarma, la actuación correcta es derivar al recurso adecuado (por ejemplo urgencias o el 061) con la prioridad que la situación requiera.",
    fuente: "Consejo sanitario telefónico",
    dificultad: "media",
    temaSlug: "enf-30",
  },
  {
    enunciado: "La comunicación telefónica eficaz en el consejo de enfermería requiere:",
    opciones: [
      "Hablar sin dejar responder al paciente",
      "Emplear tecnicismos incomprensibles",
      "Escucha activa, lenguaje claro y verificación de la comprensión",
      "Evitar identificar al interlocutor",
    ],
    correctaIndex: 2,
    explicacion:
      "Sin apoyo visual, la comunicación telefónica exige escucha activa, lenguaje claro y comprobar que el paciente ha entendido la información.",
    fuente: "Comunicación telefónica en enfermería",
    dificultad: "media",
    temaSlug: "enf-30",
  },
  {
    enunciado: "El registro de la actuación en el seguimiento telefónico:",
    opciones: [
      "No es necesario en ningún caso",
      "Solo se realiza si hay incidencias graves",
      "Se realiza varios días después de memoria",
      "Debe quedar documentado en la historia clínica del paciente",
    ],
    correctaIndex: 3,
    explicacion:
      "Toda actuación telefónica debe registrarse en la historia clínica para garantizar la trazabilidad y la continuidad de los cuidados.",
    fuente: "Registro en la historia clínica",
    dificultad: "media",
    temaSlug: "enf-30",
  },
  {
    enunciado: "Entre los servicios que ofrece Salud Responde se encuentran:",
    opciones: [
      "Cita previa, información sanitaria y consejo de salud",
      "Cirugía ambulatoria",
      "Rehabilitación domiciliaria presencial",
      "Diagnóstico por imagen",
    ],
    correctaIndex: 0,
    explicacion:
      "Salud Responde presta servicios de cita previa, información sanitaria, consejo de salud y apoyo a programas del sistema; no realiza actos clínicos presenciales.",
    fuente: "Salud Responde (SSPA)",
    dificultad: "dificil",
    temaSlug: "enf-30",
  },
  {
    enunciado: "El consejo telefónico contribuye a:",
    opciones: [
      "Saturar los servicios de urgencias",
      "Racionalizar la demanda y orientar al nivel asistencial adecuado",
      "Eliminar la atención primaria",
      "Aumentar las consultas innecesarias",
    ],
    correctaIndex: 1,
    explicacion:
      "El consejo telefónico ayuda a racionalizar la demanda y a orientar a cada paciente al recurso más adecuado, evitando consultas y urgencias innecesarias.",
    fuente: "Consejo sanitario telefónico",
    dificultad: "dificil",
    temaSlug: "enf-30",
  },

  // Tema enf-31: Modelos y Teorias de Enfermeria
  {
    enunciado: "Virginia Henderson es la autora del modelo basado en:",
    opciones: [
      "Los sistemas conductuales",
      "La teoría de la adaptación",
      "Las 14 necesidades básicas del ser humano",
      "La teoría del déficit de autocuidado",
    ],
    correctaIndex: 2,
    explicacion:
      "Virginia Henderson describió las 14 necesidades básicas que la enfermera ayuda a satisfacer cuando la persona no puede hacerlo por sí misma.",
    fuente: "Modelo de Virginia Henderson",
    dificultad: "facil",
    temaSlug: "enf-31",
  },
  {
    enunciado: "La teoría del déficit de autocuidado corresponde a:",
    opciones: ["Virginia Henderson", "Florence Nightingale", "Callista Roy", "Dorothea Orem"],
    correctaIndex: 3,
    explicacion:
      "Dorothea Orem desarrolló la teoría general del déficit de autocuidado, en la que la enfermería suple o ayuda cuando la persona no puede autocuidarse.",
    fuente: "Teoría de Dorothea Orem",
    dificultad: "media",
    temaSlug: "enf-31",
  },
  {
    enunciado: "Florence Nightingale destacó especialmente la importancia de:",
    opciones: [
      "El entorno (higiene, ventilación y luz) en la recuperación del paciente",
      "El autocuidado como agencia de la persona",
      "La adaptación mediante estímulos",
      "Los requisitos universales de autocuidado",
    ],
    correctaIndex: 0,
    explicacion:
      "Nightingale situó el entorno (ventilación, higiene, luz, silencio) como factor clave para favorecer la recuperación del enfermo.",
    fuente: "Teoría del entorno de Florence Nightingale",
    dificultad: "facil",
    temaSlug: "enf-31",
  },
  {
    enunciado: "El modelo de adaptación fue desarrollado por:",
    opciones: ["Virginia Henderson", "Callista Roy", "Dorothea Orem", "Florence Nightingale"],
    correctaIndex: 1,
    explicacion:
      "Callista Roy formuló el modelo de adaptación, que concibe a la persona como un sistema que se adapta a los estímulos del entorno.",
    fuente: "Modelo de adaptación de Callista Roy",
    dificultad: "media",
    temaSlug: "enf-31",
  },
  {
    enunciado:
      "Según Henderson, cuando la persona no puede satisfacer sus necesidades por sí misma, la enfermera:",
    opciones: [
      "La sustituye siempre de forma permanente",
      "No debe intervenir",
      "Suple o ayuda hasta que recupere su independencia",
      "Deriva el caso siempre al médico",
    ],
    correctaIndex: 2,
    explicacion:
      "Para Henderson, la función propia de la enfermera es ayudar o suplir a la persona en la satisfacción de sus necesidades para que recupere cuanto antes su independencia.",
    fuente: "Modelo de Virginia Henderson",
    dificultad: "media",
    temaSlug: "enf-31",
  },
  {
    enunciado: "En la teoría de Orem, los sistemas de enfermería incluyen:",
    opciones: [
      "Solo el sistema compensatorio total",
      "Únicamente el sistema educativo",
      "Ningún sistema definido",
      "El totalmente compensatorio, el parcialmente compensatorio y el de apoyo-educación",
    ],
    correctaIndex: 3,
    explicacion:
      "Orem describe tres sistemas de enfermería según el déficit de autocuidado: totalmente compensatorio, parcialmente compensatorio y de apoyo-educación.",
    fuente: "Teoría de Dorothea Orem",
    dificultad: "dificil",
    temaSlug: "enf-31",
  },
  {
    enunciado: "El concepto de autocuidado de Orem se refiere a:",
    opciones: [
      "Las acciones que la persona realiza en su beneficio para mantener su vida y su salud",
      "Los cuidados que solo presta la enfermera",
      "La adaptación al entorno hospitalario",
      "La ventilación y limpieza de la habitación",
    ],
    correctaIndex: 0,
    explicacion:
      "El autocuidado es el conjunto de acciones que la propia persona lleva a cabo para mantener su vida, su salud y su bienestar.",
    fuente: "Teoría de Dorothea Orem",
    dificultad: "media",
    temaSlug: "enf-31",
  },
  {
    enunciado: "¿Cuál de las siguientes NO es una de las 14 necesidades básicas de Henderson?",
    opciones: [
      "Respirar normalmente",
      "Obtener beneficio económico",
      "Comer y beber adecuadamente",
      "Dormir y descansar",
    ],
    correctaIndex: 1,
    explicacion:
      "Obtener beneficio económico no figura entre las 14 necesidades básicas de Henderson, que se refieren a aspectos como respirar, alimentarse, descansar, higiene o comunicación.",
    fuente: "Modelo de Virginia Henderson",
    dificultad: "facil",
    temaSlug: "enf-31",
  },
  {
    enunciado: "Los cuatro conceptos que integran el metaparadigma enfermero son:",
    opciones: [
      "Diagnóstico, tratamiento, pronóstico y alta",
      "Anatomía, fisiología, patología y farmacología",
      "Persona, entorno, salud y enfermería (cuidado)",
      "Valoración, planificación, ejecución y evaluación",
    ],
    correctaIndex: 2,
    explicacion:
      "El metaparadigma enfermero lo componen los conceptos de persona, entorno, salud y enfermería o cuidado.",
    fuente: "Metaparadigma enfermero",
    dificultad: "media",
    temaSlug: "enf-31",
  },
  {
    enunciado: "La teoría de Florence Nightingale se enmarca en:",
    opciones: [
      "La teoría del autocuidado",
      "El modelo de adaptación",
      "El modelo de los sistemas conductuales",
      "La corriente que sitúa el entorno como factor clave de la salud",
    ],
    correctaIndex: 3,
    explicacion:
      "Nightingale es la referente de la teoría del entorno, que subraya la influencia de las condiciones ambientales sobre la salud y la recuperación.",
    fuente: "Teoría del entorno de Florence Nightingale",
    dificultad: "dificil",
    temaSlug: "enf-31",
  },

  // Tema enf-32: Valoracion Enfermera
  {
    enunciado: "Las cinco fases del proceso enfermero son:",
    opciones: [
      "Valoración, diagnóstico, planificación, ejecución y evaluación",
      "Anamnesis, exploración, prueba, tratamiento y alta",
      "Prevención, promoción, curación, rehabilitación y paliación",
      "Ingreso, estancia, cuidado, seguimiento y alta",
    ],
    correctaIndex: 0,
    explicacion:
      "El proceso enfermero consta de cinco fases: valoración, diagnóstico, planificación, ejecución y evaluación.",
    fuente: "Proceso de atención de enfermería",
    dificultad: "facil",
    temaSlug: "enf-32",
  },
  {
    enunciado: "La taxonomía NANDA se utiliza para:",
    opciones: [
      "Clasificar los resultados de los cuidados",
      "Formular los diagnósticos enfermeros",
      "Definir las intervenciones enfermeras",
      "Registrar la medicación prescrita",
    ],
    correctaIndex: 1,
    explicacion:
      "La taxonomía NANDA proporciona el lenguaje estandarizado para formular los diagnósticos enfermeros.",
    fuente: "Taxonomía NANDA",
    dificultad: "media",
    temaSlug: "enf-32",
  },
  {
    enunciado: "La clasificación NIC corresponde a:",
    opciones: [
      "Los diagnósticos enfermeros",
      "Los resultados esperados",
      "Las intervenciones de enfermería",
      "Los patrones funcionales de salud",
    ],
    correctaIndex: 2,
    explicacion:
      "La NIC (Nursing Interventions Classification) es la clasificación de las intervenciones de enfermería.",
    fuente: "Clasificación NIC",
    dificultad: "media",
    temaSlug: "enf-32",
  },
  {
    enunciado: "La clasificación NOC hace referencia a:",
    opciones: [
      "Las intervenciones enfermeras",
      "Los diagnósticos enfermeros",
      "Las necesidades básicas",
      "Los resultados esperados de los cuidados",
    ],
    correctaIndex: 3,
    explicacion:
      "La NOC (Nursing Outcomes Classification) recoge los resultados esperados de los cuidados enfermeros y sus indicadores.",
    fuente: "Clasificación NOC",
    dificultad: "media",
    temaSlug: "enf-32",
  },
  {
    enunciado: "Los patrones funcionales de salud fueron descritos por:",
    opciones: ["Marjory Gordon", "Virginia Henderson", "Callista Roy", "Dorothea Orem"],
    correctaIndex: 0,
    explicacion:
      "Marjory Gordon propuso los patrones funcionales de salud como marco para organizar la valoración enfermera.",
    fuente: "Patrones funcionales de Marjory Gordon",
    dificultad: "facil",
    temaSlug: "enf-32",
  },
  {
    enunciado: "¿Cuántos patrones funcionales de salud describe Marjory Gordon?",
    opciones: ["14 patrones", "11 patrones", "9 patrones", "5 patrones"],
    correctaIndex: 1,
    explicacion:
      "Gordon describe 11 patrones funcionales de salud que estructuran la recogida de datos en la valoración enfermera.",
    fuente: "Patrones funcionales de Marjory Gordon",
    dificultad: "dificil",
    temaSlug: "enf-32",
  },
  {
    enunciado: "La primera fase del proceso enfermero es:",
    opciones: ["La planificación", "El diagnóstico", "La valoración", "La evaluación"],
    correctaIndex: 2,
    explicacion:
      "El proceso enfermero comienza por la valoración, que consiste en la recogida y organización de datos del paciente.",
    fuente: "Proceso de atención de enfermería",
    dificultad: "facil",
    temaSlug: "enf-32",
  },
  {
    enunciado: "Según el formato PES, un diagnóstico enfermero real se compone de:",
    opciones: [
      "Solo el problema",
      "Problema y etiología",
      "Solo los signos y síntomas",
      "Problema, etiología y signos o síntomas",
    ],
    correctaIndex: 3,
    explicacion:
      "El formato PES estructura el diagnóstico real en Problema (etiqueta), Etiología (factores relacionados) y Signos y síntomas (características definitorias).",
    fuente: "Formato PES del diagnóstico enfermero",
    dificultad: "dificil",
    temaSlug: "enf-32",
  },
  {
    enunciado: "En la valoración enfermera, los datos pueden ser:",
    opciones: [
      "Objetivos (signos) y subjetivos (lo que refiere el paciente)",
      "Únicamente objetivos",
      "Solo los aportados por el médico",
      "Exclusivamente analíticos",
    ],
    correctaIndex: 0,
    explicacion:
      "La valoración recoge datos objetivos (medibles u observables) y subjetivos (los que refiere el propio paciente).",
    fuente: "Valoración enfermera",
    dificultad: "media",
    temaSlug: "enf-32",
  },
  {
    enunciado: "La fase de evaluación del proceso enfermero sirve para:",
    opciones: [
      "Iniciar la recogida de datos",
      "Comprobar si se han alcanzado los resultados esperados",
      "Formular por primera vez el diagnóstico",
      "Administrar la medicación",
    ],
    correctaIndex: 1,
    explicacion:
      "La evaluación valora el grado de consecución de los resultados (NOC) y permite revisar y ajustar el plan de cuidados.",
    fuente: "Proceso de atención de enfermería",
    dificultad: "media",
    temaSlug: "enf-32",
  },

  // Tema enf-33: Educacion para la salud
  {
    enunciado: "La Carta de Ottawa (1986) es un documento de referencia en:",
    opciones: [
      "La bioética clínica",
      "La farmacovigilancia",
      "La promoción de la salud",
      "La gestión hospitalaria",
    ],
    correctaIndex: 2,
    explicacion:
      "La Carta de Ottawa, de la primera Conferencia Internacional sobre Promoción de la Salud (1986), es un texto de referencia en promoción de la salud.",
    fuente: "Carta de Ottawa (OMS, 1986)",
    dificultad: "facil",
    temaSlug: "enf-33",
  },
  {
    enunciado: "La educación para la salud grupal se caracteriza por:",
    opciones: [
      "Atender a un solo paciente",
      "Realizarse siempre por teléfono",
      "Dirigirse a toda la población de un país",
      "Trabajar con un conjunto de personas con necesidades o intereses comunes",
    ],
    correctaIndex: 3,
    explicacion:
      "La educación para la salud grupal se dirige a grupos de personas con necesidades o intereses comunes, aprovechando la interacción entre sus miembros.",
    fuente: "Educación para la salud",
    dificultad: "media",
    temaSlug: "enf-33",
  },
  {
    enunciado: "Según la Carta de Ottawa, la promoción de la salud consiste en:",
    opciones: [
      "Proporcionar a los pueblos los medios necesarios para mejorar y controlar su salud",
      "Curar únicamente las enfermedades agudas",
      "Administrar tratamientos hospitalarios",
      "Realizar diagnósticos médicos",
    ],
    correctaIndex: 0,
    explicacion:
      "La Carta de Ottawa define la promoción de la salud como el proceso que permite a las personas y comunidades incrementar el control sobre su salud para mejorarla.",
    fuente: "Carta de Ottawa (OMS, 1986)",
    dificultad: "media",
    temaSlug: "enf-33",
  },
  {
    enunciado: "La educación para la salud individual se realiza:",
    opciones: [
      "En grandes auditorios",
      "En la relación directa entre el profesional y una persona",
      "Solo mediante folletos",
      "Exclusivamente en los medios de comunicación",
    ],
    correctaIndex: 1,
    explicacion:
      "La educación para la salud individual se desarrolla en la relación directa profesional-paciente, adaptando los mensajes a sus necesidades concretas.",
    fuente: "Educación para la salud",
    dificultad: "facil",
    temaSlug: "enf-33",
  },
  {
    enunciado: "Un objetivo de la educación para la salud es:",
    opciones: [
      "Fomentar la dependencia del sistema sanitario",
      "Incrementar los hábitos no saludables",
      "Capacitar a las personas para adoptar conductas saludables",
      "Sustituir la responsabilidad individual",
    ],
    correctaIndex: 2,
    explicacion:
      "La educación para la salud pretende capacitar y dar autonomía a las personas para que adopten conductas y estilos de vida saludables.",
    fuente: "Educación para la salud",
    dificultad: "media",
    temaSlug: "enf-33",
  },
  {
    enunciado: "La prevención primaria tiene como objetivo:",
    opciones: [
      "Rehabilitar las secuelas de la enfermedad",
      "Diagnosticar precozmente la enfermedad",
      "Evitar complicaciones de la enfermedad ya establecida",
      "Evitar la aparición de la enfermedad actuando sobre los factores de riesgo",
    ],
    correctaIndex: 3,
    explicacion:
      "La prevención primaria actúa antes de que aparezca la enfermedad, reduciendo los factores de riesgo (por ejemplo, con la vacunación o la promoción de hábitos saludables).",
    fuente: "Niveles de prevención",
    dificultad: "media",
    temaSlug: "enf-33",
  },
  {
    enunciado: "La prevención secundaria se centra en:",
    opciones: [
      "El diagnóstico precoz y el tratamiento temprano (cribado)",
      "La vacunación de la población sana",
      "La rehabilitación de las secuelas",
      "La educación sanitaria general",
    ],
    correctaIndex: 0,
    explicacion:
      "La prevención secundaria busca detectar la enfermedad en fases iniciales mediante el cribado y el diagnóstico precoz para tratarla cuanto antes.",
    fuente: "Niveles de prevención",
    dificultad: "dificil",
    temaSlug: "enf-33",
  },
  {
    enunciado: "La educación para la salud comunitaria se dirige a:",
    opciones: [
      "Un único paciente ingresado",
      "Un grupo poblacional o comunidad en su conjunto",
      "Solo al personal sanitario",
      "Exclusivamente a pacientes crónicos",
    ],
    correctaIndex: 1,
    explicacion:
      "La educación para la salud comunitaria interviene sobre una comunidad o población en su conjunto, favoreciendo la participación y la acción colectiva.",
    fuente: "Educación para la salud",
    dificultad: "facil",
    temaSlug: "enf-33",
  },
  {
    enunciado: "¿Cuál de las siguientes es un área de acción de la Carta de Ottawa?",
    opciones: [
      "Aumentar el gasto farmacéutico",
      "Reducir la participación comunitaria",
      "Crear entornos que apoyen la salud y reforzar la acción comunitaria",
      "Centralizar todos los servicios sanitarios",
    ],
    correctaIndex: 2,
    explicacion:
      "La Carta de Ottawa establece áreas como crear entornos favorables, reforzar la acción comunitaria, desarrollar aptitudes personales, reorientar los servicios y construir políticas saludables.",
    fuente: "Carta de Ottawa (OMS, 1986)",
    dificultad: "dificil",
    temaSlug: "enf-33",
  },
  {
    enunciado: "La prevención terciaria tiene como finalidad:",
    opciones: [
      "Evitar la aparición de la enfermedad",
      "Realizar cribados poblacionales",
      "Vacunar a la población sana",
      "Reducir las secuelas y rehabilitar al paciente con enfermedad establecida",
    ],
    correctaIndex: 3,
    explicacion:
      "La prevención terciaria actúa sobre la enfermedad ya establecida para reducir complicaciones y secuelas y rehabilitar al paciente.",
    fuente: "Niveles de prevención",
    dificultad: "media",
    temaSlug: "enf-33",
  },

  // Tema enf-34: Comunicacion
  {
    enunciado: "El protocolo SPIKES se utiliza para:",
    opciones: [
      "Comunicar malas noticias de forma estructurada",
      "Calcular dosis de medicación",
      "Realizar el triaje de urgencias",
      "Valorar el riesgo de úlceras por presión",
    ],
    correctaIndex: 0,
    explicacion:
      "SPIKES es un protocolo de seis etapas para comunicar malas noticias de manera estructurada y empática.",
    fuente: "Protocolo SPIKES",
    dificultad: "facil",
    temaSlug: "enf-34",
  },
  {
    enunciado: "La escucha activa implica:",
    opciones: [
      "Interrumpir constantemente al paciente",
      "Prestar atención plena, mostrar interés y comprender el mensaje del interlocutor",
      "Pensar en la respuesta sin atender a lo que se dice",
      "Evitar el contacto visual",
    ],
    correctaIndex: 1,
    explicacion:
      "La escucha activa supone atender de forma plena, mostrar interés y comprender el contenido y las emociones del mensaje del paciente.",
    fuente: "Comunicación terapéutica",
    dificultad: "facil",
    temaSlug: "enf-34",
  },
  {
    enunciado: "La relación de ayuda en enfermería se basa en:",
    opciones: [
      "La imposición de decisiones al paciente",
      "La distancia emocional absoluta",
      "La empatía, el respeto y la aceptación incondicional del paciente",
      "El juicio moral sobre el paciente",
    ],
    correctaIndex: 2,
    explicacion:
      "La relación de ayuda se fundamenta en actitudes como la empatía, el respeto y la aceptación incondicional, descritas por Carl Rogers.",
    fuente: "Relación de ayuda",
    dificultad: "media",
    temaSlug: "enf-34",
  },
  {
    enunciado: "El counselling o consejo asistido busca:",
    opciones: [
      "Dar órdenes al paciente",
      "Decidir por el paciente",
      "Ocultar la información relevante",
      "Ayudar a la persona a tomar decisiones sobre su salud de forma autónoma",
    ],
    correctaIndex: 3,
    explicacion:
      "El counselling ayuda a la persona a explorar su situación y a tomar decisiones autónomas sobre su salud, sin imponer ni decidir por ella.",
    fuente: "Counselling en salud",
    dificultad: "media",
    temaSlug: "enf-34",
  },
  {
    enunciado: "En el protocolo SPIKES, la primera etapa (Setting) consiste en:",
    opciones: [
      "Preparar el entorno y la entrevista de forma adecuada",
      "Dar directamente la mala noticia",
      "Explorar solo los resultados analíticos",
      "Finalizar la conversación",
    ],
    correctaIndex: 0,
    explicacion:
      "La etapa Setting consiste en preparar el contexto: elegir un lugar privado, disponer de tiempo y crear un clima adecuado antes de la entrevista.",
    fuente: "Protocolo SPIKES",
    dificultad: "media",
    temaSlug: "enf-34",
  },
  {
    enunciado: "La comunicación no verbal incluye:",
    opciones: [
      "Únicamente las palabras empleadas",
      "Gestos, postura, contacto visual y tono de voz",
      "Solo el contenido escrito",
      "Exclusivamente el silencio",
    ],
    correctaIndex: 1,
    explicacion:
      "La comunicación no verbal abarca gestos, expresión facial, postura, contacto visual, distancia y tono de voz, y complementa al mensaje verbal.",
    fuente: "Comunicación terapéutica",
    dificultad: "facil",
    temaSlug: "enf-34",
  },
  {
    enunciado: "La empatía se define como:",
    opciones: [
      "Sentir exactamente lo mismo que el paciente",
      "Ignorar las emociones del otro",
      "La capacidad de comprender y compartir el estado emocional del otro",
      "Dar consejos sin escuchar",
    ],
    correctaIndex: 2,
    explicacion:
      "La empatía es la capacidad de comprender y ponerse en el lugar del otro, reconociendo sus emociones sin necesariamente experimentarlas como propias.",
    fuente: "Relación de ayuda",
    dificultad: "media",
    temaSlug: "enf-34",
  },
  {
    enunciado: "Ante la comunicación de una mala noticia, es recomendable:",
    opciones: [
      "Darla siempre por teléfono",
      "Usar tecnicismos complejos",
      "Evitar cualquier pausa o silencio",
      "Elegir un lugar privado, ir al ritmo del paciente y permitir la expresión de emociones",
    ],
    correctaIndex: 3,
    explicacion:
      "Al dar una mala noticia conviene un entorno privado, adaptarse al ritmo del paciente, usar lenguaje comprensible y permitir la expresión de emociones.",
    fuente: "Protocolo SPIKES",
    dificultad: "media",
    temaSlug: "enf-34",
  },
  {
    enunciado: "Una barrera de la comunicación terapéutica es:",
    opciones: [
      "El uso excesivo de tecnicismos y los juicios de valor",
      "La escucha activa",
      "El empleo de un lenguaje claro",
      "La empatía",
    ],
    correctaIndex: 0,
    explicacion:
      "El exceso de tecnicismos, los juicios de valor o las prisas dificultan la comunicación; la escucha activa, el lenguaje claro y la empatía la favorecen.",
    fuente: "Comunicación terapéutica",
    dificultad: "dificil",
    temaSlug: "enf-34",
  },
  {
    enunciado: "En el protocolo SPIKES, la etapa Perception consiste en:",
    opciones: [
      "Dar la información médica completa",
      "Averiguar qué sabe y qué percibe el paciente sobre su situación",
      "Cerrar la entrevista",
      "Preparar la sala de la entrevista",
    ],
    correctaIndex: 1,
    explicacion:
      "En la etapa Perception se explora qué conoce y qué percibe el paciente de su situación antes de aportar nueva información.",
    fuente: "Protocolo SPIKES",
    dificultad: "dificil",
    temaSlug: "enf-34",
  },

  // Tema enf-35: Epidemiologia
  {
    enunciado: "En epidemiologia, la cadena epidemiológica está formada por:",
    opciones: [
      "Solo el agente y el huésped",
      "Únicamente el reservorio",
      "Agente, reservorio, puerta de salida, mecanismo de transmisión, puerta de entrada y huésped susceptible",
      "Agente causal y vacuna",
    ],
    correctaIndex: 2,
    explicacion:
      "La cadena epidemiológica la componen el agente, el reservorio, la puerta de salida, el mecanismo de transmisión, la puerta de entrada y el huésped susceptible.",
    fuente: "Cadena epidemiológica",
    dificultad: "media",
    temaSlug: "enf-35",
  },
  {
    enunciado: "La inmunidad activa se caracteriza por:",
    opciones: [
      "Recibir anticuerpos ya formados",
      "Ser siempre de muy corta duración",
      "No generar memoria inmunológica",
      "La producción de anticuerpos por el propio organismo tras infección o vacunación",
    ],
    correctaIndex: 3,
    explicacion:
      "En la inmunidad activa el organismo produce sus propios anticuerpos tras la infección natural o la vacunación, generando memoria inmunológica duradera.",
    fuente: "Inmunidad y vacunas",
    dificultad: "media",
    temaSlug: "enf-35",
  },
  {
    enunciado: "La inmunidad pasiva consiste en:",
    opciones: [
      "La administración de anticuerpos ya formados (inmunoglobulinas o vía placentaria)",
      "La producción propia de anticuerpos tras la vacuna",
      "La ausencia total de defensas",
      "Una respuesta celular de larga duración",
    ],
    correctaIndex: 0,
    explicacion:
      "La inmunidad pasiva se adquiere al recibir anticuerpos ya formados (por ejemplo inmunoglobulinas o los transferidos de la madre al feto); es de protección inmediata pero temporal.",
    fuente: "Inmunidad y vacunas",
    dificultad: "media",
    temaSlug: "enf-35",
  },
  {
    enunciado: "La inmunidad de grupo o de rebaño se produce cuando:",
    opciones: [
      "Solo una persona de la comunidad está vacunada",
      "Una proporción alta de la población es inmune, protegiendo indirectamente a los susceptibles",
      "Nadie de la comunidad está inmunizado",
      "La enfermedad se transmite con mayor facilidad",
    ],
    correctaIndex: 1,
    explicacion:
      "La inmunidad de grupo aparece cuando una proporción elevada de la población es inmune, lo que dificulta la transmisión y protege indirectamente a los no inmunes.",
    fuente: "Inmunidad de grupo",
    dificultad: "facil",
    temaSlug: "enf-35",
  },
  {
    enunciado: "El aislamiento de contacto está indicado en:",
    opciones: [
      "La tuberculosis pulmonar bacilífera",
      "El sarampión",
      "Infecciones por microorganismos multirresistentes transmitidos por contacto",
      "La varicela diseminada",
    ],
    correctaIndex: 2,
    explicacion:
      "El aislamiento de contacto se aplica a infecciones que se transmiten por contacto directo o indirecto, como las causadas por bacterias multirresistentes.",
    fuente: "Precauciones de aislamiento",
    dificultad: "dificil",
    temaSlug: "enf-35",
  },
  {
    enunciado: "El aislamiento aéreo requiere:",
    opciones: [
      "Solo el lavado de manos",
      "Guantes únicamente",
      "Ninguna precaución especial",
      "Habitación individual con presión negativa y mascarilla de alta filtración (FFP2/FFP3)",
    ],
    correctaIndex: 3,
    explicacion:
      "El aislamiento aéreo (tuberculosis, sarampión, varicela) exige habitación individual con presión negativa y protección respiratoria de alta filtración.",
    fuente: "Precauciones de aislamiento",
    dificultad: "dificil",
    temaSlug: "enf-35",
  },
  {
    enunciado: "Una enfermedad de transmisión por gotas es:",
    opciones: ["La gripe", "La tuberculosis pulmonar", "El sarampión", "La sarna"],
    correctaIndex: 0,
    explicacion:
      "La gripe se transmite por gotas respiratorias de gran tamaño; la tuberculosis y el sarampión son de transmisión aérea y la sarna de contacto.",
    fuente: "Mecanismos de transmisión",
    dificultad: "facil",
    temaSlug: "enf-35",
  },
  {
    enunciado: "La tasa de incidencia mide:",
    opciones: [
      "El total de casos existentes en un momento dado",
      "Los casos nuevos de una enfermedad en un periodo de tiempo",
      "La proporción de fallecidos",
      "La duración media de la enfermedad",
    ],
    correctaIndex: 1,
    explicacion:
      "La incidencia cuantifica los casos nuevos que aparecen en una población durante un periodo determinado.",
    fuente: "Medidas de frecuencia en epidemiología",
    dificultad: "facil",
    temaSlug: "enf-35",
  },
  {
    enunciado: "La prevalencia se define como:",
    opciones: [
      "Solo los casos nuevos aparecidos",
      "El número de defunciones",
      "El total de casos (nuevos y antiguos) existentes en una población en un momento dado",
      "El número de curaciones",
    ],
    correctaIndex: 2,
    explicacion:
      "La prevalencia es el número total de casos, nuevos y antiguos, presentes en una población en un momento o periodo determinado.",
    fuente: "Medidas de frecuencia en epidemiología",
    dificultad: "facil",
    temaSlug: "enf-35",
  },
  {
    enunciado: "El reservorio en la cadena epidemiológica es:",
    opciones: [
      "La vía por la que sale el agente del hospedador",
      "La persona susceptible de enfermar",
      "El mecanismo de transmisión",
      "El medio (persona, animal o ambiente) donde el agente vive y se multiplica",
    ],
    correctaIndex: 3,
    explicacion:
      "El reservorio es el hábitat natural (persona, animal o medio ambiente) donde el agente infeccioso vive, se multiplica y del que depende para sobrevivir.",
    fuente: "Cadena epidemiológica",
    dificultad: "media",
    temaSlug: "enf-35",
  },

  // Tema enf-36: Clasificacion de medicamentos
  {
    enunciado: "La clasificación ATC organiza los medicamentos según:",
    opciones: [
      "El órgano o sistema sobre el que actúan y sus propiedades terapéuticas y químicas",
      "El precio de venta al público",
      "El color del envase",
      "El orden alfabético del laboratorio",
    ],
    correctaIndex: 0,
    explicacion:
      "El sistema ATC (Anatómico, Terapéutico y Químico) clasifica los fármacos según el órgano o sistema sobre el que actúan y sus propiedades terapéuticas y químicas.",
    fuente: "Clasificación ATC",
    dificultad: "media",
    temaSlug: "enf-36",
  },
  {
    enunciado: "La tarjeta amarilla se utiliza para:",
    opciones: [
      "Solicitar el visado de recetas",
      "Notificar sospechas de reacciones adversas a medicamentos",
      "Prescribir estupefacientes",
      "Registrar la temperatura de la nevera de fármacos",
    ],
    correctaIndex: 1,
    explicacion:
      "La tarjeta amarilla es el instrumento del Sistema Español de Farmacovigilancia para notificar sospechas de reacciones adversas a medicamentos.",
    fuente: "Sistema Español de Farmacovigilancia",
    dificultad: "facil",
    temaSlug: "enf-36",
  },
  {
    enunciado: "La farmacovigilancia tiene como objetivo:",
    opciones: [
      "Fijar el precio de los fármacos",
      "Distribuir los medicamentos a las farmacias",
      "Identificar, evaluar y prevenir los efectos adversos de los medicamentos",
      "Fabricar nuevos principios activos",
    ],
    correctaIndex: 2,
    explicacion:
      "La farmacovigilancia se ocupa de detectar, evaluar, comprender y prevenir los efectos adversos y otros problemas relacionados con los medicamentos.",
    fuente: "Farmacovigilancia",
    dificultad: "media",
    temaSlug: "enf-36",
  },
  {
    enunciado: "Una forma farmacéutica sólida de administración oral es:",
    opciones: ["El jarabe", "La solución inyectable", "El colirio", "El comprimido"],
    correctaIndex: 3,
    explicacion:
      "El comprimido es una forma farmacéutica sólida de administración oral; el jarabe es líquido, la solución inyectable es parenteral y el colirio es oftálmico.",
    fuente: "Formas farmacéuticas",
    dificultad: "facil",
    temaSlug: "enf-36",
  },
  {
    enunciado: "Los comprimidos con cubierta entérica:",
    opciones: [
      "Se disuelven en el intestino y no deben partirse ni masticarse",
      "Se disuelven en la boca",
      "Deben triturarse siempre antes de administrarse",
      "Se administran por vía intravenosa",
    ],
    correctaIndex: 0,
    explicacion:
      "La cubierta entérica hace que el comprimido se disuelva en el intestino y no en el estómago, por lo que no debe partirse ni triturarse.",
    fuente: "Formas farmacéuticas orales",
    dificultad: "dificil",
    temaSlug: "enf-36",
  },
  {
    enunciado: "El sistema de clasificación ATC organiza los fármacos en:",
    opciones: ["Tres niveles", "Cinco niveles", "Siete niveles", "Dos niveles"],
    correctaIndex: 1,
    explicacion:
      "La clasificación ATC estructura los medicamentos en cinco niveles jerárquicos, desde el grupo anatómico principal hasta el principio activo concreto.",
    fuente: "Clasificación ATC",
    dificultad: "dificil",
    temaSlug: "enf-36",
  },
  {
    enunciado: "Una reacción adversa medicamentosa se define como:",
    opciones: [
      "El efecto terapéutico esperado del fármaco",
      "La ausencia de efecto del medicamento",
      "Un efecto nocivo y no deseado que aparece a dosis habituales",
      "La mejoría clínica del paciente",
    ],
    correctaIndex: 2,
    explicacion:
      "Una reacción adversa es cualquier respuesta nociva y no intencionada a un medicamento que ocurre a las dosis normalmente utilizadas.",
    fuente: "Farmacovigilancia",
    dificultad: "media",
    temaSlug: "enf-36",
  },
  {
    enunciado: "¿Cuál de las siguientes es una forma farmacéutica líquida?",
    opciones: ["El comprimido", "La cápsula", "El supositorio", "El jarabe"],
    correctaIndex: 3,
    explicacion:
      "El jarabe es una forma farmacéutica líquida; el comprimido y la cápsula son sólidas orales y el supositorio es una forma sólida de administración rectal.",
    fuente: "Formas farmacéuticas",
    dificultad: "facil",
    temaSlug: "enf-36",
  },
  {
    enunciado: "La notificación de sospechas de reacciones adversas puede realizarla:",
    opciones: [
      "Cualquier profesional sanitario e incluso el propio ciudadano",
      "Únicamente el médico prescriptor",
      "Solo la industria farmacéutica",
      "Exclusivamente el farmacéutico",
    ],
    correctaIndex: 0,
    explicacion:
      "Cualquier profesional sanitario, y también los ciudadanos, pueden notificar sospechas de reacciones adversas al Sistema Español de Farmacovigilancia.",
    fuente: "Sistema Español de Farmacovigilancia",
    dificultad: "media",
    temaSlug: "enf-36",
  },
  {
    enunciado: "Los medicamentos termolábiles deben conservarse:",
    opciones: [
      "A temperatura ambiente elevada",
      "En nevera, entre 2 y 8 grados centígrados",
      "En el congelador en todos los casos",
      "Expuestos a la luz solar directa",
    ],
    correctaIndex: 1,
    explicacion:
      "Los medicamentos termolábiles (como muchas vacunas o insulinas) se conservan refrigerados entre 2 y 8 grados, evitando la congelación.",
    fuente: "Conservación de medicamentos",
    dificultad: "media",
    temaSlug: "enf-36",
  },

  // Tema enf-37: Prestacion farmaceutica por enfermeras
  {
    enunciado:
      "La indicación, uso y autorización de dispensación de medicamentos por enfermeras está regulada por:",
    opciones: [
      "La Ley 55/2003",
      "El Real Decreto 1030/2006",
      "El Real Decreto 954/2015",
      "La Ley 41/2002",
    ],
    correctaIndex: 2,
    explicacion:
      "El Real Decreto 954/2015 regula la indicación, uso y autorización de dispensación de medicamentos y productos sanitarios por parte de las enfermeras.",
    fuente: "Real Decreto 954/2015",
    dificultad: "media",
    temaSlug: "enf-37",
  },
  {
    enunciado: "Según el Real Decreto 954/2015, las enfermeras pueden indicar y usar:",
    opciones: [
      "Cualquier medicamento sujeto a prescripción médica sin límite",
      "Solo productos cosméticos",
      "Únicamente material de curas",
      "Medicamentos no sujetos a prescripción médica y productos sanitarios, y los sujetos a prescripción mediante protocolos o guías",
    ],
    correctaIndex: 3,
    explicacion:
      "El RD 954/2015 permite a las enfermeras indicar y usar de forma autónoma los medicamentos no sujetos a prescripción y los productos sanitarios, y los sujetos a prescripción conforme a protocolos o guías de práctica clínica.",
    fuente: "Real Decreto 954/2015",
    dificultad: "dificil",
    temaSlug: "enf-37",
  },
  {
    enunciado: "El uso racional del medicamento implica:",
    opciones: [
      "Que el paciente reciba el fármaco adecuado, a la dosis y durante el tiempo necesarios, al menor coste posible",
      "Usar siempre el fármaco más caro disponible",
      "Prolongar los tratamientos de forma indefinida",
      "Prescindir de la evidencia científica",
    ],
    correctaIndex: 0,
    explicacion:
      "El uso racional persigue que el paciente reciba el medicamento apropiado a sus necesidades, en la dosis y el tiempo adecuados y al menor coste posible para él y la comunidad.",
    fuente: "Uso racional del medicamento",
    dificultad: "media",
    temaSlug: "enf-37",
  },
  {
    enunciado: "La actuación enfermera con medicamentos sujetos a prescripción médica requiere:",
    opciones: [
      "Actuar sin ningún tipo de protocolo",
      "Ajustarse a protocolos o guías de práctica clínica validados",
      "La decisión libre y sin criterios de la enfermera",
      "La autorización verbal del paciente únicamente",
    ],
    correctaIndex: 1,
    explicacion:
      "Para los medicamentos sujetos a prescripción médica, la actuación enfermera debe basarse en protocolos o guías de práctica clínica validados por los organismos competentes.",
    fuente: "Real Decreto 954/2015",
    dificultad: "media",
    temaSlug: "enf-37",
  },
  {
    enunciado: "La acreditación de las enfermeras para la indicación de medicamentos:",
    opciones: [
      "No existe en el sistema sanitario",
      "La otorga el propio paciente",
      "Requiere cumplir los requisitos de formación o experiencia establecidos",
      "Es automática al colegiarse",
    ],
    correctaIndex: 2,
    explicacion:
      "Las enfermeras deben estar acreditadas cumpliendo los requisitos de formación o experiencia previstos en la normativa para indicar y usar medicamentos.",
    fuente: "Real Decreto 954/2015",
    dificultad: "dificil",
    temaSlug: "enf-37",
  },
  {
    enunciado: "El objetivo del Real Decreto 954/2015 es:",
    opciones: [
      "Prohibir la actuación enfermera con medicamentos",
      "Sustituir la prescripción médica por la enfermera",
      "Regular el precio de los fármacos",
      "Regular la indicación, uso y autorización de dispensación de medicamentos y productos sanitarios por enfermeras",
    ],
    correctaIndex: 3,
    explicacion:
      "El RD 954/2015 tiene por objeto regular la indicación, uso y autorización de dispensación de medicamentos y productos sanitarios de uso humano por parte de las enfermeras.",
    fuente: "Real Decreto 954/2015",
    dificultad: "facil",
    temaSlug: "enf-37",
  },
  {
    enunciado: "Un ejemplo de actuación autónoma de la enfermera con medicamentos es:",
    opciones: [
      "La indicación de un antitérmico no sujeto a prescripción o de productos para el cuidado de heridas",
      "La prescripción de un antibiótico intravenoso",
      "La indicación de un fármaco quimioterápico",
      "La prescripción de un opioide mayor",
    ],
    correctaIndex: 0,
    explicacion:
      "La enfermera puede indicar de forma autónoma medicamentos no sujetos a prescripción médica y productos sanitarios, como un antitérmico de libre dispensación o material de curas.",
    fuente: "Real Decreto 954/2015",
    dificultad: "media",
    temaSlug: "enf-37",
  },
  {
    enunciado: "El uso racional del medicamento contribuye a:",
    opciones: [
      "Aumentar la resistencia a los antibióticos",
      "Mejorar la seguridad del paciente y la eficiencia del sistema",
      "Incrementar los efectos adversos",
      "Fomentar la automedicación no supervisada",
    ],
    correctaIndex: 1,
    explicacion:
      "El uso racional mejora la seguridad del paciente, reduce efectos adversos y errores y hace más eficiente el uso de los recursos del sistema.",
    fuente: "Uso racional del medicamento",
    dificultad: "facil",
    temaSlug: "enf-37",
  },
  {
    enunciado: "La seguridad en la administración de medicamentos por enfermería exige:",
    opciones: [
      "Omitir la comprobación de alergias",
      "No registrar lo administrado",
      "Verificar los correctos y registrar la administración",
      "Actuar sin identificar al paciente",
    ],
    correctaIndex: 2,
    explicacion:
      "La administración segura requiere comprobar los correctos (paciente, medicamento, dosis, vía, hora), verificar alergias y registrar lo administrado.",
    fuente: "Seguridad del paciente en la administración de medicamentos",
    dificultad: "facil",
    temaSlug: "enf-37",
  },
  {
    enunciado:
      "Los protocolos y guías para el uso enfermero de medicamentos sujetos a prescripción son elaborados y validados por:",
    opciones: [
      "Cada enfermera de forma individual",
      "El propio paciente",
      "La industria farmacéutica en exclusiva",
      "Los organismos competentes con la participación de las sociedades científicas",
    ],
    correctaIndex: 3,
    explicacion:
      "Los protocolos y guías se elaboran y validan por los órganos competentes en materia de salud con la participación de las organizaciones colegiales y sociedades científicas.",
    fuente: "Real Decreto 954/2015",
    dificultad: "media",
    temaSlug: "enf-37",
  },

  // Tema enf-38: Administracion de medicamentos
  {
    enunciado:
      "La regla de los correctos en la administración de medicamentos incluye clásicamente:",
    opciones: [
      "Paciente correcto, medicamento correcto, dosis correcta, vía correcta y hora correcta",
      "Únicamente el paciente y el medicamento correctos",
      "Solo la dosis y la vía correctas",
      "El color y el tamaño correctos del comprimido",
    ],
    correctaIndex: 0,
    explicacion:
      "Los cinco correctos clásicos son paciente, medicamento, dosis, vía y hora correctos; a ellos se suma el registro correcto.",
    fuente: "Los cinco correctos en la administración de medicamentos",
    dificultad: "facil",
    temaSlug: "enf-38",
  },
  {
    enunciado: "La vía de administración que proporciona un efecto más rápido del fármaco es:",
    opciones: ["La vía oral", "La vía intravenosa", "La vía subcutánea", "La vía rectal"],
    correctaIndex: 1,
    explicacion:
      "La vía intravenosa introduce el fármaco directamente en el torrente sanguíneo, por lo que su efecto es prácticamente inmediato.",
    fuente: "Vías de administración de medicamentos",
    dificultad: "media",
    temaSlug: "enf-38",
  },
  {
    enunciado:
      "El ángulo de inserción de la aguja en una inyección intramuscular es habitualmente de:",
    opciones: ["15 grados", "45 grados", "90 grados", "180 grados"],
    correctaIndex: 2,
    explicacion:
      "La inyección intramuscular se realiza a 90 grados; la subcutánea suele hacerse a 45 grados y la intradérmica a unos 15 grados.",
    fuente: "Técnica de administración parenteral",
    dificultad: "media",
    temaSlug: "enf-38",
  },
  {
    enunciado: "Una zona habitual de punción para la inyección intramuscular en el adulto es:",
    opciones: [
      "El abdomen periumbilical",
      "La cara anterior del antebrazo",
      "El pulpejo del dedo",
      "El músculo deltoides o el ventroglúteo",
    ],
    correctaIndex: 3,
    explicacion:
      "Las zonas intramusculares habituales son el deltoides, el ventroglúteo y el vasto lateral; el abdomen se usa para la vía subcutánea y el antebrazo para la intradérmica.",
    fuente: "Zonas de punción intramuscular",
    dificultad: "facil",
    temaSlug: "enf-38",
  },
  {
    enunciado:
      "Se prescribe una perfusión de 500 mL a pasar en 4 horas con un equipo de macrogotero (1 mL = 20 gotas). El ritmo aproximado es de:",
    opciones: [
      "42 gotas por minuto",
      "21 gotas por minuto",
      "84 gotas por minuto",
      "10 gotas por minuto",
    ],
    correctaIndex: 0,
    explicacion:
      "Gotas por minuto = (volumen en mL x 20) / (tiempo en minutos) = (500 x 20) / 240, que resulta en unas 42 gotas por minuto.",
    fuente: "Cálculo del ritmo de goteo",
    dificultad: "dificil",
    temaSlug: "enf-38",
  },
  {
    enunciado: "La vía subcutánea se utiliza habitualmente para administrar:",
    opciones: [
      "Grandes volúmenes de líquidos",
      "Insulina y heparinas de bajo peso molecular",
      "Contrastes radiológicos",
      "Nutrición parenteral total",
    ],
    correctaIndex: 1,
    explicacion:
      "La vía subcutánea es adecuada para pequeños volúmenes de absorción lenta, como la insulina o las heparinas de bajo peso molecular.",
    fuente: "Vía subcutánea",
    dificultad: "media",
    temaSlug: "enf-38",
  },
  {
    enunciado:
      "Para prevenir las lipodistrofias en el paciente que se administra insulina, se recomienda:",
    opciones: [
      "Inyectar siempre en el mismo punto",
      "Administrarla por vía intramuscular",
      "Rotar de forma sistemática las zonas de punción",
      "Masajear enérgicamente la zona tras la inyección",
    ],
    correctaIndex: 2,
    explicacion:
      "La rotación sistemática de las zonas de punción evita la aparición de lipodistrofias; no debe masajearse la zona tras administrar insulina.",
    fuente: "Administración de insulina",
    dificultad: "dificil",
    temaSlug: "enf-38",
  },
  {
    enunciado:
      "Antes de administrar cualquier medicamento, el profesional debe comprobar en primer lugar:",
    opciones: [
      "El precio del fármaco",
      "El laboratorio fabricante",
      "El color del envase",
      "La identidad del paciente y sus posibles alergias",
    ],
    correctaIndex: 3,
    explicacion:
      "Identificar correctamente al paciente y verificar sus alergias es prioritario para evitar errores y reacciones adversas graves.",
    fuente: "Seguridad en la administración de medicamentos",
    dificultad: "media",
    temaSlug: "enf-38",
  },
  {
    enunciado: "La vía intradérmica se emplea principalmente para:",
    opciones: [
      "Pruebas diagnósticas como la de Mantoux y las pruebas de alergia",
      "Administrar grandes volúmenes de suero",
      "La nutrición parenteral",
      "Las transfusiones sanguíneas",
    ],
    correctaIndex: 0,
    explicacion:
      "La vía intradérmica, con volúmenes muy pequeños, se usa en pruebas como la de la tuberculina (Mantoux) y las pruebas cutáneas de alergia.",
    fuente: "Vía intradérmica",
    dificultad: "facil",
    temaSlug: "enf-38",
  },
  {
    enunciado: "Ante un error en la administración de un medicamento, la actuación correcta es:",
    opciones: [
      "Ocultarlo para evitar responsabilidades",
      "Valorar al paciente, comunicarlo y notificarlo según el sistema de seguridad",
      "Administrar de inmediato un antídoto sin valorar",
      "Repetir la dosis para compensar",
    ],
    correctaIndex: 1,
    explicacion:
      "Ante un error de medicación se valora al paciente, se comunica al equipo y se notifica el incidente para su análisis y prevención; nunca se oculta.",
    fuente: "Gestión de errores de medicación",
    dificultad: "media",
    temaSlug: "enf-38",
  },

  // Tema enf-39: Actividad fisica y alimentacion
  {
    enunciado: "La OMS recomienda que las personas adultas (18-64 años) realicen a la semana:",
    opciones: [
      "Menos de 30 minutos de actividad física",
      "Actividad física un único día a la semana",
      "Al menos 150-300 minutos de actividad física aeróbica de intensidad moderada",
      "Solo ejercicios de fuerza, sin actividad aeróbica",
    ],
    correctaIndex: 2,
    explicacion:
      "La OMS recomienda para el adulto entre 150 y 300 minutos semanales de actividad aeróbica moderada (o 75-150 minutos de actividad vigorosa).",
    fuente: "Recomendaciones de actividad física de la OMS",
    dificultad: "facil",
    temaSlug: "enf-39",
  },
  {
    enunciado: "Un índice de masa corporal (IMC) igual o superior a 30 kg/m2 se corresponde con:",
    opciones: ["Normopeso", "Bajo peso", "Sobrepeso", "Obesidad"],
    correctaIndex: 3,
    explicacion:
      "Según la OMS, un IMC igual o mayor de 30 kg/m2 indica obesidad; entre 25 y 29,9 sobrepeso y entre 18,5 y 24,9 normopeso.",
    fuente: "Clasificación del IMC (OMS)",
    dificultad: "media",
    temaSlug: "enf-39",
  },
  {
    enunciado: "El índice de masa corporal (IMC) se calcula mediante:",
    opciones: [
      "El peso en kilogramos dividido por la talla en metros al cuadrado",
      "El peso multiplicado por la talla",
      "La talla dividida por el peso",
      "El perímetro abdominal dividido por la talla",
    ],
    correctaIndex: 0,
    explicacion:
      "El IMC es el resultado de dividir el peso en kilogramos por el cuadrado de la talla expresada en metros.",
    fuente: "Índice de masa corporal",
    dificultad: "media",
    temaSlug: "enf-39",
  },
  {
    enunciado: "En la promocion de la salud en Andalucia, el PAFAE es:",
    opciones: [
      "Un fármaco para el tratamiento de la obesidad",
      "El Plan para la Promoción de la Actividad Física y la Alimentación Equilibrada de Andalucía",
      "Una escala de valoración del dolor",
      "Un tipo de dieta hipocalórica",
    ],
    correctaIndex: 1,
    explicacion:
      "El PAFAE es el Plan para la Promoción de la Actividad Física y la Alimentación Equilibrada del Sistema Sanitario Público de Andalucía.",
    fuente: "Plan para la Promoción de la Actividad Física y la Alimentación Equilibrada (PAFAE)",
    dificultad: "facil",
    temaSlug: "enf-39",
  },
  {
    enunciado: "Un IMC entre 25 y 29,9 kg/m2 se clasifica como:",
    opciones: ["Normopeso", "Obesidad de grado I", "Sobrepeso", "Bajo peso"],
    correctaIndex: 2,
    explicacion:
      "El intervalo de IMC entre 25 y 29,9 kg/m2 corresponde a sobrepeso, situación previa a la obesidad.",
    fuente: "Clasificación del IMC (OMS)",
    dificultad: "media",
    temaSlug: "enf-39",
  },
  {
    enunciado:
      "El perímetro de cintura como indicador de riesgo cardiometabólico se considera elevado en la mujer a partir de:",
    opciones: ["50 cm", "60 cm", "70 cm", "88 cm"],
    correctaIndex: 3,
    explicacion:
      "Un perímetro de cintura superior a 88 cm en la mujer y a 102 cm en el varón se asocia a un mayor riesgo cardiometabólico.",
    fuente: "Perímetro de cintura y riesgo cardiovascular",
    dificultad: "dificil",
    temaSlug: "enf-39",
  },
  {
    enunciado: "El sedentarismo se considera un factor de riesgo para:",
    opciones: [
      "Las enfermedades cardiovasculares, la obesidad y la diabetes tipo 2",
      "La mejora de la salud cardiovascular",
      "La reducción de la tensión arterial",
      "El aumento de la masa muscular",
    ],
    correctaIndex: 0,
    explicacion:
      "La inactividad física es un factor de riesgo reconocido de enfermedad cardiovascular, obesidad, diabetes tipo 2 y otras enfermedades crónicas.",
    fuente: "Sedentarismo y salud",
    dificultad: "media",
    temaSlug: "enf-39",
  },
  {
    enunciado: "La dieta mediterránea se caracteriza por un consumo elevado de:",
    opciones: [
      "Carnes rojas y productos procesados",
      "Frutas, verduras, legumbres, cereales integrales y aceite de oliva",
      "Bebidas azucaradas",
      "Bollería industrial",
    ],
    correctaIndex: 1,
    explicacion:
      "La dieta mediterránea se basa en frutas, verduras, legumbres, cereales integrales, aceite de oliva y pescado, con bajo consumo de carnes rojas y procesados.",
    fuente: "Dieta mediterránea",
    dificultad: "facil",
    temaSlug: "enf-39",
  },
  {
    enunciado: "La OMS recomienda que la ingesta de azúcares libres no supere:",
    opciones: [
      "El 50% de la ingesta calórica total",
      "El 40% de la ingesta calórica total",
      "El 10% de la ingesta calórica total",
      "El 30% de la ingesta calórica total",
    ],
    correctaIndex: 2,
    explicacion:
      "La OMS aconseja limitar los azúcares libres a menos del 10% de la ingesta calórica total, y valora un beneficio adicional por debajo del 5%.",
    fuente: "Recomendaciones de la OMS sobre azúcares",
    dificultad: "media",
    temaSlug: "enf-39",
  },
  {
    enunciado:
      "Además de la actividad aeróbica, la OMS recomienda que el adulto realice actividades de fortalecimiento muscular:",
    opciones: [
      "Nunca",
      "Todos los días de forma intensa",
      "Una vez al mes",
      "Dos o más días a la semana",
    ],
    correctaIndex: 3,
    explicacion:
      "La OMS recomienda complementar la actividad aeróbica con ejercicios de fortalecimiento muscular dos o más días a la semana.",
    fuente: "Recomendaciones de actividad física de la OMS",
    dificultad: "dificil",
    temaSlug: "enf-39",
  },

  // Tema enf-40: Nutricion
  {
    enunciado: "Los macronutrientes son:",
    opciones: [
      "Los hidratos de carbono, las proteínas y las grasas",
      "Las vitaminas y los minerales",
      "El agua y la fibra exclusivamente",
      "Los oligoelementos",
    ],
    correctaIndex: 0,
    explicacion:
      "Los macronutrientes son los hidratos de carbono, las proteínas y las grasas, que aportan energía; las vitaminas y los minerales son micronutrientes.",
    fuente: "Nutrientes",
    dificultad: "facil",
    temaSlug: "enf-40",
  },
  {
    enunciado: "El test MNA (Mini Nutritional Assessment) se utiliza para:",
    opciones: [
      "Valorar el riesgo de úlceras por presión",
      "Valorar el estado nutricional, especialmente en el anciano",
      "Medir la glucemia capilar",
      "Evaluar el nivel de conciencia",
    ],
    correctaIndex: 1,
    explicacion:
      "El MNA es una herramienta de cribado y valoración del estado nutricional utilizada sobre todo en la persona mayor.",
    fuente: "Mini Nutritional Assessment (MNA)",
    dificultad: "media",
    temaSlug: "enf-40",
  },
  {
    enunciado: "La nutrición enteral consiste en administrar los nutrientes:",
    opciones: [
      "Directamente en una vena central",
      "Por vía intramuscular",
      "En el tubo digestivo a través de una sonda cuando la vía oral no es suficiente",
      "Mediante inyección subcutánea",
    ],
    correctaIndex: 2,
    explicacion:
      "La nutrición enteral utiliza el tubo digestivo mediante una sonda cuando la ingesta oral es insuficiente pero el aparato digestivo es funcionante.",
    fuente: "Nutrición enteral",
    dificultad: "media",
    temaSlug: "enf-40",
  },
  {
    enunciado: "La nutrición parenteral está indicada cuando:",
    opciones: [
      "El paciente puede comer con normalidad",
      "Solo se requiere suplementar la dieta oral",
      "El tubo digestivo funciona correctamente",
      "El tubo digestivo no es utilizable o resulta insuficiente, administrándose por vía intravenosa",
    ],
    correctaIndex: 3,
    explicacion:
      "La nutrición parenteral aporta los nutrientes por vía intravenosa cuando el tubo digestivo no puede utilizarse o resulta insuficiente.",
    fuente: "Nutrición parenteral",
    dificultad: "media",
    temaSlug: "enf-40",
  },
  {
    enunciado: "El método de exploración clínica volumen-viscosidad (MECV-V) se utiliza para:",
    opciones: [
      "Detectar la disfagia y determinar el volumen y la textura más seguros",
      "Medir la tensión arterial",
      "Valorar el dolor",
      "Calcular el gasto energético basal",
    ],
    correctaIndex: 0,
    explicacion:
      "El MECV-V es una prueba a pie de cama que detecta la disfagia orofaríngea y ayuda a elegir el volumen y la viscosidad más seguros para el paciente.",
    fuente: "Método de exploración clínica volumen-viscosidad (MECV-V)",
    dificultad: "facil",
    temaSlug: "enf-40",
  },
  {
    enunciado: "En un paciente con disfagia a líquidos, una medida adecuada es:",
    opciones: [
      "Ofrecer agua abundante sin ninguna modificación",
      "Utilizar espesantes para adaptar la viscosidad de los líquidos",
      "Administrar la comida con rapidez",
      "Dar de comer con el paciente tumbado",
    ],
    correctaIndex: 1,
    explicacion:
      "En la disfagia a líquidos se emplean espesantes para aumentar la viscosidad y reducir el riesgo de aspiración; se alimenta despacio y con el paciente incorporado.",
    fuente: "Manejo de la disfagia",
    dificultad: "media",
    temaSlug: "enf-40",
  },
  {
    enunciado: "Una complicación frecuente de la disfagia no tratada es:",
    opciones: [
      "La hipertensión arterial",
      "La diabetes",
      "La broncoaspiración y la neumonía aspirativa",
      "La hipercolesterolemia",
    ],
    correctaIndex: 2,
    explicacion:
      "La disfagia no tratada favorece la broncoaspiración y la neumonía aspirativa, además de desnutrición y deshidratación.",
    fuente: "Complicaciones de la disfagia",
    dificultad: "dificil",
    temaSlug: "enf-40",
  },
  {
    enunciado: "Para prevenir la broncoaspiración durante la alimentación, el paciente debe estar:",
    opciones: [
      "En decúbito supino completo",
      "En posición de Trendelenburg",
      "Girado en decúbito prono",
      "Sentado o incorporado al menos a 45 grados",
    ],
    correctaIndex: 3,
    explicacion:
      "Mantener al paciente sentado o incorporado al menos a 45 grados durante y después de la ingesta reduce el riesgo de broncoaspiración.",
    fuente: "Prevención de la broncoaspiración",
    dificultad: "media",
    temaSlug: "enf-40",
  },
  {
    enunciado: "Los micronutrientes incluyen:",
    opciones: [
      "Las vitaminas y los minerales",
      "Los hidratos de carbono",
      "Las proteínas",
      "Las grasas",
    ],
    correctaIndex: 0,
    explicacion:
      "Los micronutrientes son las vitaminas y los minerales; no aportan energía pero son imprescindibles para el funcionamiento del organismo.",
    fuente: "Nutrientes",
    dificultad: "facil",
    temaSlug: "enf-40",
  },
  {
    enunciado:
      "Antes de administrar la nutrición por sonda nasogástrica, la enfermera debe comprobar:",
    opciones: [
      "El color de la sonda",
      "La correcta colocación de la sonda y, si procede, el residuo gástrico",
      "La marca del preparado nutricional",
      "La temperatura de la habitación",
    ],
    correctaIndex: 1,
    explicacion:
      "Antes de administrar la nutrición hay que verificar la correcta colocación de la sonda y valorar el residuo gástrico para prevenir la broncoaspiración.",
    fuente: "Cuidados de la nutrición enteral por sonda",
    dificultad: "dificil",
    temaSlug: "enf-40",
  },

  // Tema enf-41: Proceso ansiedad-depresion
  {
    enunciado: "La escala de ansiedad y depresión de Goldberg se utiliza para:",
    opciones: [
      "Medir la presión arterial",
      "Valorar el riesgo de caídas",
      "Cribar y detectar la ansiedad y la depresión",
      "Evaluar la función renal",
    ],
    correctaIndex: 2,
    explicacion:
      "La escala de Goldberg es un instrumento de cribado de la ansiedad y la depresión, con dos subescalas independientes.",
    fuente: "Escala de Goldberg",
    dificultad: "facil",
    temaSlug: "enf-41",
  },
  {
    enunciado: "La escala de Hamilton se emplea para:",
    opciones: [
      "Valorar las úlceras por presión",
      "Medir el nivel de conciencia",
      "Evaluar el equilibrio",
      "Valorar la intensidad de la ansiedad o de la depresión",
    ],
    correctaIndex: 3,
    explicacion:
      "La escala de Hamilton dispone de versiones para la ansiedad y para la depresión y mide la gravedad o intensidad de los síntomas.",
    fuente: "Escala de Hamilton",
    dificultad: "media",
    temaSlug: "enf-41",
  },
  {
    enunciado:
      "Ante un paciente que expresa ideas de suicidio, la actuación correcta del profesional es:",
    opciones: [
      "Preguntar de forma directa y abierta sobre la ideación, sin miedo a inducirla",
      "Evitar el tema para no darle ideas",
      "Restar importancia a lo que expresa",
      "Dejarlo solo hasta que se calme",
    ],
    correctaIndex: 0,
    explicacion:
      "Preguntar de forma directa sobre la ideación suicida no la induce; permite valorar el riesgo, transmitir apoyo y activar las medidas de protección.",
    fuente: "Prevención del suicidio",
    dificultad: "media",
    temaSlug: "enf-41",
  },
  {
    enunciado: "Un factor de riesgo de suicidio es:",
    opciones: [
      "Un buen apoyo social",
      "El intento de suicidio previo y la presencia de un trastorno mental",
      "La ausencia de antecedentes psiquiátricos",
      "Una red familiar sólida",
    ],
    correctaIndex: 1,
    explicacion:
      "El intento previo es uno de los principales factores de riesgo de suicidio, junto con el trastorno mental, el aislamiento social y la desesperanza.",
    fuente: "Factores de riesgo de suicidio",
    dificultad: "dificil",
    temaSlug: "enf-41",
  },
  {
    enunciado: "La ansiedad se caracteriza por:",
    opciones: [
      "La ausencia total de síntomas físicos",
      "Únicamente tristeza profunda",
      "Una sensación de preocupación o temor acompañada de síntomas físicos como taquicardia o inquietud",
      "Somnolencia continua sin otros síntomas",
    ],
    correctaIndex: 2,
    explicacion:
      "La ansiedad combina una vivencia de preocupación o temor anticipatorio con manifestaciones físicas de activación como taquicardia, tensión o inquietud.",
    fuente: "Trastornos de ansiedad",
    dificultad: "facil",
    temaSlug: "enf-41",
  },
  {
    enunciado: "En la atención al paciente con depresión, una intervención enfermera adecuada es:",
    opciones: [
      "Reforzar las ideas de inutilidad del paciente",
      "Fomentar el aislamiento social",
      "Minimizar sus emociones",
      "Establecer una relación de ayuda, favorecer la expresión emocional y vigilar el riesgo autolítico",
    ],
    correctaIndex: 3,
    explicacion:
      "Los cuidados en la depresión incluyen la relación de ayuda, la escucha, favorecer la expresión emocional y la vigilancia estrecha del riesgo de suicidio.",
    fuente: "Cuidados de enfermería en la depresión",
    dificultad: "media",
    temaSlug: "enf-41",
  },
  {
    enunciado: "La creencia de que hablar del suicidio con el paciente incrementa el riesgo:",
    opciones: [
      "Es falsa; abordarlo abiertamente ayuda a prevenirlo",
      "Es cierta y por ello debe evitarse el tema",
      "Solo es válida en adolescentes",
      "Está demostrada científicamente",
    ],
    correctaIndex: 0,
    explicacion:
      "Es un mito: preguntar por la ideación suicida no la induce; hablar de ello abiertamente facilita la ayuda y contribuye a la prevención.",
    fuente: "Prevención del suicidio",
    dificultad: "media",
    temaSlug: "enf-41",
  },
  {
    enunciado: "El trastorno depresivo mayor se caracteriza principalmente por:",
    opciones: [
      "Euforia y aumento de la energía",
      "Estado de ánimo bajo y pérdida de interés o de la capacidad de disfrutar (anhedonia)",
      "Aumento del rendimiento y la concentración",
      "Ausencia de repercusión en la vida diaria",
    ],
    correctaIndex: 1,
    explicacion:
      "Los síntomas nucleares de la depresión son el estado de ánimo deprimido y la anhedonia (pérdida de interés o de la capacidad de disfrutar) mantenidos en el tiempo.",
    fuente: "Trastorno depresivo",
    dificultad: "facil",
    temaSlug: "enf-41",
  },
  {
    enunciado: "Ante un paciente con riesgo suicida inminente, la prioridad es:",
    opciones: [
      "Programar una revisión dentro de un mes",
      "Recomendar únicamente reposo domiciliario",
      "Garantizar su seguridad, no dejarlo solo y derivar de forma urgente a salud mental",
      "Entregarle la medicación completa para su domicilio",
    ],
    correctaIndex: 2,
    explicacion:
      "En el riesgo inminente se prioriza la seguridad del paciente, evitando dejarlo solo y el acceso a medios letales, con derivación urgente a salud mental.",
    fuente: "Manejo del riesgo suicida",
    dificultad: "media",
    temaSlug: "enf-41",
  },
  {
    enunciado: "La escala de Goldberg está compuesta por:",
    opciones: [
      "Una única pregunta global",
      "Preguntas sobre la función motora",
      "Ítems de valoración del dolor",
      "Dos subescalas, una de ansiedad y otra de depresión",
    ],
    correctaIndex: 3,
    explicacion:
      "La escala de Goldberg consta de dos subescalas, una de ansiedad y otra de depresión, cada una con ítems que orientan la detección de estos problemas.",
    fuente: "Escala de Goldberg",
    dificultad: "dificil",
    temaSlug: "enf-41",
  },

  // Tema enf-42: Intervencion familiar en Salud Mental
  {
    enunciado: "La escala de Zarit se utiliza para valorar:",
    opciones: [
      "La sobrecarga de la persona cuidadora",
      "El nivel de conciencia del paciente",
      "El riesgo de úlceras por presión",
      "La intensidad del dolor",
    ],
    correctaIndex: 0,
    explicacion:
      "La escala de Zarit mide la sobrecarga percibida por la persona cuidadora informal de un paciente dependiente.",
    fuente: "Escala de sobrecarga del cuidador de Zarit",
    dificultad: "facil",
    temaSlug: "enf-42",
  },
  {
    enunciado: "La psicoeducación familiar en salud mental consiste en:",
    opciones: [
      "Ocultar información a la familia sobre la enfermedad",
      "Informar y formar a la familia sobre la enfermedad y su manejo para mejorar el afrontamiento",
      "Sustituir el tratamiento farmacológico",
      "Aislar al paciente de su entorno familiar",
    ],
    correctaIndex: 1,
    explicacion:
      "La psicoeducación proporciona a paciente y familia información y estrategias sobre el trastorno y su manejo, mejorando el afrontamiento y previniendo recaídas.",
    fuente: "Psicoeducación en salud mental",
    dificultad: "media",
    temaSlug: "enf-42",
  },
  {
    enunciado: "El término sobrecarga del cuidador hace referencia a:",
    opciones: [
      "La mejora del estado de salud del cuidador",
      "El beneficio económico de cuidar",
      "El impacto físico, psicológico y social de cuidar de forma continuada a una persona dependiente",
      "La ausencia de repercusiones al cuidar",
    ],
    correctaIndex: 2,
    explicacion:
      "La sobrecarga es el conjunto de consecuencias físicas, emocionales, sociales y económicas que soporta quien cuida de forma prolongada a una persona dependiente.",
    fuente: "Sobrecarga del cuidador",
    dificultad: "media",
    temaSlug: "enf-42",
  },
  {
    enunciado: "La adherencia terapéutica se define como:",
    opciones: [
      "El abandono del tratamiento",
      "La automedicación sin control",
      "El cumplimiento únicamente del tratamiento farmacológico",
      "El grado en que el comportamiento del paciente coincide con las recomendaciones acordadas con el profesional",
    ],
    correctaIndex: 3,
    explicacion:
      "La adherencia es el grado de coincidencia entre la conducta del paciente (medicación, dieta, hábitos) y las recomendaciones consensuadas con el profesional.",
    fuente: "Adherencia terapéutica",
    dificultad: "dificil",
    temaSlug: "enf-42",
  },
  {
    enunciado: "Una intervención para mejorar la adherencia al tratamiento es:",
    opciones: [
      "Simplificar la pauta, informar y reforzar la implicación del paciente y la familia",
      "Complicar al máximo el régimen terapéutico",
      "No explicar los efectos del tratamiento",
      "Excluir a la familia del proceso",
    ],
    correctaIndex: 0,
    explicacion:
      "Simplificar la pauta, educar sobre el tratamiento, implicar a la familia y reforzar de forma positiva son estrategias eficaces para mejorar la adherencia.",
    fuente: "Estrategias de mejora de la adherencia",
    dificultad: "facil",
    temaSlug: "enf-42",
  },
  {
    enunciado: "El apoyo a la familia del paciente con trastorno mental grave persigue:",
    opciones: [
      "Aumentar el estigma",
      "Reducir la sobrecarga, prevenir recaídas y mejorar la convivencia",
      "Sustituir al equipo de salud mental",
      "Fomentar las emociones críticas hacia el paciente",
    ],
    correctaIndex: 1,
    explicacion:
      "La intervención familiar busca reducir la sobrecarga, disminuir la emoción expresada, prevenir recaídas y mejorar la convivencia y el clima familiar.",
    fuente: "Intervención familiar en salud mental",
    dificultad: "media",
    temaSlug: "enf-42",
  },
  {
    enunciado: "Una elevada emoción expresada en la familia (críticas y hostilidad) se asocia a:",
    opciones: [
      "Una mejor evolución del paciente",
      "La ausencia de recaídas",
      "Un mayor riesgo de recaídas en el paciente con trastorno mental grave",
      "Una reducción de la sobrecarga del cuidador",
    ],
    correctaIndex: 2,
    explicacion:
      "La alta emoción expresada (crítica, hostilidad y sobreimplicación) se asocia a más recaídas; la psicoeducación familiar busca reducirla.",
    fuente: "Emoción expresada y recaídas",
    dificultad: "dificil",
    temaSlug: "enf-42",
  },
  {
    enunciado: "Una puntuación elevada en la escala de Zarit indica:",
    opciones: [
      "Ausencia de sobrecarga",
      "Buena salud del paciente",
      "Baja necesidad de apoyo",
      "Una sobrecarga intensa del cuidador",
    ],
    correctaIndex: 3,
    explicacion:
      "Cuanto mayor es la puntuación en la escala de Zarit, mayor es la sobrecarga percibida por la persona cuidadora.",
    fuente: "Escala de sobrecarga del cuidador de Zarit",
    dificultad: "media",
    temaSlug: "enf-42",
  },
  {
    enunciado: "El cuidado de la persona cuidadora por parte de enfermería incluye:",
    opciones: [
      "Valorar su sobrecarga y ofrecer apoyo, información y recursos de respiro",
      "Ignorar sus necesidades de salud",
      "Aumentar sus responsabilidades sin ningún apoyo",
      "Prohibir el uso de recursos sociales",
    ],
    correctaIndex: 0,
    explicacion:
      "Cuidar al cuidador supone detectar la sobrecarga, ofrecer apoyo emocional e información y facilitar recursos de respiro y ayuda.",
    fuente: "Atención a la persona cuidadora",
    dificultad: "facil",
    temaSlug: "enf-42",
  },
  {
    enunciado: "La falta de adherencia al tratamiento en salud mental puede favorecer:",
    opciones: [
      "La curación definitiva",
      "Las recaídas y los reingresos",
      "La mejora del pronóstico",
      "La desaparición de los síntomas",
    ],
    correctaIndex: 1,
    explicacion:
      "La no adherencia es una de las principales causas de recaída y reingreso en las personas con trastorno mental grave.",
    fuente: "Adherencia en salud mental",
    dificultad: "media",
    temaSlug: "enf-42",
  },

  // Tema enf-43: Prevencion tabaco/alcohol/sustancias
  {
    enunciado: "El test de Fagerstrom mide:",
    opciones: [
      "El consumo de alcohol",
      "El riesgo cardiovascular",
      "El grado de dependencia a la nicotina",
      "El nivel de ansiedad",
    ],
    correctaIndex: 2,
    explicacion:
      "El test de Fagerstrom valora el grado de dependencia física a la nicotina, lo que ayuda a orientar el tratamiento del tabaquismo.",
    fuente: "Test de Fagerstrom",
    dificultad: "facil",
    temaSlug: "enf-43",
  },
  {
    enunciado: "El cuestionario AUDIT se utiliza para:",
    opciones: [
      "Valorar la dependencia a la nicotina",
      "Medir la glucemia",
      "Evaluar el dolor",
      "Detectar el consumo de riesgo y perjudicial de alcohol",
    ],
    correctaIndex: 3,
    explicacion:
      "El AUDIT, propuesto por la OMS, identifica el consumo de riesgo, el consumo perjudicial y la posible dependencia del alcohol.",
    fuente: "Cuestionario AUDIT",
    dificultad: "media",
    temaSlug: "enf-43",
  },
  {
    enunciado: "La intervención breve en tabaquismo o alcohol consiste en:",
    opciones: [
      "Un consejo estructurado y motivador de corta duración para promover el cambio",
      "Un ingreso hospitalario prolongado",
      "La prescripción obligatoria de fármacos",
      "La derivación inmediata a cirugía",
    ],
    correctaIndex: 0,
    explicacion:
      "La intervención breve es un consejo estructurado, motivacional y de corta duración, muy coste-efectivo para favorecer el abandono del consumo.",
    fuente: "Intervención breve",
    dificultad: "media",
    temaSlug: "enf-43",
  },
  {
    enunciado: "El consejo antitabaco mínimo que debe ofrecer el profesional a todo fumador es:",
    opciones: [
      "No mencionar nunca el tabaco",
      "Recomendar de forma clara, breve y personalizada dejar de fumar y ofrecer ayuda",
      "Recomendar reducir a la mitad sin dejar de fumar",
      "Esperar a que el paciente lo solicite",
    ],
    correctaIndex: 1,
    explicacion:
      "El consejo breve, claro y personalizado a todo fumador para que deje de fumar, ofreciéndole ayuda, aumenta las probabilidades de abandono.",
    fuente: "Consejo antitabaco",
    dificultad: "facil",
    temaSlug: "enf-43",
  },
  {
    enunciado: "Las estrategias de reducción de daños en drogodependencias tienen como objetivo:",
    opciones: [
      "Conseguir siempre la abstinencia inmediata",
      "Penalizar al consumidor",
      "Reducir los riesgos y consecuencias negativas del consumo, aunque este continúe",
      "Aumentar el consumo de sustancias",
    ],
    correctaIndex: 2,
    explicacion:
      "La reducción de daños busca minimizar las consecuencias negativas del consumo (infecciones, sobredosis) sin exigir la abstinencia como condición previa.",
    fuente: "Reducción de daños",
    dificultad: "dificil",
    temaSlug: "enf-43",
  },
  {
    enunciado: "Un ejemplo de programa de reducción de daños es:",
    opciones: [
      "La prohibición total sin alternativas",
      "La retirada de todos los recursos sanitarios",
      "El aislamiento del consumidor",
      "Los programas de intercambio de jeringuillas y de mantenimiento con metadona",
    ],
    correctaIndex: 3,
    explicacion:
      "Los programas de intercambio de jeringuillas y los tratamientos sustitutivos con metadona son ejemplos clásicos de reducción de daños.",
    fuente: "Programas de reducción de daños",
    dificultad: "media",
    temaSlug: "enf-43",
  },
  {
    enunciado: "El síndrome de abstinencia se produce por:",
    opciones: [
      "La interrupción o reducción del consumo en una persona con dependencia",
      "El primer contacto con la sustancia",
      "El aumento progresivo del consumo",
      "La ausencia total de consumo previo",
    ],
    correctaIndex: 0,
    explicacion:
      "El síndrome de abstinencia aparece al cesar o reducir el consumo en una persona que ha desarrollado dependencia a la sustancia.",
    fuente: "Dependencia y abstinencia",
    dificultad: "media",
    temaSlug: "enf-43",
  },
  {
    enunciado: "La entrevista motivacional en el abordaje de las adicciones busca:",
    opciones: [
      "Imponer la decisión de abandonar el consumo",
      "Ayudar al paciente a explorar y resolver su ambivalencia para favorecer el cambio",
      "Juzgar y culpabilizar al paciente",
      "Ofrecer información sin escuchar al paciente",
    ],
    correctaIndex: 1,
    explicacion:
      "La entrevista motivacional es un estilo colaborativo que ayuda a la persona a resolver su ambivalencia y a reforzar su motivación para el cambio.",
    fuente: "Entrevista motivacional",
    dificultad: "facil",
    temaSlug: "enf-43",
  },
  {
    enunciado:
      "Según el modelo de Prochaska y DiClemente, una persona que aún no se plantea cambiar su consumo está en la fase de:",
    opciones: ["Acción", "Mantenimiento", "Precontemplación", "Preparación"],
    correctaIndex: 2,
    explicacion:
      "En la precontemplación la persona todavía no considera el cambio; después evoluciona a contemplación, preparación, acción y mantenimiento.",
    fuente: "Modelo transteórico del cambio",
    dificultad: "media",
    temaSlug: "enf-43",
  },
  {
    enunciado: "Una puntuación elevada en el test de Fagerstrom indica:",
    opciones: [
      "Ausencia de dependencia",
      "Consumo social ocasional",
      "Dependencia leve del alcohol",
      "Una dependencia alta a la nicotina",
    ],
    correctaIndex: 3,
    explicacion:
      "A mayor puntuación en el test de Fagerstrom, mayor es la dependencia física a la nicotina, lo que orienta la intensidad del tratamiento.",
    fuente: "Test de Fagerstrom",
    dificultad: "dificil",
    temaSlug: "enf-43",
  },

  // Tema enf-44: Urgencia y emergencia
  {
    enunciado: "El teléfono de emergencias sanitarias de Andalucía, gestionado por EPES, es el:",
    opciones: ["061", "010", "016", "060"],
    correctaIndex: 0,
    explicacion:
      "La Empresa Pública de Emergencias Sanitarias (EPES) gestiona el 061, teléfono de las emergencias sanitarias de Andalucía, coordinado con el 112.",
    fuente: "EPES 061",
    dificultad: "facil",
    temaSlug: "enf-44",
  },
  {
    enunciado:
      "En la reanimación cardiopulmonar básica del adulto, la relación compresiones-ventilaciones recomendada por el ERC es:",
    opciones: ["15:2", "30:2", "5:1", "10:2"],
    correctaIndex: 1,
    explicacion:
      "El Consejo Europeo de Resucitación recomienda en el soporte vital básico del adulto una relación de 30 compresiones por cada 2 ventilaciones.",
    fuente: "Recomendaciones ERC de soporte vital básico",
    dificultad: "media",
    temaSlug: "enf-44",
  },
  {
    enunciado: "La frecuencia de las compresiones torácicas en la RCP del adulto debe ser de:",
    opciones: ["40-60 por minuto", "150-180 por minuto", "100-120 por minuto", "60-80 por minuto"],
    correctaIndex: 2,
    explicacion:
      "El ERC recomienda comprimir el tórax a un ritmo de 100 a 120 compresiones por minuto, con una profundidad de 5 a 6 cm.",
    fuente: "Recomendaciones ERC de soporte vital básico",
    dificultad: "media",
    temaSlug: "enf-44",
  },
  {
    enunciado: "El desfibrilador externo automatizado (DEA) está indicado en:",
    opciones: [
      "La asistolia",
      "La actividad eléctrica sin pulso",
      "Cualquier parada con pulso presente",
      "Ritmos desfibrilables como la fibrilación ventricular y la taquicardia ventricular sin pulso",
    ],
    correctaIndex: 3,
    explicacion:
      "La desfibrilación es eficaz en los ritmos desfibrilables (fibrilación ventricular y taquicardia ventricular sin pulso); la asistolia y la actividad eléctrica sin pulso no lo son.",
    fuente: "Desfibrilación (ERC)",
    dificultad: "facil",
    temaSlug: "enf-44",
  },
  {
    enunciado:
      "Ante una parada cardiorrespiratoria en un adulto, tras comprobar la inconsciencia y la ausencia de respiración normal, lo primero es:",
    opciones: [
      "Alertar al sistema de emergencias e iniciar las compresiones torácicas",
      "Administrar agua",
      "Buscar antecedentes clínicos",
      "Esperar la llegada del médico sin actuar",
    ],
    correctaIndex: 0,
    explicacion:
      "La cadena de supervivencia exige alertar precozmente al sistema de emergencias e iniciar de inmediato las compresiones torácicas de calidad.",
    fuente: "Cadena de supervivencia (ERC)",
    dificultad: "media",
    temaSlug: "enf-44",
  },
  {
    enunciado: "El triaje en un servicio de urgencias tiene como finalidad:",
    opciones: [
      "Atender por orden de llegada sin ninguna excepción",
      "Clasificar a los pacientes según la gravedad y priorizar su atención",
      "Registrar únicamente los datos administrativos",
      "Dar el alta a los pacientes",
    ],
    correctaIndex: 1,
    explicacion:
      "El triaje clasifica a los pacientes según su gravedad y nivel de urgencia para priorizar la atención, no según el orden de llegada.",
    fuente: "Triaje en urgencias",
    dificultad: "media",
    temaSlug: "enf-44",
  },
  {
    enunciado: "La profundidad recomendada de las compresiones torácicas en el adulto es de:",
    opciones: ["1-2 cm", "8-10 cm", "5-6 cm", "3-4 cm"],
    correctaIndex: 2,
    explicacion:
      "El ERC recomienda una profundidad de compresión de 5 a 6 cm, permitiendo la reexpansión completa del tórax entre compresiones.",
    fuente: "Recomendaciones ERC de soporte vital básico",
    dificultad: "media",
    temaSlug: "enf-44",
  },
  {
    enunciado:
      "Muchos sistemas de triaje hospitalario estructurado (como el Manchester) clasifican a los pacientes en:",
    opciones: [
      "Dos niveles de prioridad",
      "Diez niveles de prioridad",
      "Un único nivel",
      "Cinco niveles de prioridad",
    ],
    correctaIndex: 3,
    explicacion:
      "Los sistemas de triaje estructurado, como el Manchester o el Sistema Español de Triaje, emplean cinco niveles de prioridad identificados por colores.",
    fuente: "Sistemas de triaje estructurado",
    dificultad: "dificil",
    temaSlug: "enf-44",
  },
  {
    enunciado: "El soporte vital básico (SVB) se caracteriza por:",
    opciones: [
      "Realizarse sin equipamiento especializado, basado en compresiones y ventilaciones",
      "Requerir siempre fármacos intravenosos",
      "Necesitar un quirófano",
      "Poder realizarlo únicamente un médico",
    ],
    correctaIndex: 0,
    explicacion:
      "El soporte vital básico no precisa material avanzado; el soporte vital avanzado añade fármacos, manejo avanzado de la vía aérea y monitorización.",
    fuente: "Soporte vital básico y avanzado",
    dificultad: "facil",
    temaSlug: "enf-44",
  },
  {
    enunciado: "En la desfibrilación, resulta fundamental para la supervivencia:",
    opciones: [
      "Retrasar la descarga varios minutos",
      "Realizarla lo más precozmente posible, minimizando las interrupciones de las compresiones",
      "Suspender por completo las compresiones durante toda la reanimación",
      "Aplicarla solo tras 20 minutos de reanimación",
    ],
    correctaIndex: 1,
    explicacion:
      "La desfibrilación precoz es determinante en los ritmos desfibrilables; deben minimizarse las pausas de las compresiones antes y después de la descarga.",
    fuente: "Desfibrilación precoz (ERC)",
    dificultad: "dificil",
    temaSlug: "enf-44",
  },

  // Tema enf-45: Situaciones criticas
  {
    enunciado:
      "En la atención inicial al politraumatizado, el orden de prioridades sigue la secuencia:",
    opciones: [
      "DECBA",
      "BADCE",
      "ABCDE (vía aérea, respiración, circulación, valoración neurológica y exposición)",
      "CABDE por orden inverso",
    ],
    correctaIndex: 2,
    explicacion:
      "La valoración primaria del politraumatizado sigue la secuencia ABCDE: vía aérea, respiración, circulación, valoración neurológica y exposición.",
    fuente: "Atención inicial al politraumatizado (ABCDE)",
    dificultad: "facil",
    temaSlug: "enf-45",
  },
  {
    enunciado: "En la secuencia ABCDE del politraumatizado, la letra A hace referencia a:",
    opciones: [
      "La circulación",
      "La exposición del paciente",
      "La valoración neurológica",
      "El control de la vía aérea con inmovilización cervical",
    ],
    correctaIndex: 3,
    explicacion:
      "La A corresponde a la vía aérea (Airway): su apertura y mantenimiento con control e inmovilización de la columna cervical.",
    fuente: "Atención inicial al politraumatizado (ABCDE)",
    dificultad: "media",
    temaSlug: "enf-45",
  },
  {
    enunciado: "La regla de los nueve de Wallace se utiliza para:",
    opciones: [
      "Estimar la superficie corporal quemada",
      "Calcular la dosis de analgésicos",
      "Valorar el nivel de conciencia",
      "Medir la tensión arterial",
    ],
    correctaIndex: 0,
    explicacion:
      "La regla de los nueve permite estimar el porcentaje de superficie corporal quemada dividiendo el cuerpo en regiones del 9% o sus múltiplos.",
    fuente: "Regla de los nueve de Wallace",
    dificultad: "media",
    temaSlug: "enf-45",
  },
  {
    enunciado: "El shock se define como:",
    opciones: [
      "Un aumento del gasto cardiaco sin repercusión",
      "Un estado de hipoperfusión tisular que compromete el aporte de oxígeno a los tejidos",
      "Una elevación mantenida de la tensión arterial",
      "Una infección localizada sin repercusión sistémica",
    ],
    correctaIndex: 1,
    explicacion:
      "El shock es un fallo circulatorio agudo con hipoperfusión de los tejidos y aporte insuficiente de oxígeno para cubrir sus necesidades metabólicas.",
    fuente: "Shock",
    dificultad: "media",
    temaSlug: "enf-45",
  },
  {
    enunciado: "El código ictus tiene como objetivo:",
    opciones: [
      "Retrasar la atención del paciente",
      "Tratar al paciente únicamente en el domicilio",
      "Identificar y trasladar con rapidez al paciente con sospecha de ictus para un tratamiento precoz",
      "Evitar el traslado hospitalario",
    ],
    correctaIndex: 2,
    explicacion:
      "El código ictus activa un circuito de identificación y traslado rápidos para aplicar el tratamiento dentro de la ventana terapéutica y reducir las secuelas.",
    fuente: "Código ictus",
    dificultad: "facil",
    temaSlug: "enf-45",
  },
  {
    enunciado: "En el shock hipovolémico, la causa principal es:",
    opciones: [
      "Una infección generalizada",
      "Un fallo de la bomba cardiaca",
      "Una reacción alérgica grave",
      "La pérdida de volumen sanguíneo o de líquidos",
    ],
    correctaIndex: 3,
    explicacion:
      "El shock hipovolémico se debe a la pérdida de volumen (hemorragia o deshidratación); el séptico a una infección, el cardiogénico a un fallo de bomba y el anafiláctico a una alergia grave.",
    fuente: "Tipos de shock",
    dificultad: "dificil",
    temaSlug: "enf-45",
  },
  {
    enunciado:
      "El triaje START, en incidentes con múltiples víctimas, clasifica a los pacientes mediante:",
    opciones: [
      "Códigos de color según la gravedad y la prioridad de atención",
      "El orden alfabético de los apellidos",
      "La edad exclusivamente",
      "El orden de llegada",
    ],
    correctaIndex: 0,
    explicacion:
      "El triaje START clasifica a las víctimas con códigos de color (rojo, amarillo, verde y negro) según la gravedad para priorizar la atención en catástrofes.",
    fuente: "Triaje START",
    dificultad: "media",
    temaSlug: "enf-45",
  },
  {
    enunciado: "En el triaje de catástrofes, el color negro identifica al paciente:",
    opciones: [
      "Leve que puede caminar",
      "Fallecido o sin posibilidades de supervivencia",
      "Que precisa atención inmediata",
      "Que puede esperar a ser atendido",
    ],
    correctaIndex: 1,
    explicacion:
      "En el triaje de catástrofes el negro identifica al fallecido o inviable, el rojo al que precisa atención inmediata, el amarillo al diferible y el verde al leve.",
    fuente: "Triaje START",
    dificultad: "facil",
    temaSlug: "enf-45",
  },
  {
    enunciado:
      "Una de las escalas utilizadas para reconocer con rapidez los signos de un ictus es:",
    opciones: [
      "La escala de Norton",
      "La escala de Braden",
      "La escala prehospitalaria de Cincinnati",
      "La escala de Glasgow del dolor",
    ],
    correctaIndex: 2,
    explicacion:
      "La escala prehospitalaria de Cincinnati valora la asimetría facial, la debilidad en un brazo y la alteración del habla para reconocer con rapidez el ictus.",
    fuente: "Escala prehospitalaria de Cincinnati",
    dificultad: "media",
    temaSlug: "enf-45",
  },
  {
    enunciado:
      "Según la regla de los nueve en el adulto, la superficie de un miembro inferior completo representa aproximadamente:",
    opciones: ["El 4,5%", "El 27%", "El 9%", "El 18%"],
    correctaIndex: 3,
    explicacion:
      "En el adulto, cada miembro inferior representa el 18% (9% en su cara anterior y 9% en la posterior); la cabeza y cada miembro superior suponen el 9%.",
    fuente: "Regla de los nueve de Wallace",
    dificultad: "dificil",
    temaSlug: "enf-45",
  },
];
