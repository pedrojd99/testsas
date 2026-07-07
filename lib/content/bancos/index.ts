import type { SeedPregunta } from "../tipos";
import { BANCO_AUX_ADMINISTRATIVO } from "./aux-administrativo";
import { BANCO_CELADOR } from "./celador";
import { BANCO_COMUN } from "./comun";
import { BANCO_ENFERMERIA_A } from "./enfermeria-a";
import { BANCO_ENFERMERIA_B } from "./enfermeria-b";
import { BANCO_ENFERMERIA_C } from "./enfermeria-c";
import { BANCO_ENFERMERIA_D } from "./enfermeria-d";
import { BANCO_TCAE_A } from "./tcae-a";
import { BANCO_TCAE_B } from "./tcae-b";

// Banco completo de preguntas por tema (comun + 4 especificos).
export const SEED_BANCO: SeedPregunta[] = [
  ...BANCO_COMUN,
  ...BANCO_CELADOR,
  ...BANCO_TCAE_A,
  ...BANCO_TCAE_B,
  ...BANCO_AUX_ADMINISTRATIVO,
  ...BANCO_ENFERMERIA_A,
  ...BANCO_ENFERMERIA_B,
  ...BANCO_ENFERMERIA_C,
  ...BANCO_ENFERMERIA_D,
];
