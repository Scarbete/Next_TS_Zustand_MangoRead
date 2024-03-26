/** @type {import('next').NextConfig} */


const nextConfig = {
    env: {
        BASE_URL: process.env.BASE_URL,
        FRONT_URL: process.env.FRONT_URL
    },
    images: {
        domains: ['127.0.0.1'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8000',
                pathname: '/api/v1/**',
            },
        ],
    },
    reactStrictMode: false,
}

export default nextConfig