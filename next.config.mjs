/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // web-push usa modulos nativos de Node; no debe empaquetarse en el bundle.
  serverExternalPackages: ["web-push"],
  experimental: {
    serverActions: { bodySizeLimit: "2mb" },
  },
};

export default nextConfig;
