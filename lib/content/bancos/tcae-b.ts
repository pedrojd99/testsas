import type { SeedPregunta } from "../tipos";

export const BANCO_TCAE_B: SeedPregunta[] = [
  // ── tcae-alimentacion ──────────────────────────────────────────────
  {
    enunciado: "La dieta hiposódica se caracteriza principalmente por la restricción de:",
    opciones: ["Sal (sodio)", "Hidratos de carbono", "Proteínas", "Grasas"],
    correctaIndex: 0,
    explicacion:
      "La dieta hiposódica limita el aporte de sodio (sal), y está indicada en hipertensión, insuficiencia cardiaca o edemas. No restringe de base los hidratos ni las proteínas.",
    fuente: "Manual de dietética hospitalaria",
    dificultad: "facil",
    temaSlug: "tcae-alimentacion",
  },
  {
    enunciado: "¿En cuál de las siguientes situaciones está indicada una dieta astringente?",
    opciones: ["Estreñimiento", "Hipertensión arterial", "Diarrea", "Diabetes mellitus"],
    correctaIndex: 2,
    explicacion:
      "La dieta astringente es pobre en fibra y residuos y se usa para frenar la diarrea. En el estreñimiento se indica la dieta contraria, laxante y rica en fibra.",
    fuente: "Manual de dietética hospitalaria",
    dificultad: "facil",
    temaSlug: "tcae-alimentacion",
  },
  {
    enunciado: "La dieta laxante, rica en fibra y líquidos, se indica principalmente en casos de:",
    opciones: ["Diarrea aguda", "Estreñimiento", "Gastroenteritis", "Vómitos persistentes"],
    correctaIndex: 1,
    explicacion:
      "La dieta laxante aporta fibra y líquidos para estimular el tránsito intestinal en el estreñimiento. En la diarrea se emplearía justamente la dieta astringente.",
    fuente: "Manual de dietética hospitalaria",
    dificultad: "media",
    temaSlug: "tcae-alimentacion",
  },
  {
    enunciado: "La dieta diabética se basa fundamentalmente en el control de la ingesta de:",
    opciones: ["Sodio", "Grasas saturadas", "Proteínas", "Hidratos de carbono"],
    correctaIndex: 3,
    explicacion:
      "La dieta del paciente diabético controla la cantidad y el tipo de hidratos de carbono para mantener estable la glucemia. La restricción de sodio es propia de la dieta hiposódica.",
    fuente: "Manual de dietética hospitalaria",
    dificultad: "facil",
    temaSlug: "tcae-alimentacion",
  },
  {
    enunciado:
      "Para administrar la nutrición por sonda nasogástrica, el paciente debe colocarse preferentemente en posición:",
    opciones: [
      "Decúbito supino totalmente horizontal",
      "Fowler o semi-Fowler (incorporado)",
      "Trendelenburg",
      "Decúbito prono",
    ],
    correctaIndex: 1,
    explicacion:
      "La posición incorporada (Fowler o semi-Fowler) reduce el riesgo de reflujo y broncoaspiración durante y tras la administración del alimento.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "media",
    temaSlug: "tcae-alimentacion",
  },
  {
    enunciado:
      "Antes de administrar alimento por una sonda nasogástrica, un método para comprobar su correcta colocación es:",
    opciones: [
      "Administrar agua rápidamente sin más comprobación",
      "Pinzar la sonda durante 24 horas",
      "Retirar 5 cm la sonda",
      "Aspirar y comprobar el contenido gástrico",
    ],
    correctaIndex: 3,
    explicacion:
      "La aspiración de contenido gástrico (y su valoración) ayuda a confirmar que la sonda está en el estómago. La comprobación de referencia es la radiografía cuando existen dudas.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "dificil",
    temaSlug: "tcae-alimentacion",
  },
  {
    enunciado: "La nutrición enteral es aquella que:",
    opciones: [
      "Aporta nutrientes al tubo digestivo a través de una sonda",
      "Se administra directamente por vía intravenosa",
      "Se administra por vía subcutánea",
      "Elimina de forma definitiva toda ingesta oral",
    ],
    correctaIndex: 0,
    explicacion:
      "La nutrición enteral utiliza el tubo digestivo funcionante mediante sondas (nasogástrica, gastrostomía). La administración intravenosa corresponde a la nutrición parenteral.",
    fuente: "Manual de dietética hospitalaria",
    dificultad: "media",
    temaSlug: "tcae-alimentacion",
  },
  {
    enunciado: "La nutrición parenteral total se administra por vía:",
    opciones: ["Oral", "Rectal", "Intravenosa", "Nasogástrica"],
    correctaIndex: 2,
    explicacion:
      "La nutrición parenteral aporta los nutrientes directamente al torrente sanguíneo por vía intravenosa, evitando el tubo digestivo.",
    fuente: "Manual de dietética hospitalaria",
    dificultad: "facil",
    temaSlug: "tcae-alimentacion",
  },
  {
    enunciado:
      "En un paciente con disfagia a líquidos, una medida adecuada para una deglución segura es:",
    opciones: [
      "Ofrecer únicamente agua muy fría en abundancia",
      "Administrar los líquidos con jeringa a chorro",
      "Utilizar espesantes para dar textura a los líquidos",
      "Tumbar por completo al paciente para que beba",
    ],
    correctaIndex: 2,
    explicacion:
      "Los espesantes aumentan la viscosidad de los líquidos, reduciendo el riesgo de atragantamiento y aspiración en la disfagia. Beber tumbado incrementa ese riesgo.",
    fuente: "Protocolo de manejo de la disfagia",
    dificultad: "media",
    temaSlug: "tcae-alimentacion",
  },
  {
    enunciado:
      "Tras administrar la alimentación por sonda nasogástrica, se recomienda mantener al paciente incorporado unos 30-60 minutos con el fin de:",
    opciones: [
      "Prevenir el reflujo y la broncoaspiración",
      "Favorecer el sueño del paciente",
      "Acelerar la absorción de los fármacos",
      "Facilitar la retirada de la sonda",
    ],
    correctaIndex: 0,
    explicacion:
      "Mantener la posición incorporada tras la toma evita el reflujo del contenido y disminuye el riesgo de aspiración a la vía respiratoria.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "media",
    temaSlug: "tcae-alimentacion",
  },
  {
    enunciado: "Para estimar la longitud de sonda nasogástrica a introducir se mide la distancia:",
    opciones: [
      "De la boca al ombligo",
      "De la frente al esternón",
      "De la nariz a la clavícula",
      "De la punta de la nariz al lóbulo de la oreja y de ahí al apéndice xifoides",
    ],
    correctaIndex: 3,
    explicacion:
      "La medición nariz-lóbulo de la oreja-apéndice xifoides estima la longitud necesaria para que el extremo de la sonda alcance el estómago.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "dificil",
    temaSlug: "tcae-alimentacion",
  },
  {
    enunciado:
      "Durante la ayuda a la ingesta de un paciente encamado con capacidad de deglución conservada, el TCAE debe:",
    opciones: [
      "Administrar la comida lo más rápido posible para ahorrar tiempo",
      "Incorporar al paciente y ofrecer los alimentos sin prisas, respetando su ritmo",
      "Dar de comer con el paciente tumbado boca arriba",
      "Mezclar todos los alimentos en un puré sin avisar al paciente",
    ],
    correctaIndex: 1,
    explicacion:
      "Incorporar al paciente y respetar su ritmo favorece una deglución segura y digna. Dar de comer con prisa o en decúbito aumenta el riesgo de atragantamiento.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "media",
    temaSlug: "tcae-alimentacion",
  },

  // ── tcae-musculo-esqueletico ───────────────────────────────────────
  {
    enunciado: "La posición de Fowler consiste en colocar al paciente:",
    opciones: [
      "En decúbito prono con la cabeza girada",
      "Tumbado sobre el lado izquierdo",
      "Boca abajo con los brazos extendidos",
      "Sentado o semisentado, con el cabecero elevado (unos 45-90 grados)",
    ],
    correctaIndex: 3,
    explicacion:
      "La posición de Fowler eleva el cabecero de la cama, facilitando la respiración y la alimentación. Cuando la elevación es menor se habla de semi-Fowler.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "facil",
    temaSlug: "tcae-musculo-esqueletico",
  },
  {
    enunciado: "En la posición de Trendelenburg el paciente se coloca:",
    opciones: [
      "Con la cabeza más elevada que los pies",
      "En decúbito supino con la cabeza más baja que los pies (plano inclinado)",
      "Sentado en el borde de la cama",
      "En decúbito lateral izquierdo",
    ],
    correctaIndex: 1,
    explicacion:
      "En Trendelenburg el plano de la cama se inclina de modo que la cabeza queda más baja que los pies. La posición contraria es la anti-Trendelenburg.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "media",
    temaSlug: "tcae-musculo-esqueletico",
  },
  {
    enunciado: "La posición de Sims (semiprona lateral izquierda) se utiliza habitualmente para:",
    opciones: [
      "Exploración de la garganta",
      "Punción lumbar en sedestación",
      "Administración de enemas y exploración rectal",
      "Intervención de tiroides",
    ],
    correctaIndex: 2,
    explicacion:
      "La posición de Sims facilita el acceso a la región anal, por lo que es de elección para enemas y exploración rectal, y para pacientes inconscientes.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "media",
    temaSlug: "tcae-musculo-esqueletico",
  },
  {
    enunciado:
      "En un paciente encamado con riesgo de úlceras por presión, los cambios posturales deben realizarse aproximadamente cada:",
    opciones: ["2-3 horas", "8 horas", "12 horas", "24 horas"],
    correctaIndex: 0,
    explicacion:
      "Los cambios posturales cada 2-3 horas redistribuyen la presión sobre las prominencias óseas y previenen las úlceras por presión.",
    fuente: "Guía de prevención de úlceras por presión",
    dificultad: "facil",
    temaSlug: "tcae-musculo-esqueletico",
  },
  {
    enunciado:
      "Aplicando las normas de mecánica corporal, para levantar un peso desde el suelo el profesional debe:",
    opciones: [
      "Flexionar la espalda manteniendo las piernas rectas",
      "Girar el tronco con el peso en los brazos",
      "Flexionar las rodillas y mantener la espalda recta, acercando el peso al cuerpo",
      "Levantar el peso con los brazos estirados y separado del cuerpo",
    ],
    correctaIndex: 2,
    explicacion:
      "Flexionar las rodillas, mantener la espalda recta y acercar la carga al cuerpo usa la fuerza de las piernas y protege la columna lumbar.",
    fuente: "Manual de prevención de riesgos laborales sanitarios",
    dificultad: "media",
    temaSlug: "tcae-musculo-esqueletico",
  },
  {
    enunciado:
      "La posición de litotomía (ginecológica), en decúbito supino con las piernas flexionadas y separadas sobre soportes, se emplea en:",
    opciones: [
      "Exploraciones ginecológicas, partos y sondajes vesicales",
      "Punción lumbar",
      "Cirugía de columna",
      "Exploración del oído",
    ],
    correctaIndex: 0,
    explicacion:
      "La posición de litotomía permite el acceso a la región perineal y genital, útil en obstetricia, ginecología y sondaje vesical.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "dificil",
    temaSlug: "tcae-musculo-esqueletico",
  },
  {
    enunciado:
      "Entre las medidas para prevenir caídas en un paciente hospitalizado de riesgo, se incluye:",
    opciones: [
      "Retirar el timbre de llamada de su alcance",
      "Dejar la cama en su posición más alta",
      "Mantener el suelo mojado tras la limpieza",
      "Mantener la cama frenada y baja, con barandillas cuando esté indicado",
    ],
    correctaIndex: 3,
    explicacion:
      "La cama frenada, baja y con barandillas cuando procede, junto con un timbre accesible y el suelo seco, reduce el riesgo de caídas.",
    fuente: "Protocolo de prevención de caídas",
    dificultad: "media",
    temaSlug: "tcae-musculo-esqueletico",
  },
  {
    enunciado: "El decúbito supino es la posición en la que el paciente se encuentra:",
    opciones: [
      "Tumbado boca abajo",
      "Tumbado boca arriba, sobre la espalda",
      "Sentado con las piernas colgando",
      "Tumbado sobre el costado derecho",
    ],
    correctaIndex: 1,
    explicacion:
      "En decúbito supino el paciente está tumbado boca arriba, sobre su espalda. Boca abajo sería decúbito prono y de lado, decúbito lateral.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "facil",
    temaSlug: "tcae-musculo-esqueletico",
  },
  {
    enunciado:
      "Cuando un paciente utiliza un bastón como ayuda para la deambulación, por norma general debe sujetarlo:",
    opciones: [
      "En la misma mano que el lado afectado",
      "En la mano del lado sano (contrario a la pierna afectada)",
      "Con las dos manos a la vez",
      "Colgado del antebrazo sin apoyarlo",
    ],
    correctaIndex: 1,
    explicacion:
      "El bastón se sujeta en el lado sano para descargar la extremidad afectada y ampliar la base de sustentación durante la marcha.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "media",
    temaSlug: "tcae-musculo-esqueletico",
  },
  {
    enunciado:
      "La posición de Roser o Proetz, con la cabeza colgando por fuera del borde de la cama, se utiliza principalmente para:",
    opciones: [
      "Administrar enemas",
      "Exploración rectal",
      "Descanso nocturno del paciente",
      "Intubación, maniobras sobre la vía aérea o lavados de cabello",
    ],
    correctaIndex: 3,
    explicacion:
      "La posición de Roser hiperextiende el cuello y facilita el acceso a la vía aérea superior, siendo útil para intubación o lavado del cabello.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "dificil",
    temaSlug: "tcae-musculo-esqueletico",
  },
  {
    enunciado: "El decúbito prono es aquella posición en la que el paciente está:",
    opciones: [
      "Tumbado boca abajo, apoyado sobre el abdomen y el tórax",
      "Tumbado boca arriba",
      "Sentado en la cama",
      "En posición fetal lateral",
    ],
    correctaIndex: 0,
    explicacion:
      "En decúbito prono el paciente descansa boca abajo, apoyado sobre el abdomen y el tórax, con la cabeza girada hacia un lado.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "facil",
    temaSlug: "tcae-musculo-esqueletico",
  },
  {
    enunciado:
      "La posición de anti-Trendelenburg o Trendelenburg inversa (cabeza más alta que los pies) puede indicarse para:",
    opciones: [
      "Aumentar el riego cerebral en un shock",
      "Administrar un enema",
      "Favorecer la digestión y reducir el reflujo gastroesofágico",
      "Realizar una punción lumbar",
    ],
    correctaIndex: 2,
    explicacion:
      "Elevar la cabeza respecto a los pies favorece la digestión y disminuye el reflujo. Para el shock se emplearía la Trendelenburg clásica.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "media",
    temaSlug: "tcae-musculo-esqueletico",
  },

  // ── tcae-rcp ───────────────────────────────────────────────────────
  {
    enunciado:
      "En la RCP básica del adulto realizada por un reanimador, la relación entre compresiones torácicas y ventilaciones es de:",
    opciones: ["15:2", "30:2", "5:1", "15:1"],
    correctaIndex: 1,
    explicacion:
      "La relación estándar en el adulto es de 30 compresiones por cada 2 ventilaciones. La relación 15:2 se reserva para el niño con dos reanimadores sanitarios.",
    fuente: "Recomendaciones de RCP (ERC/AHA)",
    dificultad: "media",
    temaSlug: "tcae-rcp",
  },
  {
    enunciado:
      "La frecuencia recomendada de las compresiones torácicas en la RCP del adulto es de:",
    opciones: ["40-60 por minuto", "60-80 por minuto", "140-160 por minuto", "100-120 por minuto"],
    correctaIndex: 3,
    explicacion:
      "Las compresiones deben realizarse a un ritmo de 100-120 por minuto para mantener un flujo sanguíneo eficaz sin comprometer el llenado cardiaco.",
    fuente: "Recomendaciones de RCP (ERC/AHA)",
    dificultad: "media",
    temaSlug: "tcae-rcp",
  },
  {
    enunciado:
      "La profundidad recomendada de las compresiones torácicas en el adulto es de aproximadamente:",
    opciones: ["5-6 cm", "1-2 cm", "8-10 cm", "3-4 cm"],
    correctaIndex: 0,
    explicacion:
      "En el adulto se comprime el tórax unos 5-6 cm, permitiendo su reexpansión completa entre compresiones para no comprometer la eficacia.",
    fuente: "Recomendaciones de RCP (ERC/AHA)",
    dificultad: "media",
    temaSlug: "tcae-rcp",
  },
  {
    enunciado: "El DEA (desfibrilador externo automatizado) es un dispositivo que:",
    opciones: [
      "Sustituye por completo a las compresiones torácicas",
      "Solo puede utilizarlo personal médico",
      "Analiza el ritmo cardiaco e indica si procede administrar una descarga",
      "Sirve para medir la tensión arterial",
    ],
    correctaIndex: 2,
    explicacion:
      "El DEA analiza el ritmo cardiaco y avisa si está indicada la descarga, guiando al reanimador. Puede usarlo cualquier persona y no sustituye a las compresiones.",
    fuente: "Recomendaciones de RCP (ERC/AHA)",
    dificultad: "facil",
    temaSlug: "tcae-rcp",
  },
  {
    enunciado: "La posición lateral de seguridad (PLS) está indicada en una persona que:",
    opciones: [
      "Está inconsciente pero respira con normalidad",
      "Se encuentra en parada cardiorrespiratoria",
      "Presenta una fractura de columna evidente",
      "Está consciente y con dolor torácico",
    ],
    correctaIndex: 0,
    explicacion:
      "La PLS mantiene la vía aérea permeable y evita la aspiración en la persona inconsciente que respira. Si no respira, se inicia RCP en decúbito supino.",
    fuente: "Recomendaciones de RCP (ERC/AHA)",
    dificultad: "facil",
    temaSlug: "tcae-rcp",
  },
  {
    enunciado:
      "Ante una obstrucción completa de la vía aérea por cuerpo extraño (OVACE) en un adulto consciente, la maniobra a realizar es:",
    opciones: [
      "Ventilación boca a boca inmediata",
      "Compresiones torácicas continuas",
      "Compresiones abdominales (maniobra de Heimlich)",
      "Colocarlo en posición lateral de seguridad",
    ],
    correctaIndex: 2,
    explicacion:
      "En la OVACE completa del adulto consciente se alternan golpes interescapulares y compresiones abdominales (Heimlich). Si pierde la conciencia, se inicia RCP.",
    fuente: "Recomendaciones de RCP (ERC/AHA)",
    dificultad: "media",
    temaSlug: "tcae-rcp",
  },
  {
    enunciado:
      "En un adulto en reposo, se considera una frecuencia cardiaca normal la comprendida entre:",
    opciones: [
      "40 y 60 latidos por minuto",
      "60 y 100 latidos por minuto",
      "100 y 140 latidos por minuto",
      "20 y 40 latidos por minuto",
    ],
    correctaIndex: 1,
    explicacion:
      "La frecuencia cardiaca normal del adulto en reposo se sitúa entre 60 y 100 lpm. Por debajo se habla de bradicardia y por encima de taquicardia.",
    fuente: "Manual de constantes vitales",
    dificultad: "facil",
    temaSlug: "tcae-rcp",
  },
  {
    enunciado: "Se denomina bradicardia a la frecuencia cardiaca:",
    opciones: [
      "Superior a 100 lpm",
      "Entre 80 y 100 lpm",
      "Irregular pero dentro de la normalidad",
      "Inferior a 60 lpm",
    ],
    correctaIndex: 3,
    explicacion:
      "La bradicardia es una frecuencia cardiaca por debajo de 60 lpm. El aumento por encima de 100 lpm se denomina taquicardia.",
    fuente: "Manual de constantes vitales",
    dificultad: "media",
    temaSlug: "tcae-rcp",
  },
  {
    enunciado:
      "La frecuencia respiratoria normal en un adulto en reposo se sitúa aproximadamente entre:",
    opciones: [
      "4 y 8 respiraciones por minuto",
      "25 y 35 respiraciones por minuto",
      "30 y 40 respiraciones por minuto",
      "12 y 20 respiraciones por minuto",
    ],
    correctaIndex: 3,
    explicacion:
      "La frecuencia respiratoria normal del adulto es de 12 a 20 respiraciones por minuto. Su aumento se llama taquipnea y su descenso, bradipnea.",
    fuente: "Manual de constantes vitales",
    dificultad: "dificil",
    temaSlug: "tcae-rcp",
  },
  {
    enunciado: "En la cadena de supervivencia del adulto, el primer eslabón consiste en:",
    opciones: [
      "La desfibrilación precoz",
      "El reconocimiento precoz de la parada y la alerta a los servicios de emergencia",
      "Los cuidados posresucitación",
      "La administración de fármacos",
    ],
    correctaIndex: 1,
    explicacion:
      "El primer eslabón es reconocer la parada y activar el sistema de emergencias. La desfibrilación y los cuidados posresucitación son eslabones posteriores.",
    fuente: "Recomendaciones de RCP (ERC/AHA)",
    dificultad: "media",
    temaSlug: "tcae-rcp",
  },
  {
    enunciado:
      "En un adulto sano, la saturación de oxígeno (SatO2) medida por pulsioximetría se considera normal cuando es de aproximadamente:",
    opciones: ["70-80%", "85-90%", "95-100%", "50-60%"],
    correctaIndex: 2,
    explicacion:
      "La saturación de oxígeno normal se sitúa entre el 95% y el 100%. Valores por debajo indican hipoxemia y requieren valoración.",
    fuente: "Manual de constantes vitales",
    dificultad: "facil",
    temaSlug: "tcae-rcp",
  },
  {
    enunciado: "El término taquipnea hace referencia a:",
    opciones: [
      "Un aumento de la frecuencia respiratoria por encima de lo normal",
      "Una disminución de la frecuencia respiratoria",
      "La ausencia de respiración",
      "Una respiración normal y tranquila",
    ],
    correctaIndex: 0,
    explicacion:
      "La taquipnea es el aumento de la frecuencia respiratoria. La disminución es la bradipnea y la ausencia de respiración es la apnea.",
    fuente: "Manual de constantes vitales",
    dificultad: "media",
    temaSlug: "tcae-rcp",
  },

  // ── tcae-medicamentos ──────────────────────────────────────────────
  {
    enunciado: "Respecto a la administración de medicamentos, el TCAE:",
    opciones: [
      "No está autorizado a administrar medicación por vía parenteral (intravenosa o intramuscular)",
      "Puede administrar cualquier fármaco por vía intravenosa",
      "Prescribe la medicación del paciente",
      "Decide las dosis según su propio criterio",
    ],
    correctaIndex: 0,
    explicacion:
      "El TCAE colabora en la administración de medicación por vías sencillas bajo supervisión, pero no administra por vía parenteral ni prescribe ni pauta dosis.",
    fuente: "Manual del técnico en cuidados auxiliares de enfermería",
    dificultad: "facil",
    temaSlug: "tcae-medicamentos",
  },
  {
    enunciado:
      "Los medicamentos que requieren conservación en frigorífico deben mantenerse habitualmente a una temperatura de:",
    opciones: ["-18 grados C", "15-25 grados C", "2-8 grados C", "0 grados C exactos"],
    correctaIndex: 2,
    explicacion:
      "El rango habitual de conservación en nevera es de 2 a 8 grados C, evitando la congelación, que puede inactivar muchos fármacos y vacunas.",
    fuente: "Guía de conservación de medicamentos",
    dificultad: "facil",
    temaSlug: "tcae-medicamentos",
  },
  {
    enunciado: "Las gafas nasales como dispositivo de oxigenoterapia se caracterizan por:",
    opciones: [
      "Aportar siempre una FiO2 del 100%",
      "Ser un sistema de bajo flujo cómodo, que permite comer y hablar",
      "Requerir intubación previa del paciente",
      "Impedir totalmente la alimentación oral",
    ],
    correctaIndex: 1,
    explicacion:
      "Las gafas nasales son un sistema de bajo flujo, cómodo, que permite comer y hablar, y aporta concentraciones de oxígeno moderadas.",
    fuente: "Manual de oxigenoterapia",
    dificultad: "media",
    temaSlug: "tcae-medicamentos",
  },
  {
    enunciado:
      "Entre los llamados correctos en la administración segura de medicamentos se encuentran:",
    opciones: [
      "Solo el paciente y el medicamento correctos",
      "El color y el sabor correctos",
      "El precio y el fabricante correctos",
      "Paciente, medicamento, dosis, vía y hora correctos",
    ],
    correctaIndex: 3,
    explicacion:
      "Los correctos clásicos incluyen paciente, medicamento, dosis, vía y hora, a los que se suman otros como el registro correcto. Son una barrera frente a errores.",
    fuente: "Protocolo de administración segura de medicamentos",
    dificultad: "media",
    temaSlug: "tcae-medicamentos",
  },
  {
    enunciado: "Un medicamento etiquetado como fotosensible debe:",
    opciones: [
      "Conservarse siempre congelado",
      "Protegerse de la luz durante su conservación y administración",
      "Administrarse únicamente por la noche",
      "Mantenerse en un lugar bien iluminado",
    ],
    correctaIndex: 1,
    explicacion:
      "Los fármacos fotosensibles se degradan con la luz, por lo que se conservan y administran protegidos (envases opacos, fundas), no por criterios horarios.",
    fuente: "Guía de conservación de medicamentos",
    dificultad: "media",
    temaSlug: "tcae-medicamentos",
  },
  {
    enunciado:
      "La mascarilla tipo Venturi (Ventimask) tiene como ventaja principal en oxigenoterapia:",
    opciones: [
      "No necesitar fuente de oxígeno",
      "Administrar oxígeno solo durante el sueño",
      "Ser un sistema invasivo",
      "Permitir administrar una FiO2 conocida y regulable",
    ],
    correctaIndex: 3,
    explicacion:
      "La mascarilla Venturi es un sistema de alto flujo que aporta una FiO2 conocida y precisa, útil en pacientes que requieren control estricto del oxígeno.",
    fuente: "Manual de oxigenoterapia",
    dificultad: "dificil",
    temaSlug: "tcae-medicamentos",
  },
  {
    enunciado: "La administración de un fármaco por vía sublingual se caracteriza por:",
    opciones: [
      "Colocarse bajo la lengua para una absorción rápida",
      "Aplicarse en el recto",
      "Inyectarse en el músculo",
      "Introducirse por la sonda nasogástrica",
    ],
    correctaIndex: 0,
    explicacion:
      "La vía sublingual coloca el fármaco bajo la lengua, donde se absorbe con rapidez a través de la mucosa, evitando el primer paso hepático.",
    fuente: "Manual de farmacología aplicada",
    dificultad: "facil",
    temaSlug: "tcae-medicamentos",
  },
  {
    enunciado: "La cadena de frío en la conservación de vacunas consiste en:",
    opciones: [
      "Congelar todas las vacunas a -20 grados C",
      "Mantener las vacunas a temperatura ambiente",
      "Mantener las vacunas dentro de un rango de temperatura controlado (habitualmente 2-8 grados C) desde su fabricación hasta su administración",
      "Administrar las vacunas siempre en invierno",
    ],
    correctaIndex: 2,
    explicacion:
      "La cadena de frío garantiza que la vacuna se mantiene en su rango óptimo (habitualmente 2-8 grados C) en todo momento, preservando su eficacia.",
    fuente: "Programa de vacunaciones",
    dificultad: "dificil",
    temaSlug: "tcae-medicamentos",
  },
  {
    enunciado: "La aerosolterapia consiste en administrar un fármaco:",
    opciones: [
      "Por vía intravenosa lenta",
      "En forma de comprimido oral",
      "En forma de partículas suspendidas para ser inhaladas hacia las vías respiratorias",
      "Mediante inyección subcutánea",
    ],
    correctaIndex: 2,
    explicacion:
      "La aerosolterapia genera partículas del fármaco que se inhalan, depositándose en las vías respiratorias para un efecto local, como en broncodilatadores.",
    fuente: "Manual de técnicas respiratorias",
    dificultad: "media",
    temaSlug: "tcae-medicamentos",
  },
  {
    enunciado: "La vía tópica de administración de medicamentos se refiere a la aplicación:",
    opciones: [
      "Sobre la piel o mucosas, con efecto principalmente local",
      "Directamente en una vena",
      "En el interior de un músculo",
      "A través de la respiración",
    ],
    correctaIndex: 0,
    explicacion:
      "La vía tópica aplica el fármaco sobre la piel o las mucosas buscando un efecto local, como pomadas o colirios.",
    fuente: "Manual de farmacología aplicada",
    dificultad: "facil",
    temaSlug: "tcae-medicamentos",
  },
  {
    enunciado: "Antes de administrar cualquier medicación, una comprobación imprescindible es:",
    opciones: [
      "Preguntar al paciente de la cama contigua",
      "Administrar primero y comprobar después",
      "Fiarse únicamente del número de cama",
      "Identificar correctamente al paciente (nombre y datos, pulsera identificativa)",
    ],
    correctaIndex: 3,
    explicacion:
      "La identificación inequívoca del paciente (nombre, datos, pulsera) es una barrera de seguridad esencial para evitar errores de administración.",
    fuente: "Protocolo de administración segura de medicamentos",
    dificultad: "media",
    temaSlug: "tcae-medicamentos",
  },
  {
    enunciado: "Son formas farmacéuticas propias de la vía rectal:",
    opciones: [
      "Los comprimidos y las cápsulas",
      "Los supositorios y los enemas",
      "Los colirios",
      "Los aerosoles",
    ],
    correctaIndex: 1,
    explicacion:
      "Los supositorios y los enemas se administran por vía rectal. Los comprimidos son de vía oral, los colirios oftálmicos y los aerosoles inhalados.",
    fuente: "Manual de farmacología aplicada",
    dificultad: "facil",
    temaSlug: "tcae-medicamentos",
  },

  // ── tcae-exploracion ───────────────────────────────────────────────
  {
    enunciado:
      "La posición genupectoral (mahometana), apoyado sobre rodillas y pecho, se utiliza en exploraciones:",
    opciones: ["De la garganta", "Del oído", "Oftalmológicas", "Rectales y de la región perineal"],
    correctaIndex: 3,
    explicacion:
      "La posición genupectoral expone la región anal y perineal, siendo útil para exploraciones rectales y algunas endoscópicas.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "media",
    temaSlug: "tcae-exploracion",
  },
  {
    enunciado:
      "Como preparación para una intervención quirúrgica programada con anestesia general, se indica al paciente ayuno de aproximadamente:",
    opciones: ["1-2 horas", "6-8 horas", "Ningún ayuno, puede comer antes", "24-48 horas"],
    correctaIndex: 1,
    explicacion:
      "El ayuno preoperatorio de unas 6-8 horas para sólidos reduce el riesgo de broncoaspiración del contenido gástrico durante la anestesia.",
    fuente: "Protocolo de preparación preoperatoria",
    dificultad: "facil",
    temaSlug: "tcae-exploracion",
  },
  {
    enunciado:
      "En la preparación preoperatoria inmediata, respecto a las prótesis dentales, joyas y esmalte de uñas, el TCAE debe:",
    opciones: [
      "Dejarlas colocadas durante la intervención",
      "Ignorarlas por ser irrelevantes",
      "Retirarlas antes de trasladar al paciente a quirófano",
      "Fijarlas con esparadrapo",
    ],
    correctaIndex: 2,
    explicacion:
      "Se retiran prótesis, joyas y esmalte para evitar lesiones, pérdidas y para permitir la monitorización (por ejemplo, la pulsioximetría en las uñas).",
    fuente: "Protocolo de preparación preoperatoria",
    dificultad: "media",
    temaSlug: "tcae-exploracion",
  },
  {
    enunciado: "Para una exploración ginecológica, la posición habitual del paciente es:",
    opciones: [
      "Litotomía (ginecológica), en decúbito supino con piernas flexionadas y separadas",
      "Decúbito prono",
      "Genupectoral",
      "Sedestación con las piernas colgando",
    ],
    correctaIndex: 0,
    explicacion:
      "La posición de litotomía o ginecológica facilita el acceso al área genital y perineal para la exploración y determinadas técnicas.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "facil",
    temaSlug: "tcae-exploracion",
  },
  {
    enunciado:
      "Respecto al rasurado prequirúrgico de la zona a intervenir, la recomendación actual es:",
    opciones: [
      "Rasurar siempre con cuchilla la tarde anterior",
      "No preparar nunca la piel",
      "Realizarlo lo más próximo posible a la intervención, preferentemente con maquinilla eléctrica o recortadora, solo si es necesario",
      "Rasurar todo el cuerpo del paciente",
    ],
    correctaIndex: 2,
    explicacion:
      "El rasurado, cuando se precisa, se hace justo antes de la cirugía y con recortadora eléctrica, porque la cuchilla la víspera aumenta el riesgo de infección.",
    fuente: "Protocolo de preparación preoperatoria",
    dificultad: "dificil",
    temaSlug: "tcae-exploracion",
  },
  {
    enunciado: "En el postoperatorio inmediato, una de las principales tareas de vigilancia es:",
    opciones: [
      "El control de las constantes vitales y del nivel de conciencia del paciente",
      "Dar de alta al paciente de inmediato",
      "Retirar todos los apósitos quirúrgicos",
      "Ofrecer una comida copiosa nada más despertar",
    ],
    correctaIndex: 0,
    explicacion:
      "En el postoperatorio inmediato se vigilan estrechamente las constantes, el nivel de conciencia y el apósito quirúrgico para detectar complicaciones precoces.",
    fuente: "Manual de cuidados postoperatorios",
    dificultad: "media",
    temaSlug: "tcae-exploracion",
  },
  {
    enunciado:
      "El instrumento quirúrgico básico utilizado para el corte e incisión de los tejidos es:",
    opciones: ["La pinza de disección", "El separador", "El portaagujas", "El bisturí"],
    correctaIndex: 3,
    explicacion:
      "El bisturí es el instrumento de corte por excelencia. La pinza de disección sujeta tejidos, el separador expone el campo y el portaagujas maneja la aguja de sutura.",
    fuente: "Manual de instrumentación quirúrgica",
    dificultad: "facil",
    temaSlug: "tcae-exploracion",
  },
  {
    enunciado:
      "La exploración física del abdomen se realiza habitualmente con el paciente en posición de:",
    opciones: ["Genupectoral", "Decúbito supino", "Trendelenburg forzado", "Decúbito prono"],
    correctaIndex: 1,
    explicacion:
      "El decúbito supino relaja la pared abdominal y permite la inspección, palpación, percusión y auscultación del abdomen.",
    fuente: "Manual de técnicas básicas de enfermería",
    dificultad: "facil",
    temaSlug: "tcae-exploracion",
  },
  {
    enunciado: "Dentro de la preparación preoperatoria, la higiene del paciente suele incluir:",
    opciones: [
      "Evitar cualquier ducha en las 48 horas previas",
      "Una ducha o higiene corporal, en ocasiones con jabón antiséptico",
      "Aplicar únicamente colonia",
      "No lavar la zona quirúrgica",
    ],
    correctaIndex: 1,
    explicacion:
      "La higiene prequirúrgica, a veces con antiséptico, reduce la carga microbiana de la piel y disminuye el riesgo de infección de la herida quirúrgica.",
    fuente: "Protocolo de preparación preoperatoria",
    dificultad: "media",
    temaSlug: "tcae-exploracion",
  },
  {
    enunciado: "Las pinzas hemostáticas tipo Kocher o mosquito se utilizan principalmente para:",
    opciones: [
      "Cortar las suturas",
      "Iluminar el campo quirúrgico",
      "Aspirar líquidos",
      "Pinzar vasos sanguíneos y cohibir hemorragias",
    ],
    correctaIndex: 3,
    explicacion:
      "Las pinzas hemostáticas clampan vasos para detener el sangrado. El corte lo hacen las tijeras y la iluminación no depende del instrumental de mano.",
    fuente: "Manual de instrumentación quirúrgica",
    dificultad: "dificil",
    temaSlug: "tcae-exploracion",
  },
  {
    enunciado: "El portaagujas es el instrumento quirúrgico empleado para:",
    opciones: [
      "Sujetar la aguja de sutura durante la costura de los tejidos",
      "Cortar la piel",
      "Separar los bordes de la herida",
      "Aspirar sangre del campo quirúrgico",
    ],
    correctaIndex: 0,
    explicacion:
      "El portaagujas sujeta y dirige la aguja de sutura. El corte corresponde al bisturí y la separación de bordes a los separadores.",
    fuente: "Manual de instrumentación quirúrgica",
    dificultad: "media",
    temaSlug: "tcae-exploracion",
  },
  {
    enunciado:
      "Se recomienda retirar el esmalte de uñas antes de una intervención principalmente porque:",
    opciones: [
      "Puede provocar alergia al anestesista",
      "Está prohibido por motivos estéticos",
      "Dificulta la lectura correcta del pulsioxímetro (saturación de oxígeno)",
      "Aumenta el riesgo de infección de la herida",
    ],
    correctaIndex: 2,
    explicacion:
      "El esmalte interfiere con la luz del pulsioxímetro colocado en el dedo, alterando la medición de la saturación de oxígeno durante la anestesia.",
    fuente: "Protocolo de preparación preoperatoria",
    dificultad: "media",
    temaSlug: "tcae-exploracion",
  },

  // ── tcae-salud-mental ──────────────────────────────────────────────
  {
    enunciado:
      "En Andalucía, la ordenación de los dispositivos de salud mental del sistema sanitario público se regula mediante el:",
    opciones: ["Decreto 246/2005", "Decreto 77/2008", "Decreto 100/2010", "Decreto 12/2001"],
    correctaIndex: 1,
    explicacion:
      "El Decreto 77/2008 ordena la asistencia especializada de salud mental en Andalucía y define los distintos dispositivos que integran la red.",
    fuente: "Decreto 77/2008, de 4 de marzo",
    dificultad: "media",
    temaSlug: "tcae-salud-mental",
  },
  {
    enunciado: "La Unidad de Salud Mental Comunitaria (USMC) constituye:",
    opciones: [
      "Una unidad de hospitalización de agudos",
      "Un servicio exclusivamente de urgencias",
      "Un hospital psiquiátrico penitenciario",
      "El dispositivo básico de atención a la salud mental, de carácter ambulatorio y comunitario",
    ],
    correctaIndex: 3,
    explicacion:
      "La USMC es el dispositivo básico y de referencia de la atención a la salud mental, de carácter ambulatorio, que coordina la asistencia en su área.",
    fuente: "Decreto 77/2008, de 4 de marzo",
    dificultad: "media",
    temaSlug: "tcae-salud-mental",
  },
  {
    enunciado:
      "Ante un paciente agitado, la actuación prioritaria antes de recurrir a la sujeción mecánica es:",
    opciones: [
      "Intentar la contención verbal (desescalada)",
      "Aplicar de inmediato una sujeción mecánica completa",
      "Aislar al paciente sin dirigirle la palabra",
      "Tramitar el alta voluntaria",
    ],
    correctaIndex: 0,
    explicacion:
      "La contención verbal o desescalada es la primera medida ante la agitación; la sujeción mecánica es el último recurso cuando fallan las medidas menos restrictivas.",
    fuente: "Protocolo de contención mecánica",
    dificultad: "facil",
    temaSlug: "tcae-salud-mental",
  },
  {
    enunciado: "La Unidad de Hospitalización de Salud Mental (UHSM) se destina a:",
    opciones: [
      "El seguimiento ambulatorio de larga duración",
      "La atención domiciliaria exclusivamente",
      "La hospitalización breve de pacientes en fase aguda",
      "La rehabilitación laboral",
    ],
    correctaIndex: 2,
    explicacion:
      "La UHSM presta atención en régimen de hospitalización completa y breve a los pacientes en fase aguda que lo precisan, habitualmente ubicada en el hospital general.",
    fuente: "Decreto 77/2008, de 4 de marzo",
    dificultad: "media",
    temaSlug: "tcae-salud-mental",
  },
  {
    enunciado: "La aplicación de una sujeción mecánica a un paciente requiere:",
    opciones: [
      "Prescripción médica (salvo urgencia vital, con comunicación posterior)",
      "Únicamente la decisión del TCAE",
      "La autorización de otro paciente",
      "No requerir ningún registro",
    ],
    correctaIndex: 0,
    explicacion:
      "La sujeción mecánica precisa indicación y prescripción médica; en situación de urgencia puede iniciarse y comunicarse de inmediato, dejando siempre constancia.",
    fuente: "Protocolo de contención mecánica",
    dificultad: "facil",
    temaSlug: "tcae-salud-mental",
  },
  {
    enunciado: "Un paciente sometido a contención mecánica debe ser objeto de:",
    opciones: [
      "Vigilancia una sola vez al día",
      "Ninguna vigilancia especial",
      "Vigilancia y controles periódicos frecuentes, con registro de su evolución",
      "Aislamiento sin observación alguna",
    ],
    correctaIndex: 2,
    explicacion:
      "El paciente contenido requiere vigilancia estrecha y periódica (circulación, hidratación, estado general) con registro, por el riesgo asociado a la inmovilización.",
    fuente: "Protocolo de contención mecánica",
    dificultad: "media",
    temaSlug: "tcae-salud-mental",
  },
  {
    enunciado: "El hospital de día de salud mental se caracteriza por ofrecer:",
    opciones: [
      "Ingreso las 24 horas de forma indefinida",
      "Un régimen de atención intensiva durante el día, regresando el paciente a su domicilio",
      "Solo atención telefónica",
      "Cuidados exclusivamente nocturnos",
    ],
    correctaIndex: 1,
    explicacion:
      "El hospital de día ofrece tratamiento intensivo durante el día en régimen ambulatorio; el paciente pernocta en su domicilio, evitando la hospitalización completa.",
    fuente: "Decreto 77/2008, de 4 de marzo",
    dificultad: "media",
    temaSlug: "tcae-salud-mental",
  },
  {
    enunciado: "La comunidad terapéutica de salud mental está orientada principalmente a:",
    opciones: [
      "La atención de urgencias psiquiátricas",
      "La consulta ambulatoria puntual",
      "El diagnóstico en un único día",
      "El tratamiento y la rehabilitación intensiva en régimen de media o larga estancia",
    ],
    correctaIndex: 3,
    explicacion:
      "La comunidad terapéutica atiende a pacientes que necesitan un abordaje intensivo y rehabilitador de media o larga estancia, en régimen de hospitalización parcial o completa.",
    fuente: "Decreto 77/2008, de 4 de marzo",
    dificultad: "dificil",
    temaSlug: "tcae-salud-mental",
  },
  {
    enunciado: "Tras aplicar una sujeción mecánica, es obligatorio:",
    opciones: [
      "No dejar constancia para preservar la intimidad",
      "Comunicarlo solo a la familia",
      "Retirarla sin avisar a nadie",
      "Registrarla en la historia clínica (prescripción, motivo, vigilancia y retirada)",
    ],
    correctaIndex: 3,
    explicacion:
      "Toda contención mecánica debe quedar documentada en la historia clínica: prescripción, motivo, controles realizados y momento de retirada.",
    fuente: "Protocolo de contención mecánica",
    dificultad: "dificil",
    temaSlug: "tcae-salud-mental",
  },
  {
    enunciado: "En el abordaje de un paciente agitado, una medida adecuada del entorno es:",
    opciones: [
      "Rodearle de muchas personas y ruido",
      "Procurar un entorno tranquilo y seguro, retirando objetos peligrosos",
      "Encerrarle a oscuras sin vigilancia",
      "Enfrentarse a él elevando la voz",
    ],
    correctaIndex: 1,
    explicacion:
      "Un entorno tranquilo, seguro y sin objetos peligrosos reduce los estímulos y favorece la desescalada del paciente agitado.",
    fuente: "Protocolo de contención mecánica",
    dificultad: "facil",
    temaSlug: "tcae-salud-mental",
  },
  {
    enunciado: "Dentro de la red de salud mental de Andalucía, la USMC actúa como:",
    opciones: [
      "Un dispositivo aislado sin coordinación con el resto",
      "Un servicio exclusivo de internamiento forzoso",
      "El eje que coordina y deriva hacia el resto de dispositivos especializados",
      "Un centro destinado solo a menores",
    ],
    correctaIndex: 2,
    explicacion:
      "La USMC es la puerta de entrada y el eje coordinador de la atención especializada, derivando al resto de dispositivos (UHSM, hospital de día, comunidad terapéutica).",
    fuente: "Decreto 77/2008, de 4 de marzo",
    dificultad: "media",
    temaSlug: "tcae-salud-mental",
  },
  {
    enunciado: "Al colocar una sujeción mecánica, para prevenir lesiones se debe:",
    opciones: [
      "Almohadillar los puntos de sujeción y vigilar la circulación de las extremidades",
      "Apretar al máximo las sujeciones",
      "Dejar al paciente en decúbito prono sin vigilancia",
      "Sujetar únicamente por el cuello",
    ],
    correctaIndex: 0,
    explicacion:
      "Se almohadillan los puntos de sujeción y se vigila la circulación distal para evitar lesiones por presión o compromiso vascular. Nunca se sujeta por el cuello.",
    fuente: "Protocolo de contención mecánica",
    dificultad: "media",
    temaSlug: "tcae-salud-mental",
  },

  // ── tcae-envejecimiento-ulceras ────────────────────────────────────
  {
    enunciado:
      "Según la escala de Norton, se considera que existe riesgo de úlceras por presión cuando la puntuación es:",
    opciones: ["Igual o inferior a 14", "Superior a 18", "Exactamente 20", "Igual a 25"],
    correctaIndex: 0,
    explicacion:
      "En la escala de Norton, a menor puntuación mayor riesgo; una puntuación igual o inferior a 14 indica riesgo de úlceras por presión.",
    fuente: "Guía de prevención de úlceras por presión",
    dificultad: "media",
    temaSlug: "tcae-envejecimiento-ulceras",
  },
  {
    enunciado: "Una úlcera por presión de grado o categoría I se caracteriza por:",
    opciones: [
      "Pérdida total del espesor de la piel con exposición de hueso",
      "Una flictena (ampolla) con pérdida parcial de la dermis",
      "Eritema (enrojecimiento) que no blanquea a la presión, con la piel íntegra",
      "Necrosis y afectación muscular profunda",
    ],
    correctaIndex: 2,
    explicacion:
      "El grado I es un eritema que no blanquea a la presión sobre piel intacta; es el estadio más precoz y reversible de la úlcera por presión.",
    fuente: "Guía de prevención de úlceras por presión",
    dificultad: "media",
    temaSlug: "tcae-envejecimiento-ulceras",
  },
  {
    enunciado: "La úlcera por presión de grado o categoría IV se define por:",
    opciones: [
      "Enrojecimiento de la piel intacta",
      "Pérdida total del espesor de los tejidos con exposición de músculo, hueso o tendón",
      "Una ampolla superficial",
      "Solo sequedad de la piel",
    ],
    correctaIndex: 1,
    explicacion:
      "El grado IV supone pérdida total del espesor tisular con exposición de estructuras profundas como músculo, hueso o tendón; es el estadio más grave.",
    fuente: "Guía de prevención de úlceras por presión",
    dificultad: "media",
    temaSlug: "tcae-envejecimiento-ulceras",
  },
  {
    enunciado: "Entre los cambios cutáneos propios del envejecimiento se encuentra:",
    opciones: [
      "Aumento de la elasticidad de la piel",
      "Incremento del grosor de la dermis",
      "Mayor producción de grasa cutánea",
      "Piel más fina, seca y con menor elasticidad, más vulnerable a las lesiones",
    ],
    correctaIndex: 3,
    explicacion:
      "Con la edad la piel se adelgaza, se reseca y pierde elasticidad, lo que aumenta su fragilidad y el riesgo de lesiones y úlceras por presión.",
    fuente: "Manual de geriatría básica",
    dificultad: "facil",
    temaSlug: "tcae-envejecimiento-ulceras",
  },
  {
    enunciado:
      "Los ácidos grasos hiperoxigenados (AGHO) se utilizan en la prevención de las úlceras por presión porque:",
    opciones: [
      "Eliminan la necesidad de realizar cambios posturales",
      "Mejoran la resistencia de la piel en las zonas de riesgo frente a la presión",
      "Curan las úlceras de grado IV en un día",
      "Sustituyen a la alimentación del paciente",
    ],
    correctaIndex: 1,
    explicacion:
      "Los AGHO mejoran la hidratación y resistencia de la piel en las zonas de riesgo, pero complementan y no sustituyen a los cambios posturales.",
    fuente: "Guía de prevención de úlceras por presión",
    dificultad: "dificil",
    temaSlug: "tcae-envejecimiento-ulceras",
  },
  {
    enunciado:
      "En un paciente encamado en decúbito supino, las úlceras por presión aparecen con más frecuencia en:",
    opciones: [
      "La cara anterior de las rodillas",
      "Los dedos de las manos",
      "La punta de la nariz",
      "El sacro, los talones y el occipucio",
    ],
    correctaIndex: 3,
    explicacion:
      "En decúbito supino las prominencias óseas de mayor riesgo son el sacro, los talones, los codos, los omóplatos y el occipucio.",
    fuente: "Guía de prevención de úlceras por presión",
    dificultad: "media",
    temaSlug: "tcae-envejecimiento-ulceras",
  },
  {
    enunciado: "La escala de Braden es un instrumento utilizado para:",
    opciones: [
      "Valorar el riesgo de desarrollar úlceras por presión",
      "Medir el nivel de conciencia",
      "Valorar el dolor torácico",
      "Calcular el índice de masa corporal",
    ],
    correctaIndex: 0,
    explicacion:
      "La escala de Braden, como la de Norton, valora el riesgo de úlceras por presión considerando factores como la movilidad, la humedad o la nutrición.",
    fuente: "Guía de prevención de úlceras por presión",
    dificultad: "facil",
    temaSlug: "tcae-envejecimiento-ulceras",
  },
  {
    enunciado:
      "Las superficies especiales para el manejo de la presión (SEMP), como los colchones antiescaras, tienen como finalidad:",
    opciones: [
      "Sustituir la higiene del paciente",
      "Aumentar la presión sobre las prominencias óseas",
      "Reducir y redistribuir la presión sobre los tejidos",
      "Servir únicamente de aislamiento térmico",
    ],
    correctaIndex: 2,
    explicacion:
      "Las SEMP redistribuyen y reducen la presión sobre las prominencias óseas, disminuyendo el riesgo de úlceras, como complemento a los cambios posturales.",
    fuente: "Guía de prevención de úlceras por presión",
    dificultad: "media",
    temaSlug: "tcae-envejecimiento-ulceras",
  },
  {
    enunciado:
      "Dentro de los cuidados de la piel para prevenir las úlceras por presión, es correcto:",
    opciones: [
      "Aplicar masajes enérgicos sobre las prominencias óseas enrojecidas",
      "Mantener la piel húmeda de forma continua",
      "Mantener la piel limpia, seca e hidratada, evitando la humedad excesiva",
      "Utilizar agua muy caliente para el aseo",
    ],
    correctaIndex: 2,
    explicacion:
      "La piel debe mantenerse limpia, seca e hidratada. No deben darse masajes sobre prominencias enrojecidas, pues pueden dañar aún más los tejidos.",
    fuente: "Guía de prevención de úlceras por presión",
    dificultad: "media",
    temaSlug: "tcae-envejecimiento-ulceras",
  },
  {
    enunciado:
      "En un paciente en decúbito lateral, una de las zonas de mayor riesgo de úlcera por presión es:",
    opciones: [
      "El trocánter (cadera) y los maléolos",
      "El abdomen",
      "La frente",
      "La palma de la mano",
    ],
    correctaIndex: 0,
    explicacion:
      "En decúbito lateral las zonas de mayor riesgo son el trocánter, los maléolos, la cara externa de la rodilla y el hombro, por el apoyo sobre el costado.",
    fuente: "Guía de prevención de úlceras por presión",
    dificultad: "media",
    temaSlug: "tcae-envejecimiento-ulceras",
  },
  {
    enunciado: "Un cambio fisiológico habitual asociado al envejecimiento es:",
    opciones: [
      "El aumento de la masa muscular",
      "La mejora de la agudeza visual y auditiva",
      "El incremento de la densidad ósea",
      "La disminución de la masa ósea y muscular (osteoporosis, sarcopenia)",
    ],
    correctaIndex: 3,
    explicacion:
      "Con la edad disminuyen la masa ósea (osteoporosis) y la muscular (sarcopenia), aumentando el riesgo de fracturas, caídas y dependencia.",
    fuente: "Manual de geriatría básica",
    dificultad: "facil",
    temaSlug: "tcae-envejecimiento-ulceras",
  },
  {
    enunciado: "La úlcera por presión de grado o categoría II se corresponde con:",
    opciones: [
      "Piel intacta enrojecida",
      "Pérdida parcial del espesor de la piel (dermis), como una abrasión o flictena",
      "Exposición de hueso y músculo",
      "Ausencia de lesión",
    ],
    correctaIndex: 1,
    explicacion:
      "El grado II implica pérdida parcial del espesor de la piel que afecta a la epidermis y la dermis, presentándose como abrasión, flictena o úlcera superficial.",
    fuente: "Guía de prevención de úlceras por presión",
    dificultad: "media",
    temaSlug: "tcae-envejecimiento-ulceras",
  },

  // ── tcae-maternoinfantil ───────────────────────────────────────────
  {
    enunciado: "La primera etapa del parto se denomina:",
    opciones: ["Alumbramiento", "Expulsivo", "Puerperio", "Dilatación"],
    correctaIndex: 3,
    explicacion:
      "El parto consta de tres fases: dilatación (la primera), expulsivo y alumbramiento. El puerperio es el periodo posterior al parto.",
    fuente: "Manual de enfermería maternoinfantil",
    dificultad: "facil",
    temaSlug: "tcae-maternoinfantil",
  },
  {
    enunciado: "El alumbramiento, como tercera fase del parto, consiste en:",
    opciones: [
      "La salida del feto",
      "La expulsión de la placenta y las membranas",
      "La dilatación del cuello uterino",
      "El inicio de las contracciones",
    ],
    correctaIndex: 1,
    explicacion:
      "El alumbramiento es la expulsión de la placenta y las membranas tras la salida del feto, que corresponde al periodo expulsivo.",
    fuente: "Manual de enfermería maternoinfantil",
    dificultad: "media",
    temaSlug: "tcae-maternoinfantil",
  },
  {
    enunciado: "El test de Apgar del recién nacido se valora habitualmente:",
    opciones: [
      "Solo a las 24 horas de vida",
      "A la semana del nacimiento",
      "Al minuto y a los 5 minutos de vida",
      "Únicamente en el momento del corte del cordón",
    ],
    correctaIndex: 2,
    explicacion:
      "El test de Apgar se realiza al minuto y a los 5 minutos de vida para valorar la adaptación del recién nacido a la vida extrauterina.",
    fuente: "Manual de enfermería maternoinfantil",
    dificultad: "media",
    temaSlug: "tcae-maternoinfantil",
  },
  {
    enunciado: "Se denomina loquios a:",
    opciones: [
      "El flujo o secreción vaginal normal tras el parto durante el puerperio",
      "Las contracciones del parto",
      "El primer llanto del recién nacido",
      "La leche materna inicial",
    ],
    correctaIndex: 0,
    explicacion:
      "Los loquios son la secreción vaginal normal del puerperio, compuesta por restos de sangre, moco y tejido, que evoluciona en color con los días.",
    fuente: "Manual de enfermería maternoinfantil",
    dificultad: "facil",
    temaSlug: "tcae-maternoinfantil",
  },
  {
    enunciado: "En la lactancia materna, el calostro es:",
    opciones: [
      "Una infección mamaria propia del puerperio",
      "La leche madura definitiva",
      "La primera secreción de la mama tras el parto, rica en defensas (inmunoglobulinas)",
      "Un suplemento artificial de la lactancia",
    ],
    correctaIndex: 2,
    explicacion:
      "El calostro es la primera secreción mamaria, de color amarillento y rica en inmunoglobulinas y proteínas, muy importante para la protección del recién nacido.",
    fuente: "Manual de enfermería maternoinfantil",
    dificultad: "media",
    temaSlug: "tcae-maternoinfantil",
  },
  {
    enunciado: "La recomendación actual sobre la frecuencia de la lactancia materna es:",
    opciones: [
      "Amamantar a demanda, según las necesidades del bebé",
      "Amamantar solo cada 6 horas fijas",
      "Amamantar únicamente por la noche",
      "Limitar las tomas a tres al día",
    ],
    correctaIndex: 0,
    explicacion:
      "Se recomienda la lactancia a demanda, es decir, cuando el bebé lo solicita, lo que favorece la producción de leche y su adecuada nutrición.",
    fuente: "Guía de lactancia materna",
    dificultad: "facil",
    temaSlug: "tcae-maternoinfantil",
  },
  {
    enunciado: "La prueba del talón (cribado metabólico neonatal) tiene como finalidad:",
    opciones: [
      "Medir el peso del recién nacido",
      "Valorar el color de la piel",
      "Comprobar el reflejo de succión",
      "Detectar precozmente determinadas enfermedades metabólicas y endocrinas",
    ],
    correctaIndex: 3,
    explicacion:
      "El cribado neonatal o prueba del talón detecta de forma precoz enfermedades metabólicas y endocrinas para iniciar el tratamiento antes de que aparezcan secuelas.",
    fuente: "Programa de cribado neonatal",
    dificultad: "dificil",
    temaSlug: "tcae-maternoinfantil",
  },
  {
    enunciado: "El puerperio es el periodo que:",
    opciones: [
      "Precede al parto",
      "Comprende desde el final del parto hasta la recuperación del organismo materno (unas 6 semanas)",
      "Corresponde a la etapa de dilatación",
      "Dura únicamente 24 horas",
    ],
    correctaIndex: 1,
    explicacion:
      "El puerperio abarca desde el alumbramiento hasta que el organismo materno recupera su estado previo, aproximadamente unas 6 semanas.",
    fuente: "Manual de enfermería maternoinfantil",
    dificultad: "media",
    temaSlug: "tcae-maternoinfantil",
  },
  {
    enunciado: "El cuidado habitual del cordón umbilical del recién nacido incluye:",
    opciones: [
      "Cubrirlo con vendajes oclusivos apretados",
      "Mantenerlo limpio y seco hasta su caída",
      "Aplicar abundante crema hidratante grasa",
      "Tirar de él para acelerar su caída",
    ],
    correctaIndex: 1,
    explicacion:
      "El cordón se mantiene limpio y seco hasta su caída espontánea, evitando la humedad y nunca tirando de él, para prevenir la infección (onfalitis).",
    fuente: "Manual de enfermería maternoinfantil",
    dificultad: "media",
    temaSlug: "tcae-maternoinfantil",
  },
  {
    enunciado: "Uno de los signos de presunción del embarazo es:",
    opciones: [
      "El latido cardiaco fetal auscultado",
      "La visualización ecográfica del feto",
      "La palpación de partes fetales",
      "La ausencia de menstruación (amenorrea)",
    ],
    correctaIndex: 3,
    explicacion:
      "La amenorrea es un signo de presunción, ya que puede deberse a otras causas. El latido fetal, la ecografía o la palpación de partes fetales son signos de certeza.",
    fuente: "Manual de enfermería maternoinfantil",
    dificultad: "dificil",
    temaSlug: "tcae-maternoinfantil",
  },
  {
    enunciado: "El periodo expulsivo del parto se corresponde con:",
    opciones: [
      "La salida del feto a través del canal del parto",
      "La expulsión de la placenta",
      "El inicio de la dilatación cervical",
      "La secreción de loquios",
    ],
    correctaIndex: 0,
    explicacion:
      "El periodo expulsivo es la fase en la que se produce la salida del feto. La expulsión de la placenta corresponde al alumbramiento.",
    fuente: "Manual de enfermería maternoinfantil",
    dificultad: "facil",
    temaSlug: "tcae-maternoinfantil",
  },
  {
    enunciado: "El test de Apgar valora en el recién nacido parámetros como:",
    opciones: [
      "El peso, la talla y el perímetro craneal",
      "La glucemia y el grupo sanguíneo",
      "La frecuencia cardiaca, el esfuerzo respiratorio, el tono muscular, los reflejos y el color",
      "La agudeza visual y auditiva",
    ],
    correctaIndex: 2,
    explicacion:
      "El test de Apgar valora frecuencia cardiaca, esfuerzo respiratorio, tono muscular, respuesta a estímulos (reflejos) y color de la piel.",
    fuente: "Manual de enfermería maternoinfantil",
    dificultad: "media",
    temaSlug: "tcae-maternoinfantil",
  },

  // ── tcae-paliativos ────────────────────────────────────────────────
  {
    enunciado:
      "Según el modelo de Kübler-Ross sobre las fases del duelo, la primera etapa suele ser:",
    opciones: ["La aceptación", "La negación", "La depresión", "El pacto o negociación"],
    correctaIndex: 1,
    explicacion:
      "Kübler-Ross describe cinco fases (negación, ira, negociación, depresión y aceptación); la negación es habitualmente la primera reacción ante la pérdida.",
    fuente: "Modelo de duelo de Kübler-Ross",
    dificultad: "facil",
    temaSlug: "tcae-paliativos",
  },
  {
    enunciado: "El objetivo fundamental de los cuidados paliativos es:",
    opciones: [
      "Curar la enfermedad de base a toda costa",
      "Prolongar la vida mediante medidas agresivas",
      "Acelerar el fallecimiento del paciente",
      "Proporcionar confort y calidad de vida, aliviando el sufrimiento del paciente y su familia",
    ],
    correctaIndex: 3,
    explicacion:
      "Los cuidados paliativos buscan el confort y la calidad de vida, aliviando el sufrimiento físico, psíquico y espiritual del paciente y su familia, no la curación.",
    fuente: "Guía de cuidados paliativos",
    dificultad: "facil",
    temaSlug: "tcae-paliativos",
  },
  {
    enunciado: "Los estertores que pueden aparecer en la fase de agonía se deben a:",
    opciones: [
      "La acumulación de secreciones en la vía aérea que el paciente no puede expulsar",
      "Una mejoría del estado respiratorio",
      "Un exceso de actividad física",
      "La ingesta abundante de alimentos",
    ],
    correctaIndex: 0,
    explicacion:
      "Los estertores de la agonía se producen por acumulación de secreciones en la vía aérea que el paciente no puede eliminar; se alivian con cambios posturales y cuidados.",
    fuente: "Guía de cuidados paliativos",
    dificultad: "media",
    temaSlug: "tcae-paliativos",
  },
  {
    enunciado: "En el paciente paliativo, los cuidados de la boca tienen como finalidad principal:",
    opciones: [
      "Alimentarlo por vía oral de forma forzada",
      "Administrar medicación intravenosa",
      "Mantener la boca limpia y húmeda para su confort, previniendo la sequedad y las lesiones",
      "Colocar prótesis dentales nuevas",
    ],
    correctaIndex: 2,
    explicacion:
      "El cuidado de la boca en paliativos busca el confort: mantenerla limpia e hidratada, prevenir la sequedad, las grietas y las infecciones.",
    fuente: "Guía de cuidados paliativos",
    dificultad: "media",
    temaSlug: "tcae-paliativos",
  },
  {
    enunciado: "Durante los cuidados post mortem (amortajamiento), una de las actuaciones es:",
    opciones: [
      "Retirar sondas, vías y drenajes, y realizar la higiene del cadáver",
      "Administrar la medicación pautada",
      "Iniciar maniobras de reanimación",
      "Ofrecer alimentación al paciente",
    ],
    correctaIndex: 0,
    explicacion:
      "En el amortajamiento se retiran sondas, vías y drenajes, se realiza la higiene del cuerpo y se coloca de forma adecuada, con respeto y dignidad.",
    fuente: "Protocolo de cuidados post mortem",
    dificultad: "media",
    temaSlug: "tcae-paliativos",
  },
  {
    enunciado: "En los cuidados post mortem, tras el amortajamiento es imprescindible:",
    opciones: [
      "Dejar el cuerpo sin ninguna referencia",
      "Retirar todas las pulseras sin registro",
      "Identificar correctamente el cadáver antes de su traslado",
      "No comunicar el fallecimiento a nadie",
    ],
    correctaIndex: 2,
    explicacion:
      "La identificación correcta del cadáver antes de su traslado es imprescindible para evitar errores y garantizar la trazabilidad.",
    fuente: "Protocolo de cuidados post mortem",
    dificultad: "media",
    temaSlug: "tcae-paliativos",
  },
  {
    enunciado: "El apoyo al duelo de los familiares por parte del equipo sanitario consiste en:",
    opciones: [
      "Evitar cualquier contacto con la familia",
      "Ofrecer acompañamiento, escucha y apoyo emocional a los allegados",
      "Ocultar la información sobre el fallecimiento",
      "Insistir en que superen rápido la pérdida",
    ],
    correctaIndex: 1,
    explicacion:
      "El apoyo al duelo se basa en el acompañamiento, la escucha activa y el apoyo emocional, respetando los tiempos y las reacciones de cada familiar.",
    fuente: "Guía de cuidados paliativos",
    dificultad: "facil",
    temaSlug: "tcae-paliativos",
  },
  {
    enunciado:
      "En el paciente en situación terminal encamado, los cuidados de la piel se orientan a:",
    opciones: [
      "Suspender toda higiene por comodidad",
      "Aplicar únicamente tratamientos curativos agresivos",
      "Realizar cambios posturales cada 15 minutos de forma estricta",
      "Mantener la piel limpia e íntegra y prevenir las úlceras, priorizando el confort",
    ],
    correctaIndex: 3,
    explicacion:
      "En el paciente terminal se cuida la piel para mantenerla íntegra y prevenir úlceras, siempre priorizando el confort del paciente frente a pautas rígidas.",
    fuente: "Guía de cuidados paliativos",
    dificultad: "dificil",
    temaSlug: "tcae-paliativos",
  },
  {
    enunciado:
      "En el modelo de Kübler-Ross, la etapa en la que la persona asume la realidad de la pérdida con mayor serenidad se denomina:",
    opciones: ["Ira", "Negación", "Negociación", "Aceptación"],
    correctaIndex: 3,
    explicacion:
      "La aceptación es la última fase del modelo de Kübler-Ross, en la que la persona asume la realidad de la pérdida con mayor calma.",
    fuente: "Modelo de duelo de Kübler-Ross",
    dificultad: "dificil",
    temaSlug: "tcae-paliativos",
  },
  {
    enunciado: "La fase de agonía hace referencia a:",
    opciones: [
      "El periodo de recuperación tras una enfermedad",
      "El estado que precede de forma inmediata a la muerte, con deterioro general",
      "La primera fase del duelo",
      "Una etapa del embarazo",
    ],
    correctaIndex: 1,
    explicacion:
      "La agonía es el estado que precede inmediatamente a la muerte, caracterizado por un deterioro físico general y la aparición de signos como los estertores.",
    fuente: "Guía de cuidados paliativos",
    dificultad: "media",
    temaSlug: "tcae-paliativos",
  },
  {
    enunciado:
      "Dentro de las fases del duelo de Kübler-Ross, la etapa caracterizada por sentimientos de rabia y la pregunta por qué a mí es:",
    opciones: ["La aceptación", "La negociación", "La ira", "La negación"],
    correctaIndex: 2,
    explicacion:
      "La ira es la fase marcada por la rabia, la frustración y el resentimiento, en la que la persona se pregunta por qué le sucede a ella.",
    fuente: "Modelo de duelo de Kübler-Ross",
    dificultad: "dificil",
    temaSlug: "tcae-paliativos",
  },
  {
    enunciado: "Un pilar fundamental de los cuidados paliativos es:",
    opciones: [
      "El control eficaz del dolor y de otros síntomas que causan sufrimiento",
      "La restricción de las visitas de familiares",
      "La suspensión de toda comunicación con el paciente",
      "La realización continua de pruebas diagnósticas invasivas",
    ],
    correctaIndex: 0,
    explicacion:
      "El control del dolor y de otros síntomas es un pilar de los cuidados paliativos, orientados al confort del paciente y no a pruebas o tratamientos agresivos.",
    fuente: "Guía de cuidados paliativos",
    dificultad: "media",
    temaSlug: "tcae-paliativos",
  },
];
