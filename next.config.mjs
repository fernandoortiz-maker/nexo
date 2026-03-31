/** @type {import('next').NextConfig} */
const nextConfig = {
  // Activa la exportación estática para GitHub Pages
  output: 'export',
  // Desactiva la optimización de imágenes (no soportada nativamente en GitHub Pages sin configuración adicional)
  images: {
    unoptimized: true,
  },
  // Descomentado para GitHub Pages
  basePath: '/nexo',
};

export default nextConfig;
