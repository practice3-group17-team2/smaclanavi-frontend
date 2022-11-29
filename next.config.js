/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // NOTE ↓静的ファイルにする場合には画像の最適化を切る必要がある
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // },
};

module.exports = withVanillaExtract(nextConfig);
