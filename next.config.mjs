/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  basePath: isProd ? "/Experience_AI_LandingPage" : "",
  assetPrefix: isProd ? "/Experience_AI_LandingPage/" : "",
};

export default nextConfig;
