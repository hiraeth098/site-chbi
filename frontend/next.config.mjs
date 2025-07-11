/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      // Para produção
      {
        protocol: 'http',
        hostname: '31.97.254.19', // O seu IP do VPS
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
  // A linha 'output: 'export',' foi removida daqui.
};

export default nextConfig;