/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    output: 'standalone',
    env: {
        API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    },
}

module.exports = nextConfig