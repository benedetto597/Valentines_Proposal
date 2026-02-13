/** @type {import('next').NextConfig} */

// Extraer el hostname del URL de la API
const getBackendHost = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  try {
    const url = new URL(apiUrl);
    return url.hostname;
  } catch {
    return 'localhost';
  }
};

const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/images/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '3001',
        pathname: '/images/**',
      },
      {
        protocol: 'http',
        hostname: '::1',
        port: '3001',
        pathname: '/images/**',
      },
      // Permitir imágenes desde el backend en producción
      {
        protocol: 'https',
        hostname: getBackendHost(),
        pathname: '/images/**',
      },
      {
        protocol: 'http',
        hostname: getBackendHost(),
        pathname: '/images/**',
      },
      // Fallback para cualquier HTTPS
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  },
}

module.exports = nextConfig
