/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"], // Fake Store API görselleri için izin verildi
  },
};

export default nextConfig;
