/**
 * Correccion estilo SAS: las respuestas erroneas penalizan.
 * El SAS suele restar 1/(opciones-1) por fallo; con 4 opciones => 1/3.
 * Las preguntas en blanco no puntuan ni penalizan.
 */
export interface CorreccionInput {
  aciertos: number;
  fallos: number;
  enBlanco: number;
  total: number;
  conPenalizacion?: boolean;
  penalizacionDivisor?: number; // por defecto 3 (4 opciones)
}

export interface CorreccionResultado {
  aciertos: number;
  fallos: number;
  enBlanco: number;
  total: number;
  puntosNetos: number; // aciertos - fallos/divisor
  nota: number; // sobre 10, redondeada a 2 decimales
  porcentaje: number; // % de aciertos sobre el total
}

export function corregir(input: CorreccionInput): CorreccionResultado {
  const { aciertos, fallos, enBlanco, total } = input;
  const conPenalizacion = input.conPenalizacion ?? true;
  const divisor = input.penalizacionDivisor ?? 3;

  const puntosNetos = conPenalizacion ? aciertos - fallos / divisor : aciertos;
  const notaBruta = total > 0 ? (puntosNetos / total) * 10 : 0;
  const nota = Math.max(0, Math.round(notaBruta * 100) / 100);
  const porcentaje = total > 0 ? Math.round((aciertos / total) * 100) : 0;

  return { aciertos, fallos, enBlanco, total, puntosNetos, nota, porcentaje };
}
