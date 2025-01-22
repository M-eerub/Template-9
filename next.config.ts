/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React's Strict Mode for better error handling
  swcMinify: true, // Enables SWC-based minification
  compiler: {
      styledComponents: true, // Enables styled-components SWC transform
  },
  webpack(config:any) {
      // Customize Webpack config if needed
      return config;
  },
  images: {
      domains: ['cdn.sanity.io'], // Allow images from specified domains
  },
};

export default nextConfig;
