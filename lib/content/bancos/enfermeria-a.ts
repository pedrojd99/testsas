import type { SeedPregunta } from "../tipos";

export const BANCO_ENFERMERIA_A: SeedPregunta[] = [
  // ---------------------------------------------------------------------------
  // Tema enf-10: Organizacion sanitaria III
  // ---------------------------------------------------------------------------
  {
    enunciado:
      "El Biobanco del Sistema Sanitario Público de Andalucía es una organización sin ánimo de lucro cuya finalidad principal es:",
    opciones: [
      "Custodiar y gestionar muestras biológicas de origen humano con fines de investigación biomédica",
      "Fabricar y distribuir medicamentos hemoderivados",
      "Realizar trasplantes de órganos y tejidos",
      "Gestionar las listas de espera quirúrgicas",
    ],
    correctaIndex: 0,
    explicacion:
      "Un biobanco es una colección organizada de muestras biológicas humanas destinada a la investigación biomédica, sin ánimo de lucro.",
    fuente: "Ley 14/2007 de Investigación biomédica",
    dificultad: "facil",
    temaSlug: "enf-10",
  },
  {
    enunciado:
      "El modelo de atención a la salud mental en Andalucía se caracteriza principalmente por ser:",
    opciones: [
      "Hospitalario y centrado en el internamiento psiquiátrico prolongado",
      "Comunitario, integrado en la red sanitaria general y orientado a la recuperación",
      "Exclusivamente ambulatorio y de gestión privada",
      "Gestionado íntegramente por los ayuntamientos",
    ],
    correctaIndex: 1,
    explicacion:
      "Tras la reforma psiquiátrica, Andalucía adoptó un modelo comunitario, integrado en la red sanitaria general y orientado a la recuperación e integración social.",
    fuente: "Plan Integral de Salud Mental de Andalucía",
    dificultad: "media",
    temaSlug: "enf-10",
  },
  {
    enunciado:
      "El dispositivo básico de referencia y puerta de entrada a la atención especializada de salud mental en Andalucía es:",
    opciones: [
      "La Unidad de Hospitalización de Salud Mental",
      "La Comunidad Terapéutica",
      "La Unidad de Salud Mental Comunitaria (USMC)",
      "El Hospital de Día de Salud Mental",
    ],
    correctaIndex: 2,
    explicacion:
      "La USMC es el dispositivo básico de atención especializada de salud mental y coordina el resto de dispositivos de su área.",
    fuente: "Decreto 77/2008 de ordenación de servicios de salud mental",
    dificultad: "media",
    temaSlug: "enf-10",
  },
  {
    enunciado: "Entre las agencias públicas empresariales sanitarias de Andalucía se encuentra:",
    opciones: [
      "El Instituto de Salud Carlos III",
      "La Agencia Española de Medicamentos y Productos Sanitarios",
      "El Consejo Interterritorial del SNS",
      "La Empresa Pública de Emergencias Sanitarias (EPES-061)",
    ],
    correctaIndex: 3,
    explicacion:
      "La EPES, que gestiona el 061, es una agencia pública empresarial dependiente de la Junta de Andalucía.",
    fuente: "Ley 9/2007 de la Administración de la Junta de Andalucía",
    dificultad: "media",
    temaSlug: "enf-10",
  },
  {
    enunciado: "Un consorcio sanitario, como fórmula organizativa, se caracteriza por:",
    opciones: [
      "Ser una entidad de derecho público creada por varias administraciones o entidades para gestionar servicios de interés común",
      "Ser una sociedad mercantil con ánimo de lucro participada solo por capital privado",
      "Depender exclusivamente del Ministerio de Sanidad",
      "Carecer de personalidad jurídica propia",
    ],
    correctaIndex: 0,
    explicacion:
      "El consorcio es una entidad pública de carácter asociativo, con personalidad jurídica propia, constituida por administraciones o entidades para fines comunes.",
    fuente: "Ley 40/2015, arts. 118 y siguientes",
    dificultad: "dificil",
    temaSlug: "enf-10",
  },
  {
    enunciado:
      "Las antiguas empresas públicas hospitalarias de Andalucía (como el Hospital de Poniente o el Alto Guadalquivir) adoptaron posteriormente la forma de:",
    opciones: [
      "Fundaciones privadas",
      "Agencias públicas empresariales sanitarias",
      "Consorcios internacionales",
      "Mutuas colaboradoras con la Seguridad Social",
    ],
    correctaIndex: 1,
    explicacion:
      "Estas entidades se transformaron en agencias públicas empresariales sanitarias dentro de la organización del SSPA.",
    fuente: "Ley 9/2007 de la Administración de la Junta de Andalucía",
    dificultad: "media",
    temaSlug: "enf-10",
  },
  {
    enunciado: "La Empresa Pública de Emergencias Sanitarias (EPES) gestiona principalmente:",
    opciones: [
      "La atención primaria programada",
      "Los biobancos de investigación biomédica",
      "El teléfono de emergencias sanitarias 061 y el transporte sanitario urgente",
      "La formación continuada del personal estatutario",
    ],
    correctaIndex: 2,
    explicacion:
      "La EPES es responsable de la atención a las urgencias y emergencias sanitarias a través del teléfono 061.",
    fuente: "EPES-061, Junta de Andalucía",
    dificultad: "facil",
    temaSlug: "enf-10",
  },
  {
    enunciado: "La Comunidad Terapéutica de Salud Mental está destinada a:",
    opciones: [
      "Las urgencias psiquiátricas de menos de 24 horas",
      "La atención exclusiva a la población infantil",
      "Las consultas externas de primera visita",
      "El tratamiento intensivo en régimen de hospitalización parcial o completa de media estancia",
    ],
    correctaIndex: 3,
    explicacion:
      "La Comunidad Terapéutica ofrece tratamiento intensivo y rehabilitador de media estancia a pacientes que precisan un abordaje prolongado.",
    fuente: "Decreto 77/2008 de ordenación de servicios de salud mental",
    dificultad: "media",
    temaSlug: "enf-10",
  },
  {
    enunciado:
      "Para incorporar muestras biológicas a un biobanco con fines de investigación se requiere, con carácter general:",
    opciones: [
      "El consentimiento informado del sujeto fuente y el informe favorable del comité de ética",
      "Únicamente la autorización verbal del médico responsable",
      "La aprobación del gerente del hospital",
      "El pago de una tasa por parte del investigador",
    ],
    correctaIndex: 0,
    explicacion:
      "La Ley 14/2007 exige el consentimiento informado del donante y el informe favorable del comité de ética de la investigación.",
    fuente: "Ley 14/2007 de Investigación biomédica",
    dificultad: "dificil",
    temaSlug: "enf-10",
  },
  {
    enunciado:
      "La atención especializada en salud mental a menores en Andalucía se presta a través de:",
    opciones: [
      "Las Comunidades Terapéuticas de adultos",
      "Las Unidades de Salud Mental Infanto-Juvenil (USMIJ)",
      "Los centros de salud de atención primaria únicamente",
      "Los hospitales de día de adultos",
    ],
    correctaIndex: 1,
    explicacion:
      "Las USMIJ son los dispositivos específicos para la atención a la salud mental de la población infantil y adolescente.",
    fuente: "Decreto 77/2008 de ordenación de servicios de salud mental",
    dificultad: "media",
    temaSlug: "enf-10",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-11: Calidad
  // ---------------------------------------------------------------------------
  {
    enunciado: "Las siglas ACSA en el ámbito de la calidad sanitaria andaluza corresponden a:",
    opciones: [
      "Agencia Central de Seguros de Andalucía",
      "Asociación de Centros Sanitarios Andaluces",
      "Agencia de Calidad Sanitaria de Andalucía",
      "Auditoría Clínica del Sistema Andaluz",
    ],
    correctaIndex: 2,
    explicacion:
      "La ACSA es la Agencia de Calidad Sanitaria de Andalucía, integrada en la Fundación Progreso y Salud.",
    fuente: "Agencia de Calidad Sanitaria de Andalucía",
    dificultad: "facil",
    temaSlug: "enf-11",
  },
  {
    enunciado: "La principal función de la Agencia de Calidad Sanitaria de Andalucía (ACSA) es:",
    opciones: [
      "Contratar al personal estatutario",
      "Fijar los presupuestos hospitalarios",
      "Gestionar la atención a las urgencias 061",
      "Gestionar los programas de acreditación de centros, unidades y profesionales",
    ],
    correctaIndex: 3,
    explicacion:
      "La ACSA desarrolla y gestiona los programas de acreditación de la calidad de centros, unidades, profesionales y formación.",
    fuente: "Agencia de Calidad Sanitaria de Andalucía",
    dificultad: "media",
    temaSlug: "enf-11",
  },
  {
    enunciado: "En seguridad del paciente, se denomina evento adverso (o efecto adverso) a:",
    opciones: [
      "El daño no intencionado causado al paciente por la asistencia sanitaria y no por su enfermedad de base",
      "Cualquier síntoma propio de la enfermedad del paciente",
      "Una reacción alérgica prevista y documentada",
      "El retraso administrativo en la asignación de una cita",
    ],
    correctaIndex: 0,
    explicacion:
      "El evento adverso es el daño derivado de la atención sanitaria, no de la propia enfermedad del paciente.",
    fuente: "Estrategia de Seguridad del Paciente del SSPA",
    dificultad: "media",
    temaSlug: "enf-11",
  },
  {
    enunciado:
      "Una de las prácticas seguras recomendadas para evitar errores es identificar a cada paciente con, al menos:",
    opciones: [
      "Un único dato: el número de cama",
      "Dos identificadores, por ejemplo el nombre completo y la fecha de nacimiento",
      "El diagnóstico médico principal",
      "El nombre del facultativo responsable",
    ],
    correctaIndex: 1,
    explicacion:
      "La identificación inequívoca requiere al menos dos identificadores; el número de cama no es válido por ser fácilmente intercambiable.",
    fuente: "Estrategia de Seguridad del Paciente del SSPA",
    dificultad: "media",
    temaSlug: "enf-11",
  },
  {
    enunciado: "La estrategia de la OMS para la higiene de manos en la asistencia establece:",
    opciones: [
      "Tres momentos para la higiene de manos",
      "Cuatro momentos para la higiene de manos",
      "Cinco momentos para la higiene de manos",
      "Siete momentos para la higiene de manos",
    ],
    correctaIndex: 2,
    explicacion:
      "La OMS define los cinco momentos de la higiene de manos como práctica clave para prevenir la infección asociada a la asistencia.",
    fuente: "OMS, Higiene de manos",
    dificultad: "facil",
    temaSlug: "enf-11",
  },
  {
    enunciado:
      "Los sistemas de notificación de incidentes de seguridad del paciente se caracterizan, preferentemente, por ser:",
    opciones: [
      "Punitivos y nominativos",
      "Obligatorios y con sanción económica",
      "De acceso público sin restricciones",
      "Voluntarios, anónimos o confidenciales, y no punitivos",
    ],
    correctaIndex: 3,
    explicacion:
      "Una cultura no punitiva favorece la notificación y el aprendizaje; por eso estos sistemas suelen ser voluntarios, confidenciales y no sancionadores.",
    fuente: "Estrategia de Seguridad del Paciente del SSPA",
    dificultad: "dificil",
    temaSlug: "enf-11",
  },
  {
    enunciado:
      "El Plan de Calidad del Sistema Sanitario Público de Andalucía se orienta fundamentalmente hacia:",
    opciones: [
      "El ciudadano, la mejora continua y la práctica basada en la evidencia",
      "La reducción de plantilla como único objetivo",
      "La privatización de los servicios asistenciales",
      "El aumento del gasto farmacéutico",
    ],
    correctaIndex: 0,
    explicacion:
      "El Plan de Calidad sitúa al ciudadano en el centro y promueve la mejora continua y la práctica basada en la evidencia.",
    fuente: "Plan de Calidad del SSPA",
    dificultad: "media",
    temaSlug: "enf-11",
  },
  {
    enunciado:
      "El programa de acreditación de competencias profesionales de la ACSA reconoce distintos niveles denominados:",
    opciones: [
      "Bronce, plata y oro",
      "Avanzado, experto y excelente",
      "Básico, medio y superior",
      "Inicial, intermedio y final",
    ],
    correctaIndex: 1,
    explicacion:
      "La acreditación de competencias profesionales de la ACSA reconoce los niveles avanzado, experto y excelente.",
    fuente: "Agencia de Calidad Sanitaria de Andalucía",
    dificultad: "media",
    temaSlug: "enf-11",
  },
  {
    enunciado: "El ciclo de mejora continua de la calidad de Deming se representa con las siglas:",
    opciones: ["DAFO", "GRD", "PDCA (Planificar-Hacer-Verificar-Actuar)", "FIFO"],
    correctaIndex: 2,
    explicacion:
      "El ciclo PDCA (Plan-Do-Check-Act) de Deming estructura la mejora continua en cuatro fases que se repiten.",
    fuente: "Gestión de la calidad, ciclo de Deming",
    dificultad: "media",
    temaSlug: "enf-11",
  },
  {
    enunciado:
      "El análisis de las causas que subyacen a un evento adverso grave, buscando qué falló y por qué, se realiza habitualmente mediante:",
    opciones: [
      "Una encuesta de satisfacción del usuario",
      "Un estudio de prevalencia",
      "Una auditoría económica",
      "El análisis causa-raíz (ACR)",
    ],
    correctaIndex: 3,
    explicacion:
      "El análisis causa-raíz es una técnica reactiva que investiga los factores latentes que contribuyeron a un incidente para prevenir su repetición.",
    fuente: "Estrategia de Seguridad del Paciente del SSPA",
    dificultad: "dificil",
    temaSlug: "enf-11",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-12: Modelo de Desarrollo Profesional de Andalucía
  // ---------------------------------------------------------------------------
  {
    enunciado: "La carrera profesional del personal sanitario consiste en:",
    opciones: [
      "El derecho al reconocimiento del desarrollo profesional mediante el ascenso en niveles o grados, sin cambiar de puesto",
      "El ascenso jerárquico obligatorio a puestos directivos",
      "El cambio de categoría profesional mediante oposición",
      "El traslado forzoso entre centros del sistema",
    ],
    correctaIndex: 0,
    explicacion:
      "La carrera profesional reconoce el desarrollo del profesional con el ascenso en grados o niveles, manteniendo el mismo puesto de trabajo.",
    fuente: "Ley 44/2003, art. 37",
    dificultad: "facil",
    temaSlug: "enf-12",
  },
  {
    enunciado:
      "Al modelo de desarrollo profesional (carrera) del SSPA puede acceder, con carácter voluntario:",
    opciones: [
      "Únicamente el personal directivo",
      "El personal con vinculación al sistema y una antigüedad mínima en la categoría",
      "Solo el personal temporal eventual",
      "El personal ajeno al sistema sanitario público",
    ],
    correctaIndex: 1,
    explicacion:
      "El acceso es voluntario y requiere vinculación con el sistema y una antigüedad mínima en la categoría profesional.",
    fuente: "Modelo de Desarrollo Profesional del SSPA",
    dificultad: "media",
    temaSlug: "enf-12",
  },
  {
    enunciado:
      "Una característica del reconocimiento de un nivel de carrera profesional ya consolidado es que:",
    opciones: [
      "Se pierde automáticamente cada año",
      "Debe renovarse mediante oposición",
      "Es un reconocimiento personal e irreversible que se mantiene una vez conseguido",
      "Solo tiene efectos si se cambia de hospital",
    ],
    correctaIndex: 2,
    explicacion:
      "El nivel consolidado es un reconocimiento personal e irreversible del profesional, que no se pierde con el tiempo.",
    fuente: "Modelo de Desarrollo Profesional del SSPA",
    dificultad: "media",
    temaSlug: "enf-12",
  },
  {
    enunciado: "El reconocimiento de un nivel de carrera profesional conlleva:",
    opciones: [
      "Un traslado obligatorio de centro",
      "La pérdida de los trienios",
      "Un cambio de categoría profesional",
      "Una retribución complementaria asociada al nivel alcanzado",
    ],
    correctaIndex: 3,
    explicacion:
      "Cada nivel de carrera lleva aparejado un complemento retributivo, sin cambiar la categoría ni el puesto del profesional.",
    fuente: "Modelo de Desarrollo Profesional del SSPA",
    dificultad: "media",
    temaSlug: "enf-12",
  },
  {
    enunciado: "El acceso y el progreso en la carrera profesional se basa en:",
    opciones: [
      "La evaluación de méritos, competencias y desempeño del profesional",
      "La antigüedad exclusivamente y de forma automática",
      "El sorteo entre los solicitantes",
      "La decisión discrecional del gerente",
    ],
    correctaIndex: 0,
    explicacion:
      "El progreso se fundamenta en la evaluación objetiva de competencias, méritos y desempeño, no solo en la antigüedad.",
    fuente: "Ley 44/2003, art. 38",
    dificultad: "facil",
    temaSlug: "enf-12",
  },
  {
    enunciado: "Según la Ley 44/2003, el reconocimiento del desarrollo profesional debe ser:",
    opciones: [
      "Automático por antigüedad, sin evaluación",
      "Público, transparente y basado en la evaluación de competencias",
      "Secreto y discrecional",
      "Exclusivo del personal facultativo",
    ],
    correctaIndex: 1,
    explicacion:
      "El artículo 38 exige que el reconocimiento sea público, transparente y basado en criterios objetivos de evaluación de competencias.",
    fuente: "Ley 44/2003, art. 38",
    dificultad: "dificil",
    temaSlug: "enf-12",
  },
  {
    enunciado:
      "Un principio del desarrollo profesional en el Sistema Nacional de Salud es que los grados obtenidos:",
    opciones: [
      "No tienen validez fuera del hospital de origen",
      "Caducan al cambiar de comunidad autónoma",
      "Deben poder ser objeto de homologación y reconocimiento en el conjunto del SNS",
      "Solo valen para el personal médico",
    ],
    correctaIndex: 2,
    explicacion:
      "El desarrollo profesional persigue la homologación y el reconocimiento de los grados en el conjunto del Sistema Nacional de Salud.",
    fuente: "Ley 44/2003 y Ley 16/2003 de cohesión y calidad del SNS",
    dificultad: "media",
    temaSlug: "enf-12",
  },
  {
    enunciado: "El modelo de desarrollo profesional del SSPA está dirigido:",
    opciones: [
      "Solo a los facultativos especialistas",
      "Solo al personal de gestión y servicios",
      "Solo al personal de enfermería",
      "Al conjunto del personal del sistema sanitario público en sus distintas categorías",
    ],
    correctaIndex: 3,
    explicacion:
      "El modelo es aplicable al conjunto del personal del sistema, en todas sus categorías profesionales.",
    fuente: "Modelo de Desarrollo Profesional del SSPA",
    dificultad: "media",
    temaSlug: "enf-12",
  },
  {
    enunciado: "La finalidad última del modelo de desarrollo profesional es:",
    opciones: [
      "Mejorar la calidad asistencial reconociendo e incentivando el buen desempeño profesional",
      "Reducir el número de profesionales del sistema",
      "Sustituir a la formación continuada",
      "Eliminar las retribuciones básicas del personal",
    ],
    correctaIndex: 0,
    explicacion:
      "El modelo busca mejorar la calidad de la asistencia reconociendo e incentivando el desarrollo y el buen desempeño del profesional.",
    fuente: "Modelo de Desarrollo Profesional del SSPA",
    dificultad: "media",
    temaSlug: "enf-12",
  },
  {
    enunciado: "La incorporación del profesional al sistema de carrera profesional tiene carácter:",
    opciones: [
      "Obligatorio para todo el personal",
      "Voluntario, a solicitud del interesado",
      "Automático desde el primer día de servicio",
      "Decidido por sorteo anual",
    ],
    correctaIndex: 1,
    explicacion:
      "El acceso a la carrera profesional es voluntario y se produce a instancia del propio interesado.",
    fuente: "Modelo de Desarrollo Profesional del SSPA",
    dificultad: "facil",
    temaSlug: "enf-12",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-13: Ley 44/2003 de Ordenación de las Profesiones Sanitarias
  // ---------------------------------------------------------------------------
  {
    enunciado: "La Ley 44/2003 tiene por objeto la regulación de:",
    opciones: [
      "El Estatuto Marco del personal estatutario",
      "La autonomía del paciente y la información clínica",
      "La ordenación de las profesiones sanitarias",
      "La financiación del sistema sanitario",
    ],
    correctaIndex: 2,
    explicacion:
      "La Ley 44/2003 (LOPS) regula los aspectos básicos de la ordenación de las profesiones sanitarias.",
    fuente: "Ley 44/2003, art. 1",
    dificultad: "facil",
    temaSlug: "enf-13",
  },
  {
    enunciado:
      "Según la Ley 44/2003, entre las profesiones sanitarias tituladas del nivel de Diplomado (hoy Grado) se encuentra:",
    opciones: ["Medicina", "Farmacia", "Odontología", "Enfermería"],
    correctaIndex: 3,
    explicacion:
      "Enfermería figura entre las profesiones del nivel de Diplomados/Grado; Medicina, Farmacia y Odontología pertenecen al nivel de Licenciados.",
    fuente: "Ley 44/2003, art. 2",
    dificultad: "media",
    temaSlug: "enf-13",
  },
  {
    enunciado:
      "El acceso al título de Enfermero/a Especialista se realiza, con carácter general, a través del sistema:",
    opciones: [
      "De residencia (EIR), mediante formación en unidades docentes acreditadas",
      "De libre designación por la gerencia",
      "De concurso de méritos exclusivamente",
      "De antigüedad automática en la categoría",
    ],
    correctaIndex: 0,
    explicacion:
      "La formación de especialistas en Enfermería se realiza por el sistema de residencia (EIR) en unidades docentes acreditadas.",
    fuente: "RD 450/2005 sobre especialidades de Enfermería",
    dificultad: "media",
    temaSlug: "enf-13",
  },
  {
    enunciado: "¿Cuál de las siguientes es una especialidad de Enfermería reconocida?",
    opciones: [
      "Enfermería cardiológica",
      "Enfermería del Trabajo",
      "Enfermería digestiva",
      "Enfermería traumatológica",
    ],
    correctaIndex: 1,
    explicacion:
      "La Enfermería del Trabajo es una de las especialidades oficiales; las demás opciones no son especialidades reconocidas.",
    fuente: "RD 450/2005 sobre especialidades de Enfermería",
    dificultad: "media",
    temaSlug: "enf-13",
  },
  {
    enunciado:
      "Entre los principios generales del ejercicio de las profesiones sanitarias que establece la Ley 44/2003, NO figura:",
    opciones: [
      "La continuidad asistencial de los pacientes",
      "El trabajo en equipo interdisciplinar",
      "La libre fijación de honorarios en la sanidad pública",
      "El respeto a la autonomía del paciente",
    ],
    correctaIndex: 2,
    explicacion:
      "La ley recoge la continuidad asistencial, el trabajo en equipo y el respeto a la autonomía, pero no la libre fijación de honorarios en el ámbito público.",
    fuente: "Ley 44/2003, arts. 4 y 5",
    dificultad: "dificil",
    temaSlug: "enf-13",
  },
  {
    enunciado: "Según la Ley 44/2003, corresponde a los Diplomados en Enfermería:",
    opciones: [
      "La indicación y prescripción de todos los medicamentos sin límite",
      "El diagnóstico médico de las enfermedades",
      "La dirección de los servicios quirúrgicos",
      "La dirección, evaluación y prestación de los cuidados de enfermería",
    ],
    correctaIndex: 3,
    explicacion:
      "El artículo 7 atribuye a Enfermería la dirección, evaluación y prestación de los cuidados de enfermería orientados a la salud.",
    fuente: "Ley 44/2003, art. 7",
    dificultad: "media",
    temaSlug: "enf-13",
  },
  {
    enunciado: "Las siglas EIR corresponden a:",
    opciones: [
      "Enfermero/a Interno/a Residente",
      "Especialista Independiente Reconocido",
      "Enfermería Integral Rural",
      "Equipo de Intervención Rápida",
    ],
    correctaIndex: 0,
    explicacion:
      "EIR designa al Enfermero Interno Residente, que se forma como especialista por el sistema de residencia.",
    fuente: "Ley 44/2003, formación sanitaria especializada",
    dificultad: "facil",
    temaSlug: "enf-13",
  },
  {
    enunciado: "La Ley 44/2003 regula, además de la formación, aspectos como:",
    opciones: [
      "El régimen fiscal de las clínicas privadas",
      "El desarrollo profesional y su reconocimiento",
      "El precio de venta de los medicamentos",
      "La ordenación del territorio",
    ],
    correctaIndex: 1,
    explicacion:
      "El Título III de la ley regula el desarrollo profesional de las profesiones sanitarias y su reconocimiento.",
    fuente: "Ley 44/2003, Título III",
    dificultad: "media",
    temaSlug: "enf-13",
  },
  {
    enunciado: "El Real Decreto 450/2005 sobre especialidades de Enfermería estableció:",
    opciones: [
      "Dos especialidades",
      "Cuatro especialidades",
      "Siete especialidades",
      "Doce especialidades",
    ],
    correctaIndex: 2,
    explicacion:
      "El RD 450/2005 creó siete especialidades de Enfermería, entre ellas la Obstétrico-Ginecológica y la de Salud Mental.",
    fuente: "RD 450/2005 sobre especialidades de Enfermería",
    dificultad: "media",
    temaSlug: "enf-13",
  },
  {
    enunciado:
      "La especialidad de Enfermería que capacita para la atención al embarazo, parto y puerperio es:",
    opciones: [
      "Enfermería Geriátrica",
      "Enfermería del Trabajo",
      "Enfermería de Salud Mental",
      "Enfermería Obstétrico-Ginecológica (Matrona)",
    ],
    correctaIndex: 3,
    explicacion:
      "La especialidad Obstétrico-Ginecológica corresponde a la matrona, que atiende el embarazo, parto y puerperio.",
    fuente: "RD 450/2005 sobre especialidades de Enfermería",
    dificultad: "media",
    temaSlug: "enf-13",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-14: Derechos y garantías
  // ---------------------------------------------------------------------------
  {
    enunciado:
      "El Decreto 209/2001 garantiza en Andalucía un plazo máximo de respuesta quirúrgica de:",
    opciones: ["180 días", "60 días", "365 días", "30 días"],
    correctaIndex: 0,
    explicacion:
      "El Decreto 209/2001 fija en 180 días el plazo máximo garantizado de respuesta para las intervenciones quirúrgicas.",
    fuente: "Decreto 209/2001",
    dificultad: "media",
    temaSlug: "enf-14",
  },
  {
    enunciado: "El Decreto 127/2003 regula en Andalucía el derecho a:",
    opciones: [
      "La libre elección de hospital privado",
      "La segunda opinión médica",
      "La prestación de la eutanasia",
      "El copago farmacéutico",
    ],
    correctaIndex: 1,
    explicacion:
      "El Decreto 127/2003 regula el ejercicio del derecho a la segunda opinión médica en el SSPA.",
    fuente: "Decreto 127/2003",
    dificultad: "media",
    temaSlug: "enf-14",
  },
  {
    enunciado:
      "El derecho a formular la declaración de voluntad vital anticipada en Andalucía está amparado, entre otras normas, por:",
    opciones: [
      "El Decreto 209/2001",
      "La Ley 44/2003",
      "La Ley 2/2010 de derechos y garantías de la dignidad en el proceso de la muerte",
      "La Ley 55/2003",
    ],
    correctaIndex: 2,
    explicacion:
      "La Ley 2/2010 regula la dignidad en el proceso de la muerte y contempla el respeto a la voluntad vital anticipada.",
    fuente: "Ley 2/2010",
    dificultad: "media",
    temaSlug: "enf-14",
  },
  {
    enunciado: "El derecho a la segunda opinión médica se reconoce especialmente en procesos:",
    opciones: [
      "Administrativos de facturación",
      "De baja laboral por proceso común leve",
      "De vacunación infantil rutinaria",
      "Graves, como enfermedades degenerativas o neoplasias, entre otros supuestos",
    ],
    correctaIndex: 3,
    explicacion:
      "El decreto reserva la segunda opinión para determinados procesos graves definidos, como enfermedades degenerativas o neoplásicas.",
    fuente: "Decreto 127/2003",
    dificultad: "media",
    temaSlug: "enf-14",
  },
  {
    enunciado: "La declaración de voluntad vital anticipada puede otorgarla:",
    opciones: [
      "Toda persona mayor de edad, capaz y libre",
      "Únicamente las personas con enfermedad terminal",
      "Solo las personas mayores de 65 años",
      "Exclusivamente el personal sanitario",
    ],
    correctaIndex: 0,
    explicacion:
      "Puede otorgarla cualquier persona mayor de edad, capaz y que actúe libremente, no solo pacientes terminales.",
    fuente: "Ley 5/2003 de declaración de voluntad vital anticipada",
    dificultad: "facil",
    temaSlug: "enf-14",
  },
  {
    enunciado:
      "Para que la voluntad vital anticipada sea eficaz y accesible a los profesionales, debe:",
    opciones: [
      "Publicarse en el BOJA",
      "Inscribirse en el Registro de Voluntades Vitales Anticipadas",
      "Comunicarse solo verbalmente al médico",
      "Renovarse cada mes",
    ],
    correctaIndex: 1,
    explicacion:
      "La inscripción en el Registro de Voluntades Vitales Anticipadas permite que los profesionales puedan conocer y aplicar la declaración.",
    fuente: "Ley 5/2003 y Registro de Voluntades Vitales Anticipadas",
    dificultad: "media",
    temaSlug: "enf-14",
  },
  {
    enunciado:
      "Si se supera el plazo máximo de respuesta quirúrgica garantizado, el paciente tiene derecho a:",
    opciones: [
      "Una indemnización económica de cuantía fija",
      "Renunciar automáticamente a la intervención",
      "Ser intervenido en un centro sanitario alternativo con cargo al sistema público",
      "Cambiar de médico de familia",
    ],
    correctaIndex: 2,
    explicacion:
      "Superado el plazo garantizado, el paciente puede ser intervenido en un centro alternativo con cargo al Servicio Andaluz de Salud.",
    fuente: "Decreto 209/2001",
    dificultad: "media",
    temaSlug: "enf-14",
  },
  {
    enunciado: "En la declaración de voluntad vital anticipada, la persona puede designar:",
    opciones: [
      "Un heredero universal de sus bienes",
      "Un abogado defensor",
      "Un tutor judicial obligatorio",
      "Un representante que decida en su nombre cuando no pueda expresarse",
    ],
    correctaIndex: 3,
    explicacion:
      "La declaración permite designar a un representante que interprete y haga valer la voluntad de la persona cuando esta no pueda expresarse.",
    fuente: "Ley 5/2003 de declaración de voluntad vital anticipada",
    dificultad: "facil",
    temaSlug: "enf-14",
  },
  {
    enunciado: "La declaración de voluntad vital anticipada:",
    opciones: [
      "Puede modificarse, sustituirse o revocarse en cualquier momento por la persona otorgante",
      "Es irrevocable una vez inscrita en el registro",
      "Solo puede revocarla un juez",
      "Caduca automáticamente a los cinco años",
    ],
    correctaIndex: 0,
    explicacion:
      "La declaración es esencialmente revocable: puede modificarse, sustituirse o dejarse sin efecto en cualquier momento.",
    fuente: "Ley 5/2003 de declaración de voluntad vital anticipada",
    dificultad: "media",
    temaSlug: "enf-14",
  },
  {
    enunciado: "No se aplicarán las instrucciones de una voluntad vital anticipada cuando:",
    opciones: [
      "El paciente esté plenamente consciente y pueda decidir por sí mismo",
      "Sean contrarias al ordenamiento jurídico o a la buena práctica clínica (lex artis)",
      "Hayan transcurrido más de dos años desde su firma",
      "El paciente sea mayor de 80 años",
    ],
    correctaIndex: 1,
    explicacion:
      "No se aplican las instrucciones contrarias al ordenamiento jurídico ni las que no se correspondan con la buena práctica clínica.",
    fuente: "Ley 5/2003 y Ley 41/2002",
    dificultad: "media",
    temaSlug: "enf-14",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-15: Responsabilidad patrimonial de las Administraciones Públicas
  // ---------------------------------------------------------------------------
  {
    enunciado: "La responsabilidad patrimonial de la Administración es la obligación de:",
    opciones: [
      "Sancionar a los funcionarios negligentes",
      "Cobrar tasas por los servicios prestados",
      "Indemnizar a los particulares por las lesiones que sufran en sus bienes y derechos a consecuencia del funcionamiento de los servicios públicos",
      "Revisar de oficio sus propios actos",
    ],
    correctaIndex: 2,
    explicacion:
      "Los particulares tienen derecho a ser indemnizados por toda lesión en sus bienes o derechos derivada del funcionamiento de los servicios públicos.",
    fuente: "Ley 40/2015, art. 32",
    dificultad: "facil",
    temaSlug: "enf-15",
  },
  {
    enunciado: "La responsabilidad patrimonial de la Administración tiene carácter:",
    opciones: [
      "Penal",
      "Disciplinario",
      "Subjetivo, exigiendo siempre dolo o culpa del funcionario",
      "Objetivo y directo, con independencia de que el funcionamiento del servicio sea normal o anormal",
    ],
    correctaIndex: 3,
    explicacion:
      "Es una responsabilidad objetiva y directa: procede tanto por funcionamiento normal como anormal, sin necesidad de probar culpa.",
    fuente: "Ley 40/2015, art. 32",
    dificultad: "media",
    temaSlug: "enf-15",
  },
  {
    enunciado: "El derecho a reclamar la responsabilidad patrimonial prescribe al cabo de:",
    opciones: [
      "Un año desde el hecho o desde la manifestación o estabilización del daño",
      "Seis meses",
      "Tres años",
      "Cinco años",
    ],
    correctaIndex: 0,
    explicacion:
      "El plazo de prescripción es de un año, computado desde el hecho lesivo o desde la estabilización de las secuelas.",
    fuente: "Ley 39/2015, art. 67",
    dificultad: "media",
    temaSlug: "enf-15",
  },
  {
    enunciado: "Para que exista responsabilidad patrimonial, el daño debe ser:",
    opciones: [
      "Un daño moral no evaluable económicamente",
      "Efectivo, evaluable económicamente e individualizado, y antijurídico, es decir, que el particular no tenga el deber jurídico de soportarlo",
      "Hipotético o futuro e incierto",
      "Un daño que el particular tenga el deber jurídico de soportar",
    ],
    correctaIndex: 1,
    explicacion:
      "El daño ha de ser efectivo, evaluable e individualizado, y antijurídico: el particular no debe tener el deber jurídico de soportarlo.",
    fuente: "Ley 40/2015, art. 32",
    dificultad: "media",
    temaSlug: "enf-15",
  },
  {
    enunciado: "No procede la responsabilidad patrimonial cuando el daño se deba a:",
    opciones: [
      "El funcionamiento anormal del servicio",
      "Un error de diagnóstico evitable",
      "Fuerza mayor",
      "El funcionamiento normal del servicio",
    ],
    correctaIndex: 2,
    explicacion:
      "La fuerza mayor exonera de responsabilidad; el funcionamiento normal o anormal del servicio, en cambio, puede generarla.",
    fuente: "Ley 40/2015, art. 32.1",
    dificultad: "dificil",
    temaSlug: "enf-15",
  },
  {
    enunciado: "Además del daño antijurídico, la responsabilidad patrimonial exige:",
    opciones: [
      "Una sentencia penal condenatoria previa",
      "La existencia de dolo probado del empleado",
      "Una denuncia previa ante la policía",
      "Una relación de causalidad entre el funcionamiento del servicio y la lesión",
    ],
    correctaIndex: 3,
    explicacion:
      "Es imprescindible el nexo causal entre el funcionamiento del servicio público y la lesión producida.",
    fuente: "Ley 40/2015, art. 32",
    dificultad: "media",
    temaSlug: "enf-15",
  },
  {
    enunciado: "El procedimiento para exigir la responsabilidad patrimonial se regula en:",
    opciones: [
      "La Ley 39/2015 del Procedimiento Administrativo Común",
      "El Código Penal",
      "El Estatuto de los Trabajadores",
      "La Ley 55/2003 del Estatuto Marco",
    ],
    correctaIndex: 0,
    explicacion:
      "El procedimiento se regula en la Ley 39/2015; el régimen sustantivo de la responsabilidad está en la Ley 40/2015.",
    fuente: "Ley 39/2015",
    dificultad: "media",
    temaSlug: "enf-15",
  },
  {
    enunciado:
      "En caso de daños físicos o psíquicos, el plazo de un año para reclamar comienza a computar:",
    opciones: [
      "Desde que se produce el hecho, en todo caso",
      "Desde la curación o la determinación del alcance de las secuelas",
      "Desde que se presenta la denuncia",
      "Desde el fallecimiento del reclamante",
    ],
    correctaIndex: 1,
    explicacion:
      "En daños personales, el plazo se cuenta desde la curación o desde que se conoce el alcance definitivo de las secuelas.",
    fuente: "Ley 39/2015, art. 67",
    dificultad: "media",
    temaSlug: "enf-15",
  },
  {
    enunciado:
      "El particular perjudicado por la actuación de un empleado público sanitario debe dirigir su reclamación:",
    opciones: [
      "Directamente contra el empleado en la vía civil",
      "Contra el colegio profesional correspondiente",
      "Contra la Administración, que responde directamente",
      "Contra el sindicato del trabajador",
    ],
    correctaIndex: 2,
    explicacion:
      "El particular reclama frente a la Administración, que responde directamente; luego esta podrá exigir responsabilidad al empleado.",
    fuente: "Ley 40/2015, art. 36",
    dificultad: "media",
    temaSlug: "enf-15",
  },
  {
    enunciado:
      "Tras indemnizar al perjudicado, la Administración podrá exigir al empleado público la responsabilidad en que hubiera incurrido por:",
    opciones: [
      "Un simple error involuntario",
      "Cualquier actuación, aunque sea correcta",
      "Motivos meramente organizativos",
      "Dolo, culpa o negligencia graves, mediante la acción de regreso",
    ],
    correctaIndex: 3,
    explicacion:
      "La acción de regreso permite reclamar al empleado solo cuando haya incurrido en dolo, culpa o negligencia graves.",
    fuente: "Ley 40/2015, art. 36.2",
    dificultad: "dificil",
    temaSlug: "enf-15",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-16: Demografía sanitaria
  // ---------------------------------------------------------------------------
  {
    enunciado: "La demografía es la ciencia que estudia:",
    opciones: [
      "Las poblaciones humanas: su dimensión, estructura, evolución y características",
      "Las enfermedades infecciosas exclusivamente",
      "El clima y su efecto sobre la salud",
      "La economía del sistema sanitario",
    ],
    correctaIndex: 0,
    explicacion:
      "La demografía analiza las poblaciones humanas en cuanto a su tamaño, estructura, distribución y evolución.",
    fuente: "Demografía sanitaria",
    dificultad: "facil",
    temaSlug: "enf-16",
  },
  {
    enunciado: "A diferencia del censo, el padrón municipal se caracteriza por ser:",
    opciones: [
      "Una operación estadística de periodicidad decenal",
      "Un registro administrativo continuo de los vecinos del municipio",
      "Un documento secreto no actualizable",
      "Un recuento realizado cada 25 años",
    ],
    correctaIndex: 1,
    explicacion:
      "El padrón es un registro administrativo permanente y actualizable de los vecinos, mientras que el censo es una operación periódica.",
    fuente: "Demografía sanitaria",
    dificultad: "media",
    temaSlug: "enf-16",
  },
  {
    enunciado:
      "El censo de población en España se realiza, tradicionalmente, con una periodicidad:",
    opciones: ["Anual", "Quinquenal", "Decenal (cada diez años)", "Mensual"],
    correctaIndex: 2,
    explicacion:
      "El censo de población tiene carácter decenal, es decir, se elabora aproximadamente cada diez años.",
    fuente: "INE, censo de población",
    dificultad: "media",
    temaSlug: "enf-16",
  },
  {
    enunciado:
      "El estudio de la población en un momento concreto, es decir, de su tamaño y estructura, corresponde a la:",
    opciones: [
      "Demografía dinámica",
      "Epidemiología descriptiva",
      "Estadística vital",
      "Demografía estática",
    ],
    correctaIndex: 3,
    explicacion:
      "La demografía estática estudia la población en un instante dado; la dinámica estudia sus cambios (natalidad, mortalidad, migraciones).",
    fuente: "Demografía sanitaria",
    dificultad: "media",
    temaSlug: "enf-16",
  },
  {
    enunciado:
      "Una pirámide de población con base estrecha y cúspide ancha (forma de bulbo o hucha) indica una población:",
    opciones: [
      "Envejecida o regresiva, con baja natalidad",
      "Joven y en fuerte crecimiento",
      "Estacionaria perfecta y sin cambios",
      "Sin ningún tipo de migraciones",
    ],
    correctaIndex: 0,
    explicacion:
      "Una base estrecha refleja pocos nacimientos y una cúspide ancha muchos ancianos: población envejecida o regresiva.",
    fuente: "Demografía sanitaria, pirámides de población",
    dificultad: "media",
    temaSlug: "enf-16",
  },
  {
    enunciado:
      "Una pirámide de población con base ancha y cúspide estrecha (forma de pagoda) es propia de una población:",
    opciones: [
      "Envejecida y regresiva",
      "Joven y en expansión, con alta natalidad",
      "En vías de extinción",
      "Estrictamente estacionaria",
    ],
    correctaIndex: 1,
    explicacion:
      "Una base ancha indica alta natalidad y una cúspide estrecha alta mortalidad: población joven y expansiva.",
    fuente: "Demografía sanitaria, pirámides de población",
    dificultad: "media",
    temaSlug: "enf-16",
  },
  {
    enunciado: "La tasa bruta de natalidad se calcula como:",
    opciones: [
      "El número de defunciones por cada mil habitantes",
      "La población total dividida por la superficie",
      "El número de nacidos vivos en un año por cada mil habitantes",
      "El número de matrimonios por cada mil habitantes",
    ],
    correctaIndex: 2,
    explicacion:
      "La tasa bruta de natalidad relaciona los nacidos vivos de un año con la población total, expresada por mil habitantes.",
    fuente: "Indicadores demográficos",
    dificultad: "media",
    temaSlug: "enf-16",
  },
  {
    enunciado: "El índice de envejecimiento se define como la relación entre:",
    opciones: [
      "Los nacimientos y las defunciones",
      "La población activa y la población total",
      "Los inmigrantes y los emigrantes",
      "La población de 65 y más años y la población menor de 15 años",
    ],
    correctaIndex: 3,
    explicacion:
      "El índice de envejecimiento relaciona la población de 65 y más años con la menor de 15 años, expresado en porcentaje.",
    fuente: "Indicadores demográficos",
    dificultad: "dificil",
    temaSlug: "enf-16",
  },
  {
    enunciado: "El índice de dependencia relaciona:",
    opciones: [
      "La población en edades no productivas (menores de 15 y mayores de 64 años) con la población en edad de trabajar",
      "El número de médicos con el de enfermeros",
      "Los ingresos con las altas hospitalarias",
      "Los nacimientos con los matrimonios",
    ],
    correctaIndex: 0,
    explicacion:
      "El índice de dependencia compara la población potencialmente dependiente con la población en edad activa (15-64 años).",
    fuente: "Indicadores demográficos",
    dificultad: "media",
    temaSlug: "enf-16",
  },
  {
    enunciado:
      "El organismo oficial responsable de elaborar el censo y las estadísticas demográficas en España es:",
    opciones: [
      "El Ministerio de Sanidad",
      "El Instituto Nacional de Estadística (INE)",
      "La Organización Mundial de la Salud",
      "El Registro Civil de forma exclusiva",
    ],
    correctaIndex: 1,
    explicacion:
      "El INE es el organismo encargado de elaborar el censo y las principales estadísticas de población en España.",
    fuente: "Instituto Nacional de Estadística",
    dificultad: "facil",
    temaSlug: "enf-16",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-17: Investigación cuantitativa
  // ---------------------------------------------------------------------------
  {
    enunciado:
      "La característica que define a un estudio experimental frente a uno observacional es que el investigador:",
    opciones: [
      "Se limita a observar sin intervenir",
      "Solo recoge datos de forma retrospectiva",
      "Controla y asigna la exposición o la intervención a los sujetos",
      "No utiliza ningún grupo de comparación",
    ],
    correctaIndex: 2,
    explicacion:
      "En el estudio experimental el investigador manipula la variable de exposición o intervención; en el observacional solo observa.",
    fuente: "Metodología de investigación cuantitativa",
    dificultad: "media",
    temaSlug: "enf-17",
  },
  {
    enunciado:
      "En un ensayo clínico aleatorizado, la asignación de los sujetos a los grupos de intervención y control se realiza:",
    opciones: [
      "Según la preferencia del paciente",
      "Por orden de llegada a la consulta",
      "Según el criterio del médico responsable",
      "Al azar (aleatorización)",
    ],
    correctaIndex: 3,
    explicacion:
      "La aleatorización reparte al azar a los sujetos entre los grupos, reduciendo el sesgo de selección y equilibrando los factores de confusión.",
    fuente: "Metodología de ensayos clínicos",
    dificultad: "media",
    temaSlug: "enf-17",
  },
  {
    enunciado: "Un estudio de cohortes se caracteriza por:",
    opciones: [
      "Partir de la exposición y seguir a los sujetos en el tiempo para observar la aparición del efecto",
      "Partir de la enfermedad y buscar hacia atrás la exposición",
      "Analizar a un solo paciente en profundidad",
      "No permitir el cálculo de la incidencia",
    ],
    correctaIndex: 0,
    explicacion:
      "En el estudio de cohortes se parte de la exposición y se sigue a los sujetos para ver quién desarrolla el efecto; permite calcular incidencia.",
    fuente: "Diseños epidemiológicos",
    dificultad: "media",
    temaSlug: "enf-17",
  },
  {
    enunciado: "Un estudio de casos y controles se caracteriza por:",
    opciones: [
      "Seguir a sujetos sanos durante muchos años",
      "Comparar personas con la enfermedad (casos) y sin ella (controles) buscando exposiciones previas",
      "Asignar la intervención al azar",
      "Ser siempre de carácter prospectivo",
    ],
    correctaIndex: 1,
    explicacion:
      "El estudio de casos y controles parte de la enfermedad y busca retrospectivamente diferencias de exposición entre casos y controles.",
    fuente: "Diseños epidemiológicos",
    dificultad: "media",
    temaSlug: "enf-17",
  },
  {
    enunciado: "El sexo (hombre/mujer) es un ejemplo de variable:",
    opciones: [
      "Cuantitativa continua",
      "Cuantitativa discreta",
      "Cualitativa nominal",
      "Ordinal jerárquica",
    ],
    correctaIndex: 2,
    explicacion:
      "El sexo es una variable cualitativa nominal, pues sus categorías no admiten un orden o jerarquía.",
    fuente: "Estadística, tipos de variables",
    dificultad: "facil",
    temaSlug: "enf-17",
  },
  {
    enunciado: "¿Cuál de las siguientes es una variable cuantitativa continua?",
    opciones: ["El grupo sanguíneo", "El número de hijos", "El estado civil", "El peso corporal"],
    correctaIndex: 3,
    explicacion:
      "El peso corporal puede tomar infinitos valores dentro de un intervalo, por lo que es una variable cuantitativa continua.",
    fuente: "Estadística, tipos de variables",
    dificultad: "media",
    temaSlug: "enf-17",
  },
  {
    enunciado: "El sesgo de selección se produce cuando:",
    opciones: [
      "La forma de elegir a los participantes hace que no sean representativos de la población de estudio",
      "Se mide de forma incorrecta la variable resultado",
      "Existe una tercera variable asociada a la exposición y al efecto",
      "El azar afecta a los resultados por muestra pequeña",
    ],
    correctaIndex: 0,
    explicacion:
      "El sesgo de selección deriva de la manera en que se seleccionan los sujetos, que introduce diferencias no atribuibles al factor de estudio.",
    fuente: "Metodología, tipos de sesgos",
    dificultad: "media",
    temaSlug: "enf-17",
  },
  {
    enunciado:
      "Una variable asociada tanto a la exposición como al efecto, que puede distorsionar la asociación observada, se denomina:",
    opciones: [
      "Sesgo de memoria",
      "Factor de confusión (confusor)",
      "Variable dependiente",
      "Error aleatorio",
    ],
    correctaIndex: 1,
    explicacion:
      "El factor de confusión se relaciona a la vez con la exposición y con el efecto, distorsionando la asociación real entre ambos.",
    fuente: "Metodología, sesgos y confusión",
    dificultad: "dificil",
    temaSlug: "enf-17",
  },
  {
    enunciado: "En el muestreo aleatorio simple:",
    opciones: [
      "Se eligen los sujetos más accesibles para el investigador",
      "El investigador decide de forma directa quién entra",
      "Todos los individuos de la población tienen la misma probabilidad de ser seleccionados",
      "Se seleccionan sujetos por cuotas fijadas de antemano",
    ],
    correctaIndex: 2,
    explicacion:
      "En el muestreo aleatorio simple cada individuo de la población tiene idéntica probabilidad de formar parte de la muestra.",
    fuente: "Muestreo probabilístico",
    dificultad: "media",
    temaSlug: "enf-17",
  },
  {
    enunciado: "Aumentar el tamaño de la muestra, en general, permite:",
    opciones: [
      "Aumentar los sesgos del estudio",
      "Reducir la validez externa de los resultados",
      "Eliminar por completo los factores de confusión",
      "Reducir el error aleatorio y aumentar la precisión de las estimaciones",
    ],
    correctaIndex: 3,
    explicacion:
      "Un mayor tamaño muestral reduce el error aleatorio y mejora la precisión, aunque no corrige por sí solo los sesgos ni la confusión.",
    fuente: "Metodología cuantitativa",
    dificultad: "media",
    temaSlug: "enf-17",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-18: Epidemiología
  // ---------------------------------------------------------------------------
  {
    enunciado: "La prevalencia de una enfermedad mide:",
    opciones: [
      "El número de casos existentes, nuevos y antiguos, en una población en un momento o periodo dado",
      "Solo los casos nuevos que aparecen en un periodo",
      "El número de fallecimientos por la enfermedad",
      "La probabilidad de curación de los enfermos",
    ],
    correctaIndex: 0,
    explicacion:
      "La prevalencia cuantifica todos los casos existentes (nuevos y antiguos) en relación con la población en un momento dado.",
    fuente: "Epidemiología",
    dificultad: "media",
    temaSlug: "enf-18",
  },
  {
    enunciado: "La incidencia acumulada expresa:",
    opciones: [
      "Los casos existentes en un momento dado",
      "El número de casos nuevos que aparecen en una población durante un periodo determinado",
      "La letalidad de la enfermedad",
      "La cobertura de vacunación",
    ],
    correctaIndex: 1,
    explicacion:
      "La incidencia mide los casos nuevos que surgen en una población sana durante un periodo; la prevalencia mide los existentes.",
    fuente: "Epidemiología",
    dificultad: "media",
    temaSlug: "enf-18",
  },
  {
    enunciado:
      "La prevalencia de una enfermedad crónica de larga duración, respecto a una aguda de igual incidencia, tiende a ser:",
    opciones: [
      "Menor",
      "Igual en todos los casos",
      "Mayor, porque la prevalencia depende de la incidencia y de la duración de la enfermedad",
      "Nula",
    ],
    correctaIndex: 2,
    explicacion:
      "La prevalencia es aproximadamente la incidencia por la duración; a mayor duración, mayor prevalencia con la misma incidencia.",
    fuente: "Epidemiología",
    dificultad: "media",
    temaSlug: "enf-18",
  },
  {
    enunciado: "Un riesgo relativo (RR) igual a 1 indica que:",
    opciones: [
      "La exposición protege frente a la enfermedad",
      "La exposición multiplica por dos el riesgo",
      "El riesgo relativo no puede calcularse",
      "No existe asociación entre la exposición y la enfermedad",
    ],
    correctaIndex: 3,
    explicacion:
      "Un RR de 1 indica ausencia de asociación; mayor que 1 sugiere factor de riesgo y menor que 1 sugiere factor protector.",
    fuente: "Epidemiología, medidas de asociación",
    dificultad: "dificil",
    temaSlug: "enf-18",
  },
  {
    enunciado: "Un riesgo relativo de 3 significa que los expuestos tienen:",
    opciones: [
      "Tres veces más riesgo de desarrollar la enfermedad que los no expuestos",
      "Un tercio del riesgo de los no expuestos",
      "El mismo riesgo que los no expuestos",
      "Un riesgo imposible de interpretar",
    ],
    correctaIndex: 0,
    explicacion:
      "Un RR de 3 indica que la incidencia en el grupo expuesto es el triple que en el no expuesto.",
    fuente: "Epidemiología, medidas de asociación",
    dificultad: "media",
    temaSlug: "enf-18",
  },
  {
    enunciado: "La odds ratio (OR) es la medida de asociación propia de los estudios:",
    opciones: [
      "De cohortes prospectivos",
      "De casos y controles",
      "Ecológicos de correlación",
      "Ensayos clínicos con placebo",
    ],
    correctaIndex: 1,
    explicacion:
      "En los estudios de casos y controles no puede calcularse la incidencia, por lo que la asociación se estima mediante la odds ratio.",
    fuente: "Epidemiología, medidas de asociación",
    dificultad: "media",
    temaSlug: "enf-18",
  },
  {
    enunciado: "La tasa de letalidad de una enfermedad mide:",
    opciones: [
      "El número de casos nuevos por año",
      "La proporción de población vacunada",
      "La proporción de personas que fallecen entre las que padecen la enfermedad",
      "La incidencia acumulada del proceso",
    ],
    correctaIndex: 2,
    explicacion:
      "La letalidad relaciona los fallecidos por una enfermedad con el total de personas que la padecen, indicando su gravedad.",
    fuente: "Epidemiología",
    dificultad: "media",
    temaSlug: "enf-18",
  },
  {
    enunciado: "Las siglas EDO en salud pública corresponden a:",
    opciones: [
      "Estudio Descriptivo Observacional",
      "Evaluación de Desempeño Organizativo",
      "Encuesta de Datos Objetivos",
      "Enfermedades de Declaración Obligatoria",
    ],
    correctaIndex: 3,
    explicacion:
      "Las EDO son las Enfermedades de Declaración Obligatoria, cuya notificación es obligatoria dentro de la vigilancia epidemiológica.",
    fuente: "Red Nacional de Vigilancia Epidemiológica",
    dificultad: "facil",
    temaSlug: "enf-18",
  },
  {
    enunciado: "El sistema de Enfermedades de Declaración Obligatoria tiene como finalidad:",
    opciones: [
      "La vigilancia epidemiológica para detectar y controlar precozmente brotes y epidemias",
      "Facturar la asistencia sanitaria prestada",
      "Elaborar el censo de población",
      "Gestionar las listas de espera quirúrgicas",
    ],
    correctaIndex: 0,
    explicacion:
      "La declaración obligatoria permite la vigilancia epidemiológica y la adopción precoz de medidas ante brotes y epidemias.",
    fuente: "Red Nacional de Vigilancia Epidemiológica",
    dificultad: "media",
    temaSlug: "enf-18",
  },
  {
    enunciado: "Se denomina epidemia a:",
    opciones: [
      "La presencia habitual y estable de una enfermedad en una zona",
      "La aparición de casos de una enfermedad en número claramente superior al esperado en una comunidad y periodo",
      "La extensión de una enfermedad a varios continentes",
      "La aparición de un único caso aislado",
    ],
    correctaIndex: 1,
    explicacion:
      "La epidemia es un exceso de casos sobre lo esperado; la endemia es la presencia habitual y la pandemia afecta a varios continentes.",
    fuente: "Epidemiología",
    dificultad: "media",
    temaSlug: "enf-18",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-19: Enfermería Basada en la Evidencia
  // ---------------------------------------------------------------------------
  {
    enunciado: "La Enfermería Basada en la Evidencia (EBE) consiste en:",
    opciones: [
      "Actuar según la tradición y la costumbre del servicio",
      "Seguir siempre la opinión del profesional más veterano",
      "Integrar la mejor evidencia científica disponible con la experiencia clínica y las preferencias del paciente",
      "Aplicar únicamente los protocolos más económicos",
    ],
    correctaIndex: 2,
    explicacion:
      "La EBE combina la mejor evidencia científica disponible, la experiencia clínica del profesional y los valores y preferencias del paciente.",
    fuente: "Enfermería Basada en la Evidencia",
    dificultad: "facil",
    temaSlug: "enf-19",
  },
  {
    enunciado: "En el formato PICO para formular preguntas clínicas, la letra C representa:",
    opciones: [
      "El contexto clínico general",
      "El coste del tratamiento",
      "La conclusión del estudio",
      "La comparación o intervención alternativa",
    ],
    correctaIndex: 3,
    explicacion:
      "En PICO, C corresponde a la comparación o intervención alternativa frente a la que se evalúa la intervención principal.",
    fuente: "EBE, formato PICO",
    dificultad: "media",
    temaSlug: "enf-19",
  },
  {
    enunciado: "En la estrategia PICO, la letra O (Outcome) hace referencia a:",
    opciones: [
      "El resultado o desenlace que se quiere medir",
      "La organización sanitaria implicada",
      "El observador que realiza el estudio",
      "La ocupación laboral del paciente",
    ],
    correctaIndex: 0,
    explicacion:
      "La O de PICO designa el outcome o resultado de interés que se pretende evaluar en la pregunta clínica.",
    fuente: "EBE, formato PICO",
    dificultad: "media",
    temaSlug: "enf-19",
  },
  {
    enunciado:
      "Entre los diseños de investigación, el que aporta habitualmente el mayor nivel de evidencia es:",
    opciones: [
      "La opinión de un experto reconocido",
      "La revisión sistemática y el metaanálisis de ensayos clínicos aleatorizados",
      "El estudio de un caso clínico aislado",
      "La serie de casos sin grupo control",
    ],
    correctaIndex: 1,
    explicacion:
      "Las revisiones sistemáticas y los metaanálisis de ensayos clínicos aleatorizados ocupan la cúspide de la pirámide de evidencia.",
    fuente: "EBE, niveles de evidencia",
    dificultad: "media",
    temaSlug: "enf-19",
  },
  {
    enunciado:
      "Dentro de la jerarquía de la evidencia científica, la opinión de expertos se sitúa:",
    opciones: [
      "En el nivel más alto de la pirámide",
      "Por encima de los ensayos clínicos",
      "En los niveles más bajos de la pirámide de evidencia",
      "Fuera de toda clasificación posible",
    ],
    correctaIndex: 2,
    explicacion:
      "La opinión de expertos, sin estudios que la respalden, se sitúa en la base de la pirámide, con menor fuerza de evidencia.",
    fuente: "EBE, niveles de evidencia",
    dificultad: "media",
    temaSlug: "enf-19",
  },
  {
    enunciado: "La Colaboración (Biblioteca) Cochrane es conocida principalmente por:",
    opciones: [
      "Fabricar medicamentos genéricos",
      "Acreditar la calidad de los hospitales",
      "Gestionar las historias clínicas electrónicas",
      "Elaborar y difundir revisiones sistemáticas de alta calidad",
    ],
    correctaIndex: 3,
    explicacion:
      "La Cochrane es una red internacional reconocida por la elaboración y difusión de revisiones sistemáticas rigurosas.",
    fuente: "Cochrane Collaboration",
    dificultad: "facil",
    temaSlug: "enf-19",
  },
  {
    enunciado: "La primera etapa del proceso de la Enfermería Basada en la Evidencia es:",
    opciones: [
      "Formular una pregunta clínica estructurada a partir de un problema de la práctica",
      "Aplicar el resultado sin comprobación previa",
      "Publicar los hallazgos del estudio",
      "Descartar de entrada la literatura científica",
    ],
    correctaIndex: 0,
    explicacion:
      "El proceso de la EBE comienza con la formulación de una pregunta clínica estructurada, habitualmente en formato PICO.",
    fuente: "EBE, etapas del proceso",
    dificultad: "media",
    temaSlug: "enf-19",
  },
  {
    enunciado:
      "Una de las principales bases de datos bibliográficas para la búsqueda de evidencia en ciencias de la salud es:",
    opciones: [
      "Una enciclopedia colaborativa abierta de contenido general",
      "PubMed/MEDLINE",
      "Una red social de imágenes",
      "El Boletín Oficial del Estado",
    ],
    correctaIndex: 1,
    explicacion:
      "PubMed/MEDLINE, junto con CINAHL o la Cochrane Library, es una de las bases de datos de referencia en ciencias de la salud.",
    fuente: "EBE, fuentes de información",
    dificultad: "media",
    temaSlug: "enf-19",
  },
  {
    enunciado: "La lectura crítica de un artículo científico tiene como objetivo valorar:",
    opciones: [
      "La longitud total del texto",
      "El prestigio del autor de forma exclusiva",
      "La validez, la importancia y la aplicabilidad de sus resultados",
      "El número de páginas y de figuras",
    ],
    correctaIndex: 2,
    explicacion:
      "La lectura crítica analiza la validez metodológica, la relevancia clínica y la aplicabilidad de los resultados de un estudio.",
    fuente: "EBE, lectura crítica",
    dificultad: "media",
    temaSlug: "enf-19",
  },
  {
    enunciado: "Uno de los problemas de la práctica clínica que la EBE ayuda a reducir es:",
    opciones: [
      "El exceso de personal en las plantillas",
      "La escasez de camas hospitalarias",
      "El coste de la energía del centro",
      "La variabilidad injustificada de la práctica clínica",
    ],
    correctaIndex: 3,
    explicacion:
      "Al fundamentar las decisiones en la evidencia, la EBE disminuye la variabilidad no justificada entre profesionales y centros.",
    fuente: "Enfermería Basada en la Evidencia",
    dificultad: "media",
    temaSlug: "enf-19",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-20: Investigación cualitativa
  // ---------------------------------------------------------------------------
  {
    enunciado: "La investigación cualitativa se orienta principalmente a:",
    opciones: [
      "Comprender el significado, las experiencias y las vivencias de las personas desde su propia perspectiva",
      "Medir variables numéricas y calcular medias y proporciones",
      "Establecer relaciones causa-efecto con pruebas estadísticas",
      "Determinar la prevalencia de las enfermedades",
    ],
    correctaIndex: 0,
    explicacion:
      "La investigación cualitativa busca comprender significados, experiencias y vivencias desde la perspectiva de los propios sujetos.",
    fuente: "Metodología de investigación cualitativa",
    dificultad: "facil",
    temaSlug: "enf-20",
  },
  {
    enunciado:
      "El enfoque cualitativo que estudia la esencia de las experiencias vividas por las personas ante un fenómeno se denomina:",
    opciones: ["Etnografía", "Fenomenología", "Teoría fundamentada", "Estudio de caso único"],
    correctaIndex: 1,
    explicacion:
      "La fenomenología profundiza en la esencia y el significado de las experiencias vividas por las personas.",
    fuente: "Metodología cualitativa",
    dificultad: "media",
    temaSlug: "enf-20",
  },
  {
    enunciado: "La etnografía es el método cualitativo orientado a:",
    opciones: [
      "Generar teoría a partir de los datos recogidos",
      "Analizar en profundidad un único documento",
      "Describir e interpretar la cultura, creencias y prácticas de un grupo mediante trabajo de campo",
      "Medir la satisfacción con una escala numérica",
    ],
    correctaIndex: 2,
    explicacion:
      "La etnografía estudia la cultura, los valores y las prácticas de un grupo humano a través del trabajo de campo y la observación.",
    fuente: "Metodología cualitativa",
    dificultad: "media",
    temaSlug: "enf-20",
  },
  {
    enunciado:
      "El método cualitativo cuya finalidad es generar teoría a partir de los datos recogidos es:",
    opciones: [
      "La fenomenología",
      "La etnografía",
      "La historia de vida",
      "La teoría fundamentada (grounded theory)",
    ],
    correctaIndex: 3,
    explicacion:
      "La teoría fundamentada construye teoría de forma inductiva a partir del análisis sistemático de los datos.",
    fuente: "Metodología cualitativa",
    dificultad: "media",
    temaSlug: "enf-20",
  },
  {
    enunciado: "El grupo focal (focus group) es una técnica de recogida de datos consistente en:",
    opciones: [
      "Una entrevista grupal guiada por un moderador para explorar opiniones y experiencias sobre un tema",
      "Un cuestionario autoadministrado y anónimo",
      "La observación a distancia sin ninguna interacción",
      "El análisis estadístico de historias clínicas",
    ],
    correctaIndex: 0,
    explicacion:
      "El grupo focal es una discusión grupal conducida por un moderador para explorar percepciones, opiniones y experiencias colectivas.",
    fuente: "Metodología cualitativa, técnicas de recogida",
    dificultad: "media",
    temaSlug: "enf-20",
  },
  {
    enunciado: "El muestreo más habitual en la investigación cualitativa es:",
    opciones: [
      "El muestreo aleatorio simple",
      "El muestreo intencional o teórico, según la relevancia de los informantes",
      "El muestreo sistemático por intervalos",
      "El muestreo por conglomerados aleatorios",
    ],
    correctaIndex: 1,
    explicacion:
      "La investigación cualitativa emplea muestreos intencionales o teóricos, seleccionando a informantes clave por su relevancia y no al azar.",
    fuente: "Metodología cualitativa, muestreo",
    dificultad: "media",
    temaSlug: "enf-20",
  },
  {
    enunciado:
      "En investigación cualitativa, el momento en que los nuevos datos ya no aportan información relevante se denomina:",
    opciones: [
      "Triangulación de fuentes",
      "Codificación abierta",
      "Saturación de los datos",
      "Transferibilidad de los hallazgos",
    ],
    correctaIndex: 2,
    explicacion:
      "La saturación teórica se alcanza cuando la incorporación de nuevos datos ya no aporta información ni categorías nuevas.",
    fuente: "Metodología cualitativa",
    dificultad: "media",
    temaSlug: "enf-20",
  },
  {
    enunciado:
      "El uso de varias fuentes, métodos o investigadores para aumentar la credibilidad de un estudio cualitativo se conoce como:",
    opciones: [
      "Aleatorización de la muestra",
      "Cegamiento de los observadores",
      "Estratificación por variables",
      "Triangulación",
    ],
    correctaIndex: 3,
    explicacion:
      "La triangulación combina fuentes, métodos, datos o investigadores distintos para reforzar el rigor y la credibilidad del estudio.",
    fuente: "Metodología cualitativa, criterios de rigor",
    dificultad: "dificil",
    temaSlug: "enf-20",
  },
  {
    enunciado:
      "En la investigación cualitativa, el criterio de rigor equivalente a la validez interna de la investigación cuantitativa es:",
    opciones: [
      "La credibilidad",
      "La fiabilidad estadística",
      "El intervalo de confianza",
      "La significación estadística (valor p)",
    ],
    correctaIndex: 0,
    explicacion:
      "La credibilidad es el criterio de rigor cualitativo análogo a la validez interna, y valora la veracidad de los hallazgos.",
    fuente: "Metodología cualitativa, criterios de rigor",
    dificultad: "media",
    temaSlug: "enf-20",
  },
  {
    enunciado:
      "El criterio de rigor cualitativo que se refiere a la posibilidad de aplicar los hallazgos a otros contextos es:",
    opciones: ["La confirmabilidad", "La transferibilidad", "La credibilidad", "La dependencia"],
    correctaIndex: 1,
    explicacion:
      "La transferibilidad, equivalente a la validez externa, valora en qué medida los resultados pueden aplicarse a otros contextos.",
    fuente: "Metodología cualitativa, criterios de rigor",
    dificultad: "media",
    temaSlug: "enf-20",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-21: Sistemas de información
  // ---------------------------------------------------------------------------
  {
    enunciado: "Diraya es, en el Sistema Sanitario Público de Andalucía:",
    opciones: [
      "Un plan de vacunación autonómico",
      "Una agencia de calidad sanitaria",
      "El sistema de historia clínica electrónica única del ciudadano",
      "Un hospital de referencia regional",
    ],
    correctaIndex: 2,
    explicacion:
      "Diraya es el sistema que gestiona la historia de salud electrónica única del ciudadano en el SSPA.",
    fuente: "SSPA, sistema Diraya",
    dificultad: "facil",
    temaSlug: "enf-21",
  },
  {
    enunciado: "Una ventaja principal de Diraya es que permite:",
    opciones: [
      "Duplicar la historia clínica en cada centro",
      "Utilizar exclusivamente el soporte en papel",
      "Restringir la información a un único hospital",
      "Disponer de una historia de salud única e integrada, accesible desde atención primaria y hospitalaria",
    ],
    correctaIndex: 3,
    explicacion:
      "Diraya integra la información en una historia única accesible entre niveles asistenciales, evitando duplicidades.",
    fuente: "SSPA, sistema Diraya",
    dificultad: "media",
    temaSlug: "enf-21",
  },
  {
    enunciado: "El CMBD (Conjunto Mínimo Básico de Datos) es:",
    opciones: [
      "Un conjunto normalizado de datos clínicos y administrativos que se recoge al alta de cada episodio asistencial",
      "Un sistema de citación telefónica",
      "Un plan de emergencias hospitalarias",
      "Un registro del personal del centro",
    ],
    correctaIndex: 0,
    explicacion:
      "El CMBD es el conjunto normalizado de datos que se registra al alta de cada episodio, base para estadísticas y gestión clínica.",
    fuente: "Conjunto Mínimo Básico de Datos",
    dificultad: "media",
    temaSlug: "enf-21",
  },
  {
    enunciado:
      "La CIE (Clasificación Internacional de Enfermedades) es una clasificación promovida por:",
    opciones: [
      "El Ministerio de Hacienda",
      "La Organización Mundial de la Salud (OMS)",
      "La Unión Europea de forma exclusiva",
      "El Instituto Nacional de Estadística",
    ],
    correctaIndex: 1,
    explicacion:
      "La CIE es la clasificación de enfermedades elaborada y actualizada por la Organización Mundial de la Salud.",
    fuente: "OMS, Clasificación Internacional de Enfermedades",
    dificultad: "media",
    temaSlug: "enf-21",
  },
  {
    enunciado: "La finalidad de la Clasificación Internacional de Enfermedades (CIE) es:",
    opciones: [
      "Fijar los precios de los medicamentos",
      "Ordenar las listas de espera quirúrgicas",
      "Codificar de forma normalizada los diagnósticos y procedimientos para su registro y comparación",
      "Gestionar las nóminas del personal sanitario",
    ],
    correctaIndex: 2,
    explicacion:
      "La CIE permite codificar de manera estandarizada diagnósticos y procedimientos, facilitando su registro, análisis y comparación.",
    fuente: "OMS, Clasificación Internacional de Enfermedades",
    dificultad: "media",
    temaSlug: "enf-21",
  },
  {
    enunciado:
      "En los sistemas de informacion del SAS, la Base de Datos de Usuarios (BDU) contiene:",
    opciones: [
      "El inventario de medicamentos del hospital",
      "El registro de camas hospitalarias disponibles",
      "El catálogo de pruebas de laboratorio",
      "Los datos identificativos y administrativos de la población usuaria del sistema sanitario",
    ],
    correctaIndex: 3,
    explicacion:
      "La BDU es la base de datos que reúne los datos identificativos y administrativos de los usuarios del sistema sanitario andaluz.",
    fuente: "SSPA, Base de Datos de Usuarios",
    dificultad: "media",
    temaSlug: "enf-21",
  },
  {
    enunciado:
      "El identificador único que asigna la Base de Datos de Usuarios a cada ciudadano en Andalucía es:",
    opciones: [
      "El NUHSA (Número Único de Historia de Salud de Andalucía)",
      "El número de la Seguridad Social exclusivamente",
      "El código postal del domicilio",
      "El número de colegiado profesional",
    ],
    correctaIndex: 0,
    explicacion:
      "El NUHSA identifica de forma única a cada usuario en el SSPA y vincula su información de salud.",
    fuente: "SSPA, BDU y NUHSA",
    dificultad: "media",
    temaSlug: "enf-21",
  },
  {
    enunciado: "El acceso del personal a la historia de salud electrónica (Diraya) debe:",
    opciones: [
      "Ser libre para cualquier trabajador del centro",
      "Estar restringido y quedar registrado según el perfil profesional y la necesidad asistencial",
      "Realizarse sin identificar al usuario que accede",
      "Permitir consultar cualquier paciente sin justificación",
    ],
    correctaIndex: 1,
    explicacion:
      "El acceso se limita al perfil profesional y a la necesidad asistencial, y queda registrado (trazabilidad) para garantizar la confidencialidad.",
    fuente: "Ley 41/2002 y normativa de protección de datos",
    dificultad: "media",
    temaSlug: "enf-21",
  },
  {
    enunciado:
      "El módulo de Diraya que permite la prescripción y dispensación de medicamentos sin receta en papel es:",
    opciones: [
      "El CMBD",
      "La Base de Datos de Usuarios",
      "La receta electrónica (Receta XXI)",
      "La Clasificación Internacional de Enfermedades",
    ],
    correctaIndex: 2,
    explicacion:
      "Receta XXI es el módulo de receta electrónica del SSPA que integra prescripción y dispensación sin soporte en papel.",
    fuente: "SSPA, Receta XXI",
    dificultad: "facil",
    temaSlug: "enf-21",
  },
  {
    enunciado:
      "A partir de los datos del CMBD se pueden construir agrupaciones de pacientes según su consumo de recursos, denominadas:",
    opciones: ["EDO", "PICO", "USMC", "GRD (Grupos Relacionados por el Diagnóstico)"],
    correctaIndex: 3,
    explicacion:
      "Los GRD se obtienen a partir del CMBD y clasifican a los pacientes en grupos de complejidad y consumo de recursos similares.",
    fuente: "CMBD y GRD",
    dificultad: "media",
    temaSlug: "enf-21",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-22: Costes sanitarios
  // ---------------------------------------------------------------------------
  {
    enunciado: "Un coste fijo se caracteriza por:",
    opciones: [
      "No variar con el volumen de actividad a corto plazo, como el alquiler o la amortización del edificio",
      "Aumentar proporcionalmente con cada paciente atendido",
      "Depender solo del número de recetas emitidas",
      "Desaparecer cuando no hay ninguna actividad",
    ],
    correctaIndex: 0,
    explicacion:
      "El coste fijo permanece constante a corto plazo con independencia del volumen de actividad, como el alquiler o las amortizaciones.",
    fuente: "Economía de la salud",
    dificultad: "facil",
    temaSlug: "enf-22",
  },
  {
    enunciado: "Los costes variables son aquellos que:",
    opciones: [
      "Permanecen constantes sea cual sea la actividad",
      "Cambian en función del volumen de actividad, como el material fungible o los fármacos",
      "Nunca pueden calcularse con precisión",
      "Solo existen en la sanidad privada",
    ],
    correctaIndex: 1,
    explicacion:
      "El coste variable evoluciona con el nivel de actividad: a más pacientes o procesos, mayor consumo de fungible y medicamentos.",
    fuente: "Economía de la salud",
    dificultad: "media",
    temaSlug: "enf-22",
  },
  {
    enunciado: "Un coste directo en la atención a un paciente es:",
    opciones: [
      "La pérdida de productividad laboral del paciente",
      "El coste emocional de padecer la enfermedad",
      "El que puede imputarse claramente a la asistencia, como los medicamentos o el personal que le atiende",
      "El gasto general de administración del hospital",
    ],
    correctaIndex: 2,
    explicacion:
      "El coste directo se imputa de forma clara a la asistencia concreta del paciente, como fármacos, pruebas o personal asistencial.",
    fuente: "Economía de la salud",
    dificultad: "media",
    temaSlug: "enf-22",
  },
  {
    enunciado: "En economía de la salud, se consideran costes indirectos:",
    opciones: [
      "El precio de los fármacos administrados",
      "El sueldo del personal asistencial",
      "El material sanitario fungible utilizado",
      "Las pérdidas de productividad derivadas de la enfermedad, como bajas laborales o incapacidad",
    ],
    correctaIndex: 3,
    explicacion:
      "Los costes indirectos reflejan las pérdidas de productividad asociadas a la enfermedad (bajas, incapacidad, mortalidad prematura).",
    fuente: "Economía de la salud",
    dificultad: "media",
    temaSlug: "enf-22",
  },
  {
    enunciado:
      "El análisis coste-efectividad compara los costes de las alternativas con sus resultados expresados en:",
    opciones: [
      "Unidades clínicas o naturales, como años de vida ganados o casos evitados",
      "Unidades exclusivamente monetarias en ambos lados de la comparación",
      "Unidades de utilidad o preferencia (AVAC)",
      "Número de camas del hospital",
    ],
    correctaIndex: 0,
    explicacion:
      "El análisis coste-efectividad mide los resultados en unidades clínicas naturales, como años de vida ganados o casos evitados.",
    fuente: "Evaluación económica en salud",
    dificultad: "media",
    temaSlug: "enf-22",
  },
  {
    enunciado: "El análisis coste-utilidad mide los resultados en salud mediante:",
    opciones: [
      "Euros gastados por paciente",
      "Años de vida ajustados por calidad (AVAC/QALY)",
      "El número de ingresos hospitalarios",
      "Los metros cuadrados del hospital",
    ],
    correctaIndex: 1,
    explicacion:
      "El coste-utilidad expresa los resultados en AVAC (años de vida ajustados por calidad), integrando cantidad y calidad de vida.",
    fuente: "Evaluación económica en salud",
    dificultad: "media",
    temaSlug: "enf-22",
  },
  {
    enunciado:
      "El análisis coste-beneficio se caracteriza porque expresa tanto los costes como los resultados en:",
    opciones: [
      "Unidades clínicas naturales",
      "Años de vida ajustados por calidad",
      "Términos monetarios",
      "Escalas ordinales de gravedad",
    ],
    correctaIndex: 2,
    explicacion:
      "El análisis coste-beneficio valora en dinero tanto los costes como los resultados, permitiendo comparar programas muy distintos.",
    fuente: "Evaluación económica en salud",
    dificultad: "media",
    temaSlug: "enf-22",
  },
  {
    enunciado: "Los Grupos Relacionados por el Diagnóstico (GRD) permiten:",
    opciones: [
      "Sustituir a la historia clínica del paciente",
      "Clasificar al personal por su antigüedad",
      "Fijar el precio de la tarjeta sanitaria",
      "Agrupar a los pacientes en categorías clínicamente similares y con un consumo de recursos parecido",
    ],
    correctaIndex: 3,
    explicacion:
      "Los GRD agrupan a los pacientes con características clínicas y de consumo de recursos semejantes, útiles para la gestión y la financiación.",
    fuente: "Grupos Relacionados por el Diagnóstico",
    dificultad: "media",
    temaSlug: "enf-22",
  },
  {
    enunciado: "El case-mix o casuística de un hospital hace referencia a:",
    opciones: [
      "La composición de los pacientes atendidos según su complejidad y tipo de patología",
      "El número de camas libres disponibles",
      "La plantilla total de personal del centro",
      "El presupuesto anual de farmacia",
    ],
    correctaIndex: 0,
    explicacion:
      "El case-mix describe la complejidad y variedad de los pacientes atendidos, y suele medirse a partir de los GRD.",
    fuente: "Gestión sanitaria, case-mix",
    dificultad: "media",
    temaSlug: "enf-22",
  },
  {
    enunciado: "En términos económicos, la eficiencia consiste en:",
    opciones: [
      "Gastar la mayor cantidad posible de recursos",
      "Obtener los mejores resultados posibles con los recursos disponibles",
      "Atender solo a los pacientes más rentables",
      "Reducir la calidad para ahorrar costes",
    ],
    correctaIndex: 1,
    explicacion:
      "La eficiencia relaciona resultados y recursos: alcanzar el mejor resultado con los recursos disponibles o un resultado con el mínimo coste.",
    fuente: "Economía de la salud",
    dificultad: "facil",
    temaSlug: "enf-22",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-23: Planificación sanitaria
  // ---------------------------------------------------------------------------
  {
    enunciado: "La planificación sanitaria es un proceso orientado a:",
    opciones: [
      "Improvisar la respuesta ante las emergencias",
      "Recortar servicios sin ningún análisis previo",
      "Definir prioridades y asignar recursos para alcanzar objetivos de salud de forma racional",
      "Gestionar únicamente las nóminas del personal",
    ],
    correctaIndex: 2,
    explicacion:
      "La planificación es un proceso racional que identifica problemas, establece prioridades y asigna recursos para lograr objetivos de salud.",
    fuente: "Planificación sanitaria",
    dificultad: "media",
    temaSlug: "enf-23",
  },
  {
    enunciado: "La primera etapa del proceso de planificación sanitaria consiste en:",
    opciones: [
      "Evaluar los resultados finales del plan",
      "Ejecutar las actividades previstas",
      "Elaborar el presupuesto económico",
      "Analizar la situación e identificar los problemas y necesidades de salud",
    ],
    correctaIndex: 3,
    explicacion:
      "El ciclo de planificación comienza con el análisis de situación y la identificación de los problemas y necesidades de salud.",
    fuente: "Planificación sanitaria",
    dificultad: "media",
    temaSlug: "enf-23",
  },
  {
    enunciado:
      "Tras identificar los problemas de salud, la siguiente etapa de la planificación es:",
    opciones: [
      "Establecer prioridades entre los problemas detectados",
      "Publicar directamente los resultados",
      "Dar por cerrado el proceso",
      "Contratar personal directivo",
    ],
    correctaIndex: 0,
    explicacion:
      "Una vez identificados los problemas, hay que priorizarlos, porque los recursos son limitados y no todos pueden abordarse a la vez.",
    fuente: "Planificación sanitaria",
    dificultad: "media",
    temaSlug: "enf-23",
  },
  {
    enunciado:
      "El nivel de planificación que define los grandes objetivos y políticas a largo plazo se denomina:",
    opciones: [
      "Planificación operativa",
      "Planificación estratégica",
      "Planificación táctica de las tareas diarias",
      "Programación semanal de turnos",
    ],
    correctaIndex: 1,
    explicacion:
      "La planificación estratégica establece las grandes líneas, objetivos y políticas a largo plazo de la organización.",
    fuente: "Planificación sanitaria, niveles",
    dificultad: "media",
    temaSlug: "enf-23",
  },
  {
    enunciado: "La planificación operativa se caracteriza por:",
    opciones: [
      "Definir la misión de la organización a veinte años",
      "Establecer únicamente valores generales",
      "Concretar actividades, responsables y plazos a corto plazo para ejecutar los objetivos",
      "No incluir recursos ni responsables",
    ],
    correctaIndex: 2,
    explicacion:
      "La planificación operativa desciende al detalle: concreta actividades, responsables, recursos y plazos a corto plazo.",
    fuente: "Planificación sanitaria, niveles",
    dificultad: "media",
    temaSlug: "enf-23",
  },
  {
    enunciado: "El Plan Andaluz de Salud es:",
    opciones: [
      "Una ley de presupuestos anual",
      "Un convenio colectivo del personal",
      "Un registro de pacientes crónicos",
      "El instrumento estratégico superior que orienta las políticas de salud en Andalucía",
    ],
    correctaIndex: 3,
    explicacion:
      "El Plan Andaluz de Salud es el marco estratégico de referencia que orienta las políticas y actuaciones de salud en la comunidad.",
    fuente: "Plan Andaluz de Salud",
    dificultad: "facil",
    temaSlug: "enf-23",
  },
  {
    enunciado: "Los objetivos de un plan de salud deben ser, preferentemente:",
    opciones: [
      "Específicos, medibles, alcanzables, relevantes y definidos en el tiempo",
      "Vagos y sin plazo determinado",
      "Imposibles de cuantificar",
      "Secretos para el personal implicado",
    ],
    correctaIndex: 0,
    explicacion:
      "Los buenos objetivos siguen el criterio SMART: específicos, medibles, alcanzables, relevantes y acotados en el tiempo.",
    fuente: "Planificación sanitaria",
    dificultad: "media",
    temaSlug: "enf-23",
  },
  {
    enunciado: "Un programa de salud es:",
    opciones: [
      "Un único acto asistencial aislado",
      "Un conjunto organizado de actividades y recursos dirigidos a un objetivo de salud concreto para una población",
      "Una lista de espera quirúrgica",
      "Un inventario de material sanitario",
    ],
    correctaIndex: 1,
    explicacion:
      "Un programa de salud agrupa actividades y recursos organizados hacia un objetivo concreto dirigido a una población determinada.",
    fuente: "Planificación sanitaria",
    dificultad: "media",
    temaSlug: "enf-23",
  },
  {
    enunciado: "La etapa final del ciclo de planificación sanitaria es:",
    opciones: [
      "El análisis de situación inicial",
      "La priorización de problemas",
      "La evaluación de los resultados y del cumplimiento de los objetivos",
      "La identificación de los problemas de salud",
    ],
    correctaIndex: 2,
    explicacion:
      "El ciclo de planificación se cierra con la evaluación, que valora resultados y cumplimiento y retroalimenta futuras planificaciones.",
    fuente: "Planificación sanitaria",
    dificultad: "media",
    temaSlug: "enf-23",
  },
  {
    enunciado:
      "En planificación, la necesidad de salud que el propio individuo percibe se denomina:",
    opciones: [
      "Necesidad normativa",
      "Necesidad comparativa",
      "Necesidad expresada",
      "Necesidad sentida (percibida por la persona)",
    ],
    correctaIndex: 3,
    explicacion:
      "La necesidad sentida es la percibida por el individuo; la expresada es la demanda, y la normativa la define el experto o el estándar.",
    fuente: "Planificación sanitaria (tipología de Bradshaw)",
    dificultad: "media",
    temaSlug: "enf-23",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-24: Procesos Asistenciales Integrados
  // ---------------------------------------------------------------------------
  {
    enunciado: "Un Proceso Asistencial Integrado (PAI) es:",
    opciones: [
      "El conjunto de actuaciones coordinadas y centradas en el paciente que ordenan la asistencia para dar respuesta a un problema de salud",
      "Un único protocolo de un servicio aislado",
      "Un registro de facturación de la actividad",
      "Una lista de espera quirúrgica",
    ],
    correctaIndex: 0,
    explicacion:
      "El PAI organiza y coordina las actuaciones en torno al paciente para dar una respuesta integral y continua a un problema de salud.",
    fuente: "Procesos Asistenciales Integrados del SSPA",
    dificultad: "media",
    temaSlug: "enf-24",
  },
  {
    enunciado: "Uno de los objetivos fundamentales de los Procesos Asistenciales Integrados es:",
    opciones: [
      "Aumentar la variabilidad clínica entre profesionales",
      "Garantizar la continuidad asistencial entre niveles y reducir la variabilidad injustificada",
      "Separar por completo la atención primaria de la hospitalaria",
      "Prescindir de la evidencia científica",
    ],
    correctaIndex: 1,
    explicacion:
      "Los PAI persiguen la continuidad asistencial entre niveles y la disminución de la variabilidad clínica no justificada.",
    fuente: "Procesos Asistenciales Integrados del SSPA",
    dificultad: "media",
    temaSlug: "enf-24",
  },
  {
    enunciado: "En un Proceso Asistencial Integrado, los destinatarios son:",
    opciones: [
      "Exclusivamente los gestores del centro",
      "Solo el personal médico",
      "Las personas, pacientes y ciudadanos, a las que se dirige la atención, junto con sus expectativas",
      "Únicamente los proveedores de material",
    ],
    correctaIndex: 2,
    explicacion:
      "El PAI se centra en las personas destinatarias de la atención y en sus expectativas y necesidades.",
    fuente: "Procesos Asistenciales Integrados del SSPA",
    dificultad: "media",
    temaSlug: "enf-24",
  },
  {
    enunciado: "En la definición de un proceso, el límite de entrada señala:",
    opciones: [
      "El resultado final del proceso",
      "El presupuesto asignado al proceso",
      "El profesional responsable del proceso",
      "El punto o momento en que la persona entra en el proceso asistencial",
    ],
    correctaIndex: 3,
    explicacion:
      "El límite de entrada marca el momento o la situación en que la persona se incorpora al proceso asistencial.",
    fuente: "Procesos Asistenciales Integrados del SSPA",
    dificultad: "media",
    temaSlug: "enf-24",
  },
  {
    enunciado: "El límite final o de salida de un proceso asistencial integrado indica:",
    opciones: [
      "El momento o la situación en que la persona sale del proceso",
      "El inicio de la atención al paciente",
      "El coste económico total del proceso",
      "El número de profesionales implicados",
    ],
    correctaIndex: 0,
    explicacion:
      "El límite final o de salida define el momento en que la persona deja el proceso asistencial.",
    fuente: "Procesos Asistenciales Integrados del SSPA",
    dificultad: "media",
    temaSlug: "enf-24",
  },
  {
    enunciado: "Los límites marginales de un proceso asistencial se refieren a:",
    opciones: [
      "El coste marginal económico del proceso",
      "Aquellas actividades o situaciones que, aun estando relacionadas, quedan fuera del proceso definido",
      "El límite máximo de camas disponibles",
      "La duración máxima de la baja laboral",
    ],
    correctaIndex: 1,
    explicacion:
      "Los límites marginales delimitan las actividades relacionadas que se excluyen expresamente del proceso definido.",
    fuente: "Procesos Asistenciales Integrados del SSPA",
    dificultad: "media",
    temaSlug: "enf-24",
  },
  {
    enunciado: "En un mapa de procesos, los procesos estratégicos son aquellos que:",
    opciones: [
      "Ejecutan directamente la asistencia al paciente",
      "Dan soporte logístico como la limpieza o el mantenimiento",
      "Orientan y dirigen la organización, como la planificación, la dirección y la calidad",
      "Se refieren solo a la facturación",
    ],
    correctaIndex: 2,
    explicacion:
      "Los procesos estratégicos guían la organización: planificación, dirección, política de calidad y toma de decisiones.",
    fuente: "Gestión por procesos",
    dificultad: "media",
    temaSlug: "enf-24",
  },
  {
    enunciado: "En el mapa de procesos, los procesos operativos o clave son los que:",
    opciones: [
      "Se ocupan de la gestión de los recursos humanos",
      "Definen la estrategia de la organización",
      "Se encargan del mantenimiento de las instalaciones",
      "Están directamente ligados a la prestación del servicio al paciente y aportan valor",
    ],
    correctaIndex: 3,
    explicacion:
      "Los procesos clave u operativos son los ligados directamente a la asistencia al paciente y a la generación de valor.",
    fuente: "Gestión por procesos",
    dificultad: "media",
    temaSlug: "enf-24",
  },
  {
    enunciado: "Los procesos de soporte en una organización sanitaria son:",
    opciones: [
      "Los que proporcionan los recursos necesarios para los procesos clave, como suministros, mantenimiento o sistemas de información",
      "Los que definen la misión y la visión",
      "Los que atienden directamente al paciente en consulta",
      "Los que fijan las prioridades políticas",
    ],
    correctaIndex: 0,
    explicacion:
      "Los procesos de soporte aportan los recursos y servicios que necesitan los procesos clave para funcionar (compras, mantenimiento, sistemas).",
    fuente: "Gestión por procesos",
    dificultad: "media",
    temaSlug: "enf-24",
  },
  {
    enunciado: "La gestión por procesos se caracteriza por:",
    opciones: [
      "Organizar el trabajo en compartimentos estancos por servicios",
      "Organizar la actividad en torno al recorrido del paciente, superando la fragmentación por servicios",
      "Prescindir de la evaluación de resultados",
      "Centrarse solo en la contabilidad del centro",
    ],
    correctaIndex: 1,
    explicacion:
      "La gestión por procesos adopta una visión horizontal centrada en el recorrido del paciente, evitando la fragmentación entre servicios.",
    fuente: "Gestión por procesos",
    dificultad: "media",
    temaSlug: "enf-24",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-25: Plan para mayores de 65 años
  // ---------------------------------------------------------------------------
  {
    enunciado: "La valoración geriátrica integral evalúa a la persona mayor en las esferas:",
    opciones: [
      "Únicamente la esfera clínica",
      "Solo la esfera económica",
      "Clínica, funcional, mental y social",
      "Solo la esfera funcional",
    ],
    correctaIndex: 2,
    explicacion:
      "La valoración geriátrica integral es multidimensional: abarca las esferas clínica, funcional, mental y social.",
    fuente: "Valoración geriátrica integral",
    dificultad: "media",
    temaSlug: "enf-25",
  },
  {
    enunciado: "El índice de Barthel se utiliza para valorar:",
    opciones: [
      "El grado de deterioro cognitivo",
      "El riesgo de úlceras por presión",
      "El estado nutricional del anciano",
      "La independencia en las actividades básicas de la vida diaria",
    ],
    correctaIndex: 3,
    explicacion:
      "El índice de Barthel mide la autonomía en actividades básicas como comer, vestirse, asearse o desplazarse.",
    fuente: "Valoración funcional, índice de Barthel",
    dificultad: "media",
    temaSlug: "enf-25",
  },
  {
    enunciado: "La escala de Lawton y Brody valora:",
    opciones: [
      "Las actividades instrumentales de la vida diaria, como usar el teléfono, comprar, cocinar o manejar el dinero",
      "El equilibrio y la marcha",
      "El estado de ánimo y la depresión",
      "La intensidad del dolor",
    ],
    correctaIndex: 0,
    explicacion:
      "La escala de Lawton y Brody evalúa las actividades instrumentales de la vida diaria, más complejas que las básicas.",
    fuente: "Valoración funcional, escala de Lawton y Brody",
    dificultad: "media",
    temaSlug: "enf-25",
  },
  {
    enunciado: "Para el cribado del deterioro cognitivo en el anciano se emplea, entre otras:",
    opciones: [
      "La escala de Norton",
      "El cuestionario de Pfeiffer (SPMSQ)",
      "El índice de Barthel",
      "La escala de coma de Glasgow como cribado cognitivo rutinario",
    ],
    correctaIndex: 1,
    explicacion:
      "El cuestionario de Pfeiffer y el Mini-Mental son instrumentos habituales para el cribado del deterioro cognitivo.",
    fuente: "Valoración mental del anciano",
    dificultad: "media",
    temaSlug: "enf-25",
  },
  {
    enunciado: "La escala de Norton se utiliza para valorar:",
    opciones: [
      "La independencia funcional del paciente",
      "El estado de ánimo",
      "El riesgo de aparición de úlceras por presión",
      "El equilibrio y la marcha",
    ],
    correctaIndex: 2,
    explicacion:
      "La escala de Norton, como la de Braden, valora el riesgo de desarrollar úlceras por presión.",
    fuente: "Escalas de valoración del riesgo de úlceras por presión",
    dificultad: "media",
    temaSlug: "enf-25",
  },
  {
    enunciado: "El síndrome de fragilidad en el anciano se define como:",
    opciones: [
      "Una enfermedad infecciosa aguda",
      "La presencia exclusiva de demencia avanzada",
      "Una situación de dependencia total ya establecida e irreversible",
      "Un estado de mayor vulnerabilidad y menor reserva funcional que aumenta el riesgo de eventos adversos",
    ],
    correctaIndex: 3,
    explicacion:
      "La fragilidad es un estado de vulnerabilidad por disminución de la reserva funcional, que predispone a caídas, dependencia y hospitalización.",
    fuente: "Fragilidad en el anciano",
    dificultad: "media",
    temaSlug: "enf-25",
  },
  {
    enunciado: "Una característica importante de la fragilidad, de cara a la intervención, es que:",
    opciones: [
      "Es un estado potencialmente reversible o prevenible con intervención precoz mediante ejercicio y nutrición",
      "Es siempre un estado irreversible",
      "No se relaciona con la actividad física",
      "Solo afecta a menores de 50 años",
    ],
    correctaIndex: 0,
    explicacion:
      "La fragilidad puede prevenirse o revertirse con intervenciones precoces, especialmente el ejercicio físico y una nutrición adecuada.",
    fuente: "Fragilidad en el anciano",
    dificultad: "media",
    temaSlug: "enf-25",
  },
  {
    enunciado:
      "Una prueba de ejecución utilizada para el cribado de la fragilidad y del riesgo de caídas es:",
    opciones: [
      "La glucemia capilar",
      "La velocidad de la marcha o el test Timed Up and Go",
      "El hemograma completo",
      "La toma de la tensión arterial",
    ],
    correctaIndex: 1,
    explicacion:
      "La velocidad de la marcha y el test Timed Up and Go son pruebas de ejecución útiles para detectar fragilidad y riesgo de caídas.",
    fuente: "Valoración de la fragilidad",
    dificultad: "media",
    temaSlug: "enf-25",
  },
  {
    enunciado:
      "Las caídas, la incontinencia, el deterioro cognitivo y la inmovilidad se agrupan como:",
    opciones: [
      "Enfermedades de declaración obligatoria",
      "Constantes vitales del paciente",
      "Síndromes geriátricos",
      "Actividades instrumentales de la vida diaria",
    ],
    correctaIndex: 2,
    explicacion:
      "Estos cuadros, muy prevalentes en el anciano y de origen multifactorial, se conocen como grandes síndromes geriátricos.",
    fuente: "Geriatría, síndromes geriátricos",
    dificultad: "media",
    temaSlug: "enf-25",
  },
  {
    enunciado:
      "En el anciano, el consumo simultáneo de múltiples fármacos, con riesgo de interacciones y efectos adversos, se denomina:",
    opciones: [
      "Automedicación responsable",
      "Adherencia terapéutica",
      "Conciliación de la medicación",
      "Polifarmacia o polimedicación",
    ],
    correctaIndex: 3,
    explicacion:
      "La polifarmacia es el uso simultáneo de numerosos fármacos, frecuente en el mayor y asociado a más interacciones y efectos adversos.",
    fuente: "Geriatría, uso de medicamentos en el anciano",
    dificultad: "media",
    temaSlug: "enf-25",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-26: Derechos de la madre en el nacimiento
  // ---------------------------------------------------------------------------
  {
    enunciado: "La estrategia de humanización de la atención perinatal promueve, fundamentalmente:",
    opciones: [
      "Un parto respetado, centrado en la mujer y el recién nacido, con la mínima intervención necesaria",
      "La máxima medicalización sistemática de todos los partos",
      "La separación rutinaria de la madre y el recién nacido",
      "La prohibición del acompañamiento durante el parto",
    ],
    correctaIndex: 0,
    explicacion:
      "La humanización perinatal busca un parto respetado y centrado en la mujer y el recién nacido, evitando intervenciones innecesarias.",
    fuente: "Estrategia de atención al parto normal / humanización perinatal",
    dificultad: "media",
    temaSlug: "enf-26",
  },
  {
    enunciado: "El plan de parto y nacimiento es:",
    opciones: [
      "Un documento clínico que rellena solo el ginecólogo",
      "Un documento en el que la mujer expresa sus preferencias y expectativas sobre el proceso de parto",
      "Una autorización genérica para intervenciones quirúrgicas",
      "Un consentimiento para participar en investigación",
    ],
    correctaIndex: 1,
    explicacion:
      "El plan de parto permite a la mujer expresar por escrito sus preferencias y expectativas sobre la atención al parto y el nacimiento.",
    fuente: "Estrategia de atención al parto normal, plan de parto",
    dificultad: "media",
    temaSlug: "enf-26",
  },
  {
    enunciado:
      "Respecto al acompañamiento durante el parto, la atención humanizada reconoce el derecho de la mujer a:",
    opciones: [
      "Permanecer siempre sola por motivos de seguridad",
      "Ser acompañada solo por personal sanitario",
      "Estar acompañada por la persona de su elección durante todo el proceso",
      "Recibir visitas únicamente tras el alta",
    ],
    correctaIndex: 2,
    explicacion:
      "La atención humanizada reconoce el derecho de la mujer a estar acompañada por la persona que ella elija durante todo el proceso.",
    fuente: "Estrategia de atención al parto normal",
    dificultad: "media",
    temaSlug: "enf-26",
  },
  {
    enunciado:
      "El contacto piel con piel precoz entre la madre y el recién nacido tras el parto favorece:",
    opciones: [
      "La hipotermia del recién nacido",
      "El retraso en el inicio de la lactancia materna",
      "La separación temprana de la díada",
      "El vínculo afectivo, la termorregulación y el inicio de la lactancia materna",
    ],
    correctaIndex: 3,
    explicacion:
      "El contacto piel con piel precoz favorece el vínculo, ayuda a la termorregulación del recién nacido y facilita el inicio de la lactancia.",
    fuente: "Estrategia de atención al parto normal / lactancia materna",
    dificultad: "media",
    temaSlug: "enf-26",
  },
  {
    enunciado: "La OMS recomienda mantener la lactancia materna exclusiva hasta los:",
    opciones: ["6 meses de edad", "2 meses de edad", "12 meses de edad", "24 meses de edad"],
    correctaIndex: 0,
    explicacion:
      "La OMS recomienda la lactancia materna exclusiva hasta los 6 meses y su mantenimiento, junto con alimentación complementaria, después.",
    fuente: "OMS, lactancia materna",
    dificultad: "facil",
    temaSlug: "enf-26",
  },
  {
    enunciado:
      "La atención al parto normal recomienda que, durante la dilatación y el expulsivo, la mujer pueda:",
    opciones: [
      "Permanecer siempre inmovilizada en decúbito supino",
      "Adoptar la posición que le resulte más cómoda y moverse con libertad",
      "No beber ni moverse en ningún momento",
      "Evitar cualquier medida de alivio del dolor",
    ],
    correctaIndex: 1,
    explicacion:
      "Se recomienda favorecer la libertad de movimiento y que la mujer adopte las posiciones que le resulten más cómodas.",
    fuente: "Estrategia de atención al parto normal",
    dificultad: "media",
    temaSlug: "enf-26",
  },
  {
    enunciado:
      "Antes de realizar intervenciones como la episiotomía o la analgesia epidural, se debe:",
    opciones: [
      "Actuar sin informar para agilizar el proceso",
      "Pedir permiso únicamente al acompañante",
      "Informar a la mujer y contar con su consentimiento, salvo situación de urgencia vital",
      "Registrar el procedimiento después sin comunicarlo",
    ],
    correctaIndex: 2,
    explicacion:
      "Salvo urgencia vital, toda intervención requiere informar a la mujer y obtener su consentimiento, como establece la ley de autonomía del paciente.",
    fuente: "Ley 41/2002, autonomía del paciente",
    dificultad: "media",
    temaSlug: "enf-26",
  },
  {
    enunciado:
      "Respecto a la episiotomía, la evidencia y las recomendaciones actuales indican que debe:",
    opciones: [
      "Realizarse de forma sistemática a todas las mujeres",
      "Practicarse siempre en el primer parto",
      "Sustituir siempre a un posible desgarro",
      "Utilizarse de forma restrictiva y selectiva, no rutinaria",
    ],
    correctaIndex: 3,
    explicacion:
      "La evidencia desaconseja la episiotomía rutinaria y recomienda un uso restrictivo, solo cuando esté clínicamente indicada.",
    fuente: "Estrategia de atención al parto normal",
    dificultad: "media",
    temaSlug: "enf-26",
  },
  {
    enunciado:
      "Las recomendaciones actuales sobre el pinzamiento del cordón umbilical en el recién nacido sano promueven:",
    opciones: [
      "El pinzamiento tardío del cordón, esperando a que deje de latir o al menos entre uno y tres minutos",
      "El pinzamiento inmediato y sistemático",
      "No pinzar nunca el cordón umbilical",
      "Cortar el cordón antes de la salida completa del recién nacido",
    ],
    correctaIndex: 0,
    explicacion:
      "El pinzamiento tardío del cordón en el recién nacido sano mejora las reservas de hierro y se recomienda de forma generalizada.",
    fuente: "Estrategia de atención al parto normal / OMS",
    dificultad: "media",
    temaSlug: "enf-26",
  },
  {
    enunciado: "Durante la atención al parto, respetar la intimidad de la mujer implica:",
    opciones: [
      "Permitir el paso libre de cualquier persona a la sala",
      "Limitar el número de profesionales presentes y preservar su privacidad y dignidad",
      "Realizar exploraciones ante estudiantes sin su permiso",
      "Difundir libremente su información clínica",
    ],
    correctaIndex: 1,
    explicacion:
      "Respetar la intimidad supone preservar la privacidad y la dignidad de la mujer y limitar la presencia de personas a las necesarias.",
    fuente: "Ley 41/2002 / Estrategia de atención al parto normal",
    dificultad: "facil",
    temaSlug: "enf-26",
  },

  // ---------------------------------------------------------------------------
  // Tema enf-27: Principios de Bioética
  // ---------------------------------------------------------------------------
  {
    enunciado: "Los cuatro principios clásicos de la bioética, según Beauchamp y Childress, son:",
    opciones: [
      "Legalidad, jerarquía, publicidad y responsabilidad",
      "Libertad, igualdad, fraternidad y solidaridad",
      "Autonomía, beneficencia, no maleficencia y justicia",
      "Verdad, bondad, belleza y utilidad",
    ],
    correctaIndex: 2,
    explicacion:
      "El modelo principialista de Beauchamp y Childress se basa en los principios de autonomía, beneficencia, no maleficencia y justicia.",
    fuente: "Bioética (Beauchamp y Childress)",
    dificultad: "facil",
    temaSlug: "enf-27",
  },
  {
    enunciado: "El principio de autonomía en bioética se refiere a:",
    opciones: [
      "Hacer siempre el mayor bien posible al paciente",
      "Distribuir los recursos con equidad",
      "No causar ningún daño al paciente",
      "El respeto a la capacidad de la persona para decidir libremente sobre su salud",
    ],
    correctaIndex: 3,
    explicacion:
      "El principio de autonomía exige respetar las decisiones libres e informadas de la persona sobre su propia salud.",
    fuente: "Bioética, principio de autonomía",
    dificultad: "media",
    temaSlug: "enf-27",
  },
  {
    enunciado: "El principio de no maleficencia se resume en:",
    opciones: [
      "No causar daño al paciente (primum non nocere)",
      "Repartir de forma equitativa los recursos",
      "Informar siempre de todo al paciente",
      "Buscar el beneficio económico del profesional",
    ],
    correctaIndex: 0,
    explicacion:
      "La no maleficencia obliga a no producir daño al paciente, expresado en el clásico principio primum non nocere.",
    fuente: "Bioética, principio de no maleficencia",
    dificultad: "media",
    temaSlug: "enf-27",
  },
  {
    enunciado: "El principio de beneficencia obliga al profesional a:",
    opciones: [
      "Respetar la negativa del paciente en cualquier caso",
      "Actuar en beneficio del paciente, procurando su bien",
      "No hacer nada que suponga riesgo",
      "Tratar a todos exactamente igual sin ninguna excepción",
    ],
    correctaIndex: 1,
    explicacion:
      "La beneficencia impone actuar en interés del paciente, promoviendo su bienestar y su bien.",
    fuente: "Bioética, principio de beneficencia",
    dificultad: "media",
    temaSlug: "enf-27",
  },
  {
    enunciado: "El principio de justicia en bioética hace referencia a:",
    opciones: [
      "La obligación de decir siempre la verdad",
      "El respeto a las decisiones del paciente",
      "La distribución equitativa de los recursos y la no discriminación en la atención",
      "La prohibición de causar daño al paciente",
    ],
    correctaIndex: 2,
    explicacion:
      "El principio de justicia exige un reparto equitativo de los recursos y la no discriminación en el acceso a la atención sanitaria.",
    fuente: "Bioética, principio de justicia",
    dificultad: "media",
    temaSlug: "enf-27",
  },
  {
    enunciado:
      "Según Diego Gracia, ante un conflicto entre principios, los de no maleficencia y justicia (nivel de mínimos o ética de lo público) tienen, con carácter general:",
    opciones: [
      "Menor peso que las preferencias individuales",
      "Exactamente el mismo rango que la autonomía en todos los casos",
      "Ninguna relevancia práctica",
      "Prioridad sobre los principios de autonomía y beneficencia (nivel de máximos)",
    ],
    correctaIndex: 3,
    explicacion:
      "Diego Gracia ordena los principios en dos niveles y otorga prioridad al de mínimos (no maleficencia y justicia) sobre el de máximos.",
    fuente: "Bioética (Diego Gracia)",
    dificultad: "dificil",
    temaSlug: "enf-27",
  },
  {
    enunciado:
      "El consentimiento informado es la expresión práctica, sobre todo, del principio de:",
    opciones: ["Autonomía", "Justicia", "No maleficencia", "Beneficencia"],
    correctaIndex: 0,
    explicacion:
      "El consentimiento informado materializa el principio de autonomía, al garantizar decisiones libres e informadas del paciente.",
    fuente: "Bioética y Ley 41/2002",
    dificultad: "media",
    temaSlug: "enf-27",
  },
  {
    enunciado: "Los Comités de Ética Asistencial (CEA) tienen como función:",
    opciones: [
      "Sancionar disciplinariamente a los profesionales",
      "Asesorar, de forma consultiva y no vinculante, en los conflictos éticos de la práctica clínica",
      "Autorizar los presupuestos del hospital",
      "Sustituir a los tribunales de justicia",
    ],
    correctaIndex: 1,
    explicacion:
      "Los CEA son órganos consultivos que asesoran en los conflictos éticos de la asistencia; sus recomendaciones no son vinculantes.",
    fuente: "Comités de Ética Asistencial",
    dificultad: "media",
    temaSlug: "enf-27",
  },
  {
    enunciado:
      "Una característica de los Comités de Ética Asistencial es que su composición debe ser:",
    opciones: [
      "Exclusivamente de personal médico",
      "Únicamente de personal directivo",
      "Multidisciplinar e interprofesional, pudiendo incluir a personas ajenas al ámbito sanitario",
      "Solo de personal de enfermería",
    ],
    correctaIndex: 2,
    explicacion:
      "Los CEA tienen composición multidisciplinar e interprofesional, y suelen incluir a personas ajenas a la sanidad para aportar otras perspectivas.",
    fuente: "Comités de Ética Asistencial",
    dificultad: "media",
    temaSlug: "enf-27",
  },
  {
    enunciado:
      "El órgano encargado de evaluar los aspectos éticos, metodológicos y legales de un proyecto de investigación con seres humanos es:",
    opciones: [
      "El comité de empresa",
      "El Comité de Ética Asistencial (CEA)",
      "La junta de personal del centro",
      "El Comité de Ética de la Investigación (CEI)",
    ],
    correctaIndex: 3,
    explicacion:
      "Los Comités de Ética de la Investigación evalúan los aspectos éticos, metodológicos y legales de los proyectos de investigación con personas.",
    fuente: "Ley 14/2007 de Investigación biomédica",
    dificultad: "media",
    temaSlug: "enf-27",
  },
];
