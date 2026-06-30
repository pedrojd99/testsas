/**
 * Repaso espaciado estilo SM-2 simplificado (calidad binaria: acierto/fallo).
 * Funcion pura para poder testearla sin tocar la base de datos.
 */
export interface EstadoRepaso {
  facilidad: number; // factor de facilidad (>= 1.3)
  intervaloDias: number; // dias hasta el proximo repaso
}

const FACILIDAD_INICIAL = 2.5;
const FACILIDAD_MIN = 1.3;

export function calcularRepaso(prev: EstadoRepaso | null, esCorrecta: boolean): EstadoRepaso {
  const facilidadPrev = prev?.facilidad ?? FACILIDAD_INICIAL;
  const facilidad = Math.max(
    FACILIDAD_MIN,
    Math.round((facilidadPrev + (esCorrecta ? 0.1 : -0.2)) * 1000) / 1000,
  );

  const intervaloPrev = prev?.intervaloDias ?? 0;
  // Al fallar se reinicia a 1 dia. Al acertar: la primera vez 1 dia, y a partir
  // de ahi crece multiplicando por la facilidad (1 -> 3 -> 8 -> ...).
  let intervaloDias: number;
  if (!esCorrecta) intervaloDias = 1;
  else if (intervaloPrev === 0) intervaloDias = 1;
  else intervaloDias = Math.max(1, Math.round(intervaloPrev * facilidad));

  return { facilidad, intervaloDias };
}

// Fecha de la proxima revision a partir de un intervalo en dias.
export function proximaRevision(desde: Date, intervaloDias: number): Date {
  return new Date(desde.getTime() + intervaloDias * 24 * 60 * 60 * 1000);
}
