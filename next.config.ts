/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL, // Accede según el entorno
    },
}

module.exports = nextConfig