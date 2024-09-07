// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//       appDir: true,
//       serverComponentsExternalPackages: ["mongoose"],
//     },
//     images: {
//       domains: ['lh3.googleusercontent.com'],
//     },
//     webpack(config) {
//       config.experiments = {
//         ...config.experiments,
//         topLevelAwait: true,
//       };
//       return config;
//     }
// };

// // Export the config as the default export
// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Ensure you're using a compatible Next.js version for this feature
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"], // Ensure your project requires this
  },
  images: {
    // Define external image domains allowed by Next.js for optimization
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    // Enabling top-level await for better async functionality
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

// Export the config as default
export default nextConfig;
