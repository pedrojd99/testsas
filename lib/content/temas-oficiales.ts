// Estructura oficial de temas del SAS (Resolucion 30/07/2024, BOJA nº 151).
// El temario COMUN (10 temas) es compartido por casi todas las categorias:
// se genera una vez y se reutiliza. Cada categoria anade su especifico.
// Ver docs/temarios-sas.md para fuentes.

export interface TemaOficial {
  slug: string;
  nombre: string;
  bloque: "comun" | "especifica";
}

const comun = (slug: string, nombre: string): TemaOficial => ({ slug, nombre, bloque: "comun" });
const esp = (slug: string, nombre: string): TemaOficial => ({ slug, nombre, bloque: "especifica" });

// --- Temario comun (temas 1-10) ------------------------------------------
export const TEMAS_COMUNES: TemaOficial[] = [
  comun("constitucion", "La Constitucion Espanola de 1978"),
  comun("estatuto-andalucia", "Estatuto de Autonomia para Andalucia (LO 2/2007)"),
  comun(
    "organizacion-sanitaria-1",
    "Organizacion sanitaria (I): Ley General de Sanidad y Ley de Salud de Andalucia",
  ),
  comun("organizacion-sanitaria-2", "Organizacion sanitaria (II): estructura del SAS"),
  comun("proteccion-datos", "Proteccion de Datos (LOPDGDD 3/2018) y Transparencia (Ley 1/2014)"),
  comun("prl", "Prevencion de Riesgos Laborales (Ley 31/1995)"),
  comun("igualdad-genero", "Igualdad de genero y violencia de genero en Andalucia"),
  comun("estatuto-marco", "Estatuto Marco del personal estatutario (Ley 55/2003)"),
  comun("autonomia-paciente", "Autonomia del paciente (Ley 41/2002)"),
  comun("tic-sas", "Tecnologias de la informacion y comunicacion en el SAS"),
];

// --- Especifico Celador (temas 11-19) ------------------------------------
export const ESPECIFICO_CELADOR: TemaOficial[] = [
  esp("funciones-celador", "Vision general del Celador como profesional sanitario"),
  esp("comunicacion-celador", "Habilidades sociales y comunicacion"),
  esp("celador-puesto-1", "El Celador en su puesto (I): hospitalizacion, quirofano, criticos"),
  esp(
    "celador-puesto-2",
    "El Celador en su puesto (II): consultas, almacenes, farmacia, salud mental",
  ),
  esp("movilizacion-pacientes", "Movilizacion y traslado de pacientes. Mortuorio y autopsias"),
  esp("manual-estilo", "Manual de Estilo del SAS"),
  esp("prl-celador", "Prevencion de riesgos laborales del Celador. Agresiones"),
  esp("autoproteccion", "Plan de autoproteccion, emergencias y evacuacion"),
  esp("politica-ambiental", "Politica Ambiental del SAS: gestion de residuos"),
];

// --- Especifico TCAE (temas 11-29) ---------------------------------------
export const ESPECIFICO_TCAE: TemaOficial[] = [
  esp("tcae-informacion-clinica", "Sistemas de informacion clinica y seguridad del paciente"),
  esp("tcae-trabajo-equipo", "Trabajo en equipo, comunicacion y cuidados basicos"),
  esp("tcae-prl", "PRL especificos del TCAE: cargas y riesgo biologico"),
  esp("tcae-bioetica", "Bioetica y secreto profesional"),
  esp("tcae-infecciones", "Infecciones nosocomiales, barreras higienicas, EPIs y aislamiento"),
  esp("tcae-residuos", "Residuos sanitarios y citostaticos"),
  esp(
    "tcae-higiene-hospitalaria",
    "Higiene hospitalaria: antisepticos, desinfeccion, esterilizacion",
  ),
  esp("tcae-muestras", "Muestras biologicas y fase pre-analitica"),
  esp("tcae-higiene-paciente", "Higiene del paciente y paciente encamado"),
  esp("tcae-eliminacion", "Necesidades de eliminacion: sondajes, ostomias, enemas"),
  esp("tcae-alimentacion", "Alimentacion: dietas, nutricion enteral y parenteral"),
  esp("tcae-musculo-esqueletico", "Movilizacion, mecanica corporal y prevencion de caidas"),
  esp("tcae-rcp", "RCP basica, SVB, DEA y paciente critico"),
  esp("tcae-medicamentos", "Medicamentos, oxigenoterapia y vacunas"),
  esp("tcae-exploracion", "Preparacion del paciente y periodo perioperatorio"),
  esp("tcae-salud-mental", "Salud Mental en el SAS (Decreto 77/2008)"),
  esp("tcae-envejecimiento-ulceras", "Envejecimiento y ulceras por presion"),
  esp("tcae-maternoinfantil", "Embarazo, parto, puerperio, recien nacido y lactancia"),
  esp("tcae-paliativos", "Paciente terminal, cuidados paliativos y post-mortem"),
];

