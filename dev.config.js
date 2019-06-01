const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: ["./src/index"]
  },
  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              experimentalWatchApi: true
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ["syntax-dynamic-import"],

              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false
                  }
                ]
              ],
              plugins: [
                [
                  "transform-react-jsx",
                  {
                    pragma: "h"
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png)$/i,
        loader: "responsive-loader",
        options: {
          disable: true
        }
      },
      {
        test: /\.svg$/,
        use: [
          { loader: "file-loader" },
          {
            loader: "svgo-loader"
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name]~[sha512:hash:base64:7].[ext]",
            outputPath: "fonts"
          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()]
};
