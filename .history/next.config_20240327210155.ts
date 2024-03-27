const isProd:boolean = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "https://github.com/The-Trifecta/Trifecta-Converter" : ""
};