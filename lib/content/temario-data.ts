// Fragmentos de temario que sirven de FUENTE para el generador de preguntas.
// Cada fragmento se ancla a un tema (por slug) y lleva su cita legal exacta.
// El temario COMUN se carga en las 4 categorias (ver scripts/seed-temario.ts).
//
// Contenido: extractos fieles de los articulos mas preguntados de cada norma.
// Para ampliar, usa el ingestor con el texto completo del BOE/BOJA.

export interface SeedTemario {
  temaSlug: string;
  titulo: string;
  fuente: string;
  contenido: string;
}

export const SEED_TEMARIO: SeedTemario[] = [
  // ===================== Constitucion Espanola 1978 =====================
  {
    temaSlug: "constitucion",
    titulo: "Titulo Preliminar: valores y principios",
    fuente: "Constitucion Espanola de 1978, arts. 1, 2, 3 y 9",
    contenido: `Articulo 1.1: Espana se constituye en un Estado social y democratico de Derecho, que propugna como valores superiores de su ordenamiento juridico la libertad, la justicia, la igualdad y el pluralismo politico.
Articulo 1.2: La soberania nacional reside en el pueblo espanol, del que emanan los poderes del Estado.
Articulo 1.3: La forma politica del Estado espanol es la Monarquia parlamentaria.
Articulo 2: La Constitucion se fundamenta en la indisoluble unidad de la Nacion espanola, patria comun e indivisible de todos los espanoles, y reconoce y garantiza el derecho a la autonomia de las nacionalidades y regiones que la integran y la solidaridad entre todas ellas.
Articulo 3.1: El castellano es la lengua espanola oficial del Estado. Todos los espanoles tienen el deber de conocerla y el derecho a usarla.
Articulo 9.3: La Constitucion garantiza el principio de legalidad, la jerarquia normativa, la publicidad de las normas, la irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales, la seguridad juridica, la responsabilidad y la interdiccion de la arbitrariedad de los poderes publicos.`,
  },
  {
    temaSlug: "constitucion",
    titulo: "Derechos fundamentales y su garantia",
    fuente: "Constitucion Espanola de 1978, arts. 14 a 29, 43 y 53",
    contenido: `Articulo 14: Los espanoles son iguales ante la ley, sin que pueda prevalecer discriminacion alguna por razon de nacimiento, raza, sexo, religion, opinion o cualquier otra condicion o circunstancia personal o social.
Articulo 15: Todos tienen derecho a la vida y a la integridad fisica y moral, sin que, en ningun caso, puedan ser sometidos a tortura ni a penas o tratos inhumanos o degradantes. Queda abolida la pena de muerte, salvo lo que puedan disponer las leyes penales militares para tiempos de guerra.
Articulo 16: Se garantiza la libertad ideologica, religiosa y de culto de los individuos y las comunidades sin mas limitacion, en sus manifestaciones, que la necesaria para el mantenimiento del orden publico protegido por la ley.
Articulo 18.1: Se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen.
Articulo 43: Se reconoce el derecho a la proteccion de la salud. Compete a los poderes publicos organizar y tutelar la salud publica a traves de medidas preventivas y de las prestaciones y servicios necesarios.
Articulo 53.2: Cualquier ciudadano podra recabar la tutela de las libertades y derechos reconocidos en el articulo 14 y la Seccion primera del Capitulo segundo ante los Tribunales ordinarios y, en su caso, mediante el recurso de amparo ante el Tribunal Constitucional.`,
  },
  {
    temaSlug: "constitucion",
    titulo: "Organizacion del Estado: Corona, Cortes, Gobierno",
    fuente: "Constitucion Espanola de 1978, arts. 56, 66, 97, 117 y 137",
    contenido: `Articulo 56.1: El Rey es el Jefe del Estado, simbolo de su unidad y permanencia, arbitra y modera el funcionamiento regular de las instituciones, asume la mas alta representacion del Estado espanol en las relaciones internacionales.
Articulo 66.1: Las Cortes Generales representan al pueblo espanol y estan formadas por el Congreso de los Diputados y el Senado.
Articulo 66.2: Las Cortes Generales ejercen la potestad legislativa del Estado, aprueban sus Presupuestos, controlan la accion del Gobierno y tienen las demas competencias que les atribuya la Constitucion.
Articulo 97: El Gobierno dirige la politica interior y exterior, la Administracion civil y militar y la defensa del Estado. Ejerce la funcion ejecutiva y la potestad reglamentaria de acuerdo con la Constitucion y las leyes.
Articulo 117.1: La justicia emana del pueblo y se administra en nombre del Rey por Jueces y Magistrados integrantes del poder judicial, independientes, inamovibles, responsables y sometidos unicamente al imperio de la ley.
Articulo 137: El Estado se organiza territorialmente en municipios, en provincias y en las Comunidades Autonomas que se constituyan. Todas estas entidades gozan de autonomia para la gestion de sus respectivos intereses.`,
  },

  // ===================== Ley 55/2003 Estatuto Marco =====================
  {
    temaSlug: "estatuto-marco",
    titulo: "Clasificacion del personal estatutario",
    fuente: "Ley 55/2003, de 16 de diciembre, Estatuto Marco, arts. 5 a 9",
    contenido: `Articulo 5: El personal estatutario se clasifica atendiendo a la funcion desarrollada, al nivel del titulo exigido para el ingreso y al tipo de su nombramiento.
Articulo 6: Atendiendo a la funcion, el personal estatutario se clasifica en personal estatutario sanitario y personal estatutario de gestion y servicios. El personal sanitario, segun el nivel academico, se divide en personal de formacion universitaria (Licenciados y Diplomados sanitarios) y personal de formacion profesional (Tecnicos Superiores y Tecnicos).
Articulo 7: El personal de gestion y servicios es el que desarrolla funciones de gestion, administrativas, de mantenimiento y de servicios; se clasifica en personal de formacion universitaria, de formacion profesional y otro personal.
Articulo 8: Personal estatutario fijo es el que, superado el proceso selectivo, obtiene nombramiento para una plaza con caracter permanente.
Articulo 9: Por razones de necesidad, urgencia o para programas de caracter temporal, coyuntural o extraordinario, se podra nombrar personal estatutario temporal, que podra ser interino, eventual o de sustitucion.`,
  },
  {
    temaSlug: "estatuto-marco",
    titulo: "Derechos y deberes del personal estatutario",
    fuente: "Ley 55/2003, de 16 de diciembre, Estatuto Marco, arts. 17 a 19",
    contenido: `Articulo 17: El personal estatutario tiene, entre otros, derecho a la estabilidad en el empleo y al ejercicio o desempeno efectivo de la profesion; a la percepcion puntual de las retribuciones; a la jornada y descansos establecidos; a la formacion continuada; a la carrera profesional; y a la no discriminacion.
Articulo 18: Son derechos colectivos, en los terminos legalmente establecidos, la libertad sindical, la negociacion colectiva, el ejercicio de la actividad sindical, la huelga garantizando los servicios esenciales, y la reunion.
Articulo 19: El personal estatutario viene obligado a respetar la Constitucion y el resto del ordenamiento juridico; a ejercer la profesion con lealtad, eficacia y observancia de los principios tecnicos, cientificos, eticos y deontologicos; a mantener la debida reserva y confidencialidad de la informacion; y a cumplir el regimen de horario y jornada.`,
  },

  // ===================== Ley 41/2002 Autonomia del paciente =====================
  {
    temaSlug: "autonomia-paciente",
    titulo: "Principios basicos y derecho a la informacion",
    fuente: "Ley 41/2002, de 14 de noviembre, arts. 2, 4 y 5",
    contenido: `Articulo 2: Son principios basicos: la dignidad de la persona humana, el respeto a la autonomia de su voluntad y a su intimidad. Toda actuacion en el ambito de la sanidad requiere, con caracter general, el previo consentimiento de los pacientes o usuarios, que debe obtenerse despues de que reciban una informacion adecuada. El paciente tiene derecho a decidir libremente entre las opciones clinicas disponibles y a negarse al tratamiento, salvo en los casos determinados en la Ley.
Articulo 4: Los pacientes tienen derecho a conocer, con motivo de cualquier actuacion en el ambito de su salud, toda la informacion disponible sobre la misma. La informacion clinica forma parte de todas las actuaciones asistenciales, sera verdadera, se comunicara de forma comprensible y adecuada a sus necesidades y le ayudara a tomar decisiones. El medico responsable garantiza el cumplimiento del derecho a la informacion.
Articulo 5: El titular del derecho a la informacion es el paciente. Tambien seran informadas las personas vinculadas a el, por razones familiares o de hecho, en la medida que el paciente lo permita de manera expresa o tacita.`,
  },
  {
    temaSlug: "autonomia-paciente",
    titulo: "Consentimiento informado e historia clinica",
    fuente: "Ley 41/2002, de 14 de noviembre, arts. 8, 9, 15 y 18",
    contenido: `Articulo 8.2: El consentimiento sera verbal por regla general. Sin embargo, se prestara por escrito en los casos siguientes: intervencion quirurgica, procedimientos diagnosticos y terapeuticos invasores y, en general, aplicacion de procedimientos que suponen riesgos o inconvenientes de notoria y previsible repercusion negativa sobre la salud del paciente.
Articulo 9.2: Los facultativos podran llevar a cabo las intervenciones clinicas indispensables sin necesidad del consentimiento cuando exista riesgo para la salud publica o cuando exista riesgo inmediato grave para la integridad fisica o psiquica del enfermo y no sea posible conseguir su autorizacion.
Articulo 9.3: Se otorgara el consentimiento por representacion cuando el paciente no sea capaz de tomar decisiones o cuando sea menor de edad no capaz intelectual ni emocionalmente de comprender el alcance de la intervencion.
Articulo 15: La historia clinica incorporara la informacion que se considere trascendental para el conocimiento veraz y actualizado del estado de salud del paciente. Tiene como fin principal facilitar la asistencia sanitaria.
Articulo 18: El paciente tiene derecho de acceso a la documentacion de la historia clinica y a obtener copia de los datos que figuran en ella.`,
  },

  // ===================== Ley 31/1995 PRL =====================
  {
    temaSlug: "prl",
    titulo: "Derecho a la proteccion y definiciones",
    fuente: "Ley 31/1995, de 8 de noviembre, de Prevencion de Riesgos Laborales, arts. 4 y 14",
    contenido: `Articulo 4: Se entiende por riesgo laboral la posibilidad de que un trabajador sufra un determinado dano derivado del trabajo. Se consideran danos derivados del trabajo las enfermedades, patologias o lesiones sufridas con motivo u ocasion del trabajo. Es riesgo laboral grave e inminente aquel que resulte probable racionalmente que se materialice en un futuro inmediato y pueda suponer un dano grave para la salud.
Articulo 14: Los trabajadores tienen derecho a una proteccion eficaz en materia de seguridad y salud en el trabajo. Este derecho supone la existencia de un correlativo deber del empresario de proteccion de los trabajadores frente a los riesgos laborales. El coste de las medidas de seguridad y salud no debera recaer en modo alguno sobre los trabajadores.`,
  },
  {
    temaSlug: "prl",
    titulo: "Accion preventiva, vigilancia de la salud y obligaciones",
    fuente: "Ley 31/1995, de 8 de noviembre, arts. 15, 16, 22 y 29",
    contenido: `Articulo 15: El empresario aplicara las medidas preventivas con arreglo a los siguientes principios generales: evitar los riesgos; evaluar los que no se puedan evitar; combatirlos en su origen; adaptar el trabajo a la persona; tener en cuenta la evolucion de la tecnica; sustituir lo peligroso por lo que entrane poco o ningun peligro; planificar la prevencion; anteponer la proteccion colectiva a la individual; y dar las debidas instrucciones a los trabajadores.
Articulo 16: Los instrumentos esenciales para la gestion y aplicacion del plan de prevencion son la evaluacion de riesgos y la planificacion de la actividad preventiva. El empresario debera realizar una evaluacion inicial de los riesgos para la seguridad y salud de los trabajadores.
Articulo 22: El empresario garantizara la vigilancia periodica del estado de salud de los trabajadores en funcion de los riesgos del trabajo. Esta vigilancia solo podra llevarse a cabo cuando el trabajador preste su consentimiento, salvo excepciones legalmente previstas.
Articulo 29: Corresponde a cada trabajador velar por su propia seguridad y salud y por la de aquellas personas a las que pueda afectar su actividad, conforme a su formacion y a las instrucciones del empresario.`,
  },

  // ===================== LOPDGDD 3/2018 y transparencia =====================
  {
    temaSlug: "proteccion-datos",
    titulo: "Principios de proteccion de datos",
    fuente: "Ley Organica 3/2018 (LOPDGDD) y Reglamento UE 2016/679 (RGPD), arts. 4 a 6",
    contenido: `El RGPD establece que los datos personales seran tratados con licitud, lealtad y transparencia; recogidos con fines determinados, explicitos y legitimos (limitacion de la finalidad); adecuados, pertinentes y limitados a lo necesario (minimizacion); exactos y actualizados; conservados durante el tiempo necesario (limitacion del plazo); y tratados de forma que se garantice su seguridad (integridad y confidencialidad).
Articulo 4 LOPDGDD: Los datos seran exactos y, si fuera necesario, actualizados. Se presumira el cumplimiento del deber de exactitud cuando los datos hubiesen sido obtenidos directamente del afectado.
Articulo 5 LOPDGDD: Los responsables y encargados del tratamiento y todas las personas que intervengan en cualquier fase de este estan sujetas al deber de confidencialidad, que se mantiene aun finalizada la relacion con el afectado.
Articulo 6 LOPDGDD: El tratamiento basado en el consentimiento exige una manifestacion de voluntad libre, especifica, informada e inequivoca del afectado.`,
  },
  {
    temaSlug: "proteccion-datos",
    titulo: "Transparencia publica de Andalucia",
    fuente: "Ley 1/2014, de 24 de junio, de Transparencia Publica de Andalucia, arts. 9 y 24",
    contenido: `La Ley 1/2014 regula la transparencia en su doble vertiente de publicidad activa y derecho de acceso a la informacion publica.
Publicidad activa: las entidades obligadas publicaran, de forma periodica, veraz, objetiva y actualizada, la informacion cuyo conocimiento sea relevante para garantizar la transparencia de su actividad relacionada con el funcionamiento y control de la actuacion publica.
Derecho de acceso: todas las personas tienen derecho a acceder a la informacion publica sin mas limitaciones que las contempladas en la Ley. El ejercicio de este derecho no esta sometido, con caracter general, a motivacion de la solicitud. La denegacion debera ser motivada cuando concurra alguno de los limites legalmente establecidos.`,
  },

  // ===================== Ley 39/2015 (Aux. Administrativo) =====================
  {
    temaSlug: "procedimiento-administrativo",
    titulo: "Derechos de las personas y relacion electronica",
    fuente: "Ley 39/2015, de 1 de octubre, arts. 13 y 14",
    contenido: `Articulo 13: Quienes se relacionen con las Administraciones Publicas tienen derecho a comunicarse a traves de un Punto de Acceso General electronico, a ser asistidos en el uso de medios electronicos, a la igualdad y no discriminacion, y a la proteccion de datos de caracter personal.
Articulo 14.1: Las personas fisicas podran elegir en todo momento si se comunican con las Administraciones Publicas a traves de medios electronicos o no, salvo que esten obligadas a relacionarse por medios electronicos.
Articulo 14.2: En todo caso, estaran obligados a relacionarse electronicamente: las personas juridicas; las entidades sin personalidad juridica; quienes ejerzan una actividad profesional para la que se requiera colegiacion obligatoria, en los tramites con las Administraciones en ejercicio de dicha actividad; y quienes representen a un interesado obligado.`,
  },
  {
    temaSlug: "procedimiento-administrativo",
    titulo: "Plazos, registro y resolucion",
    fuente: "Ley 39/2015, de 1 de octubre, arts. 21, 30, 31 y 112",
    contenido: `Articulo 21.3: Cuando las normas reguladoras de los procedimientos no fijen el plazo maximo para resolver y notificar, este sera de tres meses.
Articulo 30: Salvo que por Ley se disponga otra cosa, cuando los plazos se senalen por dias se entiende que son habiles, excluyendose los sabados, domingos y festivos. Si el plazo se fija en meses o anos, se computan a partir del dia siguiente a la notificacion.
Articulo 31.2: El registro electronico permitira la presentacion de documentos todos los dias del ano durante las veinticuatro horas.
Articulo 112: Contra las resoluciones y los actos de tramite cualificados podran interponerse los recursos de alzada y potestativo de reposicion. El recurso de alzada se interpone ante el organo superior jerarquico; el de reposicion, con caracter potestativo, ante el mismo organo que dicto el acto.`,
  },

  // ===================== Especifico (demo) =====================
  {
    temaSlug: "funciones-celador",
    titulo: "Funciones del celador",
    fuente:
      "Estatuto de Personal No Sanitario de las Instituciones Sanitarias de la Seguridad Social, art. 14",
    contenido:
      "El celador realizara, entre otras, las siguientes funciones: tramitar o conducir sin tardanza las comunicaciones verbales, documentos, correspondencia u objetos que les sean confiados; trasladar y trasportar a los pacientes dentro del centro, tanto los servicios clinicos como complementarios; vigilar los accesos y la permanencia de los familiares y visitantes en las habitaciones; ayudar al personal sanitario en la movilizacion y traslado de los enfermos que precisen un trato especial. El celador NO podra en ningun caso administrar medicamentos ni realizar curas a los pacientes, funciones reservadas al personal sanitario.",
  },
  {
    temaSlug: "tcae-rcp",
    titulo: "Valores normales de las constantes vitales",
    fuente: "Manual de tecnicas basicas de enfermeria, constantes vitales",
    contenido:
      "Las constantes vitales son indicadores del estado fisiologico del paciente. Valores de referencia en el adulto sano en reposo: frecuencia cardiaca entre 60 y 100 latidos por minuto (por debajo se denomina bradicardia y por encima taquicardia); frecuencia respiratoria entre 12 y 20 respiraciones por minuto; temperatura corporal normal entre 36 y 37 grados centigrados; tension arterial considerada normal en torno a 120/80 mmHg. La saturacion de oxigeno normal se situa entre el 95 y el 100 por ciento.",
  },
];
