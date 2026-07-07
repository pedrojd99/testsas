import type { SeedPregunta } from "../tipos";

export const BANCO_CELADOR: SeedPregunta[] = [
  // Tema 1: funciones-celador
  {
    enunciado:
      "Segun el articulo 14.2 del Estatuto de Personal No Sanitario, cual de las siguientes es una funcion propia del celador?",
    opciones: [
      "Trasladar a los enfermos y ayudar al personal sanitario cuando se le solicite",
      "Administrar la medicacion pautada por el medico",
      "Realizar curas menores en ausencia del personal de enfermeria",
      "Interpretar los resultados analiticos del paciente",
    ],
    correctaIndex: 0,
    explicacion:
      "El celador traslada enfermos y auxilia al personal sanitario; administrar medicacion, curar o interpretar analiticas corresponde al personal sanitario.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "facil",
    temaSlug: "funciones-celador",
  },
  {
    enunciado: "Que tiene expresamente PROHIBIDO el celador?",
    opciones: [
      "Trasladar documentos entre unidades",
      "Administrar medicamentos a los pacientes",
      "Vigilar los accesos a las dependencias",
      "Ayudar a amortajar cadaveres",
    ],
    correctaIndex: 1,
    explicacion:
      "El celador no puede administrar medicacion; es tarea del personal sanitario. Las demas si son funciones suyas.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "facil",
    temaSlug: "funciones-celador",
  },
  {
    enunciado: "La norma que regula tradicionalmente las funciones del celador es:",
    opciones: [
      "La Ley 55/2003 del Estatuto Marco",
      "El Real Decreto 1971/1999",
      "El Estatuto de Personal No Sanitario, aprobado por Orden de 5 de julio de 1971",
      "El Convenio Colectivo unico del personal laboral",
    ],
    correctaIndex: 2,
    explicacion:
      "Las funciones del celador se recogen en el Estatuto de Personal No Sanitario (Orden de 5 de julio de 1971), art. 14.2.",
    fuente: "Orden de 5 de julio de 1971",
    dificultad: "media",
    temaSlug: "funciones-celador",
  },
  {
    enunciado: "Respecto a la informacion clinica, el celador:",
    opciones: [
      "Puede informar al paciente sobre su diagnostico si lo pregunta",
      "Puede comentar los resultados de las pruebas a los familiares",
      "Debe explicar el tratamiento cuando el medico no esta",
      "No debe informar sobre diagnosticos ni datos clinicos del paciente",
    ],
    correctaIndex: 3,
    explicacion:
      "Informar sobre el diagnostico o datos clinicos es competencia del personal facultativo; el celador debe abstenerse.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "media",
    temaSlug: "funciones-celador",
  },
  {
    enunciado: "Entre las funciones de vigilancia del celador se incluye:",
    opciones: [
      "Vigilar los accesos y estancias, permitiendo el paso solo a las personas autorizadas",
      "Sancionar a los visitantes que incumplan las normas",
      "Detener a las personas sospechosas dentro del centro",
      "Portar armas para la seguridad del centro",
    ],
    correctaIndex: 0,
    explicacion:
      "El celador vigila accesos y estancias y controla el acceso de visitantes, pero no tiene funciones policiales ni sancionadoras.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "media",
    temaSlug: "funciones-celador",
  },
  {
    enunciado: "El traslado de pacientes de un servicio a otro dentro del hospital corresponde:",
    opciones: [
      "Exclusivamente al personal de enfermeria",
      "Al celador, salvo indicacion de que precise atencion sanitaria en el trayecto",
      "A los familiares del paciente",
      "Al personal de seguridad",
    ],
    correctaIndex: 1,
    explicacion:
      "El traslado de enfermos es funcion del celador; si el paciente requiere cuidados durante el traslado le acompanara personal sanitario.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "facil",
    temaSlug: "funciones-celador",
  },
  {
    enunciado: "Cual de estas NO es una funcion del celador?",
    opciones: [
      "Trasladar documentos, correspondencia u objetos que le sean confiados",
      "Ayudar a colocar y sujetar a los enfermos agitados cuando lo indique el personal sanitario",
      "Rasurar la zona quirurgica del paciente antes de la intervencion",
      "Vigilar el acceso y la estancia de familiares y visitantes",
    ],
    correctaIndex: 2,
    explicacion:
      "El rasurado prequirurgico es tarea sanitaria; el celador puede colaborar en la movilizacion pero no realiza tecnicas sobre el paciente.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "media",
    temaSlug: "funciones-celador",
  },
  {
    enunciado: "En relacion con los cadaveres, el celador tiene entre sus funciones:",
    opciones: [
      "Certificar la defuncion",
      "Determinar la causa de la muerte",
      "Realizar la autopsia",
      "Ayudar al amortajamiento y trasladar el cadaver al mortuorio",
    ],
    correctaIndex: 3,
    explicacion:
      "El celador ayuda a amortajar y traslada el cadaver; certificar la muerte o su causa y la autopsia son actos medicos.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "media",
    temaSlug: "funciones-celador",
  },
  {
    enunciado: "Cuando el personal sanitario lo solicita, el celador puede:",
    opciones: [
      "Ayudar a sujetar o mover al paciente para facilitar una tecnica sanitaria",
      "Aplicar el vendaje una vez terminada la cura",
      "Retirar la via venosa al alta",
      "Tomar la tension arterial del paciente",
    ],
    correctaIndex: 0,
    explicacion:
      "El celador colabora en la sujecion y movilizacion del paciente a peticion del personal sanitario, pero no ejecuta tecnicas sanitarias.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "dificil",
    temaSlug: "funciones-celador",
  },
  {
    enunciado: "El traslado de aparatos y mobiliario que se le encomiende dentro del centro:",
    opciones: [
      "No es competencia del celador",
      "Es una funcion del celador",
      "Corresponde solo al servicio de mantenimiento",
      "Requiere autorizacion del gerente en cada caso",
    ],
    correctaIndex: 1,
    explicacion:
      "Entre las funciones del celador esta el traslado de aparatos o mobiliario que se le confie.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "media",
    temaSlug: "funciones-celador",
  },
  {
    enunciado: "El celador debe atender al publico e informar:",
    opciones: [
      "Sobre el diagnostico de los pacientes ingresados",
      "Sobre el tratamiento prescrito",
      "Orientandolo y dirigiendolo hacia las dependencias que solicite, sin dar datos clinicos",
      "Sobre el pronostico de la enfermedad",
    ],
    correctaIndex: 2,
    explicacion:
      "El celador orienta e informa sobre la ubicacion de servicios y dependencias, nunca sobre datos clinicos, diagnosticos o pronosticos.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "facil",
    temaSlug: "funciones-celador",
  },
  {
    enunciado: "Respecto a la distribucion de la comida a los enfermos, el celador:",
    opciones: [
      "Elabora los menus segun la dieta prescrita",
      "Prescribe la dieta al paciente",
      "No tiene ninguna relacion con la comida",
      "Puede ayudar a la distribucion de las comidas cuando se le encomiende",
    ],
    correctaIndex: 3,
    explicacion:
      "El celador puede colaborar en la distribucion de las comidas; elaborar menus o prescribir dietas no es funcion suya.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "dificil",
    temaSlug: "funciones-celador",
  },

  // Tema 2: comunicacion-celador
  {
    enunciado: "La comunicacion no verbal incluye:",
    opciones: [
      "Las palabras escritas en un informe",
      "Los gestos, la postura y la expresion facial",
      "El contenido literal del mensaje hablado",
      "El idioma empleado en la conversacion",
    ],
    correctaIndex: 1,
    explicacion:
      "La comunicacion no verbal se transmite mediante gestos, posturas, expresiones y miradas, no por el contenido verbal.",
    fuente: "Habilidades de comunicacion y atencion al usuario",
    dificultad: "facil",
    temaSlug: "comunicacion-celador",
  },
  {
    enunciado: "La escucha activa consiste en:",
    opciones: [
      "Interrumpir para dar la propia opinion cuanto antes",
      "Oir el mensaje mientras se realizan otras tareas",
      "Atender de forma plena al interlocutor mostrando interes y comprension",
      "Repetir mecanicamente lo que dice el otro sin comprenderlo",
    ],
    correctaIndex: 2,
    explicacion:
      "La escucha activa implica atencion plena, interes real y comprension del mensaje del interlocutor.",
    fuente: "Habilidades de comunicacion y atencion al usuario",
    dificultad: "media",
    temaSlug: "comunicacion-celador",
  },
  {
    enunciado: "La empatia se define como:",
    opciones: [
      "Imponer el propio punto de vista",
      "Sentir lastima por el usuario",
      "La incapacidad de entender al otro",
      "La capacidad de ponerse en el lugar del otro y comprender sus emociones",
    ],
    correctaIndex: 3,
    explicacion:
      "La empatia es la capacidad de comprender y compartir el estado emocional del interlocutor, distinta de la compasion o la lastima.",
    fuente: "Habilidades de comunicacion y atencion al usuario",
    dificultad: "media",
    temaSlug: "comunicacion-celador",
  },
  {
    enunciado: "La conducta asertiva se caracteriza por:",
    opciones: [
      "Defender los propios derechos respetando los de los demas",
      "Imponer las opiniones mediante la agresividad",
      "Ceder siempre para evitar el conflicto",
      "Evitar toda expresion de desacuerdo",
    ],
    correctaIndex: 0,
    explicacion:
      "La asertividad expresa opiniones y defiende derechos propios respetando a los demas, frente a la conducta agresiva o pasiva.",
    fuente: "Habilidades de comunicacion y atencion al usuario",
    dificultad: "media",
    temaSlug: "comunicacion-celador",
  },
  {
    enunciado: "En el proceso de comunicacion, quien elabora y transmite el mensaje es:",
    opciones: ["El receptor", "El emisor", "El canal", "El codigo"],
    correctaIndex: 1,
    explicacion: "El emisor codifica y transmite el mensaje; el receptor lo recibe e interpreta.",
    fuente: "Teoria de la comunicacion",
    dificultad: "facil",
    temaSlug: "comunicacion-celador",
  },
  {
    enunciado:
      "El conjunto de signos y reglas que emisor y receptor deben compartir para entenderse es:",
    opciones: ["El canal", "El ruido", "El codigo", "El feedback"],
    correctaIndex: 2,
    explicacion:
      "El codigo es el sistema de signos compartido; el canal es el medio fisico por el que circula el mensaje.",
    fuente: "Teoria de la comunicacion",
    dificultad: "media",
    temaSlug: "comunicacion-celador",
  },
  {
    enunciado: "En la comunicacion no verbal, la kinesia estudia principalmente:",
    opciones: [
      "El uso del espacio y las distancias entre interlocutores",
      "El tono, el volumen y el ritmo de la voz",
      "La organizacion del tiempo en la comunicacion",
      "Los movimientos corporales, gestos y expresiones",
    ],
    correctaIndex: 3,
    explicacion:
      "La kinesia analiza los movimientos y gestos del cuerpo; el uso del espacio es la proxemica y los rasgos de la voz, la paralinguistica.",
    fuente: "Comunicacion no verbal",
    dificultad: "dificil",
    temaSlug: "comunicacion-celador",
  },
  {
    enunciado: "La proxemica se refiere a:",
    opciones: [
      "El manejo del espacio y las distancias entre las personas al comunicarse",
      "Los gestos de las manos",
      "El tono y la entonacion de la voz",
      "El contacto visual",
    ],
    correctaIndex: 0,
    explicacion:
      "La proxemica estudia como las personas usan y perciben el espacio y las distancias en la interaccion.",
    fuente: "Comunicacion no verbal",
    dificultad: "dificil",
    temaSlug: "comunicacion-celador",
  },
  {
    enunciado: "Los elementos paralinguisticos de la comunicacion son:",
    opciones: [
      "Los gestos y las posturas",
      "El tono, el volumen, el ritmo y las pausas de la voz",
      "La distancia entre los interlocutores",
      "El texto escrito del mensaje",
    ],
    correctaIndex: 1,
    explicacion:
      "La paralinguistica abarca las cualidades de la voz (tono, volumen, ritmo, pausas) que acompanan al mensaje verbal.",
    fuente: "Comunicacion no verbal",
    dificultad: "media",
    temaSlug: "comunicacion-celador",
  },
  {
    enunciado: "Una barrera de la comunicacion de tipo fisico es:",
    opciones: [
      "El uso de tecnicismos que el usuario no entiende",
      "Los prejuicios del receptor",
      "El ruido ambiental que impide oir bien el mensaje",
      "El estado emocional alterado del interlocutor",
    ],
    correctaIndex: 2,
    explicacion:
      "El ruido ambiental es una barrera fisica; los tecnicismos son barrera semantica y los prejuicios o emociones, barreras psicologicas.",
    fuente: "Barreras de la comunicacion",
    dificultad: "facil",
    temaSlug: "comunicacion-celador",
  },
  {
    enunciado: "En la atencion a un usuario que llega alterado y nervioso, el celador debe:",
    opciones: [
      "Responder con el mismo tono elevado para imponerse",
      "Ignorarlo hasta que se calme por si mismo",
      "Discutir para demostrarle que se equivoca",
      "Mantener la calma, escuchar y usar un tono sereno y respetuoso",
    ],
    correctaIndex: 3,
    explicacion:
      "Ante un usuario alterado se recomienda autocontrol, escucha activa y un tono sereno para reconducir la situacion.",
    fuente: "Habilidades de comunicacion y atencion al usuario",
    dificultad: "media",
    temaSlug: "comunicacion-celador",
  },
  {
    enunciado: "El feedback o retroalimentacion en la comunicacion es:",
    opciones: [
      "La respuesta del receptor que informa al emisor de como ha recibido el mensaje",
      "El medio fisico por el que viaja el mensaje",
      "La interferencia que distorsiona el mensaje",
      "El conjunto de signos utilizados",
    ],
    correctaIndex: 0,
    explicacion:
      "El feedback es la respuesta del receptor que permite al emisor comprobar si el mensaje se ha entendido.",
    fuente: "Teoria de la comunicacion",
    dificultad: "media",
    temaSlug: "comunicacion-celador",
  },

  // Tema 3: celador-puesto-1
  {
    enunciado:
      "En el quirofano, la circulacion se organiza para que el material limpio o esteril no se cruce con el sucio. Este principio se conoce como:",
    opciones: [
      "Circulacion unica",
      "Circulacion libre sin restricciones",
      "Separacion de circuitos limpio y sucio",
      "Circulacion inversa obligatoria",
    ],
    correctaIndex: 2,
    explicacion:
      "El bloque quirurgico separa los circuitos limpio o esteril y sucio para evitar contaminaciones cruzadas.",
    fuente: "Protocolo del bloque quirurgico",
    dificultad: "media",
    temaSlug: "celador-puesto-1",
  },
  {
    enunciado: "Para acceder al bloque quirurgico, el celador debe:",
    opciones: [
      "Entrar con la ropa de calle",
      "Acceder sin ninguna medida especial",
      "Ponerse solo guantes",
      "Vestir el pijama quirurgico, calzas, gorro y mascarilla segun la zona",
    ],
    correctaIndex: 3,
    explicacion:
      "El acceso al bloque quirurgico exige vestimenta especifica (pijama, gorro, calzas, mascarilla) para mantener la asepsia.",
    fuente: "Protocolo del bloque quirurgico",
    dificultad: "facil",
    temaSlug: "celador-puesto-1",
  },
  {
    enunciado: "El traslado del paciente desde la planta al quirofano lo realiza el celador:",
    opciones: [
      "Comprobando la identidad del paciente y trasladandolo en cama o camilla de forma segura",
      "Administrandole la premedicacion anestesica",
      "Retirandole el suero antes de salir",
      "Firmando el consentimiento informado en su nombre",
    ],
    correctaIndex: 0,
    explicacion:
      "El celador verifica la identidad y traslada al paciente con seguridad; la premedicacion y el consentimiento no son funciones suyas.",
    fuente: "Protocolo del bloque quirurgico",
    dificultad: "media",
    temaSlug: "celador-puesto-1",
  },
  {
    enunciado:
      "Tras la intervencion, el paciente pasa habitualmente a la Unidad de Recuperacion Postanestesica (URPA) antes de:",
    opciones: [
      "Entrar de nuevo al quirofano",
      "Subir a la planta de hospitalizacion o a la unidad correspondiente",
      "Recibir el alta domiciliaria inmediata",
      "Iniciar la anestesia",
    ],
    correctaIndex: 1,
    explicacion:
      "En la URPA se vigila el postoperatorio inmediato; despues el celador traslada al paciente a la planta o unidad que corresponda.",
    fuente: "Protocolo del bloque quirurgico",
    dificultad: "media",
    temaSlug: "celador-puesto-1",
  },
  {
    enunciado: "En la UCI, cuando el celador realiza tareas, debe:",
    opciones: [
      "Entrar libremente sin ninguna precaucion",
      "Tocar los equipos de monitorizacion para ajustarlos",
      "Respetar las normas de asepsia y las indicaciones del personal sanitario",
      "Desconectar las alarmas que suenen",
    ],
    correctaIndex: 2,
    explicacion:
      "La UCI exige extremar la asepsia; el celador actua siguiendo las indicaciones del personal y no manipula equipos ni alarmas.",
    fuente: "Protocolo de la unidad de cuidados intensivos",
    dificultad: "facil",
    temaSlug: "celador-puesto-1",
  },
  {
    enunciado:
      "En el servicio de urgencias, la clasificacion de los pacientes segun su gravedad (triaje):",
    opciones: [
      "La realiza el celador a la entrada",
      "La hace el personal administrativo",
      "La efectua el celador junto con el vigilante",
      "La realiza personal sanitario cualificado, no el celador",
    ],
    correctaIndex: 3,
    explicacion:
      "El triaje es una valoracion sanitaria que corresponde a personal cualificado (enfermeria o medicina); el celador no clasifica pacientes.",
    fuente: "Protocolo de triaje en urgencias",
    dificultad: "media",
    temaSlug: "celador-puesto-1",
  },
  {
    enunciado:
      "En hospitalizacion, cuando un paciente necesita ser movilizado en la cama y el personal de enfermeria lo solicita, el celador:",
    opciones: [
      "Colabora en la movilizacion aplicando una mecanica corporal correcta",
      "Le administra un relajante muscular",
      "Decide por si mismo el cambio postural sin avisar",
      "Se niega porque no es su funcion",
    ],
    correctaIndex: 0,
    explicacion:
      "El celador colabora en la movilizacion de pacientes a peticion del personal sanitario, cuidando la mecanica corporal.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "media",
    temaSlug: "celador-puesto-1",
  },
  {
    enunciado:
      "Dentro del bloque quirurgico, la denominada zona negra o de acceso se caracteriza por:",
    opciones: [
      "Ser la zona esteril donde se opera",
      "Ser la zona de transicion entre el exterior y el bloque, con menor exigencia de asepsia",
      "Ser la sala donde se lava el cirujano",
      "Estar prohibida a todo el personal",
    ],
    correctaIndex: 1,
    explicacion:
      "La zona negra es el area de acceso y transicion del bloque; la asepsia maxima se exige en la zona blanca o esteril.",
    fuente: "Protocolo del bloque quirurgico",
    dificultad: "dificil",
    temaSlug: "celador-puesto-1",
  },
  {
    enunciado: "El material y los residuos generados en la intervencion salen del quirofano por:",
    opciones: [
      "La misma puerta por la que entra el material esteril",
      "El vestuario del personal",
      "El circuito sucio, separado del circuito limpio",
      "La zona de recepcion de pacientes",
    ],
    correctaIndex: 2,
    explicacion:
      "Los residuos y el material sucio circulan por un circuito diferenciado del limpio para evitar contaminaciones cruzadas.",
    fuente: "Protocolo del bloque quirurgico",
    dificultad: "dificil",
    temaSlug: "celador-puesto-1",
  },
  {
    enunciado:
      "Antes de trasladar a un paciente al quirofano, el celador comprueba principalmente:",
    opciones: [
      "El resultado de la operacion",
      "La factura de los servicios",
      "El menu del dia",
      "La identidad del paciente y que va acompanado de su documentacion",
    ],
    correctaIndex: 3,
    explicacion:
      "La verificacion de identidad y documentacion del paciente es clave para la seguridad antes del traslado al quirofano.",
    fuente: "Protocolo de seguridad del paciente quirurgico",
    dificultad: "facil",
    temaSlug: "celador-puesto-1",
  },
  {
    enunciado: "En urgencias, la funcion del celador respecto a los pacientes que llegan es:",
    opciones: [
      "Colaborar en el traslado y movilizacion de los pacientes y ayudar al personal sanitario",
      "Decidir el orden de atencion medica",
      "Realizar las primeras curas",
      "Pautar analgesia a los pacientes con dolor",
    ],
    correctaIndex: 0,
    explicacion:
      "El celador colabora en traslados y movilizaciones y auxilia al personal; no decide prioridades clinicas ni realiza tecnicas.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "media",
    temaSlug: "celador-puesto-1",
  },
  {
    enunciado:
      "El traslado de un paciente conectado a un equipo de soporte vital desde la UCI a una prueba diagnostica:",
    opciones: [
      "Lo realiza el celador solo, sin acompanamiento",
      "Lo realiza el celador acompanado por personal sanitario que vigila al paciente",
      "Lo hace el paciente por su propio pie",
      "Se pospone siempre hasta el alta",
    ],
    correctaIndex: 1,
    explicacion:
      "Un paciente critico se traslada con acompanamiento sanitario que vigila su estado; el celador se encarga del movimiento seguro.",
    fuente: "Protocolo de traslado de pacientes criticos",
    dificultad: "media",
    temaSlug: "celador-puesto-1",
  },

  // Tema 4: celador-puesto-2
  {
    enunciado: "En una unidad de salud mental, la sujecion mecanica de un paciente agitado:",
    opciones: [
      "La decide el celador por su cuenta",
      "Se aplica siempre que el paciente moleste",
      "La ordena el personal de seguridad",
      "Requiere orden o indicacion facultativa; el celador colabora en su aplicacion",
    ],
    correctaIndex: 3,
    explicacion:
      "La contencion mecanica precisa prescripcion facultativa; el celador puede colaborar en su aplicacion, nunca decidirla.",
    fuente: "Protocolo de contencion mecanica",
    dificultad: "media",
    temaSlug: "celador-puesto-2",
  },
  {
    enunciado: "En el control de accesos, el celador:",
    opciones: [
      "Vigila la entrada y permite el paso solo a las personas autorizadas",
      "Cachea a todos los visitantes",
      "Retira el DNI a los familiares",
      "Prohibe la entrada a todo el mundo",
    ],
    correctaIndex: 0,
    explicacion:
      "El celador controla el acceso permitiendo el paso a las personas autorizadas y en el horario establecido, sin funciones policiales.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "facil",
    temaSlug: "celador-puesto-2",
  },
  {
    enunciado: "En el almacen, entre las funciones del celador se encuentra:",
    opciones: [
      "Fijar los precios del material",
      "Recibir, colocar y trasladar el material y los suministros que se le encomienden",
      "Autorizar las compras del centro",
      "Contabilizar el presupuesto anual",
    ],
    correctaIndex: 1,
    explicacion:
      "El celador colabora en la recepcion, colocacion y traslado de material y mercancias en almacenes y dependencias.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "media",
    temaSlug: "celador-puesto-2",
  },
  {
    enunciado: "En el servicio de farmacia, el celador puede:",
    opciones: [
      "Dispensar los medicamentos a los pacientes",
      "Preparar las mezclas intravenosas",
      "Trasladar y distribuir los carros o cajas de medicacion a las unidades",
      "Modificar la prescripcion medica",
    ],
    correctaIndex: 2,
    explicacion:
      "El celador transporta y distribuye la medicacion entre farmacia y unidades; dispensar o preparar mezclas es tarea del personal de farmacia.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "media",
    temaSlug: "celador-puesto-2",
  },
  {
    enunciado: "En consultas externas, una funcion habitual del celador es:",
    opciones: [
      "Explorar al paciente",
      "Emitir los informes de la consulta",
      "Recetar la medicacion",
      "Orientar y acompanar a los usuarios y ayudar a preparar la consulta",
    ],
    correctaIndex: 3,
    explicacion:
      "En consultas externas el celador orienta a los usuarios, controla el turno de acceso y colabora con el personal sanitario.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "facil",
    temaSlug: "celador-puesto-2",
  },
  {
    enunciado: "En rehabilitacion, el celador colabora principalmente en:",
    opciones: [
      "El traslado y la movilizacion de los pacientes hacia y en las salas de tratamiento",
      "La aplicacion de los ejercicios terapeuticos",
      "El diseno del plan de fisioterapia",
      "La valoracion funcional del paciente",
    ],
    correctaIndex: 0,
    explicacion:
      "El celador traslada y ayuda a movilizar a los pacientes en rehabilitacion; el tratamiento lo dirige el fisioterapeuta.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "media",
    temaSlug: "celador-puesto-2",
  },
  {
    enunciado:
      "En la contencion mecanica de un paciente en salud mental, el numero de puntos de sujecion y su indicacion:",
    opciones: [
      "Los decide libremente el celador",
      "Los establece la prescripcion facultativa recogida en la historia clinica",
      "Depende de lo que digan los familiares",
      "Se dejan al criterio del personal de limpieza",
    ],
    correctaIndex: 1,
    explicacion:
      "La contencion mecanica se realiza bajo prescripcion facultativa que consta en la historia clinica, con registro y vigilancia.",
    fuente: "Protocolo de contencion mecanica",
    dificultad: "dificil",
    temaSlug: "celador-puesto-2",
  },
  {
    enunciado:
      "Cuando un visitante quiere acceder a una unidad fuera del horario establecido, el celador debe:",
    opciones: [
      "Dejarle pasar siempre para evitar conflictos",
      "Llamar a la policia inmediatamente",
      "Indicarle con correccion las normas y el horario de visitas, y avisar al responsable si insiste",
      "Expulsarlo por la fuerza del centro",
    ],
    correctaIndex: 2,
    explicacion:
      "El celador informa con correccion de las normas y horarios y, si hay problema, avisa al responsable; no ejerce la fuerza.",
    fuente: "Manual de Estilo del SAS",
    dificultad: "media",
    temaSlug: "celador-puesto-2",
  },
  {
    enunciado: "El traslado de muestras biologicas desde una consulta al laboratorio:",
    opciones: [
      "No puede hacerlo el celador en ningun caso",
      "Lo hace el propio paciente",
      "Solo lo realiza el facultativo",
      "Puede realizarlo el celador siguiendo las normas de transporte seguro de muestras",
    ],
    correctaIndex: 3,
    explicacion:
      "El celador puede trasladar muestras y documentos entre servicios respetando las normas de seguridad y conservacion.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "media",
    temaSlug: "celador-puesto-2",
  },
  {
    enunciado: "En el almacen general, ante la llegada de un pedido, el celador:",
    opciones: [
      "Colabora en la descarga, recepcion y colocacion del material",
      "Aprueba la factura del proveedor",
      "Negocia el precio con el proveedor",
      "Decide que productos se compran",
    ],
    correctaIndex: 0,
    explicacion:
      "El celador participa en la carga, descarga y colocacion de mercancias; la gestion economica corresponde a otros servicios.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "facil",
    temaSlug: "celador-puesto-2",
  },
  {
    enunciado: "En una unidad de salud mental, si un paciente muestra agitacion, el celador:",
    opciones: [
      "Aplica la sujecion sin avisar a nadie",
      "Avisa al personal sanitario y colabora en la contencion si asi se le indica",
      "Se enfrenta verbalmente al paciente",
      "Abandona la unidad",
    ],
    correctaIndex: 1,
    explicacion:
      "Ante la agitacion, el celador avisa al personal sanitario y colabora en la contencion solo bajo indicacion, con seguridad.",
    fuente: "Protocolo de contencion mecanica",
    dificultad: "media",
    temaSlug: "celador-puesto-2",
  },
  {
    enunciado:
      "El transporte neumatico de muestras o documentos, cuando existe, no exime al celador de:",
    opciones: [
      "Cobrar por el envio",
      "Firmar recetas",
      "Trasladar personalmente aquellos elementos que no admite ese sistema, con las debidas garantias",
      "Realizar el analisis de la muestra",
    ],
    correctaIndex: 2,
    explicacion:
      "El celador sigue encargandose del traslado manual de lo que no puede enviarse por otros medios, garantizando su integridad.",
    fuente: "Estatuto de Personal No Sanitario, art. 14.2",
    dificultad: "dificil",
    temaSlug: "celador-puesto-2",
  },

  // Tema 5: movilizacion-pacientes
  {
    enunciado: "La posicion de Fowler consiste en colocar al paciente:",
    opciones: [
      "Semisentado, con la cabecera de la cama elevada unos 45 grados",
      "Tumbado boca abajo",
      "Tumbado sobre el lado izquierdo",
      "Con la cabeza mas baja que los pies",
    ],
    correctaIndex: 0,
    explicacion:
      "En la posicion de Fowler el paciente esta semisentado con la cabecera elevada (unos 45 grados), util para facilitar la respiracion.",
    fuente: "Manual de tecnicas basicas de movilizacion",
    dificultad: "facil",
    temaSlug: "movilizacion-pacientes",
  },
  {
    enunciado: "La posicion de Trendelenburg se caracteriza por:",
    opciones: [
      "Estar el paciente sentado en el borde de la cama",
      "Estar el paciente en decubito supino con la cabeza mas baja que los pies, en plano inclinado",
      "Estar el paciente de pie",
      "Estar tumbado boca abajo con la cabeza girada",
    ],
    correctaIndex: 1,
    explicacion:
      "En Trendelenburg el cuerpo se coloca en plano inclinado con la cabeza por debajo de los pies; el antitrendelenburg es a la inversa.",
    fuente: "Manual de tecnicas basicas de movilizacion",
    dificultad: "media",
    temaSlug: "movilizacion-pacientes",
  },
  {
    enunciado: "La posicion de Sims o de seguridad es:",
    opciones: [
      "Decubito supino con las piernas flexionadas",
      "Sedestacion en un sillon",
      "Decubito lateral, habitualmente izquierdo, semiprono, con la pierna superior flexionada",
      "Bipedestacion apoyado en un andador",
    ],
    correctaIndex: 2,
    explicacion:
      "La posicion de Sims es un decubito lateral (habitualmente izquierdo) semiprono, usada como posicion de seguridad y para enemas.",
    fuente: "Manual de tecnicas basicas de movilizacion",
    dificultad: "media",
    temaSlug: "movilizacion-pacientes",
  },
  {
    enunciado: "El decubito prono es la posicion en la que el paciente esta:",
    opciones: ["Tumbado boca arriba", "Sentado", "Tumbado de lado", "Tumbado boca abajo"],
    correctaIndex: 3,
    explicacion:
      "En decubito prono el paciente esta boca abajo; boca arriba es supino y de lado es lateral.",
    fuente: "Manual de tecnicas basicas de movilizacion",
    dificultad: "facil",
    temaSlug: "movilizacion-pacientes",
  },
  {
    enunciado: "Un principio basico de la mecanica corporal al levantar un peso es:",
    opciones: [
      "Flexionar las rodillas y mantener la espalda recta, usando la fuerza de las piernas",
      "Flexionar la espalda manteniendo las piernas rectas",
      "Levantar el peso lo mas lejos posible del cuerpo",
      "Girar la cintura bruscamente al levantar",
    ],
    correctaIndex: 0,
    explicacion:
      "Para proteger la espalda se flexionan las rodillas, se mantiene la espalda recta y se usa la musculatura de las piernas.",
    fuente: "Manual de mecanica corporal y prevencion de sobreesfuerzos",
    dificultad: "media",
    temaSlug: "movilizacion-pacientes",
  },
  {
    enunciado:
      "Para trasladar a un paciente encamado a un servicio de pruebas, el medio mas adecuado suele ser:",
    opciones: [
      "La silla de oficina",
      "La camilla, con las barandillas subidas para evitar caidas",
      "Llevarlo en brazos",
      "Un carro de material",
    ],
    correctaIndex: 1,
    explicacion:
      "El paciente encamado se traslada en camilla con las barandillas elevadas y sujeto para prevenir caidas.",
    fuente: "Manual de tecnicas basicas de movilizacion",
    dificultad: "media",
    temaSlug: "movilizacion-pacientes",
  },
  {
    enunciado: "La grua de transferencia esta especialmente indicada para movilizar a:",
    opciones: [
      "Pacientes que caminan de forma autonoma",
      "Pacientes que solo necesitan apoyo verbal",
      "Pacientes dependientes o con gran peso que no colaboran, evitando el sobreesfuerzo del trabajador",
      "Pacientes que van a ser dados de alta",
    ],
    correctaIndex: 2,
    explicacion:
      "La grua se usa con pacientes muy dependientes o pesados que no colaboran, reduciendo el riesgo de lesion del trabajador.",
    fuente: "Manual de mecanica corporal y prevencion de sobreesfuerzos",
    dificultad: "dificil",
    temaSlug: "movilizacion-pacientes",
  },
  {
    enunciado: "En la transferencia de la cama a la silla de ruedas, la silla debe colocarse:",
    opciones: [
      "Lejos de la cama y sin frenar",
      "En perpendicular estricta y en movimiento",
      "Detras de la cabecera",
      "Proxima a la cama, frenada y formando un angulo adecuado con ella",
    ],
    correctaIndex: 3,
    explicacion:
      "La silla se coloca cerca de la cama, frenada y en angulo para acortar el recorrido y hacer segura la transferencia.",
    fuente: "Manual de tecnicas basicas de movilizacion",
    dificultad: "media",
    temaSlug: "movilizacion-pacientes",
  },
  {
    enunciado: "El decubito supino es la posicion en la que el paciente esta:",
    opciones: [
      "Tumbado boca arriba, sobre su espalda",
      "Tumbado boca abajo",
      "Sentado en la cama",
      "De pie",
    ],
    correctaIndex: 0,
    explicacion:
      "En decubito supino el paciente esta boca arriba; es la posicion anatomica de referencia en la cama.",
    fuente: "Manual de tecnicas basicas de movilizacion",
    dificultad: "facil",
    temaSlug: "movilizacion-pacientes",
  },
  {
    enunciado: "Al trasladar un cadaver al mortuorio, el celador debe:",
    opciones: [
      "Trasladarlo sin ninguna identificacion",
      "Verificar la identificacion del cadaver y trasladarlo con respeto y discrecion, evitando las zonas concurridas",
      "Exponerlo en las zonas comunes",
      "Retirar todas las etiquetas identificativas",
    ],
    correctaIndex: 1,
    explicacion:
      "El traslado del cadaver se hace con identificacion correcta, respeto y discrecion, por circuitos poco concurridos.",
    fuente: "Protocolo de actuacion ante el fallecimiento",
    dificultad: "dificil",
    temaSlug: "movilizacion-pacientes",
  },
  {
    enunciado: "Para mover a un paciente en la cama, es recomendable que el celador:",
    opciones: [
      "Trabaje siempre solo aunque el paciente pese mucho",
      "Estire completamente los brazos alejando la carga",
      "Acerque la carga a su cuerpo y, si es preciso, pida ayuda a un companero",
      "Levante al paciente con la espalda encorvada",
    ],
    correctaIndex: 2,
    explicacion:
      "Acercar la carga al cuerpo y trabajar en equipo cuando es necesario reduce el riesgo de lesion musculoesqueletica.",
    fuente: "Manual de mecanica corporal y prevencion de sobreesfuerzos",
    dificultad: "media",
    temaSlug: "movilizacion-pacientes",
  },
  {
    enunciado: "La posicion antitrendelenburg o de Morestin coloca al paciente:",
    opciones: [
      "Boca abajo",
      "De lado",
      "Sentado con las piernas colgando",
      "En decubito supino con la cabeza mas alta que los pies, en plano inclinado",
    ],
    correctaIndex: 3,
    explicacion:
      "El antitrendelenburg o Morestin es el plano inclinado con la cabeza elevada respecto a los pies, inverso al Trendelenburg.",
    fuente: "Manual de tecnicas basicas de movilizacion",
    dificultad: "media",
    temaSlug: "movilizacion-pacientes",
  },

  // Tema 6: manual-estilo
  {
    enunciado:
      "Segun el Manual de Estilo del SAS, en el trato con el usuario los profesionales deben dirigirse a el:",
    opciones: [
      "Por el numero de cama o de historia",
      "Con respeto, preferentemente por su nombre, y tratandolo de usted salvo que se indique lo contrario",
      "Con expresiones familiares como abuelo o guapa",
      "Sin necesidad de identificarse",
    ],
    correctaIndex: 1,
    explicacion:
      "El Manual de Estilo promueve un trato respetuoso y personalizado, llamando al usuario por su nombre y evitando expresiones paternalistas.",
    fuente: "Manual de Estilo del SAS",
    dificultad: "facil",
    temaSlug: "manual-estilo",
  },
  {
    enunciado:
      "Respecto a la identificacion del profesional, el Manual de Estilo del SAS establece que:",
    opciones: [
      "No es necesario que el profesional se identifique",
      "Solo se identifican los medicos",
      "El profesional debe ir correctamente identificado, mediante tarjeta y uniforme, ante el usuario",
      "La identificacion es opcional segun el servicio",
    ],
    correctaIndex: 2,
    explicacion:
      "El Manual de Estilo exige que el profesional este correctamente identificado ante el usuario mediante tarjeta y uniforme.",
    fuente: "Manual de Estilo del SAS",
    dificultad: "media",
    temaSlug: "manual-estilo",
  },
  {
    enunciado:
      "La confidencialidad de los datos del usuario, segun el Manual de Estilo, implica que el celador:",
    opciones: [
      "Puede comentar los casos con sus amistades",
      "Puede difundir informacion si el paciente es conocido",
      "Puede publicar datos en redes sociales sin el nombre",
      "Debe guardar secreto y no divulgar informacion de los usuarios",
    ],
    correctaIndex: 3,
    explicacion:
      "El deber de confidencialidad obliga a no divulgar informacion de los usuarios; es un principio basico del Manual de Estilo.",
    fuente: "Manual de Estilo del SAS",
    dificultad: "media",
    temaSlug: "manual-estilo",
  },
  {
    enunciado: "En cuanto a la imagen personal, el Manual de Estilo del SAS recomienda:",
    opciones: [
      "Cuidar el aseo y llevar el uniforme limpio y correctamente puesto",
      "Vestir ropa de calle en el trabajo",
      "Prescindir del uniforme si molesta",
      "No usar identificacion para preservar el anonimato",
    ],
    correctaIndex: 0,
    explicacion:
      "El Manual de Estilo insiste en una imagen cuidada, con uniforme limpio, aseo personal e identificacion visible.",
    fuente: "Manual de Estilo del SAS",
    dificultad: "facil",
    temaSlug: "manual-estilo",
  },
  {
    enunciado: "Ante una queja o reclamacion de un usuario, el celador debe:",
    opciones: [
      "Discutir con el usuario para defenderse",
      "Escuchar con respeto, no entrar en discusion y orientarle sobre como presentar la reclamacion",
      "Ignorar la queja",
      "Prometer soluciones que no puede garantizar",
    ],
    correctaIndex: 1,
    explicacion:
      "El profesional escucha la queja con respeto, evita la confrontacion y orienta al usuario hacia el cauce formal de reclamacion.",
    fuente: "Manual de Estilo del SAS",
    dificultad: "media",
    temaSlug: "manual-estilo",
  },
  {
    enunciado: "El Manual de Estilo del SAS tiene como finalidad principal:",
    opciones: [
      "Establecer las retribuciones del personal",
      "Regular el regimen disciplinario",
      "Orientar el comportamiento y el trato de los profesionales para mejorar la atencion al ciudadano",
      "Fijar los horarios de los servicios",
    ],
    correctaIndex: 2,
    explicacion:
      "El Manual de Estilo es una guia de conducta profesional orientada a la calidad del trato y la atencion al ciudadano.",
    fuente: "Manual de Estilo del SAS",
    dificultad: "media",
    temaSlug: "manual-estilo",
  },
  {
    enunciado:
      "Cuando un usuario pregunta por una dependencia y el celador no puede acompanarlo, lo correcto es:",
    opciones: [
      "Decirle que se busque la vida",
      "Ignorar la pregunta",
      "Senalar vagamente una direccion",
      "Indicarle de forma clara y amable como llegar",
    ],
    correctaIndex: 3,
    explicacion:
      "El Manual de Estilo promueve una informacion clara y amable al usuario, orientandolo aunque no se le pueda acompanar.",
    fuente: "Manual de Estilo del SAS",
    dificultad: "facil",
    temaSlug: "manual-estilo",
  },
  {
    enunciado: "En la comunicacion telefonica con el usuario, el Manual de Estilo recomienda:",
    opciones: [
      "Identificar el servicio, saludar y atender con amabilidad y sin demoras innecesarias",
      "No identificarse para ganar tiempo",
      "Dejar el telefono sonando si se esta ocupado",
      "Responder con monosilabos para ir rapido",
    ],
    correctaIndex: 0,
    explicacion:
      "Al telefono se recomienda identificar el servicio, saludar y ofrecer una atencion amable y agil.",
    fuente: "Manual de Estilo del SAS",
    dificultad: "dificil",
    temaSlug: "manual-estilo",
  },
  {
    enunciado: "Respecto al derecho a la intimidad durante la atencion, el celador debe:",
    opciones: [
      "Permitir el paso de curiosos",
      "Preservar la intimidad del paciente, evitando exposiciones innecesarias durante traslados y curas",
      "Dejar las puertas abiertas siempre",
      "Comentar el motivo de ingreso en voz alta",
    ],
    correctaIndex: 1,
    explicacion:
      "Preservar la intimidad y el pudor del paciente durante traslados y cuidados es una exigencia etica y del Manual de Estilo.",
    fuente: "Manual de Estilo del SAS",
    dificultad: "media",
    temaSlug: "manual-estilo",
  },
  {
    enunciado: "El trato que el Manual de Estilo del SAS propugna se basa en principios como:",
    opciones: [
      "La rapidez a costa del respeto",
      "La distancia y la frialdad",
      "El respeto, la cortesia, la empatia y la igualdad de trato",
      "El trato preferente a los conocidos",
    ],
    correctaIndex: 2,
    explicacion:
      "El Manual de Estilo se fundamenta en el respeto, la cortesia, la empatia y la igualdad en el trato a todos los usuarios.",
    fuente: "Manual de Estilo del SAS",
    dificultad: "media",
    temaSlug: "manual-estilo",
  },
  {
    enunciado:
      "Fumar o usar el movil para asuntos personales delante de los usuarios, segun el Manual de Estilo:",
    opciones: [
      "Es recomendable en los descansos",
      "Esta permitido si el usuario no se queja",
      "Es indiferente",
      "Debe evitarse porque deteriora la imagen y la atencion",
    ],
    correctaIndex: 3,
    explicacion:
      "Estas conductas deterioran la imagen profesional y la atencion; el Manual de Estilo aconseja evitarlas ante los usuarios.",
    fuente: "Manual de Estilo del SAS",
    dificultad: "facil",
    temaSlug: "manual-estilo",
  },
  {
    enunciado: "El Libro de Reclamaciones y Sugerencias del SAS sirve para que el usuario:",
    opciones: [
      "Exprese quejas, reclamaciones y sugerencias sobre la asistencia recibida",
      "Solicite pruebas medicas",
      "Pida cita con el especialista",
      "Compre productos del hospital",
    ],
    correctaIndex: 0,
    explicacion:
      "El sistema de quejas, reclamaciones y sugerencias permite al usuario manifestar su valoracion de la asistencia recibida.",
    fuente: "Manual de Estilo del SAS",
    dificultad: "dificil",
    temaSlug: "manual-estilo",
  },

  // Tema 7: prl-celador
  {
    enunciado:
      "El Real Decreto 487/1997 regula las disposiciones minimas de seguridad relativas a:",
    opciones: [
      "El uso de pantallas de visualizacion",
      "El ruido en el trabajo",
      "La manipulacion manual de cargas que entrane riesgo dorsolumbar",
      "La senalizacion de seguridad",
    ],
    correctaIndex: 2,
    explicacion:
      "El RD 487/1997 establece las disposiciones minimas sobre manipulacion manual de cargas para prevenir lesiones dorsolumbares.",
    fuente: "RD 487/1997",
    dificultad: "media",
    temaSlug: "prl-celador",
  },
  {
    enunciado:
      "El riesgo mas caracteristico del celador por la movilizacion de pacientes y cargas es:",
    opciones: [
      "El riesgo electrico",
      "El riesgo quimico",
      "El riesgo por radiaciones",
      "El sobreesfuerzo y las lesiones musculoesqueleticas, sobre todo de espalda",
    ],
    correctaIndex: 3,
    explicacion:
      "Los sobreesfuerzos por manipulacion de pacientes y cargas son el principal riesgo ergonomico del celador, con lesiones dorsolumbares.",
    fuente: "RD 487/1997",
    dificultad: "facil",
    temaSlug: "prl-celador",
  },
  {
    enunciado: "El riesgo biologico para el celador se produce principalmente por:",
    opciones: [
      "El contacto con sangre, fluidos o material contaminado",
      "El uso prolongado del ordenador",
      "La exposicion al frio del almacen",
      "El ruido de los pasillos",
    ],
    correctaIndex: 0,
    explicacion:
      "El riesgo biologico deriva del contacto con sangre, fluidos corporales o material contaminado que pueden transmitir infecciones.",
    fuente: "Plan de prevencion de riesgos laborales del SAS",
    dificultad: "media",
    temaSlug: "prl-celador",
  },
  {
    enunciado: "Los equipos de proteccion individual (EPI) se utilizan:",
    opciones: [
      "Solo cuando el trabajador quiera",
      "Cuando el riesgo no se ha podido evitar o reducir suficientemente por otros medios",
      "Unicamente en el quirofano",
      "Solo cuando lo pida el paciente",
    ],
    correctaIndex: 1,
    explicacion:
      "El EPI es la ultima barrera: se usa cuando el riesgo no puede eliminarse o controlarse con medidas colectivas u organizativas.",
    fuente: "Ley 31/1995 de Prevencion de Riesgos Laborales",
    dificultad: "facil",
    temaSlug: "prl-celador",
  },
  {
    enunciado: "Ante un pinchazo accidental con una aguja usada, el celador debe:",
    opciones: [
      "Ocultar el incidente para no molestar",
      "Seguir trabajando sin mas",
      "Lavar la zona, favorecer el sangrado, desinfectar y comunicar el accidente para su registro y seguimiento",
      "Aplicar solo una tirita",
    ],
    correctaIndex: 2,
    explicacion:
      "Ante un accidente biologico se limpia y desinfecta la herida y se notifica de inmediato para la profilaxis y el registro.",
    fuente: "Protocolo de accidentes biologicos del SAS",
    dificultad: "media",
    temaSlug: "prl-celador",
  },
  {
    enunciado: "El plan de prevencion de riesgos laborales de la empresa es:",
    opciones: [
      "Un documento voluntario sin efectos",
      "Una lista de sanciones a los trabajadores",
      "Un seguro medico privado",
      "El instrumento a traves del cual se integra la prevencion en el sistema de gestion de la empresa",
    ],
    correctaIndex: 3,
    explicacion:
      "La Ley 31/1995 configura el plan de prevencion como el instrumento para integrar la actividad preventiva en toda la organizacion.",
    fuente: "Ley 31/1995 de Prevencion de Riesgos Laborales",
    dificultad: "media",
    temaSlug: "prl-celador",
  },
  {
    enunciado:
      "Ante una agresion de un usuario, el protocolo del SAS recomienda al celador, en primer lugar:",
    opciones: [
      "Mantener la calma, intentar la desescalada verbal y pedir ayuda o avisar a seguridad",
      "Responder a la agresion con la misma violencia",
      "Abandonar el puesto sin avisar",
      "Firmar un parte de sancion al usuario",
    ],
    correctaIndex: 0,
    explicacion:
      "El protocolo prioriza la desescalada verbal, el autocontrol y la solicitud de ayuda; nunca la respuesta violenta.",
    fuente: "Plan de prevencion y atencion de agresiones del SAS",
    dificultad: "dificil",
    temaSlug: "prl-celador",
  },
  {
    enunciado:
      "Para prevenir el riesgo de sobreesfuerzo, ademas de la mecanica corporal, es fundamental:",
    opciones: [
      "Levantar siempre las cargas a solas para ir mas rapido",
      "Utilizar las ayudas mecanicas disponibles (gruas, transfer, camillas) cuando el paciente lo requiera",
      "Prescindir de las gruas por comodidad",
      "Evitar pedir ayuda a los companeros",
    ],
    correctaIndex: 1,
    explicacion:
      "El uso de ayudas mecanicas y el trabajo en equipo son medidas clave para prevenir lesiones por sobreesfuerzo.",
    fuente: "RD 487/1997",
    dificultad: "media",
    temaSlug: "prl-celador",
  },
  {
    enunciado: "Un guante es un EPI que protege frente al riesgo:",
    opciones: [
      "Solo acustico",
      "Solo termico",
      "Biologico, por contacto con fluidos o material contaminado",
      "De caidas de altura",
    ],
    correctaIndex: 2,
    explicacion:
      "Los guantes protegen frente al contacto con sangre, fluidos y material contaminado, es decir, frente al riesgo biologico.",
    fuente: "Plan de prevencion de riesgos laborales del SAS",
    dificultad: "facil",
    temaSlug: "prl-celador",
  },
  {
    enunciado: "Despues de una agresion, ademas de la atencion inmediata, el trabajador debe:",
    opciones: [
      "Olvidar el asunto",
      "Resolverlo por su cuenta con el agresor",
      "Cambiar de centro sin avisar",
      "Notificar y registrar la agresion segun el procedimiento establecido",
    ],
    correctaIndex: 3,
    explicacion:
      "La notificacion y registro de la agresion permite la atencion, el apoyo al trabajador y la adopcion de medidas preventivas.",
    fuente: "Plan de prevencion y atencion de agresiones del SAS",
    dificultad: "media",
    temaSlug: "prl-celador",
  },
  {
    enunciado: "La formacion e informacion del trabajador sobre los riesgos de su puesto:",
    opciones: [
      "Es un derecho del trabajador y una obligacion del empresario",
      "Es voluntaria para el empresario",
      "Solo se da al personal sanitario",
      "Se cobra al trabajador",
    ],
    correctaIndex: 0,
    explicacion:
      "La Ley 31/1995 obliga al empresario a garantizar formacion e informacion en prevencion; es un derecho del trabajador.",
    fuente: "Ley 31/1995 de Prevencion de Riesgos Laborales",
    dificultad: "media",
    temaSlug: "prl-celador",
  },
  {
    enunciado:
      "La vigilancia de la salud de los trabajadores, con caracter general, se caracteriza por ser:",
    opciones: [
      "Obligatoria para el trabajador en todo caso",
      "Voluntaria para el trabajador, con las excepciones legalmente previstas",
      "Un examen que paga el trabajador",
      "Competencia de los familiares",
    ],
    correctaIndex: 1,
    explicacion:
      "La vigilancia de la salud es en general voluntaria para el trabajador, salvo excepciones tasadas por la ley, y la garantiza el empresario.",
    fuente: "Ley 31/1995 de Prevencion de Riesgos Laborales, art. 22",
    dificultad: "dificil",
    temaSlug: "prl-celador",
  },

  // Tema 8: autoproteccion
  {
    enunciado: "Los fuegos de clase A son los producidos por:",
    opciones: [
      "Gases inflamables",
      "Materiales solidos que dejan brasas, como madera, papel o tejidos",
      "Metales combustibles",
      "Liquidos inflamables",
    ],
    correctaIndex: 1,
    explicacion:
      "La clase A corresponde a solidos que generan brasas (madera, papel, tejidos); los liquidos son clase B y los gases clase C.",
    fuente: "Norma UNE de clasificacion de fuegos",
    dificultad: "facil",
    temaSlug: "autoproteccion",
  },
  {
    enunciado: "Los fuegos de clase B son los originados por:",
    opciones: [
      "Solidos con brasa",
      "Metales especiales",
      "Liquidos inflamables como gasolina, aceites o disolventes",
      "Equipos electricos",
    ],
    correctaIndex: 2,
    explicacion:
      "La clase B agrupa los liquidos inflamables (gasolina, aceites, disolventes); no incluye los solidos ni los gases.",
    fuente: "Norma UNE de clasificacion de fuegos",
    dificultad: "media",
    temaSlug: "autoproteccion",
  },
  {
    enunciado: "Los fuegos de clase C corresponden a:",
    opciones: [
      "Papel y carton",
      "Aceites de cocina",
      "Metales como el magnesio",
      "Gases inflamables como el butano o el propano",
    ],
    correctaIndex: 3,
    explicacion:
      "La clase C son fuegos de gases inflamables (butano, propano, gas natural); los metales especiales son clase D.",
    fuente: "Norma UNE de clasificacion de fuegos",
    dificultad: "media",
    temaSlug: "autoproteccion",
  },
  {
    enunciado: "Los fuegos de clase D son los producidos por:",
    opciones: [
      "Metales combustibles como el magnesio, el sodio o el aluminio en polvo",
      "Madera y papel",
      "Gasolina",
      "Gas propano",
    ],
    correctaIndex: 0,
    explicacion:
      "La clase D agrupa los metales combustibles (magnesio, sodio, aluminio), que requieren agentes extintores especificos.",
    fuente: "Norma UNE de clasificacion de fuegos",
    dificultad: "media",
    temaSlug: "autoproteccion",
  },
  {
    enunciado: "El extintor mas polivalente, adecuado para fuegos de clase A, B y C, es el de:",
    opciones: [
      "Agua a chorro",
      "Polvo polivalente ABC",
      "Solo agua pulverizada",
      "Espuma exclusivamente",
    ],
    correctaIndex: 1,
    explicacion:
      "El extintor de polvo polivalente ABC sirve para solidos, liquidos y gases; el agua a chorro no sirve para liquidos ni equipos electricos.",
    fuente: "Manual de autoproteccion y extincion de incendios",
    dificultad: "facil",
    temaSlug: "autoproteccion",
  },
  {
    enunciado:
      "Para un fuego en un cuadro o equipo electrico en tension, el agente extintor mas adecuado es:",
    opciones: [
      "El agua a chorro",
      "La espuma fisica",
      "El dioxido de carbono (CO2) o el polvo, por no ser conductores",
      "El agua a presion",
    ],
    correctaIndex: 2,
    explicacion:
      "El CO2 y el polvo no conducen la electricidad, por lo que son adecuados frente a fuegos con presencia de tension; el agua es peligrosa.",
    fuente: "Manual de autoproteccion y extincion de incendios",
    dificultad: "media",
    temaSlug: "autoproteccion",
  },
  {
    enunciado: "En una evacuacion por incendio, lo correcto es:",
    opciones: [
      "Utilizar los ascensores para bajar antes",
      "Correr y adelantar a los demas",
      "Volver a por objetos personales",
      "Usar las escaleras y las salidas de emergencia siguiendo la senalizacion, sin usar los ascensores",
    ],
    correctaIndex: 3,
    explicacion:
      "En caso de incendio no se usan los ascensores; se evacua con orden por escaleras y salidas de emergencia segun la senalizacion.",
    fuente: "Manual de autoproteccion",
    dificultad: "facil",
    temaSlug: "autoproteccion",
  },
  {
    enunciado:
      "La senalizacion de los medios de lucha contra incendios (extintores, mangueras) utiliza el color:",
    opciones: ["Rojo", "Verde", "Azul", "Amarillo"],
    correctaIndex: 0,
    explicacion:
      "Las senales relativas a los equipos de lucha contra incendios son rojas; el verde corresponde a salvamento o socorro.",
    fuente: "RD 485/1997 de senalizacion",
    dificultad: "dificil",
    temaSlug: "autoproteccion",
  },
  {
    enunciado: "El Real Decreto 393/2007 aprueba:",
    opciones: [
      "El reglamento de instalaciones de proteccion contra incendios",
      "La Norma Basica de Autoproteccion de los centros, establecimientos y dependencias",
      "El estatuto del personal no sanitario",
      "La clasificacion de residuos sanitarios",
    ],
    correctaIndex: 1,
    explicacion:
      "El RD 393/2007 aprueba la Norma Basica de Autoproteccion, que regula los planes de autoproteccion de determinadas actividades.",
    fuente: "RD 393/2007",
    dificultad: "dificil",
    temaSlug: "autoproteccion",
  },
  {
    enunciado: "Las senales de salvamento o socorro (salidas y vias de evacuacion) tienen forma:",
    opciones: [
      "Triangular amarilla",
      "Circular roja",
      "Rectangular o cuadrada de color verde",
      "Circular azul",
    ],
    correctaIndex: 2,
    explicacion:
      "Las senales de evacuacion y socorro son rectangulares o cuadradas de color verde; el rojo se reserva a la lucha contra incendios y prohibicion.",
    fuente: "RD 485/1997 de senalizacion",
    dificultad: "media",
    temaSlug: "autoproteccion",
  },
  {
    enunciado: "El manejo de un extintor portatil se resume en la secuencia:",
    opciones: [
      "Empujar, girar, soltar y tirar",
      "Mirar, esperar y salir",
      "Sacudir, lanzar y correr",
      "Quitar el pasador, apuntar a la base del fuego, apretar la maneta y mover en abanico",
    ],
    correctaIndex: 3,
    explicacion:
      "Se retira el pasador de seguridad, se dirige la boquilla a la base de las llamas, se aprieta la maneta y se barre en abanico.",
    fuente: "Manual de autoproteccion y extincion de incendios",
    dificultad: "facil",
    temaSlug: "autoproteccion",
  },
  {
    enunciado: "Para que se produzca y mantenga el fuego (triangulo del fuego) se necesita:",
    opciones: [
      "Combustible, comburente (oxigeno) y energia de activacion (calor)",
      "Solo combustible",
      "Solo oxigeno y agua",
      "Combustible y agua",
    ],
    correctaIndex: 0,
    explicacion:
      "El fuego requiere combustible, comburente (oxigeno) y calor; anadiendo la reaccion en cadena se forma el tetraedro del fuego.",
    fuente: "Manual de autoproteccion y extincion de incendios",
    dificultad: "dificil",
    temaSlug: "autoproteccion",
  },

  // Tema 9: politica-ambiental
  {
    enunciado: "La gestion de los residuos sanitarios en Andalucia se regula por el:",
    opciones: [
      "RD 393/2007",
      "RD 487/1997",
      "Decreto 73/2012, por el que se aprueba el Reglamento de residuos de Andalucia",
      "Real Decreto 1971/1999",
    ],
    correctaIndex: 2,
    explicacion:
      "El Decreto 73/2012 aprueba el Reglamento de Residuos de Andalucia, que clasifica y regula la gestion de los residuos sanitarios.",
    fuente: "Decreto 73/2012 de Andalucia",
    dificultad: "media",
    temaSlug: "politica-ambiental",
  },
  {
    enunciado:
      "Los residuos asimilables a urbanos, sin riesgo especifico (papel, carton, restos de comida), pertenecen al:",
    opciones: ["Grupo IIIa", "Grupo IIIb", "Grupo II", "Grupo I"],
    correctaIndex: 3,
    explicacion:
      "El grupo I son residuos generales asimilables a urbanos, sin riesgo, gestionados como residuos domesticos.",
    fuente: "Decreto 73/2012 de Andalucia",
    dificultad: "facil",
    temaSlug: "politica-ambiental",
  },
  {
    enunciado:
      "Los residuos sanitarios no especificos o de riesgo intrahospitalario (grupo II) incluyen, por ejemplo:",
    opciones: [
      "Material de curas, gasas o vendajes contaminados, sin riesgo de infeccion en el exterior",
      "Restos de citostaticos",
      "Piezas anatomicas reconocibles",
      "Papel de oficina",
    ],
    correctaIndex: 0,
    explicacion:
      "El grupo II son residuos ligados a la actividad sanitaria (material de curas, ropa desechable) con riesgo dentro del centro pero no fuera.",
    fuente: "Decreto 73/2012 de Andalucia",
    dificultad: "media",
    temaSlug: "politica-ambiental",
  },
  {
    enunciado:
      "Los residuos sanitarios peligrosos del grupo IIIa, como agujas, bisturis y material cortopunzante, se depositan en:",
    opciones: [
      "Bolsas de plastico normales",
      "Contenedores rigidos, imperforables y resistentes a la puncion",
      "El contenedor de papel y carton",
      "El desague",
    ],
    correctaIndex: 1,
    explicacion:
      "El material cortopunzante (grupo IIIa) se elimina en contenedores rigidos e imperforables para evitar pinchazos accidentales.",
    fuente: "Decreto 73/2012 de Andalucia",
    dificultad: "media",
    temaSlug: "politica-ambiental",
  },
  {
    enunciado: "Los residuos cortopunzantes suponen para el celador principalmente un riesgo:",
    opciones: [
      "Electrico",
      "Acustico",
      "Biologico, por pinchazo o corte con material contaminado",
      "Termico",
    ],
    correctaIndex: 2,
    explicacion:
      "Agujas y objetos cortopunzantes pueden transmitir infecciones por pinchazo o corte; son un riesgo biologico que exige contenedor rigido.",
    fuente: "Protocolo de gestion de residuos sanitarios",
    dificultad: "facil",
    temaSlug: "politica-ambiental",
  },
  {
    enunciado:
      "Los restos de medicamentos citostaticos y el material contaminado con ellos se clasifican como residuos del:",
    opciones: [
      "Grupo I",
      "Grupo II",
      "Grupo IIIa",
      "Grupo IIIb, residuos citostaticos y citotoxicos",
    ],
    correctaIndex: 3,
    explicacion:
      "Los citostaticos y el material contaminado con ellos forman el grupo IIIb, con gestion especifica por su peligrosidad.",
    fuente: "Decreto 73/2012 de Andalucia",
    dificultad: "media",
    temaSlug: "politica-ambiental",
  },
  {
    enunciado: "La segregacion de los residuos sanitarios debe realizarse:",
    opciones: [
      "En el mismo lugar donde se generan, en el contenedor correspondiente a cada grupo",
      "Al final del dia, todos juntos",
      "Solo en el almacen general",
      "Cuando lo decida el celador",
    ],
    correctaIndex: 0,
    explicacion:
      "Una gestion correcta exige segregar los residuos en origen, depositando cada tipo en su contenedor especifico.",
    fuente: "Protocolo de gestion de residuos sanitarios",
    dificultad: "media",
    temaSlug: "politica-ambiental",
  },
  {
    enunciado:
      "Las piezas anatomicas y restos humanos de entidad, por sus connotaciones eticas y sanitarias, reciben una gestion:",
    opciones: [
      "Igual que el papel",
      "Especifica y diferenciada del resto de residuos",
      "Por el desague",
      "En el contenedor de vidrio",
    ],
    correctaIndex: 1,
    explicacion:
      "Los restos anatomicos reconocibles tienen una gestion especifica y diferenciada por sus implicaciones eticas y sanitarias.",
    fuente: "Decreto 73/2012 de Andalucia",
    dificultad: "dificil",
    temaSlug: "politica-ambiental",
  },
  {
    enunciado: "El objetivo principal de una correcta segregacion de residuos es:",
    opciones: [
      "Aumentar el volumen de basura",
      "Complicar el trabajo del personal",
      "Proteger la salud de las personas y el medio ambiente, y reducir riesgos",
      "Gastar mas contenedores",
    ],
    correctaIndex: 2,
    explicacion:
      "Segregar bien los residuos minimiza riesgos para las personas y el entorno y permite un tratamiento y eliminacion adecuados.",
    fuente: "Protocolo de gestion de residuos sanitarios",
    dificultad: "facil",
    temaSlug: "politica-ambiental",
  },
  {
    enunciado: "El transporte interno de los residuos sanitarios dentro del centro debe hacerse:",
    opciones: [
      "Mezclando todos los grupos para ir mas rapido",
      "Por las zonas mas concurridas",
      "Sin ninguna precaucion",
      "Por circuitos y horarios establecidos, con los contenedores cerrados y sin arrastrar las bolsas",
    ],
    correctaIndex: 3,
    explicacion:
      "El traslado interno se realiza por circuitos y horarios definidos, con recipientes cerrados, evitando derrames y contaminaciones.",
    fuente: "Protocolo de gestion de residuos sanitarios",
    dificultad: "media",
    temaSlug: "politica-ambiental",
  },
  {
    enunciado: "Una bolsa de residuos del grupo II que aparece rota o rezumando debe:",
    opciones: [
      "Introducirse en otra bolsa o contenedor integro antes de su traslado",
      "Arrastrarse hasta el almacen",
      "Vaciarse en el suelo para revisarla",
      "Abrirse para comprobar el contenido",
    ],
    correctaIndex: 0,
    explicacion:
      "Ante una bolsa deteriorada se utiliza el doble embolsado o un contenedor integro para evitar derrames y exposiciones.",
    fuente: "Protocolo de gestion de residuos sanitarios",
    dificultad: "media",
    temaSlug: "politica-ambiental",
  },
  {
    enunciado:
      "Segun la clasificacion del Decreto 73/2012, los residuos del grupo III se consideran:",
    opciones: [
      "Residuos asimilables a urbanos",
      "Residuos peligrosos, con exigencias especiales de gestion",
      "Residuos inertes de construccion",
      "Residuos sin ninguna precaucion",
    ],
    correctaIndex: 1,
    explicacion:
      "El grupo III agrupa residuos sanitarios peligrosos (IIIa cortopunzantes o infecciosos y IIIb citostaticos) con gestion especial.",
    fuente: "Decreto 73/2012 de Andalucia",
    dificultad: "dificil",
    temaSlug: "politica-ambiental",
  },
];
