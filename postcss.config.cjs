const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [autoprefixer, cssnano, tailwindcss],
};
