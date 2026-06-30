import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TestSAS — Oposiciones del SAS",
    short_name: "TestSAS",
    description:
      "Test y simulacros para las oposiciones del Servicio Andaluz de Salud: celador, TCAE, enfermeria y auxiliar administrativo.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f6faf9",
    theme_color: "#0b6b5e",
    lang: "es-ES",
    categories: ["education", "medical"],
    icons: [
      { src: "/icons/192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/512m", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
