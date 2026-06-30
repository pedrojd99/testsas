import { describe, expect, it } from "vitest";
import { dedupLote, esDuplicado, similitud } from "./dedup";

describe("similitud lexica", () => {
  it("identicas = 1", () => {
    expect(
      similitud("La capital de Andalucia es Sevilla", "La capital de Andalucia es Sevilla"),
    ).toBe(1);
  });

  it("reformulacion minima = alta similitud", () => {
    const a = "Segun el articulo 14, el plazo para resolver sera de tres meses";
    const b = "El plazo para resolver, segun el articulo 14, sera de tres meses";
    expect(similitud(a, b)).toBeGreaterThan(0.8);
  });

  it("temas distintos = baja similitud", () => {
    const a = "El consentimiento informado sera verbal por regla general";
    const b = "La frecuencia cardiaca normal oscila entre 60 y 100 latidos";
    expect(similitud(a, b)).toBeLessThan(0.2);
  });

  it("ignora acentos y mayusculas", () => {
    expect(similitud("Atencion Primaria", "atencion primaria")).toBe(1);
  });
});

describe("esDuplicado / dedupLote", () => {
  it("detecta duplicado contra existentes", () => {
    const existentes = ["El plazo general para resolver es de tres meses"];
    expect(esDuplicado("El plazo general para resolver es de tres meses?", existentes, 0.8)).toBe(
      true,
    );
  });

  it("dedupLote elimina duplicados dentro del lote y contra existentes", () => {
    const existentes = ["La proteccion de la salud se reconoce en el articulo 43"];
    const lote = [
      { enunciado: "El articulo 43 reconoce la proteccion de la salud" }, // dup vs existentes? distinto orden tokens
      { enunciado: "La frecuencia respiratoria normal es de 12 a 20 por minuto" },
      { enunciado: "La frecuencia respiratoria normal es de 12 a 20 por minuto" }, // dup interno
    ];
    const out = dedupLote(lote, existentes, 0.6);
    // Solo queda una de las de frecuencia respiratoria
    expect(out.length).toBe(1);
    expect(out[0].enunciado).toContain("frecuencia respiratoria");
  });
});
