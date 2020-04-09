const path = require("path");

module.exports = {
  mode: "development",
  context: __dirname,
  entry: "./app/index.jsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  performance: {
    hints: "warning"
  },
  devtool: "source-map",
  target: "web",
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
