# TestSAS

App de test y simulacros para las oposiciones del **Servicio Andaluz de Salud (SAS)**,
pensada para la megaconvocatoria prevista en 2027.

Categorias iniciales: **Celador**, **TCAE**, **Enfermeria** y **Auxiliar Administrativo**.

## Stack

- **Next.js 15** (App Router, RSC) + React 19
- **Drizzle ORM** + **Postgres** (Neon free tier)
- Auth propia con **jose** (JWT en cookie httpOnly) + PBKDF2 (Web Crypto)
- **Stripe** (suscripcion Premium)
- **Anthropic Claude** (tutor IA que explica cada fallo citando el temario)
- **Tailwind** + shadcn/ui (estetica editorial, Newsreader)
- **Biome** (lint + format)

## Funcionalidades

- Motor de test: por tema, simulacro oficial cronometrado, test rapido, repaso de falladas.
- Correccion estilo SAS con **penalizacion** (cada fallo resta 1/3 por defecto).
- Estadisticas de progreso y deteccion de temas debiles.
- Repaso espaciado (SM-2 simplificado) sobre las preguntas falladas.
- Tutor IA premium con citacion obligatoria del temario.

## Arranque

```bash
pnpm install
cp .env.example .env.local   # rellena DATABASE_URL, AUTH_SECRET, etc.
pnpm db:push                 # crea el esquema en Postgres
pnpm db:seed                 # carga categorias, temas y preguntas de ejemplo
pnpm dev
```

Usuario admin de prueba tras el seed: `admin@testsas.es` / `admin1234`.

## Variables de entorno

Ver `.env.example`. Minimo para arrancar: `DATABASE_URL` y `AUTH_SECRET`.
El tutor IA requiere `ANTHROPIC_API_KEY`; la suscripcion, las claves de Stripe.

## Estructura

- `app/` — rutas (RSC por defecto), API routes y server actions.
- `components/` — UI compartida (cliente cuando hace falta interaccion).
- `lib/db/` — esquema Drizzle y cliente.
- `lib/actions/` — server actions (auth, test).
- `lib/ai/` — tutor IA (prompt versionado).
- `lib/content/` — banco de preguntas semilla.
- `scripts/seed.ts` — carga inicial de contenido.

> Proyecto independiente, sin vinculacion oficial con el SAS ni la Junta de Andalucia.
