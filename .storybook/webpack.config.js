const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ["style", "raw"]
      }
    ]
  }
}
