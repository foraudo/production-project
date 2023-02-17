import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { BuildOptions } from "./types/config";

export function buildLoader({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2?|)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const babelLoader = {
    test: /.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };

  const scssLoader = buildCssLoader(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, scssLoader];
}
