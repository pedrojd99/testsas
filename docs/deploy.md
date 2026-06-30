# Despliegue de TestSAS (Vercel + Neon) y APK

TestSAS es Next.js 15 (SSR). Se despliega en **Vercel** (web) con **Neon** (Postgres
serverless, free tier). Una vez en produccion, la APK de Android apunta a esa URL.

## 1. Base de datos (Neon)

1. Crea un proyecto en https://neon.tech (region EU, p. ej. Frankfurt).
2. Copia la **connection string con pooler** (la que incluye `-pooler` en el host):
   `postgresql://USER:PASS@ep-xxx-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require`
   El pooler es importante para serverless (el cliente ya usa `prepare:false`).

## 2. Crear el esquema y poblar (desde tu maquina, apuntando a Neon)

```bash
# .env.local con la DATABASE_URL de Neon (la del pooler)
pnpm db:push            # crea todas las tablas en Neon
pnpm db:seed            # categorias + temas oficiales + admin demo
pnpm db:seed-temario    # temario comun (fuente de preguntas)
pnpm db:seed-apuntes    # apuntes de estudio del comun

# Opcional, con ANTHROPIC_API_KEY en .env.local:
pnpm gen comun          # genera el banco de preguntas del comun
pnpm gen-temario comun  # genera los apuntes del resto de temas
```

## 3. Desplegar en Vercel

1. Sube el repo a GitHub e importa el proyecto en https://vercel.com.
   Framework detectado: Next.js. Region fijada a `cdg1` (Paris) en `vercel.json`.
2. Configura las **variables de entorno** (Project Settings > Environment Variables):

   | Variable | Valor |
   | --- | --- |
   | `DATABASE_URL` | connection string del **pooler** de Neon |
   | `AUTH_SECRET` | `openssl rand -base64 32` |
   | `ANTHROPIC_API_KEY` | clave de Anthropic (tutor + generadores) |
   | `NEXT_PUBLIC_APP_URL` | `https://<tu-app>.vercel.app` |
   | `STRIPE_SECRET_KEY` | (si activas pagos) |
   | `STRIPE_WEBHOOK_SECRET` | (tras crear el webhook) |
   | `STRIPE_PRICE_PREMIUM_MENSUAL` | id del precio mensual |
   | `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | clave publicable de Stripe |

3. Deploy. El build (`next build`) no necesita BD (las paginas son dinamicas).

### Stripe (opcional)

- Crea un producto/precio mensual y copia su `price_...` en `STRIPE_PRICE_PREMIUM_MENSUAL`.
- Crea un webhook a `https://<tu-app>.vercel.app/api/stripe/webhook` con los eventos
  `checkout.session.completed`, `customer.subscription.updated/deleted`. Copia el
  signing secret a `STRIPE_WEBHOOK_SECRET`.

## 4. Generar la APK contra produccion

```bash
# bash
CAP_SERVER_URL=https://<tu-app>.vercel.app pnpm cap:sync
pnpm android:apk
# -> android/app/build/outputs/apk/debug/app-debug.apk
```

(Requiere JDK 17 + Android Studio/SDK; ver docs/android.md.)

## Notas

- Migraciones futuras: `pnpm db:push` apuntando a la `DATABASE_URL` de Neon.
- El cliente de BD usa pool `max: 1` en produccion para no agotar el pooler.
- Para un dominio propio, ajusta `NEXT_PUBLIC_APP_URL` y `CAP_SERVER_URL`.
