import { mkdirSync } from "node:fs";
import sharp from "sharp";

// Genera los PNG fuente (cruz sanitaria) que consume @capacitor/assets para
// producir los iconos y splash de Android en todas las densidades.
const TEAL = "#0b6b5e";
const TEAL_DARK = "#063f37";
const WHITE = "#ffffff";

function cruz(size: number, frac: number, bg: string | null): string {
  const L = Math.round(size * frac);
  const w = Math.round(L * 0.3);
  const r = Math.round(w * 0.2);
  const c = size / 2;
  const half = L / 2;
  const bgRect = bg ? `<rect width="${size}" height="${size}" fill="${bg}"/>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
    ${bgRect}
    <rect x="${c - w / 2}" y="${c - half}" width="${w}" height="${L}" rx="${r}" fill="${WHITE}"/>
    <rect x="${c - half}" y="${c - w / 2}" width="${L}" height="${w}" rx="${r}" fill="${WHITE}"/>
  </svg>`;
}

function splash(size: number, bg: string): string {
  const L = Math.round(size * 0.16);
  const w = Math.round(L * 0.3);
  const r = Math.round(w * 0.2);
  const c = size / 2;
  const cy = size * 0.42;
  const half = L / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
    <rect width="${size}" height="${size}" fill="${bg}"/>
    <rect x="${c - w / 2}" y="${cy - half}" width="${w}" height="${L}" rx="${r}" fill="${WHITE}"/>
    <rect x="${c - half}" y="${cy - w / 2}" width="${L}" height="${w}" rx="${r}" fill="${WHITE}"/>
    <text x="${c}" y="${size * 0.6}" text-anchor="middle" fill="${WHITE}"
      font-family="Georgia, serif" font-size="${Math.round(size * 0.055)}" font-weight="600"
      letter-spacing="2">TestSAS</text>
  </svg>`;
}

async function png(svg: string, file: string) {
  await sharp(Buffer.from(svg)).png().toFile(`assets/${file}`);
  console.log(`  assets/${file}`);
}

async function main() {
  mkdirSync("assets", { recursive: true });
  // Icono completo (fondo teal + cruz)
  await png(cruz(1024, 0.5, TEAL), "icon-only.png");
  // Adaptativo: primer plano (cruz, zona segura) + fondo (teal solido)
  await png(cruz(1024, 0.42, null), "icon-foreground.png");
  await png(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"><rect width="1024" height="1024" fill="${TEAL}"/></svg>`,
    "icon-background.png",
  );
  // Splash claro y oscuro
  await png(splash(2732, TEAL), "splash.png");
  await png(splash(2732, TEAL_DARK), "splash-dark.png");
  console.log("Iconos fuente generados en assets/.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
