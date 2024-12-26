/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export', // Habilita la exportación estática
    env: {
        API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL, // Accede según el entorno
    },
    images: {
        domains: ['localhost', 'mi-dominio.com'], // Configura tus dominios permitidos
    },
};

module.exports = nextConfig;
