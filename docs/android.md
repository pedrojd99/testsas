# Generar la APK de Android (TestSAS)

TestSAS es una app SSR (server actions, base de datos, IA): **no** se puede
exportar como sitio estatico. La APK es un **envoltorio nativo** (Capacitor) que
abre la app ya desplegada en una WebView a pantalla completa. Tu codigo sigue
siendo el mismo TypeScript; Android solo aporta el contenedor.

> Alternativa sin APK: la app es una **PWA instalable**. En Chrome de Android
> aparece "Instalar app" y se anade al cajon de aplicaciones con su icono. Para
> muchos usuarios esto basta y no requiere nada de lo siguiente.

## Requisitos (en tu maquina, no en el repo)

- **Node 20+** (Capacitor 6, ya fijado en el proyecto).
- **JDK 17** (Temurin/OpenJDK).
- **Android Studio** (incluye el Android SDK y `gradle`).
- Variable `JAVA_HOME` apuntando al JDK 17.

## 1. Desplegar la app

La APK carga una URL. Despliega primero la web (p. ej. Vercel + Neon) y anota la
URL de produccion, por ejemplo `https://testsas.vercel.app`.

## 2. Apuntar el contenedor a esa URL

```bash
# PowerShell
$env:CAP_SERVER_URL = "https://testsas.vercel.app"
pnpm cap:sync

# bash
CAP_SERVER_URL=https://testsas.vercel.app pnpm cap:sync
```

`cap sync` copia la configuracion al proyecto Android (`android/`).

## 3. Compilar la APK

Opcion A — linea de comandos (APK de depuracion, instalable directamente):

```bash
pnpm android:apk
# APK generada en:
# android/app/build/outputs/apk/debug/app-debug.apk
```

Copia ese `.apk` al movil y abrelo para instalar (activa "origenes
desconocidos"). Para Play Store necesitas un `.aab` firmado (`bundleRelease`).

Opcion B — Android Studio:

```bash
pnpm cap:open    # abre el proyecto en Android Studio
```

Luego *Build > Build Bundle(s) / APK(s) > Build APK(s)*.

## 4. Icono y nombre

- Nombre y `appId` (`es.testsas.app`) se definen en `capacitor.config.ts`.
- Para el icono del lanzador con la cruz sanitaria de la marca, genera los
  mipmaps desde un PNG de 1024x1024:

  ```bash
  pnpm add -D @capacitor/assets
  # coloca un icono en resources/icon.png (1024x1024) y:
  npx @capacitor/assets generate --android
  ```

## Notas

- La carpeta `android/` esta versionada; los artefactos de build (`build/`,
  `.gradle`, `*.apk`) estan en `.gitignore`.
- Si cambias `CAP_SERVER_URL`, vuelve a ejecutar `pnpm cap:sync`.
- La WebView usa HTTPS; no actives `cleartext` salvo para pruebas locales.
