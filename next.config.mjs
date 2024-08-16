/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: '**',
         },
      ],
   },
   experimental: {
      reactCompiler: true,
      // typedRoutes: true,
      cssChunking: 'loose',
      turbo: {
         resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json', '.css', '.scss'],
      },

      optimizePackageImports: ['swiper', 'swiper/react'],
   },
}

export default nextConfig
