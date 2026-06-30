import { describe, expect, it } from "vitest";
import { calcularRepaso, proximaRevision } from "./spaced-repetition";

describe("calcularRepaso (SM-2 simplificado)", () => {
  it("primer acierto: intervalo 1 dia y facilidad sube", () => {
    const r = calcularRepaso(null, true);
    expect(r.intervaloDias).toBe(1);
    expect(r.facilidad).toBeCloseTo(2.6, 5);
  });

  it("primer fallo: intervalo 1 dia y facilidad baja", () => {
    const r = calcularRepaso(null, false);
    expect(r.intervaloDias).toBe(1);
    expect(r.facilidad).toBeCloseTo(2.3, 5);
  });

  it("aciertos sucesivos alargan el intervalo", () => {
    const r1 = calcularRepaso(null, true); // 1 dia, ef 2.6
    const r2 = calcularRepaso(r1, true); // round(1 * 2.7) = 3
    expect(r2.intervaloDias).toBe(3);
    const r3 = calcularRepaso(r2, true); // round(3 * 2.8) = 8
    expect(r3.intervaloDias).toBe(8);
  });

  it("un fallo reinicia el intervalo a 1", () => {
    const bueno = { facilidad: 2.8, intervaloDias: 20 };
    const r = calcularRepaso(bueno, false);
    expect(r.intervaloDias).toBe(1);
  });

  it("la facilidad no baja de 1.3", () => {
    let estado = { facilidad: 1.3, intervaloDias: 1 };
    for (let i = 0; i < 5; i++) estado = calcularRepaso(estado, false);
    expect(estado.facilidad).toBe(1.3);
  });
});

describe("proximaRevision", () => {
  it("suma los dias indicados", () => {
    const base = new Date("2027-01-01T00:00:00.000Z");
    const next = proximaRevision(base, 3);
    expect(next.toISOString()).toBe("2027-01-04T00:00:00.000Z");
  });
});
