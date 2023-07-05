import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types/config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Dotenv = require('dotenv-webpack');

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: paths.htmlFile }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:16].css',
      chunkFilename: '[name].[contenthash:16].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: paths.publicDirectory,
          to: paths.outputDirectory,
          globOptions: {
            ignore: ['**/*.js', '**/*.css', '**/*.html'],
          },
        },
      ],
    }),
    new Dotenv(),
  ];
}
