import { ImageResponse } from "next/og";

// Genera el icono de la app (cruz sanitaria sobre teal) en PNG, a la medida
// pedida. /icons/192, /icons/512 (any) y /icons/512m (maskable, con margen).
export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ size: "192" }, { size: "512" }, { size: "512m" }];
}

const TEAL = "#0b6b5e";

export async function GET(_req: Request, { params }: { params: Promise<{ size: string }> }) {
  const { size } = await params;
  const maskable = size.endsWith("m");
  const px = Number.parseInt(size, 10) || 512;
  // En maskable dejamos zona segura (la cruz ocupa menos)
  const barL = maskable ? px * 0.42 : px * 0.56;
  const barW = maskable ? px * 0.12 : px * 0.16;
  const radius = px * 0.22;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: TEAL,
        borderRadius: maskable ? 0 : radius,
      }}
    >
      <div style={{ position: "relative", width: barL, height: barL, display: "flex" }}>
        {/* barra vertical */}
        <div
          style={{
            position: "absolute",
            left: (barL - barW) / 2,
            top: 0,
            width: barW,
            height: barL,
            background: "#ffffff",
            borderRadius: barW * 0.25,
          }}
        />
        {/* barra horizontal */}
        <div
          style={{
            position: "absolute",
            top: (barL - barW) / 2,
            left: 0,
            width: barL,
            height: barW,
            background: "#ffffff",
            borderRadius: barW * 0.25,
          }}
        />
      </div>
    </div>,
    { width: px, height: px },
  );
}
