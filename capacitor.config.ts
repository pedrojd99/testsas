import type { CapacitorConfig } from "@capacitor/cli";

// TestSAS es una app SSR (server actions, BD, IA): no se puede exportar estatica.
// El APK es un envoltorio nativo que carga la app ya desplegada (Vercel/Neon).
// Pon tu URL de produccion en CAP_SERVER_URL antes de `npx cap sync`.
//   p.ej. CAP_SERVER_URL=https://testsas.vercel.app
const serverUrl = process.env.CAP_SERVER_URL;

const config: CapacitorConfig = {
  appId: "es.testsas.app",
  appName: "TestSAS",
  webDir: "capacitor-shell",
  backgroundColor: "#0b6b5e",
  android: {
    backgroundColor: "#0b6b5e",
  },
  server: serverUrl
    ? { url: serverUrl, cleartext: false, androidScheme: "https" }
    : { androidScheme: "https" },
};

export default config;
