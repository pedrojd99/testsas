import type { SeedApunte } from "../tipos";
import { APUNTES_AUX_ADMINISTRATIVO } from "./aux-administrativo";
import { APUNTES_CELADOR } from "./celador";
import { APUNTES_COMUN } from "./comun";
import { APUNTES_ENFERMERIA_A } from "./enfermeria-a";
import { APUNTES_ENFERMERIA_B } from "./enfermeria-b";
import { APUNTES_ENFERMERIA_C } from "./enfermeria-c";
import { APUNTES_ENFERMERIA_D } from "./enfermeria-d";
import { APUNTES_TCAE_A } from "./tcae-a";
import { APUNTES_TCAE_B } from "./tcae-b";

// Todos los apuntes de estudio, uno por tema (comun + 4 especificos).
export const SEED_APUNTES: SeedApunte[] = [
  ...APUNTES_COMUN,
  ...APUNTES_CELADOR,
  ...APUNTES_TCAE_A,
  ...APUNTES_TCAE_B,
  ...APUNTES_AUX_ADMINISTRATIVO,
  ...APUNTES_ENFERMERIA_A,
  ...APUNTES_ENFERMERIA_B,
  ...APUNTES_ENFERMERIA_C,
  ...APUNTES_ENFERMERIA_D,
];
