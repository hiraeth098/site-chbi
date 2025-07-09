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
      
      {
        protocol: 'http',
        hostname: '31.97.254.19',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },

  
  output: 'export',
};

export default nextConfig;
