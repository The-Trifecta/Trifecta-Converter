const isProd:boolean = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? '/your-project-name/' : ""
};