// --- Especifico Auxiliar Administrativo ----------------------------------
export const ESPECIFICO_AUX_ADMIN: TemaOficial[] = [
  esp("aux-seleccion-personal", "Seleccion de personal temporal en el SAS"),
  esp("aux-prl", "PRL especificos del Auxiliar Administrativo"),
  esp("aux-regimen-juridico", "Ley 40/2015 de Regimen Juridico del Sector Publico"),
  esp("aux-acto-administrativo", "El acto administrativo y los recursos administrativos"),
  esp("procedimiento-administrativo", "El procedimiento administrativo comun (Ley 39/2015)"),
  esp("aux-documentos-archivo", "Creacion y archivo de documentos administrativos"),
  esp("aux-atencion-ciudadania", "Atencion a la ciudadania y Carta de Derechos y Deberes"),
  esp("aux-seguridad-social", "Sistema Espanol de Seguridad Social"),
  esp("aux-retribuciones", "Sistema retributivo del personal del SAS"),
  esp("aux-presupuesto", "Presupuesto de la Comunidad Autonoma de Andalucia"),
  esp("aux-contratacion", "Contratacion administrativa en el Sector Publico"),
  esp("aux-sistemas-informacion", "Sistemas de informacion y registro sanitario del SAS"),
  esp("aux-administracion-electronica", "Administracion Electronica"),
  esp("aux-ofimatica", "Sistemas informaticos: hardware, software y ofimatica"),
];

// --- Especifico Enfermeria (temas 10-78) ---------------------------------
const ENFERMERIA_NOMBRES: string[] = [
  "Organizacion sanitaria (III)",
  "Calidad en el sistema sanitario",
  "Modelo de Desarrollo Profesional de Andalucia",
  "Ley 44/2003 de Ordenacion de las Profesiones Sanitarias",
  "Derechos y garantias",
  "Responsabilidad patrimonial de las Administraciones Publicas",
  "Demografia sanitaria",
  "Fundamentos de la investigacion cuantitativa",
  "Epidemiologia",
  "Enfermeria Basada en la Evidencia",
  "Fundamentos de la investigacion cualitativa",
  "Sistemas de informacion en atencion primaria y hospitalaria",
  "Los costes sanitarios",
  "Planificacion sanitaria",
  "Gestion por Procesos Asistenciales Integrados",
  "Plan para mayores de 65 anos",
  "Derechos de la madre durante el proceso de nacimiento",
  "Principios fundamentales de la Bioetica",
  "Gestion de cuidados",
  "Gestion de casos",
  "Seguimiento de pacientes por via telefonica",
  "Modelos y Teorias de Enfermeria",
  "Valoracion Enfermera",
  "Educacion para la salud individual, grupal y comunitaria",
  "Tecnicas y habilidades de comunicacion",
  "Epidemiologia: cadena epidemiologica",
  "Clasificacion general de los medicamentos",
  "Actuacion de las enfermeras en la prestacion farmaceutica",
  "Administracion de los medicamentos",
  "Promocion de la actividad fisica y alimentacion equilibrada",
  "Nutricion",
  "Proceso de ansiedad-depresion",
  "Intervencion familiar en Salud Mental",
  "Prevencion del consumo de tabaco, alcohol y otras sustancias",
  "Conceptos de urgencia y emergencia",
  "Intervenciones en situaciones criticas",
  "Cuidados al paciente quirurgico",
  "Cuidados postquirurgicos",
  "Manejo de heridas",
  "Inmunizaciones",
  "Desarrollo de la conducta humana",
  "Cuidados al recien nacido sano",
  "Cuidados al recien nacido enfermo",
  "Cuidados en la infancia",
  "Cuidados en la adolescencia",
  "Perspectiva de genero en las formas de enfermar y morir",
  "Cuidados a la mujer gestante",
  "Cuidados a mujeres en el climaterio",
  "La sexualidad como interaccion biopsicosocial",
  "Reproduccion. Planificacion familiar",
  "Cuidados a personas con enfermedades infecciosas",
  "Cuidados a personas con incontinencia urinaria",
  "Autonomia, fragilidad, vulnerabilidad, dependencia y complejidad",
  "Atencion domiciliaria",
  "Atencion a la familia",
  "Atencion a la comunidad",
  "Plan de atencion integrada a pacientes cronicos",
  "Plan integral de atencion a la accidentabilidad",
  "Proceso asistencial de diabetes",
  "Plan Andaluz de atencion a las personas con dolor",
  "Prevencion de factores de riesgo de caidas",
  "Atencion enfermera a personas en situacion de dependencia",
  "Valoracion e intervenciones para promover la autonomia",
  "Cuidados y tecnicas (I)",
  "Cuidados y tecnicas (II)",
  "Calidad asistencial",
  "Seguridad clinica",
  "Observatorio de Seguridad del Paciente",
  "Duelo",
];

// Numerados del 10 al 78 -> slug enf-NN
export const ESPECIFICO_ENFERMERIA: TemaOficial[] = ENFERMERIA_NOMBRES.map((nombre, i) =>
  esp(`enf-${i + 10}`, nombre),
);

export const ESPECIFICOS_POR_CATEGORIA: Record<string, TemaOficial[]> = {
  celador: ESPECIFICO_CELADOR,
  tcae: ESPECIFICO_TCAE,
  "aux-administrativo": ESPECIFICO_AUX_ADMIN,
  enfermeria: ESPECIFICO_ENFERMERIA,
};

export function temasDeCategoria(categoriaSlug: string): TemaOficial[] {
  return [...TEMAS_COMUNES, ...(ESPECIFICOS_POR_CATEGORIA[categoriaSlug] ?? [])];
}
