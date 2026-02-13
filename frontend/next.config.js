/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // Las imágenes se sirven desde la carpeta /public/images
    // No se necesita remotePatterns ya que usamos imágenes locales
    unoptimized: false,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  },
}

module.exports = nextConfig
