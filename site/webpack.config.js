const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const prod = process.env.NODE_ENV === "production";

function src(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  devServer: {
    historyApiFallback: true,
    static: './',
    hot: true
  },
  devtool: prod ? undefined : "source-map",
  entry: "./src/index.tsx",
  mode: prod ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx"],
        },
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                precision: 3,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  output: {
    path: __dirname + "/build",
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.ico",
      template: "./src/index.html",
    }),
  ],
  resolve: {
    alias: {
      components: src("components"),
      imgs: src("imgs"),
      styles: src("styles"),
      utils: src("utils"),
      views: src("views"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
