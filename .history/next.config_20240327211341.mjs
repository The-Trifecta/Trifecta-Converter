/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
    assetPrefix: isProd ? "https://github.com/The-Trifecta/Trifecta-Converter/" : "",
    output: "export",
};

export default nextConfig;
