/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig,{
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'crests.football-data.org',
              port: '',
            //   pathname: '/account123/**',
            },
          ],
        },
}
