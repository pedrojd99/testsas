import { describe, expect, it } from "vitest";
import { corregir } from "./scoring";

describe("corregir (penalizacion estilo SAS)", () => {
  it("examen perfecto = 10", () => {
    const r = corregir({ aciertos: 100, fallos: 0, enBlanco: 0, total: 100 });
    expect(r.nota).toBe(10);
    expect(r.porcentaje).toBe(100);
  });

  it("cada 3 fallos restan 1 acierto (divisor 3)", () => {
    // 60 aciertos - 30 fallos/3 = 60 - 10 = 50 puntos netos sobre 100
    const r = corregir({ aciertos: 60, fallos: 30, enBlanco: 10, total: 100 });
    expect(r.puntosNetos).toBeCloseTo(50, 5);
    expect(r.nota).toBe(5);
    expect(r.porcentaje).toBe(60);
  });

  it("sin penalizacion no resta los fallos", () => {
    const r = corregir({
      aciertos: 60,
      fallos: 40,
      enBlanco: 0,
      total: 100,
      conPenalizacion: false,
    });
    expect(r.puntosNetos).toBe(60);
    expect(r.nota).toBe(6);
  });

  it("la nota nunca baja de 0", () => {
    const r = corregir({ aciertos: 0, fallos: 90, enBlanco: 10, total: 100 });
    expect(r.nota).toBe(0);
  });

  it("divisor de penalizacion configurable", () => {
    // 50 aciertos - 20 fallos/4 = 45 sobre 100 -> 4.5
    const r = corregir({
      aciertos: 50,
      fallos: 20,
      enBlanco: 30,
      total: 100,
      penalizacionDivisor: 4,
    });
    expect(r.puntosNetos).toBeCloseTo(45, 5);
    expect(r.nota).toBe(4.5);
  });

  it("total 0 no rompe", () => {
    const r = corregir({ aciertos: 0, fallos: 0, enBlanco: 0, total: 0 });
    expect(r.nota).toBe(0);
    expect(r.porcentaje).toBe(0);
  });
});
