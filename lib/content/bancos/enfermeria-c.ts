import type { SeedPregunta } from "../tipos";

export const BANCO_ENFERMERIA_C: SeedPregunta[] = [
  // Tema enf-46: Paciente quirúrgico (preoperatorio, ayuno, checklist OMS, profilaxis antitrombótica)
  {
    enunciado:
      "En un paciente adulto sometido a cirugía programada, el ayuno recomendado para líquidos claros es de al menos:",
    opciones: ["8 horas", "6 horas", "2 horas", "12 horas"],
    correctaIndex: 2,
    explicacion:
      "Las guías actuales de ayuno preoperatorio permiten líquidos claros hasta 2 horas antes de la cirugía; el ayuno de 6 horas corresponde a los sólidos ligeros, no a los líquidos claros.",
    fuente: "Recomendaciones de ayuno preoperatorio (SEDAR)",
    dificultad: "media",
    temaSlug: "enf-46",
  },
  {
    enunciado:
      "El listado de verificación de la seguridad quirúrgica de la OMS se estructura en tres fases denominadas:",
    opciones: [
      "Entrada (antes de la inducción), pausa quirúrgica (antes de la incisión) y salida (antes de abandonar el quirófano)",
      "Ingreso, intervención y alta",
      "Preoperatorio, operatorio y postoperatorio",
      "Recepción, anestesia y recuperación",
    ],
    correctaIndex: 0,
    explicacion:
      "El checklist de cirugía segura de la OMS tiene tres momentos: entrada (sign in), pausa quirúrgica o time out (sign out previo a la incisión) y salida (sign out final).",
    fuente: "Listado de verificación de la seguridad quirúrgica de la OMS",
    dificultad: "facil",
    temaSlug: "enf-46",
  },
  {
    enunciado:
      "La profilaxis antitrombótica en el paciente quirúrgico de riesgo se realiza habitualmente con:",
    opciones: [
      "Ácido acetilsalicílico a dosis altas",
      "Heparina de bajo peso molecular",
      "Antibióticos de amplio espectro",
      "Anticoagulantes orales a dosis plenas de forma sistemática",
    ],
    correctaIndex: 1,
    explicacion:
      "La heparina de bajo peso molecular subcutánea es el fármaco de elección para la tromboprofilaxis perioperatoria; los anticoagulantes orales a dosis plenas no se usan de forma sistemática como profilaxis.",
    fuente: "Protocolo de profilaxis tromboembólica perioperatoria",
    dificultad: "media",
    temaSlug: "enf-46",
  },
  {
    enunciado: "Respecto al consentimiento informado quirúrgico, señale la afirmación correcta:",
    opciones: [
      "Debe otorgarse siempre de forma verbal ante testigos",
      "Una vez firmado ya no puede revocarse",
      "Lo firma exclusivamente un familiar del paciente",
      "Debe otorgarse por escrito y el paciente puede revocarlo libremente en cualquier momento",
    ],
    correctaIndex: 3,
    explicacion:
      "La Ley 41/2002 exige consentimiento por escrito en la intervención quirúrgica y reconoce el derecho del paciente a revocarlo libremente y en cualquier momento por escrito.",
    fuente: "Ley 41/2002, art. 8",
    dificultad: "dificil",
    temaSlug: "enf-46",
  },
  {
    enunciado: "La profilaxis antibiótica quirúrgica, cuando está indicada, debe administrarse:",
    opciones: [
      "Dentro de los 60 minutos previos a la incisión quirúrgica",
      "24 horas antes de la intervención",
      "Solo una vez finalizada la cirugía",
      "Durante la fase de recuperación postanestésica",
    ],
    correctaIndex: 0,
    explicacion:
      "La profilaxis antibiótica se administra dentro de los 60 minutos anteriores a la incisión para lograr concentraciones tisulares adecuadas en el momento quirúrgico.",
    fuente: "Protocolo de profilaxis antibiótica quirúrgica",
    dificultad: "media",
    temaSlug: "enf-46",
  },
  {
    enunciado: "El objetivo principal de la pausa quirúrgica (time out) antes de la incisión es:",
    opciones: [
      "Comprobar el inventario del quirófano",
      "Registrar el consumo de material fungible",
      "Confirmar identidad del paciente, procedimiento y sitio quirúrgico antes de la incisión",
      "Realizar el recuento de gasas al finalizar la cirugía",
    ],
    correctaIndex: 2,
    explicacion:
      "La pausa quirúrgica verifica en voz alta y en equipo la identidad del paciente, el procedimiento previsto y el sitio quirúrgico correcto justo antes de la incisión.",
    fuente: "Listado de verificación de la seguridad quirúrgica de la OMS",
    dificultad: "facil",
    temaSlug: "enf-46",
  },
  {
    enunciado: "Cuál de las siguientes NO es una medida adecuada del preoperatorio inmediato:",
    opciones: [
      "Retirar joyas, prótesis dentales y esmalte de uñas",
      "Iniciar anticoagulación oral a dosis plenas de forma sistemática",
      "Verificar el cumplimiento del ayuno",
      "Comprobar que el consentimiento informado está firmado",
    ],
    correctaIndex: 1,
    explicacion:
      "Iniciar anticoagulación oral a dosis plenas de forma sistemática no es una medida preoperatoria; las demás sí forman parte de la preparación inmediata del paciente quirúrgico.",
    fuente: "Manual de preparación preoperatoria de enfermería",
    dificultad: "media",
    temaSlug: "enf-46",
  },
  {
    enunciado: "Respecto al marcado del sitio quirúrgico, la práctica segura recomendada es que:",
    opciones: [
      "El cirujano marque el sitio quirúrgico con el paciente despierto y consciente",
      "El marcado lo realice el celador al entrar en quirófano",
      "El sitio se marque una vez anestesiado el paciente",
      "El marcado del sitio quirúrgico sea opcional y suela omitirse",
    ],
    correctaIndex: 0,
    explicacion:
      "El marcado del sitio quirúrgico lo realiza el cirujano con el paciente despierto y participando en la verificación, para prevenir la cirugía en lugar erróneo.",
    fuente: "Listado de verificación de la seguridad quirúrgica de la OMS",
    dificultad: "media",
    temaSlug: "enf-46",
  },
  {
    enunciado:
      "En un paciente con contraindicación para la profilaxis farmacológica antitrombótica, la alternativa de elección es:",
    opciones: [
      "Aumentar la dosis de anticoagulante oral",
      "Administrar antiagregantes plaquetarios",
      "Mantener reposo absoluto sin movilización",
      "La profilaxis mecánica con medias de compresión graduada o compresión neumática intermitente",
    ],
    correctaIndex: 3,
    explicacion:
      "Cuando la heparina está contraindicada, la profilaxis mecánica (medias de compresión graduada o compresión neumática intermitente) es la alternativa recomendada.",
    fuente: "Protocolo de profilaxis tromboembólica perioperatoria",
    dificultad: "dificil",
    temaSlug: "enf-46",
  },
  {
    enunciado: "La clasificación ASA se utiliza para valorar:",
    opciones: [
      "El riesgo de infección de la herida quirúrgica",
      "La profundidad del plano anestésico durante la cirugía",
      "El estado físico del paciente previo a la anestesia",
      "El nivel de dolor postoperatorio",
    ],
    correctaIndex: 2,
    explicacion:
      "La escala ASA de la American Society of Anesthesiologists clasifica el estado físico del paciente antes de la anestesia como parte de la valoración del riesgo anestésico.",
    fuente: "Clasificación ASA del estado físico",
    dificultad: "facil",
    temaSlug: "enf-46",
  },

  // Tema enf-47: Postquirúrgico (URPA, complicaciones, drenajes, CMA)
  {
    enunciado: "La Unidad de Recuperación Postanestésica (URPA) tiene como objetivo:",
    opciones: [
      "Realizar la intervención quirúrgica programada",
      "Vigilar al paciente en el postoperatorio inmediato hasta recuperar las funciones vitales y los reflejos",
      "Preparar al paciente para la inducción anestésica",
      "Gestionar el alta domiciliaria del paciente",
    ],
    correctaIndex: 1,
    explicacion:
      "En la URPA se monitoriza y vigila al paciente en el postoperatorio inmediato hasta que recupera de forma estable las funciones vitales y los reflejos protectores.",
    fuente: "Manual de cuidados postanestésicos de enfermería",
    dificultad: "facil",
    temaSlug: "enf-47",
  },
  {
    enunciado: "Para valorar el alta del paciente desde la URPA se emplea con frecuencia:",
    opciones: [
      "La escala de Glasgow",
      "La escala de Braden",
      "La escala de Norton",
      "La escala de Aldrete (actividad, respiración, circulación, conciencia y saturación)",
    ],
    correctaIndex: 3,
    explicacion:
      "La escala de Aldrete valora actividad, respiración, circulación, conciencia y saturación de oxígeno para decidir el alta de la unidad de recuperación postanestésica.",
    fuente: "Escala de Aldrete de recuperación postanestésica",
    dificultad: "media",
    temaSlug: "enf-47",
  },
  {
    enunciado: "La dehiscencia de una herida quirúrgica consiste en:",
    opciones: [
      "La separación o apertura de los bordes de una herida suturada",
      "La infección profunda del lecho quirúrgico",
      "La formación de una cicatriz hipertrófica",
      "La acumulación de líquido seroso bajo la piel",
    ],
    correctaIndex: 0,
    explicacion:
      "La dehiscencia es la apertura o separación de los bordes de una herida previamente suturada; no debe confundirse con la infección ni con el seroma.",
    fuente: "Manual de cuidados de heridas quirúrgicas",
    dificultad: "facil",
    temaSlug: "enf-47",
  },
  {
    enunciado: "Ante una evisceración de la herida abdominal, la actuación enfermera inmediata es:",
    opciones: [
      "Reintroducir las vísceras manualmente en la cavidad",
      "Cubrir las vísceras con compresas estériles humedecidas en suero fisiológico y avisar al cirujano",
      "Aplicar un vendaje compresivo seco y dar el alta",
      "Administrar un laxante para favorecer el tránsito",
    ],
    correctaIndex: 1,
    explicacion:
      "Ante la evisceración, las asas expuestas se cubren con compresas estériles humedecidas en suero fisiológico y se avisa al cirujano; nunca deben reintroducirse manualmente.",
    fuente: "Manual de cuidados de heridas quirúrgicas",
    dificultad: "media",
    temaSlug: "enf-47",
  },
  {
    enunciado: "Un signo característico del íleo paralítico postoperatorio es:",
    opciones: [
      "La presencia de ruidos intestinales aumentados",
      "La aparición de diarrea abundante",
      "La ausencia de ruidos intestinales y la distensión abdominal",
      "El aumento del apetito",
    ],
    correctaIndex: 2,
    explicacion:
      "El íleo paralítico cursa con ausencia de peristaltismo (silencio auscultatorio), distensión abdominal y ausencia de deposiciones y ventoseo.",
    fuente: "Manual de complicaciones postoperatorias",
    dificultad: "media",
    temaSlug: "enf-47",
  },
  {
    enunciado: "Un signo sugestivo de trombosis venosa profunda en la extremidad inferior es:",
    opciones: [
      "Palidez y frialdad generalizada de ambas piernas",
      "Disminución del perímetro de la pantorrilla",
      "Ausencia total de dolor en el miembro",
      "Dolor, edema y aumento de temperatura en la pantorrilla",
    ],
    correctaIndex: 3,
    explicacion:
      "La TVP se manifiesta de forma unilateral con dolor, edema, aumento del perímetro y de la temperatura local de la pantorrilla afectada.",
    fuente: "Manual de complicaciones postoperatorias",
    dificultad: "media",
    temaSlug: "enf-47",
  },
  {
    enunciado: "El drenaje tipo Redon se caracteriza por ser:",
    opciones: [
      "Un drenaje aspirativo cerrado con vacío",
      "Un drenaje pasivo por capilaridad",
      "Un drenaje abierto a la gravedad",
      "Un drenaje exclusivo para la cavidad torácica",
    ],
    correctaIndex: 0,
    explicacion:
      "El drenaje de Redon es un sistema cerrado y aspirativo que evacúa colecciones mediante vacío (presión negativa).",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "media",
    temaSlug: "enf-47",
  },
  {
    enunciado: "El drenaje de Penrose es un ejemplo de drenaje:",
    opciones: [
      "Aspirativo cerrado con vacío",
      "Pasivo, que actúa por capilaridad y gravedad",
      "Torácico con sello de agua",
      "De irrigación continua",
    ],
    correctaIndex: 1,
    explicacion:
      "El Penrose es un drenaje pasivo (no aspirativo) de tira de látex que evacúa el exudado por capilaridad y gravedad hacia el apósito.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "dificil",
    temaSlug: "enf-47",
  },
  {
    enunciado: "La Cirugía Mayor Ambulatoria (CMA) se define como:",
    opciones: [
      "Cirugía que siempre requiere ingreso de al menos 48 horas",
      "Cirugía realizada exclusivamente con anestesia general",
      "Procedimientos quirúrgicos que permiten el alta el mismo día, sin ingreso hospitalario",
      "Cirugía urgente realizada fuera del horario habitual",
    ],
    correctaIndex: 2,
    explicacion:
      "La CMA agrupa procedimientos programados que permiten dar el alta al paciente el mismo día de la intervención, sin necesidad de ingreso hospitalario.",
    fuente: "Manual de Cirugía Mayor Ambulatoria",
    dificultad: "facil",
    temaSlug: "enf-47",
  },
  {
    enunciado:
      "Cuál de las siguientes NO es una medida para prevenir las complicaciones respiratorias postoperatorias:",
    opciones: [
      "Realizar fisioterapia respiratoria y ejercicios de inspiración profunda",
      "Fomentar la movilización precoz",
      "Controlar el dolor para permitir una respiración eficaz",
      "Mantener al paciente en reposo absoluto en cama sin movilización",
    ],
    correctaIndex: 3,
    explicacion:
      "El reposo absoluto y la inmovilidad favorecen las atelectasias y las complicaciones respiratorias; la prevención se basa en la movilización precoz, la fisioterapia respiratoria y el control del dolor.",
    fuente: "Manual de complicaciones postoperatorias",
    dificultad: "dificil",
    temaSlug: "enf-47",
  },

  // Tema enf-48: Manejo de heridas (cicatrización, cura húmeda, apósitos, UPP, pie diabético)
  {
    enunciado: "Las fases de la cicatrización de una herida son, por orden:",
    opciones: [
      "Hemostasia e inflamación, proliferación y maduración o remodelación",
      "Maduración, proliferación y hemostasia",
      "Inflamación, necrosis y cicatrización",
      "Proliferación, hemostasia e inflamación",
    ],
    correctaIndex: 0,
    explicacion:
      "La cicatrización sigue una secuencia de hemostasia e inflamación, seguida de la fase proliferativa y finalmente la de maduración o remodelación.",
    fuente: "Manual de cuidados de heridas",
    dificultad: "media",
    temaSlug: "enf-48",
  },
  {
    enunciado: "La cura en ambiente húmedo, frente a la cura tradicional seca:",
    opciones: [
      "Aumenta el dolor y retrasa la cicatrización",
      "Reseca el lecho de la herida favoreciendo la costra",
      "Favorece la cicatrización, reduce el dolor y facilita el desbridamiento autolítico",
      "Está contraindicada en cualquier tipo de herida crónica",
    ],
    correctaIndex: 2,
    explicacion:
      "La cura en ambiente húmedo mantiene el lecho de la herida hidratado, lo que acelera la cicatrización, disminuye el dolor y favorece el desbridamiento autolítico.",
    fuente: "Guía de cura en ambiente húmedo",
    dificultad: "media",
    temaSlug: "enf-48",
  },
  {
    enunciado: "Los apósitos hidrocoloides están indicados principalmente en:",
    opciones: [
      "Heridas con abundante exudado y signos de infección",
      "Heridas con exudado leve o moderado, favoreciendo el desbridamiento autolítico",
      "Quemaduras de tercer grado extensas",
      "Heridas con tejido necrótico seco de forma exclusiva",
    ],
    correctaIndex: 1,
    explicacion:
      "Los hidrocoloides son adecuados para heridas con exudado leve o moderado y promueven el desbridamiento autolítico; no son de elección en heridas muy exudativas o infectadas.",
    fuente: "Guía de apósitos y productos de cura",
    dificultad: "dificil",
    temaSlug: "enf-48",
  },
  {
    enunciado: "Los apósitos de alginato cálcico se caracterizan por:",
    opciones: [
      "Su elevada capacidad de absorción, indicados en heridas muy exudativas",
      "Su uso exclusivo en heridas secas",
      "Su acción como barrera impermeable sin capacidad de absorción",
      "Aportar humedad a heridas sin exudado",
    ],
    correctaIndex: 0,
    explicacion:
      "Los alginatos tienen gran capacidad de absorción y de hemostasia, por lo que se emplean en heridas con exudado abundante; no son adecuados para heridas secas.",
    fuente: "Guía de apósitos y productos de cura",
    dificultad: "media",
    temaSlug: "enf-48",
  },
  {
    enunciado: "Una úlcera por presión de categoría o estadio I se caracteriza por:",
    opciones: [
      "Pérdida parcial del espesor de la piel con ampolla",
      "Presencia de esfacelos y exposición de tejido subcutáneo",
      "Necrosis con exposición de hueso",
      "Eritema no blanqueable en piel intacta",
    ],
    correctaIndex: 3,
    explicacion:
      "La UPP de categoría I es un eritema que no blanquea a la presión sobre piel intacta, signo precoz de daño tisular por presión.",
    fuente: "Clasificación de las úlceras por presión (GNEAUPP)",
    dificultad: "facil",
    temaSlug: "enf-48",
  },
  {
    enunciado: "En una úlcera por presión de categoría o estadio IV existe:",
    opciones: [
      "Eritema no blanqueable sin pérdida de piel",
      "Pérdida parcial del espesor de la dermis",
      "Pérdida total del espesor de los tejidos con exposición de hueso, tendón o músculo",
      "Una zona de piel intacta de color púrpura",
    ],
    correctaIndex: 2,
    explicacion:
      "La categoría IV implica pérdida total del espesor de los tejidos con exposición de estructuras profundas como hueso, tendón o músculo.",
    fuente: "Clasificación de las úlceras por presión (GNEAUPP)",
    dificultad: "media",
    temaSlug: "enf-48",
  },
  {
    enunciado: "La escala de Braden se utiliza para:",
    opciones: [
      "Valorar el riesgo de desarrollar úlceras por presión",
      "Medir el nivel de dolor del paciente",
      "Valorar el nivel de conciencia",
      "Evaluar el riesgo de caídas",
    ],
    correctaIndex: 0,
    explicacion:
      "La escala de Braden estima el riesgo de úlceras por presión valorando percepción sensorial, humedad, actividad, movilidad, nutrición y fricción o cizallamiento.",
    fuente: "Escala de Braden",
    dificultad: "facil",
    temaSlug: "enf-48",
  },
  {
    enunciado: "La escala de Norton valora, entre otros parámetros:",
    opciones: [
      "Únicamente el estado nutricional del paciente",
      "Estado físico y mental, actividad, movilidad e incontinencia",
      "La profundidad y el exudado de la úlcera",
      "El riesgo cardiovascular del paciente",
    ],
    correctaIndex: 1,
    explicacion:
      "La escala de Norton valora estado físico general, estado mental, actividad, movilidad e incontinencia para estimar el riesgo de úlceras por presión.",
    fuente: "Escala de Norton",
    dificultad: "dificil",
    temaSlug: "enf-48",
  },
  {
    enunciado: "La principal medida de prevención de las úlceras por presión es:",
    opciones: [
      "La restricción de líquidos",
      "El masaje enérgico sobre las prominencias óseas enrojecidas",
      "Los cambios posturales programados y el alivio de la presión sobre las prominencias óseas",
      "El reposo absoluto en la misma posición",
    ],
    correctaIndex: 2,
    explicacion:
      "Los cambios posturales programados y las superficies de alivio de la presión son la base de la prevención; el masaje sobre zonas enrojecidas está desaconsejado.",
    fuente: "Guía de prevención de úlceras por presión (GNEAUPP)",
    dificultad: "facil",
    temaSlug: "enf-48",
  },
  {
    enunciado: "En la valoración del pie diabético, la sensibilidad protectora se explora con:",
    opciones: [
      "El esfigmomanómetro",
      "El pulsioxímetro",
      "El diapasón de 512 Hz de forma exclusiva",
      "El monofilamento de Semmes-Weinstein de 10 gramos",
    ],
    correctaIndex: 3,
    explicacion:
      "El monofilamento de Semmes-Weinstein de 10 gramos evalúa la sensibilidad protectora del pie y detecta la neuropatía que predispone al pie diabético.",
    fuente: "Guía de cuidados del pie diabético",
    dificultad: "dificil",
    temaSlug: "enf-48",
  },

  // Tema enf-49: Inmunizaciones (tipos, calendario de Andalucía, contraindicaciones, cadena de frío)
  {
    enunciado: "Son ejemplos de vacunas de virus vivos atenuados:",
    opciones: [
      "Tétanos y difteria",
      "Triple vírica (sarampión, rubéola y parotiditis) y varicela",
      "Hepatitis B y gripe inactivada",
      "Neumococo y meningococo conjugadas",
    ],
    correctaIndex: 1,
    explicacion:
      "La triple vírica y la vacuna de la varicela son vacunas de virus vivos atenuados; el resto de las opciones son vacunas inactivadas o de fracciones antigénicas.",
    fuente: "Manual de vacunaciones",
    dificultad: "media",
    temaSlug: "enf-49",
  },
  {
    enunciado: "Las vacunas de virus vivos atenuados están contraindicadas en:",
    opciones: [
      "La lactancia materna",
      "La edad avanzada",
      "Un catarro leve sin fiebre",
      "El embarazo y la inmunodepresión grave",
    ],
    correctaIndex: 3,
    explicacion:
      "Las vacunas de virus vivos atenuados están contraindicadas en el embarazo y en la inmunodepresión grave por el riesgo teórico de replicación del microorganismo.",
    fuente: "Manual de vacunaciones",
    dificultad: "media",
    temaSlug: "enf-49",
  },
  {
    enunciado:
      "La cadena de frío para la conservación de la mayoría de las vacunas debe mantener una temperatura de:",
    opciones: [
      "Entre +2 ºC y +8 ºC",
      "Entre -20 ºC y -10 ºC",
      "Entre +15 ºC y +25 ºC",
      "Entre 0 ºC y +2 ºC",
    ],
    correctaIndex: 0,
    explicacion:
      "La cadena de frío habitual mantiene las vacunas refrigeradas entre +2 ºC y +8 ºC desde la fabricación hasta la administración.",
    fuente: "Manual de la cadena de frío de vacunas",
    dificultad: "facil",
    temaSlug: "enf-49",
  },
  {
    enunciado: "Respecto a la conservación de la mayoría de las vacunas, es cierto que:",
    opciones: [
      "Deben conservarse siempre congeladas",
      "No deben congelarse, ya que la congelación puede inactivarlas",
      "Pueden conservarse a temperatura ambiente indefinidamente",
      "Requieren exposición a la luz solar directa",
    ],
    correctaIndex: 1,
    explicacion:
      "La congelación deteriora la mayoría de las vacunas y las inactiva; por ello deben mantenerse refrigeradas pero nunca congeladas.",
    fuente: "Manual de la cadena de frío de vacunas",
    dificultad: "dificil",
    temaSlug: "enf-49",
  },
  {
    enunciado: "La vacuna triple vírica se administra por vía:",
    opciones: ["Intramuscular profunda", "Intradérmica", "Subcutánea", "Oral"],
    correctaIndex: 2,
    explicacion:
      "La triple vírica, al ser una vacuna de virus vivos atenuados, se administra por vía subcutánea.",
    fuente: "Manual de vacunaciones",
    dificultad: "media",
    temaSlug: "enf-49",
  },
  {
    enunciado: "Cuál de las siguientes constituye una verdadera contraindicación de la vacunación:",
    opciones: [
      "Un resfriado común",
      "La toma de antibióticos",
      "La prematuridad",
      "Una reacción anafiláctica grave a una dosis previa o a un componente de la vacuna",
    ],
    correctaIndex: 3,
    explicacion:
      "La anafilaxia previa a la vacuna o a alguno de sus componentes es una contraindicación verdadera; el catarro, los antibióticos o la prematuridad son falsas contraindicaciones.",
    fuente: "Manual de vacunaciones",
    dificultad: "media",
    temaSlug: "enf-49",
  },
  {
    enunciado:
      "Cuál de las siguientes es una FALSA contraindicación de la vacunación (por lo que no impide vacunar):",
    opciones: [
      "Un proceso febril leve o un catarro sin fiebre",
      "Una reacción alérgica grave previa a la misma vacuna",
      "La inmunodepresión grave para las vacunas de virus vivos",
      "El embarazo para las vacunas de virus vivos",
    ],
    correctaIndex: 0,
    explicacion:
      "Los procesos febriles leves o los catarros sin fiebre son falsas contraindicaciones y no justifican retrasar la vacunación; las demás sí son contraindicaciones reales.",
    fuente: "Manual de vacunaciones",
    dificultad: "facil",
    temaSlug: "enf-49",
  },
  {
    enunciado: "Respecto a la administración de varias vacunas, como norma general:",
    opciones: [
      "Nunca pueden administrarse dos vacunas el mismo día",
      "Pueden administrarse simultáneamente en lugares anatómicos diferentes",
      "Deben separarse siempre al menos 30 días entre sí",
      "Solo puede administrarse una vacuna al año",
    ],
    correctaIndex: 1,
    explicacion:
      "La mayoría de las vacunas pueden administrarse de forma simultánea en lugares anatómicos distintos sin que disminuya su eficacia ni aumente la reactogenicidad.",
    fuente: "Manual de vacunaciones",
    dificultad: "media",
    temaSlug: "enf-49",
  },
  {
    enunciado:
      "En el calendario de vacunaciones de Andalucía, la vacuna frente al virus del papiloma humano (VPH) se administra a:",
    opciones: [
      "Los 2 meses de vida",
      "Los 6 años, solo a las niñas",
      "Los 12 años, tanto a chicas como a chicos",
      "Los 18 años y de forma voluntaria",
    ],
    correctaIndex: 2,
    explicacion:
      "El calendario de Andalucía incluye la vacunación sistemática frente al VPH a los 12 años, extendida a ambos sexos (chicas y chicos).",
    fuente: "Calendario de vacunaciones de Andalucía",
    dificultad: "dificil",
    temaSlug: "enf-49",
  },
  {
    enunciado:
      "La mayoría de las vacunas inactivadas en el adulto se administran por vía intramuscular en:",
    opciones: [
      "La región glútea",
      "El muslo (vasto externo) en el adulto",
      "La región abdominal",
      "El músculo deltoides",
    ],
    correctaIndex: 3,
    explicacion:
      "En el adulto la vía intramuscular de elección para las vacunas es el músculo deltoides; la región glútea se evita por su menor inmunogenicidad y riesgo neurovascular.",
    fuente: "Manual de vacunaciones",
    dificultad: "facil",
    temaSlug: "enf-49",
  },

  // Tema enf-50: Desarrollo de la conducta humana (Piaget, Erikson, desarrollo psicomotor, hitos)
  {
    enunciado: "Según Piaget, la etapa sensoriomotora abarca aproximadamente:",
    opciones: [
      "Desde los 2 hasta los 7 años",
      "Desde los 7 hasta los 11 años",
      "Desde el nacimiento hasta los 2 años",
      "Desde los 11 años en adelante",
    ],
    correctaIndex: 2,
    explicacion:
      "La etapa sensoriomotora de Piaget va desde el nacimiento hasta los 2 años y se caracteriza por el conocimiento a través de los sentidos y la acción.",
    fuente: "Teoría del desarrollo cognitivo de Piaget",
    dificultad: "media",
    temaSlug: "enf-50",
  },
  {
    enunciado:
      "En la teoría de Piaget, el razonamiento hipotético-deductivo y el pensamiento abstracto aparecen en la etapa:",
    opciones: [
      "De las operaciones formales",
      "Sensoriomotora",
      "Preoperacional",
      "De las operaciones concretas",
    ],
    correctaIndex: 0,
    explicacion:
      "La etapa de las operaciones formales (a partir de los 11-12 años) permite el pensamiento abstracto y el razonamiento hipotético-deductivo.",
    fuente: "Teoría del desarrollo cognitivo de Piaget",
    dificultad: "media",
    temaSlug: "enf-50",
  },
  {
    enunciado: "Según Erikson, el conflicto psicosocial del primer año de vida es:",
    opciones: [
      "Autonomía frente a vergüenza",
      "Confianza frente a desconfianza",
      "Iniciativa frente a culpa",
      "Laboriosidad frente a inferioridad",
    ],
    correctaIndex: 1,
    explicacion:
      "En la teoría psicosocial de Erikson, el primer estadio (0-1 año) plantea el conflicto de confianza frente a desconfianza básica.",
    fuente: "Teoría del desarrollo psicosocial de Erikson",
    dificultad: "media",
    temaSlug: "enf-50",
  },
  {
    enunciado:
      "En la teoría de Erikson, la etapa de la adolescencia se caracteriza por el conflicto:",
    opciones: [
      "Intimidad frente a aislamiento",
      "Generatividad frente a estancamiento",
      "Integridad frente a desesperación",
      "Identidad frente a confusión de rol",
    ],
    correctaIndex: 3,
    explicacion:
      "Erikson sitúa en la adolescencia el conflicto de identidad frente a confusión de rol, clave para la construcción de la propia identidad.",
    fuente: "Teoría del desarrollo psicosocial de Erikson",
    dificultad: "media",
    temaSlug: "enf-50",
  },
  {
    enunciado: "El lactante suele mantenerse sentado sin apoyo aproximadamente a los:",
    opciones: ["6 meses", "2 meses", "12 meses", "18 meses"],
    correctaIndex: 0,
    explicacion:
      "La sedestación sin apoyo se adquiere de forma típica en torno a los 6 meses de edad.",
    fuente: "Tabla de hitos del desarrollo psicomotor",
    dificultad: "media",
    temaSlug: "enf-50",
  },
  {
    enunciado: "La marcha autónoma (caminar sin ayuda) se adquiere de forma típica alrededor de:",
    opciones: ["Los 6 meses", "Los 9 meses", "Los 12 meses", "Los 24 meses"],
    correctaIndex: 2,
    explicacion:
      "La deambulación independiente aparece de forma habitual en torno a los 12 meses, con un margen de normalidad amplio.",
    fuente: "Tabla de hitos del desarrollo psicomotor",
    dificultad: "facil",
    temaSlug: "enf-50",
  },
  {
    enunciado: "La sonrisa social del lactante aparece habitualmente hacia:",
    opciones: [
      "El momento del nacimiento",
      "Las 6-8 semanas de vida",
      "Los 6 meses",
      "El año de vida",
    ],
    correctaIndex: 1,
    explicacion:
      "La sonrisa social, como respuesta al rostro y a la voz del cuidador, aparece de forma característica hacia las 6-8 semanas de vida.",
    fuente: "Tabla de hitos del desarrollo psicomotor",
    dificultad: "dificil",
    temaSlug: "enf-50",
  },
  {
    enunciado:
      "El egocentrismo y el pensamiento simbólico caracterizan la etapa de Piaget denominada:",
    opciones: [
      "Preoperacional (2-7 años)",
      "Sensoriomotora",
      "De las operaciones concretas",
      "De las operaciones formales",
    ],
    correctaIndex: 0,
    explicacion:
      "La etapa preoperacional (2-7 años) se caracteriza por el pensamiento simbólico, el juego de ficción y el egocentrismo cognitivo.",
    fuente: "Teoría del desarrollo cognitivo de Piaget",
    dificultad: "media",
    temaSlug: "enf-50",
  },
  {
    enunciado: "Respecto al reflejo de Moro en el lactante, es cierto que:",
    opciones: [
      "Persiste durante toda la vida",
      "Indica siempre una lesión neurológica",
      "Aparece a partir del primer año de vida",
      "Es un reflejo primitivo que desaparece normalmente hacia los 4-6 meses",
    ],
    correctaIndex: 3,
    explicacion:
      "El reflejo de Moro es un reflejo primitivo presente al nacer que desaparece de forma normal hacia los 4-6 meses; su persistencia o ausencia puede indicar alteración neurológica.",
    fuente: "Exploración neurológica del lactante",
    dificultad: "facil",
    temaSlug: "enf-50",
  },
  {
    enunciado: "La pinza digital fina (índice-pulgar) se desarrolla de forma típica alrededor de:",
    opciones: ["Los 3 meses", "Los 6 meses", "Los 9-12 meses", "Los 24 meses"],
    correctaIndex: 2,
    explicacion:
      "La pinza fina que enfrenta el pulgar y el índice se adquiere de forma característica en torno a los 9-12 meses.",
    fuente: "Tabla de hitos del desarrollo psicomotor",
    dificultad: "facil",
    temaSlug: "enf-50",
  },

  // Tema enf-51: Recién nacido sano (Apgar, piel con piel, cordón, vitamina K, cribados, lactancia)
  {
    enunciado: "El test de Apgar valora cinco parámetros del recién nacido, que son:",
    opciones: [
      "Peso, talla, perímetro cefálico, temperatura y glucemia",
      "Frecuencia cardíaca, esfuerzo respiratorio, tono muscular, respuesta a estímulos y color de la piel",
      "Reflejos, llanto, diuresis, deposiciones y succión",
      "Tensión arterial, saturación, diuresis, temperatura y peso",
    ],
    correctaIndex: 1,
    explicacion:
      "El Apgar evalúa frecuencia cardíaca, esfuerzo respiratorio, tono muscular, respuesta a estímulos (irritabilidad refleja) y coloración de la piel.",
    fuente: "Test de Apgar",
    dificultad: "facil",
    temaSlug: "enf-51",
  },
  {
    enunciado: "El test de Apgar se realiza habitualmente:",
    opciones: [
      "Solo en el momento del nacimiento",
      "A las 24 horas de vida",
      "A la hora y a las 24 horas",
      "Al minuto y a los cinco minutos de vida",
    ],
    correctaIndex: 3,
    explicacion:
      "El Apgar se valora al minuto y a los cinco minutos de vida; si la puntuación es baja, se repite cada cinco minutos.",
    fuente: "Test de Apgar",
    dificultad: "media",
    temaSlug: "enf-51",
  },
  {
    enunciado: "Una puntuación de Apgar entre 7 y 10 indica:",
    opciones: [
      "Un recién nacido en buen estado (normal)",
      "Una depresión moderada",
      "Una depresión grave que requiere reanimación avanzada",
      "Una situación incompatible con la vida",
    ],
    correctaIndex: 0,
    explicacion:
      "Una puntuación de 7 a 10 refleja un recién nacido en buen estado; 4-6 indica depresión moderada y 0-3 depresión grave.",
    fuente: "Test de Apgar",
    dificultad: "media",
    temaSlug: "enf-51",
  },
  {
    enunciado: "El contacto piel con piel precoz entre la madre y el recién nacido:",
    opciones: [
      "Aumenta el riesgo de hipotermia del recién nacido",
      "Favorece el vínculo, la termorregulación y el inicio de la lactancia materna",
      "Debe evitarse en las primeras horas de vida",
      "Interfiere con la adaptación del recién nacido",
    ],
    correctaIndex: 1,
    explicacion:
      "El contacto piel con piel precoz mejora la termorregulación, refuerza el vínculo madre-hijo y facilita el inicio temprano de la lactancia materna.",
    fuente: "Guía de atención al recién nacido sano",
    dificultad: "facil",
    temaSlug: "enf-51",
  },
  {
    enunciado: "La administración de vitamina K al recién nacido tiene como finalidad:",
    opciones: [
      "Prevenir la ictericia neonatal",
      "Favorecer la ganancia de peso",
      "Prevenir la enfermedad hemorrágica del recién nacido",
      "Estimular el sistema inmunitario",
    ],
    correctaIndex: 2,
    explicacion:
      "La vitamina K se administra al nacer para prevenir la enfermedad hemorrágica del recién nacido, causada por el déficit fisiológico de factores de coagulación dependientes de esta vitamina.",
    fuente: "Guía de atención al recién nacido sano",
    dificultad: "media",
    temaSlug: "enf-51",
  },
  {
    enunciado:
      "El cuidado recomendado actualmente del cordón umbilical en el recién nacido sano es:",
    opciones: [
      "Aplicar alcohol de 70º varias veces al día",
      "Cubrirlo con un apósito oclusivo permanente",
      "Aplicar antibiótico tópico de forma sistemática",
      "Mantenerlo limpio y seco (cura seca)",
    ],
    correctaIndex: 3,
    explicacion:
      "En entornos con buenas condiciones higiénicas se recomienda la cura seca: mantener el cordón limpio y seco, sin antisépticos ni apósitos oclusivos de rutina.",
    fuente: "Guía de atención al recién nacido sano",
    dificultad: "dificil",
    temaSlug: "enf-51",
  },
  {
    enunciado: "La prueba del talón (cribado neonatal) permite detectar precozmente:",
    opciones: [
      "Enfermedades metabólicas y endocrinas como el hipotiroidismo congénito y la fenilcetonuria",
      "Malformaciones cardíacas congénitas",
      "La hipoacusia congénita",
      "La luxación congénita de cadera",
    ],
    correctaIndex: 0,
    explicacion:
      "El cribado neonatal mediante la prueba del talón detecta enfermedades metabólicas y endocrinas congénitas, como el hipotiroidismo congénito y la fenilcetonuria.",
    fuente: "Programa de cribado neonatal de Andalucía",
    dificultad: "dificil",
    temaSlug: "enf-51",
  },
  {
    enunciado: "El cribado auditivo neonatal se realiza para:",
    opciones: [
      "Detectar cardiopatías congénitas",
      "Detectar precozmente la hipoacusia congénita",
      "Valorar la agudeza visual",
      "Descartar enfermedades metabólicas",
    ],
    correctaIndex: 1,
    explicacion:
      "El cribado auditivo neonatal identifica de forma precoz la hipoacusia congénita, permitiendo una intervención temprana que mejora el desarrollo del lenguaje.",
    fuente: "Programa de cribado auditivo neonatal",
    dificultad: "media",
    temaSlug: "enf-51",
  },
  {
    enunciado:
      "La Organización Mundial de la Salud recomienda la lactancia materna exclusiva hasta:",
    opciones: ["Los 2 meses", "Los 4 meses", "Los 6 meses", "Los 12 meses"],
    correctaIndex: 2,
    explicacion:
      "La OMS recomienda la lactancia materna exclusiva durante los primeros 6 meses de vida y su mantenimiento, junto a la alimentación complementaria, hasta los 2 años o más.",
    fuente: "Recomendaciones de lactancia materna (OMS)",
    dificultad: "facil",
    temaSlug: "enf-51",
  },
  {
    enunciado: "Respecto a la lactancia materna, es cierto que:",
    opciones: [
      "Debe ofrecerse cada 4 horas con un horario rígido",
      "Debe suspenderse si el bebé no gana peso en la primera semana",
      "Requiere complementar siempre con fórmula",
      "Debe ofrecerse a demanda, sin horarios rígidos",
    ],
    correctaIndex: 3,
    explicacion:
      "La lactancia materna se ofrece a demanda, respetando las señales de hambre del lactante, sin imponer horarios rígidos ni complementar de forma sistemática.",
    fuente: "Recomendaciones de lactancia materna (OMS)",
    dificultad: "media",
    temaSlug: "enf-51",
  },

  // Tema enf-52: Recién nacido enfermo (prematuridad, ictericia, hipoglucemia, sepsis, método canguro)
  {
    enunciado: "Se considera recién nacido prematuro al nacido antes de:",
    opciones: [
      "Las 42 semanas de gestación",
      "Las 40 semanas de gestación",
      "Las 37 semanas de gestación",
      "Las 32 semanas de gestación de forma exclusiva",
    ],
    correctaIndex: 2,
    explicacion:
      "El recién nacido prematuro o pretérmino es el que nace antes de completar las 37 semanas de gestación.",
    fuente: "Definiciones perinatales (OMS)",
    dificultad: "facil",
    temaSlug: "enf-52",
  },
  {
    enunciado: "La ictericia neonatal se considera patológica, entre otros criterios, cuando:",
    opciones: [
      "Aparece en las primeras 24 horas de vida",
      "Aparece al tercer día de vida",
      "Se limita a la cara del recién nacido",
      "Desaparece espontáneamente en la primera semana",
    ],
    correctaIndex: 0,
    explicacion:
      "La aparición de ictericia en las primeras 24 horas de vida es un signo de alarma que orienta a ictericia patológica, a diferencia de la ictericia fisiológica que suele aparecer a partir del segundo o tercer día.",
    fuente: "Guía de ictericia neonatal",
    dificultad: "media",
    temaSlug: "enf-52",
  },
  {
    enunciado: "La fototerapia en el tratamiento de la ictericia neonatal actúa:",
    opciones: [
      "Aumentando la producción de bilirrubina",
      "Transformando la bilirrubina en productos hidrosolubles que se eliminan sin necesidad de conjugación",
      "Destruyendo los glóbulos rojos circulantes",
      "Estimulando la maduración hepática mediante el calor",
    ],
    correctaIndex: 1,
    explicacion:
      "La luz de la fototerapia isomeriza la bilirrubina en productos hidrosolubles que se eliminan por la bilis y la orina sin necesidad de conjugación hepática.",
    fuente: "Guía de ictericia neonatal",
    dificultad: "media",
    temaSlug: "enf-52",
  },
  {
    enunciado: "Durante la fototerapia del recién nacido es fundamental:",
    opciones: [
      "Suspender la lactancia durante el tratamiento",
      "Mantener al neonato completamente vestido",
      "Aplicar crema hidratante bajo la luz",
      "Proteger los ojos del neonato con un antifaz opaco",
    ],
    correctaIndex: 3,
    explicacion:
      "Durante la fototerapia hay que proteger los ojos con un antifaz opaco para evitar lesiones retinianas y mantener al recién nacido desnudo para maximizar la superficie expuesta.",
    fuente: "Guía de ictericia neonatal",
    dificultad: "facil",
    temaSlug: "enf-52",
  },
  {
    enunciado: "Un signo de hipoglucemia en el recién nacido puede ser:",
    opciones: [
      "Temblores, letargia, hipotonía o dificultad para alimentarse",
      "Fiebre alta y exantema",
      "Estreñimiento y distensión abdominal",
      "Aumento del apetito con hipertensión",
    ],
    correctaIndex: 0,
    explicacion:
      "La hipoglucemia neonatal puede manifestarse con temblores, letargia, hipotonía, succión débil, apneas o convulsiones; muchos casos también pueden ser asintomáticos.",
    fuente: "Guía de hipoglucemia neonatal",
    dificultad: "media",
    temaSlug: "enf-52",
  },
  {
    enunciado: "La sepsis neonatal precoz es aquella que se manifiesta:",
    opciones: [
      "Después de la primera semana de vida",
      "Solo a partir del mes de vida",
      "En las primeras 72 horas de vida",
      "Exclusivamente en el momento del parto",
    ],
    correctaIndex: 2,
    explicacion:
      "La sepsis neonatal precoz aparece en las primeras 72 horas de vida y suele relacionarse con la transmisión vertical de microorganismos maternos.",
    fuente: "Guía de sepsis neonatal",
    dificultad: "media",
    temaSlug: "enf-52",
  },
  {
    enunciado: "El método madre canguro consiste en:",
    opciones: [
      "Introducir al recién nacido en una incubadora cerrada de forma continua",
      "Mantener al recién nacido en contacto piel con piel sobre el pecho de la madre o el padre",
      "Alimentar al neonato exclusivamente por sonda nasogástrica",
      "Aislar al neonato de sus progenitores durante el ingreso",
    ],
    correctaIndex: 1,
    explicacion:
      "El método canguro mantiene al recién nacido, sobre todo prematuro, en contacto piel con piel sobre el pecho de la madre o el padre, en posición vertical.",
    fuente: "Método madre canguro",
    dificultad: "facil",
    temaSlug: "enf-52",
  },
  {
    enunciado: "Entre los beneficios del método canguro en el prematuro se encuentra:",
    opciones: [
      "La mejora de la termorregulación, la estabilidad cardiorrespiratoria y el vínculo",
      "El aumento del riesgo de infecciones nosocomiales",
      "El retraso de la ganancia de peso",
      "La imposibilidad de mantener la lactancia materna",
    ],
    correctaIndex: 0,
    explicacion:
      "El método canguro mejora la termorregulación, la estabilidad cardiorrespiratoria, el vínculo afectivo y favorece la lactancia materna en el prematuro.",
    fuente: "Método madre canguro",
    dificultad: "media",
    temaSlug: "enf-52",
  },
  {
    enunciado: "El síndrome de distrés respiratorio del prematuro se debe fundamentalmente a:",
    opciones: [
      "Una infección bacteriana pulmonar",
      "La aspiración de meconio",
      "Una malformación de la vía aérea superior",
      "El déficit de surfactante pulmonar",
    ],
    correctaIndex: 3,
    explicacion:
      "El síndrome de distrés respiratorio o enfermedad de la membrana hialina del prematuro se debe al déficit de surfactante pulmonar, que provoca colapso alveolar.",
    fuente: "Guía de patología respiratoria neonatal",
    dificultad: "dificil",
    temaSlug: "enf-52",
  },
  {
    enunciado:
      "Cuál de las siguientes NO es una medida adecuada ante el riesgo de hipoglucemia neonatal:",
    opciones: [
      "Iniciar la alimentación precoz del recién nacido",
      "Controlar la glucemia capilar en los neonatos de riesgo",
      "Mantener al recién nacido en ayuno prolongado hasta estabilizar la glucemia",
      "Favorecer el contacto piel con piel y evitar la hipotermia",
    ],
    correctaIndex: 2,
    explicacion:
      "El ayuno prolongado agrava la hipoglucemia; el manejo se basa en la alimentación precoz, el control de la glucemia en neonatos de riesgo y la prevención de la hipotermia.",
    fuente: "Guía de hipoglucemia neonatal",
    dificultad: "dificil",
    temaSlug: "enf-52",
  },

  // Tema enf-53: Cuidados en la infancia (programa de salud infantil, alimentación complementaria, maltrato)
  {
    enunciado: "El Programa de Salud Infantil y del Adolescente tiene como finalidad:",
    opciones: [
      "Vacunar únicamente a los recién nacidos",
      "Realizar el seguimiento del crecimiento y desarrollo del niño mediante controles periódicos y actividades preventivas",
      "Atender exclusivamente las enfermedades agudas del niño",
      "Sustituir la atención pediátrica hospitalaria",
    ],
    correctaIndex: 1,
    explicacion:
      "El programa realiza un seguimiento longitudinal del crecimiento y desarrollo del niño con controles de salud periódicos y actividades de prevención y promoción de la salud.",
    fuente: "Programa de Salud Infantil y del Adolescente de Andalucía",
    dificultad: "facil",
    temaSlug: "enf-53",
  },
  {
    enunciado:
      "La alimentación complementaria en el lactante se recomienda iniciarla, en general, a partir de:",
    opciones: [
      "Las 2 semanas de vida",
      "Los 2 meses de vida",
      "Los 4 meses en todos los casos",
      "Los 6 meses de edad",
    ],
    correctaIndex: 3,
    explicacion:
      "Se recomienda introducir la alimentación complementaria en torno a los 6 meses, manteniendo la lactancia, cuando el lactante muestra madurez neuromuscular y digestiva.",
    fuente: "Guía de alimentación complementaria",
    dificultad: "facil",
    temaSlug: "enf-53",
  },
  {
    enunciado: "En la introducción de alimentos en el lactante, la miel:",
    opciones: [
      "No debe ofrecerse antes de los 12 meses por el riesgo de botulismo",
      "Puede darse desde el nacimiento como endulzante",
      "Es el primer alimento complementario recomendado",
      "Debe darse diariamente desde los 4 meses",
    ],
    correctaIndex: 0,
    explicacion:
      "La miel no debe ofrecerse antes de los 12 meses por el riesgo de botulismo del lactante, ya que puede contener esporas de Clostridium botulinum.",
    fuente: "Guía de alimentación complementaria",
    dificultad: "media",
    temaSlug: "enf-53",
  },
  {
    enunciado: "La leche de vaca entera no debe introducirse como bebida principal antes de:",
    opciones: [
      "Los 4 meses",
      "Los 12 meses de edad",
      "El nacimiento, como alternativa a la lactancia",
      "Los 6 meses, como bebida principal",
    ],
    correctaIndex: 1,
    explicacion:
      "La leche de vaca entera no se recomienda como bebida principal antes de los 12 meses por su composición inadecuada y el riesgo de anemia ferropénica.",
    fuente: "Guía de alimentación complementaria",
    dificultad: "media",
    temaSlug: "enf-53",
  },
  {
    enunciado: "Entre los tipos de maltrato infantil se incluyen:",
    opciones: [
      "Solo el maltrato físico",
      "Solo el abuso sexual",
      "El maltrato físico, el emocional, la negligencia y el abuso sexual",
      "Únicamente la negligencia",
    ],
    correctaIndex: 2,
    explicacion:
      "El maltrato infantil abarca el maltrato físico, el maltrato emocional o psicológico, la negligencia o abandono y el abuso sexual.",
    fuente: "Protocolo de maltrato infantil",
    dificultad: "facil",
    temaSlug: "enf-53",
  },
  {
    enunciado: "La negligencia o abandono como forma de maltrato infantil consiste en:",
    opciones: [
      "Agredir físicamente al niño de forma reiterada",
      "Someter al niño a humillaciones verbales",
      "Utilizar al niño para obtener un beneficio sexual",
      "El fracaso en atender las necesidades básicas del niño (alimentación, higiene, salud y supervisión)",
    ],
    correctaIndex: 3,
    explicacion:
      "La negligencia es la desatención de las necesidades básicas del niño (físicas, de salud, de higiene, de supervisión o afectivas) por parte de quienes deben cubrirlas.",
    fuente: "Protocolo de maltrato infantil",
    dificultad: "dificil",
    temaSlug: "enf-53",
  },
  {
    enunciado: "Ante la sospecha de maltrato infantil, el profesional sanitario debe:",
    opciones: [
      "Registrar los hallazgos y notificarlo a través de los cauces establecidos (hoja de notificación y servicios sociales)",
      "Ignorar la sospecha si no hay pruebas concluyentes",
      "Confrontar directamente a la familia y darle el alta",
      "Esperar a que el niño lo denuncie por sí mismo",
    ],
    correctaIndex: 0,
    explicacion:
      "El profesional tiene el deber de registrar objetivamente los hallazgos y notificar la sospecha por los cauces establecidos (hoja de notificación, servicios sociales y, si procede, autoridad judicial).",
    fuente: "Protocolo de maltrato infantil",
    dificultad: "media",
    temaSlug: "enf-53",
  },
  {
    enunciado: "Las gráficas de percentiles en la infancia se utilizan para:",
    opciones: [
      "Diagnosticar enfermedades infecciosas",
      "Valorar y monitorizar el crecimiento comparándolo con la población de referencia",
      "Determinar el grupo sanguíneo",
      "Calcular la dosis de las vacunas",
    ],
    correctaIndex: 1,
    explicacion:
      "Las curvas de percentiles permiten valorar el crecimiento (peso, talla, perímetro cefálico) del niño en relación con la población de referencia y detectar desviaciones.",
    fuente: "Programa de Salud Infantil y del Adolescente de Andalucía",
    dificultad: "media",
    temaSlug: "enf-53",
  },
  {
    enunciado:
      "Para prevenir el síndrome de muerte súbita del lactante se recomienda que el bebé duerma:",
    opciones: [
      "Boca abajo (decúbito prono)",
      "De lado (decúbito lateral)",
      "Boca arriba (decúbito supino)",
      "Sentado en una hamaca",
    ],
    correctaIndex: 2,
    explicacion:
      "Colocar al lactante a dormir boca arriba (decúbito supino) es la medida más eficaz para reducir el riesgo de síndrome de muerte súbita del lactante.",
    fuente: "Recomendaciones de prevención del síndrome de muerte súbita del lactante",
    dificultad: "media",
    temaSlug: "enf-53",
  },
  {
    enunciado:
      "Cuál de las siguientes NO forma parte de las actividades del programa del niño sano:",
    opciones: [
      "El seguimiento del crecimiento y desarrollo",
      "El consejo sobre alimentación y hábitos saludables",
      "La detección precoz de problemas de salud",
      "La prescripción sistemática de antibióticos preventivos",
    ],
    correctaIndex: 3,
    explicacion:
      "La prescripción sistemática de antibióticos no forma parte del programa del niño sano; sus actividades son preventivas: seguimiento del desarrollo, consejo de salud y cribados.",
    fuente: "Programa de Salud Infantil y del Adolescente de Andalucía",
    dificultad: "dificil",
    temaSlug: "enf-53",
  },

  // Tema enf-54: Cuidados en la adolescencia (conductas de riesgo, TCA, Forma Joven)
  {
    enunciado:
      "La Organización Mundial de la Salud define la adolescencia como el periodo comprendido entre:",
    opciones: [
      "Los 6 y los 12 años",
      "Los 12 y los 25 años",
      "Los 10 y los 19 años",
      "Los 15 y los 29 años",
    ],
    correctaIndex: 2,
    explicacion:
      "La OMS establece la adolescencia entre los 10 y los 19 años; el intervalo de 15 a 24 años corresponde al concepto de juventud.",
    fuente: "Definición de adolescencia (OMS)",
    dificultad: "facil",
    temaSlug: "enf-54",
  },
  {
    enunciado: "Entre las principales conductas de riesgo en la adolescencia se encuentran:",
    opciones: [
      "El consumo de alcohol y otras drogas, las relaciones sexuales sin protección y la conducción temeraria",
      "El exceso de horas de estudio",
      "La práctica de deporte reglado",
      "La asistencia regular a las revisiones de salud",
    ],
    correctaIndex: 0,
    explicacion:
      "Las conductas de riesgo típicas de la adolescencia incluyen el consumo de sustancias, las prácticas sexuales sin protección y los comportamientos de riesgo vial o accidentes.",
    fuente: "Guía de salud del adolescente",
    dificultad: "facil",
    temaSlug: "enf-54",
  },
  {
    enunciado: "La anorexia nerviosa se caracteriza principalmente por:",
    opciones: [
      "Episodios de atracones con vómitos posteriores",
      "Una restricción de la ingesta con miedo intenso a ganar peso y alteración de la imagen corporal",
      "Una ingesta compulsiva sin control ni conductas compensatorias",
      "Un rechazo selectivo solo a determinados sabores",
    ],
    correctaIndex: 1,
    explicacion:
      "La anorexia nerviosa cursa con restricción de la ingesta, bajo peso, miedo intenso a engordar y una distorsión de la imagen corporal.",
    fuente: "Criterios diagnósticos de los trastornos de la conducta alimentaria",
    dificultad: "media",
    temaSlug: "enf-54",
  },
  {
    enunciado: "La bulimia nerviosa se caracteriza por:",
    opciones: [
      "Restricción severa de la ingesta con peso muy bajo",
      "Ausencia de preocupación por el peso corporal",
      "Ingesta normal con miedo a engordar pero sin conductas de purga",
      "Episodios de atracones seguidos de conductas compensatorias (vómitos, laxantes o ejercicio excesivo)",
    ],
    correctaIndex: 3,
    explicacion:
      "La bulimia nerviosa se define por atracones recurrentes seguidos de conductas compensatorias inapropiadas (vómitos autoinducidos, laxantes, diuréticos o ejercicio excesivo).",
    fuente: "Criterios diagnósticos de los trastornos de la conducta alimentaria",
    dificultad: "media",
    temaSlug: "enf-54",
  },
  {
    enunciado: "El signo de Russell (callosidades o erosiones en el dorso de la mano) se asocia a:",
    opciones: [
      "El vómito autoinducido de forma repetida",
      "El ayuno prolongado sin purgas",
      "El consumo excesivo de líquidos",
      "La práctica intensa de ejercicio físico",
    ],
    correctaIndex: 0,
    explicacion:
      "El signo de Russell son las lesiones en el dorso de la mano producidas por el roce con los dientes al inducirse el vómito de forma repetida, orientando a conductas purgativas.",
    fuente: "Criterios diagnósticos de los trastornos de la conducta alimentaria",
    dificultad: "dificil",
    temaSlug: "enf-54",
  },
  {
    enunciado: "Una complicación frecuente de la anorexia nerviosa en la mujer es:",
    opciones: [
      "La obesidad",
      "La hipertensión arterial",
      "La amenorrea",
      "La hiperglucemia mantenida",
    ],
    correctaIndex: 2,
    explicacion:
      "La desnutrición y la pérdida de peso de la anorexia nerviosa alteran el eje hormonal y provocan con frecuencia amenorrea en la mujer.",
    fuente: "Criterios diagnósticos de los trastornos de la conducta alimentaria",
    dificultad: "media",
    temaSlug: "enf-54",
  },
  {
    enunciado: "El programa Forma Joven en Andalucía es:",
    opciones: [
      "Un programa de cribado de cáncer",
      "Una estrategia de promoción de la salud dirigida a la población adolescente y joven",
      "Un plan de vacunación del adulto",
      "Una unidad hospitalaria de urgencias pediátricas",
    ],
    correctaIndex: 1,
    explicacion:
      "Forma Joven es una estrategia de promoción de la salud y prevención de riesgos dirigida a adolescentes y jóvenes, con asesorías cercanas a sus espacios habituales.",
    fuente: "Estrategia Forma Joven (Junta de Andalucía)",
    dificultad: "media",
    temaSlug: "enf-54",
  },
  {
    enunciado: "La asesoría de Forma Joven se desarrolla habitualmente en:",
    opciones: [
      "Los centros educativos y otros espacios frecuentados por los jóvenes",
      "Exclusivamente las plantas de hospitalización",
      "Únicamente los domicilios particulares",
      "Solo los servicios de urgencias",
    ],
    correctaIndex: 0,
    explicacion:
      "Forma Joven acerca la promoción de la salud a los entornos donde conviven los jóvenes, especialmente los centros educativos, mediante puntos de información y asesorías.",
    fuente: "Estrategia Forma Joven (Junta de Andalucía)",
    dificultad: "media",
    temaSlug: "enf-54",
  },
  {
    enunciado: "El tratamiento de los trastornos de la conducta alimentaria requiere:",
    opciones: [
      "El aislamiento social del paciente",
      "La restricción total de la alimentación",
      "Un tratamiento exclusivamente farmacológico",
      "Un abordaje multidisciplinar (médico, nutricional y psicológico)",
    ],
    correctaIndex: 3,
    explicacion:
      "Los TCA se abordan con un equipo multidisciplinar que integra el tratamiento médico, la renutrición y el apoyo psicológico y familiar.",
    fuente: "Guía de práctica clínica de los trastornos de la conducta alimentaria",
    dificultad: "facil",
    temaSlug: "enf-54",
  },
  {
    enunciado:
      "En la renutrición de un paciente con anorexia nerviosa grave hay que vigilar especialmente:",
    opciones: [
      "Un aumento rápido y seguro del peso sin riesgos",
      "La necesidad de acelerar al máximo el aporte calórico",
      "El síndrome de realimentación, con riesgo de hipofosfatemia",
      "La conveniencia de mantener el ayuno durante el ingreso",
    ],
    correctaIndex: 2,
    explicacion:
      "La renutrición debe ser gradual para evitar el síndrome de realimentación, que cursa con hipofosfatemia y alteraciones hidroelectrolíticas potencialmente graves.",
    fuente: "Guía de práctica clínica de los trastornos de la conducta alimentaria",
    dificultad: "dificil",
    temaSlug: "enf-54",
  },
  // enf-55 Perspectiva de genero en salud
  {
    enunciado: "En el ámbito sanitario, el sesgo de género se define como:",
    opciones: [
      "La diferencia en el trato o en la atención prestada a mujeres y hombres que no está justificada por razones biológicas y que puede perjudicar la salud",
      "Cualquier diferencia biológica entre el sexo femenino y el masculino",
      "La mayor esperanza de vida que presentan las mujeres respecto a los hombres",
      "La elección libre del profesional sanitario que atiende a cada paciente",
    ],
    correctaIndex: 0,
    explicacion:
      "El sesgo de género es una desigualdad no justificada por la biología en el acceso, el diagnóstico o el tratamiento, que puede tener consecuencias negativas para la salud. No debe confundirse con las diferencias biológicas reales entre sexos.",
    fuente: "Estrategia de equidad de género en salud (SSPA)",
    dificultad: "media",
    temaSlug: "enf-55",
  },
  {
    enunciado: "El concepto de morbilidad diferencial hace referencia a:",
    opciones: [
      "Las enfermedades que solo pueden diagnosticarse mediante pruebas genéticas",
      "La diferente mortalidad hospitalaria según el turno de trabajo",
      "El conjunto de problemas de salud, motivos de consulta y factores de riesgo que se presentan de forma exclusiva o con mayor frecuencia e intensidad en las mujeres",
      "La variabilidad de la práctica clínica entre distintos hospitales",
    ],
    correctaIndex: 2,
    explicacion:
      "La morbilidad diferencial agrupa aquellos problemas de salud propios de las mujeres o más prevalentes en ellas, tanto por causas biológicas como por determinantes sociales de género.",
    fuente: "Estrategia de equidad de género en salud (SSPA)",
    dificultad: "media",
    temaSlug: "enf-55",
  },
  {
    enunciado: "Un ejemplo clásico de sesgo de género en la atención cardiovascular es que:",
    opciones: [
      "Los hombres reciben menos pruebas diagnósticas ante un dolor torácico",
      "El infarto de miocardio en la mujer, que con frecuencia cursa con síntomas menos típicos, se diagnostica y trata con mayor retraso",
      "Las mujeres nunca presentan cardiopatía isquémica",
      "La hipertensión arterial solo afecta a los varones",
    ],
    correctaIndex: 1,
    explicacion:
      "En la mujer el infarto puede manifestarse con síntomas atípicos (fatiga, náuseas, dolor epigástrico o mandibular), lo que unido al sesgo de género retrasa su diagnóstico y tratamiento respecto al varón.",
    fuente: "Estrategia de equidad de género en salud (SSPA)",
    dificultad: "media",
    temaSlug: "enf-55",
  },
  {
    enunciado:
      "El parte de lesiones emitido ante una agresión o sospecha de violencia debe remitirse a:",
    opciones: [
      "La dirección del centro sanitario únicamente",
      "La aseguradora del paciente",
      "El colegio profesional correspondiente",
      "El juzgado de guardia",
    ],
    correctaIndex: 3,
    explicacion:
      "El parte de lesiones es un documento médico-legal que el profesional está obligado a cumplimentar y remitir al juzgado de guardia; además se entrega copia a la víctima y se archiva en la historia clínica.",
    fuente: "Protocolo común para la actuación sanitaria ante la violencia de género",
    dificultad: "media",
    temaSlug: "enf-55",
  },
  {
    enunciado:
      "Según la Ley Orgánica 1/2004, la violencia de género es aquella que se ejerce sobre las mujeres por parte de:",
    opciones: [
      "Quienes sean o hayan sido sus cónyuges o estén o hayan estado ligados a ellas por relaciones similares de afectividad, aun sin convivencia",
      "Cualquier persona desconocida en el ámbito laboral",
      "Exclusivamente familiares de segundo grado",
      "Únicamente personas que convivan en el mismo domicilio",
    ],
    correctaIndex: 0,
    explicacion:
      "La LO 1/2004 delimita la violencia de género a la ejercida por hombres que son o han sido pareja o expareja de la mujer, aun sin convivencia. Otras violencias contra la mujer se abordan en normas distintas.",
    fuente: "Ley Orgánica 1/2004, art. 1",
    dificultad: "facil",
    temaSlug: "enf-55",
  },
  {
    enunciado:
      "Cuál de los siguientes NO se considera un indicador de sospecha de violencia de género en la consulta:",
    opciones: [
      "Lesiones frecuentes cuya explicación no concuerda con el mecanismo referido",
      "Acudir a revisión ginecológica programada sin ninguna incidencia",
      "Síntomas psicosomáticos de repetición y clínica ansioso-depresiva",
      "Retrasos reiterados en la búsqueda de asistencia y actitud temerosa",
    ],
    correctaIndex: 1,
    explicacion:
      "Acudir a una revisión programada sin incidencias es una conducta de salud normal, no un signo de alarma. Los demás son indicadores de sospecha recogidos en el protocolo común.",
    fuente: "Protocolo común para la actuación sanitaria ante la violencia de género",
    dificultad: "facil",
    temaSlug: "enf-55",
  },
  {
    enunciado:
      "Ante la sospecha de violencia de género, una actuación básica del profesional sanitario es:",
    opciones: [
      "Comunicar de inmediato el caso a la familia del agresor",
      "Evitar cualquier pregunta para no incomodar a la paciente",
      "Realizar la entrevista a solas, sin la presencia del acompañante, en un clima de confianza y seguridad",
      "Derivar siempre y solo al servicio de urgencias hospitalarias",
    ],
    correctaIndex: 2,
    explicacion:
      "La entrevista debe hacerse a solas con la mujer, sin la pareja u otros acompañantes, garantizando confidencialidad y seguridad; solo así puede detectarse y abordarse la situación.",
    fuente: "Protocolo común para la actuación sanitaria ante la violencia de género",
    dificultad: "media",
    temaSlug: "enf-55",
  },
  {
    enunciado:
      "La norma estatal de referencia en materia de protección integral contra la violencia de género es:",
    opciones: [
      "La Ley Orgánica 1/2004, de Medidas de Protección Integral contra la Violencia de Género",
      "La Ley 41/2002, de autonomía del paciente",
      "La Ley 14/1986, General de Sanidad",
      "La Ley 31/1995, de Prevención de Riesgos Laborales",
    ],
    correctaIndex: 0,
    explicacion:
      "La LO 1/2004 establece el marco integral (medidas de sensibilización, derechos de las víctimas, tutela penal y judicial) frente a la violencia de género. Las demás regulan otras materias sanitarias o laborales.",
    fuente: "Ley Orgánica 1/2004",
    dificultad: "facil",
    temaSlug: "enf-55",
  },
  {
    enunciado:
      "Tras cumplimentar el parte de lesiones por una agresión, el profesional debe además:",
    opciones: [
      "Destruir la copia para proteger la intimidad de la paciente",
      "Entregar una copia a la propia mujer e informarla de su situación y recursos disponibles",
      "Publicar el contenido en el tablón del centro de salud",
      "Enviarlo únicamente a la inspección de trabajo",
    ],
    correctaIndex: 1,
    explicacion:
      "Además de remitirlo al juzgado, se entrega copia a la víctima y se le informa de su situación, recursos sociales y de protección, siempre respetando su autonomía y seguridad.",
    fuente: "Protocolo común para la actuación sanitaria ante la violencia de género",
    dificultad: "media",
    temaSlug: "enf-55",
  },
  {
    enunciado: "El androcentrismo en la investigación biomédica se refleja históricamente en:",
    opciones: [
      "La inclusión mayoritaria de mujeres en los ensayos clínicos",
      "El uso exclusivo de modelos animales hembra",
      "La financiación preferente de enfermedades femeninas",
      "La infrarrepresentación de las mujeres en los ensayos clínicos, extrapolando a ellas resultados obtenidos mayoritariamente en varones",
    ],
    correctaIndex: 3,
    explicacion:
      "Durante décadas los ensayos se realizaron predominantemente con varones y sus resultados se aplicaron a las mujeres, lo que constituye un sesgo androcéntrico con impacto en la eficacia y seguridad de los tratamientos.",
    fuente: "Estrategia de equidad de género en salud (SSPA)",
    dificultad: "dificil",
    temaSlug: "enf-55",
  },

  // enf-56 Mujer gestante
  {
    enunciado:
      "Según el proceso de seguimiento del embarazo, la primera consulta prenatal debe realizarse preferentemente:",
    opciones: [
      "Después de la semana 20 de gestación",
      "Solo en el tercer trimestre",
      "Antes de la semana 12 de gestación (primer trimestre)",
      "Únicamente si aparecen complicaciones",
    ],
    correctaIndex: 2,
    explicacion:
      "La captación precoz de la gestante y la primera visita antes de la semana 12 permiten valorar riesgos, solicitar el cribado del primer trimestre e iniciar la educación sanitaria.",
    fuente: "Proceso Asistencial Integrado Embarazo, Parto y Puerperio (SSPA)",
    dificultad: "facil",
    temaSlug: "enf-56",
  },
  {
    enunciado:
      "La preeclampsia se caracteriza por la aparición, después de la semana 20 de gestación, de:",
    opciones: [
      "Hipertensión arterial acompañada habitualmente de proteinuria",
      "Hipotensión y bradicardia mantenidas",
      "Poliuria con glucemias normales",
      "Anemia ferropénica aislada",
    ],
    correctaIndex: 0,
    explicacion:
      "La preeclampsia es un trastorno hipertensivo del embarazo que aparece tras la semana 20, definido por hipertensión (>= 140/90 mmHg) asociada de forma típica a proteinuria u otros signos de afectación orgánica.",
    fuente: "Proceso Asistencial Integrado Embarazo, Parto y Puerperio (SSPA)",
    dificultad: "media",
    temaSlug: "enf-56",
  },
  {
    enunciado:
      "En una gestante con preeclampsia, cuál de los siguientes es un signo de alarma de gravedad:",
    opciones: [
      "Aumento fisiológico del perímetro abdominal",
      "Ligero cansancio al final del día",
      "Aparición de estrías en el abdomen",
      "Cefalea intensa, alteraciones visuales y dolor epigástrico o en hipocondrio derecho",
    ],
    correctaIndex: 3,
    explicacion:
      "La cefalea que no cede, las alteraciones visuales (fosfenos, visión borrosa) y la epigastralgia o dolor en hipocondrio derecho son signos de preeclampsia grave que exigen valoración urgente.",
    fuente: "Proceso Asistencial Integrado Embarazo, Parto y Puerperio (SSPA)",
    dificultad: "media",
    temaSlug: "enf-56",
  },
  {
    enunciado:
      "El cribado de la diabetes gestacional se realiza habitualmente mediante el test de O'Sullivan, que consiste en:",
    opciones: [
      "Una determinación de hemoglobina glicosilada en ayunas",
      "La administración de 50 g de glucosa y la medición de la glucemia una hora después, entre las semanas 24 y 28",
      "Una ecografía abdominal para medir al feto",
      "La medición de cuerpos cetónicos en orina de 24 horas",
    ],
    correctaIndex: 1,
    explicacion:
      "El test de O'Sullivan (sobrecarga con 50 g de glucosa y glucemia a la hora) es la prueba de cribado de diabetes gestacional; se realiza en el segundo trimestre (semanas 24-28) y, si es positivo, se confirma con la sobrecarga oral de glucosa.",
    fuente: "Proceso Asistencial Integrado Embarazo, Parto y Puerperio (SSPA)",
    dificultad: "media",
    temaSlug: "enf-56",
  },
  {
    enunciado:
      "La suplementación con ácido fólico en el periodo periconcepcional y primer trimestre tiene como finalidad principal:",
    opciones: [
      "Prevenir la anemia del recién nacido tras el parto",
      "Aumentar el peso fetal en el tercer trimestre",
      "Reducir el riesgo de defectos del tubo neural en el feto",
      "Evitar las náuseas y vómitos del embarazo",
    ],
    correctaIndex: 2,
    explicacion:
      "El ácido fólico, iniciado idealmente antes de la concepción y mantenido en las primeras semanas, previene defectos del cierre del tubo neural como la espina bífida.",
    fuente: "Proceso Asistencial Integrado Embarazo, Parto y Puerperio (SSPA)",
    dificultad: "facil",
    temaSlug: "enf-56",
  },
  {
    enunciado: "Un objetivo fundamental de los programas de educación maternal es:",
    opciones: [
      "Sustituir el control clínico del embarazo por sesiones grupales",
      "Garantizar que el parto se realice mediante cesárea programada",
      "Seleccionar el sexo del recién nacido",
      "Preparar física y psicológicamente a la mujer y su pareja para el embarazo, el parto, el puerperio y la crianza",
    ],
    correctaIndex: 3,
    explicacion:
      "La educación maternal proporciona información y entrenamiento (respiración, relajación, lactancia, cuidados del recién nacido) para afrontar el proceso con autonomía; no sustituye el seguimiento clínico.",
    fuente: "Proceso Asistencial Integrado Embarazo, Parto y Puerperio (SSPA)",
    dificultad: "facil",
    temaSlug: "enf-56",
  },
  {
    enunciado: "La regla de Naegele se utiliza en el seguimiento del embarazo para:",
    opciones: [
      "Calcular la fecha probable de parto a partir de la fecha de la última regla",
      "Estimar el peso fetal por ecografía",
      "Valorar el bienestar fetal mediante monitorización",
      "Determinar el grupo sanguíneo de la gestante",
    ],
    correctaIndex: 0,
    explicacion:
      "La regla de Naegele estima la fecha probable de parto sumando 7 días y restando 3 meses a la fecha de la última menstruación (añadiendo un año), asumiendo ciclos regulares de 28 días.",
    fuente: "Proceso Asistencial Integrado Embarazo, Parto y Puerperio (SSPA)",
    dificultad: "media",
    temaSlug: "enf-56",
  },
  {
    enunciado:
      "Entre las vacunas recomendadas de forma sistemática durante el embarazo se encuentran:",
    opciones: [
      "La triple vírica y la de la varicela",
      "La antimeningocócica y la del papiloma humano",
      "La de la tosferina (dTpa) y la de la gripe",
      "La de la fiebre amarilla y la del sarampión",
    ],
    correctaIndex: 2,
    explicacion:
      "En la gestante se recomiendan la vacuna de la tosferina (dTpa) y la de la gripe. Las vacunas de virus vivos atenuados, como triple vírica o varicela, están contraindicadas en el embarazo.",
    fuente: "Calendario de vacunación. Vacunación en embarazadas (SSPA)",
    dificultad: "dificil",
    temaSlug: "enf-56",
  },
  {
    enunciado:
      "La eclampsia se define como la aparición, en una gestante con enfermedad hipertensiva del embarazo, de:",
    opciones: [
      "Edemas en miembros inferiores de forma aislada",
      "Convulsiones no atribuibles a otra causa",
      "Hipoglucemia sintomática",
      "Contracciones uterinas de parto",
    ],
    correctaIndex: 1,
    explicacion:
      "La eclampsia es la complicación más grave del espectro preeclampsia, definida por la aparición de convulsiones tónico-clónicas que no pueden atribuirse a otra causa. Constituye una emergencia obstétrica.",
    fuente: "Proceso Asistencial Integrado Embarazo, Parto y Puerperio (SSPA)",
    dificultad: "media",
    temaSlug: "enf-56",
  },
  {
    enunciado:
      "Se considera que una gestación es a término cuando el parto se produce entre las semanas:",
    opciones: [
      "28 y 34 de gestación",
      "32 y 36 de gestación",
      "42 y 44 de gestación",
      "37 y 42 de gestación",
    ],
    correctaIndex: 3,
    explicacion:
      "El embarazo a término se sitúa entre las semanas 37 y 42. Antes de la 37 se considera pretérmino y a partir de la 42 postérmino.",
    fuente: "Proceso Asistencial Integrado Embarazo, Parto y Puerperio (SSPA)",
    dificultad: "facil",
    temaSlug: "enf-56",
  },

  // enf-57 Climaterio
  {
    enunciado: "La menopausia se define como:",
    opciones: [
      "El cese permanente de la menstruación, que se confirma retrospectivamente tras 12 meses consecutivos de amenorrea",
      "La primera menstruación de la vida de la mujer",
      "Cualquier alteración del ciclo menstrual antes de los 40 años",
      "El periodo de mayor fertilidad de la mujer",
    ],
    correctaIndex: 0,
    explicacion:
      "La menopausia es el cese definitivo de las menstruaciones por agotamiento folicular; se establece de forma retrospectiva cuando han transcurrido 12 meses seguidos sin regla.",
    fuente: "Guía de atención a la mujer en el climaterio (SSPA)",
    dificultad: "facil",
    temaSlug: "enf-57",
  },
  {
    enunciado: "La diferencia entre climaterio y menopausia es que:",
    opciones: [
      "Son términos sinónimos y equivalentes",
      "El climaterio solo afecta a mujeres menores de 40 años",
      "El climaterio es el periodo de transición entre la etapa reproductiva y la no reproductiva, mientras que la menopausia es la última menstruación",
      "La menopausia dura varios años y el climaterio es un único día",
    ],
    correctaIndex: 2,
    explicacion:
      "El climaterio es una etapa amplia de transición que incluye la perimenopausia y la posmenopausia; la menopausia es un hecho puntual: la última regla.",
    fuente: "Guía de atención a la mujer en el climaterio (SSPA)",
    dificultad: "media",
    temaSlug: "enf-57",
  },
  {
    enunciado: "El síntoma vasomotor más característico del climaterio es:",
    opciones: [
      "La cefalea tensional",
      "El sofoco o crisis de calor",
      "El dolor articular matutino",
      "La pérdida de audición",
    ],
    correctaIndex: 1,
    explicacion:
      "Los sofocos (sensación brusca de calor con enrojecimiento y sudoración) son la manifestación vasomotora típica del climaterio, relacionada con el descenso de estrógenos.",
    fuente: "Guía de atención a la mujer en el climaterio (SSPA)",
    dificultad: "facil",
    temaSlug: "enf-57",
  },
  {
    enunciado: "La osteoporosis se define como una enfermedad esquelética caracterizada por:",
    opciones: [
      "Un aumento excesivo de la densidad del hueso",
      "La inflamación crónica de las articulaciones",
      "El depósito de ácido úrico en las articulaciones",
      "Una disminución de la masa ósea y un deterioro de la microarquitectura del hueso que aumentan la fragilidad y el riesgo de fractura",
    ],
    correctaIndex: 3,
    explicacion:
      "La osteoporosis conlleva baja densidad mineral ósea y deterioro estructural del hueso, con mayor fragilidad y riesgo de fractura. La densitometría la define con un T-score menor o igual a -2,5.",
    fuente: "Guía de atención a la mujer en el climaterio (SSPA)",
    dificultad: "media",
    temaSlug: "enf-57",
  },
  {
    enunciado: "La prueba de referencia para el diagnóstico de la osteoporosis es:",
    opciones: [
      "La densitometría ósea (DEXA)",
      "La radiografía simple de tórax",
      "La analítica de perfil lipídico",
      "La ecografía abdominal",
    ],
    correctaIndex: 0,
    explicacion:
      "La densitometría ósea por absorciometría dual de rayos X (DEXA) mide la densidad mineral ósea y es la prueba de referencia para diagnosticar y clasificar la osteoporosis.",
    fuente: "Guía de atención a la mujer en el climaterio (SSPA)",
    dificultad: "media",
    temaSlug: "enf-57",
  },
  {
    enunciado:
      "Dentro de las medidas de prevención de la osteoporosis en el climaterio, se recomienda:",
    opciones: [
      "El reposo absoluto y la reducción de la actividad física",
      "Un aporte adecuado de calcio y vitamina D junto con ejercicio físico regular con carga",
      "El aumento del consumo de tabaco y alcohol",
      "Evitar totalmente la exposición al sol",
    ],
    correctaIndex: 1,
    explicacion:
      "La prevención incluye una ingesta suficiente de calcio y vitamina D, ejercicio con carga (caminar, fuerza), abandono del tabaco y del alcohol y una exposición solar moderada que favorezca la síntesis de vitamina D.",
    fuente: "Guía de atención a la mujer en el climaterio (SSPA)",
    dificultad: "facil",
    temaSlug: "enf-57",
  },
  {
    enunciado: "Tras la menopausia, el riesgo cardiovascular de la mujer:",
    opciones: [
      "Desaparece por completo",
      "Es siempre inferior al del varón de su misma edad",
      "Aumenta, en relación con la pérdida del efecto protector de los estrógenos",
      "No experimenta ninguna variación a lo largo de la vida",
    ],
    correctaIndex: 2,
    explicacion:
      "El descenso de estrógenos tras la menopausia se asocia a un perfil lipídico más aterogénico y a un incremento del riesgo cardiovascular, que hasta entonces era menor que en el varón.",
    fuente: "Guía de atención a la mujer en el climaterio (SSPA)",
    dificultad: "media",
    temaSlug: "enf-57",
  },
  {
    enunciado:
      "La edad media de presentación de la menopausia en nuestro medio se sitúa aproximadamente en torno a los:",
    opciones: ["50 años", "35 años", "65 años", "60 años"],
    correctaIndex: 0,
    explicacion:
      "La menopausia se presenta de media alrededor de los 50 años (habitualmente entre los 48 y los 52), aunque existe variabilidad individual.",
    fuente: "Guía de atención a la mujer en el climaterio (SSPA)",
    dificultad: "facil",
    temaSlug: "enf-57",
  },
  {
    enunciado:
      "Se habla de menopausia precoz cuando el cese de la menstruación se produce antes de los:",
    opciones: ["55 años", "40 años", "48 años", "35 años"],
    correctaIndex: 1,
    explicacion:
      "La menopausia precoz o insuficiencia ovárica prematura se define por el cese de las menstruaciones antes de los 40 años y requiere valoración por sus repercusiones óseas y cardiovasculares.",
    fuente: "Guía de atención a la mujer en el climaterio (SSPA)",
    dificultad: "media",
    temaSlug: "enf-57",
  },
  {
    enunciado:
      "La sequedad vaginal, el escozor y las molestias en las relaciones sexuales que aparecen en el climaterio se deben principalmente a:",
    opciones: [
      "Una infección bacteriana obligada en todas las mujeres",
      "El aumento de los niveles de estrógenos",
      "Un exceso de higiene íntima",
      "La atrofia urogenital secundaria al descenso de estrógenos",
    ],
    correctaIndex: 3,
    explicacion:
      "El déficit estrogénico produce atrofia de la mucosa vaginal y urogenital, con sequedad, dispareunia y mayor tendencia a infecciones urinarias; puede tratarse con hidratantes o estrógenos locales.",
    fuente: "Guía de atención a la mujer en el climaterio (SSPA)",
    dificultad: "media",
    temaSlug: "enf-57",
  },

  // enf-58 Sexualidad
  {
    enunciado:
      "Según el modelo clásico de Masters y Johnson, las fases de la respuesta sexual humana son, en orden:",
    opciones: [
      "Deseo, atracción, apego y resolución",
      "Meseta, deseo, orgasmo y excitación",
      "Excitación, meseta, orgasmo y resolución",
      "Orgasmo, excitación, meseta y deseo",
    ],
    correctaIndex: 2,
    explicacion:
      "Masters y Johnson describieron cuatro fases sucesivas: excitación, meseta, orgasmo y resolución. Modelos posteriores añadieron la fase de deseo como inicial.",
    fuente: "Manual de sexualidad y salud",
    dificultad: "media",
    temaSlug: "enf-58",
  },
  {
    enunciado: "La disfunción eréctil se define como:",
    opciones: [
      "La incapacidad persistente para conseguir o mantener una erección suficiente para una relación sexual satisfactoria",
      "La eyaculación que se produce antes de lo deseado",
      "La ausencia total de deseo sexual",
      "El dolor durante el coito",
    ],
    correctaIndex: 0,
    explicacion:
      "La disfunción eréctil es la dificultad persistente o recurrente para lograr o mantener la erección. La eyaculación precoz, el deseo hipoactivo y la dispareunia son trastornos distintos.",
    fuente: "Manual de sexualidad y salud",
    dificultad: "facil",
    temaSlug: "enf-58",
  },
  {
    enunciado: "La identidad de género se define como:",
    opciones: [
      "El sexo asignado en el momento del nacimiento según los genitales",
      "La atracción afectiva y sexual hacia otras personas",
      "El conjunto de caracteres sexuales secundarios",
      "La vivencia interna e individual del género tal como cada persona la siente, que puede o no coincidir con el sexo asignado al nacer",
    ],
    correctaIndex: 3,
    explicacion:
      "La identidad de género es la percepción interna que cada persona tiene de sí misma como hombre, mujer, ambos o ninguno. No debe confundirse con la orientación sexual ni con el sexo asignado al nacer.",
    fuente: "Manual de sexualidad y salud",
    dificultad: "media",
    temaSlug: "enf-58",
  },
  {
    enunciado:
      "La orientación sexual se diferencia de la identidad de género en que la orientación sexual hace referencia a:",
    opciones: [
      "El rol social que la persona desempeña en su entorno",
      "La atracción emocional, afectiva y sexual que una persona siente hacia otras",
      "Los órganos genitales con los que se nace",
      "La forma de vestir y expresarse",
    ],
    correctaIndex: 1,
    explicacion:
      "La orientación sexual describe hacia quién se dirige la atracción (heterosexual, homosexual, bisexual, etc.), mientras que la identidad de género se refiere al género con el que la persona se identifica.",
    fuente: "Manual de sexualidad y salud",
    dificultad: "facil",
    temaSlug: "enf-58",
  },
  {
    enunciado: "La dispareunia es una disfunción sexual que consiste en:",
    opciones: [
      "La ausencia o retraso persistente del orgasmo",
      "La eyaculación involuntaria durante el sueño",
      "El dolor genital persistente o recurrente asociado a la relación sexual",
      "El aumento excesivo del deseo sexual",
    ],
    correctaIndex: 2,
    explicacion:
      "La dispareunia es el dolor genital que aparece antes, durante o después del coito y puede darse en ambos sexos, aunque es más frecuente en mujeres.",
    fuente: "Manual de sexualidad y salud",
    dificultad: "media",
    temaSlug: "enf-58",
  },
  {
    enunciado: "El vaginismo se define como:",
    opciones: [
      "La ausencia de lubricación vaginal en la menopausia",
      "Una infección de transmisión sexual frecuente",
      "La falta de deseo sexual mantenida en el tiempo",
      "La contracción involuntaria y persistente de la musculatura del tercio externo de la vagina que dificulta o impide la penetración",
    ],
    correctaIndex: 3,
    explicacion:
      "El vaginismo es un espasmo involuntario de la musculatura perivaginal que dificulta o impide la penetración; suele tener un componente psicológico importante y responde a tratamiento específico.",
    fuente: "Manual de sexualidad y salud",
    dificultad: "media",
    temaSlug: "enf-58",
  },
  {
    enunciado: "El término sexo asignado al nacer hace referencia a:",
    opciones: [
      "La clasificación como hombre o mujer que se realiza al nacer, habitualmente en función de las características anatómicas y genitales",
      "El género con el que la persona se identifica a lo largo de su vida",
      "La orientación sexual de la persona",
      "El nombre elegido por la persona en su vida adulta",
    ],
    correctaIndex: 0,
    explicacion:
      "El sexo asignado al nacer es la categorización inicial (habitualmente hombre o mujer) según los caracteres sexuales observados al nacimiento; puede coincidir o no con la identidad de género de la persona.",
    fuente: "Manual de sexualidad y salud",
    dificultad: "facil",
    temaSlug: "enf-58",
  },
  {
    enunciado:
      "El modelo PLISSIT, utilizado por enfermería para abordar la sexualidad, propone niveles de intervención que van desde:",
    opciones: [
      "La derivación inmediata a cirugía hasta el alta hospitalaria",
      "La prescripción farmacológica hasta el ingreso",
      "Dar permiso e información limitada hasta sugerencias específicas y terapia intensiva",
      "La observación pasiva hasta el aislamiento del paciente",
    ],
    correctaIndex: 2,
    explicacion:
      "PLISSIT estructura la intervención en cuatro niveles: permiso (Permission), información limitada (Limited Information), sugerencias específicas (Specific Suggestions) y terapia intensiva (Intensive Therapy), de menor a mayor complejidad.",
    fuente: "Modelo PLISSIT de abordaje de la sexualidad",
    dificultad: "dificil",
    temaSlug: "enf-58",
  },
  {
    enunciado: "El término persona transgénero se refiere a aquella cuya:",
    opciones: [
      "Orientación sexual es hacia personas del mismo sexo",
      "Identidad de género no se corresponde con el sexo que le fue asignado al nacer",
      "Anatomía presenta caracteres de ambos sexos desde el nacimiento",
      "Expresión de género se ajusta plenamente a su sexo asignado",
    ],
    correctaIndex: 1,
    explicacion:
      "Se denomina transgénero a la persona cuya identidad de género difiere del sexo asignado al nacer. No hace referencia a la orientación sexual ni implica necesariamente una determinada anatomía.",
    fuente: "Manual de sexualidad y salud",
    dificultad: "media",
    temaSlug: "enf-58",
  },
  {
    enunciado: "El deseo sexual hipoactivo se caracteriza por:",
    opciones: [
      "Un dolor intenso durante la penetración",
      "La imposibilidad de mantener la erección",
      "Contracciones involuntarias de la vagina",
      "La deficiencia o ausencia persistente de fantasías y de deseo de actividad sexual, que genera malestar",
    ],
    correctaIndex: 3,
    explicacion:
      "El deseo sexual hipoactivo se define por la falta o disminución mantenida del deseo y de las fantasías sexuales que provoca malestar personal o dificultades en la relación.",
    fuente: "Manual de sexualidad y salud",
    dificultad: "media",
    temaSlug: "enf-58",
  },

  // enf-59 Planificacion familiar
  {
    enunciado:
      "Entre los métodos anticonceptivos, el preservativo destaca porque es el único que, además de evitar el embarazo:",
    opciones: [
      "Protege frente a las infecciones de transmisión sexual",
      "Regula el ciclo menstrual",
      "Aumenta la fertilidad futura",
      "Actúa inhibiendo la ovulación",
    ],
    correctaIndex: 0,
    explicacion:
      "El preservativo es un método de barrera que, correctamente utilizado, previene tanto el embarazo como las ITS, incluida la infección por VIH, ventaja que no ofrecen los métodos hormonales ni el DIU.",
    fuente: "Guía de anticoncepción y salud sexual",
    dificultad: "facil",
    temaSlug: "enf-59",
  },
  {
    enunciado: "La anticoncepción de urgencia con levonorgestrel es tanto más eficaz cuanto:",
    opciones: [
      "Más días hayan pasado desde la relación de riesgo",
      "Mayor sea la dosis diaria mantenida durante una semana",
      "Antes se administre tras la relación sexual sin protección",
      "Se combine siempre con antibióticos",
    ],
    correctaIndex: 2,
    explicacion:
      "La eficacia de la anticoncepción de urgencia con levonorgestrel disminuye con el paso de las horas, por lo que debe tomarse lo antes posible tras la relación de riesgo (idealmente en las primeras horas).",
    fuente: "Guía de anticoncepción y salud sexual",
    dificultad: "media",
    temaSlug: "enf-59",
  },
  {
    enunciado:
      "El dispositivo intrauterino (DIU) es un método anticonceptivo que se clasifica como:",
    opciones: [
      "Método de barrera",
      "Método reversible de larga duración, de acción intrauterina",
      "Método natural basado en la abstinencia periódica",
      "Método quirúrgico irreversible",
    ],
    correctaIndex: 1,
    explicacion:
      "El DIU (de cobre u hormonal) es un método reversible de larga duración (LARC) que se coloca en el útero; no es de barrera ni quirúrgico irreversible.",
    fuente: "Guía de anticoncepción y salud sexual",
    dificultad: "media",
    temaSlug: "enf-59",
  },
  {
    enunciado: "La ligadura de trompas se considera un método anticonceptivo:",
    opciones: [
      "Reversible y de corta duración",
      "Natural basado en el calendario",
      "Hormonal de administración diaria",
      "Quirúrgico y de carácter permanente o irreversible",
    ],
    correctaIndex: 3,
    explicacion:
      "La ligadura tubárica es un método de esterilización quirúrgica considerado permanente; por ello requiere una información y una decisión especialmente reflexionada.",
    fuente: "Guía de anticoncepción y salud sexual",
    dificultad: "facil",
    temaSlug: "enf-59",
  },
  {
    enunciado:
      "Según la Ley Orgánica 2/2010, la interrupción voluntaria del embarazo a petición de la mujer puede realizarse, con carácter general, dentro de las primeras:",
    opciones: [
      "14 semanas de gestación",
      "8 semanas de gestación",
      "20 semanas de gestación",
      "26 semanas de gestación",
    ],
    correctaIndex: 0,
    explicacion:
      "La LO 2/2010 permite la IVE a petición de la mujer dentro de las primeras 14 semanas de gestación, previa información y, en su caso, el plazo de reflexión legalmente establecido.",
    fuente: "Ley Orgánica 2/2010, art. 14",
    dificultad: "media",
    temaSlug: "enf-59",
  },
  {
    enunciado:
      "Según la Ley Orgánica 2/2010, cuando exista grave riesgo para la vida o la salud de la embarazada, la IVE por causas médicas puede practicarse, con carácter general, hasta las:",
    opciones: [
      "12 semanas de gestación",
      "22 semanas de gestación",
      "30 semanas de gestación",
      "16 semanas de gestación",
    ],
    correctaIndex: 1,
    explicacion:
      "La LO 2/2010 fija en 22 semanas el límite general para la interrupción por causas médicas (grave riesgo para la vida o salud de la gestante o graves anomalías fetales), con los requisitos de dictamen previstos.",
    fuente: "Ley Orgánica 2/2010, art. 15",
    dificultad: "dificil",
    temaSlug: "enf-59",
  },
  {
    enunciado: "El índice de Pearl es un parámetro que se utiliza para:",
    opciones: [
      "Valorar el grado de dolor menstrual",
      "Medir la densidad mineral ósea",
      "Expresar la eficacia de un método anticonceptivo",
      "Calcular la fecha probable de parto",
    ],
    correctaIndex: 2,
    explicacion:
      "El índice de Pearl expresa el número de embarazos por cada 100 mujeres que usan un método durante un año; cuanto menor es el índice, mayor es la eficacia anticonceptiva.",
    fuente: "Guía de anticoncepción y salud sexual",
    dificultad: "dificil",
    temaSlug: "enf-59",
  },
  {
    enunciado:
      "Los métodos naturales de planificación familiar, como el método de Ogino-Knaus o el de la temperatura basal, se basan en:",
    opciones: [
      "Identificar el periodo fértil del ciclo para evitar las relaciones en esos días",
      "La liberación continua de hormonas al organismo",
      "La colocación de un dispositivo dentro del útero",
      "La creación de una barrera física frente a los espermatozoides",
    ],
    correctaIndex: 0,
    explicacion:
      "Los métodos naturales tratan de reconocer los días fértiles (por calendario, temperatura basal o moco cervical) para abstenerse de relaciones en ese periodo; su eficacia depende mucho del uso correcto.",
    fuente: "Guía de anticoncepción y salud sexual",
    dificultad: "media",
    temaSlug: "enf-59",
  },
  {
    enunciado:
      "El mecanismo de acción principal de la píldora anticonceptiva combinada (estrógeno y gestágeno) es:",
    opciones: [
      "Crear una barrera mecánica en el cuello uterino",
      "Inhibir la ovulación",
      "Provocar la expulsión del óvulo ya fecundado",
      "Aumentar la producción de espermatozoides",
    ],
    correctaIndex: 1,
    explicacion:
      "La píldora combinada actúa fundamentalmente inhibiendo la ovulación, además de espesar el moco cervical y modificar el endometrio. No es un método de barrera ni abortivo.",
    fuente: "Guía de anticoncepción y salud sexual",
    dificultad: "media",
    temaSlug: "enf-59",
  },
  {
    enunciado:
      "Respecto a la anticoncepción de urgencia con levonorgestrel, es correcto afirmar que:",
    opciones: [
      "Interrumpe un embarazo ya implantado",
      "Debe tomarse a diario como método habitual",
      "Protege frente a las infecciones de transmisión sexual",
      "Actúa principalmente retrasando o inhibiendo la ovulación y no interrumpe un embarazo ya establecido",
    ],
    correctaIndex: 3,
    explicacion:
      "La anticoncepción de urgencia actúa sobre todo impidiendo o retrasando la ovulación; no es un método abortivo ni protege frente a las ITS, y debe reservarse para situaciones puntuales, no como método habitual.",
    fuente: "Guía de anticoncepción y salud sexual",
    dificultad: "media",
    temaSlug: "enf-59",
  },

  // enf-60 Enfermedades infecciosas
  {
    enunciado: "Las principales vías de transmisión del VIH son:",
    opciones: [
      "El contacto casual, los abrazos y compartir cubiertos",
      "La vía respiratoria por gotas y aerosoles",
      "La sexual, la sanguínea (parenteral) y la vertical (madre-hijo)",
      "La ingesta de agua o alimentos contaminados",
    ],
    correctaIndex: 2,
    explicacion:
      "El VIH se transmite por vía sexual, por sangre (uso compartido de material de inyección, exposiciones) y de la madre al hijo durante embarazo, parto o lactancia. No se transmite por contacto social ordinario.",
    fuente: "Protocolo de vigilancia de la infección por VIH",
    dificultad: "facil",
    temaSlug: "enf-60",
  },
  {
    enunciado:
      "El tipo de aislamiento indicado para un paciente con tuberculosis pulmonar bacilífera es el aislamiento:",
    opciones: [
      "Respiratorio o aéreo",
      "De contacto exclusivamente",
      "Protector o inverso",
      "Entérico",
    ],
    correctaIndex: 0,
    explicacion:
      "La tuberculosis pulmonar se transmite por vía aérea mediante núcleos goticulares, por lo que requiere aislamiento respiratorio (habitación individual, presión negativa si es posible y mascarilla de protección respiratoria para el personal).",
    fuente: "Protocolo de aislamiento hospitalario",
    dificultad: "media",
    temaSlug: "enf-60",
  },
  {
    enunciado: "La prueba de la tuberculina o Mantoux consiste en:",
    opciones: [
      "Una extracción de sangre para medir anticuerpos",
      "La recogida de tres muestras de esputo consecutivas",
      "Una radiografía de tórax de control",
      "La inyección intradérmica de derivado proteico purificado (PPD) y la lectura de la induración a las 48-72 horas",
    ],
    correctaIndex: 3,
    explicacion:
      "El Mantoux se realiza inyectando PPD por vía intradérmica en el antebrazo y midiendo la induración (no el eritema) a las 48-72 horas; valora la infección tuberculosa, no necesariamente la enfermedad activa.",
    fuente: "Protocolo de prevención y control de la tuberculosis",
    dificultad: "media",
    temaSlug: "enf-60",
  },
  {
    enunciado: "El virus de la hepatitis B se transmite fundamentalmente por vía:",
    opciones: [
      "Fecal-oral a través de agua contaminada",
      "Parenteral, sexual y vertical (madre-hijo)",
      "Respiratoria por gotas al toser",
      "Por picadura de mosquito",
    ],
    correctaIndex: 1,
    explicacion:
      "La hepatitis B se transmite por sangre y fluidos (parenteral), por vía sexual y de la madre al hijo. Existe vacuna eficaz incluida en el calendario. La hepatitis A, en cambio, es de transmisión fecal-oral.",
    fuente: "Protocolo de vigilancia de las hepatitis víricas",
    dificultad: "media",
    temaSlug: "enf-60",
  },
  {
    enunciado: "Las enfermedades de declaración obligatoria (EDO) son:",
    opciones: [
      "Enfermedades que solo se comunican si el paciente da su autorización",
      "Procesos crónicos que se registran una única vez en la vida",
      "Procesos infecciosos sujetos a notificación obligatoria a las autoridades de salud pública con fines de vigilancia epidemiológica",
      "Enfermedades laborales que se declaran a la mutua",
    ],
    correctaIndex: 2,
    explicacion:
      "Las EDO integran la Red de Vigilancia Epidemiológica: determinados procesos, sobre todo transmisibles, deben notificarse de forma obligatoria a salud pública para su vigilancia y control.",
    fuente: "Red Nacional de Vigilancia Epidemiológica",
    dificultad: "media",
    temaSlug: "enf-60",
  },
  {
    enunciado: "El aislamiento de contacto está especialmente indicado en pacientes con:",
    opciones: [
      "Tuberculosis pulmonar activa",
      "Sarampión",
      "Varicela diseminada",
      "Infección o colonización por microorganismos multirresistentes",
    ],
    correctaIndex: 3,
    explicacion:
      "El aislamiento de contacto (higiene de manos, guantes, bata y material individualizado) se aplica cuando la transmisión se produce por contacto directo o indirecto, como en las bacterias multirresistentes o infecciones como Clostridioides difficile.",
    fuente: "Protocolo de aislamiento hospitalario",
    dificultad: "media",
    temaSlug: "enf-60",
  },
  {
    enunciado: "El periodo ventana en la infección por VIH hace referencia al tiempo:",
    opciones: [
      "Que transcurre entre la infección y la aparición de marcadores detectables en las pruebas, durante el cual estas pueden ser negativas pese a existir infección",
      "Que dura el tratamiento antirretroviral hasta hacerse indetectable",
      "En que el paciente permanece ingresado por una infección oportunista",
      "Necesario para que la vacuna genere inmunidad",
    ],
    correctaIndex: 0,
    explicacion:
      "El periodo ventana es el intervalo entre la exposición y la posibilidad de detectar la infección; durante él, la prueba puede resultar negativa aunque la persona ya esté infectada y pueda transmitir el virus.",
    fuente: "Protocolo de vigilancia de la infección por VIH",
    dificultad: "dificil",
    temaSlug: "enf-60",
  },
  {
    enunciado: "Las precauciones estándar en la asistencia sanitaria se caracterizan por:",
    opciones: [
      "Aplicarse solo a los pacientes con diagnóstico confirmado de enfermedad infecciosa",
      "Reservarse exclusivamente para los quirófanos",
      "Aplicarse a todos los pacientes, con independencia de su diagnóstico, asumiendo que cualquier sangre o fluido puede ser infeccioso",
      "Consistir únicamente en el uso de mascarilla",
    ],
    correctaIndex: 2,
    explicacion:
      "Las precauciones estándar (higiene de manos, uso adecuado de guantes y otros equipos, gestión de residuos, etc.) se aplican a todos los pacientes por sistema, ya que no siempre se conoce quién es portador de un agente infeccioso.",
    fuente: "Protocolo de precauciones estándar",
    dificultad: "facil",
    temaSlug: "enf-60",
  },
  {
    enunciado: "La sífilis es una infección de transmisión sexual causada por:",
    opciones: [
      "El virus del papiloma humano",
      "La bacteria Treponema pallidum",
      "El hongo Candida albicans",
      "El protozoo Trichomonas vaginalis",
    ],
    correctaIndex: 1,
    explicacion:
      "La sífilis está producida por la bacteria Treponema pallidum y se transmite principalmente por contacto sexual; evoluciona en fases (primaria, secundaria, latente y terciaria) si no se trata.",
    fuente: "Protocolo de vigilancia de las infecciones de transmisión sexual",
    dificultad: "media",
    temaSlug: "enf-60",
  },
  {
    enunciado:
      "Tras una exposición accidental de riesgo al VIH (por ejemplo, un pinchazo con material contaminado), la actuación recomendada incluye:",
    opciones: [
      "Esperar varias semanas antes de acudir a valoración",
      "Aplicar únicamente frío local en la zona",
      "Automedicarse con antibióticos de amplio espectro",
      "Valorar de forma precoz la profilaxis postexposición, cuya eficacia es mayor cuanto antes se inicie tras la exposición",
    ],
    correctaIndex: 3,
    explicacion:
      "La profilaxis postexposición al VIH debe valorarse e iniciarse lo antes posible (preferiblemente en las primeras horas), ya que su eficacia disminuye con el tiempo; se acompaña de la limpieza de la herida y la notificación del accidente.",
    fuente: "Protocolo de actuación ante exposiciones accidentales a agentes biológicos",
    dificultad: "media",
    temaSlug: "enf-60",
  },

  // enf-61 Incontinencia urinaria
  {
    enunciado:
      "La incontinencia urinaria de esfuerzo se caracteriza por la pérdida involuntaria de orina que se produce:",
    opciones: [
      "Al toser, reír, estornudar o realizar un esfuerzo físico que aumenta la presión abdominal",
      "Acompañada de un deseo brusco e imperioso de orinar",
      "Solo durante el sueño nocturno",
      "Por rebosamiento de una vejiga que no se vacía",
    ],
    correctaIndex: 0,
    explicacion:
      "En la incontinencia de esfuerzo la fuga se produce al aumentar la presión intraabdominal (toser, reír, cargar peso) por debilidad del suelo pélvico o del esfínter, sin urgencia previa.",
    fuente: "Guía de atención a la incontinencia urinaria",
    dificultad: "facil",
    temaSlug: "enf-61",
  },
  {
    enunciado: "La incontinencia urinaria de urgencia se define por:",
    opciones: [
      "La pérdida de orina asociada exclusivamente al esfuerzo físico",
      "La ausencia total de sensación de llenado vesical",
      "La pérdida involuntaria de orina acompañada o precedida de un deseo miccional súbito e intenso, difícil de posponer",
      "El goteo continuo por obstrucción de la uretra",
    ],
    correctaIndex: 2,
    explicacion:
      "En la incontinencia de urgencia existe una necesidad imperiosa y repentina de orinar (urgencia) que la persona no logra controlar a tiempo, habitualmente por hiperactividad del detrusor.",
    fuente: "Guía de atención a la incontinencia urinaria",
    dificultad: "media",
    temaSlug: "enf-61",
  },
  {
    enunciado:
      "Los ejercicios de Kegel se emplean en el tratamiento de la incontinencia urinaria porque:",
    opciones: [
      "Reducen la producción de orina en el riñón",
      "Fortalecen la musculatura del suelo pélvico",
      "Aumentan la capacidad de la vejiga mediante fármacos",
      "Sustituyen la necesidad de sondaje vesical",
    ],
    correctaIndex: 1,
    explicacion:
      "Los ejercicios de Kegel consisten en contracciones repetidas de la musculatura del suelo pélvico para reforzarla; son especialmente útiles en la incontinencia de esfuerzo.",
    fuente: "Guía de atención a la incontinencia urinaria",
    dificultad: "facil",
    temaSlug: "enf-61",
  },
  {
    enunciado: "El entrenamiento vesical como técnica de tratamiento consiste en:",
    opciones: [
      "Restringir por completo la ingesta de líquidos durante el día",
      "Vaciar la vejiga cada vez que se note la mínima sensación",
      "Colocar de forma permanente una sonda vesical",
      "Establecer un horario progresivo de micciones para aumentar de forma gradual el intervalo entre ellas y la capacidad vesical",
    ],
    correctaIndex: 3,
    explicacion:
      "El entrenamiento vesical programa micciones a intervalos que se van ampliando de manera progresiva, enseñando a posponer la urgencia y aumentando la capacidad funcional de la vejiga; es útil en la incontinencia de urgencia.",
    fuente: "Guía de atención a la incontinencia urinaria",
    dificultad: "media",
    temaSlug: "enf-61",
  },
  {
    enunciado: "Se denomina incontinencia urinaria mixta a aquella en la que:",
    opciones: [
      "Coexisten síntomas de incontinencia de esfuerzo y de urgencia",
      "La pérdida de orina se debe solo a una infección urinaria",
      "Se alternan periodos de retención y de poliuria sin fugas",
      "La fuga aparece exclusivamente por la noche",
    ],
    correctaIndex: 0,
    explicacion:
      "La incontinencia mixta combina la pérdida con el esfuerzo y la asociada a urgencia miccional; el tratamiento se orienta según el componente predominante.",
    fuente: "Guía de atención a la incontinencia urinaria",
    dificultad: "media",
    temaSlug: "enf-61",
  },
  {
    enunciado:
      "En el sondaje vesical permanente, una medida fundamental para prevenir infecciones es:",
    opciones: [
      "Elevar la bolsa colectora por encima del nivel de la vejiga",
      "Mantener un sistema de drenaje cerrado y realizar la inserción con técnica estéril",
      "Desconectar con frecuencia la sonda de la bolsa para airearla",
      "Pinzar la sonda de forma continua durante todo el día",
    ],
    correctaIndex: 1,
    explicacion:
      "El sondaje debe realizarse con técnica estéril y mantener el sistema de drenaje cerrado, con la bolsa por debajo del nivel vesical para evitar el reflujo, medidas clave en la prevención de la infección urinaria asociada a sonda.",
    fuente: "Protocolo de sondaje vesical",
    dificultad: "media",
    temaSlug: "enf-61",
  },
  {
    enunciado:
      "El uso de absorbentes en una persona con incontinencia urinaria se considera adecuado cuando:",
    opciones: [
      "Se prefiere como primera y única opción antes de valorar el tipo de incontinencia",
      "Se busca curar de forma definitiva la incontinencia",
      "Se emplea como medida paliativa o complementaria para contener las pérdidas y proteger la piel, una vez valorada la causa",
      "Se pretende evitar cualquier tipo de movilización del paciente",
    ],
    correctaIndex: 2,
    explicacion:
      "Los absorbentes son una medida paliativa que ayuda a contener las pérdidas y a mantener la piel íntegra, pero no tratan la causa; deben acompañar, y no sustituir, a la valoración y al abordaje específico de la incontinencia.",
    fuente: "Guía de atención a la incontinencia urinaria",
    dificultad: "facil",
    temaSlug: "enf-61",
  },
  {
    enunciado:
      "La sonda vesical tipo Foley se mantiene fijada en el interior de la vejiga gracias a:",
    opciones: [
      "Un balón o globo que se rellena con agua estéril una vez insertada",
      "Una sutura a la pared abdominal",
      "El propio esfínter urinario que la sujeta",
      "Un adhesivo colocado en el meato uretral",
    ],
    correctaIndex: 0,
    explicacion:
      "La sonda de Foley dispone de un balón que, tras la inserción, se rellena con agua estéril (no con aire ni suero salino, por el riesgo de cristalización) para anclarla dentro de la vejiga e impedir su salida.",
    fuente: "Protocolo de sondaje vesical",
    dificultad: "media",
    temaSlug: "enf-61",
  },
  {
    enunciado: "La incontinencia urinaria por rebosamiento se produce cuando:",
    opciones: [
      "El suelo pélvico está excesivamente tonificado",
      "La vejiga no se vacía por completo y, al llenarse en exceso, la orina se escapa en forma de goteo",
      "Existe un deseo brusco e incontrolable de orinar",
      "La pérdida solo ocurre con la tos o el esfuerzo",
    ],
    correctaIndex: 1,
    explicacion:
      "En la incontinencia por rebosamiento hay retención crónica: la vejiga sobredistendida deja escapar orina en forma de goteo continuo, con frecuencia por obstrucción (p. ej. hiperplasia prostática) o vejiga hipoactiva.",
    fuente: "Guía de atención a la incontinencia urinaria",
    dificultad: "media",
    temaSlug: "enf-61",
  },
  {
    enunciado: "El sondaje vesical intermitente se caracteriza por:",
    opciones: [
      "Dejar la sonda colocada de forma permanente durante semanas",
      "Realizarse siempre por vía suprapúbica",
      "Emplearse solo en quirófano",
      "Introducir y retirar la sonda cada vez que es necesario vaciar la vejiga, varias veces al día",
    ],
    correctaIndex: 3,
    explicacion:
      "En el sondaje intermitente la sonda se coloca para vaciar la vejiga y se retira de inmediato, repitiéndose según la pauta; reduce el riesgo de infección frente al sondaje permanente y favorece la autonomía en pacientes seleccionados.",
    fuente: "Protocolo de sondaje vesical",
    dificultad: "media",
    temaSlug: "enf-61",
  },

  // enf-62 Autonomia, fragilidad y dependencia
  {
    enunciado: "El índice de Barthel es una escala que valora:",
    opciones: [
      "El riesgo de aparición de úlceras por presión",
      "El estado nutricional del anciano",
      "El grado de independencia para las actividades básicas de la vida diaria (ABVD)",
      "El nivel de deterioro cognitivo",
    ],
    correctaIndex: 2,
    explicacion:
      "El índice de Barthel mide la capacidad para realizar actividades básicas de la vida diaria (comer, asearse, vestirse, control de esfínteres, deambular, etc.); no valora la esfera cognitiva ni el riesgo de úlceras.",
    fuente: "Índice de Barthel",
    dificultad: "facil",
    temaSlug: "enf-62",
  },
  {
    enunciado: "La escala de Lawton y Brody se utiliza para valorar:",
    opciones: [
      "Las actividades instrumentales de la vida diaria (AIVD), como usar el teléfono, manejar dinero o preparar la comida",
      "El nivel de conciencia mediante la respuesta ocular y verbal",
      "El riesgo de caídas al caminar",
      "La intensidad del dolor crónico",
    ],
    correctaIndex: 0,
    explicacion:
      "La escala de Lawton-Brody evalúa las actividades instrumentales (más complejas), como el uso del teléfono, las compras, la comida, las tareas del hogar, el manejo de la medicación y del dinero.",
    fuente: "Escala de Lawton y Brody",
    dificultad: "media",
    temaSlug: "enf-62",
  },
  {
    enunciado: "El cuestionario de Pfeiffer es un instrumento de cribado destinado a valorar:",
    opciones: [
      "La sobrecarga de la persona cuidadora",
      "El grado de dependencia para el aseo personal",
      "El riesgo cardiovascular del paciente",
      "El deterioro cognitivo mediante una serie de preguntas sobre orientación, memoria y cálculo",
    ],
    correctaIndex: 3,
    explicacion:
      "El test de Pfeiffer (SPMSQ) es un cuestionario breve que detecta la presencia y el grado de deterioro cognitivo según el número de errores en preguntas de orientación, memoria y cálculo.",
    fuente: "Cuestionario de Pfeiffer (SPMSQ)",
    dificultad: "media",
    temaSlug: "enf-62",
  },
  {
    enunciado: "La Ley 39/2006 tiene por objeto principal:",
    opciones: [
      "Regular las incompatibilidades del personal estatutario",
      "Reconocer el derecho a la promoción de la autonomía personal y a la atención a las personas en situación de dependencia",
      "Establecer el calendario oficial de vacunaciones",
      "Ordenar las profesiones sanitarias",
    ],
    correctaIndex: 1,
    explicacion:
      "La Ley 39/2006 crea el Sistema para la Autonomía y Atención a la Dependencia (SAAD) y reconoce el derecho subjetivo de las personas en situación de dependencia a recibir atención y a la promoción de su autonomía.",
    fuente: "Ley 39/2006, art. 1",
    dificultad: "facil",
    temaSlug: "enf-62",
  },
  {
    enunciado: "Según la Ley 39/2006, la situación de gran dependencia se corresponde con el:",
    opciones: ["Grado I", "Grado II", "Grado III", "Grado 0"],
    correctaIndex: 2,
    explicacion:
      "La Ley 39/2006 clasifica la dependencia en tres grados: Grado I (moderada), Grado II (severa) y Grado III (gran dependencia), este último cuando la persona necesita ayuda continua para las actividades básicas.",
    fuente: "Ley 39/2006, art. 26",
    dificultad: "media",
    temaSlug: "enf-62",
  },
  {
    enunciado: "En el índice de Barthel, la puntuación total oscila de forma que:",
    opciones: [
      "A menor puntuación, mayor independencia del paciente",
      "Todas las puntuaciones indican dependencia grave",
      "La puntuación no guarda relación con el grado de autonomía",
      "Una puntuación de 0 indica dependencia total y una de 100 indica independencia",
    ],
    correctaIndex: 3,
    explicacion:
      "El Barthel puntúa de 0 a 100 (0 a 90 con silla de ruedas): cuanto mayor es la puntuación, mayor es la independencia; 0 refleja dependencia total y 100, independencia para las ABVD.",
    fuente: "Índice de Barthel",
    dificultad: "media",
    temaSlug: "enf-62",
  },
  {
    enunciado: "Según la Ley 39/2006, la dependencia moderada se corresponde con el:",
    opciones: ["Grado I", "Grado III", "Grado IV", "Grado II"],
    correctaIndex: 0,
    explicacion:
      "El Grado I es la dependencia moderada, en la que la persona necesita ayuda para varias actividades básicas al menos una vez al día o de forma intermitente para su autonomía.",
    fuente: "Ley 39/2006, art. 26",
    dificultad: "media",
    temaSlug: "enf-62",
  },
  {
    enunciado: "El concepto de fragilidad en la persona mayor se define como:",
    opciones: [
      "La presencia de cualquier enfermedad crónica estable",
      "El hecho de superar una determinada edad, con independencia de su estado",
      "Un estado de vulnerabilidad y menor reserva fisiológica que aumenta el riesgo de eventos adversos como caídas, discapacidad y dependencia",
      "La pérdida completa e irreversible de la autonomía",
    ],
    correctaIndex: 2,
    explicacion:
      "La fragilidad es un estado de disminución de la reserva funcional que hace a la persona más vulnerable; es un estadio previo y potencialmente reversible que precede a la discapacidad y la dependencia, por lo que su detección precoz es clave.",
    fuente: "Documento de consenso sobre prevención de fragilidad en la persona mayor",
    dificultad: "dificil",
    temaSlug: "enf-62",
  },
  {
    enunciado: "El título completo de la Ley 39/2006 hace referencia a:",
    opciones: [
      "La cohesión y calidad del Sistema Nacional de Salud",
      "La promoción de la autonomía personal y atención a las personas en situación de dependencia",
      "La ordenación de las profesiones sanitarias",
      "Las garantías y uso racional de los medicamentos",
    ],
    correctaIndex: 1,
    explicacion:
      "La Ley 39/2006 se denomina de Promoción de la Autonomía Personal y Atención a las personas en situación de dependencia; su enfoque combina la atención a la dependencia con la promoción de la autonomía.",
    fuente: "Ley 39/2006",
    dificultad: "facil",
    temaSlug: "enf-62",
  },
  {
    enunciado:
      "La diferencia entre actividades básicas (ABVD) e instrumentales (AIVD) de la vida diaria es que:",
    opciones: [
      "Las básicas son más complejas y requieren mayor capacidad cognitiva que las instrumentales",
      "Ambas se valoran únicamente con el cuestionario de Pfeiffer",
      "Las instrumentales solo se evalúan en personas encamadas",
      "Las básicas son las esenciales para el autocuidado (comer, asearse, vestirse) y las instrumentales permiten una vida independiente en el entorno (cocinar, comprar, manejar dinero)",
    ],
    correctaIndex: 3,
    explicacion:
      "Las ABVD son actividades elementales de autocuidado, valoradas por Barthel; las AIVD son más complejas y necesarias para la vida independiente en la comunidad, valoradas por Lawton-Brody, y suelen alterarse antes que las básicas.",
    fuente: "Escalas de valoración funcional Barthel y Lawton-Brody",
    dificultad: "media",
    temaSlug: "enf-62",
  },
];
