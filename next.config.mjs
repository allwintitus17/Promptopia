// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   experimental: {
// //     appDir: true,
// //     serverComponentsExternalPackages: ["mongoose"],
// //   },
// //   images: {
// //     domains: ["lh3.googleusercontent.com"],
// //   },
// //   webpack(config) {
// //     config.experiments = {
// //       ...config.experiments,
// //       topLevelAwait: true,
// //     };
// //     return config;
// //   },
// // };

// // export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     serverComponentsExternalPackages: ["mongoose"],
//     missingSuspenseWithCSRBailout: false,
//   },
//   images: {
//     domains: ["lh3.googleusercontent.com"],
//   },
//   webpack(config) {
//     config.experiments = {
//       ...config.experiments,
//       topLevelAwait: true,
//     };
//     return config;
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
