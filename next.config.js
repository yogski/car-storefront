// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["res.cloudinary.com"],
//   },
// };

// module.exports = nextConfig;

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    SERVER_URL: process.env.SERVER_URL || 'http://localhost:3000', // Set your default server URL
  },
};
