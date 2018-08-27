const pixrem = require("pixrem");
const autoprefixer = require("autoprefixer");

module.exports = () => ({
  plugins: [
    pixrem(),
    autoprefixer({
      browsers: ["last 2 versions"]
    })
  ]
});
