/** @type {import('next').NextConfig} */
const nextConfig = {
  // Activa la exportación estática para GitHub Pages
  output: 'export',
  // Desactiva la optimización de imágenes (no soportada nativamente en GitHub Pages sin configuración adicional)
  images: {
    unoptimized: true,
  },
  // NOTA: Si tu repositorio en GitHub se llamará "nexo", y la URL será "https://[tu-usuario].github.io/nexo", 
  // descomenta y usa el basePath abajo:
  // basePath: '/nexo',
};

export default nextConfig;
