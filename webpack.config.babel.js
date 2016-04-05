export default {
  entry: "./src/client.js",
  output: {
    path: "./src",
    filename: "bundle.js",
  },
  devServer: {
    inline: true,
    contentBase: "./src",
    port: 3000,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
      },
      {
        test: /\.css$/,
        loader: "style!css?modules",
      }
    ]
  }
}
