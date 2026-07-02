import { ImageResponse } from "next/og";

// Imagen para compartir la nota (params, sin datos privados).
// /api/og/nota?nota=8.4&cat=Celador&aciertos=85&total=100
export const runtime = "edge";

const TEAL = "#0b6b5e";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const nota = searchParams.get("nota") ?? "0";
  const cat = searchParams.get("cat") ?? "SAS";
  const aciertos = searchParams.get("aciertos") ?? "0";
  const total = searchParams.get("total") ?? "0";
  const aprobado = Number(nota) >= 5;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: TEAL,
        color: "#fff",
        padding: 64,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34, fontWeight: 700 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            background: "#fff",
            color: TEAL,
            borderRadius: 12,
            fontSize: 40,
          }}
        >
          +
        </div>
        TestSAS
      </div>

      <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
        <div style={{ fontSize: 30, opacity: 0.85 }}>Simulacro · {cat}</div>
        <div style={{ fontSize: 130, fontWeight: 800, lineHeight: 1.1 }}>{nota}</div>
        <div style={{ fontSize: 34, opacity: 0.9 }}>
          {aciertos}/{total} aciertos · {aprobado ? "Aprobado" : "A seguir"}
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
